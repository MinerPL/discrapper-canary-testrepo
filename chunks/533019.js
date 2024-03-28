"use strict";
r.r(t);
var n = /[A-Z]/g,
  i = /^ms-/,
  o = {};

function s(e) {
  return "-" + e.toLowerCase()
}
t.default = function(e) {
  if (o.hasOwnProperty(e)) return o[e];
  var t = e.replace(n, s);
  return o[e] = i.test(t) ? "-" + t : t
}