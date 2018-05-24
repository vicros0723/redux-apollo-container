Reference for [this blog post](https://spin.atomicobject.com/2018/05/23/redux-apollo-containers/)

# Requirements

- node v8.11.1 (can probably be older)
- yarn v1.5.1 (can probably be older)

# Building

Run the `install` task first to pull down all the node modules
```bash
yarn install
```
or simply
```bash
yarn
```

Run the `build:client`, `build:server`, or `build:all` task build the client, server, or both respectively. All build tasks will first clean the build directory by default.
```bash
yarn build:client
```

```bash
yarn build:server
```

```bash
yarn build:all
```

# Running

Run the `start` task to start the node server with the webpacked, compiled javascript. This will automatically clean and build the client and server.
```bash
yarn start
```

You should now be able to navigate to [localhost:8080](http://localhost:8080)
