n.d(t, {
    $m: function () {
        return d;
    },
    NJ: function () {
        return c;
    },
    Xo: function () {
        return f;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(512722),
    s = n.n(a),
    o = n(846519),
    l = n(810097);
let u = i.createContext(void 0);
function c(e) {
    let { value: t, children: n } = e;
    return (0, r.jsx)(u.Provider, {
        value: t,
        children: n
    });
}
function d() {
    let [e, t] = i.useState(null),
        [n, r] = i.useState(null),
        [a, s] = i.useState(null),
        u = i.useCallback((e) => {
            t(e.interactionType), r(e.interactionSource), s(e.interactionSourceId);
        }, []),
        c = i.useCallback(() => {
            u({
                interactionType: null,
                interactionSource: null,
                interactionSourceId: null
            });
        }, [u]),
        [d, f] = i.useState(!1),
        [_, h] = i.useState(null),
        [p] = i.useState(new o.V7()),
        m = i.useCallback(
            (e) => {
                h(e), f(!0), null === e ? p.stop() : p.start(l._1, () => f(!1));
            },
            [p]
        );
    return (
        i.useEffect(() => {
            p.stop();
        }, [p]),
        i.useMemo(
            () => ({
                interactionType: e,
                interactionSource: n,
                interactionSourceId: a,
                onInteraction: u,
                setInteractionToast: m,
                resetInteraction: c,
                showInteractionToast: d,
                interactionTypeSent: _
            }),
            [u, m, n, a, d, e, _, c]
        )
    );
}
function f() {
    let e = i.useContext(u);
    return s()(null != e, 'must use useUserProfileInteractionContext within a UserProfileInteractionContextProvider'), e;
}
