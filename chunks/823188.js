n.d(t, {
  Cy: function() {
return K;
  },
  Gq: function() {
return $;
  },
  VE: function() {
return s;
  },
  ZP: function() {
return et;
  },
  nT: function() {
return J;
  },
  uZ: function() {
return l;
  },
  wp: function() {
return ee;
  }
});
var r, i, a, s, o, l, u = n(735250);
n(470079);
var c = n(120356),
  d = n.n(c),
  _ = n(913527),
  E = n.n(_),
  f = n(442837),
  h = n(692547),
  p = n(780384),
  m = n(481060),
  I = n(410030),
  T = n(100527),
  g = n(906732),
  S = n(535322),
  A = n(706454),
  N = n(594174),
  v = n(78839),
  O = n(709586),
  R = n(483444),
  C = n(599250),
  y = n(930153),
  D = n(74538),
  L = n(357355),
  b = n(140465),
  M = n(650032),
  P = n(104494),
  U = n(639119),
  w = n(230916),
  x = n(248042),
  G = n(504865),
  k = n(63802),
  B = n(318990),
  F = n(474936),
  V = n(217702),
  H = n(689938),
  Z = n(120985),
  Y = n(476945),
  j = n(945182);

function W(e) {
  let {
text: t,
className: n,
colorOptions: r = 2
  } = e;
  return (0, u.jsx)('div', {
className: d()(n, Z.freeTrialPill, {
  [Z.freeTrialPillTier0GradientFill]: 1 === r,
  [Z.freeTrialPillTier2GradientFill]: 3 === r,
  [Z.freeTrialPillTier2OldGradientFill]: 4 === r,
  [Z.lightBackgroundPill]: 5 === r
}),
children: (0, u.jsx)(m.Text, {
  variant: 'text-xs/bold',
  className: d()(Z.freeTrialPillText, {
    [Z.freeTrialPillTextInverted]: 0 !== r && 2 !== r,
    [Z.freeTrialPillTextTier0]: 0 === r,
    [Z.freeTrialPillTextTier2]: 2 === r
  }),
  children: t
})
  });
}

function K(e) {
  let t, {
text: n,
className: r,
colorOptions: i = 2,
isPillOnBorder: a = !0
  } = e;
  switch (i) {
case 1:
  t = h.Z.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
  break;
case 3:
  t = 'url(#'.concat(k.l_, ')');
  break;
case 4:
case 5:
  t = 'url(#'.concat(k.Qi, ')');
  break;
default:
  t = 'white';
  }
  return a ? (0, u.jsxs)('div', {
className: d()(r, Z.freeTrialPillWithSparkles),
children: [
  (0, u.jsx)(k.R9, {
    foreground: Z.sparkleStar1,
    color: t
  }),
  (0, u.jsx)(k.R9, {
    foreground: Z.sparkleStar2,
    color: t
  }),
  (0, u.jsx)(k.R9, {
    foreground: Z.sparkleStar3,
    color: t
  }),
  (0, u.jsx)(W, {
    text: n,
    colorOptions: i
  }),
  (0, u.jsx)(k.R9, {
    foreground: Z.sparkleStar4,
    color: t
  }),
  (0, u.jsx)(k.R9, {
    foreground: Z.sparkleStar5,
    color: t
  })
]
  }) : (0, u.jsxs)('div', {
className: d()(r, Z.freeTrialPillWithSparkles),
children: [
  (0, u.jsx)(W, {
    text: n,
    colorOptions: i
  }),
  (0, u.jsx)(k.R9, {
    foreground: Z.sparkleStar1,
    style: {
      marginLeft: 4,
      marginBottom: -6
    },
    color: t
  }),
  (0, u.jsx)(k.R9, {
    foreground: Z.sparkleStar2,
    color: t
  })
]
  });
}

function z(e) {
  let {
Icon: t,
text: n,
isNew: r = !1,
className: i
  } = e;
  return (0, u.jsxs)('div', {
className: null != i ? i : Z.itemWithWumpus,
children: [
  (0, u.jsx)(t, {
    className: Z.icon,
    color: 'currentColor'
  }),
  (0, u.jsx)(m.Text, {
    variant: 'text-md/normal',
    color: 'always-white',
    children: n
  }),
  r ? (0, u.jsx)(S.Z, {
    className: Z.newTagItem,
    forceUseColorForSparkles: !0,
    shouldInheritBackgroundColor: !0,
    shouldInheritTextColor: !0
  }) : null
]
  });
}

