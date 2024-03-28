"use strict";
var n = r("264838"),
  i = r("537763");
t.exports = function(t) {
  for (var e = t; e && e !== n(t).documentElement;) {
    var r = i(e);
    if (null != r) return r;
    e = e.parentNode
  }
  return null
}