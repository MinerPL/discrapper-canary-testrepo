"use strict";
n.d(t, {
  h: function() {
    return a
  }
});
var i = n(502087),
  r = n(111361),
  s = n(981631),
  o = n(474936);

function a(e) {
  if (null == e) return s.mBz;
  let t = i.Z.getPremiumTypeOverride();
  return e.isStaff() && t === o.F_ ? s.PRK : null != e.premiumType && (0, r.I5)(e) ? o.a1[e.premiumType].fileSize : s.mBz
}