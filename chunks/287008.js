n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var r = n(470079),
    i = n(442837),
    a = n(607070),
    s = n(654904),
    o = n(271383),
    l = n(451478),
    u = n(369111);
function c(e) {
    let { user: t, guildId: n, size: c, showPending: d = !1, animateOnHover: _ = !1, avatarOverride: E } = e,
        [f, h] = r.useState(!1),
        p = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
        I = (0, i.e7)([l.Z], () => l.Z.isFocused()) && (f || (!p && !_)),
        { pendingAvatar: m } = (0, u.Z)({}),
        T = void 0 !== E ? E : d ? m : void 0,
        S = (0, i.e7)([o.ZP], () => (null != n && null != t ? o.ZP.getMember(n, t.id) : null)),
        g = r.useMemo(
            () =>
                null != t
                    ? (0, s.SG)(T, S, t, {
                          canAnimate: I,
                          size: c
                      })
                    : void 0,
            [T, S, t, I, c]
        ),
        A = r.useCallback(() => h(!0), []);
    return {
        avatarSrc: g,
        isAvatarAnimating: I,
        eventHandlers: {
            onMouseEnter: A,
            onMouseLeave: r.useCallback(() => h(!1), [])
        }
    };
}
