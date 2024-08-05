s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(913527),
  l = s.n(o),
  c = s(442837),
  d = s(622535),
  _ = s(780384),
  E = s(481060),
  u = s(570140),
  T = s(355467),
  I = s(37234),
  S = s(821849),
  N = s(230711),
  C = s(497321),
  m = s(634894),
  A = s(410030),
  g = s(100527),
  h = s(906732),
  O = s(211242),
  p = s(15640),
  R = s(89057),
  x = s(406128),
  M = s(703656),
  f = s(246946),
  D = s(78839),
  P = s(483444),
  L = s(626135),
  b = s(74538),
  Z = s(140465),
  v = s(646476),
  j = s(91802),
  B = s(898997),
  U = s(197115),
  G = s(823188),
  F = s(504865),
  y = s(179984),
  V = s(386733),
  Y = s(487980),
  w = s(474936),
  k = s(981631),
  H = s(689938),
  W = s(536273),
  K = s(881188),
  z = s(520314),
  Q = s(434691);

function X() {
  var e, t, s;
  let a = (0, c.e7)([D.ZP], () => D.ZP.getPremiumTypeSubscription()),
i = (0, Z.t7)(),
o = (0, Z.lr)(),
d = (0, A.ZP)();
  if (null == a || null == a.planIdFromItems)
return null;
  let u = null != a.trialId,
T = a.planIdFromItems === w.Xh.PREMIUM_YEAR_TIER_2,
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
          (u || !T) && (0, n.jsx)(G.Cy, {
            text: u ? H.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED : H.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
            className: W.topRimPill,
            colorOptions: (0, _.wj)(d) ? G.VE.PREMIUM_TIER_2_WHITE_FILL : G.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
          }),
          (u || !T) && (0, n.jsx)('div', {
            className: W.rimGlowTier2
          }),
          (0, n.jsx)(E.Heading, {
            variant: 'heading-md/normal',
            color: 'always-white',
            className: W.trialHeader,
            children: u ? H.Z.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
              remainingTime: C,
              price: g
            }) : T ? H.Z.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
              percent: null !== (e = null == o ? void 0 : o.percentage) && void 0 !== e ? e : w.Bo,
              regularPrice: g
            }) : H.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
              percent: null !== (t = null == o ? void 0 : o.percentage) && void 0 !== t ? t : w.M_,
              regularPrice: g,
              numMonths: null !== (s = null == o ? void 0 : o.duration) && void 0 !== s ? s : w.rt
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
          L.default.track(k.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: 'to_premium_home_button',
            target: 'premium home page'
          }), (0, I.xf)(), (0, M.uL)(k.Z5c.APPLICATION_STORE);
        },
        children: (0, n.jsx)(E.Text, {
          className: W.tierCardButtonCTA,
          variant: 'text-sm/medium',
          children: H.Z.Messages.PREMIUM_SETTINGS_NAVIGATE_TO_HOME_CTA_V2
        })
      }),
      (0, n.jsx)(E.Button, {
        className: W.managePlanButton,
        look: E.Button.Looks.OUTLINED,
        color: E.Button.Colors.WHITE,
        onClick: () => {
          L.default.track(k.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: 'to_subscriptions_button',
            target: 'subscriptions settings'
          }), N.Z.open(k.oAB.SUBSCRIPTIONS);
        },
        children: (0, n.jsx)(E.Text, {
          className: W.__invalid_managePlanButtonCTA,
          variant: 'text-sm/medium',
          color: 'always-white',
          children: H.Z.Messages.PREMIUM_SETTINGS_NATIGATE_TO_SUBSCRIPTIONS_CTA
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
  enabled: t
} = v.RO.useExperiment({
  location: 'GiftNitro'
}, {
  autoTrackExposure: e
}),
s = t && e;
  return (0, n.jsxs)('div', {
className: r()(W.giftCard, {
  [W.giftCardSeasonal]: s
}),
children: [
  s && (0, n.jsx)('img', {
    className: W.seasonalGiftImage,
    alt: '',
    src: z
  }),
  (0, n.jsx)('img', {
    className: W.giftImage,
    style: {
      visibility: s ? 'hidden' : 'visible'
    },
    alt: '',
    src: Q
  }),
  (0, n.jsxs)('div', {
    className: W.giftInfo,
    children: [
      (0, n.jsx)(E.Heading, {
        className: r()(W.giftTitle, {
          [W.seasonalColor]: s
        }),
        variant: 'heading-xl/extrabold',
        children: s ? H.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_HEADING : H.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING
      }),
      (0, n.jsx)(E.Text, {
        className: r()(W.giftText, {
          [W.seasonalColor]: s
        }),
        variant: 'text-sm/normal',
        children: s ? H.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_BODY : H.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_BODY
      }),
      (0, n.jsx)(U.Z, {
        isGift: !0,
        className: r()(W.giftCardButton, s ? W.seasonalColor : W.giftCardButtonColor),
        look: E.Button.Looks.OUTLINED,
        buttonText: H.Z.Messages.GIFT_NITRO,
        buttonTextClassName: W.giftButtonCTA,
        color: E.Button.Colors.CUSTOM,
        onClick: () => {
          L.default.track(k.rMx.PREMIUM_SETTINGS_INTERACTED, {
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
t.Z = function() {
  let e = (0, O.Q)(),
{
  analyticsLocations: t
} = (0, h.ZP)(g.Z.PREMIUM_SETTINGS),
s = (0, c.e7)([D.ZP], () => D.ZP.getPremiumTypeSubscription()),
i = (0, c.e7)([D.ZP], () => D.ZP.hasFetchedSubscriptions()),
r = (0, p.V)(),
[o, l] = a.useState(!0),
_ = (0, j.n)(),
I = null == _ ? void 0 : _.countryCode,
N = (0, c.e7)([f.Z], () => f.Z.enabled),
A = 'PremiumManagementSettings';
  (0, m.j)({
location: A + ' auto on',
autoTrackExposure: !0
  }), (0, m.j)({
location: A + ' auto off',
autoTrackExposure: !1
  }), (0, B.B)('PremiumManagementSettings');
  let M = (0, Y.b)('PremiumManagementSettings');
  a.useEffect(() => {
u.Z.wait(async () => {
  !N && !e && await Promise.all([
    T.jg(),
    T.tZ(),
    (0, S.Y2)(I, null, k.JjL.DISCOVERY)
  ]), l(!1);
});
  }, [
I,
N,
e
  ]);
  let [P, b] = a.useState(!1);
  if (N)
return (0, n.jsx)(C.Z, {});
  if (e)
return (0, n.jsx)(R.c8, {});
  if ((!i || null == s || !r) && !o)
return (0, n.jsx)(x.Z, {
  title: H.Z.Messages.REDIRECTED_CALLBACK_ERROR,
  note: null
});
  if (!i || null == s || !r || o)
return (0, n.jsx)(E.Spinner, {});
  let Z = null != s.trialId;
  return (0, n.jsx)(h.Gt, {
value: t,
children: (0, n.jsxs)(n.Fragment, {
  children: [
    (0, n.jsxs)('div', {
      className: W.__invalid_container,
      children: [
        (0, n.jsx)(X, {}),
        M && (0, n.jsx)(V.Z, {
          isInSettings: !0
        }),
        (0, n.jsx)(q, {}),
        (0, n.jsx)(y.Z, {
          className: W.__invalid_planComparisonTable,
          hideCTAs: !0,
          headingOverride: H.Z.Messages.PREMIUM_COMPARISON_TABLE_WHAT_YOU_HAVE_GOT_TITLE,
          hidePill: !Z,
          selectedPlanColumnClassName: W.tier2PlanComparisonTableBackground,
          selectedPlanTier: w.p9.TIER_2
        })
      ]
    }),
    (0, n.jsx)(d.$, {
      onChange: e => {
        e && !P && (L.default.track(k.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
          location_stack: t
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