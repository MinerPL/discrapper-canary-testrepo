"use strict";
r.r(t);
var n = r("548015"),
  a = Object.prototype,
  o = a.hasOwnProperty,
  i = a.toString,
  l = n.default ? n.default.toStringTag : void 0;
t.default = function(e) {
  var t = o.call(e, l),
    r = e[l];
  try {
    e[l] = void 0;
    var n = !0
  } catch (e) {}
  var a = i.call(e);
  return n && (t ? e[l] = r : delete e[l]), a
}