# Bitkub API javascript library

Here come a Bitkub js library for browser and nodejs

### Installing

Using npm

```bash
npm install bitkub
```

Using yarn

```
yarn add bitkub
```

## Example

```javascript
var Bitkub = require('bitkub')
var client = new Bitkub({
  api_key: 'my_api_key',
  api_secret: 'my_api_secret',
})

client.server_time().then(server_time => {
  console.log(server_time)
})
```
