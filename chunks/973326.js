"use strict";
var e = r("936940"),
  i = r("161581").RegExp;
t.exports = e(function() {
  var t = i(".", "s");
  return !(t.dotAll && t.exec("\n") && "s" === t.flags)
})