function q(e) {
  var t;
  let {
defaultPriceString: n,
subscriptionPlan: r,
discountOffer: i
  } = e, a = (0, w.A)(r);
  return (0, u.jsx)(u.Fragment, {
children: H.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_BEFORE_REDEMPTION_GENERIC.format({
  numMonths: null !== (t = i.discount.user_usage_limit) && void 0 !== t ? t : F.rt,
  discountedPrice: a,
  regularPrice: n
})
  });
}

function Q(e) {
  let {
isGift: t,
premiumTier: n,
offerTierMatchesCard: r,
offerType: i,
showYearlyPrice: a,
priceOptions: s
  } = e, o = (0, f.e7)([v.ZP], () => v.ZP.getPremiumTypeSubscription()), l = (0, f.e7)([N.default], () => N.default.getCurrentUser()), c = (0, b.t7)(), d = (0, b.lr)(), _ = n === F.p9.TIER_0 ? F.Si.TIER_0 : F.Si.TIER_2, h = (null == o ? void 0 : o.trialId) != null ? null == l ? void 0 : l.premiumType : c ? F.p9.TIER_2 : null, p = (0, U.N)(), I = (0, P.Ng)(), T = null == p ? void 0 : p.subscription_trial;
  if (!t && null != h && n === h && null != o && null != o.planIdFromItems) {
let e = null != o.trialEndsAt ? E()(null == o ? void 0 : o.trialEndsAt).diff(E()(), 'd') : 0,
  t = F.GP[o.planIdFromItems],
  n = D.ZP.formatPriceString(D.ZP.getDefaultPrice(t.id), t.interval);
return (0, u.jsx)(u.Fragment, {
  children: (0, u.jsx)(m.Heading, {
    variant: 'heading-md/normal',
    color: 'always-white',
    className: Z.trialHeader,
    children: (() => {
      var t, r, a;
      if (0 === i)
        H.Z.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
          remainingTime: e,
          price: n
        });
      else if (o.planIdFromItems === F.Xh.PREMIUM_YEAR_TIER_2)
        return H.Z.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
          percent: null !== (t = null == d ? void 0 : d.percentage) && void 0 !== t ? t : F.Bo,
          regularPrice: n
        });
      else
        return H.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
          percent: null !== (r = null == d ? void 0 : d.percentage) && void 0 !== r ? r : F.M_,
          regularPrice: n,
          numMonths: null !== (a = null == d ? void 0 : d.duration) && void 0 !== a ? a : F.rt
        });
    })()
  })
});
  }
  if (!t && r) {
let e = D.ZP.formatPriceString(D.ZP.getDefaultPrice(n === F.p9.TIER_0 ? F.Xh.PREMIUM_MONTH_TIER_0 : F.Xh.PREMIUM_MONTH_TIER_2), F.rV.MONTH);
if (0 === i) {
  var g, S, A, O;
  return (0, u.jsx)(m.Heading, {
    variant: 'heading-md/normal',
    color: 'always-white',
    className: Z.trialHeader,
    children: H.Z.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_BEFORE_REDEMPTION_NEW.format({
      planName: (0, D.aq)(null !== (S = F.IW[null !== (g = null == T ? void 0 : T.sku_id) && void 0 !== g ? g : F.Si.NONE]) && void 0 !== S ? S : F.Xh.PREMIUM_MONTH_TIER_2),
      duration: (0, D.if)({
        intervalType: null !== (A = null == T ? void 0 : T.interval) && void 0 !== A ? A : F.rV.DAY,
        intervalCount: null !== (O = null == T ? void 0 : T.interval_count) && void 0 !== O ? O : 30,
        capitalize: !1
      }),
      price: e
    })
  });
}
if (null != I)
  return (0, u.jsx)(m.Heading, {
    variant: 'heading-md/normal',
    color: 'always-white',
    className: Z.trialHeader,
    children: (0, u.jsx)(q, {
      defaultPriceString: e,
      subscriptionPlan: F.Xh.PREMIUM_MONTH_TIER_2,
      discountOffer: I
    })
  });
  }
  return (0, u.jsxs)(u.Fragment, {
children: [
  (0, u.jsx)(G.Z, {
    subscriptionTier: _,
    isGift: t,
    className: Z.price,
    priceOptions: s
  }),
  a && (0, u.jsx)(G.Z, {
    subscriptionTier: _,
    interval: F.rV.YEAR,
    isGift: t,
    className: Z.price,
    priceOptions: s
  })
]
  });
}

