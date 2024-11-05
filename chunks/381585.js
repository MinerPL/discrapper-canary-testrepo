n.d(t, {
    k0: function () {
        return l;
    },
    sp: function () {
        return i;
    }
});
var r = n(200651),
    a = n(192379);
let s = a.createContext(null);
function i() {
    return a.useContext(s);
}
function l(e) {
    let { newValue: t, children: n } = e,
        l = i(),
        o = a.useMemo(
            () => ({
                ...l,
                ...t
            }),
            [l, t]
        );
    return (0, r.jsx)(s.Provider, {
        value: o,
        children: n
    });
}
