"use strict";
n.d(t, {
  Z: function() {
    return a
  }
}), n(47120);
var r = n(553813),
  i = n.n(r),
  l = n(358085);
let s = {
  [l.PlatformTypes.WINDOWS]: {
    nvidia: "<=537.58.0 || >=546.31"
  }
};

function a(e) {
  let t = s[(0, l.getPlatform)()];
  if (null == t) return !1;
  for (let n of Object.keys(e)) {
    let r = e[n],
      l = t[n];
    if (null == r || null == l || null != r.error) continue;
    let s = function(e) {
      var t, n;
      return "".concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".").concat(null !== (n = e.minor) && void 0 !== n ? n : 0, ".0")
    }(r);
    if (!i().satisfies(s, l)) return !0
  }
  return !1
}