function X() {
  return (0, u.jsxs)(u.Fragment, {
children: [
  (0, u.jsx)(z, {
    Icon: m.UploadIcon,
    text: H.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
      maxUploadPremium: (0, D.v9)(F.p9.TIER_0, {
        useSpace: !1
      })
    })
  }),
  (0, u.jsx)(z, {
    Icon: m.ReactionIcon,
    text: H.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
  }),
  (0, u.jsx)(z, {
    Icon: m.SuperReactionIcon,
    text: H.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
  }),
  (0, u.jsx)(z, {
    Icon: m.NitroWheelIcon,
    text: H.Z.Messages.PREMIUM_TIER_NITRO_BADGE_ITEM
  })
]
  });
}

function $(e) {
  var t;
  let {
showWumpus: n,
ctaButton: r,
showYearlyPrice: i,
className: a,
isGift: s = !1,
priceOptions: o
  } = e, l = (0, f.e7)([v.ZP], () => v.ZP.getPremiumTypeSubscription()), c = (0, f.e7)([N.default], () => N.default.getCurrentUser()), _ = (0, U.N)(), E = null == _ ? void 0 : null === (t = _.subscription_trial) || void 0 === t ? void 0 : t.sku_id, h = (null == l ? void 0 : l.trialId) != null, p = (null == l ? void 0 : l.trialId) != null ? null == c ? void 0 : c.premiumType : null, I = null != E || h;
  return (0, u.jsxs)('div', {
className: d()(Z.tier0, Z.card, a, {
  [Z.withTier0Rim]: !s && I,
  [Z.withCardHover]: !s && I
}),
children: [
  E === F.Si.TIER_0 ? (0, u.jsxs)(u.Fragment, {
    children: [
      (0, u.jsx)(K, {
        text: H.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
        className: Z.topRimPill,
        colorOptions: 0
      }),
      (0, u.jsx)('div', {
        className: Z.rimGlowTier0
      })
    ]
  }) : null,
  n ? (0, u.jsx)('div', {
    className: Z.wumpusImageContainer,
    children: (0, u.jsx)(m.Image, {
      src: Y,
      mediaLayoutType: V.hV.RESPONSIVE,
      width: 270,
      height: 242,
      zoomable: !1
    })
  }) : null,
  s || E !== F.Si.TIER_0 ? null : (0, u.jsxs)(u.Fragment, {
    children: [
      (0, u.jsx)(K, {
        text: H.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
        className: Z.topRimPill,
        colorOptions: 0
      }),
      (0, u.jsx)('div', {
        className: Z.rimGlowTier0
      })
    ]
  }),
  s || p !== F.p9.TIER_0 ? null : (0, u.jsxs)(u.Fragment, {
    children: [
      (0, u.jsx)(K, {
        text: H.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
        className: Z.topRimPill,
        colorOptions: 0
      }),
      (0, u.jsx)('div', {
        className: Z.rimGlowTier0
      })
    ]
  }),
  (0, u.jsxs)('div', {
    children: [
      (0, u.jsxs)('div', {
        children: [
          (0, u.jsx)(C.Z, {
            className: d()(Z.title, Z.tier0Title)
          }),
          (0, u.jsx)(Q, {
            isGift: s,
            premiumTier: F.p9.TIER_0,
            offerType: 0,
            offerTierMatchesCard: E === F.Si.TIER_0,
            showYearlyPrice: i,
            priceOptions: o
          })
        ]
      }),
      (0, u.jsx)('div', {
        children: (0, u.jsx)(X, {})
      })
    ]
  }),
  r,
  s || E !== F.Si.TIER_0 ? null : (0, u.jsx)(k.t, {
    tier: F.p9.TIER_0
  })
]
  });
}

