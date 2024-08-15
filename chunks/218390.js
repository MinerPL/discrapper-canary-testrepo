t(47120);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(913527),
  l = t.n(o),
  c = t(442837),
  d = t(622535),
  _ = t(780384),
  E = t(481060),
  u = t(570140),
  I = t(355467),
  T = t(37234),
  S = t(821849),
  N = t(230711),
  C = t(497321),
  m = t(634894),
  A = t(410030),
  g = t(100527),
  O = t(906732),
  h = t(211242),
  p = t(15640),
  R = t(89057),
  x = t(406128),
  M = t(703656),
  f = t(246946),
  D = t(78839),
  P = t(483444),
  L = t(626135),
  b = t(74538),
  Z = t(140465),
  v = t(646476),
  j = t(91802),
  B = t(898997),
  U = t(197115),
  G = t(823188),
  F = t(504865),
  y = t(179984),
  V = t(938736),
  Y = t(386733),
  w = t(474936),
  H = t(981631),
  k = t(689938),
  W = t(374912),
  K = t(881188),
  z = t(520314),
  Q = t(434691);

function X() {
  var e, s, t;
  let a = (0, c.e7)([D.ZP], () => D.ZP.getPremiumTypeSubscription()),
i = (0, Z.t7)(),
o = (0, Z.lr)(),
d = (0, A.ZP)();
  if (null == a || null == a.planIdFromItems)
return null;
  let u = null != a.trialId,
I = a.planIdFromItems === w.Xh.PREMIUM_YEAR_TIER_2,
S = i || u,
C = null != a.trialEndsAt ? l()(a.trialEndsAt).diff(l()(), 'd') : 0,
m = w.GP[a.planIdFromItems],
g = b.ZP.formatPriceString(b.ZP.getDefaultPrice(m.id), m.interval);
  return (0, n.jsxs)('div', {
className: r()(W.tierCard, {
  [W.withTier2Rim]: S
}),
children: [
  (0, n.jsxs)('div', {
    className: W.tierInfo,
    children: [
      (0, n.jsx)(P.Z, {
        className: W.tierTitle
      }),
      S ? (0, n.jsxs)(n.Fragment, {
        children: [
          (u || !I) && (0, n.jsx)(G.Cy, {
            text: u ? k.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED : k.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
            className: W.topRimPill,
            colorOptions: (0, _.wj)(d) ? G.VE.PREMIUM_TIER_2_WHITE_FILL : G.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
          }),
          (u || !I) && (0, n.jsx)('div', {
            className: W.rimGlowTier2
          }),
          (0, n.jsx)(E.Heading, {
            variant: 'heading-md/normal',
            color: 'always-white',
            className: W.trialHeader,
            children: u ? k.Z.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
              remainingTime: C,
              price: g
            }) : I ? k.Z.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
              percent: null !== (e = null == o ? void 0 : o.percentage) && void 0 !== e ? e : w.Bo,
              regularPrice: g
            }) : k.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
              percent: null !== (s = null == o ? void 0 : o.percentage) && void 0 !== s ? s : w.M_,
              regularPrice: g,
              numMonths: null !== (t = null == o ? void 0 : o.duration) && void 0 !== t ? t : w.rt
            })
          })
        ]
      }) : (0, n.jsx)(F.Z, {
        variant: void 0,
        subscriptionTier: w.Si.TIER_2,
        interval: m.interval
      }),
      (0, n.jsx)(G.nT, {}),
      (0, n.jsx)(E.Button, {
        className: W.tierCardButton,
        color: E.Button.Colors.WHITE,
        onClick: () => {
          L.default.track(H.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: 'to_premium_home_button',
            target: 'premium home page'
          }), (0, T.xf)(), (0, M.uL)(H.Z5c.APPLICATION_STORE);
        },
        children: (0, n.jsx)(E.Text, {
          className: W.tierCardButtonCTA,
          variant: 'text-sm/medium',
          children: k.Z.Messages.PREMIUM_SETTINGS_NAVIGATE_TO_HOME_CTA_V2
        })
      }),
      (0, n.jsx)(E.Button, {
        className: W.managePlanButton,
        look: E.Button.Looks.OUTLINED,
        color: E.Button.Colors.WHITE,
        onClick: () => {
          L.default.track(H.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: 'to_subscriptions_button',
            target: 'subscriptions settings'
          }), N.Z.open(H.oAB.SUBSCRIPTIONS);
        },
        children: (0, n.jsx)(E.Text, {
          className: W.__invalid_managePlanButtonCTA,
          variant: 'text-sm/medium',
          color: 'always-white',
          children: k.Z.Messages.PREMIUM_SETTINGS_NATIGATE_TO_SUBSCRIPTIONS_CTA
        })
      })
    ]
  }),
  (0, n.jsx)('div', {
    className: W.tierImage,
    children: (0, n.jsx)('img', {
      className: W.tierImage,
      alt: '',
      src: K
    })
  })
]
  });
}

