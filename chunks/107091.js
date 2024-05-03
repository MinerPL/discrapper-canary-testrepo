"use strict";
a.r(t), a.d(t, {
  default: function() {
    return _
  }
}), a("47120");
var l = a("735250"),
  s = a("470079"),
  r = a("153832"),
  n = a("979554"),
  i = a("399606"),
  o = a("481060"),
  u = a("37234"),
  c = a("607070"),
  d = a("100527"),
  f = a("906732"),
  m = a("1585"),
  C = a("624377"),
  p = a("530618"),
  h = a("372654"),
  E = a("300284"),
  g = a("642619"),
  x = a("563132"),
  S = a("333867"),
  b = a("329067"),
  T = a("981631"),
  L = a("302800"),
  v = a("689938"),
  I = a("777374");
let N = e => {
  let {
    children: t,
    ...a
  } = e;
  return (0, l.jsx)(o.Button, {
    fullWidth: !0,
    look: o.Button.Looks.FILLED,
    ...a,
    children: t
  })
};

function _(e) {
  let {
    product: t,
    paymentSource: a,
    onPurchaseComplete: _,
    onUse: y,
    onError: O,
    onReviewPurchase: k,
    confettiCanvas: A = null
  } = e, R = (0, r.v4)(), j = s.useRef(null), [P] = t.items, {
    analyticsLocations: B
  } = (0, f.default)(d.default.COLLECTIBLES_SHOP_CARD), {
    confettiColors: D,
    buttonColors: F
  } = (0, C.default)(t.styles), M = (0, i.useStateFromStores)([c.default], () => c.default.useReducedMotion), w = (0, L.getCustomConfettiDisplayOptions)(t.skuId), [H, U] = s.useState(!1), [W, G] = s.useState(!1), V = null != F ? {
    background: (0, h.getBackgroundGradient)(F, 90),
    color: F.text.toHslString()
  } : void 0, z = (0, E.default)({
    analyticsLocations: B
  }), K = {
    onPurchaseComplete: () => {
      U(!0), _()
    },
    onError: e => {
      O(e), G(!0)
    },
    onReviewPurchase: k,
    paymentSource: a,
    skuId: t.skuId,
    analyticsLocations: B
  };
  return (0, l.jsxs)("div", {
    ref: j,
    className: I.container,
    children: [W && (0, l.jsxs)("div", {
      className: I.cardDetails,
      children: [(0, l.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: I.productName,
        children: "Uh oh, something went wrong"
      }), (0, l.jsx)("div", {
        className: I.innerBlur,
        children: (0, l.jsx)(o.Text, {
          className: I.description,
          variant: "text-md/normal",
          children: "Recheck your payment information, then try again."
        })
      }), (0, l.jsx)(o.Button, {
        onClick: () => {
          k(), (0, S.default)({
            skuId: t.skuId,
            analyticsLocations: B,
            returnRef: j
          })
        },
        children: "Review Purchase"
      })]
    }), !W && (H ? (0, l.jsxs)("div", {
      className: I.cardDetails,
      children: [(0, l.jsxs)(o.Text, {
        variant: "text-lg/bold",
        className: I.productName,
        children: ["You've Collected ", t.name, "!"]
      }), (0, l.jsx)("div", {
        className: I.innerBlur,
        children: (0, l.jsx)(o.Text, {
          className: I.description,
          variant: "text-xs/normal",
          children: "This decoration is now part of your collection and can be used anytime!"
        })
      }), (0, l.jsx)(N, {
        style: V,
        onClick: () => {
          if (y(), (0, u.popLayer)(), z(), (null == P ? void 0 : P.type) === n.CollectiblesItemType.AVATAR_DECORATION) {
            (0, m.openAvatarDecorationModal)({
              initialSelectedDecoration: P,
              analyticsLocations: B
            });
            return
          }(null == P ? void 0 : P.type) === n.CollectiblesItemType.PROFILE_EFFECT && (0, g.openProfileEffectModal)({
            initialSelectedEffectId: P.id,
            analyticsLocations: B
          })
        },
        children: v.default.Messages.COLLECTIBLES_USE_NOW
      })]
    }) : (0, l.jsxs)("div", {
      className: I.cardDetails,
      children: [(0, l.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: I.productName,
        children: t.name
      }), (0, l.jsx)(x.PaymentContextProvider, {
        loadId: R,
        stepConfigs: [],
        applicationId: T.COLLECTIBLES_APPLICATION_ID,
        skuIDs: [t.skuId],
        isGift: !1,
        activeSubscription: null,
        purchaseType: T.PurchaseTypes.ONE_TIME,
        children: (0, l.jsx)(b.default, {
          ...K
        })
      })]
    })), !W && H && !(null != w) && !M && (0, l.jsx)(p.default, {
      confettiTarget: j.current,
      confettiCanvas: A,
      sprites: (0, h.getConfettiSprites)(t.categorySkuId),
      colors: null == D ? void 0 : D.map(e => e.toHexString())
    })]
  })
}