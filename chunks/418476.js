"use strict";
n.d(t, {
  Z: function() {
    return a
  }
});
var i = n(978003),
  r = n(786761),
  s = n(901461),
  o = n(981631);

function a(e, t) {
  return !(null == t || e.author.id !== t || e.state !== o.yb.SENT || (0, s.Z)(e) || !(0, r.lp)(e) || e.hasFlag(o.iLy.IS_VOICE_MESSAGE) || null != e.referralTrialOfferId || e.isPoll() || (0, i.Z)(e)) && !0
}