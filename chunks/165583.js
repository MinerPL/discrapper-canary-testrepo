n.d(t, {
  ZP: function() {
return H;
  },
  dz: function() {
return k;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(512722),
  l = n.n(s),
  u = n(913527),
  c = n.n(u),
  d = n(442837),
  _ = n(952265),
  E = n(780384),
  f = n(481060),
  h = n(410030),
  p = n(607070),
  m = n(238302),
  I = n(703656),
  T = n(483444),
  g = n(599250),
  S = n(424218),
  A = n(380684),
  N = n(74538),
  v = n(960048),
  O = n(861990),
  R = n(98278),
  C = n(639119),
  y = n(197115),
  D = n(823188),
  L = n(474936),
  b = n(981631),
  M = n(689938),
  P = n(927523),
  U = n(867250);

function w(e) {
  if (null == e)
return null;
  let t = c()(e),
n = t.diff(c()(), 'h');
  if (n > 24) {
let e = t.diff(c()(), 'd');
return M.Z.Messages.PREMIUM_TRIAL_OFFER_ENDS_DAYS.format({
  numDays: e
});
  }
  if (n > 1)
return M.Z.Messages.PREMIUM_TRIAL_OFFER_ENDS_HOURS.format({
  numHours: n
});
  let r = t.diff(c()(), 'minutes');
  return M.Z.Messages.PREMIUM_TRIAL_OFFER_ENDS_MINUTES.format({
numMinutes: r
  });
}

function x(e) {
  var t, n, i;
  let {
className: a,
children: s,
withBottomMargin: l,
discountOffer: u,
trialOffer: c
  } = e, d = null !== (t = null == c ? void 0 : c.expires_at) && void 0 !== t ? t : null == u ? void 0 : u.expires_at, _ = null == c ? void 0 : c.subscription_trial, E = null !== (i = null !== (n = e.subscriptionTier) && void 0 !== n ? n : null == _ ? void 0 : _.sku_id) && void 0 !== i ? i : L.Si.TIER_2;
  return (0, r.jsxs)('div', {
className: o()(a, P.gradientUpsellWrapper, {
  [P.gradientUpsellWrapperTier0]: E === L.Si.TIER_0,
  [P.gradientUpsellWrapperTier2]: E === L.Si.TIER_2,
  [P.gradientUpsellWrapperWithBottomMargin]: l
}),
children: [
  (0, r.jsxs)('div', {
    className: P.logo,
    children: [
      (0, r.jsx)(f.NitroWheelIcon, {
        size: 'md',
        color: 'currentColor',
        className: P.logoIcon
      }),
      E === L.Si.TIER_0 && (0, r.jsx)(g.Z, {
        className: P.logoWordmark
      }),
      E === L.Si.TIER_2 && (0, r.jsx)(T.Z, {
        className: P.logoWordmark
      })
    ]
  }),
  (0, r.jsx)(f.Text, {
    variant: 'text-md/medium',
    className: P.copy,
    color: 'none',
    children: s
  }),
  (0, r.jsx)(D.Cy, {
    text: null != u ? M.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
      percent: u.discount.amount
    }) : M.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
    colorOptions: E === L.Si.TIER_0 ? D.VE.PREMIUM_TIER_0_WHITE_FILL : D.VE.PREMIUM_TIER_2_WHITE_FILL
  }),
  (0, r.jsx)(f.Text, {
    variant: 'eyebrow',
    className: P.countdownText,
    children: w(d)
  })
]
  });
}

function G(e) {
  var t, n;
  let {
className: a,
onClose: o,
subscriptionTier: s,
analyticsLocationObject: l,
trialOffer: u,
discountOffer: c
  } = e, [d, _] = i.useState(!1), E = null != c ? M.Z.Messages.PREMIUM_DISCOUNT_CTA.format({
percent: c.discount.amount
  }) : (0, N.Rt)({
intervalType: null == u ? void 0 : null === (t = u.subscription_trial) || void 0 === t ? void 0 : t.interval,
intervalCount: null == u ? void 0 : null === (n = u.subscription_trial) || void 0 === n ? void 0 : n.interval_count
  });
  return (0, r.jsx)(y.Z, {
className: a,
subscriptionTier: s,
trialId: null == u ? void 0 : u.trial_id,
submitting: d,
premiumModalAnalyticsLocation: l,
size: f.Button.Sizes.MEDIUM,
color: f.Button.Colors.GREEN,
onClick: () => {
  _(!0);
},
onSubscribeModalClose: e => {
  _(!1), e && (null == o || o());
},
buttonText: E
  });
}

function k(e) {
  var t, n;
  let i = null === (t = (0, C.N)()) || void 0 === t ? void 0 : t.subscription_trial,
a = null !== (n = null == i ? void 0 : i.sku_id) && void 0 !== n ? n : L.Si.TIER_2;
  return (0, r.jsx)(f.Text, {
variant: 'text-xs/bold',
className: o()(P.trialBadge, e.className, {
  [P.trialBadgeGradientTier0]: a === L.Si.TIER_0,
  [P.trialBadgeGradientTier2]: a === L.Si.TIER_2
}),
color: 'none',
children: (0, N.a5)({
  intervalType: null == i ? void 0 : i.interval,
  intervalCount: null == i ? void 0 : i.interval_count
})
  });
}

function B(e) {
  let {
subscriptionTier: t,
onClose: n,
analyticsLocationObject: i,
trialOffer: a,
discountOffer: o
  } = e;
  return (0, r.jsxs)('div', {
className: P.footer,
children: [
  (0, r.jsx)(f.Button, {
    onClick: n,
    size: f.Button.Sizes.SMALL,
    look: f.ButtonLooks.BLANK,
    className: P.cancelButton,
    children: M.Z.Messages.CLOSE
  }),
  (0, r.jsx)(G, {
    className: P.subscribeButton,
    subscriptionTier: t,
    analyticsLocationObject: i,
    onClose: n,
    discountOffer: o,
    trialOffer: a
  })
]
  });
}

function F(e) {
  let {
onClose: t,
analyticsLocationObject: n
  } = e, i = (0, C.N)();
  return (0, r.jsxs)('div', {
className: P.tryOutUpsellContainer,
children: [
  (0, r.jsx)(D.Cy, {
    className: P.topRimPill,
    text: M.Z.Messages.PREMIUM_FREE_NITRO_TRIAL_TEXT,
    colorOptions: D.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
  }),
  (0, r.jsx)(f.Heading, {
    variant: 'heading-md/semibold',
    color: 'text-normal',
    children: M.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_TRIAL_DESCRIPTION.format({
      onClick: R.z
    })
  }),
  (0, r.jsx)(G, {
    trialOffer: i,
    className: P.subscribeButtonWide,
    subscriptionTier: L.Si.TIER_2,
    analyticsLocationObject: n,
    onClose: t
  }),
  (0, r.jsx)(f.Text, {
    variant: 'eyebrow',
    className: P.countdownTextInSetting,
    children: w(null == i ? void 0 : i.expires_at)
  })
]
  });
}

function V(e) {
  let {
headingText: t,
context: n,
children: i,
trialOffer: a,
discountOffer: o
  } = e;
  return (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)(f.Heading, {
    className: P.__invalid_header,
    variant: 'heading-xl/semibold',
    children: t
  }),
  null != n && (0, r.jsx)(f.Text, {
    className: P.context,
    variant: 'text-md/normal',
    children: n
  }),
  (0, r.jsx)(x, {
    trialOffer: a,
    discountOffer: o,
    children: i
  })
]
  });
}

