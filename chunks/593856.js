"use strict";
r.r(t);
t.default = function(e) {
  return function(t, r, n) {
    for (var a = -1, o = Object(t), i = n(t), l = i.length; l--;) {
      var u = i[e ? l : ++a];
      if (!1 === r(o[u], u, o)) break
    }
    return t
  }
}