n.d(t, {
    Z: function () {
        return j;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    s = n.n(l),
    r = n(442837),
    o = n(927359),
    a = n(975298),
    c = n(650032),
    u = n(767870),
    d = n(104494),
    h = n(639119),
    m = n(655525),
    p = n(52188),
    b = n(346497),
    f = n(924540),
    v = n(351402),
    S = n(170671),
    x = n(474936),
    g = n(655580);
function j(e) {
    let t,
        { decoration: n, label: l, isSelected: j } = e,
        { fractionalState: N, endsAt: C } = (0, a.Z)({ forceFetch: !0 }),
        y = (0, h.N)(),
        P = (0, d.Ng)(),
        T = (0, b.Vi)(),
        E = (0, r.e7)([v.Z], () => v.Z.isLocalizedPromoEnabled) && null == y && null == n,
        { enabled: I } = c._.useExperiment({ location: 'UserSettingsPremiumLabel' }, { autoTrackExposure: !1 }),
        R = I && (null == y ? void 0 : y.trial_id) === x.a7;
    return (
        (t =
            N !== x.a$.NONE
                ? (0, i.jsx)(u.Z, {
                      className: '',
                      endsAt: C,
                      messageStyle: o.a.SHORT_TIME_LEFT,
                      showSparkles: !0
                  })
                : T
                  ? (0, i.jsx)(m.Z, {})
                  : null != P
                    ? (0, i.jsx)(f.GN, {
                          isTabSelected: j,
                          userDiscount: P,
                          includesAmountOff: !1
                      })
                    : null == y || R
                      ? null != n
                          ? n
                          : E
                            ? (0, i.jsx)(p.k, { entryPoint: p.U.SettingsMenu })
                            : (0, i.jsx)(S.Z, { isSelected: j })
                      : (0, i.jsx)(f.$H, {
                            isTabSelected: j,
                            trialOffer: y
                        })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: s()(g.premiumLabel, { [g.selected]: (j || E) && !T }),
                    children: [l, t]
                }),
                (0, i.jsx)('div', {
                    className: s()(g.background, {
                        [g.auPromo]: E && !j,
                        [g.auPromoSelected]: E && j,
                        [g.selectedBackground]: !E && !T && j
                    })
                })
            ]
        })
    );
}
