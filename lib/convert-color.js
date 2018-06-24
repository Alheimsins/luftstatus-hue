function hexToRgb (hex) {
  var bigint = parseInt(hex, 16)
  var r = (bigint >> 16) & 255
  var g = (bigint >> 8) & 255
  var b = bigint & 255

  return [r, g, b]
}

// From https://github.com/usolved/cie-rgb-converter
function rgbToCie (r, g, b) {
  // Apply a gamma correction to the RGB values, which makes the color more vivid and more the like the color displayed on the screen of your device
  const red = (r > 0.04045) ? Math.pow((r + 0.055) / (1.0 + 0.055), 2.4) : (r / 12.92)
  const green = (g > 0.04045) ? Math.pow((g + 0.055) / (1.0 + 0.055), 2.4) : (g / 12.92)
  const blue = (b > 0.04045) ? Math.pow((b + 0.055) / (1.0 + 0.055), 2.4) : (b / 12.92)

  // RGB values to XYZ using the Wide RGB D65 conversion formula
  const X = red * 0.664511 + green * 0.154324 + blue * 0.162028
  const Y = red * 0.283881 + green * 0.668433 + blue * 0.047685
  const Z = red * 0.000088 + green * 0.072310 + blue * 0.986039

  // Calculate the xy values from the XYZ values
  let x = (X / (X + Y + Z)).toFixed(4)
  let y = (Y / (X + Y + Z)).toFixed(4)

  if (isNaN(x)) { x = 0 }

  if (isNaN(y)) { y = 0 }

  return {
    xy: [parseFloat(x), parseFloat(y)]
  }
}

module.exports = hex => {
  const rgb = hexToRgb(hex.toString())
  return rgbToCie(...rgb)
}
