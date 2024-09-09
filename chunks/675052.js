n.d(t, {
    a: function () {
        return l;
    }
}),
    n(47120),
    n(653041);
var a = n(470079),
    r = n(399606),
    s = n(1870),
    o = n(215023);
let i = (e) => {
        let t = new Map();
        return (
            o.N.forEach((e, n) => {
                t.set(e, n);
            }),
            e.sort((e, n) => {
                var a, r;
                let s = null !== (a = t.get(e.skuId)) && void 0 !== a ? a : 1 / 0;
                return s - (null !== (r = t.get(n.skuId)) && void 0 !== r ? r : 1 / 0);
            })
        );
    },
    l = (e) => {
        let t = (0, r.e7)([s.Z], () => s.Z.purchases),
            { sortedPopularPickProducts: n } = (0, a.useMemo)(() => {
                let n = [],
                    a = [],
                    r = new Map();
                for (let s of e.values())
                    s.products.forEach((e) => {
                        o.N.includes(e.skuId) && (t.get(e.skuId) ? n.push(e) : a.push(e), r.set(e.skuId, s));
                    });
                let s = i(n);
                return { sortedPopularPickProducts: i(a).concat(s).slice(0, 12) };
            }, [e, t]);
        return { sortedPopularPickProducts: n };
    };
