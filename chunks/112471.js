n.d(t, {
    q: function () {
        return c;
    }
}),
    n(47120),
    n(653041),
    n(733860);
var i = n(470079),
    a = n(442837),
    s = n(537883),
    r = n(356164),
    l = n(164991),
    o = n(731455);
function c() {
    let e = (0, l.NL)(),
        t = (0, l.D1)(),
        n = (0, l.Dm)(),
        c = (0, a.e7)([r.Z], () => {
            if (null == t) return 0;
            let i = r.Z.getTotal({
                categoryId: t,
                query: e,
                languageCode: n
            });
            return null != i ? i : 0;
        }),
        d = (0, a.e7)([r.Z], () => {
            let t = r.Z.getTotal({
                categoryId: o.Hk,
                query: e,
                languageCode: n
            });
            return null != t ? t : 0;
        }),
        u = (0, a.e7)([s.Z], () => s.Z.getVisibleTabs());
    return i.useMemo(() => {
        if (null == u) return null;
        if (null == t) return u;
        let e = [],
            n = new Set();
        for (let [t, i] of u) n.add(t), e.push([t, i]);
        let i = !1;
        return !n.has(o.Hk) && (n.add(o.Hk), e.unshift([o.Hk, d]), (i = !0)), !n.has(t) && (n.add(t), e.push([t, c]), (i = !0)), i ? e : u;
    }, [u, t, d, c]);
}
