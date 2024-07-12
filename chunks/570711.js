var i = n(735250);
n(470079);
var r = n(442837),
  o = n(481060),
  a = n(906732),
  s = n(963249),
  l = n(703656),
  d = n(594174),
  c = n(451478),
  C = n(981631),
  u = n(689938),
  _ = n(649166);
t.Z = function(e) {
  let {
subscriptionTier: t,
initialPlanId: n,
giftStyle: p,
onClick: f,
buttonText: x,
analyticsLocation: h,
analyticsLocationsOverride: b,
repeatPurchase: g,
...m
  } = e, L = (0, r.e7)([d.default], () => d.default.getCurrentUser()), I = (0, r.e7)([c.Z], () => c.Z.isFocused()), {
analyticsLocations: E
  } = (0, a.ZP)();
  return (0, i.jsx)(o.ShinyButton, {
pauseAnimation: !I,
className: _.tier2Gradient,
color: o.Button.Colors.CUSTOM,
onClick: e => {
  if (e.preventDefault(), null == L) {
    (0, l.uL)(C.Z5c.LOGIN);
    return;
  }
  null == f || f(e), (0, s.Z)({
    subscriptionTier: t,
    initialPlanId: n,
    isGift: !0,
    giftStyle: p,
    analyticsLocation: h,
    analyticsLocations: null != b ? b : E,
    analyticsObject: {
      object: C.qAy.BUTTON_CTA,
      objectType: C.Qqv.GIFT
    },
    repeatPurchase: g
  });
},
...m,
children: (0, i.jsx)(o.Text, {
  variant: 'text-sm/medium',
  color: 'none',
  className: _.buttonText,
  children: null != x ? x : u.Z.Messages.PREMIUM_GIFTING_BUTTON
})
  });
};