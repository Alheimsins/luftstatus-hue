const axios = require('axios')
const resolveUrl = require('./resolve-url')
const { token } = require('../config.json')

module.exports = async colors => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  }
  const url = resolveUrl()
  const { data } = await axios.put(url, colors)
  return data
}
