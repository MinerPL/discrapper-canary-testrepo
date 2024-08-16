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
    r = i(241159),
    s = i(496929),
    a = i(558381),
    o = i(270144),
    d = i(238);
function u(e, n) {
    l.useEffect(() => {
        c(e);
    }, [e]);
    let { subscriptionGroupListing: i } = (0, o.F5)(e, n),
        r = null == i ? void 0 : i.subscription_listings;
    return (0, t.cj)(
        [d.Z],
        () => {
            var n;
            let { subscriptions: l, otps: t } = d.Z.getStoreLayout(e),
                s = new Set(l.map((e) => e.id));
            return {
                subs: null !== (n = null == r ? void 0 : r.filter((e) => s.has(e.id))) && void 0 !== n ? n : [],
                otps: t,
                subscriptionGroupListing: null != i ? i : void 0
            };
        },
        [e, r, i]
    );
}
function c(e) {
    (0, r.k)(e), (0, a.oJ)(e), (0, s.yD)(e, !1);
}
