var s = n(735250);
n(470079);
var a = n(120356),
  r = n.n(a),
  i = n(338545),
  l = n(481060),
  o = n(104494),
  c = n(639119),
  d = n(318747),
  _ = n(409100),
  u = n(474936),
  E = n(981631),
  T = n(145227);
t.Z = function(e) {
  var t, n;
  let {
isVisible: a,
isFullscreen: I,
subscriptionTier: R
  } = e, C = null === (t = (0, c.N)()) || void 0 === t ? void 0 : t.subscription_trial, g = (0, o.Ng)(), p = (0, o.Wp)(g, u.Si.TIER_2) ? u.Si.TIER_2 : void 0, A = (0, l.useSpring)({
transform: a ? 'translateY(-100%)' : 'translateY(0%)',
opacity: a ? 1 : 0,
config: {
  tension: 120,
  friction: 12
}
  }), m = {
section: E.jXE.MARKETING_FLOATING_CTA
  };
  return (0, s.jsx)(i.animated.div, {
className: r()(T.wrapper, {
  [T.fullscreenWrapper]: I,
  [T.invisible]: !a
}),
style: A,
children: (0, s.jsxs)('div', {
  className: T.innerWrapper,
  children: [
    (0, s.jsx)(_.Z, {
      className: T.button,
      subscriptionTier: null !== (n = null != R ? R : null == C ? void 0 : C.sku_id) && void 0 !== n ? n : p,
      premiumModalAnalyticsLocation: m,
      isPersistentCTA: !0
    }),
    (0, s.jsx)(d.Z, {
      className: T.button,
      premiumModalAnalyticsLocation: m
    })
  ]
})
  });
};