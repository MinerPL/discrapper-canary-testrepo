"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(267642),
  r = n(74538),
  s = n(474936);

function o(e, t, n) {
  if (null == e || null == e.quality && null == e.guildPremiumTier) return !0;
  let o = !1;
  return null != e.quality && (e.quality === s.ys.HIGH_STREAMING_QUALITY ? o = o || r.ZP.canStreamQuality(r.ZP.StreamQuality.HIGH, t) : e.quality === s.ys.MID_STREAMING_QUALITY && (o = o || r.ZP.canStreamQuality(r.ZP.StreamQuality.MID, t))), null != e.guildPremiumTier && (o = o || (0, i.tb)(n, e.guildPremiumTier)), o
}