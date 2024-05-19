"use strict";
s.r(t), s.d(t, {
  useGetPlanComparisonTableRows: function() {
    return N
  }
}), s("653041");
var a, r, i = s("735250");
s("470079");
var n = s("481060"),
  l = s("706454"),
  o = s("263704"),
  u = s("465670"),
  d = s("74538"),
  c = s("937615"),
  _ = s("846363"),
  E = s("734741"),
  T = s("474936"),
  I = s("981631"),
  R = s("689938"),
  f = s("243794");
let S = e => {
    let {
      text: t,
      badge: s,
      variant: a
    } = e;
    return (0, i.jsxs)(n.Text, {
      color: "text-normal",
      variant: null != a ? a : "text-sm/normal",
      children: [t, " ", s]
    })
  },
  m = e => {
    let {
      text: t,
      variant: s
    } = e;
    return (0, i.jsx)(n.Text, {
      color: "header-primary",
      variant: null != s ? s : "text-md/semibold",
      children: t
    })
  },
  A = e => {
    let {
      includes: t
    } = e;
    return t ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(o.default, {
        className: f.checkmarkIcon,
        "aria-hidden": !0
      }), (0, i.jsx)(n.HiddenVisually, {
        children: R.default.Messages.INCLUDED
      })]
    }) : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(u.default, {
        className: f.closeIcon,
        "aria-hidden": !0
      }), (0, i.jsx)(n.HiddenVisually, {
        children: R.default.Messages.NOT_INCLUDED
      })]
    })
  };
