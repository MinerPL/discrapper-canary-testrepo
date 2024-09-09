t.d(n, {
    Z: function () {
        return c;
    }
}),
    t(653041),
    t(47120);
var r = t(470079),
    i = t(442837),
    o = t(430824),
    l = t(973001);
function c(e) {
    let { application: n, showMutualGuilds: t = !0 } = e,
        c = (0, i.e7)([l.Z], () => l.Z.getGuildIdsForApplication(null == n ? void 0 : n.id), [n]),
        s = (0, i.e7)([o.Z], () => o.Z.isLoaded());
    return r.useMemo(() => {
        let e = [];
        if (!s || !t || null == c || null == n) return e;
        for (let n of c) {
            let t = o.Z.getGuild(n);
            null != t && e.push(t);
        }
        return e;
    }, [s, c, n, t]);
}
