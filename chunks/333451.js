t.d(n, {
  Z: function() {
return O;
  }
});
var r = t(735250),
  o = t(470079),
  l = t(120356),
  s = t.n(l),
  i = t(442837),
  a = t(780384),
  c = t(481060),
  u = t(100527),
  d = t(906732),
  p = t(963249),
  _ = t(639119),
  E = t(165583),
  f = t(263954),
  I = t(706454),
  S = t(285952),
  C = t(709586),
  P = t(626135),
  h = t(930153),
  m = t(74538),
  N = t(937615),
  A = t(981631),
  M = t(474936),
  g = t(689938),
  R = t(102190);

function T(e) {
  let {
shouldUpsellFromNoneTier: n
  } = e, t = (0, i.e7)([I.default], () => I.default.locale);
  return (0, r.jsxs)('div', {
className: R.perksList,
children: [
  (0, r.jsx)(f.Z, {
    icon: C.Z,
    iconClassName: R.perkIconGuild,
    description: g.Z.Messages.PREMIUM_UPSELL_FEATURE_FREE_GUILD_SUBSCRIPTION.format({
      numFreeGuildSubscriptions: M.cb
    })
  }),
  (0, r.jsx)(f.Z, {
    icon: C.Z,
    iconClassName: R.perkIconGuild,
    description: g.Z.Messages.PREMIUM_UPSELL_FEATURE_GUILD_SUBSCRIPTION_DISCOUNT.format({
      percent: (0, h.T3)(t, M.Rr / 100)
    })
  }),
  n ? (0, r.jsx)(f.Z, {
    icon: c.ReactionIcon,
    iconClassName: R.perkIconChatPerks,
    description: g.Z.Messages.PREMIUM_UPSELL_FEATURE_CHAT_PERKS
  }) : null,
  (0, r.jsx)(f.Z, {
    icon: c.ScreenArrowIcon,
    iconClassName: R.perkIconStream,
    description: g.Z.Messages.PREMIUM_UPSELL_FEATURE_STREAM
  }),
  (0, r.jsx)(f.Z, {
    icon: c.UploadIcon,
    iconClassName: R.perkIconUpload,
    description: g.Z.Messages.PREMIUM_UPSELL_FEATURE_UPLOAD
  })
]
  });
}

function O(e) {
  var n;
  let {
premiumSubscriptionPlan: t,
onClose: l,
onBack: i,
onSkip: f,
onSubscriptionConfirmation: I,
analyticsLocation: C,
analyticsSourceLocation: h,
priceOptions: O
  } = e, {
analyticsLocations: L,
sourceAnalyticsLocations: x
  } = (0, d.ZP)(u.Z.GUILD_BOOSTING_PREMIUM_UPSELL), {
theme: y
  } = (0, c.useThemeContext)(), v = (0, a.ap)(y) ? c.Button.Colors.PRIMARY : c.Button.Colors.WHITE, b = null == t || null == t.premiumSubscriptionType, Z = m.ZP.getPrice(M.Xh.PREMIUM_MONTH_TIER_2, !1, !1, O), U = (0, N.T4)(Z.amount, Z.currency), k = (0, _.N)(), D = null == k ? void 0 : k.trial_id, B = (null == k ? void 0 : null === (n = k.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === M.Si.TIER_2;
  return o.useEffect(() => {
P.default.track(A.rMx.PREMIUM_UPSELL_VIEWED, {
  type: M.cd.GUILD_PREMIUM_UPSELL_MODAL,
  location_stack: x
});
  }, [x]), (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsxs)(c.ModalContent, {
    className: R.content,
    children: [
      (0, r.jsx)(c.ModalCloseButton, {
        onClick: l,
        className: R.closeButton
      }),
      B && (0, r.jsx)(E.dz, {
        className: R.premiumTrialBadge
      }),
      (0, r.jsx)('div', {
        className: s()(R.upsellImage, {
          [R.upsellImageWithTrialOffer]: B
        })
      }),
      (0, r.jsx)('div', {
        className: R.bodyText,
        children: null != D ? g.Z.Messages.PREMIUM_UPSELL_FEATURE_PRETEXT_TRIAL_VARIANT : g.Z.Messages.PREMIUM_UPSELL_FEATURE_PRETEXT.format({
          monthlyPrice: U
        })
      }),
      (0, r.jsx)(T, {
        shouldUpsellFromNoneTier: b
      })
    ]
  }),
  (0, r.jsxs)(c.ModalFooter, {
    align: S.Z.Align.CENTER,
    justify: S.Z.Justify.END,
    children: [
      (0, r.jsxs)('div', {
        className: R.footerRight,
        children: [
          (0, r.jsx)(c.Button, {
            look: c.Button.Looks.LINK,
            color: v,
            onClick: f,
            children: g.Z.Messages.PREMIUM_UPSELL_CONTINUE_TO_BOOSTS
          }),
          (0, r.jsx)(c.Button, {
            color: c.Button.Colors.GREEN,
            type: 'submit',
            onClick: () => {
              l(), (0, p.Z)({
                initialPlanId: null,
                subscriptionTier: M.Si.TIER_2,
                analyticsLocations: L,
                analyticsObject: {
                  ...C,
                  section: A.jXE.PREMIUM_GUILD_PURCHASE_MODAL
                },
                analyticsSourceLocation: h,
                onSubscriptionConfirmation: I,
                trialId: D
              });
            },
            children: null != D ? g.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : g.Z.Messages.PREMIUM_UPSELL_UPGRADE
          })
        ]
      }),
      (0, r.jsx)('div', {
        className: R.backStep,
        children: (0, r.jsx)(c.Button, {
          color: v,
          look: c.Button.Looks.LINK,
          size: c.Button.Sizes.NONE,
          onClick: () => i(),
          children: g.Z.Messages.BACK
        })
      })
    ]
  })
]
  });
}