(r = a || (a = {}))[r.PRICE = 0] = "PRICE", r[r.EMOJI = 1] = "EMOJI", r[r.STICKER = 2] = "STICKER", r[r.CUSTOM_APP_ICONS = 3] = "CUSTOM_APP_ICONS", r[r.SUPER_REACTIONS = 4] = "SUPER_REACTIONS", r[r.UPLOAD = 5] = "UPLOAD", r[r.STREAMING = 6] = "STREAMING", r[r.BOOSTS = 7] = "BOOSTS", r[r.PROFILE_THEMES = 8] = "PROFILE_THEMES", r[r.SERVER_PROFILE = 9] = "SERVER_PROFILE", r[r.SHOP_DISCOUNTS = 10] = "SHOP_DISCOUNTS", r[r.CLIENT_THEME = 11] = "CLIENT_THEME", r[r.BADGE = 12] = "BADGE", r[r.VIDEO_BACKGROUND = 13] = "VIDEO_BACKGROUND", r[r.CUSTOM_SOUNDS_ANYWHERE = 14] = "CUSTOM_SOUNDS_ANYWHERE", r[r.CUSTOM_ENTRY_SOUNDS = 15] = "CUSTOM_ENTRY_SOUNDS", r[r.SERVER_LIMIT = 16] = "SERVER_LIMIT", r[r.MESSAGE_LENGTH = 17] = "MESSAGE_LENGTH", r[r.CUSTOMIZATION_CATEGORY = 18] = "CUSTOMIZATION_CATEGORY", r[r.FEATURE_UPGRADES_CATEGORY = 19] = "FEATURE_UPGRADES_CATEGORY", r[r.PERSONALIZATION_CATEGORY = 20] = "PERSONALIZATION_CATEGORY", r[r.AVATAR_AND_BANNER = 21] = "AVATAR_AND_BANNER", r[r.REFERRAL_PROGRAM = 22] = "REFERRAL_PROGRAM";
let N = (e, t, s, a) => {
  let r = (0, _.useMarketingOptimizationExperiment)({
      autoTrackExposure: !1
    }),
    o = {
      0: {
        label: (0, i.jsx)(S, {
          variant: r ? "heading-lg/extrabold" : void 0,
          text: R.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_PRICE
        }),
        column1: (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(m, {
            variant: r ? "heading-md/semibold" : void 0,
            text: d.default.formatPriceString(e, T.SubscriptionIntervalTypes.MONTH)
          })
        }),
        column2: (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(m, {
            text: s ? a : d.default.formatPriceString(t, T.SubscriptionIntervalTypes.MONTH)
          })
        }),
        withBottomBorder: !r
      },
      1: {
        label: (0, i.jsx)(S, {
          text: R.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_EMOJI
        }),
        column1: (0, i.jsx)(A, {
          includes: !0
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        })
      },
      2: {
        label: (0, i.jsx)(S, {
          text: R.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_STICKER_V2
        }),
        column1: (0, i.jsx)(A, {
          includes: !0
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        })
      },
      3: {
        label: (0, i.jsx)(S, {
          text: R.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE
        }),
        column1: (0, i.jsx)(A, {
          includes: !0
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        })
      },
      4: {
        label: (0, i.jsx)(S, {
          text: R.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SUPER_REACTIONS
        }),
        column1: (0, i.jsx)(A, {
          includes: !0
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        })
      },
      5: {
        label: (0, i.jsx)(S, {
          text: R.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_UPLOAD
        }),
        column1: (0, i.jsx)(m, {
          text: (0, d.getMaxFileSizeForPremiumType)(T.PremiumTypes.TIER_0)
        }),
        column2: (0, i.jsx)(m, {
          text: (0, d.getMaxFileSizeForPremiumType)(T.PremiumTypes.TIER_2)
        })
      },
      6: {
        label: (0, i.jsx)(S, {
          text: R.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_STREAMING
        }),
        column1: (0, i.jsx)(A, {
          includes: !1
        }),
        column2: (0, i.jsx)(m, {
          text: R.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_STREAMING_DETAILS
        })
      },
      7: {
        label: (0, i.jsx)(S, {
          text: R.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_BOOSTS.format({
            numBoosts: T.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
            percentageOff: (0, c.formatPercent)(l.default.locale, T.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
          })
        }),
        column1: (0, i.jsx)(A, {
          includes: !1
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        })
      },
      8: {
        label: (0, i.jsx)(S, {
          text: R.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_PROFILE_THEMES
        }),
        column1: (0, i.jsx)(A, {
          includes: !1
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        })
      },
      9: {
        label: (0, i.jsx)(S, {
          text: R.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SERVER_PROFILE
        }),
        column1: (0, i.jsx)(A, {
          includes: !1
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        })
      },
      10: {
        label: (0, i.jsx)(S, {
          text: R.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SHOP_DISCOUNTS_GENERIC
        }),
        column1: (0, i.jsx)(A, {
          includes: !1
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        })
      },
      11: {
        label: (0, i.jsx)(S, {
          text: R.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_CLIENT_THEME
        }),
        column1: (0, i.jsx)(A, {
          includes: !1
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        })
      },
      12: {
        label: (0, i.jsx)(S, {
          text: R.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_BADGE
        }),
        column1: (0, i.jsx)(A, {
          includes: !0
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        })
      },
      13: {
        label: (0, i.jsx)(S, {
          text: R.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_VIDEO_BACKGROUND
        }),
        column1: (0, i.jsx)(A, {
          includes: !0
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        })
      },
      14: {
        label: (0, i.jsx)(S, {
          text: R.default.Messages.SOUNDBOARD_MARKETING_CUSTOM_SOUNDS_ANYWHERE
        }),
        column1: (0, i.jsx)(A, {
          includes: !1
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        }),
        withBottomBorder: !r
      },
      15: {
        label: (0, i.jsx)(S, {
          text: R.default.Messages.SOUNDBOARD_MARKETING_CUSTOM_ENTRY_SOUNDS_V2
        }),
        column1: (0, i.jsx)(A, {
          includes: !1
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        })
      },
      21: {
        label: (0, i.jsx)(S, {
          text: R.default.Messages.AVATAR_PROFILE_BANNER_MARKETING
        }),
        column1: (0, i.jsx)(A, {
          includes: !1
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        })
      },
      16: {
        label: (0, i.jsx)(S, {
          text: R.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SERVER_LIMIT
        }),
        column1: (0, i.jsx)(A, {
          includes: !1
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        })
      },
      17: {
        label: (0, i.jsx)(S, {
          text: R.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_MESSAGE_LENGTH.format({
            maxChars: I.MAX_MESSAGE_LENGTH_PREMIUM
          })
        }),
        column1: (0, i.jsx)(A, {
          includes: !1
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        }),
        withBottomBorder: !r
      },
      18: {
        label: (0, i.jsx)(n.Heading, {
          className: f.__invalid_textColor,
          variant: "display-sm",
          children: "Make Discord Yours"
        }),
        column1: null,
        column2: null,
        withBottomBorder: !1
      },
      19: {
        label: (0, i.jsx)(n.Heading, {
          className: f.__invalid_textColor,
          variant: "display-sm",
          children: "Enjoy an Upgraded Discord"
        }),
        column1: null,
        column2: null,
        withBottomBorder: !1
      },
      20: {
        label: (0, i.jsx)(n.Heading, {
          className: f.__invalid_textColor,
          variant: "display-sm",
          children: "Show Up the Way You Want"
        }),
        column1: null,
        column2: null,
        withBottomBorder: !1
      },
      22: {
        label: (0, i.jsx)(S, {
          text: R.default.Messages.REFERRAL_PROGRAM_PLAN_COMPARISON_ROW
        }),
        column1: (0, i.jsx)(A, {
          includes: !1
        }),
        column2: (0, i.jsx)(A, {
          includes: !0
        }),
        withBottomBorder: !1
      }
    };
  if (!r) {
    let e = [o[0], o[1], o[2], o[3], o[4], o[5], o[6], o[7], o[8], o[9], o[10], o[11], o[12], o[13], o[14], o[15], o[16], o[17]];
    return (0, E.shouldShowReferralProgramPlanComparisonRow)() && e.push(o[22]), e
  }
  return [o[0], o[18], o[1], o[2], o[14], o[19], o[5], o[6], o[7], o[21], o[9], o[13], o[16], o[17], o[20], o[12], o[15]]
}