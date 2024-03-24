"use strict";
s.r(t), s.d(t, {
  useGetPlanComparisonTableRows: function() {
    return N
  }
});
var a, r, n = s("37983");
s("884691");
var i = s("77078"),
  l = s("915639"),
  o = s("36694"),
  u = s("945330"),
  d = s("719923"),
  c = s("153160"),
  _ = s("527715"),
  E = s("646718"),
  T = s("49111"),
  I = s("782340"),
  f = s("962962");
let R = e => {
    let {
      text: t,
      badge: s,
      variant: a
    } = e;
    return (0, n.jsxs)(i.Text, {
      color: "text-normal",
      variant: null != a ? a : "text-sm/normal",
      children: [t, " ", s]
    })
  },
  S = e => {
    let {
      text: t,
      variant: s
    } = e;
    return (0, n.jsx)(i.Text, {
      color: "header-primary",
      variant: null != s ? s : "text-md/semibold",
      children: t
    })
  },
  m = e => {
    let {
      includes: t
    } = e;
    return t ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(o.default, {
        className: f.checkmarkIcon,
        "aria-hidden": !0
      }), (0, n.jsx)(i.HiddenVisually, {
        children: I.default.Messages.INCLUDED
      })]
    }) : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(u.default, {
        className: f.closeIcon,
        "aria-hidden": !0
      }), (0, n.jsx)(i.HiddenVisually, {
        children: I.default.Messages.NOT_INCLUDED
      })]
    })
  };
