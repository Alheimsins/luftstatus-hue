const axios = require('axios')
const config = require('../config.json')

async function addUser () {
  // const buttonUrl = `http://${config.bridge}/api`
  const userUrl = `http://${config.bridge}/api`
  // const { data: button } = await axios.put(buttonUrl, {linkbutton: true})
  // console.log(JSON.stringify(button, null, 2))
  const { data: user } = await axios.post(userUrl, { devicetype: 'luftstatus' })
  console.log(JSON.stringify(user, null, 2))
}

addUser()
