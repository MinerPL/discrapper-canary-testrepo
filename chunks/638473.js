"use strict";
var r = n(809948),
  i = n(670097);
t.Z = function(e, t) {
  var n = -1,
    a = (0, i.Z)(e) ? Array(e.length) : [];
  return (0, r.Z)(e, function(e, r, i) {
    a[++n] = t(e, r, i)
  }), a
}