(a = r || (r = {}))[a.PRICE = 0] = "PRICE", a[a.EMOJI = 1] = "EMOJI", a[a.STICKER = 2] = "STICKER", a[a.CUSTOM_APP_ICONS = 3] = "CUSTOM_APP_ICONS", a[a.SUPER_REACTIONS = 4] = "SUPER_REACTIONS", a[a.UPLOAD = 5] = "UPLOAD", a[a.STREAMING = 6] = "STREAMING", a[a.BOOSTS = 7] = "BOOSTS", a[a.PROFILE_THEMES = 8] = "PROFILE_THEMES", a[a.SERVER_PROFILE = 9] = "SERVER_PROFILE", a[a.SHOP_DISCOUNTS = 10] = "SHOP_DISCOUNTS", a[a.CLIENT_THEME = 11] = "CLIENT_THEME", a[a.BADGE = 12] = "BADGE", a[a.VIDEO_BACKGROUND = 13] = "VIDEO_BACKGROUND", a[a.CUSTOM_SOUNDS_ANYWHERE = 14] = "CUSTOM_SOUNDS_ANYWHERE", a[a.CUSTOM_ENTRY_SOUNDS = 15] = "CUSTOM_ENTRY_SOUNDS", a[a.SERVER_LIMIT = 16] = "SERVER_LIMIT", a[a.MESSAGE_LENGTH = 17] = "MESSAGE_LENGTH", a[a.CUSTOMIZATION_CATEGORY = 18] = "CUSTOMIZATION_CATEGORY", a[a.FEATURE_UPGRADES_CATEGORY = 19] = "FEATURE_UPGRADES_CATEGORY", a[a.PERSONALIZATION_CATEGORY = 20] = "PERSONALIZATION_CATEGORY", a[a.AVATAR_AND_BANNER = 21] = "AVATAR_AND_BANNER";
let N = (e, t, s, a) => {
  let r = (0, _.useMarketingOptimizationExperiment)({
      autoTrackExposure: !1
    }),
    o = {
      0: {
        label: (0, n.jsx)(R, {
          variant: r ? "heading-lg/extrabold" : void 0,
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_PRICE
        }),
        column1: (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(S, {
            variant: r ? "heading-md/semibold" : void 0,
            text: d.default.formatPriceString(e, E.SubscriptionIntervalTypes.MONTH)
          })
        }),
        column2: (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(S, {
            text: s ? a : d.default.formatPriceString(t, E.SubscriptionIntervalTypes.MONTH)
          })
        }),
        withBottomBorder: !r
      },
      1: {
        label: (0, n.jsx)(R, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_EMOJI
        }),
        column1: (0, n.jsx)(m, {
          includes: !0
        }),
        column2: (0, n.jsx)(m, {
          includes: !0
        })
      },
      2: {
        label: (0, n.jsx)(R, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_STICKER_V2
        }),
        column1: (0, n.jsx)(m, {
          includes: !0
        }),
        column2: (0, n.jsx)(m, {
          includes: !0
        })
      },
      3: {
        label: (0, n.jsx)(R, {
          text: I.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE
        }),
        column1: (0, n.jsx)(m, {
          includes: !0
        }),
        column2: (0, n.jsx)(m, {
          includes: !0
        })
      },
      4: {
        label: (0, n.jsx)(R, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SUPER_REACTIONS
        }),
        column1: (0, n.jsx)(m, {
          includes: !0
        }),
        column2: (0, n.jsx)(m, {
          includes: !0
        })
      },
      5: {
        label: (0, n.jsx)(R, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_UPLOAD
        }),
        column1: (0, n.jsx)(S, {
          text: (0, d.getMaxFileSizeForPremiumType)(E.PremiumTypes.TIER_0)
        }),
        column2: (0, n.jsx)(S, {
          text: (0, d.getMaxFileSizeForPremiumType)(E.PremiumTypes.TIER_2)
        })
      },
      6: {
        label: (0, n.jsx)(R, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_STREAMING
        }),
        column1: (0, n.jsx)(m, {
          includes: !1
        }),
        column2: (0, n.jsx)(S, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_STREAMING_DETAILS
        })
      },
      7: {
        label: (0, n.jsx)(R, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_BOOSTS.format({
            numBoosts: E.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
            percentageOff: (0, c.formatPercent)(l.default.locale, E.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
          })
        }),
        column1: (0, n.jsx)(m, {
          includes: !1
        }),
        column2: (0, n.jsx)(m, {
          includes: !0
        })
      },
      8: {
        label: (0, n.jsx)(R, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_PROFILE_THEMES
        }),
        column1: (0, n.jsx)(m, {
          includes: !1
        }),
        column2: (0, n.jsx)(m, {
          includes: !0
        })
      },
      9: {
        label: (0, n.jsx)(R, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SERVER_PROFILE
        }),
        column1: (0, n.jsx)(m, {
          includes: !1
        }),
        column2: (0, n.jsx)(m, {
          includes: !0
        })
      },
      10: {
        label: (0, n.jsx)(R, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SHOP_DISCOUNTS_GENERIC
        }),
        column1: (0, n.jsx)(m, {
          includes: !1
        }),
        column2: (0, n.jsx)(m, {
          includes: !0
        })
      },
      11: {
        label: (0, n.jsx)(R, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_CLIENT_THEME
        }),
        column1: (0, n.jsx)(m, {
          includes: !1
        }),
        column2: (0, n.jsx)(m, {
          includes: !0
        })
      },
      12: {
        label: (0, n.jsx)(R, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_BADGE
        }),
        column1: (0, n.jsx)(m, {
          includes: !0
        }),
        column2: (0, n.jsx)(m, {
          includes: !0
        })
      },
      13: {
        label: (0, n.jsx)(R, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_VIDEO_BACKGROUND
        }),
        column1: (0, n.jsx)(m, {
          includes: !0
        }),
        column2: (0, n.jsx)(m, {
          includes: !0
        })
      },
      14: {
        label: (0, n.jsx)(R, {
          text: I.default.Messages.SOUNDBOARD_MARKETING_CUSTOM_SOUNDS_ANYWHERE
        }),
        column1: (0, n.jsx)(m, {
          includes: !1
        }),
        column2: (0, n.jsx)(m, {
          includes: !0
        }),
        withBottomBorder: !r
      },
      15: {
        label: (0, n.jsx)(R, {
          text: I.default.Messages.SOUNDBOARD_MARKETING_CUSTOM_ENTRY_SOUNDS_V2
        }),
        column1: (0, n.jsx)(m, {
          includes: !1
        }),
        column2: (0, n.jsx)(m, {
          includes: !0
        })
      },
      21: {
        label: (0, n.jsx)(R, {
          text: I.default.Messages.AVATAR_PROFILE_BANNER_MARKETING
        }),
        column1: (0, n.jsx)(m, {
          includes: !1
        }),
        column2: (0, n.jsx)(m, {
          includes: !0
        })
      },
      16: {
        label: (0, n.jsx)(R, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SERVER_LIMIT
        }),
        column1: (0, n.jsx)(m, {
          includes: !1
        }),
        column2: (0, n.jsx)(m, {
          includes: !0
        })
      },
      17: {
        label: (0, n.jsx)(R, {
          text: I.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_MESSAGE_LENGTH.format({
            maxChars: T.MAX_MESSAGE_LENGTH_PREMIUM
          })
        }),
        column1: (0, n.jsx)(m, {
          includes: !1
        }),
        column2: (0, n.jsx)(m, {
          includes: !0
        }),
        withBottomBorder: !r
      },
      18: {
        label: (0, n.jsx)(i.Heading, {
          className: f.textColor,
          variant: "display-sm",
          children: "Make Discord Yours"
        }),
        column1: null,
        column2: null,
        withBottomBorder: !1
      },
      19: {
        label: (0, n.jsx)(i.Heading, {
          className: f.textColor,
          variant: "display-sm",
          children: "Enjoy an Upgraded Discord"
        }),
        column1: null,
        column2: null,
        withBottomBorder: !1
      },
      20: {
        label: (0, n.jsx)(i.Heading, {
          className: f.textColor,
          variant: "display-sm",
          children: "Show Up the Way You Want"
        }),
        column1: null,
        column2: null,
        withBottomBorder: !1
      }
    };
  return r ? [o[0], o[18], o[1], o[2], o[14], o[19], o[5], o[6], o[7], o[21], o[9], o[13], o[16], o[17], o[20], o[12], o[15]] : [o[0], o[1], o[2], o[3], o[4], o[5], o[6], o[7], o[8], o[9], o[10], o[11], o[12], o[13], o[14], o[15], o[16], o[17]]
}