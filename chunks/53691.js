n.d(t, {
  p: function() {
return c;
  }
});
var r = n(735250);
n(470079);
var i = n(338545),
  a = n(481060),
  s = n(436774),
  o = n(197115),
  l = n(474936),
  u = n(517246);

function c(e) {
  let {
showUpsell: t,
upsellText: n,
ctaText: c,
ctaAnalyticsObject: d
  } = e, _ = (0, a.useSpring)({
transform: t ? 'translateY(0%)' : 'translateY(120%)',
opacity: t ? 1 : 0,
config: {
  tension: 120,
  friction: 14
}
  });
  return (0, r.jsxs)(i.animated.div, {
style: {
  ..._
},
className: u.upsellContainer,
children: [
  (0, r.jsx)(a.NitroWheelIcon, {
    size: 'md',
    color: s.JX.PREMIUM_TIER_2
  }),
  (0, r.jsx)(a.Text, {
    variant: 'text-sm/medium',
    color: 'header-primary',
    className: u.upsellText,
    children: n
  }),
  (0, r.jsx)(o.Z, {
    className: u.upsellButton,
    size: a.ButtonSizes.TINY,
    shinyButtonClassName: u.upsellButton,
    subscriptionTier: l.Si.TIER_2,
    buttonText: c,
    premiumModalAnalyticsLocation: d,
    tabIndex: t ? 0 : -1
  })
]
  });
}