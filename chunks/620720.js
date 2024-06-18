"use strict";
n.d(t, {
  Z: function() {
    return function e(t, n) {
      void 0 === n && (n = []);
      var s, u = (0, r.Z)(t),
        c = u === (null == (s = t.ownerDocument) ? void 0 : s.body),
        l = (0, a.Z)(u),
        d = c ? [l].concat(l.visualViewport || [], (0, o.Z)(u) ? u : []) : u,
        f = n.concat(d);
      return c ? f : f.concat(e((0, i.Z)(d)))
    }
  }
});
var r = n(310680),
  i = n(660027),
  a = n(49691),
  o = n(538018)