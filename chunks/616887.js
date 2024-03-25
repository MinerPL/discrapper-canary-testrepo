"use strict";
r.r(t), r.d(t, {
  default: function() {
    return i
  }
}), r("424973"), r("781738");
var n = r("599436"),
  a = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  o = /\\(\\)?/g,
  i = (0, n.default)(function(e) {
    var t = [];
    return 46 === e.charCodeAt(0) && t.push(""), e.replace(a, function(e, r, n, a) {
      t.push(n ? a.replace(o, "$1") : r || e)
    }), t
  })