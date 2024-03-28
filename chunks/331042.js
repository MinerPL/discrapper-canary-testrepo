"use strict";
r.r(t), r.d(t, {
  CollectiblesCollectedModalInner: function() {
    return M
  }
}), r("47120");
var a = r("735250"),
  o = r("470079"),
  n = r("803997"),
  l = r.n(n),
  s = r("911765"),
  i = r("512722"),
  c = r.n(i),
  u = r("979554"),
  d = r("399606"),
  f = r("481060"),
  g = r("37234"),
  C = r("607070"),
  p = r("100527"),
  b = r("906732"),
  y = r("1585"),
  S = r("125988"),
  v = r("300284"),
  E = r("876917"),
  x = r("642619"),
  m = r("594174"),
  I = r("624377"),
  T = r("530618"),
  k = r("141011"),
  O = r("372654"),
  h = r("302800"),
  N = r("414592"),
  _ = r("689938"),
  L = r("176929"),
  A = r("660097");
let M = e => {
  var t, r;
  let {
    product: n,
    onClose: s,
    confettiTarget: i,
    confettiCanvas: h,
    hideConfetti: M = !1,
    analyticsLocations: R
  } = e, {
    confettiColors: j,
    backgroundColors: B,
    buttonColors: F,
    isDarkText: D
  } = (0, I.default)(n.styles), U = !0 === D ? L.darkText : L.lightText, P = null != F ? {
    background: (0, O.getBackgroundGradient)(F, 90),
    color: F.text.toHslString()
  } : void 0, z = null != B ? {
    background: (0, O.getBackgroundGradient)(B, 135)
  } : {
    backgroundColor: "var(--modal-background)"
  }, G = (0, d.useStateFromStores)([m.default], () => {
    let e = m.default.getCurrentUser();
    return c()(null != e, "User cannot be undefined"), e
  }), H = (0, d.useStateFromStores)([C.default], () => C.default.useReducedMotion), [w] = n.items, {
    avatarDecorationSrc: V
  } = (0, S.default)({
    user: G,
    avatarDecorationOverride: (null == w ? void 0 : w.type) === u.CollectiblesItemType.AVATAR_DECORATION ? w : null,
    size: (0, y.getDecorationSizeForAvatarSize)(f.AvatarSizes.SIZE_120)
  }), W = o.useRef(null), {
    analyticsLocations: Y
  } = (0, b.default)([...R, p.default.COLLECTIBLES_COLLECTED_MODAL]), K = (0, v.default)({
    analyticsLocations: Y
  });
  return (0, a.jsxs)(b.AnalyticsLocationProvider, {
    value: Y,
    children: [(0, a.jsxs)("div", {
      className: L.modalInner,
      ref: W,
      style: z,
      children: [(0, a.jsxs)("div", {
        className: l()(L.bannerContainer, {
          [L.bannerBackgroundFallback]: null == B
        }),
        children: [(0, a.jsx)(k.default, {
          assetUrlOverride: null === (t = N.categoryBannerOverrides[n.categorySkuId]) || void 0 === t ? void 0 : t.assetUrlOverride,
          asset: n.banner,
          addGradient: null === (r = N.categoryBannerOverrides[n.categorySkuId]) || void 0 === r ? void 0 : r.addGradient,
          size: (0, O.getAssetSizeByHeight)(440),
          className: L.decorationBanner
        }), (null == w ? void 0 : w.type) === u.CollectiblesItemType.AVATAR_DECORATION && (0, a.jsx)(f.Avatar, {
          size: f.AvatarSizes.SIZE_120,
          src: A,
          avatarDecoration: V,
          className: L.avatarDecoration,
          "aria-label": n.name
        }), (null == w ? void 0 : w.type) === u.CollectiblesItemType.PROFILE_EFFECT && (0, a.jsx)("div", {
          className: L.profileEffectShopPreview,
          children: (0, a.jsx)(E.default, {
            forCollectedModal: !0,
            profileEffectId: w.id
          })
        })]
      }), (0, a.jsxs)("div", {
        className: l()(L.collectedInfoContainer, {
          [L.default]: null == B
        }),
        children: [(0, a.jsxs)("div", {
          className: L.collectedTextContainer,
          children: [(0, a.jsx)(f.Heading, {
            variant: "heading-lg/bold",
            className: U,
            children: _.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
              itemName: n.name
            })
          }), (0, a.jsx)(f.Text, {
            variant: "text-sm/normal",
            className: U,
            children: (null == w ? void 0 : w.type) === u.CollectiblesItemType.PROFILE_EFFECT ? _.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : _.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
          })]
        }), (0, a.jsx)(f.Button, {
          onClick: () => {
            if (s(), (0, g.popLayer)(), K(), (null == w ? void 0 : w.type) === u.CollectiblesItemType.AVATAR_DECORATION) {
              (0, y.openAvatarDecorationModal)({
                initialSelectedDecoration: w,
                analyticsLocations: Y
              });
              return
            }(null == w ? void 0 : w.type) === u.CollectiblesItemType.PROFILE_EFFECT && (0, x.openProfileEffectModal)({
              initialSelectedEffectId: w.id,
              analyticsLocations: Y
            })
          },
          style: P,
          children: _.default.Messages.COLLECTIBLES_USE_NOW
        })]
      }), (0, a.jsx)(f.ModalCloseButton, {
        onClick: s,
        className: L.modalCloseButton,
        withCircleBackground: !0
      })]
    }), !M && !H && (0, a.jsx)(T.default, {
      confettiTarget: null != i ? i : W.current,
      confettiCanvas: h,
      sprites: (0, O.getConfettiSprites)(n.categorySkuId),
      colors: null == j ? void 0 : j.map(e => e.toHexString())
    })]
  })
};
t.default = e => {
  let {
    transitionState: t,
    product: r,
    onClose: n,
    analyticsLocations: l
  } = e, i = o.useRef(new s.Environment), [c, u] = o.useState(null), d = (0, h.getCustomConfettiDisplayOptions)(r.skuId);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.ConfettiCanvas, {
      ref: u,
      className: L.confettiCanvas,
      environment: i.current
    }), (0, a.jsxs)(f.ModalRoot, {
      hideShadow: !0,
      transitionState: t,
      size: f.ModalSize.DYNAMIC,
      className: L.modalRoot,
      children: [null != d && (0, a.jsx)("img", {
        src: d.confettiAssetSrc,
        className: L.customConfetti,
        style: d.style,
        alt: "",
        "aria-hidden": "true"
      }), (0, a.jsx)(f.ModalContent, {
        className: L.modalContent,
        children: (0, a.jsx)(M, {
          product: r,
          onClose: n,
          confettiCanvas: c,
          hideConfetti: null != d,
          analyticsLocations: l
        })
      })]
    })]
  })
}