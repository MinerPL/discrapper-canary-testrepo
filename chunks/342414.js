var s = n(735250);
n(470079);
var a = n(120356),
  r = n.n(a),
  i = n(442837),
  l = n(481060),
  o = n(100527),
  c = n(906732),
  d = n(78839),
  _ = n(775412),
  u = n(520540),
  E = n(197115),
  T = n(823188),
  I = n(184176),
  R = n(938736),
  C = n(386733),
  g = n(689938),
  N = n(636013),
  p = n(872905),
  A = n(578478);
let m = e => {
let {
  className: t,
  inTrial: n
} = e;
return (0, s.jsx)(s.Fragment, {
  children: (0, s.jsxs)('div', {
    className: r()(N.container, t),
    'data-testid': 'subscriber-nitro-home-hero-header',
    children: [
      (0, s.jsx)('img', {
        src: p,
        alt: '',
        className: N.headerArt
      }),
      (0, s.jsxs)('div', {
        className: N.content,
        children: [
          (0, s.jsx)(T.Cy, {
            text: g.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
            className: r()(N.trialPill, {
              [N.hidden]: !n
            }),
            colorOptions: T.VE.PREMIUM_TIER_2_WHITE_FILL
          }),
          (0, s.jsx)(l.Heading, {
            variant: 'display-lg',
            color: 'always-white',
            children: g.Z.Messages.SUBSCRIBER_NITRO_HOME_TITLE_ONE_LINE
          }),
          (0, s.jsx)('div', {
            className: N.buttonContainer,
            children: (0, s.jsx)(E.Z, {
              color: l.ButtonColors.BRAND,
              buttonText: g.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING,
              className: N.button,
              isGift: !0
            })
          })
        ]
      })
    ]
  })
});
  },
  f = e => {
let {
  inTrial: t,
  location: n
} = e, {
  subscriberHomeVariant: a
} = u.g.useExperiment({
  location: n
}, {
  autoTrackExposure: !1
}), i = a === u.p.VARIANT_2;
return (0, s.jsxs)(s.Fragment, {
  children: [
    (0, s.jsx)('img', {
      src: A,
      alt: '',
      className: N.headerArtV2
    }),
    (0, s.jsx)('div', {
      className: N.containerV2,
      'data-testid': 'subscriber-nitro-home-hero-header',
      children: (0, s.jsxs)('div', {
        className: N.contentV2,
        children: [
          (0, s.jsx)(T.Cy, {
            text: g.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
            className: r()(N.trialPill, {
              [N.hidden]: !t
            }),
            colorOptions: T.VE.PREMIUM_TIER_2_WHITE_FILL
          }),
          (0, s.jsx)(l.Heading, {
            variant: 'display-lg',
            color: 'always-white',
            children: g.Z.Messages.SUBSCRIBER_NITRO_HOME_TITLE_ONE_LINE
          }),
          i && (0, s.jsx)('div', {
            className: N.buttonContainer,
            children: (0, s.jsx)(E.Z, {
              color: l.ButtonColors.BRAND,
              buttonText: g.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING,
              className: N.button,
              isGift: !0
            })
          }),
          (0, s.jsx)(C.Z, {})
        ]
      })
    })
  ]
});
  },
  S = () => (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)('img', {
    src: A,
    alt: '',
    className: N.headerArtV2
  }),
  (0, s.jsx)('div', {
    className: N.reverseContainer,
    'data-testid': 'subscriber-nitro-home-hero-header',
    children: (0, s.jsxs)('div', {
      className: N.contentV2,
      children: [
        (0, s.jsx)('div', {
          className: N.reverseTrialHomeHeader,
          children: (0, s.jsx)(l.Heading, {
            variant: 'display-lg',
            color: 'always-white',
            children: g.Z.Messages.SUBSCRIBER_NITRO_HOME_TITLE_ONE_LINE
          })
        }),
        (0, s.jsx)(I.Z, {})
      ]
    })
  })
]
  });
t.Z = e => {
  let {
className: t,
location: n
  } = e, {
analyticsLocations: a
  } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA), r = (0, i.e7)([d.ZP], () => d.ZP.inReverseTrial()), l = (0, _._O)(), u = (0, R.bD)(n), E = (0, s.jsx)(m, {
className: t,
inTrial: l
  });
  return r && (E = (0, s.jsx)(S, {})), u && (E = (0, s.jsx)(f, {
inTrial: l,
location: n
  })), (0, s.jsx)(c.Gt, {
value: a,
children: E
  });
};