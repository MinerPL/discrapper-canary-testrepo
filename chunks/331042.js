"use strict";
r.r(t), r.d(t, {
  CollectiblesCollectedModalInner: function() {
    return _
  }
}), r("47120");
var o = r("735250"),
  n = r("470079"),
  a = r("236471"),
  l = r("512722"),
  s = r.n(l),
  i = r("979554"),
  c = r("399606"),
  u = r("481060"),
  d = r("37234"),
  f = r("607070"),
  C = r("100527"),
  g = r("906732"),
  p = r("1585"),
  b = r("125988"),
  m = r("300284"),
  v = r("876917"),
  y = r("642619"),
  E = r("594174"),
  S = r("318028"),
  h = r("624377"),
  x = r("530618"),
  I = r("141011"),
  L = r("372654"),
  T = r("302800"),
  A = r("215023"),
  k = r("689938"),
  N = r("907365"),
  O = r("660097");
let _ = e => {
  var t, r;
  let {
    product: a,
    onClose: l,
    confettiTarget: T,
    confettiCanvas: _,
    hideConfetti: F = !1,
    analyticsLocations: M
  } = e, {
    confettiColors: R
  } = (0, h.default)(a.styles), j = (0, c.useStateFromStores)([E.default], () => {
    let e = E.default.getCurrentUser();
    return s()(null != e, "User cannot be undefined"), e
  }), B = (0, c.useStateFromStores)([f.default], () => f.default.useReducedMotion), [D] = a.items, {
    avatarDecorationSrc: z
  } = (0, b.default)({
    user: j,
    avatarDecorationOverride: (null == D ? void 0 : D.type) === i.CollectiblesItemType.AVATAR_DECORATION ? D : null,
    size: (0, p.getDecorationSizeForAvatarSize)(u.AvatarSizes.SIZE_120)
  }), P = n.useRef(null), {
    analyticsLocations: H
  } = (0, g.default)([...M, C.default.COLLECTIBLES_COLLECTED_MODAL]), w = (0, m.default)({
    analyticsLocations: H
  }), {
    category: W,
    isFetching: U
  } = (0, S.useFetchCollectiblesProductCategory)(a.skuId), G = null !== (r = null == W ? void 0 : W.successModalBg) && void 0 !== r ? r : a.banner;
  return (0, o.jsxs)(g.AnalyticsLocationProvider, {
    value: H,
    children: [(0, o.jsxs)("div", {
      className: N.modalInner,
      ref: P,
      children: [(0, o.jsxs)("div", {
        className: N.bannerContainer,
        children: [(0, o.jsx)(I.default, {
          asset: U ? void 0 : G,
          addGradient: null === (t = A.categoryBannerOverrides[a.categorySkuId]) || void 0 === t ? void 0 : t.addGradient,
          size: (0, L.getAssetSizeByHeight)(880),
          className: N.decorationBanner,
          blur: !0
        }), (null == D ? void 0 : D.type) === i.CollectiblesItemType.AVATAR_DECORATION && (0, o.jsx)(u.Avatar, {
          size: u.AvatarSizes.SIZE_120,
          src: O,
          avatarDecoration: z,
          className: N.avatarDecoration,
          "aria-label": a.name
        }), (null == D ? void 0 : D.type) === i.CollectiblesItemType.PROFILE_EFFECT && (0, o.jsx)("div", {
          className: N.profileEffectShopPreview,
          children: (0, o.jsx)(v.default, {
            forCollectedModal: !0,
            profileEffectId: D.id
          })
        })]
      }), (0, o.jsxs)("div", {
        className: N.collectedInfoContainer,
        children: [(0, o.jsxs)("div", {
          className: N.collectedTextContainer,
          children: [(0, o.jsx)(u.Heading, {
            variant: "heading-lg/bold",
            children: k.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
              itemName: a.name
            })
          }), (0, o.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: (null == D ? void 0 : D.type) === i.CollectiblesItemType.PROFILE_EFFECT ? k.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : k.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
          })]
        }), (0, o.jsx)(u.Button, {
          onClick: () => {
            if (l(), (0, d.popLayer)(), w(), (null == D ? void 0 : D.type) === i.CollectiblesItemType.AVATAR_DECORATION) {
              (0, p.openAvatarDecorationModal)({
                initialSelectedDecoration: D,
                analyticsLocations: H
              });
              return
            }(null == D ? void 0 : D.type) === i.CollectiblesItemType.PROFILE_EFFECT && (0, y.openProfileEffectModal)({
              initialSelectedEffectId: D.id,
              analyticsLocations: H
            })
          },
          children: k.default.Messages.COLLECTIBLES_USE_NOW
        })]
      }), (0, o.jsx)(u.ModalCloseButton, {
        onClick: l,
        className: N.modalCloseButton,
        withCircleBackground: !0
      })]
    }), !F && !B && (0, o.jsx)(x.default, {
      confettiTarget: null != T ? T : P.current,
      confettiCanvas: _,
      sprites: (0, L.getConfettiSprites)(a.categorySkuId),
      colors: null == R ? void 0 : R.map(e => e.toHexString())
    })]
  })
};
t.default = e => {
  let {
    transitionState: t,
    product: r,
    onClose: l,
    analyticsLocations: s
  } = e, i = n.useRef(new a.Environment), [c, d] = n.useState(null), f = (0, T.getCustomConfettiDisplayOptions)(r.skuId);
  return (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsx)(a.ConfettiCanvas, {
      ref: d,
      className: N.confettiCanvas,
      environment: i.current
    }), (0, o.jsxs)(u.ModalRoot, {
      hideShadow: !0,
      transitionState: t,
      size: u.ModalSize.DYNAMIC,
      className: N.modalRoot,
      children: [null != f && (0, o.jsx)("img", {
        src: f.confettiAssetSrc,
        className: N.customConfetti,
        style: f.style,
        alt: "",
        "aria-hidden": "true"
      }), (0, o.jsx)(u.ModalContent, {
        className: N.modalContent,
        children: (0, o.jsx)(_, {
          product: r,
          onClose: l,
          confettiCanvas: c,
          hideConfetti: null != f,
          analyticsLocations: s
        })
      })]
    })]
  })
}