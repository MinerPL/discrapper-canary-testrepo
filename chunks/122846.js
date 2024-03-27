"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
});
var r = n("37983"),
  l = n("884691"),
  s = n("414456"),
  a = n.n(s),
  i = n("446674"),
  o = n("77078"),
  u = n("913144"),
  c = n("850068"),
  d = n("775433"),
  E = n("308592"),
  _ = n("642906"),
  f = n("85336"),
  T = n("552917"),
  I = n("843647"),
  R = n("154889"),
  p = n("917247"),
  A = n("956597"),
  C = n("635956"),
  S = n("273619"),
  M = n("674158"),
  N = n("915639"),
  m = n("357957"),
  P = n("326880"),
  h = n("46829"),
  L = n("595086"),
  O = n("240481"),
  U = n("719923"),
  D = n("153160"),
  v = n("49111"),
  x = n("646718"),
  g = n("782340"),
  H = n("822549");
let y = e => {
  let {
    locale: t
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(M.default, {
      icon: L.default,
      iconClassName: H.iconColorPurple,
      description: g.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
    }), (0, r.jsx)(M.default, {
      icon: P.default,
      iconClassName: H.iconColorPink,
      description: g.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format({
        numGuildSubscriptions: x.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
        discountPercent: (0, O.formatPercent)(t, x.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
      })
    }), (0, r.jsx)(M.default, {
      icon: h.default,
      iconClassName: H.iconColorYellow,
      description: g.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION
    })]
  })
};

function j() {
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(M.default, {
      icon: L.default,
      iconClassName: H.iconColorPurple,
      description: g.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
    }), (0, r.jsx)(M.default, {
      icon: h.default,
      iconClassName: H.iconColorYellow,
      description: g.default.Messages.STICKER_PREMIUM_TIER_0_UPSELL_PERK_PREMIUM_SUBSCRIPTION
    })]
  })
}
let b = e => {
    let {
      trialOffer: t,
      discountOffer: l,
      isTier0Upsell: s,
      isLoading: u,
      price: c,
      onClose: d
    } = e, E = (0, i.useStateFromStores)([N.default], () => N.default.locale), _ = null != t || null != l;
    return (0, r.jsxs)("div", {
      className: H.wrapper,
      children: [(0, r.jsx)(o.ModalCloseButton, {
        onClick: d,
        className: H.closeButton
      }), _ && (0, r.jsx)(A.PremiumTrialGradientBadge, {
        className: H.premiumTrialBadge
      }), (0, r.jsx)("img", {
        className: a(H.heroImage, {
          [H.heroImageWithTrialOffer]: _
        }),
        src: n("190389"),
        alt: ""
      }), u ? (0, r.jsx)(o.Spinner, {}) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(o.Text, {
          variant: "text-md/normal",
          className: H.heading,
          children: null == c ? (0, r.jsx)(o.Spinner, {
            type: o.Spinner.Type.PULSING_ELLIPSIS
          }) : s ? g.default.Messages.STICKER_PREMIUM_SUBSCRIPTION_UPSELL_ALERT_TITLE.format({
            planName: (0, U.getTierDisplayName)(x.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
            monthlyPrice: (0, D.formatPrice)(c.amount, c.currency)
          }) : g.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format({
            monthlyPrice: (0, D.formatPrice)(c.amount, c.currency)
          })
        }), (0, r.jsx)("div", {
          className: H.perks,
          children: s ? (0, r.jsx)(j, {}) : (0, r.jsx)(y, {
            locale: E
          })
        })]
      })]
    })
  },
  B = e => {
    let {
      trialOffer: t,
      discountOffer: n,
      isTier0Upsell: l,
      onClose: s
    } = e, a = {
      section: v.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL
    };
    return (0, r.jsxs)(o.ModalFooter, {
      className: H.footer,
      children: [(0, r.jsx)(o.Button, {
        onClick: s,
        size: o.Button.Sizes.SMALL,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        children: g.default.Messages.CLOSE
      }), (0, r.jsx)(C.default, {
        buttonText: null != t || null != n ? l ? g.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : g.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0,
        premiumModalAnalyticsLocation: a,
        subscriptionTier: l ? x.PremiumSubscriptionSKUs.TIER_0 : x.PremiumSubscriptionSKUs.TIER_2,
        size: o.Button.Sizes.SMALL,
        color: o.Button.Colors.GREEN,
        onClick: () => {
          s()
        }
      })]
    })
  };

function G(e) {
  let {
    onClose: t,
    ...n
  } = e, s = (0, E.useSubscriptionPlansLoaded)(), a = (0, i.useStateFromStores)([m.default], () => m.default.hasFetchedPaymentSources), A = s && a, C = (0, p.usePremiumTrialOffer)(), M = (0, R.usePremiumDiscountOffer)(), {
    isLoading: N,
    suggestedPremiumType: P
  } = (0, I.default)({
    autoTrackExposure: A,
    experiment: T.default,
    location: "stickers_upsell"
  });
  l.useEffect(() => {
    u.default.wait(() => {
      (0, c.fetchPaymentSources)(), (0, d.fetchPremiumSubscriptionPlans)(null, null, v.RevenueSurfaces.DISCOVERY)
    })
  }, []);
  let h = P === x.PremiumTypes.TIER_0 && null == M,
    L = A ? U.default.getDefaultPrice(h ? x.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : x.SubscriptionPlans.PREMIUM_MONTH_TIER_2) : null;
  return (0, r.jsx)(_.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, r.jsx)(o.ModalRoot, {
      ...n,
      "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
      children: (0, r.jsx)(S.default, {
        hideBreadcrumbs: !0,
        body: (0, r.jsx)(b, {
          trialOffer: C,
          discountOffer: M,
          isTier0Upsell: h,
          isLoading: !A || N,
          price: L,
          onClose: t
        }),
        footer: (0, r.jsx)(B, {
          trialOffer: C,
          discountOffer: M,
          isTier0Upsell: h,
          onClose: t
        }),
        steps: [f.Step.PREMIUM_UPSELL],
        currentStep: f.Step.PREMIUM_UPSELL
      })
    })
  })
}