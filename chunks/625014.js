"use strict";
var r = n("96403"),
  a = n("463374"),
  o = n("342545"),
  i = n("219479"),
  l = r("".replace),
  u = RegExp("^[" + i + "]+"),
  s = RegExp("(^|[^" + i + "])[" + i + "]+$"),
  c = function(e) {
    return function(t) {
      var n = o(a(t));
      return 1 & e && (n = l(n, u, "")), 2 & e && (n = l(n, s, "$1")), n
    }
  };
e.exports = {
  start: c(1),
  end: c(2),
  trim: c(3)
}