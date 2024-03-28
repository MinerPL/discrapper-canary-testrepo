"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("47120");
var l = n("553813"),
  r = n.n(l),
  s = n("358085");
let a = {
  [s.PlatformTypes.WINDOWS]: {
    nvidia: "<=537.58.0 || >=546.31"
  }
};

function i(e) {
  let t = a[(0, s.getPlatform)()];
  if (null == t) return !1;
  for (let n of Object.keys(e)) {
    let l = e[n],
      s = t[n];
    if (null == l || null == s || null != l.error) continue;
    let a = function(e) {
      var t, n;
      return "".concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".").concat(null !== (n = e.minor) && void 0 !== n ? n : 0, ".0")
    }(l);
    if (!r().satisfies(a, s)) return !0
  }
  return !1
}