"use strict";
r.r(t);
var n = r("110592");
t.default = function(e, t) {
  var r = (0, n.default)(this, e),
    a = r.size;
  return r.set(e, t), this.size += r.size == a ? 0 : 1, this
}