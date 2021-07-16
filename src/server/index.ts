/* eslint-disable @typescript-eslint/require-await */
import express, { Request, Response } from 'express'
import { Server } from 'http'
import { preCommit } from '../cmd/commit'
import { decrypt, encrypt } from '../common/crypt'
import { terminal } from '../common/debug'
import { defaultBasicArguments } from '../common/no-deps'

const debug = terminal('server')
const app = express()
let server: Server

export const stopServer = (): void => {
  server?.close()
}

app.get('/', async (req: Request, res: Response) => {
  return res.send({ status: 'ok' })
})

app.get('/decrypt', async (req: Request, res: Response) => {
  try {
    await decrypt()
    res.status(200).send('ok')
  } catch (error) {
    res.status(500).send(error)
  }
})
app.get('/encrypt', async (req: Request, res: Response) => {
  try {
    await encrypt()
    res.status(200).send('ok')
  } catch (error) {
    res.status(500).send(error)
  }
})

app.get('/pre-commit', async (req: Request, res: Response) => {
  try {
    await preCommit(defaultBasicArguments)
    res.status(200).send('ok')
  } catch (error) {
    res.status(500).send(error)
  }
})

export const startServer = (): void => {
  server = app.listen(192019, '0.0.0.0')
  debug.log(`Container listening on http://0.0.0.0:192019`)
}

export default startServer
