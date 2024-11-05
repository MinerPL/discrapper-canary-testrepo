n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120),
    n(411104);
var r = n(192379),
    i = n(512722),
    a = n.n(i),
    s = n(913527),
    o = n.n(s),
    l = n(442837),
    u = n(496929),
    c = n(594174),
    d = n(78839),
    f = n(580130),
    _ = n(122289),
    h = n(111361),
    p = n(981631),
    m = n(474936);
function g() {
    let { forceFetch: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { forceFetch: !1 },
        t = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        n = (0, l.Wu)([f.Z], () => f.Z.getFractionalPremium(!1)),
        i = (0, l.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription()),
        [s, g] = r.useState({
            fractionalState: m.a$.NONE,
            endsAt: o()(0)
        });
    return (
        r.useEffect(() => {
            if ((null != t && !!(0, h.I5)(t)) || !!e) !f.Z.fetchingAllEntitlements && (0, u.p0)({ entitlementType: p.qc2.FRACTIONAL_REDEMPTION });
        }, []),
        r.useEffect(() => {
            if (null == t || !(0, h.I5)(t) || 0 === n.length) {
                g((e) =>
                    e.endsAt.isSame(o()(0)) && e.fractionalState === m.a$.NONE
                        ? e
                        : {
                              fractionalState: m.a$.NONE,
                              endsAt: o()(0)
                          }
                );
                return;
            }
            let e = n.filter((e) => null != e.endsAt && null != e.startsAt).sort((e, t) => ((a()(null != e.endsAt && null != t.endsAt, 'endsAt should not be null'), e.endsAt < t.endsAt) ? -1 : e.endsAt > t.endsAt ? 1 : 0));
            if ((e.reverse(), e.length !== n.length || null == e[0].endsAt)) {
                let e = Array.from(n.values()).map((e) => e.id),
                    t = 'fractional redemption entitlements should have startsAt/endsAt';
                throw ((0, _.g9)(t, { extra: { entitlementIds: e } }), Error(t));
            }
            g({
                fractionalState: null == i || p.JwP.INACTIVE.has(i.status) ? m.a$.FP_ONLY : m.a$.FP_SUB,
                endsAt: o()(e[0].endsAt)
            });
        }, [t, n, i]),
        s
    );
}
