var s = n(735250);
n(470079);
var a = n(120356),
  r = n.n(a),
  i = n(481060),
  l = n(100527),
  o = n(906732),
  c = n(775412),
  d = n(520540),
  _ = n(197115),
  u = n(823188),
  E = n(386733),
  T = n(487980),
  I = n(689938),
  R = n(613105),
  C = n(872905),
  p = n(578478);
let g = e => {
let {
  className: t,
  inTrial: n
} = e;
return (0, s.jsx)(s.Fragment, {
  children: (0, s.jsxs)('div', {
    className: r()(R.container, t),
    'data-testid': 'subscriber-nitro-home-hero-header',
    children: [
      (0, s.jsx)('img', {
        src: C,
        alt: '',
        className: R.headerArt
      }),
      (0, s.jsxs)('div', {
        className: R.content,
        children: [
          (0, s.jsx)(u.Cy, {
            text: I.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
            className: r()(R.trialPill, {
              [R.hidden]: !n
            }),
            colorOptions: u.VE.PREMIUM_TIER_2_WHITE_FILL
          }),
          (0, s.jsx)(i.Heading, {
            variant: 'display-lg',
            color: 'always-white',
            children: I.Z.Messages.SUBSCRIBER_NITRO_HOME_TITLE_ONE_LINE
          }),
          (0, s.jsx)('div', {
            className: R.buttonContainer,
            children: (0, s.jsx)(_.Z, {
              color: i.ButtonColors.BRAND,
              buttonText: I.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING,
              className: R.button,
              isGift: !0
            })
          })
        ]
      })
    ]
  })
});
  },
  A = e => {
let {
  inTrial: t,
  location: n
} = e, {
  subscriberHomeVariant: a
} = d.g.useExperiment({
  location: n
}, {
  autoTrackExposure: !1
}), l = a === d.p.VARIANT_2;
return (0, s.jsxs)(s.Fragment, {
  children: [
    (0, s.jsx)('img', {
      src: p,
      alt: '',
      className: R.headerArtV2
    }),
    (0, s.jsx)('div', {
      className: R.containerV2,
      'data-testid': 'subscriber-nitro-home-hero-header',
      children: (0, s.jsxs)('div', {
        className: R.contentV2,
        children: [
          (0, s.jsx)(u.Cy, {
            text: I.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
            className: r()(R.trialPill, {
              [R.hidden]: !t
            }),
            colorOptions: u.VE.PREMIUM_TIER_2_WHITE_FILL
          }),
          (0, s.jsx)(i.Heading, {
            variant: 'display-lg',
            color: 'always-white',
            children: I.Z.Messages.SUBSCRIBER_NITRO_HOME_TITLE_ONE_LINE
          }),
          l && (0, s.jsx)('div', {
            className: R.buttonContainer,
            children: (0, s.jsx)(_.Z, {
              color: i.ButtonColors.BRAND,
              buttonText: I.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING,
              className: R.button,
              isGift: !0
            })
          }),
          (0, s.jsx)(E.Z, {})
        ]
      })
    })
  ]
});
  };
t.Z = e => {
  let {
className: t,
location: n
  } = e, {
analyticsLocations: a
  } = (0, o.ZP)(l.Z.PREMIUM_MARKETING_HERO_CTA), r = (0, c._O)(), i = (0, T.b)(n) ? (0, s.jsx)(A, {
inTrial: r,
location: n
  }) : (0, s.jsx)(g, {
className: t,
inTrial: r
  });
  return (0, s.jsx)(o.Gt, {
value: a,
children: i
  });
};