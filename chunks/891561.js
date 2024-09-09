n.d(t, {
    Z: function () {
        return d;
    },
    s: function () {
        return c;
    }
}),
    n(47120);
var r = n(735250),
    s = n(470079),
    i = n(512722),
    o = n.n(i),
    a = n(333866);
let l = s.createContext(void 0);
function c() {
    let e = s.useContext(l);
    return o()(null != e, 'must use useGuildShopSortContext within a GuildShopSortOptionsContextProvider'), e;
}
function d(e) {
    let { children: t, defaultSortOption: n = a.zJ.NEWEST_ARRIVALS } = e,
        [i, o] = s.useState(n);
    return (0, r.jsx)(l.Provider, {
        value: {
            sortOption: i,
            setSortOption: o,
            onReset: () => o(n)
        },
        children: t
    });
}
