# DemocracyOS Config Singleton Object

## Usage:

1 · Install

```json
npm i -S dos-config
```

2 · Create your configuration files following the conventions of [DemocracyOS/config](https://github.com/DemocracyOS/config#usage).

3 · Load your config files:

```javascript
require('dos-config')()
```

4 · Profit from singletonation

```javascript
var config = require('dos-config')

if (config.logSomething) {
  console.log('something!')
}
```

## License
* MIT
* © 2016 [Demoracia en Red](http://democraciaenred.org)
* More details under [LICENSE](https://github.com/DemocracyOS/config/blob/master/LICENSE)
