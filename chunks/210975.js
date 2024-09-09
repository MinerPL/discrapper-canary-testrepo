n.d(t, {
    m$: function () {
        return h;
    },
    wV: function () {
        return u;
    },
    zU: function () {
        return d;
    }
});
var i = n(442837),
    s = n(569545),
    a = n(314897),
    l = n(19780),
    r = n(98369),
    o = n(277642),
    c = n(441894);
function u(e) {
    let { userId: t, channelId: n, location: s } = e,
        o = (0, c.J)({
            channelId: n,
            location: s
        });
    return (0, i.e7)([r.Z, a.default, l.Z], () => null != t && o && l.Z.isUserConnected(t) && a.default.getId() !== t && r.Z.isUserVerified(t), [o, t]);
}
function d(e) {
    let { streamKey: t, channelId: n, location: l } = e,
        u = (0, c.J)({
            channelId: n,
            location: l
        }),
        d = (0, o.t)(t);
    return (0, i.e7)(
        [r.Z, a.default],
        () => {
            if (!u || d || null == t) return !1;
            let e = a.default.getId(),
                { ownerId: n } = (0, s.my)(t);
            return n !== e && r.Z.isStreamVerified(t);
        },
        [d, u, t]
    );
}
function h(e) {
    let { channelId: t, location: n } = e,
        s = (0, c.J)({
            channelId: t,
            location: n
        }),
        a = (0, o.r)();
    return (0, i.e7)([r.Z], () => !!s && !a && r.Z.isCallVerified(), [a, s]);
}
