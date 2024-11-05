e.d(t, {
    Z: function () {
        return c;
    }
}),
    e(653041),
    e(47120);
var r = e(192379),
    i = e(442837),
    o = e(430824),
    l = e(973001);
function c(n) {
    let { application: t, showMutualGuilds: e = !0 } = n,
        c = (0, i.e7)([l.Z], () => l.Z.getGuildIdsForApplication(null == t ? void 0 : t.id), [t]),
        u = (0, i.e7)([o.Z], () => o.Z.isLoaded());
    return r.useMemo(() => {
        let n = [];
        if (!u || !e || null == c || null == t) return n;
        for (let t of c) {
            let e = o.Z.getGuild(t);
            null != e && n.push(e);
        }
        return n;
    }, [u, c, t, e]);
}
