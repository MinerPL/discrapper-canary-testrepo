"use strict";
n.d(t, {
  Cy: function() {
    return er
  },
  Gq: function() {
    return eu
  },
  NN: function() {
    return _
  },
  VE: function() {
    return a
  },
  ZP: function() {
    return ec
  },
  nT: function() {
    return e_
  },
  uZ: function() {
    return u
  },
  wp: function() {
    return ed
  }
});
var i, r, s, o, a, l, u, _, d = n(735250);
n(470079);
var c = n(120356),
  E = n.n(c),
  I = n(913527),
  T = n.n(I),
  h = n(442837),
  S = n(692547),
  f = n(780384),
  N = n(481060),
  A = n(410030),
  m = n(100527),
  O = n(906732),
  R = n(535322),
  C = n(706454),
  p = n(594174),
  g = n(78839),
  L = n(533496),
  v = n(771357),
  D = n(263704),
  M = n(642113),
  P = n(709586),
  y = n(483444),
  U = n(599250),
  b = n(942659),
  G = n(466111),
  w = n(761374),
  k = n(363138),
  B = n(930153),
  x = n(74538),
  V = n(357355),
  Z = n(140465),
  H = n(424082),
  F = n(650032),
  Y = n(104494),
  j = n(639119),
  W = n(230916),
  K = n(248042),
  z = n(504865),
  q = n(63802),
  X = n(318990),
  Q = n(474936),
  J = n(768760),
  $ = n(689938),
  ee = n(988332),
  et = n(476945),
  en = n(945182);

function ei(e) {
  let {
    text: t,
    className: n,
    colorOptions: i = 2
  } = e;
  return (0, d.jsx)("div", {
    className: E()(n, ee.freeTrialPill, {
      [ee.freeTrialPillTier0GradientFill]: 1 === i,
      [ee.freeTrialPillTier2GradientFill]: 3 === i,
      [ee.freeTrialPillTier2OldGradientFill]: 4 === i,
      [ee.lightBackgroundPill]: 5 === i
    }),
    children: (0, d.jsx)(N.Text, {
      variant: "text-xs/bold",
      className: E()(ee.freeTrialPillText, {
        [ee.freeTrialPillTextInverted]: 0 !== i && 2 !== i,
        [ee.freeTrialPillTextTier0]: 0 === i,
        [ee.freeTrialPillTextTier2]: 2 === i
      }),
      children: t
    })
  })
}

function er(e) {
  let t, {
    text: n,
    className: i,
    colorOptions: r = 2,
    isPillOnBorder: s = !0
  } = e;
  switch (r) {
    case 1:
      t = S.Z.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
      break;
    case 3:
      t = "url(#".concat(q.l_, ")");
      break;
    case 4:
    case 5:
      t = "url(#".concat(q.Qi, ")");
      break;
    default:
      t = "white"
  }
  return s ? (0, d.jsxs)("div", {
    className: E()(i, ee.freeTrialPillWithSparkles),
    children: [(0, d.jsx)(q.R9, {
      foreground: ee.sparkleStar1,
      color: t
    }), (0, d.jsx)(q.R9, {
      foreground: ee.sparkleStar2,
      color: t
    }), (0, d.jsx)(q.R9, {
      foreground: ee.sparkleStar3,
      color: t
    }), (0, d.jsx)(ei, {
      text: n,
      colorOptions: r
    }), (0, d.jsx)(q.R9, {
      foreground: ee.sparkleStar4,
      color: t
    }), (0, d.jsx)(q.R9, {
      foreground: ee.sparkleStar5,
      color: t
    })]
  }) : (0, d.jsxs)("div", {
    className: E()(i, ee.freeTrialPillWithSparkles),
    children: [(0, d.jsx)(ei, {
      text: n,
      colorOptions: r
    }), (0, d.jsx)(q.R9, {
      foreground: ee.sparkleStar1,
      style: {
        marginLeft: 4,
        marginBottom: -6
      },
      color: t
    }), (0, d.jsx)(q.R9, {
      foreground: ee.sparkleStar2,
      color: t
    })]
  })
}

