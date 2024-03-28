"use strict";
var r = n("821819"),
  a = n("241777");
e.exports = !r(function() {
  var e = Error("a");
  return !("stack" in e) || (Object.defineProperty(e, "stack", a(1, 7)), 7 !== e.stack)
})