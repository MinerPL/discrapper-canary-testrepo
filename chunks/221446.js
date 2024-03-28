"use strict";
var r = n("141603"),
  a = n("688313"),
  o = n("65007"),
  i = n("349446");
e.exports = function(e, t, n) {
  for (var l = a(t), u = i.f, s = o.f, c = 0; c < l.length; c++) {
    var d = l[c];
    !r(e, d) && !(n && r(n, d)) && u(e, d, s(t, d))
  }
}