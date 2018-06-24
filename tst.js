const getAreaColor = require('./lib/get-area-color')
const convertToHSB = require('./lib/convert-color')
const setColor = require('./lib/set-color')

getAreaColor()
  .then(async data => {
    const colors = convertToHSB(data)
    console.log(colors)
    await setColor(colors)
  })
  .catch(console.error)