function H(e) {
  let {
headingText: t,
context: i,
children: a,
onClose: s,
type: u,
subscriptionTier: c,
analyticsLocationObject: T,
trialOffer: g,
discountOffer: R
  } = e, C = (0, d.e7)([p.Z], () => p.Z.useReducedMotion), y = (0, h.ZP)(), D = (0, A.Xv)() ? O.Ld : O.zz, w = (0, S.BU)(D / S.XD, {
useKibibytes: !0
  });
  switch (u) {
case L.cd.EMPTY_STICKER_PICKER_UPSELL:
  return (0, r.jsxs)(r.Fragment, {
    children: [
      (0, r.jsx)(f.Clickable, {
        className: P.upsellClose,
        onClick: s,
        children: (0, r.jsx)(f.CloseSmallIcon, {
          size: 'md',
          color: 'currentColor'
        })
      }),
      (0, r.jsxs)('div', {
        className: P.contentContainer,
        children: [
          (0, r.jsx)('img', {
            className: P.upsellImage,
            src: U,
            alt: M.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
          }),
          (0, r.jsx)(f.Heading, {
            variant: 'heading-xl/bold',
            color: 'header-primary',
            children: M.Z.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE
          }),
          (0, r.jsx)(x, {
            trialOffer: g,
            discountOffer: R,
            children: M.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
              planName: (0, N.jP)(c),
              onClick: () => (0, I.uL)(b.Z5c.APPLICATION_STORE)
            })
          })
        ]
      }),
      (0, r.jsx)(B, {
        subscriptionTier: c,
        onClose: s,
        analyticsLocationObject: {
          section: b.jXE.EXPRESSION_PICKER,
          object: b.qAy.BUTTON_CTA
        },
        trialOffer: g,
        discountOffer: R
      })
    ]
  });
