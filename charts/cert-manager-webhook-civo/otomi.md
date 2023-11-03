Chart customizations for Otomi:

- Add policy ignore to the `deployment.yaml` template line 18/19:

```
      annotations: 
        policy.otomi.io/ignore: psp-allowed-users
```