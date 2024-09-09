t(47120);
var n = t(470079),
    a = t(597688),
    i = t(884697),
    r = t(223143);
s.Z = (e) => {
    let [s, t] = n.useState(),
        { categories: o, purchases: l } = (0, r.Z)();
    return (
        n.useEffect(() => {
            (null == s || 0 === s.size) && t(o);
        }, [o, s]),
        n.useMemo(() => {
            if (null != e) return e;
            if (null == s) return;
            let t = (0, i.iC)(l, s).filter((e) => {
                let { skuId: s } = e,
                    t = a.Z.getProduct(s);
                return (0, i.G1)(t);
            });
            return t[Math.floor(Math.random() * t.length)];
        }, [s, e, l])
    );
};