function J(e) {
  let {
featureSet: t = 0,
isModal: n = !1,
isGift: r = !1
  } = e, i = (0, f.e7)([A.default], () => A.default.locale), a = (0, f.e7)([L.Z], () => L.Z.affinities), s = n && !r && a.length > 0;
  if (1 === t)
return (0, u.jsxs)(u.Fragment, {
  children: [
    (0, u.jsx)(z, {
      Icon: (0, m.makeIconCompat)(O.Z),
      text: H.Z.Messages.PREMIUM_TIER_SERVER_BOOST_WITH_PERCENTAGE_ITEM.format({
        numBoosts: F.cb,
        percentageOff: (0, y.T3)(i, F.Rr / 100)
      })
    }),
    (0, u.jsx)(z, {
      Icon: m.UploadIcon,
      text: H.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
        maxUploadPremium: (0, D.v9)(F.p9.TIER_2, {
          useSpace: !1,
          useWithoutExperiment: r
        })
      })
    }),
    (0, u.jsx)(z, {
      Icon: m.ReactionIcon,
      text: H.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
    }),
    (0, u.jsx)(z, {
      Icon: m.ScreenArrowIcon,
      text: H.Z.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
    }),
    (0, u.jsx)(z, {
      Icon: m.UserSquareIcon,
      text: H.Z.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
    })
  ]
});
  return (0, u.jsxs)(u.Fragment, {
children: [
  (0, u.jsx)(z, {
    Icon: m.UploadIcon,
    text: H.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
      maxUploadPremium: (0, D.v9)(F.p9.TIER_2, {
        useSpace: !1,
        useWithoutExperiment: r
      })
    })
  }),
  (0, u.jsx)(z, {
    Icon: m.ReactionIcon,
    text: H.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
  }),
  (0, u.jsx)(z, {
    Icon: m.SuperReactionIcon,
    text: H.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
  }),
  (0, u.jsx)(z, {
    Icon: m.ScreenArrowIcon,
    text: H.Z.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
  }),
  (0, u.jsx)(z, {
    Icon: (0, m.makeIconCompat)(O.Z),
    text: H.Z.Messages.PREMIUM_TIER_SERVER_BOOST_ITEM
  }),
  (0, u.jsx)(z, {
    Icon: m.UserSquareIcon,
    text: H.Z.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
  }),
  s && (0, u.jsx)(B.Z, {})
]
  });
}

