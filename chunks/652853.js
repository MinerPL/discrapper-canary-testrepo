n.d(t, {
    X: function () {
        return u;
    },
    z: function () {
        return c;
    }
});
var r,
    i = n(735250),
    a = n(470079),
    s = n(541049),
    o = n(231338);
let l = a.createContext({
    profileType: null,
    theme: null !== (r = (0, s.Z)()) && void 0 !== r ? r : o.BR.DARK,
    primaryColor: null,
    secondaryColor: null
});
function u(e) {
    let { profileType: t, theme: n, primaryColor: r, secondaryColor: s, children: o } = e,
        u = a.useMemo(
            () => ({
                profileType: t,
                theme: n,
                primaryColor: r,
                secondaryColor: s
            }),
            [t, n, r, s]
        );
    return (0, i.jsx)(l.Provider, {
        value: u,
        children: o
    });
}
let c = () => a.useContext(l);