function es(e) {
  let {
    Icon: t,
    text: n,
    isNew: i = !1,
    className: r,
    textVariant: s
  } = e;
  return (0, d.jsxs)("div", {
    className: null != r ? r : ee.itemWithWumpus,
    children: [(0, d.jsx)(t, {
      className: ee.icon
    }), (0, d.jsx)(N.Text, {
      variant: null != s ? s : "text-md/normal",
      color: "always-white",
      children: n
    }), i ? (0, d.jsx)(R.Z, {
      className: ee.newTagItem,
      forceUseColorForSparkles: !0,
      shouldInheritBackgroundColor: !0,
      shouldInheritTextColor: !0
    }) : null]
  })
}

function eo(e) {
  var t;
  let {
    defaultPriceString: n,
    subscriptionPlan: i,
    discountOffer: r
  } = e, s = (0, W.A)(i);
  return (0, d.jsx)(d.Fragment, {
    children: $.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_BEFORE_REDEMPTION_GENERIC.format({
      numMonths: null !== (t = r.discount.user_usage_limit) && void 0 !== t ? t : Q.rt,
      discountedPrice: s,
      regularPrice: n
    })
  })
}

function ea(e) {
  let {
    isGift: t,
    premiumTier: n,
    offerTierMatchesCard: i,
    offerType: r,
    showYearlyPrice: s,
    priceOptions: o,
    textVariant: a,
    className: l,
    shouldUseModifiedCopy: u
  } = e, _ = (0, h.e7)([g.ZP], () => g.ZP.getPremiumTypeSubscription()), c = (0, h.e7)([p.default], () => p.default.getCurrentUser()), E = (0, Z.t7)(), {
    annualDiscountPercentage: I
  } = (0, H.lf)("PremiumTierCards"), S = (0, Z.lr)(), f = n === Q.p9.TIER_0 ? Q.Si.TIER_0 : Q.Si.TIER_2, A = (null == _ ? void 0 : _.trialId) != null ? null == c ? void 0 : c.premiumType : E ? Q.p9.TIER_2 : null, m = (0, j.N)(), O = (0, Y.Ng)(), R = null == m ? void 0 : m.subscription_trial;
  if (!t && null != A && n === A && null != _ && null != _.planIdFromItems) {
    let e = null != _.trialEndsAt ? T()(null == _ ? void 0 : _.trialEndsAt).diff(T()(), "d") : 0,
      t = Q.GP[_.planIdFromItems],
      n = x.ZP.formatPriceString(x.ZP.getDefaultPrice(t.id), t.interval);
    return (0, d.jsx)(d.Fragment, {
      children: (0, d.jsx)(N.Heading, {
        variant: "heading-md/normal",
        color: "always-white",
        className: ee.trialHeader,
        children: (() => {
          var t, i, s;
          if (0 === r) $.Z.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
            remainingTime: e,
            price: n
          });
          else if (_.planIdFromItems === Q.Xh.PREMIUM_YEAR_TIER_2) return $.Z.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
            percent: null !== (t = null == S ? void 0 : S.percentage) && void 0 !== t ? t : I,
            regularPrice: n
          });
          else return $.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
            percent: null !== (i = null == S ? void 0 : S.percentage) && void 0 !== i ? i : Q.M_,
            regularPrice: n,
            numMonths: null !== (s = null == S ? void 0 : S.duration) && void 0 !== s ? s : Q.rt
          })
        })()
      })
    })
  }
  if (!t && i) {
    let e = x.ZP.formatPriceString(x.ZP.getDefaultPrice(n === Q.p9.TIER_0 ? Q.Xh.PREMIUM_MONTH_TIER_0 : Q.Xh.PREMIUM_MONTH_TIER_2), Q.rV.MONTH);
    if (0 === r) {
      var C, L, v, D;
      return (0, d.jsx)(N.Heading, {
        variant: "heading-md/normal",
        color: "always-white",
        className: ee.trialHeader,
        children: $.Z.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_BEFORE_REDEMPTION_NEW.format({
          planName: (0, x.aq)(null !== (L = Q.IW[null !== (C = null == R ? void 0 : R.sku_id) && void 0 !== C ? C : Q.Si.NONE]) && void 0 !== L ? L : Q.Xh.PREMIUM_MONTH_TIER_2),
          duration: (0, x.if)({
            intervalType: null !== (v = null == R ? void 0 : R.interval) && void 0 !== v ? v : Q.rV.DAY,
            intervalCount: null !== (D = null == R ? void 0 : R.interval_count) && void 0 !== D ? D : 30,
            capitalize: !1
          }),
          price: e
        })
      })
    }
    if (null != O) return (0, d.jsx)(N.Heading, {
      variant: "heading-md/normal",
      color: "always-white",
      className: ee.trialHeader,
      children: (0, d.jsx)(eo, {
        defaultPriceString: e,
        subscriptionPlan: Q.Xh.PREMIUM_MONTH_TIER_2,
        discountOffer: O
      })
    })
  }
  return (0, d.jsxs)(d.Fragment, {
    children: [(0, d.jsx)(z.Z, {
      subscriptionTier: f,
      isGift: t,
      className: null != l ? l : ee.price,
      priceOptions: o,
      variant: a,
      shouldUseModifiedCopy: u
    }), s && (0, d.jsx)(z.Z, {
      subscriptionTier: f,
      interval: Q.rV.YEAR,
      isGift: t,
      className: null != l ? l : ee.price,
      priceOptions: o,
      variant: a,
      shouldUseModifiedCopy: u
    })]
  })
}

