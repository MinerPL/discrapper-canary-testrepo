"use strict";
r.r(t), r.d(t, {
  default: function() {
    return a
  }
});
var n = /\s/,
  a = function(e) {
    for (var t = e.length; t-- && n.test(e.charAt(t)););
    return t
  }