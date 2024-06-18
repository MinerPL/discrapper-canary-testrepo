"use strict";
var r = /[A-Z]/g,
  n = /^ms-/,
  i = {};

function o(e) {
  return "-" + e.toLowerCase()
}
t.Z = function(e) {
  if (i.hasOwnProperty(e)) return i[e];
  var t = e.replace(r, o);
  return i[e] = n.test(t) ? "-" + t : t
}