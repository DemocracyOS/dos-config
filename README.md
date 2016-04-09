# DemocracyOS Config Singleton Object

## Usage:

1 · Add to your `package.json`:

```json
{
  ...
  "dependencies": {
    "config": "DemcoracyOS/config-singleton"
  }
  ...
}
```

2 · Create your configuration files following the conventions of [DemocracyOS/config](https://github.com/DemocracyOS/config#usage).

3 · Load your config files:

```javascript
require('config')({
  path: __dirname + 'path/to/your/config/files/folder'
})
```

4 · Profit from singletonation

```javascript
var config = require('config')

if (config.logSomething) {
  console.log('something!')
}

```

## License
* MIT
* © 2016 [Demoracia en Red](http://democraciaenred.org)
* More details under [LICENSE](https://github.com/DemocracyOS/config/blob/master/LICENSE)