function q() {
  let e = (0, v.rK)(),
{
  enabled: s
} = v.RO.useExperiment({
  location: 'GiftNitro'
}, {
  autoTrackExposure: e
}),
t = s && e;
  return (0, n.jsxs)('div', {
className: r()(W.giftCard, {
  [W.giftCardSeasonal]: t
}),
children: [
  t && (0, n.jsx)('img', {
    className: W.seasonalGiftImage,
    alt: '',
    src: z
  }),
  (0, n.jsx)('img', {
    className: W.giftImage,
    style: {
      visibility: t ? 'hidden' : 'visible'
    },
    alt: '',
    src: Q
  }),
  (0, n.jsxs)('div', {
    className: W.giftInfo,
    children: [
      (0, n.jsx)(E.Heading, {
        className: r()(W.giftTitle, {
          [W.seasonalColor]: t
        }),
        variant: 'heading-xl/extrabold',
        children: t ? k.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_HEADING : k.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING
      }),
      (0, n.jsx)(E.Text, {
        className: r()(W.giftText, {
          [W.seasonalColor]: t
        }),
        variant: 'text-sm/normal',
        children: t ? k.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_BODY : k.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_BODY
      }),
      (0, n.jsx)(U.Z, {
        isGift: !0,
        className: r()(W.giftCardButton, t ? W.seasonalColor : W.giftCardButtonColor),
        look: E.Button.Looks.OUTLINED,
        buttonText: k.Z.Messages.GIFT_NITRO,
        buttonTextClassName: W.giftButtonCTA,
        color: E.Button.Colors.CUSTOM,
        onClick: () => {
          L.default.track(H.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: 'gifting_button',
            target: 'payment modal'
          });
        }
      })
    ]
  })
]
  });
}
s.Z = function() {
  let e = (0, h.Q)(),
{
  analyticsLocations: s
} = (0, O.ZP)(g.Z.PREMIUM_SETTINGS),
t = (0, c.e7)([D.ZP], () => D.ZP.getPremiumTypeSubscription()),
i = (0, c.e7)([D.ZP], () => D.ZP.hasFetchedSubscriptions()),
r = (0, p.V)(),
[o, l] = a.useState(!0),
_ = (0, j.n)(),
T = null == _ ? void 0 : _.countryCode,
N = (0, c.e7)([f.Z], () => f.Z.enabled),
A = 'PremiumManagementSettings';
  (0, m.j)({
location: A + ' auto on',
autoTrackExposure: !0
  }), (0, m.j)({
location: A + ' auto off',
autoTrackExposure: !1
  }), (0, B.B)('PremiumManagementSettings');
  let M = (0, V.bD)('PremiumManagementSettings');
  a.useEffect(() => {
u.Z.wait(async () => {
  !N && !e && await Promise.all([
    I.jg(),
    I.tZ(),
    (0, S.Y2)(T, null, H.JjL.DISCOVERY)
  ]), l(!1);
});
  }, [
T,
N,
e
  ]);
  let [P, b] = a.useState(!1);
  if (N)
return (0, n.jsx)(C.Z, {});
  if (e)
return (0, n.jsx)(R.c8, {});
  if ((!i || null == t || !r) && !o)
return (0, n.jsx)(x.Z, {
  title: k.Z.Messages.REDIRECTED_CALLBACK_ERROR,
  note: null
});
  if (!i || null == t || !r || o)
return (0, n.jsx)(E.Spinner, {});
  let Z = null != t.trialId;
  return (0, n.jsx)(O.Gt, {
value: s,
children: (0, n.jsxs)(n.Fragment, {
  children: [
    (0, n.jsxs)('div', {
      className: W.__invalid_container,
      children: [
        (0, n.jsx)(X, {}),
        M && (0, n.jsx)(Y.Z, {
          isInSettings: !0
        }),
        (0, n.jsx)(q, {}),
        (0, n.jsx)(y.Z, {
          className: W.__invalid_planComparisonTable,
          hideCTAs: !0,
          headingOverride: k.Z.Messages.PREMIUM_COMPARISON_TABLE_WHAT_YOU_HAVE_GOT_TITLE,
          hidePill: !Z,
          selectedPlanColumnClassName: W.tier2PlanComparisonTableBackground,
          selectedPlanTier: w.p9.TIER_2
        })
      ]
    }),
    (0, n.jsx)(d.$, {
      onChange: e => {
        e && !P && (L.default.track(H.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
          location_stack: s
        }), b(!0));
      },
      children: (0, n.jsx)('div', {
        className: W.bottomOfPageVisibilitySensor
      })
    })
  ]
})
  });
};