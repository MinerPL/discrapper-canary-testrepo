n.d(t, {
  Z: function() {
return s;
  }
});
var r = n(267642),
  i = n(74538),
  a = n(474936);

function s(e, t, n) {
  if (null == e || null == e.quality && null == e.guildPremiumTier)
return !0;
  let s = !1;
  return null != e.quality && (e.quality === a.ys.HIGH_STREAMING_QUALITY ? s = s || i.ZP.canStreamQuality(i.ZP.StreamQuality.HIGH, t) : e.quality === a.ys.MID_STREAMING_QUALITY && (s = s || i.ZP.canStreamQuality(i.ZP.StreamQuality.MID, t))), null != e.guildPremiumTier && (s = s || (0, r.tb)(n, e.guildPremiumTier)), s;
}