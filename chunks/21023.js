n.d(t, {
  n: function() {
return g;
  }
}), n(653041);
var s, a, r = n(735250);
n(470079);
var i = n(481060),
  l = n(706454),
  o = n(74538),
  c = n(937615),
  d = n(734741),
  _ = n(474936),
  u = n(981631),
  E = n(689938),
  T = n(59486);
let I = e => {
let {
  text: t,
  badge: n,
  variant: s
} = e;
return (0, r.jsxs)(i.Text, {
  color: 'text-normal',
  variant: null != s ? s : 'text-sm/normal',
  children: [
    t,
    ' ',
    n
  ]
});
  },
  R = e => {
let {
  text: t,
  variant: n
} = e;
return (0, r.jsx)(i.Text, {
  color: 'header-primary',
  variant: null != n ? n : 'text-md/semibold',
  children: t
});
  },
  C = e => {
let {
  includes: t
} = e;
return t ? (0, r.jsxs)(r.Fragment, {
  children: [
    (0, r.jsx)(i.CheckmarkLargeIcon, {
      size: 'md',
      color: 'currentColor',
      className: T.checkmarkIcon,
      'aria-hidden': !0
    }),
    (0, r.jsx)(i.HiddenVisually, {
      children: E.Z.Messages.INCLUDED
    })
  ]
}) : (0, r.jsxs)(r.Fragment, {
  children: [
    (0, r.jsx)(i.XSmallIcon, {
      size: 'md',
      color: 'currentColor',
      className: T.closeIcon,
      'aria-hidden': !0
    }),
    (0, r.jsx)(i.HiddenVisually, {
      children: E.Z.Messages.NOT_INCLUDED
    })
  ]
});
  };
