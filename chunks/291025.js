"use strict";
var r = n("37549")("%Array%"),
  i = !r.isArray && n("812095")("Object.prototype.toString");
e.exports = r.isArray || function(e) {
  return "[object Array]" === i(e)
}