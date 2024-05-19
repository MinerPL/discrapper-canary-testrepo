"use strict";
r.r(l), r.d(l, {
  default: function() {
    return F
  }
});
var t = r("735250"),
  n = r("470079"),
  s = r("120356"),
  a = r.n(s),
  i = r("442837"),
  o = r("481060"),
  u = r("570140"),
  c = r("355467"),
  d = r("821849"),
  E = r("15640"),
  f = r("598"),
  m = r("409813"),
  _ = r("911200"),
  p = r("348121"),
  S = r("104494"),
  P = r("639119"),
  T = r("165583"),
  R = r("197115"),
  I = r("185139"),
  N = r("263954"),
  M = r("706454"),
  C = r("853872"),
  x = r("973675"),
  h = r("642113"),
  L = r("68736"),
  j = r("930153"),
  A = r("74538"),
  b = r("937615"),
  U = r("981631"),
  v = r("474936"),
  g = r("689938"),
  O = r("155661");
let y = e => {
  let {
    locale: l
  } = e;
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(N.default, {
      icon: L.default,
      iconClassName: O.iconColorPurple,
      description: g.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
    }), (0, t.jsx)(N.default, {
      icon: x.default,
      iconClassName: O.iconColorPink,
      description: g.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format({
        numGuildSubscriptions: v.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
        discountPercent: (0, j.formatPercent)(l, v.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
      })
    }), (0, t.jsx)(N.default, {
      icon: h.default,
      iconClassName: O.iconColorYellow,
      description: g.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION
    })]
  })
};

function B() {
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(N.default, {
      icon: L.default,
      iconClassName: O.iconColorPurple,
      description: g.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
    }), (0, t.jsx)(N.default, {
      icon: h.default,
      iconClassName: O.iconColorYellow,
      description: g.default.Messages.STICKER_PREMIUM_TIER_0_UPSELL_PERK_PREMIUM_SUBSCRIPTION
    })]
  })
}
let D = e => {
    let {
      trialOffer: l,
      discountOffer: n,
      isTier0Upsell: s,
      isLoading: u,
      price: c,
      onClose: d
    } = e, E = (0, i.useStateFromStores)([M.default], () => M.default.locale), f = null != l || null != n;
    return (0, t.jsxs)("div", {
      className: O.wrapper,
      children: [(0, t.jsx)(o.ModalCloseButton, {
        onClick: d,
        className: O.closeButton
      }), f && (0, t.jsx)(T.PremiumTrialGradientBadge, {
        className: O.premiumTrialBadge
      }), (0, t.jsx)("img", {
        className: a()(O.heroImage, {
          [O.heroImageWithTrialOffer]: f
        }),
        src: r("178632"),
        alt: ""
      }), u ? (0, t.jsx)(o.Spinner, {}) : (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(o.Text, {
          variant: "text-md/normal",
          className: O.heading,
          children: null == c ? (0, t.jsx)(o.Spinner, {
            type: o.Spinner.Type.PULSING_ELLIPSIS
          }) : s ? g.default.Messages.STICKER_PREMIUM_SUBSCRIPTION_UPSELL_ALERT_TITLE.format({
            planName: (0, A.getTierDisplayName)(v.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
            monthlyPrice: (0, b.formatPrice)(c.amount, c.currency)
          }) : g.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format({
            monthlyPrice: (0, b.formatPrice)(c.amount, c.currency)
          })
        }), (0, t.jsx)("div", {
          className: O.perks,
          children: s ? (0, t.jsx)(B, {}) : (0, t.jsx)(y, {
            locale: E
          })
        })]
      })]
    })
  },
  k = e => {
    let {
      trialOffer: l,
      discountOffer: r,
      isTier0Upsell: n,
      onClose: s
    } = e, a = {
      section: U.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL
    };
    return (0, t.jsxs)(o.ModalFooter, {
      className: O.footer,
      children: [(0, t.jsx)(o.Button, {
        onClick: s,
        size: o.Button.Sizes.SMALL,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        children: g.default.Messages.CLOSE
      }), (0, t.jsx)(R.default, {
        buttonText: null != l || null != r ? n ? g.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : g.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0,
        premiumModalAnalyticsLocation: a,
        subscriptionTier: n ? v.PremiumSubscriptionSKUs.TIER_0 : v.PremiumSubscriptionSKUs.TIER_2,
        size: o.Button.Sizes.SMALL,
        color: o.Button.Colors.GREEN,
        onClick: () => {
          s()
        }
      })]
    })
  };

function F(e) {
  let {
    onClose: l,
    ...r
  } = e, s = (0, E.useSubscriptionPlansLoaded)(), a = (0, i.useStateFromStores)([C.default], () => C.default.hasFetchedPaymentSources), T = s && a, R = (0, P.usePremiumTrialOffer)(), N = (0, S.usePremiumDiscountOffer)(), {
    isLoading: M,
    suggestedPremiumType: x
  } = (0, p.default)({
    autoTrackExposure: T,
    experiment: _.default,
    location: "stickers_upsell"
  });
  n.useEffect(() => {
    u.default.wait(() => {
      (0, c.fetchPaymentSources)(), (0, d.fetchPremiumSubscriptionPlans)(null, null, U.RevenueSurfaces.DISCOVERY)
    })
  }, []);
  let h = x === v.PremiumTypes.TIER_0 && null == N,
    L = T ? A.default.getDefaultPrice(h ? v.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : v.SubscriptionPlans.PREMIUM_MONTH_TIER_2) : null;
  return (0, t.jsx)(f.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, t.jsx)(o.ModalRoot, {
      ...r,
      "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
      children: (0, t.jsx)(I.default, {
        hideBreadcrumbs: !0,
        body: (0, t.jsx)(D, {
          trialOffer: R,
          discountOffer: N,
          isTier0Upsell: h,
          isLoading: !T || M,
          price: L,
          onClose: l
        }),
        footer: (0, t.jsx)(k, {
          trialOffer: R,
          discountOffer: N,
          isTier0Upsell: h,
          onClose: l
        }),
        steps: [m.Step.PREMIUM_UPSELL],
        currentStep: m.Step.PREMIUM_UPSELL
      })
    })
  })
}