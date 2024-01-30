"use strict";
s.r(t), s.d(t, {
  default: function() {
    return Y
  }
}), s("424973");
var a = s("37983"),
  r = s("884691"),
  n = s("414456"),
  l = s.n(n),
  i = s("446674"),
  u = s("819855"),
  o = s("77078"),
  d = s("875212"),
  c = s("841098"),
  _ = s("812204"),
  E = s("685665"),
  I = s("308592"),
  T = s("915639"),
  f = s("697218"),
  S = s("521012"),
  R = s("36694"),
  m = s("945330"),
  A = s("719923"),
  N = s("153160"),
  p = s("324878"),
  g = s("154889"),
  C = s("917247"),
  P = s("478968"),
  O = s("641078"),
  M = s("400307"),
  h = s("218435"),
  L = s("881155"),
  x = s("646718"),
  v = s("49111"),
  D = s("782340"),
  U = s("992250"),
  b = s("640754"),
  j = s("510407"),
  G = s("657890"),
  k = s("823986");
let B = e => {
    let {
      isLightTheme: t
    } = e, s = (0, O.getBOGOPillCopy)();
    return (0, a.jsx)(M.PremiumPillWithSparkles, {
      text: s,
      className: U.bogoPillWithSparkles,
      colorOptions: t ? M.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL : M.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL
    })
  },
  y = () => (0, a.jsx)("div", {
    className: U.mostPopularPill,
    children: (0, a.jsx)(o.Heading, {
      className: U.mostPopularText,
      variant: "heading-deprecated-12/extrabold",
      children: D.default.Messages.MOST_POPULAR
    })
  }),
  H = e => {
    let t, {
        premiumType: s
      } = e,
      r = (0, c.default)();
    t = s === x.PremiumTypes.TIER_0 ? (0, u.isThemeDark)(r) ? b : j : (0, u.isThemeDark)(r) ? G : k;
    let n = (0, A.getPremiumTypeDisplayName)(s);
    return (0, a.jsx)("img", {
      src: t,
      className: U.logo,
      alt: n
    })
  },
  K = e => {
    let {
      text: t,
      badge: s
    } = e;
    return (0, a.jsxs)(o.Text, {
      color: "text-normal",
      variant: "text-sm/normal",
      children: [t, " ", s]
    })
  },
  W = e => {
    let {
      text: t
    } = e;
    return (0, a.jsx)(o.Text, {
      color: "header-primary",
      variant: "text-md/semibold",
      children: t
    })
  },
  F = e => {
    let {
      includes: t
    } = e;
    return t ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(R.default, {
        className: U.checkmarkIcon,
        "aria-hidden": !0
      }), (0, a.jsx)(o.HiddenVisually, {
        children: D.default.Messages.INCLUDED
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(m.default, {
        className: U.closeIcon,
        "aria-hidden": !0
      }), (0, a.jsx)(o.HiddenVisually, {
        children: D.default.Messages.NOT_INCLUDED
      })]
    })
  },
  w = e => {
    let {
      label: t,
      column1: s,
      column2: r
    } = e;
    return (0, a.jsxs)("tr", {
      className: l(U.headerRow, U.rowBottomBorder, U.topBorderRadius),
      children: [(0, a.jsx)("th", {
        scope: "col",
        className: U.headerLabelCell,
        children: t
      }), (0, a.jsx)("th", {
        scope: "col",
        className: U.headerCell,
        children: s
      }), (0, a.jsx)("th", {
        scope: "col",
        className: l(U.headerCell, U.topBorderRadius),
        children: r
      })]
    })
  },
  V = e => {
    let {
      label: t,
      column1: s,
      column2: r,
      withBottomBorder: n = !0,
      withTopBorderRadius: i = !1,
      withBottomBorderRadius: u = !1,
      buttonsRow: o = !1,
      shortRow: d = !1
    } = e;
    return (0, a.jsxs)("tr", {
      className: l(U.row, {
        [U.wideRow]: o,
        [U.topBorderRadius]: i,
        [U.bottomBorderRadius]: u,
        [U.rowBottomBorder]: n,
        [U.shortRow]: d
      }),
      children: [(0, a.jsx)("th", {
        scope: "row",
        className: U.labelCell,
        children: t
      }), (0, a.jsx)("td", {
        className: l(U.cell, {
          [U.buttonsCell]: o
        }),
        children: s
      }), (0, a.jsx)("td", {
        className: l(U.cell, {
          [U.topBorderRadius]: i,
          [U.bottomBorderRadius]: u,
          [U.buttonsCell]: o
        }),
        children: r
      })]
    })
  };
