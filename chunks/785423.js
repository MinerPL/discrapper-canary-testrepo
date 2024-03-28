"use strict";
r.r(t);
var n = /\s/;
t.default = function(e) {
  for (var t = e.length; t-- && n.test(e.charAt(t)););
  return t
}