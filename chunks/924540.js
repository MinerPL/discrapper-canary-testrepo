t.d(s, {
    $H: function () {
        return b;
    },
    GN: function () {
        return v;
    },
    _y: function () {
        return C;
    }
});
var n = t(200651),
    r = t(192379),
    o = t(120356),
    a = t.n(o),
    i = t(481060),
    c = t(774078),
    l = t(55935),
    u = t(74538),
    d = t(639119),
    f = t(474936),
    p = t(388032),
    g = t(742774);
function x(e) {
    let { isTabSelected: s, expiresAt: t, trialDuration: o, className: u } = e,
        d = r.useMemo(() => Date.parse(t), [t]),
        f = (0, c.Z)(d, 60000);
    return Object.values(f).every((e) => 0 === e)
        ? null
        : (0, n.jsx)(i.Tooltip, {
              text: (0, l.QX)(f, {
                  days: p.t.qVGNkZ,
                  hours: p.t.wyg9a2,
                  minutes: p.t.IzmIlZ
              }),
              children: (e) =>
                  (0, n.jsxs)('div', {
                      ...e,
                      className: a()(g.premiumTrialBadge, g.premiumTrialAcknowledgedBadge, u, { [g.premiumTrialBadgeSelected]: s }),
                      children: [
                          (0, n.jsx)(i.ClockIcon, {
                              size: 'custom',
                              width: 20,
                              height: 20,
                              color: 'currentColor',
                              className: g.premiumTrialBadgeIcon
                          }),
                          (0, n.jsxs)(i.Text, {
                              variant: 'eyebrow',
                              children: [' ', o, ' ']
                          })
                      ]
                  })
          });
}
function b(e) {
    var s;
    let { isTabSelected: t, trialOffer: r } = e,
        o = null === (s = (0, d.N)()) || void 0 === s ? void 0 : s.subscription_trial,
        a = (0, u.a5)({
            intervalType: null == o ? void 0 : o.interval,
            intervalCount: null == o ? void 0 : o.interval_count
        });
    return (0, n.jsx)(C, {
        isTabSelected: t,
        badgeCopy: a,
        offerExpiresAt: r.expires_at,
        className: (null == o ? void 0 : o.sku_id) === f.Si.TIER_2 ? g.premiumTrialTier2UnacknowledgedBadge : g.premiumTrialTier0UnacknowledgedBadge
    });
}
function v(e) {
    let { isTabSelected: s, userDiscount: t, includesAmountOff: r } = e,
        o = p.intl.formatToPlainString(p.t.iiLbvr, { percent: t.discount.amount });
    return (0, n.jsx)(C, {
        isTabSelected: s,
        badgeCopy: r ? o : p.intl.string(p.t['/DTtr6']),
        offerExpiresAt: t.expires_at,
        className: g.premiumDiscountUnacknowledgedBadge
    });
}
function C(e) {
    let { isTabSelected: s, badgeCopy: t, offerExpiresAt: r, className: o, ackedClassName: c } = e;
    return null != r
        ? (0, n.jsx)(x, {
              className: c,
              expiresAt: r,
              isTabSelected: s,
              trialDuration: t
          })
        : (0, n.jsx)('div', {
              className: a()(g.premiumTrialBadge, o),
              children: (0, n.jsx)(i.Text, {
                  variant: 'eyebrow',
                  className: g.premiumOfferBadgeCopy,
                  children: t
              })
          });
}
