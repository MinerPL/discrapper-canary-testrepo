n.d(t, {
  Z: function() {
return I;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  o = n(442837),
  s = n(481060),
  l = n(607070),
  u = n(104494),
  c = n(639119),
  d = n(165583),
  _ = n(197115),
  E = n(810090),
  f = n(981631),
  h = n(474936),
  p = n(689938),
  m = n(857552);

function I(e) {
  var t, n;
  let {
onDismiss: i
  } = e, I = (0, o.e7)([l.Z], () => l.Z.useReducedMotion), T = p.Z.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_UNLIMITED_V2, g = (0, c.N)(), S = (0, u.Ng)(), A = (null == g ? void 0 : g.subscription_trial) != null || null != S, N = {
object: f.qAy.BUTTON_CTA,
section: f.jXE.SUPER_REACTION_PICKER
  };
  return (0, r.jsxs)('div', {
className: m.wrapper,
children: [
  (0, r.jsx)(s.Clickable, {
    onClick: i,
    className: m.closeButton,
    'aria-label': p.Z.Messages.DISMISS,
    children: (0, r.jsx)(s.CloseSmallIcon, {
      size: 'md',
      color: 'currentColor'
    })
  }),
  (0, r.jsxs)('div', {
    className: m.content,
    children: [
      (0, r.jsx)('div', {
        className: m.contentFill,
        children: (0, r.jsx)(E.Z, {
          className: a()(m.banner, {
            [m.hasTrialOffer]: A
          }),
          src: 'https://cdn.discordapp.com/attachments/955557117622886410/1085270553759322153/super-reactions-launch.mp4',
          loop: !0,
          autoPlay: !I,
          muted: !0,
          controls: !0
        })
      }),
      A ? (0, r.jsx)(d.ZP, {
        type: h.cd.BURST_REACTION_QUICK_ACTION_UPSELL,
        subscriptionTier: null !== (n = null == g ? void 0 : null === (t = g.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : h.Si.TIER_2,
        headingText: p.Z.Messages.SUPER_REACTIONS_UPSELL_TITLE_MOBILE,
        analyticsLocationObject: N,
        discountOffer: S,
        trialOffer: g,
        children: T
      }) : (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsxs)('div', {
            className: m.header,
            children: [
              (0, r.jsx)(s.NitroWheelIcon, {
                size: 'custom',
                color: 'currentColor',
                className: m.nitroWheel,
                width: 32,
                height: 32
              }),
              (0, r.jsx)(s.Heading, {
                className: m.headerText,
                variant: 'heading-xl/bold',
                children: p.Z.Messages.SUPER_REACTIONS_UPSELL_TITLE_MOBILE
              })
            ]
          }),
          (0, r.jsx)(s.Text, {
            className: m.subheaderText,
            variant: 'text-md/normal',
            children: T
          }),
          (0, r.jsx)('div', {
            className: m.ctaActionWrapper,
            children: (0, r.jsx)(_.Z, {
              subscriptionTier: h.Si.TIER_2,
              buttonText: p.Z.Messages.UNLOCK_WITH_NITRO
            })
          })
        ]
      })
    ]
  })
]
  });
}