t.d(s, {
  $H: function() {
return b;
  },
  GN: function() {
return v;
  }
});
var n = t(735250),
  r = t(470079),
  a = t(120356),
  o = t.n(a),
  i = t(481060),
  c = t(774078),
  l = t(55935),
  u = t(74538),
  d = t(639119),
  f = t(474936),
  p = t(689938),
  g = t(176731);

function x(e) {
  let {
isTabSelected: s,
expiresAt: t,
trialDuration: a
  } = e, u = r.useMemo(() => Date.parse(t), [t]), d = (0, c.Z)(u, 60000);
  return Object.values(d).every(e => 0 === e) ? null : (0, n.jsx)(i.Tooltip, {
text: (0, l.QX)(d, {
  days: p.Z.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_DAYS,
  hours: p.Z.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_HOURS,
  minutes: p.Z.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_MINUTES
}),
children: e => (0, n.jsxs)('div', {
  ...e,
  className: o()(g.premiumTrialBadge, g.premiumTrialAcknowledgedBadge, {
    [g.premiumTrialBadgeSelected]: s
  }),
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
      children: [
        ' ',
        a,
        ' '
      ]
    })
  ]
})
  });
}

function b(e) {
  var s;
  let {
isTabSelected: t,
trialOffer: r
  } = e, a = null === (s = (0, d.N)()) || void 0 === s ? void 0 : s.subscription_trial, o = (0, u.a5)({
intervalType: null == a ? void 0 : a.interval,
intervalCount: null == a ? void 0 : a.interval_count
  });
  return (0, n.jsx)(_, {
isTabSelected: t,
badgeCopy: o,
offerExpiresAt: r.expires_at,
className: (null == a ? void 0 : a.sku_id) === f.Si.TIER_2 ? g.premiumTrialTier2UnacknowledgedBadge : g.premiumTrialTier0UnacknowledgedBadge
  });
}

function v(e) {
  let {
isTabSelected: s,
userDiscount: t,
includesAmountOff: r
  } = e, a = p.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
percent: t.discount.amount
  });
  return (0, n.jsx)(_, {
isTabSelected: s,
badgeCopy: r ? a : p.Z.Messages.PREMIUM_DISCOUNT_BADGE,
offerExpiresAt: t.expires_at,
className: g.premiumDiscountUnacknowledgedBadge
  });
}

function _(e) {
  let {
isTabSelected: s,
badgeCopy: t,
offerExpiresAt: r,
className: a
  } = e;
  return null != r ? (0, n.jsx)(x, {
expiresAt: r,
isTabSelected: s,
trialDuration: t
  }) : (0, n.jsx)('div', {
className: o()(g.premiumTrialBadge, a),
children: (0, n.jsxs)(i.Text, {
  variant: 'eyebrow',
  children: [
    ' ',
    t,
    ' '
  ]
})
  });
}