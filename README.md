# DOS Config

Library to configure node apps. At its core uses [DemocracyOS/config](https://github.com/DemocracyOS/config) but with sane defaults.

Keep your default configs on `config/defaults.json`, override them with `config/{NODE_ENV}.json` or with environment variables.

## Getting Started

1 · Install it: `npm install --save dos-config`

2 · Run the command: `./node_modules/.bin/dos-config-init`. It will create the folder `config` with the most basic defaults.

3 · Profit 🙌

```javascript
var config = require('dos-config')

if (config.port) {
  console.log(`The server should run at port ${config.port}. Go code it now.`)
}
```

## Configuring your app

First of all, `dos-config` will look for the `config/defaults.json` file, which will define the configuration structure with the default values.

Here's a complete example, keep in mind that the keys of your json files should always be `camelCase`:

```json
{
  "port": 3000,
  "mongoUrl": "mongodb://localhost/DemocracyOS-dev",
  "staff": [
    "some@example.com",
    "another@example.com"
  ],
  "connectionData": {},
  "auth": {
    "user": "Fring",
    "password": "always-be-secure-123!$"
  }
}
```

* The most primitive values are `Integer` or `String`. Which work as expected.
* `Array` values can only have `String`s inside.
* The empty object `{}` means that it doesn't have a default value, but can be overriden by absolutely any JSON.

After defining your `defaults`, you can override them using another json file on your current environment. For example, if you are on your development machine, create `config/development.json` and add there only the values you want to change (**always remember to .gitignore this file!**):

```json
{
  "port": 8888,
  "connectionData": {
    "domain": "localhost",
    "port": 27099,
    "user": "root"
  }
}
```

Excellent! Now you only need to configure your production server.

You have two options; first, do the same as development, but create the file `config/production.json` on your server, and make sure the `NODE_ENV` environment variable is set to `production`.

The other and *recommended* option for production, is to use [environment variables](https://en.wikipedia.org/wiki/Environment_variable). Here's an example of all the variables you should set to override the previous example:

```
PORT=8080
MONGO_URL='mongodb://user:pass@mongoserver/DemocracyOS-production'
STAFF=some@example.com,another@example.com
CONNECTION_DATA='{"domain": "127.123.123.123", "port": 3412}'
AUTH_USER='Admin'
AUTH_PASSWORD='some-production-password'
```

* All the keys are transformed from `camelCase` to `CONSTANT_CASE`.
* Nested values, just add a `_`, for example from `auth.user` as `AUTH_USER`.
* `Array`s should be divided by commas `,`
* And JSON values are a JSON string.

## DOS Config Options

You can only configure the default location of your `config` folder setting the environment variable `CONFIG_PATH`, e.g: `CONFIG_PATH=/usr/src/config`. On that folder it will look for the `defaults.json` and optionally for the `{NODE_ENV}.json`.

If you want something more flexible, just use https://github.com/DemocracyOS/config

## License
* MIT
* © 2017 [Demoracia en Red](http://democraciaenred.org)
* More details under [LICENSE](https://github.com/DemocracyOS/config/blob/master/LICENSE)
