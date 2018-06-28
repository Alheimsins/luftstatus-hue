const axios = require('axios')
const config = require('../config.json')
const url = `http://${config.bridge}/api/${config.username}/lights`

axios.get(url).then(result => {
  console.log(JSON.stringify(result.data, null, 2))
}).catch(console.error)