function el(e) {
  let {
    shouldUseModifiedCopy: t
  } = e;
  return t ? (0, d.jsxs)(d.Fragment, {
    children: [(0, d.jsx)(es, {
      Icon: D.Z,
      text: $.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM,
      className: ee.modifiedItem,
      textVariant: "text-sm/normal"
    }), (0, d.jsx)(es, {
      Icon: D.Z,
      text: $.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
        maxUploadPremium: (0, x.v9)(Q.p9.TIER_0, {
          useSpace: !1
        })
      }),
      className: ee.modifiedItem,
      textVariant: "text-sm/normal"
    }), (0, d.jsx)(es, {
      Icon: D.Z,
      text: $.Z.Messages.PREMIUM_TRIAL_ACTION_SHEET_CUSTOM_APP_ICONS,
      className: ee.modifiedItem,
      textVariant: "text-sm/normal"
    })]
  }) : (0, d.jsxs)(d.Fragment, {
    children: [(0, d.jsx)(es, {
      Icon: k.Z,
      text: $.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
        maxUploadPremium: (0, x.v9)(Q.p9.TIER_0, {
          useSpace: !1
        })
      })
    }), (0, d.jsx)(es, {
      Icon: M.Z,
      text: $.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
    }), (0, d.jsx)(es, {
      Icon: L.Z,
      text: $.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
    }), (0, d.jsx)(es, {
      Icon: G.Z,
      text: $.Z.Messages.PREMIUM_TIER_NITRO_BADGE_ITEM
    })]
  })
}

