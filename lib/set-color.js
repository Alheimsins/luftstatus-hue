const axios = require('axios')
const resolveUrl = require('./resolve-url')
const { token } = require('../config.json')

module.exports = colors => {
  return new Promise(async (resolve, reject) => {
    console.log(token)
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
    try {
      const url = resolveUrl()
      const { data } = await axios.put(url, colors)
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}
