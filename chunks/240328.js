"use strict";
n.d(t, {
  Ao: function() {
    return D
  }
}), n(47120), n(627341);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(278074),
  l = n(399606),
  u = n(481060),
  _ = n(393238),
  d = n(607070),
  c = n(100527),
  E = n(906732),
  I = n(1585),
  T = n(125988),
  h = n(335131),
  S = n(597688),
  f = n(884697),
  N = n(731896),
  A = n(594174),
  m = n(465670),
  O = n(74538),
  R = n(436478),
  C = n(921944),
  p = n(689938),
  g = n(245876),
  L = n(174492);

function v(e) {
  let {
    onClick: t
  } = e;
  return (0, i.jsx)(u.Clickable, {
    className: g.closeButton,
    onClick: t,
    "aria-label": p.Z.Messages.DISMISS,
    children: (0, i.jsx)(m.Z, {
      className: g.closeIcon,
      width: 18,
      height: 18
    })
  })
}
let D = 76,
  M = e => (0, i.jsx)(u.Text, {
    variant: "text-sm/normal",
    color: "text-normal",
    tag: "span",
    className: g.ctaLink,
    children: e
  }),
  P = e => {
    let {
      user: t,
      onClick: n
    } = e, {
      avatarDecorationSrc: r
    } = (0, T.Z)({
      user: t,
      size: (0, I.y9)(u.AvatarSizes.SIZE_48)
    });
    return (0, i.jsx)(u.Clickable, {
      className: g.avatarButton,
      onClick: n,
      "aria-label": p.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
      children: (0, i.jsx)(u.Avatar, {
        src: L,
        avatarDecoration: r,
        size: u.AvatarSizes.SIZE_48,
        "aria-hidden": !0
      })
    })
  };
t.ZP = e => {
  var t;
  let {
    user: n,
    displayProfile: s,
    onClose: I,
    onDismiss: T,
    isInSidebar: m = !1,
    canShowAvatarDecorationUpsell: L = !1,
    canShowProfileEffectUpsell: y = !1,
    upsellSource: U
  } = e, {
    analyticsLocations: b
  } = (0, E.ZP)(c.Z.COLLECTIBLES_USER_POPOUT_UPSELL), G = (0, l.e7)([d.Z], () => d.Z.useReducedMotion), {
    ref: w,
    height: k
  } = (0, _.Z)(), B = r.useMemo(() => ({
    top: "-".concat((null != k ? k : D) + 6, "px")
  }), [k]), x = (0, l.e7)([A.default], () => A.default.getCurrentUser()), V = O.ZP.canUseCollectibles(x), {
    setUpsellSource: Z,
    reset: H
  } = (0, R.k)();
  r.useEffect(() => (Z(U), () => {
    H()
  }), [Z, U, H]);
  let F = (0, N.V)(null == s ? void 0 : s.profileEffectId),
    [Y, j] = (0, l.Wu)([S.Z], () => {
      var e;
      return [(0, f.G1)(S.Z.getProduct(null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId)), (0, f.G1)(S.Z.getProduct(null == F ? void 0 : F.skuId))]
    }),
    W = r.useCallback(() => {
      var e, t, i, r;
      null == T || T(C.L.PRIMARY), null == I || I(), (0, h.mK)({
        analyticsLocations: b,
        analyticsSource: c.Z.COLLECTIBLES_USER_POPOUT_UPSELL,
        initialProductSkuId: Y ? null !== (i = null == F ? void 0 : F.skuId) && void 0 !== i ? i : null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId : null !== (r = null === (t = n.avatarDecoration) || void 0 === t ? void 0 : t.skuId) && void 0 !== r ? r : null == F ? void 0 : F.skuId
      })
    }, [T, I, b, null == F ? void 0 : F.skuId, null === (t = n.avatarDecoration) || void 0 === t ? void 0 : t.skuId, Y]),
    K = r.useCallback(() => {
      null == T || T(C.L.DISMISS)
    }, [T]);
  if (!L && !y) return null;
  let z = (0, a.EQ)([L, y]).with([!0, !0], () => Y && j && V ? p.Z.Messages.COMBINED_STARTER_COLLECTIBLES_SOCIAL_UPSELL_NITRO.format({
    openShop: M
  }) : Y && j ? p.Z.Messages.COMBINED_STARTER_COLLECTIBLES_SOCIAL_UPSELL_NON_NITRO.format({
    openShop: M
  }) : p.Z.Messages.COMBINED_COLLECTIBLES_SOCIAL_UPSELL.format({
    openShop: M
  })).with([!0, !1], () => Y && V ? p.Z.Messages.STARTER_AVATAR_DECORATIONS_SOCIAL_UPSELL_NITRO.format({
    openShop: M
  }) : p.Z.Messages.AVATAR_DECORATIONS_SOCIAL_UPSELL.format({
    openShop: M
  })).with([!1, !0], () => j && V ? p.Z.Messages.STARTER_PROFILE_EFFECTS_SOCIAL_UPSELL_NITRO.format({
    openShop: M
  }) : (j && p.Z.Messages.STARTER_PROFILE_EFFECTS_SOCIAL_UPSELL_NON_NITRO.format({
    openShop: M
  }), p.Z.Messages.PROFILE_EFFECTS_SOCIAL_UPSELL.format({
    openShop: M
  }))).otherwise(() => null);
  return (0, i.jsx)("div", {
    style: B,
    className: o()(g.containerWrapper, {
      [g.animation]: !G,
      [g.inSidebar]: m
    }),
    ref: w,
    children: (0, i.jsxs)("div", {
      className: g.container,
      children: [L && (0, i.jsx)(P, {
        user: n,
        onClick: W
      }), (0, i.jsx)(u.Clickable, {
        className: L ? g.contentWithAvatar : g.content,
        onClick: W,
        "aria-label": p.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
        children: (0, i.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-normal",
          tag: "span",
          children: z
        })
      }), (0, i.jsx)("div", {
        className: g.buttons,
        children: (0, i.jsx)(v, {
          onClick: K
        })
      })]
    })
  })
}