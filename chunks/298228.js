n.d(t, {
    O: function () {
        return i;
    }
}),
    n(47120),
    n(653041);
var s = n(470079),
    r = n(399606),
    a = n(1870);
let i = (e) => {
    let t = (0, r.e7)([a.Z], () => a.Z.purchases);
    return (0, s.useMemo)(() => {
        let n = [],
            s = [];
        for (let r of e.values()) r.products.every((e) => !!t.get(e.skuId)) ? n.push(r) : s.push(r);
        return s.concat(n);
    }, [e, t]);
};
