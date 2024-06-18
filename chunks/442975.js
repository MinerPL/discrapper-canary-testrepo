"use strict";
var n = r(936940);
t.exports = !n(function() {
  function t() {}
  return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
})