"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("470079"),
  l = n("442837"),
  s = n("569545"),
  i = n("959457"),
  r = n("626135"),
  o = n("981631"),
  u = n("474936");

function d(e, t) {
  let {
    handleMouseDown: n,
    handleMouseMove: d,
    handleMouseUp: c,
    handleMouseEnter: f
  } = e, h = a.useRef(null), m = (0, l.useStateFromStores)([i.default], () => i.default.getRTCConnection((0, s.encodeStreamKey)(t))), p = a.useCallback((e, t, a) => {
    h.current = Date.now(), n(e, t, a)
  }, [n]);
  return {
    handleMouseUp: a.useCallback((e, t, n) => {
      if (c(e, t, n), null != h.current) {
        if (null != m) {
          var a, l, s;
          a = e, l = m, s = Date.now() - h.current, r.default.track(o.AnalyticEvents.PREMIUM_FEATURE_USAGE, {
            feature_name: "".concat(u.AnalyticsPremiumFeatureNames.SHARED_CANVAS, "_").concat(a.type),
            feature_tier: u.AnalyticsPremiumFeatureTiers.FREE,
            media_session_id: l.getMediaSessionId(),
            parent_media_session_id: l.parentMediaSessionId,
            guild_id: l.guildId,
            duration: s
          })
        }
        h.current = null
      }
    }, [c, m]),
    handleMouseDown: p,
    handleMouseMove: d,
    handleMouseEnter: f
  }
}