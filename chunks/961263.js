"use strict";
r.r(t), r.d(t, {
  default: function() {
    return l
  }
});
var n = r("382356"),
  a = Object.prototype,
  o = a.hasOwnProperty,
  i = a.toString,
  u = n.default ? n.default.toStringTag : void 0,
  l = function(e) {
    var t = o.call(e, u),
      r = e[u];
    try {
      e[u] = void 0;
      var n = !0
    } catch (e) {}
    var a = i.call(e);
    return n && (t ? e[u] = r : delete e[u]), a
  }