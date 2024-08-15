var s = t(735250);
t(470079);
var r = t(120356),
  a = t.n(r),
  i = t(442837),
  c = t(481060),
  l = t(607070),
  L = t(600164),
  C = t(483444),
  o = t(599250),
  u = t(926153),
  d = t(27693),
  S = t(74538),
  f = t(937615),
  h = t(104494),
  p = t(639119),
  T = t(108989),
  N = t(474936),
  R = t(689938),
  I = t(989287);
let E = e => {
  let {
isTier0: n,
discountAmount: t
  } = e, r = (0, p.N)(), i = null != r && r.trial_id === N.a7, l = R.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT;
  return void 0 !== t ? l = R.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
percent: t
  }) : i && (l = R.Z.Messages.REFERRAL_PROGRAM_TWO_WEEK_TRIAL), (0, s.jsx)('div', {
className: I.trialBadgeContainer,
children: (0, s.jsx)(c.Text, {
  variant: 'text-xs/bold',
  className: a()(I.trialOfferText, {
    [I.tier0TrialOffer]: n
  }),
  children: l
})
  });
};
n.Z = function(e) {
  var n;
  let t;
  let {
hideCloseButton: r = !1,
hideCloseOnFullScreen: p,
shouldShowPrice: m,
plan: M,
renderAnimation: _,
onClose: g,
isGift: x,
upgradeToPremiumType: v,
headerTheme: A = N.nL.DEFAULT,
className: Z,
showTrialBadge: j = !1,
showDiscountBadge: O = !1
  } = e, F = v === N.p9.TIER_2;
  t = v === N.p9.TIER_0 ? o.Z : v === N.p9.TIER_1 ? u.Z : C.Z;
  let H = (0, i.e7)([l.Z], () => l.Z.useReducedMotion),
P = (0, h.Ng)(),
B = null == P ? void 0 : null === (n = P.discount) || void 0 === n ? void 0 : n.amount;
  return (0, s.jsxs)('div', {
'aria-hidden': !0,
className: a()({
  [I.headerBackground]: !F,
  [A === N.nL.WINTER ? I.tier2HeaderBackgroundWinterTheme : I.tier2HeaderBackground]: F
}, Z),
children: [
  H || A !== N.nL.WINTER ? null : (0, s.jsx)(T.Z, {
    className: I.snow,
    wind: 5
  }),
  (j || O) && (0, s.jsx)(d.Z, {
    className: I.trialBadgeSparkles
  }),
  _(),
  (0, s.jsxs)(L.Z, {
    align: L.Z.Align.START,
    justify: L.Z.Justify.BETWEEN,
    className: I.headerTop,
    children: [
      (0, s.jsxs)('div', {
        children: [
          (0, s.jsx)(t, {
            className: a()(I.headerIcon, {
              [I.nonTier2]: !F
            })
          }),
          (j || O) && (0, s.jsx)(E, {
            isTier0: v === N.p9.TIER_0,
            discountAmount: O ? B : void 0
          })
        ]
      }),
      !r && (0, s.jsx)(c.ModalCloseButton, {
        hideOnFullscreen: p,
        onClick: g,
        className: I.closeButton
      })
    ]
  }),
  m && null != M ? (0, s.jsx)('div', {
    className: I.price,
    children: function(e, n) {
      let t = S.ZP.getDefaultPrice(e),
        {
          intervalType: s
        } = S.ZP.getInterval(e),
        r = (0, f.T4)(t.amount, t.currency);
      if (n)
        return r;
      switch (s) {
        case N.rV.MONTH:
          return R.Z.Messages.BILLING_PRICE_PER_MONTH.format({
            price: r
          });
        case N.rV.YEAR:
          return R.Z.Messages.BILLING_PRICE_PER_YEAR.format({
            price: r
          });
      }
    }(M, x)
  }) : null
]
  });
};