"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007");
var a = n("570277"),
  s = n.n(a),
  l = n("773336");
let i = {
  [l.PlatformTypes.WINDOWS]: {
    nvidia: ">=397.93.0"
  }
};

function r(e) {
  let t = i[(0, l.getPlatform)()];
  if (null == t) return !1;
  for (let n of Object.keys(e)) {
    let a = e[n],
      l = t[n];
    if (null == a || null == l || null != a.error) continue;
    let i = function(e) {
      var t, n;
      return "".concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".").concat(null !== (n = e.minor) && void 0 !== n ? n : 0, ".0")
    }(a);
    if (!s.satisfies(i, l)) return !0
  }
  return !1
}