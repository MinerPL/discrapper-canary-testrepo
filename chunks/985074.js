"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  u = n("446674"),
  o = n("819855"),
  r = n("77078"),
  c = n("812204"),
  d = n("685665"),
  S = n("649844"),
  p = n("917247"),
  m = n("956597"),
  E = n("674158"),
  P = n("915639"),
  _ = n("145131"),
  f = n("46829"),
  I = n("118503"),
  M = n("619911"),
  T = n("698015"),
  N = n("599110"),
  y = n("240481"),
  A = n("719923"),
  R = n("153160"),
  L = n("49111"),
  C = n("646718"),
  U = n("782340"),
  h = n("938447");

function g(e) {
  let {
    shouldUpsellFromNoneTier: t
  } = e, n = (0, u.useStateFromStores)([P.default], () => P.default.locale);
  return (0, l.jsxs)("div", {
    className: h.perksList,
    children: [(0, l.jsx)(E.default, {
      icon: I.default,
      iconClassName: h.perkIconGuild,
      description: U.default.Messages.PREMIUM_UPSELL_FEATURE_FREE_GUILD_SUBSCRIPTION.format({
        numFreeGuildSubscriptions: C.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
      })
    }), (0, l.jsx)(E.default, {
      icon: I.default,
      iconClassName: h.perkIconGuild,
      description: U.default.Messages.PREMIUM_UPSELL_FEATURE_GUILD_SUBSCRIPTION_DISCOUNT.format({
        percent: (0, y.formatPercent)(n, C.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
      })
    }), t ? (0, l.jsx)(E.default, {
      icon: f.default,
      iconClassName: h.perkIconChatPerks,
      description: U.default.Messages.PREMIUM_UPSELL_FEATURE_CHAT_PERKS
    }) : null, (0, l.jsx)(E.default, {
      icon: M.default,
      iconClassName: h.perkIconStream,
      description: U.default.Messages.PREMIUM_UPSELL_FEATURE_STREAM
    }), (0, l.jsx)(E.default, {
      icon: T.default,
      iconClassName: h.perkIconUpload,
      description: U.default.Messages.PREMIUM_UPSELL_FEATURE_UPLOAD
    })]
  })
}

function O(e) {
  var t;
  let {
    premiumSubscriptionPlan: n,
    onClose: s,
    onBack: u,
    onSkip: E,
    onSubscriptionConfirmation: P,
    analyticsLocation: f,
    analyticsSourceLocation: I,
    priceOptions: M
  } = e, {
    analyticsLocations: T,
    sourceAnalyticsLocations: y
  } = (0, d.default)(c.default.GUILD_BOOSTING_PREMIUM_UPSELL), {
    theme: O
  } = (0, r.useThemeContext)(), b = (0, o.isThemeLight)(O) ? r.Button.Colors.PRIMARY : r.Button.Colors.WHITE, D = null == n || null == n.premiumSubscriptionType, x = A.default.getPrice(C.SubscriptionPlans.PREMIUM_MONTH_TIER_2, !1, !1, M), B = (0, R.formatPrice)(x.amount, x.currency), k = (0, p.usePremiumTrialOffer)(), G = null == k ? void 0 : k.trial_id, j = (null == k ? void 0 : null === (t = k.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === C.PremiumSubscriptionSKUs.TIER_2;
  return a.useEffect(() => {
    N.default.track(L.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: C.PremiumUpsellTypes.GUILD_PREMIUM_UPSELL_MODAL,
      location_stack: y
    })
  }, [y]), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(r.ModalContent, {
      className: h.content,
      children: [(0, l.jsx)(r.ModalCloseButton, {
        onClick: s,
        className: h.closeButton
      }), j && (0, l.jsx)(m.PremiumTrialGradientBadge, {
        className: h.premiumTrialBadge
      }), (0, l.jsx)("div", {
        className: i(h.upsellImage, {
          [h.upsellImageWithTrialOffer]: j
        })
      }), (0, l.jsx)("div", {
        className: h.bodyText,
        children: null != G ? U.default.Messages.PREMIUM_UPSELL_FEATURE_PRETEXT_TRIAL_VARIANT : U.default.Messages.PREMIUM_UPSELL_FEATURE_PRETEXT.format({
          monthlyPrice: B
        })
      }), (0, l.jsx)(g, {
        shouldUpsellFromNoneTier: D
      })]
    }), (0, l.jsxs)(r.ModalFooter, {
      align: _.default.Align.CENTER,
      justify: _.default.Justify.END,
      children: [(0, l.jsxs)("div", {
        className: h.footerRight,
        children: [(0, l.jsx)(r.Button, {
          look: r.Button.Looks.LINK,
          color: b,
          onClick: E,
          children: U.default.Messages.PREMIUM_UPSELL_CONTINUE_TO_BOOSTS
        }), (0, l.jsx)(r.Button, {
          color: r.Button.Colors.GREEN,
          type: "submit",
          onClick: () => {
            s(), (0, S.default)({
              initialPlanId: null,
              subscriptionTier: C.PremiumSubscriptionSKUs.TIER_2,
              analyticsLocations: T,
              analyticsObject: {
                ...f,
                section: L.AnalyticsSections.PREMIUM_GUILD_PURCHASE_MODAL
              },
              analyticsSourceLocation: I,
              onSubscriptionConfirmation: P,
              trialId: G
            })
          },
          children: null != G ? U.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : U.default.Messages.PREMIUM_UPSELL_UPGRADE
        })]
      }), (0, l.jsx)("div", {
        className: h.backStep,
        children: (0, l.jsx)(r.Button, {
          color: b,
          look: r.Button.Looks.LINK,
          size: r.Button.Sizes.NONE,
          onClick: () => u(),
          children: U.default.Messages.BACK
        })
      })]
    })]
  })
}