(a = s || (s = {}))[a.PRICE = 0] = 'PRICE', a[a.EMOJI = 1] = 'EMOJI', a[a.STICKER = 2] = 'STICKER', a[a.CUSTOM_APP_ICONS = 3] = 'CUSTOM_APP_ICONS', a[a.SUPER_REACTIONS = 4] = 'SUPER_REACTIONS', a[a.UPLOAD = 5] = 'UPLOAD', a[a.STREAMING = 6] = 'STREAMING', a[a.BOOSTS = 7] = 'BOOSTS', a[a.PROFILE_THEMES = 8] = 'PROFILE_THEMES', a[a.SERVER_PROFILE = 9] = 'SERVER_PROFILE', a[a.SHOP_DISCOUNTS = 10] = 'SHOP_DISCOUNTS', a[a.CLIENT_THEME = 11] = 'CLIENT_THEME', a[a.BADGE = 12] = 'BADGE', a[a.VIDEO_BACKGROUND = 13] = 'VIDEO_BACKGROUND', a[a.CUSTOM_SOUNDS_ANYWHERE = 14] = 'CUSTOM_SOUNDS_ANYWHERE', a[a.CUSTOM_ENTRY_SOUNDS = 15] = 'CUSTOM_ENTRY_SOUNDS', a[a.SERVER_LIMIT = 16] = 'SERVER_LIMIT', a[a.MESSAGE_LENGTH = 17] = 'MESSAGE_LENGTH', a[a.CUSTOMIZATION_CATEGORY = 18] = 'CUSTOMIZATION_CATEGORY', a[a.FEATURE_UPGRADES_CATEGORY = 19] = 'FEATURE_UPGRADES_CATEGORY', a[a.PERSONALIZATION_CATEGORY = 20] = 'PERSONALIZATION_CATEGORY', a[a.AVATAR_AND_BANNER = 21] = 'AVATAR_AND_BANNER', a[a.REFERRAL_PROGRAM = 22] = 'REFERRAL_PROGRAM';
let g = (e, t, n, s) => {
  let a = {
  0: {
    label: (0, r.jsx)(I, {
      text: E.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_PRICE
    }),
    column1: (0, r.jsx)(r.Fragment, {
      children: (0, r.jsx)(R, {
        text: o.ZP.formatPriceString(e, _.rV.MONTH)
      })
    }),
    column2: (0, r.jsx)(r.Fragment, {
      children: (0, r.jsx)(R, {
        text: n ? s : o.ZP.formatPriceString(t, _.rV.MONTH)
      })
    }),
    withBottomBorder: !0
  },
  1: {
    label: (0, r.jsx)(I, {
      text: E.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_EMOJI
    }),
    column1: (0, r.jsx)(C, {
      includes: !0
    }),
    column2: (0, r.jsx)(C, {
      includes: !0
    })
  },
  2: {
    label: (0, r.jsx)(I, {
      text: E.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_STICKER_V2
    }),
    column1: (0, r.jsx)(C, {
      includes: !0
    }),
    column2: (0, r.jsx)(C, {
      includes: !0
    })
  },
  3: {
    label: (0, r.jsx)(I, {
      text: E.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE
    }),
    column1: (0, r.jsx)(C, {
      includes: !0
    }),
    column2: (0, r.jsx)(C, {
      includes: !0
    })
  },
  4: {
    label: (0, r.jsx)(I, {
      text: E.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SUPER_REACTIONS
    }),
    column1: (0, r.jsx)(C, {
      includes: !0
    }),
    column2: (0, r.jsx)(C, {
      includes: !0
    })
  },
  5: {
    label: (0, r.jsx)(I, {
      text: E.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_UPLOAD
    }),
    column1: (0, r.jsx)(R, {
      text: (0, o.v9)(_.p9.TIER_0)
    }),
    column2: (0, r.jsx)(R, {
      text: (0, o.v9)(_.p9.TIER_2)
    })
  },
  6: {
    label: (0, r.jsx)(I, {
      text: E.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_STREAMING
    }),
    column1: (0, r.jsx)(C, {
      includes: !1
    }),
    column2: (0, r.jsx)(R, {
      text: E.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_STREAMING_DETAILS
    })
  },
  7: {
    label: (0, r.jsx)(I, {
      text: E.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_BOOSTS.format({
        numBoosts: _.cb,
        percentageOff: (0, c.T3)(l.default.locale, _.Rr / 100)
      })
    }),
    column1: (0, r.jsx)(C, {
      includes: !1
    }),
    column2: (0, r.jsx)(C, {
      includes: !0
    })
  },
  8: {
    label: (0, r.jsx)(I, {
      text: E.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_PROFILE_THEMES
    }),
    column1: (0, r.jsx)(C, {
      includes: !1
    }),
    column2: (0, r.jsx)(C, {
      includes: !0
    })
  },
  9: {
    label: (0, r.jsx)(I, {
      text: E.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SERVER_PROFILE
    }),
    column1: (0, r.jsx)(C, {
      includes: !1
    }),
    column2: (0, r.jsx)(C, {
      includes: !0
    })
  },
  10: {
    label: (0, r.jsx)(I, {
      text: E.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SHOP_DISCOUNTS_GENERIC
    }),
    column1: (0, r.jsx)(C, {
      includes: !1
    }),
    column2: (0, r.jsx)(C, {
      includes: !0
    })
  },
  11: {
    label: (0, r.jsx)(I, {
      text: E.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_CLIENT_THEME
    }),
    column1: (0, r.jsx)(C, {
      includes: !1
    }),
    column2: (0, r.jsx)(C, {
      includes: !0
    })
  },
  12: {
    label: (0, r.jsx)(I, {
      text: E.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_BADGE
    }),
    column1: (0, r.jsx)(C, {
      includes: !0
    }),
    column2: (0, r.jsx)(C, {
      includes: !0
    })
  },
  13: {
    label: (0, r.jsx)(I, {
      text: E.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_VIDEO_BACKGROUND
    }),
    column1: (0, r.jsx)(C, {
      includes: !0
    }),
    column2: (0, r.jsx)(C, {
      includes: !0
    })
  },
  14: {
    label: (0, r.jsx)(I, {
      text: E.Z.Messages.SOUNDBOARD_MARKETING_CUSTOM_SOUNDS_ANYWHERE
    }),
    column1: (0, r.jsx)(C, {
      includes: !1
    }),
    column2: (0, r.jsx)(C, {
      includes: !0
    }),
    withBottomBorder: !0
  },
  15: {
    label: (0, r.jsx)(I, {
      text: E.Z.Messages.SOUNDBOARD_MARKETING_CUSTOM_ENTRY_SOUNDS_V2
    }),
    column1: (0, r.jsx)(C, {
      includes: !1
    }),
    column2: (0, r.jsx)(C, {
      includes: !0
    })
  },
  21: {
    label: (0, r.jsx)(I, {
      text: E.Z.Messages.AVATAR_PROFILE_BANNER_MARKETING
    }),
    column1: (0, r.jsx)(C, {
      includes: !1
    }),
    column2: (0, r.jsx)(C, {
      includes: !0
    })
  },
  16: {
    label: (0, r.jsx)(I, {
      text: E.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SERVER_LIMIT
    }),
    column1: (0, r.jsx)(C, {
      includes: !1
    }),
    column2: (0, r.jsx)(C, {
      includes: !0
    })
  },
  17: {
    label: (0, r.jsx)(I, {
      text: E.Z.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_MESSAGE_LENGTH.format({
        maxChars: u.en1
      })
    }),
    column1: (0, r.jsx)(C, {
      includes: !1
    }),
    column2: (0, r.jsx)(C, {
      includes: !0
    }),
    withBottomBorder: !0
  },
  18: {
    label: (0, r.jsx)(i.Heading, {
      className: T.__invalid_textColor,
      variant: 'display-sm',
      children: 'Make Discord Yours'
    }),
    column1: null,
    column2: null,
    withBottomBorder: !1
  },
  19: {
    label: (0, r.jsx)(i.Heading, {
      className: T.__invalid_textColor,
      variant: 'display-sm',
      children: 'Enjoy an Upgraded Discord'
    }),
    column1: null,
    column2: null,
    withBottomBorder: !1
  },
  20: {
    label: (0, r.jsx)(i.Heading, {
      className: T.__invalid_textColor,
      variant: 'display-sm',
      children: 'Show Up the Way You Want'
    }),
    column1: null,
    column2: null,
    withBottomBorder: !1
  },
  22: {
    label: (0, r.jsx)(I, {
      text: E.Z.Messages.REFERRAL_PROGRAM_PLAN_COMPARISON_ROW
    }),
    column1: (0, r.jsx)(C, {
      includes: !1
    }),
    column2: (0, r.jsx)(C, {
      includes: !0
    }),
    withBottomBorder: !1
  }
},
g = [
  a[0],
  a[1],
  a[2],
  a[3],
  a[4],
  a[5],
  a[6],
  a[7],
  a[8],
  a[9],
  a[10],
  a[11],
  a[12],
  a[13],
  a[14],
  a[15],
  a[16],
  a[17]
];
  return (0, d.V)() && g.push(a[22]), g;
};