case L.cd.STICKER_PICKER_UPSELL:
  return l()(null != a, 'You must specify children for this upsell type'), (0, r.jsxs)(r.Fragment, {
    children: [
      (0, r.jsxs)('div', {
        className: P.contentContainer,
        children: [
          (0, r.jsx)('img', {
            className: P.upsellImage,
            src: U,
            alt: M.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
          }),
          (0, r.jsx)(f.Heading, {
            variant: 'heading-xl/bold',
            color: 'header-primary',
            children: M.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_TITLE
          }),
          (0, r.jsx)(x, {
            trialOffer: g,
            discountOffer: R,
            children: M.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
              planName: (0, N.jP)(c),
              onClick: () => (0, I.uL)(b.Z5c.APPLICATION_STORE)
            })
          })
        ]
      }),
      (0, r.jsx)(B, {
        subscriptionTier: c,
        onClose: s,
        analyticsLocationObject: {
          section: b.jXE.EXPRESSION_PICKER,
          object: b.qAy.BUTTON_CTA
        },
        trialOffer: g,
        discountOffer: R
      })
    ]
  });
case L.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
  l()(null != a, 'You must specify children for this upsell type');
  let k = (0, E.ap)(y) ? n(537381) : n(341048);
  return (0, r.jsxs)(r.Fragment, {
    children: [
      (0, r.jsxs)('div', {
        className: P.contentContainer,
        children: [
          (0, r.jsx)('img', {
            alt: '',
            className: P.upsellImage,
            src: k
          }),
          (0, r.jsx)(f.Heading, {
            variant: 'heading-xl/bold',
            color: 'header-primary',
            children: M.Z.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
          }),
          (0, r.jsx)(x, {
            trialOffer: g,
            discountOffer: R,
            children: M.Z.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL_NO_BOLD_V2.format({
              planName: (0, N.jP)(c),
              onClick: () => (0, I.uL)(b.Z5c.APPLICATION_STORE)
            })
          })
        ]
      }),
      (0, r.jsx)(B, {
        subscriptionTier: c,
        onClose: s,
        analyticsLocationObject: {
          section: b.jXE.EMOJI_PICKER_POPOUT,
          object: b.qAy.BUTTON_CTA
        },
        trialOffer: g,
        discountOffer: R
      })
    ]
  });
case L.cd.UPLOAD_ERROR_UPSELL:
case L.cd.BURST_REACTION_UPSELL:
case L.cd.STREAM_QUALITY_UPSELL:
case L.cd.MESSAGE_LENGTH_UPSELL:
  let H;
  switch (u) {
    case L.cd.UPLOAD_ERROR_UPSELL:
      H = M.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_WITH_SIZE_AND_ACTION_V2.format({
        planName: (0, N.jP)(c),
        premiumMaxSize: c === L.Si.TIER_0 ? M.Z.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED : w,
        onClick: () => {
          (0, I.uL)(b.Z5c.APPLICATION_STORE), null == s || s();
        }
      });
      break;
    case L.cd.BURST_REACTION_UPSELL:
      H = M.Z.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
        planName: (0, N.jP)(c),
        onClick: () => {
          (0, I.uL)(b.Z5c.APPLICATION_STORE), null == s || s();
        }
      });
      break;
    case L.cd.STREAM_QUALITY_UPSELL:
      H = M.Z.Messages.STREAM_PREMIUM_UPSELL_WITH_ACTION.format({
        onClick: () => {
          (0, I.uL)(b.Z5c.APPLICATION_STORE), null == s || s(), (0, _.pT)();
        }
      });
      break;
    case L.cd.MESSAGE_LENGTH_UPSELL:
      H = M.Z.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
        premiumMaxMessageLength: b.en1,
        onClick: () => {
          (0, I.uL)(b.Z5c.APPLICATION_STORE), null == s || s();
        }
      });
  }
  return l()(null != H, 'There must be some upsell context'), (0, r.jsx)(r.Fragment, {
    children: (0, r.jsxs)('div', {
      className: P.contentContainer,
      children: [
        (0, r.jsx)(f.Heading, {
          variant: 'heading-xl/bold',
          color: 'header-primary',
          children: t
        }),
        (0, r.jsx)(f.Text, {
          variant: 'text-md/normal',
          children: i
        }),
        (0, r.jsx)(x, {
          trialOffer: g,
          discountOffer: R,
          children: H
        })
      ]
    })
  });
