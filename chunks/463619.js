"use strict";
var r = n(548015),
  i = Object.prototype,
  a = i.hasOwnProperty,
  o = i.toString,
  s = r.Z ? r.Z.toStringTag : void 0;
t.Z = function(e) {
  var t = a.call(e, s),
    n = e[s];
  try {
    e[s] = void 0;
    var r = !0
  } catch (e) {}
  var i = o.call(e);
  return r && (t ? e[s] = n : delete e[s]), i
}