function eu(e) {
  var t;
  let {
    showWumpus: n,
    shouldUseModifiedCopy: i = !1,
    ctaButton: r,
    showYearlyPrice: s,
    className: o,
    isGift: a = !1,
    priceOptions: l,
    variant: u
  } = e, _ = (0, h.e7)([g.ZP], () => g.ZP.getPremiumTypeSubscription()), c = (0, h.e7)([p.default], () => p.default.getCurrentUser()), I = (0, j.N)(), T = null == I ? void 0 : null === (t = I.subscription_trial) || void 0 === t ? void 0 : t.sku_id, S = (null == _ ? void 0 : _.trialId) != null, f = (null == _ ? void 0 : _.trialId) != null ? null == c ? void 0 : c.premiumType : null, A = null != T || S;
  return (0, d.jsxs)("div", {
    className: E()(ee.tier0, ee.card, o, {
      [ee.withTier0Rim]: !a && A,
      [ee.withCardHover]: !a && A
    }),
    children: [T === Q.Si.TIER_0 ? (0, d.jsxs)(d.Fragment, {
      children: [(0, d.jsx)(er, {
        text: $.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
        className: ee.topRimPill,
        colorOptions: 0
      }), (0, d.jsx)("div", {
        className: ee.rimGlowTier0
      })]
    }) : null, n ? (0, d.jsx)("div", {
      className: ee.wumpusImageContainer,
      children: (0, d.jsx)(N.Image, {
        src: et,
        mediaLayoutType: J.hV.RESPONSIVE,
        width: 270,
        height: 242,
        zoomable: !1
      })
    }) : null, a || T !== Q.Si.TIER_0 ? null : (0, d.jsxs)(d.Fragment, {
      children: [(0, d.jsx)(er, {
        text: $.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
        className: ee.topRimPill,
        colorOptions: 0
      }), (0, d.jsx)("div", {
        className: ee.rimGlowTier0
      })]
    }), a || f !== Q.p9.TIER_0 ? null : (0, d.jsxs)(d.Fragment, {
      children: [(0, d.jsx)(er, {
        text: $.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
        className: ee.topRimPill,
        colorOptions: 0
      }), (0, d.jsx)("div", {
        className: ee.rimGlowTier0
      })]
    }), (0, d.jsxs)("div", {
      children: [(0, d.jsxs)("div", {
        children: [i ? (0, d.jsx)(b.Z, {
          className: E()(ee.title, ee.modifiedTier0Title)
        }) : (0, d.jsx)(U.Z, {
          className: E()(ee.title, ee.tier0Title)
        }), i && (0, d.jsx)(N.Text, {
          variant: "display-md",
          color: "always-white",
          className: 2 === u ? ee.modifiedSubHeaderSettings : ee.modifiedSubHeaderStoreHome,
          children: $.Z.Messages.NITRO_MARKETING_JUST_THE_BASICS
        }), (0, d.jsx)(ea, {
          isGift: a,
          premiumTier: Q.p9.TIER_0,
          offerType: 0,
          offerTierMatchesCard: T === Q.Si.TIER_0,
          showYearlyPrice: s,
          priceOptions: l,
          textVariant: i ? "heading-lg/normal" : void 0,
          shouldUseModifiedCopy: i,
          className: i ? ee.modifiedPrice : void 0
        })]
      }), (0, d.jsx)("div", {
        children: (0, d.jsx)(el, {
          shouldUseModifiedCopy: i
        })
      })]
    }), r, a || T !== Q.Si.TIER_0 ? null : (0, d.jsx)(q.t, {
      tier: Q.p9.TIER_0
    })]
  })
}

function e_(e) {
  let {
    featureSet: t = 0,
    isModal: n = !1,
    isGift: i = !1
  } = e, r = (0, h.e7)([C.default], () => C.default.locale), s = (0, h.e7)([V.Z], () => V.Z.affinities), o = n && !i && s.length > 0;
  switch (t) {
    case 1:
      return (0, d.jsxs)(d.Fragment, {
        children: [(0, d.jsx)(es, {
          Icon: P.Z,
          text: $.Z.Messages.PREMIUM_TIER_SERVER_BOOST_WITH_PERCENTAGE_ITEM.format({
            numBoosts: Q.cb,
            percentageOff: (0, B.T3)(r, Q.Rr / 100)
          })
        }), (0, d.jsx)(es, {
          Icon: k.Z,
          text: $.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
            maxUploadPremium: (0, x.v9)(Q.p9.TIER_2, {
              useSpace: !1
            })
          })
        }), (0, d.jsx)(es, {
          Icon: M.Z,
          text: $.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
        }), (0, d.jsx)(es, {
          Icon: w.Z,
          text: $.Z.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
        }), (0, d.jsx)(es, {
          Icon: v.Z,
          text: $.Z.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
        })]
      });
    case 2:
      return (0, d.jsxs)(d.Fragment, {
        children: [(0, d.jsx)(N.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          style: {
            marginBottom: 6
          },
          children: $.Z.Messages.PREMIUM_TIER_2_DETAILS_SUBHEADER
        }), (0, d.jsx)(es, {
          Icon: D.Z,
          text: $.Z.Messages.MARKETING_PAGE_COMPARISON_TABLE_PROFILE_THEMES_V2,
          className: ee.modifiedItem,
          textVariant: "text-sm/normal"
        }), (0, d.jsx)(es, {
          Icon: D.Z,
          text: $.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
            maxUploadPremium: (0, x.v9)(Q.p9.TIER_2, {
              useSpace: !1
            })
          }),
          className: ee.modifiedItem,
          textVariant: "text-sm/normal"
        }), (0, d.jsx)(es, {
          Icon: D.Z,
          text: $.Z.Messages.PREMIUM_TIER_HD_STREAMING_ITEM,
          className: ee.modifiedItem,
          textVariant: "text-sm/normal"
        }), (0, d.jsx)(es, {
          Icon: D.Z,
          text: $.Z.Messages.PREMIUM_TIER_2_FEATURE_THEMES_AND_MORE,
          className: ee.modifiedItem,
          textVariant: "text-sm/normal"
        }), o && (0, d.jsx)(X.Z, {})]
      });
    default:
      return (0, d.jsxs)(d.Fragment, {
        children: [(0, d.jsx)(es, {
          Icon: k.Z,
          text: $.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({
            maxUploadPremium: (0, x.v9)(Q.p9.TIER_2, {
              useSpace: !1
            })
          })
        }), (0, d.jsx)(es, {
          Icon: M.Z,
          text: $.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
        }), (0, d.jsx)(es, {
          Icon: L.Z,
          text: $.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
        }), (0, d.jsx)(es, {
          Icon: w.Z,
          text: $.Z.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
        }), (0, d.jsx)(es, {
          Icon: P.Z,
          text: $.Z.Messages.PREMIUM_TIER_SERVER_BOOST_ITEM
        }), (0, d.jsx)(es, {
          Icon: v.Z,
          text: $.Z.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
        }), o && (0, d.jsx)(X.Z, {})]
      })
  }
}

