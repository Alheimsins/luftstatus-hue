const axios = require('axios')
const config = require('../config.json')

module.exports = async () => {
  try {
    const { data } = await axios(config.serviceUrl)
    const area = data.areas.find(area => area.area.toLowerCase() === config.area.toLowerCase())
    console.log(`Area: ${area.area}`)
    return area.color
  } catch (error) {
    throw error
  }
}