function ee(e) {
  var t;
  let {
showWumpus: n,
ctaButton: r,
showYearlyPrice: i,
featureSet: a = 0,
className: s,
isGift: o = !1,
isModal: l = !1,
priceOptions: c
  } = e, _ = (0, f.e7)([v.ZP], () => v.ZP.getPremiumTypeSubscription()), E = (0, f.e7)([N.default], () => N.default.getCurrentUser()), h = (0, U.N)(), T = null == h ? void 0 : null === (t = h.subscription_trial) || void 0 === t ? void 0 : t.sku_id, g = (null == _ ? void 0 : _.trialId) != null ? null == E ? void 0 : E.premiumType : null, S = (0, b.Nx)(), A = (0, P.Ng)(), O = (0, b.t7)(), C = null != T || null != g ? 0 : null != A || O ? 1 : null, y = (0, x.Vi)(), D = !o && S, L = (0, x.W1)(), w = (0, p.ap)((0, I.ZP)()), G = w ? 5 : 2, {
enabled: B
  } = M._.useExperiment({
location: 'Tier2Card'
  }, {
autoTrackExposure: !1
  }), Y = H.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT;
  B && (null == h ? void 0 : h.trial_id) === F.a7 && (Y = H.Z.Messages.REFERRAL_PROGRAM_TWO_WEEK_TRIAL);
  let W = D && !w ? Z.rimGlowTier2 : void 0;
  return (0, u.jsxs)('div', {
className: d()(Z.card, Z.tier2, s, {
  [Z.withTier2Rim]: D,
  [Z.withCardHover]: D
}),
children: [
  !o && null != A && (0, P.Wp)(A, F.Si.TIER_2) && void 0 !== A.discount.amount ? (0, u.jsxs)(u.Fragment, {
    children: [
      (0, u.jsx)(K, {
        text: O ? H.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED : H.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
          percent: A.discount.amount
        }),
        className: Z.topRimPill,
        colorOptions: G
      }),
      (0, u.jsx)('div', {
        className: W
      })
    ]
  }) : null,
  o || T !== F.Si.TIER_2 ? null : (0, u.jsxs)(u.Fragment, {
    children: [
      (0, u.jsx)(K, {
        text: Y,
        className: Z.topRimPill,
        colorOptions: G
      }),
      (0, u.jsx)('div', {
        className: W
      })
    ]
  }),
  o || g !== F.p9.TIER_2 ? null : (0, u.jsxs)(u.Fragment, {
    children: [
      (0, u.jsx)(K, {
        text: H.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
        className: Z.topRimPill,
        colorOptions: G
      }),
      (0, u.jsx)('div', {
        className: W
      })
    ]
  }),
  !o && O && (0, u.jsxs)(u.Fragment, {
    children: [
      (0, u.jsx)(K, {
        text: H.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
        className: Z.topRimPill,
        colorOptions: G
      }),
      (0, u.jsx)('div', {
        className: W
      })
    ]
  }),
  n ? (0, u.jsx)('div', {
    className: Z.wumpusImageContainer,
    children: (0, u.jsx)(m.Image, {
      src: j,
      mediaLayoutType: V.hV.RESPONSIVE,
      width: 270,
      height: 242,
      zoomable: !1
    })
  }) : null,
  (0, u.jsxs)('div', {
    children: [
      (0, u.jsxs)('div', {
        children: [
          (0, u.jsx)(R.Z, {
            className: d()(Z.title, Z.tier2Title)
          }),
          !o && T !== F.Si.TIER_2 && y && (0, u.jsx)('div', {
            children: (0, u.jsx)(m.Text, {
              variant: 'text-xs/bold',
              className: Z.freeTrialPillInline,
              children: L
            })
          }),
          (0, u.jsx)(Q, {
            isGift: o,
            premiumTier: F.p9.TIER_2,
            offerType: C,
            offerTierMatchesCard: T === F.Si.TIER_2 || (0, P.Wp)(A, F.Si.TIER_2),
            showYearlyPrice: i,
            priceOptions: c
          })
        ]
      }),
      (0, u.jsx)('div', {
        children: (0, u.jsx)(J, {
          featureSet: a,
          isModal: l,
          isGift: o
        })
      })
    ]
  }),
  r,
  o || T !== F.Si.TIER_2 && null == A ? null : (0, u.jsx)(k.t, {
    tier: F.p9.TIER_2
  })
]
  });
}

function et(e) {
  let {
showWumpus: t,
tier0CTAButton: n,
tier2CTAButton: r,
className: i
  } = e, {
analyticsLocations: a
  } = (0, g.ZP)(T.Z.PREMIUM_MARKETING_TIER_CARD);
  return (0, u.jsx)(g.Gt, {
value: a,
children: (0, u.jsxs)('div', {
  className: d()(Z.premiumCards, i),
  children: [
    (0, u.jsx)($, {
      showWumpus: t,
      ctaButton: n
    }),
    (0, u.jsx)(ee, {
      showWumpus: t,
      ctaButton: r
    })
  ]
})
  });
}
(r = s || (s = {}))[r.PREMIUM_TIER_0_WHITE_FILL = 0] = 'PREMIUM_TIER_0_WHITE_FILL', r[r.PREMIUM_TIER_0_GRADIENT_FILL = 1] = 'PREMIUM_TIER_0_GRADIENT_FILL', r[r.PREMIUM_TIER_2_WHITE_FILL = 2] = 'PREMIUM_TIER_2_WHITE_FILL', r[r.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3] = 'PREMIUM_TIER_2_NEW_GRADIENT_FILL', r[r.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4] = 'PREMIUM_TIER_2_OLD_GRADIENT_FILL', r[r.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5] = 'PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE', (i = o || (o = {}))[i.PREMIUM_TRIAL = 0] = 'PREMIUM_TRIAL', i[i.PREMIUM_DISCOUNT = 1] = 'PREMIUM_DISCOUNT', (a = l || (l = {}))[a.DEFAULT = 0] = 'DEFAULT', a[a.BOOSTING = 1] = 'BOOSTING';