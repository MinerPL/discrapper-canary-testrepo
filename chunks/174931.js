"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("468194"),
  a = n("442837"),
  l = n("477690"),
  o = n("481060"),
  u = n("887706"),
  c = n("34674"),
  d = n("817460"),
  f = n("703656"),
  p = n("351402"),
  _ = n("937615"),
  E = n("73346"),
  I = n("270144"),
  T = n("359610"),
  m = n("245561"),
  S = n("696906"),
  g = n("981631"),
  A = n("689938"),
  C = n("160078");
let h = (0, s.cssValueToNumber)(l.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
  v = "start_application_subscription",
  O = e => {
    let {
      listing: t
    } = e, n = t.image_asset;
    if (null == n) return null;
    let r = (0, E.getAssetURL)(t.application_id, n, h);
    return (0, i.jsx)("div", {
      children: (0, i.jsx)("img", {
        src: r,
        alt: "",
        className: C.listingImage
      })
    })
  },
  b = e => {
    let {
      children: t
    } = e;
    return (0, i.jsx)(o.Button, {
      look: o.Button.Looks.OUTLINED,
      color: o.Button.Colors.PRIMARY,
      disabled: !0,
      size: o.Button.Sizes.SMALL,
      children: t
    })
  };

function N(e) {
  let {
    listing: t,
    groupListingId: n,
    guildId: s,
    analyticsLocation: l,
    onComplete: E,
    forcesTransitionToGuild: h
  } = e, N = (0, a.useStateFromStores)([p.default], () => p.default.isSyncing), {
    activeSubscription: D,
    activeSubscriptionListing: R
  } = (0, I.useActiveSubscriptionListingForApplication)(t.application_id, s), {
    openModal: M,
    canOpenModal: L,
    cannotOpenReason: y
  } = (0, S.default)({
    listing: t,
    guildId: s,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: l,
    onComplete: E,
    forcesTransitionToGuild: h
  }), x = t.subscription_plans[0], P = 0 === x.price, G = (null == R ? void 0 : R.id) === t.id, U = (0, u.default)(), w = U && !L || N, j = () => {
    U ? M() : (0, c.redirectToLogin)({
      [v]: "true"
    })
  };
  return r.useEffect(() => {
    let e = new URL(location.href);
    if (U && !w && "true" === e.searchParams.get(v)) {
      e.searchParams.delete(v);
      let t = e.pathname + e.search;
      (0, f.replaceWith)(t), M()
    }
  }, [U, M, w]), (0, i.jsxs)("div", {
    className: C.container,
    children: [(0, i.jsxs)("div", {
      className: C.cardHeader,
      children: [(0, i.jsx)(O, {
        listing: t
      }), (0, i.jsx)(o.Text, {
        variant: "text-lg/medium",
        color: "interactive-active",
        children: t.name
      }), (0, i.jsxs)("div", {
        className: C.priceAndButtonContainer,
        children: [(0, i.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "interactive-normal",
          children: P ? A.default.Messages.APPLICATION_SUBSCRIPTION_FREE : A.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
            amount: (0, _.formatPrice)(x.price, x.currency),
            period: (0, d.formatPlanInterval)(x)
          })
        }), (() => {
          var e;
          if (G) return (0, i.jsx)(b, {
            children: (null == D ? void 0 : D.status) === g.SubscriptionStatusTypes.CANCELED ? A.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : A.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          });
          if (P) return null == R ? (0, i.jsx)(b, {
            children: A.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          }) : null;
          return (0, i.jsx)(o.Tooltip, {
            tooltipClassName: C.subscribeButtonTooltip,
            text: L || !U ? null : y,
            "aria-label": null !== (e = !L && y) && void 0 !== e && e,
            children: e => (0, i.jsx)(T.default, {
              ...e,
              disabled: w,
              submitting: !1,
              onClick: j,
              children: A.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
            })
          })
        })()]
      })]
    }), (0, i.jsx)("div", {
      className: C.benefitsContainer,
      children: (0, i.jsx)(m.SubscriptionListingBenefits, {
        applicationId: t.application_id,
        storeListingBenefits: t.store_listing_benefits,
        skuBenefits: t.sku_benefits.benefits,
        className: C.benefit
      })
    })]
  })
}