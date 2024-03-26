"use strict";
a.r(t), a.d(t, {
  CollectiblesCollectedModalInner: function() {
    return M
  },
  default: function() {
    return P
  }
}), a("222007");
var r = a("37983"),
  n = a("884691"),
  o = a("414456"),
  s = a.n(o),
  i = a("516555"),
  l = a("627445"),
  c = a.n(l),
  d = a("265586"),
  u = a("65597"),
  f = a("77078"),
  C = a("54239"),
  g = a("206230"),
  p = a("812204"),
  b = a("685665"),
  E = a("606292"),
  T = a("688318"),
  I = a("38766"),
  S = a("601095"),
  O = a("493390"),
  _ = a("697218"),
  L = a("677257"),
  y = a("923702"),
  m = a("716120"),
  v = a("408381"),
  x = a("819852"),
  N = a("380171"),
  A = a("782340"),
  h = a("580864"),
  k = a("53708");
let M = e => {
  var t, a;
  let {
    product: o,
    onClose: i,
    confettiTarget: l,
    confettiCanvas: x,
    hideConfetti: M = !1,
    analyticsLocations: P
  } = e, {
    confettiColors: B,
    backgroundColors: R,
    buttonColors: H,
    isDarkText: D
  } = (0, L.default)(o.styles), j = !0 === D ? h.darkText : h.lightText, F = null != H ? {
    background: (0, v.getBackgroundGradient)(H, 90),
    color: H.text.toHslString()
  } : void 0, w = null != R ? {
    background: (0, v.getBackgroundGradient)(R, 135)
  } : {
    backgroundColor: "var(--modal-background)"
  }, G = (0, u.useStateFromStores)([_.default], () => {
    let e = _.default.getCurrentUser();
    return c(null != e, "User cannot be undefined"), e
  }), U = (0, u.useStateFromStores)([g.default], () => g.default.useReducedMotion), [Y] = o.items, {
    avatarDecorationSrc: z
  } = (0, T.default)({
    user: G,
    avatarDecorationOverride: (null == Y ? void 0 : Y.type) === d.CollectiblesItemType.AVATAR_DECORATION ? Y : null,
    size: (0, E.getDecorationSizeForAvatarSize)(f.AvatarSizes.SIZE_120)
  }), V = n.useRef(null), {
    analyticsLocations: W
  } = (0, b.default)([...P, p.default.COLLECTIBLES_COLLECTED_MODAL]), X = (0, I.default)({
    analyticsLocations: W
  });
  return (0, r.jsxs)(b.AnalyticsLocationProvider, {
    value: W,
    children: [(0, r.jsxs)("div", {
      className: h.modalInner,
      ref: V,
      style: w,
      children: [(0, r.jsxs)("div", {
        className: s(h.bannerContainer, {
          [h.bannerBackgroundFallback]: null == R
        }),
        children: [(0, r.jsx)(m.default, {
          assetUrlOverride: null === (t = N.categoryBannerOverrides[o.categorySkuId]) || void 0 === t ? void 0 : t.assetUrlOverride,
          asset: o.banner,
          addGradient: null === (a = N.categoryBannerOverrides[o.categorySkuId]) || void 0 === a ? void 0 : a.addGradient,
          size: (0, v.getAssetSizeByHeight)(440),
          className: h.decorationBanner
        }), (null == Y ? void 0 : Y.type) === d.CollectiblesItemType.AVATAR_DECORATION && (0, r.jsx)(f.Avatar, {
          size: f.AvatarSizes.SIZE_120,
          src: k,
          avatarDecoration: z,
          className: h.avatarDecoration,
          "aria-label": o.name
        }), (null == Y ? void 0 : Y.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, r.jsx)("div", {
          className: h.profileEffectShopPreview,
          children: (0, r.jsx)(S.default, {
            forCollectedModal: !0,
            profileEffectId: Y.id
          })
        })]
      }), (0, r.jsxs)("div", {
        className: s(h.collectedInfoContainer, {
          [h.default]: null == R
        }),
        children: [(0, r.jsxs)("div", {
          className: h.collectedTextContainer,
          children: [(0, r.jsx)(f.Heading, {
            variant: "heading-lg/bold",
            className: j,
            children: A.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
              itemName: o.name
            })
          }), (0, r.jsx)(f.Text, {
            variant: "text-sm/normal",
            className: j,
            children: (null == Y ? void 0 : Y.type) === d.CollectiblesItemType.PROFILE_EFFECT ? A.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : A.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
          })]
        }), (0, r.jsx)(f.Button, {
          onClick: () => {
            if (i(), (0, C.popLayer)(), X(), (null == Y ? void 0 : Y.type) === d.CollectiblesItemType.AVATAR_DECORATION) {
              (0, E.openAvatarDecorationModal)({
                initialSelectedDecoration: Y,
                analyticsLocations: W
              });
              return
            }(null == Y ? void 0 : Y.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, O.openProfileEffectModal)({
              initialSelectedEffectId: Y.id,
              analyticsLocations: W
            })
          },
          style: F,
          children: A.default.Messages.COLLECTIBLES_USE_NOW
        })]
      }), (0, r.jsx)(f.ModalCloseButton, {
        onClick: i,
        className: h.modalCloseButton,
        withCircleBackground: !0
      })]
    }), !M && !U && (0, r.jsx)(y.default, {
      confettiTarget: null != l ? l : V.current,
      confettiCanvas: x,
      sprites: (0, v.getConfettiSprites)(o.categorySkuId),
      colors: null == B ? void 0 : B.map(e => e.toHexString())
    })]
  })
};
var P = e => {
  let {
    transitionState: t,
    product: a,
    onClose: o,
    analyticsLocations: s
  } = e, l = n.useRef(new i.Environment), [c, d] = n.useState(null), u = x.SkuIdToCustomConfettiDisplayOptions[a.skuId];
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.ConfettiCanvas, {
      ref: d,
      className: h.confettiCanvas,
      environment: l.current
    }), (0, r.jsxs)(f.ModalRoot, {
      hideShadow: !0,
      transitionState: t,
      size: f.ModalSize.DYNAMIC,
      className: h.modalRoot,
      children: [null != u && (0, r.jsx)("img", {
        src: u.confettiAssetSrc,
        style: u.style,
        alt: "",
        "aria-hidden": "true"
      }), (0, r.jsx)(f.ModalContent, {
        className: h.modalContent,
        children: (0, r.jsx)(M, {
          product: a,
          onClose: o,
          confettiCanvas: c,
          hideConfetti: null != u,
          analyticsLocations: s
        })
      })]
    })]
  })
}