var Y = e => {
  var t;
  let s, {
      className: n,
      hideCTAs: R = !1,
      headingOverride: m,
      hidePill: b = !1,
      selectedPlanColumnClassName: j,
      selectedPlanTier: G = x.PremiumTypes.TIER_2
    } = e,
    {
      AnalyticsLocationProvider: k
    } = (0, E.default)(_.default.PREMIUM_MARKETING_PLAN_COMPARISON),
    Y = (0, i.useStateFromStores)([S.default], () => S.default.hasFetchedSubscriptions()),
    z = (0, I.useSubscriptionPlansLoaded)(),
    Q = "PlanComparisonTable";
  (0, d.useTriggerDebuggingAA)({
    location: Q + " auto on",
    autoTrackExposure: !0
  }), (0, d.useTriggerDebuggingAA)({
    location: Q + " auto off",
    autoTrackExposure: !1
  });
  let X = (0, c.default)(),
    J = (0, u.isThemeLight)(X),
    Z = (0, i.useStateFromStores)([f.default], () => f.default.getCurrentUser()),
    q = (0, A.isPremiumExactly)(Z, x.PremiumTypes.TIER_2),
    $ = (0, C.usePremiumTrialOffer)(),
    ee = null == $ ? void 0 : null === (t = $.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
    et = (0, p.useCurrentPremiumTrialTier)(),
    es = (0, g.usePremiumDiscountOffer)(),
    ea = null != es && (0, g.discountOfferHasTier)(es, x.PremiumSubscriptionSKUs.TIER_2),
    er = (0, P.useDiscountedPrice)(x.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
    en = "".concat(er, "/").concat((0, A.getIntervalStringAsNoun)(x.SubscriptionIntervalTypes.MONTH)),
    el = (0, O.useIsEligibleForBogoPromotion)();
  if (!Y || !z) return null;
  let ei = A.default.getDefaultPrice(x.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
    eu = A.default.getDefaultPrice(x.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
    eo = {
      label: (0, a.jsx)(o.Heading, {
        className: U.textColor,
        variant: "heading-lg/extrabold",
        children: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_HEADER
      }),
      column1: (0, a.jsx)(H, {
        premiumType: x.PremiumTypes.TIER_0
      }),
      column2: (0, a.jsx)(H, {
        premiumType: x.PremiumTypes.TIER_2
      })
    },
    ed = [{
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_PRICE
      }),
      column1: (0, a.jsx)(a.Fragment, {
        children: (0, a.jsx)(W, {
          text: A.default.formatPriceString(ei, x.SubscriptionIntervalTypes.MONTH)
        })
      }),
      column2: (0, a.jsx)(a.Fragment, {
        children: (0, a.jsx)(W, {
          text: ea ? en : A.default.formatPriceString(eu, x.SubscriptionIntervalTypes.MONTH)
        })
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_EMOJI
      }),
      column1: (0, a.jsx)(F, {
        includes: !0
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_STICKER
      }),
      column1: (0, a.jsx)(F, {
        includes: !0
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE
      }),
      column1: (0, a.jsx)(F, {
        includes: !0
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SUPER_REACTIONS
      }),
      column1: (0, a.jsx)(F, {
        includes: !0
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_UPLOAD
      }),
      column1: (0, a.jsx)(W, {
        text: (0, A.getMaxFileSizeForPremiumType)(x.PremiumTypes.TIER_0)
      }),
      column2: (0, a.jsx)(W, {
        text: (0, A.getMaxFileSizeForPremiumType)(x.PremiumTypes.TIER_2)
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_STREAMING
      }),
      column1: (0, a.jsx)(F, {
        includes: !1
      }),
      column2: (0, a.jsx)(W, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_STREAMING_DETAILS
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_BOOSTS.format({
          numBoosts: x.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
          percentageOff: (0, N.formatPercent)(T.default.locale, x.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
        })
      }),
      column1: (0, a.jsx)(F, {
        includes: !1
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_PROFILE_THEMES
      }),
      column1: (0, a.jsx)(F, {
        includes: !1
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SERVER_PROFILE
      }),
      column1: (0, a.jsx)(F, {
        includes: !1
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SHOP_DISCOUNTS_GENERIC
      }),
      column1: (0, a.jsx)(F, {
        includes: !1
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_CLIENT_THEME
      }),
      column1: (0, a.jsx)(F, {
        includes: !1
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_BADGE
      }),
      column1: (0, a.jsx)(F, {
        includes: !0
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_VIDEO_BACKGROUND
      }),
      column1: (0, a.jsx)(F, {
        includes: !0
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.SOUNDBOARD_MARKETING_CUSTOM_SOUNDS_ANYWHERE
      }),
      column1: (0, a.jsx)(F, {
        includes: !1
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.SOUNDBOARD_MARKETING_CUSTOM_ENTRY_SOUNDS
      }),
      column1: (0, a.jsx)(F, {
        includes: !1
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SERVER_LIMIT
      }),
      column1: (0, a.jsx)(F, {
        includes: !1
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(K, {
        text: D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_MESSAGE_LENGTH.format({
          maxChars: v.MAX_MESSAGE_LENGTH_PREMIUM
        })
      }),
      column1: (0, a.jsx)(F, {
        includes: !1
      }),
      column2: (0, a.jsx)(F, {
        includes: !0
      })
    }];
  return R ? ed.push({
    label: null,
    column1: null,
    column2: null,
    withBottomBorder: !1,
    withBottomBorderRadius: !0,
    buttonsRow: !1,
    shortRow: !0
  }) : ed.push({
    label: null,
    column1: (0, a.jsxs)(a.Fragment, {
      children: [ee === x.PremiumSubscriptionSKUs.TIER_2 || el ? (0, a.jsx)(L.default, {
        className: U.button,
        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_0,
        showIcon: !1,
        look: o.ButtonLooks.OUTLINED,
        color: J ? o.ButtonColors.BRAND_NEW : o.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, a.jsx)(L.default, {
        className: U.button,
        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_0,
        showIcon: !1
      }), et === x.PremiumTypes.TIER_2 || null != ee ? null : (0, a.jsx)(h.default, {
        className: U.button,
        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_0
      })]
    }),
    column2: (0, a.jsxs)(a.Fragment, {
      children: [ee === x.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(L.default, {
        className: U.button,
        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_2,
        showIcon: !1,
        look: o.ButtonLooks.OUTLINED,
        color: J ? o.ButtonColors.BRAND_NEW : o.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, a.jsx)(L.default, {
        className: U.button,
        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_2,
        showIcon: !1,
        isEligibleForBogoPromotion: el
      }), et === x.PremiumTypes.TIER_0 || null != ee ? null : (0, a.jsx)(h.default, {
        className: U.button,
        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_2
      })]
    }),
    withBottomBorder: !1,
    withBottomBorderRadius: !0,
    buttonsRow: null == ee
  }), s = b ? null : null != ee || null != et ? (0, a.jsx)(M.PremiumPillWithSparkles, {
    text: null != ee ? D.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT : D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_PLAN_ACTIVATED_PILL,
    className: U.freeTrialPillWithSparkles,
    colorOptions: ee === x.PremiumSubscriptionSKUs.TIER_0 ? J ? M.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_GRADIENT_FILL : M.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_WHITE_FILL : J ? q ? M.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL : M.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL : M.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
  }) : el ? (0, a.jsx)(B, {
    isLightTheme: J
  }) : (0, a.jsx)(y, {}), (0, a.jsx)(k, {
    children: (0, a.jsxs)("div", {
      className: l(U.root, n),
      "data-testid": "v2-marketing-page-comparison-table",
      children: [(0, a.jsx)(o.Heading, {
        className: l(U.titleText, U.textColor),
        variant: "heading-xxl/extrabold",
        children: null != m ? m : D.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_TITLE
      }), (0, a.jsxs)("div", {
        className: U.tableWrapper,
        children: [(0, a.jsx)("div", {
          className: ee === x.PremiumSubscriptionSKUs.TIER_0 || et === x.PremiumTypes.TIER_0 || G === x.PremiumTypes.TIER_0 ? l(j, U.tier0ColumnOuter) : l(j, U.tier2ColumnOuter),
          children: s
        }), (0, a.jsxs)("table", {
          className: U.table,
          children: [(0, a.jsx)("thead", {
            children: (0, a.jsx)(w, {
              ...eo
            })
          }), (0, a.jsx)("tbody", {
            children: ed.map((e, t) => (0, r.createElement)(V, {
              ...e,
              key: t
            }))
          })]
        })]
      })]
    })
  })
}