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
  h = s(100527),
  g = s(906732),
  O = s(211242),
  p = s(15640),
  R = s(89057),
  x = s(703656),
  M = s(246946),
  D = s(78839),
  f = s(586576),
  P = s(483444),
  L = s(626135),
  Z = s(74538),
  b = s(140465),
  v = s(646476),
  j = s(730314),
  B = s(91802),
  U = s(898997),
  G = s(197115),
  F = s(823188),
  y = s(504865),
  V = s(179984),
  Y = s(386733),
  w = s(487980),
  k = s(474936),
  H = s(981631),
  W = s(689938),
  K = s(536273),
  z = s(881188),
  Q = s(520314),
  X = s(434691);

function q() {
  var e, t, s;
  let a = (0, c.e7)([D.ZP], () => D.ZP.getPremiumTypeSubscription()),
{
  bucket: i
} = (0, j.wj)('PremiumMarketingHome'),
o = i > 0,
d = (0, b.t7)(),
u = (0, b.lr)(),
T = (0, A.ZP)();
  if (null == a || null == a.planIdFromItems)
return null;
  let S = null != a.trialId,
C = a.planIdFromItems === k.Xh.PREMIUM_YEAR_TIER_2,
m = d || S,
h = null != a.trialEndsAt ? l()(a.trialEndsAt).diff(l()(), 'd') : 0,
g = k.GP[a.planIdFromItems],
O = Z.ZP.formatPriceString(Z.ZP.getDefaultPrice(g.id), g.interval);
  return (0, n.jsxs)('div', {
className: r()(K.tierCard, {
  [K.withTier2Rim]: m
}),
children: [
  (0, n.jsxs)('div', {
    className: r()({
      [K.tierInfo]: !o,
      [K.modifiedTierInfo]: o
    }),
    children: [
      (0, n.jsx)(P.Z, {
        className: r()({
          [K.tierTitle]: !o,
          [K.modifiedTier2Title]: o
        })
      }),
      o && (0, n.jsx)(E.Text, {
        variant: 'display-md',
        color: 'always-white',
        className: K.modifiedSubHeader,
        children: W.Z.Messages.PREMIUM_TIER_2_SUBHEADER
      }),
      m ? (0, n.jsxs)(n.Fragment, {
        children: [
          (S || !C) && (0, n.jsx)(F.Cy, {
            text: S ? W.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED : W.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
            className: K.topRimPill,
            colorOptions: (0, _.wj)(T) ? F.VE.PREMIUM_TIER_2_WHITE_FILL : F.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
          }),
          (S || !C) && (0, n.jsx)('div', {
            className: K.rimGlowTier2
          }),
          (0, n.jsx)(E.Heading, {
            variant: 'heading-md/normal',
            color: 'always-white',
            className: K.trialHeader,
            children: S ? W.Z.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
              remainingTime: h,
              price: O
            }) : C ? W.Z.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
              percent: null !== (e = null == u ? void 0 : u.percentage) && void 0 !== e ? e : k.Bo,
              regularPrice: O
            }) : W.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
              percent: null !== (t = null == u ? void 0 : u.percentage) && void 0 !== t ? t : k.M_,
              regularPrice: O,
              numMonths: null !== (s = null == u ? void 0 : u.duration) && void 0 !== s ? s : k.rt
            })
          })
        ]
      }) : (0, n.jsx)(y.Z, {
        variant: o ? 'heading-lg/normal' : void 0,
        subscriptionTier: k.Si.TIER_2,
        interval: g.interval,
        shouldUseModifiedCopy: o
      }),
      (0, n.jsx)(F.nT, {
        featureSet: o ? F.uZ.MODIFIED : void 0
      }),
      (0, n.jsx)(E.Button, {
        className: K.tierCardButton,
        color: E.Button.Colors.WHITE,
        onClick: () => {
          L.default.track(H.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: 'to_premium_home_button',
            target: 'premium home page'
          }), (0, I.xf)(), (0, x.uL)(H.Z5c.APPLICATION_STORE);
        },
        children: (0, n.jsx)(E.Text, {
          className: K.tierCardButtonCTA,
          variant: 'text-sm/medium',
          children: W.Z.Messages.PREMIUM_SETTINGS_NAVIGATE_TO_HOME_CTA_V2
        })
      }),
      (0, n.jsx)(E.Button, {
        className: K.managePlanButton,
        look: E.Button.Looks.OUTLINED,
        color: E.Button.Colors.WHITE,
        onClick: () => {
          L.default.track(H.rMx.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: 'to_subscriptions_button',
            target: 'subscriptions settings'
          }), N.Z.open(H.oAB.SUBSCRIPTIONS);
        },
        children: (0, n.jsx)(E.Text, {
          className: K.__invalid_managePlanButtonCTA,
          variant: 'text-sm/medium',
          color: 'always-white',
          children: W.Z.Messages.PREMIUM_SETTINGS_NATIGATE_TO_SUBSCRIPTIONS_CTA
        })
      })
    ]
  }),
  !o && (0, n.jsx)('div', {
    className: K.tierImage,
    children: (0, n.jsx)('img', {
      className: K.tierImage,
      alt: '',
      src: z
    })
  })
]
  });
}

