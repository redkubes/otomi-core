#!/usr/bin/env bash

command=$1
function usage() {
    echo "USAGE: source bin/otomi"
    exit 1
}
if [ "$0" = "$BASH_SOURCE" ]; then
    echo "Error: Script must be sourced"
    exit 1
elif [ $# -ne 1 ]; then
    usage
elif [ -z ${command} ]; then
    usage
elif ! [ -f ${command} ]; then
    usage
elif ! yq v ${command} 2>/dev/null ; then
    echo "${command} contains invalid yaml" >&2
    exit 1
fi

CURR_SHELL=$(ps -cp "$$" -o command="")

if [[ "${CURR_SHELL}" == "zsh" ]]; then
    if ! command -v compinit &> /dev/null; then
        autoload -Uz compinit
    fi
    compinit -i
fi 

. bin/common.sh

function eecho() {
    echo $@ >&2
}

function get_keys() {
    # set -x
    local key pre_key post_key out ret_val jq_cmd
    key=$1 
    pre_key=${key%.*}
    post_key=${key##*.}
    if [[ -z $key ]]; then
        jq_cmd=". | keys[] | @sh"
    else
        jq_cmd="${pre_key:-.} | with_entries(select(.key | startswith(\"${post_key}\"))) | if . == {} then [] else with_entries(select(. | .key == \"${post_key}\")) |  if . == {} then null elif .\"${post_key}\" == null then [] else .\"${post_key}\" end end | keys[] | @sh"
    fi
    
    out=$(yq r -j ${command} | jq -r "${jq_cmd}" 2>/dev/null)
    ret_val=$?
    out=($(echo "${out[@]}" | tr -d \'\"))
    
    echo "${out[@]}"
    return $ret_val
}

function get_keys_checking() {
    # set -x
    local input opts opt_keys options_ret_val
    input="$1"
    opts=".${input##*/}"
    opt_keys="$(get_keys "$opts")"
    options_ret_val=$?
    opt_keys=(${opt_keys[@]})
    if [ $options_ret_val -ne 0 ]; then
        opts=${opts%.*}
        opt_keys=($(get_keys ${opts}))
    fi
    # echo "ret_val(${options_ret_val})" >&2
    echo "${opt_keys[@]}"
}
function _zsh_get_desc() {
    local key arg out ret_val jq_cmd
    # echo "key: $1"
    key=".${1}"
    arg="\"$2\""

    jq_cmd="${key}.${arg} // \"\"| @sh"
    out=$(yq r -j ${command} | jq -r "${jq_cmd}" 2>/dev/null)
    ret_val=$?
    out=($(echo "${out[@]}" | tr -d \'\"))
    echo "${out}"
}
function _zsh_get_arg_desc() {
    # set -x
    local out=$(_zsh_get_desc $1 $2)
    if [[ -n ${out} ]]; then 
        echo "${2}[${out}]"
    else
        echo "${2}[]"
    fi
}

function _zsh_get_cmd_desc() {
    # set -x
    local out=$(_zsh_get_desc $1 $2)
    if [[ -n ${out} ]]; then 
        echo "${2}:${out}"
    else
        echo "${2}"
    fi

}
function join_by { local IFS="$1"; shift; echo "$*"; }

function _autocomplete_bash() {
    local cur prev words word_str opts opt_keys options_ret_val
    COMPREPLY=()
    cur="${COMP_WORDS[COMP_CWORD]}"
    prev="${COMP_WORDS[COMP_CWORD-1]}"
    words=("${COMP_WORDS[@]}")
    word_str=$(join_by . ${words[@]})

    opt_keys=$(get_keys_checking "$word_str")
    opt_keys=$(join_by " " ${opt_keys[@]})
    # echo "ECHO TEST: cur(${cur}) prev(${prev}) words(${word_str}) last(${word_str##*/}) opts(${opts})" >&2
    # local CR CRR
    # CR="$(compgen -W "${opt_keys}" -- ${cur} || echo "")"
    # CRR=$?
    # echo "exit($CRR) CR(${CR[@]})" >&2
    # echo "exit($?) ${CR[@]}" >&2
    COMPREPLY=( $(compgen -W "${opt_keys}" -- ${cur} || echo "") )
    # set +x
    return 0
}

function _autocomplete_zsh() {
    local cur prev word_str opts opt_keys options_ret_val command_keys argument_keys
    local curcontext="$curcontext" ret=1
    local -a state line commands
    local context state_descr
    typeset -A opt_args

    cur=${words[CURRENT]}
    prev=${words[CURRENT-1]}
    word_str=$(join_by . ${words[@]})
    opts=${word_str##*/}


    opt_keys=($(get_keys_checking "$word_str"))
    command_keys=()
    argument_keys=()
    for i in {1..$#opt_keys}; do
        opt_key=${opt_keys[i]}
        if [[ "${opt_key}" =~ ^\- ]]; then
            argument_keys+=("$(_zsh_get_arg_desc $opts $opt_key)")
        else
            command_keys+=("$(_zsh_get_cmd_desc $opts $opt_key)")
        fi
    done

    _arguments -C \
        "1:cmd:->cmds" \
        "*:: :->args" && ret=0

    # eecho "$opts"
    # eecho "context(${curcontext}) line(${line[2]}) _arguments(${retval})" "${argument_keys[@]}"
    # echo -e "\nstate($state) optkey(${argument_keys[@]}) " >&2
    local dots=${#${opts//[^.]}}
    local retval cmd_arg
    # eecho "$dots"
    # for (( i=0; i<=$dots; i++)); do
    # do
    # eecho "dots($dots)"
    case "$state" in
        (cmds)
            _describe -t command_keys 'commands' command_keys
            # cmd_arg=$([[ $i -eq $dots ]] && echo "1:cmd:->cmds")
            # shift words
            _arguments ${argument_keys[@]} \
            # "*:: :->args" && ret=0
        ;;
        (args)
            # _arguments \
            # ${argument_keys[@]} \
            # "*:: :->args" && ret=0
            [[ ${#command_keys[@]} -gt 0 ]] && _describe -t command_keys 'commands' command_keys
            # cmd_arg=$([[ $i -eq $dots ]] && echo "1:cmd:->cmds")
            # shift words
            _arguments ${argument_keys[@]} && ret=0
            # retval=$?
            # # eecho "_arguments($retval) -C " ${cmd_arg} " ${argument_keys[@]} && ret=0"
            
            ;;
    esac
    # done

    return $ret
}

keys=$(get_keys)
for key in ${keys}; do
    case "${CURR_SHELL}" in
      bash)
        complete -F _autocomplete_bash "$key"
        ;;
      zsh)
        compdef _autocomplete_zsh "$key" "bin/$key"
        ;;
      *)
        echo "${CURR_SHELL} doesn't have an autocomplete implementation yet"
        exit 1
        ;;
    esac
done

echo "Otocomplete is loaded, otomi autocompletion has been enabled for bash and zsh"
export OTOMI_OTOCOMPLETE_LOADED=1
