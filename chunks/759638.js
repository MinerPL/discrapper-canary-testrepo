"use strict";
r.r(t);
var n = r("790215");
t.default = function(e, t) {
  var r = this.__data__,
    a = (0, n.default)(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : r[a][1] = t, this
}