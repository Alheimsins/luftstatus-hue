const axios = require('axios')
const upnpUrl = 'http://www.meethue.com/api/nupnp'

axios(upnpUrl).then(result => {
  console.log(JSON.stringify(result.data, null, 2))
}).catch(console.error)
