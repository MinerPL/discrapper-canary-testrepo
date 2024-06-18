"use strict";
var n = e(936940),
  o = e(879);
t.exports = !n(function() {
  var t = Error("a");
  return !("stack" in t) || (Object.defineProperty(t, "stack", o(1, 7)), 7 !== t.stack)
})