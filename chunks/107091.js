"use strict";
t.d(s, {
  Z: function() {
    return O
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(772848),
  l = t(979554),
  r = t(399606),
  o = t(481060),
  c = t(37234),
  u = t(607070),
  d = t(100527),
  C = t(906732),
  E = t(1585),
  f = t(624377),
  m = t(372654),
  p = t(715627),
  g = t(300284),
  h = t(642619),
  x = t(598),
  _ = t(333867),
  I = t(329067),
  T = t(981631),
  N = t(302800),
  S = t(689938),
  L = t(894775);
let b = {
    xMin: -100,
    xMax: 100,
    yMin: -150,
    yMax: 0
  },
  v = e => {
    let {
      children: s,
      ...t
    } = e;
    return (0, n.jsx)(o.Button, {
      fullWidth: !0,
      look: o.Button.Looks.FILLED,
      ...t,
      children: s
    })
  };

function O(e) {
  let {
    product: s,
    paymentSource: t,
    onPurchaseComplete: O,
    onUse: Z,
    onError: A,
    onReviewPurchase: R,
    loadId: j,
    baseAnalyticsData: P,
    confettiCanvas: M = null
  } = e;
  j = null != j ? j : (0, i.Z)();
  let k = a.useRef(null),
    [B] = s.items,
    {
      analyticsLocations: y
    } = (0, C.ZP)(d.Z.COLLECTIBLES_SHOP_CARD, d.Z.COLLECTIBLES_LIGHTNING_CHECKOUT),
    {
      buttonColors: F
    } = (0, f.Z)(s.styles),
    D = (0, r.e7)([u.Z], () => u.Z.useReducedMotion),
    U = (0, N.UY)(s.skuId),
    [H, w] = a.useState(!1),
    [G, W] = a.useState(!1),
    V = null != F ? {
      background: (0, m.nH)(F, 90),
      color: F.text.toHslString()
    } : void 0,
    Y = (0, g.Z)({
      analyticsLocations: y
    }),
    z = {
      onPurchaseComplete: () => {
        w(!0), O()
      },
      onError: e => {
        A(e), W(!0)
      },
      onReviewPurchase: R,
      paymentSource: t,
      skuId: s.skuId,
      loadId: j,
      baseAnalyticsData: P
    };
  return (0, n.jsxs)("div", {
    ref: k,
    className: L.container,
    children: [G && (0, n.jsxs)("div", {
      className: L.cardDetails,
      children: [(0, n.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: L.productName,
        children: S.Z.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_TITLE
      }), (0, n.jsx)("div", {
        className: L.innerBlur,
        children: (0, n.jsx)(o.Text, {
          className: L.description,
          variant: "text-md/normal",
          children: S.Z.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_DESCRIPTION
        })
      }), (0, n.jsx)(o.Button, {
        onClick: () => {
          R(), (0, _.Z)({
            skuId: s.skuId,
            analyticsLocations: y,
            returnRef: k
          })
        },
        children: S.Z.Messages.LIGHTNING_CHECKOUT_GENERIC_ERROR_CTA
      })]
    }), !G && (H ? (0, n.jsxs)("div", {
      className: L.cardDetails,
      children: [(0, n.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: L.productName,
        children: S.Z.Messages.COLLECTIBLES_YOU_COLLECTED.format({
          itemName: s.name
        })
      }), (0, n.jsx)("div", {
        className: L.innerBlur,
        children: (0, n.jsx)(o.Text, {
          className: L.description,
          variant: "text-xs/normal",
          children: S.Z.Messages.COLLECTIBLES_PERMANENT_COLLECTION
        })
      }), (0, n.jsx)(v, {
        style: V,
        onClick: () => {
          if (Z(), (0, c.xf)(), Y(), (null == B ? void 0 : B.type) === l.Z.AVATAR_DECORATION) {
            (0, E.ps)({
              initialSelectedDecoration: B,
              analyticsLocations: y
            });
            return
          }(null == B ? void 0 : B.type) === l.Z.PROFILE_EFFECT && (0, h.H)({
            initialSelectedEffectId: B.id,
            analyticsLocations: y
          })
        },
        children: S.Z.Messages.COLLECTIBLES_USE_NOW
      })]
    }) : (0, n.jsxs)("div", {
      className: L.cardDetails,
      children: [(0, n.jsx)(o.Text, {
        variant: "text-lg/bold",
        className: L.productName,
        children: s.name
      }), (0, n.jsx)(x.PaymentContextProvider, {
        loadId: j,
        stepConfigs: [],
        applicationId: T.XAJ,
        skuIDs: [s.skuId],
        isGift: !1,
        activeSubscription: null,
        purchaseType: T.GZQ.ONE_TIME,
        children: (0, n.jsx)(I.Z, {
          ...z
        })
      })]
    })), !G && H && !(null != U) && !D && (0, n.jsx)(p.Z, {
      confettiTarget: k.current,
      customConfettiCanvas: M,
      speedValues: b,
      numBursts: 4,
      particlesPerBurst: 100,
      offsetXPercentageMax: 100,
      offsetXPercentageMin: 0,
      offsetYPercentageMax: 100,
      offsetYPercentageMin: 0,
      dragCoefficientValue: 1e-6
    })]
  })
}