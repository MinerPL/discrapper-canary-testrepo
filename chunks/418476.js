n.d(t, {
  Z: function() {
return o;
  }
});
var r = n(978003),
  i = n(786761),
  a = n(901461),
  s = n(981631);

function o(e, t) {
  return !(null == t || e.author.id !== t || e.state !== s.yb.SENT || (0, a.Z)(e) || !(0, i.lp)(e) || e.hasFlag(s.iLy.IS_VOICE_MESSAGE) || null != e.referralTrialOfferId || e.isPoll() || (0, r.Z)(e)) && !0;
}