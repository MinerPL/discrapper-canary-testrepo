n.d(t, {
  p: function() {
return _;
  }
});
var r = n(735250);
n(470079);
var i = n(338545),
  a = n(442837),
  s = n(481060),
  o = n(607070),
  l = n(672752),
  u = n(197115),
  c = n(474936),
  d = n(517246);

function _(e) {
  let {
showUpsell: t,
upsellText: n,
ctaText: _,
ctaAnalyticsObject: E
  } = e, f = (0, a.e7)([o.Z], () => o.Z.useReducedMotion), h = (0, i.useSpring)({
transform: t ? 'translateY(0%)' : 'translateY(120%)',
opacity: t ? 1 : 0,
config: {
  tension: 120,
  friction: 14
},
immediate: f
  });
  return (0, r.jsxs)(i.animated.div, {
style: {
  ...h,
  opacity: h.opacity
},
className: d.upsellContainer,
children: [
  (0, r.jsx)(s.NitroWheelIcon, {
    size: 'md',
    color: l.JX.PREMIUM_TIER_2
  }),
  (0, r.jsx)(s.Text, {
    variant: 'text-sm/medium',
    color: 'header-primary',
    className: d.upsellText,
    children: n
  }),
  (0, r.jsx)(u.Z, {
    className: d.upsellButton,
    size: s.ButtonSizes.TINY,
    shinyButtonClassName: d.upsellButton,
    subscriptionTier: c.Si.TIER_2,
    buttonText: _,
    premiumModalAnalyticsLocation: E,
    tabIndex: t ? 0 : -1
  })
]
  });
}