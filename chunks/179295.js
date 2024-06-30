n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(470079), a = n(442837), l = n(569545), s = n(959457), r = n(626135), o = n(981631), c = n(474936);
function u(e, t) {
    let {
            handleMouseDown: n,
            handleMouseMove: u,
            handleMouseUp: d,
            handleMouseEnter: h
        } = e, p = i.useRef(null), m = (0, a.e7)([s.Z], () => s.Z.getRTCConnection((0, l.V9)(t))), _ = i.useCallback((e, t, i) => {
            p.current = Date.now(), n(e, t, i);
        }, [n]);
    return {
        handleMouseUp: i.useCallback((e, t, n) => {
            if (d(e, t, n), null != p.current) {
                if (null != m) {
                    var i, a, l;
                    i = e, a = m, l = Date.now() - p.current, r.default.track(o.rMx.PREMIUM_FEATURE_USAGE, {
                        feature_name: ''.concat(c.QP.SHARED_CANVAS, '_').concat(i.type),
                        feature_tier: c.h1.FREE,
                        media_session_id: a.getMediaSessionId(),
                        parent_media_session_id: a.parentMediaSessionId,
                        guild_id: a.guildId,
                        duration: l
                    });
                }
                p.current = null;
            }
        }, [
            d,
            m
        ]),
        handleMouseDown: _,
        handleMouseMove: u,
        handleMouseEnter: h
    };
}