function ed(e) {
  var t;
  let {
    showWumpus: n,
    shouldUseModifiedCopy: i = !1,
    ctaButton: r,
    showYearlyPrice: s,
    featureSet: o = 0,
    className: a,
    isGift: l = !1,
    isModal: u = !1,
    priceOptions: _,
    variant: c
  } = e, I = (0, h.e7)([g.ZP], () => g.ZP.getPremiumTypeSubscription()), T = (0, h.e7)([p.default], () => p.default.getCurrentUser()), S = (0, j.N)(), m = null == S ? void 0 : null === (t = S.subscription_trial) || void 0 === t ? void 0 : t.sku_id, O = (null == I ? void 0 : I.trialId) != null ? null == T ? void 0 : T.premiumType : null, R = (0, Z.Nx)(), C = (0, Y.Ng)(), L = (0, Z.t7)(), v = null != m || null != O ? 0 : null != C || L ? 1 : null, D = (0, K.Vi)(), M = !l && R, P = (0, K.W1)(), U = (0, f.ap)((0, A.ZP)()), b = U ? 5 : 2, {
    enabled: G
  } = F._.useExperiment({
    location: "Tier2Card"
  }, {
    autoTrackExposure: !1
  }), w = $.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT;
  G && (null == S ? void 0 : S.trial_id) === Q.a7 && (w = $.Z.Messages.REFERRAL_PROGRAM_TWO_WEEK_TRIAL);
  let k = M && !U ? ee.rimGlowTier2 : void 0;
  return (0, d.jsxs)("div", {
    className: E()(ee.card, ee.tier2, a, {
      [ee.withTier2Rim]: M,
      [ee.withCardHover]: M
    }),
    children: [!l && null != C && (0, Y.Wp)(C, Q.Si.TIER_2) && void 0 !== C.discount.amount ? (0, d.jsxs)(d.Fragment, {
      children: [(0, d.jsx)(er, {
        text: L ? $.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED : $.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
          percent: C.discount.amount
        }),
        className: ee.topRimPill,
        colorOptions: b
      }), (0, d.jsx)("div", {
        className: k
      })]
    }) : null, l || m !== Q.Si.TIER_2 ? null : (0, d.jsxs)(d.Fragment, {
      children: [(0, d.jsx)(er, {
        text: w,
        className: ee.topRimPill,
        colorOptions: b
      }), (0, d.jsx)("div", {
        className: k
      })]
    }), l || O !== Q.p9.TIER_2 ? null : (0, d.jsxs)(d.Fragment, {
      children: [(0, d.jsx)(er, {
        text: $.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
        className: ee.topRimPill,
        colorOptions: b
      }), (0, d.jsx)("div", {
        className: k
      })]
    }), !l && L && (0, d.jsxs)(d.Fragment, {
      children: [(0, d.jsx)(er, {
        text: $.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
        className: ee.topRimPill,
        colorOptions: b
      }), (0, d.jsx)("div", {
        className: k
      })]
    }), n ? (0, d.jsx)("div", {
      className: ee.wumpusImageContainer,
      children: (0, d.jsx)(N.Image, {
        src: en,
        mediaLayoutType: J.hV.RESPONSIVE,
        width: 270,
        height: 242,
        zoomable: !1
      })
    }) : null, (0, d.jsxs)("div", {
      children: [(0, d.jsxs)("div", {
        children: [(0, d.jsx)(y.Z, {
          className: E()(ee.title, {
            [ee.modifiedTier2Title]: i,
            [ee.tier2Title]: !i
          })
        }), !l && m !== Q.Si.TIER_2 && D && (0, d.jsx)(N.Text, {
          variant: "text-xs/bold",
          className: ee.freeTrialPillInline,
          children: P
        }), i && (0, d.jsx)(N.Text, {
          variant: "display-md",
          color: "always-white",
          className: 2 === c ? ee.modifiedSubHeaderSettings : ee.modifiedSubHeaderStoreHome,
          children: $.Z.Messages.PREMIUM_TIER_2_SUBHEADER
        }), (0, d.jsx)(ea, {
          isGift: l,
          premiumTier: Q.p9.TIER_2,
          offerType: v,
          offerTierMatchesCard: m === Q.Si.TIER_2 || (0, Y.Wp)(C, Q.Si.TIER_2),
          showYearlyPrice: s,
          priceOptions: _,
          textVariant: i ? "heading-lg/normal" : void 0,
          shouldUseModifiedCopy: i,
          className: ee.modifiedPrice
        })]
      }), (0, d.jsx)("div", {
        children: (0, d.jsx)(e_, {
          featureSet: i ? 2 : o,
          isModal: u,
          isGift: l
        })
      })]
    }), r, l || m !== Q.Si.TIER_2 && null == C ? null : (0, d.jsx)(q.t, {
      tier: Q.p9.TIER_2
    })]
  })
}

