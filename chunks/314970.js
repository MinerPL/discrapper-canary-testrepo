"use strict";
var r = n("911718"),
  i = n("214401"),
  o = i(r("String.prototype.indexOf"));
e.exports = function(e, t) {
  var n = r(e, !!t);
  return "function" == typeof n && o(e, ".prototype.") > -1 ? i(n) : n
}