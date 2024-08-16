n.d(t, {
    a: function () {
        return c;
    }
}),
    n(47120),
    n(653041);
var s = n(470079),
    r = n(399606),
    a = n(1870),
    i = n(215023);
let o = (e) => {
        let t = new Map();
        return (
            i.N.forEach((e, n) => {
                t.set(e, n);
            }),
            e.sort((e, n) => {
                var s, r;
                let a = null !== (s = t.get(e.skuId)) && void 0 !== s ? s : 1 / 0;
                return a - (null !== (r = t.get(n.skuId)) && void 0 !== r ? r : 1 / 0);
            })
        );
    },
    c = (e) => {
        let t = (0, r.e7)([a.Z], () => a.Z.purchases),
            { sortedPopularPickProducts: n, popularProductToCategoryMap: c } = (0, s.useMemo)(() => {
                let n = [],
                    s = [],
                    r = new Map();
                for (let a of e.values())
                    a.products.forEach((e) => {
                        i.N.includes(e.skuId) && !r.has(e.skuId) && (t.get(e.skuId) ? n.push(e) : s.push(e), r.set(e.skuId, a));
                    });
                let a = o(n);
                return {
                    sortedPopularPickProducts: o(s).concat(a).slice(0, 12),
                    popularProductToCategoryMap: r
                };
            }, [e, t]);
        return {
            sortedPopularPickProducts: n,
            popularProductToCategoryMap: c
        };
    };
