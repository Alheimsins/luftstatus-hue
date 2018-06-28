const config = require('../config.json')

module.exports = () => {
  if (config.token) {
    return `https://api.meethue.com/bridge/${config.username}/lights/${config.light}/state`
  } else {
    return `http://${config.bridge}/api/${config.username}/lights/${config.light}/state`
  }
}
