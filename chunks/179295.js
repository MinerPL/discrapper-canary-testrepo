n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(470079),
  a = n(442837),
  s = n(569545),
  l = n(959457),
  r = n(626135),
  o = n(981631),
  c = n(474936);

function u(e, t) {
  let {
handleMouseDown: n,
handleMouseMove: u,
handleMouseUp: d,
handleMouseEnter: h
  } = e, m = i.useRef(null), p = (0, a.e7)([l.Z], () => l.Z.getRTCConnection((0, s.V9)(t))), _ = i.useCallback((e, t, i) => {
m.current = Date.now(), n(e, t, i);
  }, [n]);
  return {
handleMouseUp: i.useCallback((e, t, n) => {
  if (d(e, t, n), null != m.current) {
    if (null != p) {
      var i, a, s;
      i = e, a = p, s = Date.now() - m.current, r.default.track(o.rMx.PREMIUM_FEATURE_USAGE, {
        feature_name: ''.concat(c.QP.SHARED_CANVAS, '_').concat(i.type),
        feature_tier: c.h1.FREE,
        media_session_id: a.getMediaSessionId(),
        parent_media_session_id: a.parentMediaSessionId,
        guild_id: a.guildId,
        duration: s
      });
    }
    m.current = null;
  }
}, [
  d,
  p
]),
handleMouseDown: _,
handleMouseMove: u,
handleMouseEnter: h
  };
}