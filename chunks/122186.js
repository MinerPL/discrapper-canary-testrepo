t.d(n, {
  Z: function() {
return S;
  }
});
var l = t(735250);
t(470079);
var s = t(120356),
  a = t.n(s),
  r = t(848246),
  i = t(481060),
  o = t(197115),
  c = t(672752),
  u = t(74538),
  d = t(981631),
  m = t(474936),
  E = t(689938),
  _ = t(325625);

function S(e) {
  let {
message: n,
onClose: t,
openStreamUpsellModal: s,
glow: S = !1
  } = e, g = {
section: d.jXE.STREAM_SETTINGS,
object: d.qAy.PREMIUM_UPSELL_BANNER,
objectType: d.Qqv.BUY
  }, C = (0, u.So)(r.q.STREAM_HIGH_QUALITY);
  return (0, l.jsxs)('div', {
className: a()(_.upsellBanner, _.enhancedBanner, {
  [_.gradientGlow]: S
}),
children: [
  (0, l.jsxs)('div', {
    className: _.iconTextContainer,
    children: [
      (0, l.jsx)(i.NitroWheelIcon, {
        size: 'md',
        color: c.JX.PREMIUM_TIER_2
      }),
      (0, l.jsx)(i.Text, {
        variant: 'text-sm/medium',
        className: a()(_.upsellText, _.enhancedUpsellText),
        children: null != n ? n : C ? (0, l.jsxs)(l.Fragment, {
          children: [
            E.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_UPSELL_BODY,
            ' ',
            E.Z.Messages.LEARN_MORE_CLICK.format({
              onClick: () => s({
                analyticsLocation: g,
                onClose: t
              })
            })
          ]
        }) : E.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_LEARN_MORE_V3.format({
          onClick: () => s({
            analyticsLocation: g,
            onClose: t
          })
        })
      })
    ]
  }),
  (0, l.jsx)('div', {
    className: _.enhancedCTAs,
    children: (0, l.jsx)(o.Z, {
      className: a()(_.enhancedCTA, _.ctaGradientBackground),
      iconClassName: _.premiumIcon,
      subscriptionTier: m.Si.TIER_2,
      buttonText: E.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA,
      size: i.Button.Sizes.TINY,
      premiumModalAnalyticsLocation: g
    })
  })
]
  });
}