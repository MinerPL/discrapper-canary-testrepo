"use strict";
l.r(t), l.d(t, {
  default: function() {
    return R
  }
}), l("315314"), l("610138"), l("216116"), l("78328"), l("815648"), l("47120");
var n = l("735250"),
  a = l("470079"),
  s = l("468194"),
  i = l("442837"),
  r = l("477690"),
  o = l("481060"),
  d = l("887706"),
  u = l("34674"),
  c = l("817460"),
  f = l("703656"),
  m = l("351402"),
  I = l("937615"),
  T = l("73346"),
  N = l("270144"),
  E = l("359610"),
  S = l("245561"),
  g = l("696906"),
  p = l("981631"),
  h = l("689938"),
  _ = l("527023");
let O = (0, s.cssValueToNumber)(r.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
  A = "start_application_subscription",
  C = e => {
    let {
      listing: t
    } = e, l = t.image_asset;
    if (null == l) return null;
    let a = (0, T.getAssetURL)(t.application_id, l, O);
    return (0, n.jsx)("div", {
      children: (0, n.jsx)("img", {
        src: a,
        alt: "",
        className: _.listingImage
      })
    })
  },
  x = e => {
    let {
      children: t
    } = e;
    return (0, n.jsx)(o.Button, {
      look: o.Button.Looks.OUTLINED,
      color: o.Button.Colors.PRIMARY,
      disabled: !0,
      size: o.Button.Sizes.SMALL,
      children: t
    })
  };

function R(e) {
  let {
    listing: t,
    groupListingId: l,
    guildId: s,
    analyticsLocation: r,
    onComplete: T,
    forcesTransitionToGuild: O
  } = e, R = (0, i.useStateFromStores)([m.default], () => m.default.isSyncing), {
    activeSubscription: M,
    activeSubscriptionListing: v
  } = (0, N.useActiveSubscriptionListingForApplication)(t.application_id, s), {
    openModal: L,
    canOpenModal: j,
    cannotOpenReason: P
  } = (0, g.default)({
    guildId: s,
    groupListingId: l,
    showBenefitsFirst: !1,
    analyticsLocation: r,
    onComplete: T,
    forcesTransitionToGuild: O,
    skuId: t.id
  }), b = t.subscription_plans[0], D = 0 === b.price, y = (null == v ? void 0 : v.id) === t.id, G = (0, d.default)(), B = G && !j || R, k = () => {
    G ? L() : (0, u.redirectToLogin)({
      [A]: "true"
    })
  };
  return a.useEffect(() => {
    let e = new URL(location.href);
    if (G && !B && "true" === e.searchParams.get(A)) {
      e.searchParams.delete(A);
      let t = e.pathname + e.search;
      (0, f.replaceWith)(t), L()
    }
  }, [G, L, B]), (0, n.jsxs)("div", {
    className: _.container,
    children: [(0, n.jsxs)("div", {
      className: _.cardHeader,
      children: [(0, n.jsx)(C, {
        listing: t
      }), (0, n.jsx)(o.Text, {
        variant: "text-lg/medium",
        color: "interactive-active",
        children: t.name
      }), (0, n.jsxs)("div", {
        className: _.priceAndButtonContainer,
        children: [(0, n.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "interactive-normal",
          children: D ? h.default.Messages.APPLICATION_SUBSCRIPTION_FREE : h.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
            amount: (0, I.formatPrice)(b.price, b.currency),
            period: (0, c.formatPlanInterval)(b)
          })
        }), (() => {
          var e;
          if (y) return (0, n.jsx)(x, {
            children: (null == M ? void 0 : M.status) === p.SubscriptionStatusTypes.CANCELED ? h.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : h.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          });
          if (D) return null == v ? (0, n.jsx)(x, {
            children: h.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          }) : null;
          return (0, n.jsx)(o.Tooltip, {
            tooltipClassName: _.subscribeButtonTooltip,
            text: j || !G ? null : P,
            "aria-label": null !== (e = !j && P) && void 0 !== e && e,
            children: e => (0, n.jsx)(E.default, {
              ...e,
              disabled: B,
              submitting: !1,
              onClick: k,
              children: h.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
            })
          })
        })()]
      })]
    }), (0, n.jsx)("div", {
      className: _.benefitsContainer,
      children: (0, n.jsx)(S.SubscriptionListingBenefits, {
        applicationId: t.application_id,
        storeListingBenefits: t.store_listing_benefits,
        skuBenefits: t.sku_benefits.benefits,
        className: _.benefit
      })
    })]
  })
}