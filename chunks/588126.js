t(47120);
var n = t(470079),
    a = t(597688),
    i = t(884697),
    r = t(223143);
s.Z = function (e) {
    let s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [t, o] = n.useState(),
        { categories: l, purchases: c } = (0, r.Z)();
    return (
        n.useEffect(() => {
            (null == t || 0 === t.size) && o(l);
        }, [l, t]),
        n.useMemo(() => {
            if (null != e) return e;
            if (null == t || !s) return;
            let n = (0, i.iC)(c, t).filter((e) => {
                let { skuId: s } = e,
                    t = a.Z.getProduct(s);
                return (0, i.G1)(t);
            });
            return n[Math.floor(Math.random() * n.length)];
        }, [t, e, c, s])
    );
};
