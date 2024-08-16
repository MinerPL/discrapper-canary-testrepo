t.d(s, {
    Z: function () {
        return O;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(442837),
    l = t(481060),
    c = t(570140),
    d = t(355467),
    _ = t(179360),
    E = t(821849),
    u = t(15640),
    I = t(314684),
    T = t(899667),
    S = t(853872),
    N = t(78839),
    C = t(783739),
    m = t(981631),
    A = t(473286);
function O() {
    a.useEffect(() => {
        c.Z.wait(() => {
            d.jg(), d.tZ(), (0, _.X8)(), (0, E.Y2)(null, null, m.JjL.DISCOVERY), (0, _.tH)(!0);
        });
    }, []);
    let { hasFetchedSubscriptions: e, premiumSubscription: s } = (0, o.cj)([N.ZP], () => ({
            hasFetchedSubscriptions: N.ZP.hasFetchedSubscriptions(),
            premiumSubscription: N.ZP.getPremiumTypeSubscription()
        })),
        t = (0, u.V)(),
        i = (0, o.e7)([S.Z], () => S.Z.hasFetchedPaymentSources),
        O = (0, o.e7)([T.Z], () => T.Z.isFetchingCurrentUserAppliedBoosts);
    return ((0, I.JR)(), e && t && i && !O)
        ? (0, n.jsxs)('div', {
              className: A.container,
              children: [
                  (0, n.jsx)('div', { className: A.background }),
                  (0, n.jsx)('div', {
                      className: A.content,
                      children: (0, n.jsx)(C.Z, { premiumSubscription: s })
                  })
              ]
          })
        : (0, n.jsx)('div', {
              className: r()(A.container, A.loading),
              children: (0, n.jsx)(l.Spinner, {})
          });
}
