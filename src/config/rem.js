(function (doc, win) {
  var docEl = doc.documentElement
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) {
      return null
    } else {
      docEl.style.fontSize = 20 * (clientWidth / 320) + 'px'
    }
  }
  if (!doc.addEventListener) {
    return null
  } else {
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
  }
})(document, window)