function J() {
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
className: r()(K.giftCard, {
  [K.giftCardSeasonal]: s
}),
children: [
  s && (0, n.jsx)('img', {
    className: K.seasonalGiftImage,
    alt: '',
    src: Q
  }),
  (0, n.jsx)('img', {
    className: K.giftImage,
    style: {
      visibility: s ? 'hidden' : 'visible'
    },
    alt: '',
    src: X
  }),
  (0, n.jsxs)('div', {
    className: K.giftInfo,
    children: [
      (0, n.jsx)(E.Heading, {
        className: r()(K.giftTitle, {
          [K.seasonalColor]: s
        }),
        variant: 'heading-xl/extrabold',
        children: s ? W.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_HEADING : W.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING
      }),
      (0, n.jsx)(E.Text, {
        className: r()(K.giftText, {
          [K.seasonalColor]: s
        }),
        variant: 'text-sm/normal',
        children: s ? W.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_BODY : W.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_BODY
      }),
      (0, n.jsx)(G.Z, {
        isGift: !0,
        className: r()(K.giftCardButton, s ? K.seasonalColor : K.giftCardButtonColor),
        look: E.Button.Looks.OUTLINED,
        buttonText: W.Z.Messages.GIFT_NITRO,
        buttonTextClassName: K.giftButtonCTA,
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
t.Z = function() {
  let e = (0, O.Q)(),
{
  analyticsLocations: t
} = (0, g.ZP)(h.Z.PREMIUM_SETTINGS),
s = (0, c.e7)([D.ZP], () => D.ZP.getPremiumTypeSubscription()),
i = (0, c.e7)([D.ZP], () => D.ZP.hasFetchedSubscriptions()),
r = (0, p.V)(),
[o, l] = a.useState(!0),
_ = (0, B.n)(),
I = null == _ ? void 0 : _.countryCode,
N = (0, c.e7)([M.Z], () => M.Z.enabled),
A = 'PremiumManagementSettings';
  (0, m.j)({
location: A + ' auto on',
autoTrackExposure: !0
  }), (0, m.j)({
location: A + ' auto off',
autoTrackExposure: !1
  }), (0, U.B)('PremiumManagementSettings');
  let x = (0, w.b)('PremiumManagementSettings');
  a.useEffect(() => {
u.Z.wait(async () => {
  !N && !e && await Promise.all([
    T.jg(),
    T.tZ(),
    (0, S.Y2)(I, null, H.JjL.DISCOVERY)
  ]), l(!1);
});
  }, [
I,
N,
e
  ]);
  let [P, Z] = a.useState(!1);
  if (N)
return (0, n.jsx)(C.Z, {});
  if (e)
return (0, n.jsx)(R.c8, {});
  if ((!i || null == s || !r) && !o)
return (0, n.jsx)(f.Z, {
  title: W.Z.Messages.REDIRECTED_CALLBACK_ERROR,
  note: null
});
  if (!i || null == s || !r || o)
return (0, n.jsx)(E.Spinner, {});
  let b = null != s.trialId;
  return (0, n.jsx)(g.Gt, {
value: t,
children: (0, n.jsxs)(n.Fragment, {
  children: [
    (0, n.jsxs)('div', {
      className: K.__invalid_container,
      children: [
        (0, n.jsx)(q, {}),
        x && (0, n.jsx)(Y.Z, {
          isInSettings: !0
        }),
        (0, n.jsx)(J, {}),
        (0, n.jsx)(V.Z, {
          className: K.__invalid_planComparisonTable,
          hideCTAs: !0,
          headingOverride: W.Z.Messages.PREMIUM_COMPARISON_TABLE_WHAT_YOU_HAVE_GOT_TITLE,
          hidePill: !b,
          selectedPlanColumnClassName: K.tier2PlanComparisonTableBackground,
          selectedPlanTier: k.p9.TIER_2
        })
      ]
    }),
    (0, n.jsx)(d.$, {
      onChange: e => {
        e && !P && (L.default.track(H.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
          location_stack: t
        }), Z(!0));
      },
      children: (0, n.jsx)('div', {
        className: K.bottomOfPageVisibilitySensor
      })
    })
  ]
})
  });
};