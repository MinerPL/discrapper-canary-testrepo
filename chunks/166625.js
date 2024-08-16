var r = n(470079),
    i = n(399606),
    a = n(311395),
    s = n(778825),
    o = n(150039),
    l = n(271383),
    u = n(25990),
    c = n(594174),
    d = n(350327);
t.Z = (e) => {
    let { isTryItOut: t, analyticsLocations: n, guildId: _ } = e,
        E = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        f = (0, i.e7)([l.ZP], () => (null != _ && null != E ? l.ZP.getMember(_, E.id) : null)),
        h = null != f ? f.avatarDecoration : null == E ? void 0 : E.avatarDecoration,
        p = (0, a.Z)(n),
        {
            pendingAvatar: m,
            pendingAvatarDecoration: I,
            pendingErrors: T
        } = (0, i.cj)([u.Z, s.Z], () => ({
            pendingAvatar: t ? u.Z.getTryItOutAvatar() : null != _ ? s.Z.getPendingAvatar() : u.Z.getPendingAvatar(),
            pendingAvatarDecoration: t ? u.Z.getTryItOutAvatarDecoration() : null != _ ? s.Z.getPendingAvatarDecoration() : u.Z.getPendingAvatarDecoration(),
            pendingErrors: null != _ ? s.Z.getErrors().avatarDecoration : u.Z.getErrors().avatarDecoration
        })),
        g = (0, r.useCallback)((e) => (0, o.Jw)(e, null == E ? void 0 : E.avatar), [null == E ? void 0 : E.avatar]),
        S = (0, r.useCallback)(
            (e) => {
                (0, o.PO)(_, e), null != e && p(e);
            },
            [p, _]
        );
    return {
        pendingAvatar: m,
        pendingAvatarDecoration: I,
        setPendingAvatar: t ? d.c_ : g,
        setPendingAvatarDecoration: t ? d.Xz : S,
        savedAvatarDecoration: h,
        pendingErrors: T
    };
};
