var s = n(735250);
n(470079);
var a = n(120356),
  r = n.n(a),
  i = n(481060),
  l = n(906732),
  o = n(646476),
  c = n(197115),
  d = n(689938),
  _ = n(332332),
  u = n(568147),
  E = n(332796);
t.Z = e => {
  let {
className: t,
imageClassName: n,
textContainerOverrideStyles: a,
location: T,
analyticsLocation: I
  } = e, {
analyticsLocations: R
  } = (0, l.ZP)(T), C = (0, o.rK)(), {
enabled: p
  } = o.RO.useExperiment({
location: 'GiftNitro'
  }, {
autoTrackExposure: C
  }), g = p && C;
  return (0, s.jsx)(l.Gt, {
value: R,
children: (0, s.jsxs)('div', {
  className: r()(_.container, t),
  children: [
    (0, s.jsxs)('div', {
      className: _.textContainer,
      style: a,
      children: [
        (0, s.jsx)(i.Heading, {
          variant: 'heading-lg/extrabold',
          className: _.heading,
          children: g ? d.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_HEADING : d.Z.Messages.GIFT_NITRO
        }),
        (0, s.jsx)(i.Text, {
          variant: 'text-sm/medium',
          children: g ? d.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_BODY : d.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_BODY
        }),
        (0, s.jsx)(c.Z, {
          isGift: !0,
          className: _.giftCardButton,
          look: i.Button.Looks.OUTLINED,
          buttonText: d.Z.Messages.GIFT_NITRO,
          buttonTextClassName: _.giftButtonCTA,
          color: i.Button.Colors.CUSTOM,
          premiumModalAnalyticsLocation: I
        })
      ]
    }),
    (0, s.jsx)('img', {
      src: g ? E : u,
      className: r()(_.bannerImage, n),
      alt: 'gift nitro banner'
    })
  ]
})
  });
};