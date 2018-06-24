const config = require('./config.json')
const setColor = require('./lib/set-color')
const getAreaColor = require('./lib/get-area-color')
const convertColor = require('./lib/convert-color')

const switchColor = async colors => {
  try {
    await setColor(colors)
    console.log(`Light switched to ${JSON.stringify(colors)}`)
  } catch (error) {
    console.error(error)
  }
}

const getColor = async () => {
  try {
    const color = await getAreaColor()
    const colors = convertColor(color)
    console.log(color)
    return colors
  } catch (error) {
    console.error(error)
    return {
      "sat": 140,
      "bri": 254,
      "hue": 14956
    }
  }
}

const setLight = async () => {
  try {
    const color = await getColor()
    switchColor(color)
  } catch (error) {
    console.error(error)
  }
}

setLight()

setInterval(() => setLight(), 1000 * 60 * config.pollIntervalMinutes)
