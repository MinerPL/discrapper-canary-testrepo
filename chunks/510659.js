n.d(t, {
    $m: function () {
        return u;
    },
    NJ: function () {
        return l;
    },
    Xo: function () {
        return c;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(512722),
    s = n.n(a);
let o = i.createContext(void 0);
function l(e) {
    let { value: t, children: n } = e;
    return (0, r.jsx)(o.Provider, {
        value: t,
        children: n
    });
}
function u() {
    let [e, t] = i.useState(null),
        [n, r] = i.useState(null),
        a = i.useCallback((e) => {
            t(e.interactionType), r(e.interactionSource);
        }, []),
        s = i.useCallback(() => {
            a({
                interactionType: null,
                interactionSource: null
            });
        }, [a]),
        [o, l] = i.useState(!1),
        [u, c] = i.useState(null);
    return i.useMemo(
        () => ({
            interactionType: e,
            interactionSource: n,
            onInteraction: a,
            resetInteraction: s,
            interactionToastShown: o,
            setInteractionToastShown: l,
            interactionTypeSent: u,
            setInteractionTypeSent: c
        }),
        [a, n, o, e, u, s]
    );
}
function c() {
    let e = i.useContext(o);
    return s()(null != e, 'must use useUserProfileInteractionContext within a UserProfileInteractionContextProvider'), e;
}