function ec(e) {
  let {
    variant: t,
    showWumpus: n,
    tier0CTAButton: i,
    tier2CTAButton: r,
    className: s
  } = e, {
    analyticsLocations: o
  } = (0, O.ZP)(m.Z.PREMIUM_MARKETING_TIER_CARD), a = 1 === t || 2 === t;
  return (0, d.jsx)(O.Gt, {
    value: o,
    children: (0, d.jsxs)("div", {
      className: E()(ee.premiumCards, s),
      children: [(0, d.jsx)(eu, {
        showWumpus: n,
        shouldUseModifiedCopy: a,
        ctaButton: i,
        variant: t
      }), (0, d.jsx)(ed, {
        showWumpus: n,
        shouldUseModifiedCopy: a,
        ctaButton: r,
        variant: t
      })]
    })
  })
}(i = a || (a = {}))[i.PREMIUM_TIER_0_WHITE_FILL = 0] = "PREMIUM_TIER_0_WHITE_FILL", i[i.PREMIUM_TIER_0_GRADIENT_FILL = 1] = "PREMIUM_TIER_0_GRADIENT_FILL", i[i.PREMIUM_TIER_2_WHITE_FILL = 2] = "PREMIUM_TIER_2_WHITE_FILL", i[i.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3] = "PREMIUM_TIER_2_NEW_GRADIENT_FILL", i[i.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL", i[i.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5] = "PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE", (r = l || (l = {}))[r.PREMIUM_TRIAL = 0] = "PREMIUM_TRIAL", r[r.PREMIUM_DISCOUNT = 1] = "PREMIUM_DISCOUNT", (s = u || (u = {}))[s.DEFAULT = 0] = "DEFAULT", s[s.BOOSTING = 1] = "BOOSTING", s[s.MODIFIED = 2] = "MODIFIED", (o = _ || (_ = {}))[o.DEFAULT = 0] = "DEFAULT", o[o.MODIFIED_COPY_STORE_HOME = 1] = "MODIFIED_COPY_STORE_HOME", o[o.MODIFIED_COPY_SETTINGS = 2] = "MODIFIED_COPY_SETTINGS"