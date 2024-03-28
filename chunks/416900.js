"use strict";
r.r(t);
var n = r("934563"),
  a = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  o = /\\(\\)?/g,
  i = (0, n.default)(function(e) {
    var t = [];
    return 46 === e.charCodeAt(0) && t.push(""), e.replace(a, function(e, r, n, a) {
      t.push(n ? a.replace(o, "$1") : r || e)
    }), t
  });
t.default = i