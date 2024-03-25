"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("884691"),
  l = n("446674"),
  s = n("374014"),
  i = n("205817"),
  r = n("599110"),
  u = n("49111"),
  o = n("646718");

function d(e, t) {
  let {
    handleMouseDown: n,
    handleMouseMove: d,
    handleMouseUp: c,
    handleMouseEnter: f
  } = e, h = a.useRef(null), m = (0, l.useStateFromStores)([i.default], () => i.default.getRTCConnection((0, s.encodeStreamKey)(t))), p = a.useCallback((e, t, a) => {
    h.current = Date.now(), n(e, t, a)
  }, [n]), E = a.useCallback((e, t, n) => {
    if (c(e, t, n), null != h.current) {
      if (null != m) {
        var a, l, s;
        a = e, l = m, s = Date.now() - h.current, r.default.track(u.AnalyticEvents.PREMIUM_FEATURE_USAGE, {
          feature_name: "".concat(o.AnalyticsPremiumFeatureNames.SHARED_CANVAS, "_").concat(a.type),
          feature_tier: o.AnalyticsPremiumFeatureTiers.FREE,
          media_session_id: l.getMediaSessionId(),
          parent_media_session_id: l.parentMediaSessionId,
          guild_id: l.guildId,
          duration: s
        })
      }
      h.current = null
    }
  }, [c, m]);
  return {
    handleMouseUp: E,
    handleMouseDown: p,
    handleMouseMove: d,
    handleMouseEnter: f
  }
}