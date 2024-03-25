"use strict";
r.r(t), r.d(t, {
  default: function() {
    return n
  }
});
var n = function(e) {
  return function(t, r, n) {
    for (var a = -1, o = Object(t), i = n(t), u = i.length; u--;) {
      var l = i[e ? u : ++a];
      if (!1 === r(o[l], l, o)) break
    }
    return t
  }
}