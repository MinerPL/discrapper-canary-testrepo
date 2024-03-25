"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
var s = n("37983"),
  i = n("884691"),
  a = n("617258"),
  l = n("446674"),
  r = n("769846"),
  u = n("77078"),
  o = n("598981"),
  c = n("682777"),
  d = n("577357"),
  f = n("393414"),
  p = n("160299"),
  h = n("153160"),
  I = n("271560"),
  v = n("991254"),
  E = n("777053"),
  _ = n("139737"),
  T = n("375010"),
  C = n("49111"),
  m = n("782340"),
  A = n("597550");
let g = (0, a.cssValueToNumber)(r.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
  N = "start_application_subscription",
  S = e => {
    let {
      listing: t
    } = e, n = t.image_asset;
    if (null == n) return null;
    let i = (0, I.getAssetURL)(t.application_id, n, g);
    return (0, s.jsx)("div", {
      children: (0, s.jsx)("img", {
        src: i,
        alt: "",
        className: A.listingImage
      })
    })
  },
  R = e => {
    let {
      children: t
    } = e;
    return (0, s.jsx)(u.Button, {
      look: u.Button.Looks.OUTLINED,
      color: u.Button.Colors.PRIMARY,
      disabled: !0,
      size: u.Button.Sizes.SMALL,
      children: t
    })
  };

function L(e) {
  let {
    listing: t,
    groupListingId: n,
    guildId: a,
    analyticsLocation: r,
    onComplete: I,
    forcesTransitionToGuild: g
  } = e, L = (0, l.useStateFromStores)([p.default], () => p.default.isSyncing), {
    activeSubscription: x,
    activeSubscriptionListing: P
  } = (0, v.useActiveSubscriptionListingForApplication)(t.application_id, a), {
    openModal: O,
    canOpenModal: M,
    cannotOpenReason: y
  } = (0, T.default)({
    listing: t,
    guildId: a,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: r,
    onComplete: I,
    forcesTransitionToGuild: g
  }), j = t.subscription_plans[0], b = 0 === j.price, w = (null == P ? void 0 : P.id) === t.id, D = (0, o.default)(), U = D && !M || L, V = () => {
    D ? O() : (0, c.redirectToLogin)({
      [N]: "true"
    })
  };
  return i.useEffect(() => {
    let e = new URL(location.href);
    if (D && !U && "true" === e.searchParams.get(N)) {
      e.searchParams.delete(N);
      let t = e.pathname + e.search;
      (0, f.replaceWith)(t), O()
    }
  }, [D, O, U]), (0, s.jsxs)("div", {
    className: A.container,
    children: [(0, s.jsxs)("div", {
      className: A.cardHeader,
      children: [(0, s.jsx)(S, {
        listing: t
      }), (0, s.jsx)(u.Text, {
        variant: "text-lg/medium",
        color: "interactive-active",
        children: t.name
      }), (0, s.jsxs)("div", {
        className: A.priceAndButtonContainer,
        children: [(0, s.jsx)(u.Text, {
          variant: "text-md/normal",
          color: "interactive-normal",
          children: b ? m.default.Messages.APPLICATION_SUBSCRIPTION_FREE : m.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
            amount: (0, h.formatPrice)(j.price, j.currency),
            period: (0, d.formatPlanInterval)(j)
          })
        }), (() => {
          var e;
          if (w) return (0, s.jsx)(R, {
            children: (null == x ? void 0 : x.status) === C.SubscriptionStatusTypes.CANCELED ? m.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : m.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          });
          if (b) return null == P ? (0, s.jsx)(R, {
            children: m.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          }) : null;
          return (0, s.jsx)(u.Tooltip, {
            tooltipClassName: A.subscribeButtonTooltip,
            text: M || !D ? null : y,
            "aria-label": null !== (e = !M && y) && void 0 !== e && e,
            children: e => (0, s.jsx)(E.default, {
              ...e,
              disabled: U,
              submitting: !1,
              onClick: V,
              children: m.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
            })
          })
        })()]
      })]
    }), (0, s.jsx)("div", {
      className: A.benefitsContainer,
      children: (0, s.jsx)(_.SubscriptionListingBenefits, {
        applicationId: t.application_id,
        storeListingBenefits: t.store_listing_benefits,
        skuBenefits: t.sku_benefits.benefits,
        className: A.benefit
      })
    })]
  })
}