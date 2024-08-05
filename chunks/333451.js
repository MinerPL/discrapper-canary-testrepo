t.d(n, {
  Z: function() {
return v;
  }
});
var o = t(735250),
  r = t(470079),
  a = t(120356),
  i = t.n(a),
  c = t(442837),
  l = t(780384),
  s = t(481060),
  u = t(100527),
  d = t(906732),
  p = t(963249),
  _ = t(639119),
  f = t(165583),
  m = t(263954),
  h = t(706454),
  S = t(285952),
  g = t(709586),
  E = t(626135),
  I = t(930153),
  b = t(74538),
  P = t(937615),
  x = t(981631),
  T = t(474936),
  y = t(689938),
  M = t(102190);

function C(e) {
  let {
shouldUpsellFromNoneTier: n
  } = e, t = (0, c.e7)([h.default], () => h.default.locale);
  return (0, o.jsxs)('div', {
className: M.perksList,
children: [
  (0, o.jsx)(m.Z, {
    icon: g.Z,
    iconClassName: M.perkIconGuild,
    description: y.Z.Messages.PREMIUM_UPSELL_FEATURE_FREE_GUILD_SUBSCRIPTION.format({
      numFreeGuildSubscriptions: T.cb
    })
  }),
  (0, o.jsx)(m.Z, {
    icon: g.Z,
    iconClassName: M.perkIconGuild,
    description: y.Z.Messages.PREMIUM_UPSELL_FEATURE_GUILD_SUBSCRIPTION_DISCOUNT.format({
      percent: (0, I.T3)(t, T.Rr / 100)
    })
  }),
  n ? (0, o.jsx)(m.Z, {
    icon: s.ReactionIcon,
    iconClassName: M.perkIconChatPerks,
    description: y.Z.Messages.PREMIUM_UPSELL_FEATURE_CHAT_PERKS
  }) : null,
  (0, o.jsx)(m.Z, {
    icon: s.ScreenArrowIcon,
    iconClassName: M.perkIconStream,
    description: y.Z.Messages.PREMIUM_UPSELL_FEATURE_STREAM
  }),
  (0, o.jsx)(m.Z, {
    icon: s.UploadIcon,
    iconClassName: M.perkIconUpload,
    description: y.Z.Messages.PREMIUM_UPSELL_FEATURE_UPLOAD
  })
]
  });
}

function v(e) {
  var n;
  let {
premiumSubscriptionPlan: t,
onClose: a,
onBack: c,
onSkip: m,
onSubscriptionConfirmation: h,
analyticsLocation: g,
analyticsSourceLocation: I,
priceOptions: v
  } = e, {
analyticsLocations: N,
sourceAnalyticsLocations: A
  } = (0, d.ZP)(u.Z.GUILD_BOOSTING_PREMIUM_UPSELL), {
theme: R
  } = (0, s.useThemeContext)(), L = (0, l.ap)(R) ? s.Button.Colors.PRIMARY : s.Button.Colors.WHITE, k = null == t || null == t.premiumSubscriptionType, O = b.ZP.getPrice(T.Xh.PREMIUM_MONTH_TIER_2, !1, !1, v), B = (0, P.T4)(O.amount, O.currency), w = (0, _.N)(), U = null == w ? void 0 : w.trial_id, D = (null == w ? void 0 : null === (n = w.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === T.Si.TIER_2;
  return r.useEffect(() => {
E.default.track(x.rMx.PREMIUM_UPSELL_VIEWED, {
  type: T.cd.GUILD_PREMIUM_UPSELL_MODAL,
  location_stack: A
});
  }, [A]), (0, o.jsxs)(o.Fragment, {
children: [
  (0, o.jsxs)(s.ModalContent, {
    className: M.content,
    children: [
      (0, o.jsx)(s.ModalCloseButton, {
        onClick: a,
        className: M.closeButton
      }),
      D && (0, o.jsx)(f.dz, {
        className: M.premiumTrialBadge
      }),
      (0, o.jsx)('div', {
        className: i()(M.upsellImage, {
          [M.upsellImageWithTrialOffer]: D
        })
      }),
      (0, o.jsx)('div', {
        className: M.bodyText,
        children: null != U ? y.Z.Messages.PREMIUM_UPSELL_FEATURE_PRETEXT_TRIAL_VARIANT : y.Z.Messages.PREMIUM_UPSELL_FEATURE_PRETEXT.format({
          monthlyPrice: B
        })
      }),
      (0, o.jsx)(C, {
        shouldUpsellFromNoneTier: k
      })
    ]
  }),
  (0, o.jsxs)(s.ModalFooter, {
    align: S.Z.Align.CENTER,
    justify: S.Z.Justify.END,
    children: [
      (0, o.jsxs)('div', {
        className: M.footerRight,
        children: [
          (0, o.jsx)(s.Button, {
            look: s.Button.Looks.LINK,
            color: L,
            onClick: m,
            children: y.Z.Messages.PREMIUM_UPSELL_CONTINUE_TO_BOOSTS
          }),
          (0, o.jsx)(s.Button, {
            color: s.Button.Colors.GREEN,
            type: 'submit',
            onClick: () => {
              a(), (0, p.Z)({
                initialPlanId: null,
                subscriptionTier: T.Si.TIER_2,
                analyticsLocations: N,
                analyticsObject: {
                  ...g,
                  section: x.jXE.PREMIUM_GUILD_PURCHASE_MODAL
                },
                analyticsSourceLocation: I,
                onSubscriptionConfirmation: h,
                trialId: U
              });
            },
            children: null != U ? y.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : y.Z.Messages.PREMIUM_UPSELL_UPGRADE
          })
        ]
      }),
      (0, o.jsx)('div', {
        className: M.backStep,
        children: (0, o.jsx)(s.Button, {
          color: L,
          look: s.Button.Looks.LINK,
          size: s.Button.Sizes.NONE,
          onClick: () => c(),
          children: y.Z.Messages.BACK
        })
      })
    ]
  })
]
  });
}