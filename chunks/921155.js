"use strict";
var r = n(880051),
  i = n(173472),
  a = Object.prototype.hasOwnProperty;
t.Z = function(e) {
  if (!(0, r.Z)(e)) return (0, i.Z)(e);
  var t = [];
  for (var n in Object(e)) a.call(e, n) && "constructor" != n && t.push(n);
  return t
}