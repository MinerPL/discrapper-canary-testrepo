"use strict";
var n = r(660610);
t.exports = function t(e) {
  if (n(e)) {
    var r = e.getAttribute("data-offset-key");
    if (r) return r;
    for (var i = 0; i < e.childNodes.length; i++) {
      var o = t(e.childNodes[i]);
      if (o) return o
    }
  }
  return null
}