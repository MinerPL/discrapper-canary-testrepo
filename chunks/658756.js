"use strict";
r.r(t), r.d(t, {
  CollectiblesCollectedModalInner: function() {
    return A
  },
  default: function() {
    return M
  }
}), r("222007");
var a = r("37983"),
  n = r("884691"),
  o = r("414456"),
  l = r.n(o),
  s = r("516555"),
  i = r("627445"),
  c = r.n(i),
  u = r("265586"),
  d = r("65597"),
  f = r("77078"),
  g = r("54239"),
  C = r("206230"),
  p = r("812204"),
  b = r("685665"),
  v = r("606292"),
  y = r("688318"),
  m = r("38766"),
  E = r("601095"),
  S = r("493390"),
  x = r("697218"),
  T = r("677257"),
  I = r("923702"),
  h = r("716120"),
  O = r("408381"),
  k = r("380171"),
  N = r("782340"),
  _ = r("580864"),
  L = r("53708");
let A = e => {
  var t, r;
  let {
    product: o,
    onClose: s,
    confettiTarget: i,
    confettiCanvas: A,
    analyticsLocations: M
  } = e, {
    confettiColors: R,
    backgroundColors: j,
    buttonColors: B,
    isDarkText: F
  } = (0, T.default)(o.styles), D = !0 === F ? _.darkText : _.lightText, w = null != B ? {
    background: (0, O.getBackgroundGradient)(B, 90),
    color: B.text.toHslString()
  } : void 0, H = null != j ? {
    background: (0, O.getBackgroundGradient)(j, 135)
  } : {
    backgroundColor: "var(--modal-background)"
  }, P = (0, d.useStateFromStores)([x.default], () => {
    let e = x.default.getCurrentUser();
    return c(null != e, "User cannot be undefined"), e
  }), U = (0, d.useStateFromStores)([C.default], () => C.default.useReducedMotion), [z] = o.items, {
    avatarDecorationSrc: G
  } = (0, y.default)({
    user: P,
    avatarDecorationOverride: (null == z ? void 0 : z.type) === u.CollectiblesItemType.AVATAR_DECORATION ? z : null,
    size: (0, v.getDecorationSizeForAvatarSize)(f.AvatarSizes.SIZE_120)
  }), V = n.useRef(null), {
    analyticsLocations: W
  } = (0, b.default)([...M, p.default.COLLECTIBLES_COLLECTED_MODAL]), Y = (0, m.default)({
    analyticsLocations: W
  });
  return (0, a.jsxs)(b.AnalyticsLocationProvider, {
    value: W,
    children: [(0, a.jsxs)("div", {
      className: _.modalInner,
      ref: V,
      style: H,
      children: [(0, a.jsxs)("div", {
        className: l(_.bannerContainer, {
          [_.bannerBackgroundFallback]: null == j
        }),
        children: [(0, a.jsx)(h.default, {
          assetUrlOverride: null === (t = k.categoryBannerOverrides[o.categorySkuId]) || void 0 === t ? void 0 : t.assetUrlOverride,
          asset: o.banner,
          addGradient: null === (r = k.categoryBannerOverrides[o.categorySkuId]) || void 0 === r ? void 0 : r.addGradient,
          size: (0, O.getAssetSizeByHeight)(440),
          className: _.decorationBanner
        }), (null == z ? void 0 : z.type) === u.CollectiblesItemType.AVATAR_DECORATION && (0, a.jsx)(f.Avatar, {
          size: f.AvatarSizes.SIZE_120,
          src: L,
          avatarDecoration: G,
          className: _.avatarDecoration,
          "aria-label": o.name
        }), (null == z ? void 0 : z.type) === u.CollectiblesItemType.PROFILE_EFFECT && (0, a.jsx)("div", {
          className: _.profileEffectShopPreview,
          children: (0, a.jsx)(E.default, {
            forCollectedModal: !0,
            profileEffectId: z.id
          })
        })]
      }), (0, a.jsxs)("div", {
        className: l(_.collectedInfoContainer, {
          [_.default]: null == j
        }),
        children: [(0, a.jsxs)("div", {
          className: _.collectedTextContainer,
          children: [(0, a.jsx)(f.Heading, {
            variant: "heading-lg/bold",
            className: D,
            children: N.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
              itemName: o.name
            })
          }), (0, a.jsx)(f.Text, {
            variant: "text-sm/normal",
            className: D,
            children: (null == z ? void 0 : z.type) === u.CollectiblesItemType.PROFILE_EFFECT ? N.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : N.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
          })]
        }), (0, a.jsx)(f.Button, {
          onClick: () => {
            if (s(), (0, g.popLayer)(), Y(), (null == z ? void 0 : z.type) === u.CollectiblesItemType.AVATAR_DECORATION) {
              (0, v.openAvatarDecorationModal)({
                initialSelectedDecoration: z,
                analyticsLocations: W
              });
              return
            }(null == z ? void 0 : z.type) === u.CollectiblesItemType.PROFILE_EFFECT && (0, S.openProfileEffectModal)({
              initialSelectedEffectId: z.id,
              analyticsLocations: W
            })
          },
          style: w,
          children: N.default.Messages.COLLECTIBLES_USE_NOW
        })]
      }), (0, a.jsx)(f.ModalCloseButton, {
        onClick: s,
        className: _.modalCloseButton,
        withCircleBackground: !0
      })]
    }), !U && (0, a.jsx)(I.default, {
      confettiTarget: null != i ? i : V.current,
      confettiCanvas: A,
      sprites: (0, O.getConfettiSprites)(o.categorySkuId),
      colors: null == R ? void 0 : R.map(e => e.toHexString())
    })]
  })
};
var M = e => {
  let {
    transitionState: t,
    product: r,
    onClose: o,
    analyticsLocations: l
  } = e, i = n.useRef(new s.Environment), [c, u] = n.useState(null);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.ConfettiCanvas, {
      ref: u,
      className: _.confettiCanvas,
      environment: i.current
    }), (0, a.jsx)(f.ModalRoot, {
      hideShadow: !0,
      transitionState: t,
      size: f.ModalSize.DYNAMIC,
      className: _.modalRoot,
      children: (0, a.jsx)(f.ModalContent, {
        className: _.modalContent,
        children: (0, a.jsx)(A, {
          product: r,
          onClose: o,
          confettiCanvas: c,
          analyticsLocations: l
        })
      })
    })]
  })
}