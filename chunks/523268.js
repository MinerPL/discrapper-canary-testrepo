"use strict";
r.r(t), r.d(t, {
  default: function() {
    return o
  }
});
var n = r("409282"),
  a = Array.prototype.splice,
  o = function(e) {
    var t = this.__data__,
      r = (0, n.default)(t, e);
    return !(r < 0) && (r == t.length - 1 ? t.pop() : a.call(t, r, 1), --this.size, !0)
  }