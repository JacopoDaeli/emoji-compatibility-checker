'use strict'

module.exports = function (_emoji) {
  var emoji = _emoji || '\ud83d\ude04'
  
  function hasColor (ctx, width) {
    var data = ctx.getImageData(0, 0, width, width).data
    for (var i = 0; i < data.length; i += 4) {
      if (data[i] != data[i + 1] && data[i] != data[i + 2]) {
        return true
      }
    }
    return false
  }

  try {
    var ctx = document.createElement('canvas').getContext('2d')
    ctx.textBaseline = 'top'
    ctx.fillText(emoji, 0, 0)

    return hasColor(ctx, 10)
  } catch (ex) {
    return false
  }
}
