s.d(t, {
    Z: function () {
        return h;
    }
});
var n = s(735250), a = s(470079), i = s(120356), r = s.n(i), o = s(442837), l = s(481060), c = s(570140), d = s(355467), _ = s(179360), E = s(821849), u = s(15640), T = s(314684), I = s(899667), S = s(853872), N = s(78839), C = s(783739), m = s(981631), A = s(76676);
function h() {
    a.useEffect(() => {
        c.Z.wait(() => {
            d.jg(), d.tZ(), (0, _.X8)(), (0, E.Y2)(null, null, m.JjL.DISCOVERY), (0, _.tH)(!0);
        });
    }, []);
    let {
            hasFetchedSubscriptions: e,
            premiumSubscription: t
        } = (0, o.cj)([N.ZP], () => ({
            hasFetchedSubscriptions: N.ZP.hasFetchedSubscriptions(),
            premiumSubscription: N.ZP.getPremiumTypeSubscription()
        })), s = (0, u.V)(), i = (0, o.e7)([S.Z], () => S.Z.hasFetchedPaymentSources), h = (0, o.e7)([I.Z], () => I.Z.isFetchingCurrentUserAppliedBoosts);
    return ((0, T.JR)(), e && s && i && !h) ? (0, n.jsxs)('div', {
        className: A.container,
        children: [
            (0, n.jsx)('div', { className: A.background }),
            (0, n.jsx)('div', {
                className: A.content,
                children: (0, n.jsx)(C.Z, { premiumSubscription: t })
            })
        ]
    }) : (0, n.jsx)('div', {
        className: r()(A.container, A.loading),
        children: (0, n.jsx)(l.Spinner, {})
    });
}
