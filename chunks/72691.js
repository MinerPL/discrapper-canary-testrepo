"use strict";
l.r(r), l.d(r, {
  default: function() {
    return Y
  }
});
var s = l("735250"),
  t = l("470079"),
  n = l("803997"),
  a = l.n(n),
  i = l("442837"),
  o = l("481060"),
  c = l("570140"),
  u = l("355467"),
  d = l("821849"),
  E = l("15640"),
  _ = l("598"),
  m = l("409813"),
  p = l("911200"),
  S = l("348121"),
  f = l("104494"),
  T = l("639119"),
  R = l("165583"),
  I = l("197115"),
  P = l("185139"),
  M = l("263954"),
  N = l("706454"),
  C = l("853872"),
  L = l("973675"),
  x = l("642113"),
  h = l("68736"),
  A = l("930153"),
  U = l("74538"),
  b = l("937615"),
  j = l("981631"),
  g = l("474936"),
  O = l("689938"),
  B = l("440048");
let D = e => {
  let {
    locale: r
  } = e;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(M.default, {
      icon: h.default,
      iconClassName: B.iconColorPurple,
      description: O.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
    }), (0, s.jsx)(M.default, {
      icon: L.default,
      iconClassName: B.iconColorPink,
      description: O.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format({
        numGuildSubscriptions: g.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
        discountPercent: (0, A.formatPercent)(r, g.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
      })
    }), (0, s.jsx)(M.default, {
      icon: x.default,
      iconClassName: B.iconColorYellow,
      description: O.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION
    })]
  })
};

function v() {
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(M.default, {
      icon: h.default,
      iconClassName: B.iconColorPurple,
      description: O.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
    }), (0, s.jsx)(M.default, {
      icon: x.default,
      iconClassName: B.iconColorYellow,
      description: O.default.Messages.STICKER_PREMIUM_TIER_0_UPSELL_PERK_PREMIUM_SUBSCRIPTION
    })]
  })
}
let y = e => {
    let {
      trialOffer: r,
      discountOffer: t,
      isTier0Upsell: n,
      isLoading: c,
      price: u,
      onClose: d
    } = e, E = (0, i.useStateFromStores)([N.default], () => N.default.locale), _ = null != r || null != t;
    return (0, s.jsxs)("div", {
      className: B.wrapper,
      children: [(0, s.jsx)(o.ModalCloseButton, {
        onClick: d,
        className: B.closeButton
      }), _ && (0, s.jsx)(R.PremiumTrialGradientBadge, {
        className: B.premiumTrialBadge
      }), (0, s.jsx)("img", {
        className: a()(B.heroImage, {
          [B.heroImageWithTrialOffer]: _
        }),
        src: l("178632"),
        alt: ""
      }), c ? (0, s.jsx)(o.Spinner, {}) : (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(o.Text, {
          variant: "text-md/normal",
          className: B.heading,
          children: null == u ? (0, s.jsx)(o.Spinner, {
            type: o.Spinner.Type.PULSING_ELLIPSIS
          }) : n ? O.default.Messages.STICKER_PREMIUM_SUBSCRIPTION_UPSELL_ALERT_TITLE.format({
            planName: (0, U.getTierDisplayName)(g.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
            monthlyPrice: (0, b.formatPrice)(u.amount, u.currency)
          }) : O.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format({
            monthlyPrice: (0, b.formatPrice)(u.amount, u.currency)
          })
        }), (0, s.jsx)("div", {
          className: B.perks,
          children: n ? (0, s.jsx)(v, {}) : (0, s.jsx)(D, {
            locale: E
          })
        })]
      })]
    })
  },
  k = e => {
    let {
      trialOffer: r,
      discountOffer: l,
      isTier0Upsell: t,
      onClose: n
    } = e, a = {
      section: j.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL
    };
    return (0, s.jsxs)(o.ModalFooter, {
      className: B.footer,
      children: [(0, s.jsx)(o.Button, {
        onClick: n,
        size: o.Button.Sizes.SMALL,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        children: O.default.Messages.CLOSE
      }), (0, s.jsx)(I.default, {
        buttonText: null != r || null != l ? t ? O.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : O.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0,
        premiumModalAnalyticsLocation: a,
        subscriptionTier: t ? g.PremiumSubscriptionSKUs.TIER_0 : g.PremiumSubscriptionSKUs.TIER_2,
        size: o.Button.Sizes.SMALL,
        color: o.Button.Colors.GREEN,
        onClick: () => {
          n()
        }
      })]
    })
  };

function Y(e) {
  let {
    onClose: r,
    ...l
  } = e, n = (0, E.useSubscriptionPlansLoaded)(), a = (0, i.useStateFromStores)([C.default], () => C.default.hasFetchedPaymentSources), R = n && a, I = (0, T.usePremiumTrialOffer)(), M = (0, f.usePremiumDiscountOffer)(), {
    isLoading: N,
    suggestedPremiumType: L
  } = (0, S.default)({
    autoTrackExposure: R,
    experiment: p.default,
    location: "stickers_upsell"
  });
  t.useEffect(() => {
    c.default.wait(() => {
      (0, u.fetchPaymentSources)(), (0, d.fetchPremiumSubscriptionPlans)(null, null, j.RevenueSurfaces.DISCOVERY)
    })
  }, []);
  let x = L === g.PremiumTypes.TIER_0 && null == M,
    h = R ? U.default.getDefaultPrice(x ? g.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : g.SubscriptionPlans.PREMIUM_MONTH_TIER_2) : null;
  return (0, s.jsx)(_.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, s.jsx)(o.ModalRoot, {
      ...l,
      "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
      children: (0, s.jsx)(P.default, {
        hideBreadcrumbs: !0,
        body: (0, s.jsx)(y, {
          trialOffer: I,
          discountOffer: M,
          isTier0Upsell: x,
          isLoading: !R || N,
          price: h,
          onClose: r
        }),
        footer: (0, s.jsx)(k, {
          trialOffer: I,
          discountOffer: M,
          isTier0Upsell: x,
          onClose: r
        }),
        steps: [m.Step.PREMIUM_UPSELL],
        currentStep: m.Step.PREMIUM_UPSELL
      })
    })
  })
}