case L.cd.BURST_REACTION_QUICK_ACTION_UPSELL:
  return (0, r.jsxs)('div', {
    className: P.contentContainer,
    children: [
      (0, r.jsx)(f.Heading, {
        variant: 'heading-xl/bold',
        color: 'header-primary',
        children: t
      }),
      (0, r.jsx)(f.Text, {
        variant: 'text-md/normal',
        children: i
      }),
      (0, r.jsx)(x, {
        trialOffer: g,
        discountOffer: R,
        children: M.Z.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
          planName: (0, N.jP)(c),
          onClick: () => (0, I.uL)(b.Z5c.APPLICATION_STORE)
        })
      }),
      (0, r.jsx)(G, {
        className: P.upsellButton,
        subscriptionTier: c,
        analyticsLocationObject: T,
        onClose: s,
        trialOffer: g,
        discountOffer: R
      })
    ]
  });
case L.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
  return l()(null != a, 'You must specify children for this upsell type'), (0, r.jsx)(x, {
    trialOffer: g,
    discountOffer: R,
    children: M.Z.Messages.CLIENT_THEMES_EDITOR_UPSELL.format({
      onClick: () => {
        (0, I.uL)(b.Z5c.APPLICATION_STORE), (0, m.my)();
      }
    })
  });
case L.cd.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
  return (0, r.jsxs)('div', {
    className: o()(P.messageLengthUpsellContainer, {
      [P.messageLengthUpsellAppearAnimation]: !C
    }),
    children: [
      (0, r.jsx)(f.Text, {
        variant: 'text-lg/bold',
        color: 'status-danger',
        children: i
      }),
      (0, r.jsx)(f.Heading, {
        variant: 'heading-lg/extrabold',
        color: 'header-primary',
        className: P.messageLengthUpsellHeader,
        children: M.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT_NO_COUNT
      }),
      (0, r.jsx)('div', {
        className: P.divider
      }),
      (0, r.jsx)(x, {
        trialOffer: g,
        discountOffer: R,
        className: P.messageLengthBrandedContainer,
        subscriptionTier: c,
        children: M.Z.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
          premiumMaxMessageLength: b.en1,
          onClick: () => {
            (0, I.uL)(b.Z5c.APPLICATION_STORE), null == s || s();
          }
        })
      }),
      (0, r.jsx)(G, {
        subscriptionTier: c,
        analyticsLocationObject: T,
        onClose: s,
        trialOffer: g,
        discountOffer: R
      })
    ]
  });
case L.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL:
case L.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
  return (0, r.jsx)(F, {});
case L.cd.GUILD_CAP_MODAL_UPSELL:
case L.cd.PREMIUM_GUILD_IDENTITY_MODAL:
case L.cd.CUSTOM_PROFILE_UPSELL:
case L.cd.VIDEO_BACKGROUNDS_MODAL:
case L.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
case L.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
case L.cd.EMOJI_PICKER_EMOJI_CLICKED:
case L.cd.CUSTOM_NOTIFICATION_SOUNDS_UPSELL:
  return (0, r.jsx)(V, {
    trialOffer: g,
    discountOffer: R,
    headingText: t,
    context: i,
    children: a
  });
default:
  return v.Z.captureMessage('Possible mishandling of a PremiumUpsellType: '.concat(u)), (0, r.jsx)(V, {
    headingText: t,
    context: i,
    children: a,
    trialOffer: g,
    discountOffer: R
  });
  }
}