n.d(t, {
    Kz: function () {
        return s;
    },
    oC: function () {
        return u;
    },
    p9: function () {
        return l;
    }
});
var r = n(470079), i = n(442837), a = n(430824), o = n(829883);
function s(e, t) {
    var n;
    let {
        customIconSrc: r,
        unicodeEmoji: i
    } = null !== (n = (0, o.zy)(e, t)) && void 0 !== n ? n : {};
    if (null != r || null != i)
        return {
            src: r,
            name: e.name,
            roleId: e.id,
            size: t,
            unicodeEmoji: i
        };
}
function l(e) {
    let {
            guildId: t,
            roleId: n,
            size: l = 20
        } = e, {
            guild: u,
            roles: c
        } = (0, i.cj)([a.Z], () => ({
            guild: a.Z.getGuild(t),
            roles: a.Z.getRoles(t)
        }), [t]);
    return r.useMemo(() => {
        if (null == u || null == n)
            return;
        let e = c[n];
        if (!!(0, o._b)(u, e))
            return s(e, l);
    }, [
        u,
        c,
        n,
        l
    ]);
}
function u(e, t) {
    let n = (0, i.e7)([a.Z], () => a.Z.getGuild(e));
    if (null != n && !!(0, o._b)(n, t))
        return s(t);
}
