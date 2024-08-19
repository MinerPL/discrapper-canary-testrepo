i.d(n, {
    Z: function () {
        return c;
    },
    q: function () {
        return u;
    }
}),
    i(47120);
var l = i(470079),
    t = i(442837),
    s = i(241159),
    r = i(496929),
    a = i(558381),
    o = i(270144),
    d = i(238);
function u(e, n) {
    l.useEffect(() => {
        c(e);
    }, [e]);
    let { subscriptionGroupListing: i } = (0, o.F5)(e, n),
        s = null == i ? void 0 : i.subscription_listings,
        r = (0, t.Wu)(
            [d.Z],
            () => {
                var n;
                let { subscriptions: i } = d.Z.getStoreLayout(e),
                    l = new Set(i.map((e) => e.id));
                return null !== (n = null == s ? void 0 : s.filter((e) => l.has(e.id))) && void 0 !== n ? n : [];
            },
            [e, s]
        ),
        a = (0, t.Wu)([d.Z], () => d.Z.getStoreLayout(e).otps, [e]);
    return l.useMemo(
        () => ({
            subs: r,
            otps: a,
            subscriptionGroupListing: null != i ? i : void 0
        }),
        [r, a, i]
    );
}
function c(e) {
    (0, s.k)(e), (0, a.oJ)(e), (0, r.yD)(e, !1);
}
