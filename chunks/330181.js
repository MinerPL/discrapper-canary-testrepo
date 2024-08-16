n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var s = n(735250),
    a = n(470079),
    r = n(913527),
    i = n.n(r),
    l = n(355467),
    o = n(100527),
    c = n(906732),
    d = n(584825),
    _ = n(931547),
    u = n(689938);
let E = (e) => {
    let [t, n] = a.useState(!1),
        [s, r] = a.useState(null);
    return {
        resetRenewalMutation: async (t) => {
            n(!0), r(null);
            try {
                await (0, l.qu)(t, e);
            } catch (e) {
                r(e);
            } finally {
                n(!1);
            }
        },
        submitting: t,
        error: s
    };
};
function T(e) {
    let { groupListingId: t, subscription: n, className: r } = e,
        { analyticsLocations: l } = (0, c.ZP)(o.Z.PENDING_PLAN_CHANGE_NOTICE),
        { resetRenewalMutation: T, submitting: I, error: R } = E(l),
        C = (0, d._k)(t, { includeSoftDeleted: !0 }),
        { currentListing: g, nextListing: p } = a.useMemo(() => {
            if ((null == n ? void 0 : n.renewalMutations) == null)
                return {
                    currentListing: void 0,
                    nextListing: void 0
                };
            let e = n.items[0].planId,
                t = n.renewalMutations.items[0].planId,
                s = C.find((t) => t.subscription_plans[0].id === e);
            return {
                currentListing: s,
                nextListing: C.find((e) => e.subscription_plans[0].id === t)
            };
        }, [n, C]);
    if (null == n || null == g || null == p) return null;
    let N = i()(n.currentPeriodEnd).format('MMM DD, YYYY');
    return (0, s.jsx)(_.Z, {
        message: u.Z.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_DELETE_MUTATION_DESCRIPTION.format({
            currentListing: g.name,
            nextListing: p.name,
            changeDate: N
        }),
        error: null == R ? void 0 : R.message,
        onClick: () => T(n),
        submitting: I,
        ctaMessage: u.Z.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_DELETE_MUTATION_CTA,
        className: r
    });
}
