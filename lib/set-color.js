const Hue = require('philips-hue')
const config = require('../config.json')
const hue = new Hue()

module.exports = colors => {
  return new Promise(async (resolve, reject) => {
    hue.bridge = config.bridge
    hue.username = config.username
    const light = hue.light(config.light)
    try {
      const result = await light.setState(colors)
      resolve(result)
    } catch (error) {
      reject(error)
    }
  })
}
