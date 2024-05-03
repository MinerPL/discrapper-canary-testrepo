"use strict";
l.r(t);
var s = l("735250");
l("470079");
var a = l("442837"),
  n = l("481060"),
  r = l("809206"),
  i = l("597688"),
  u = l("884697"),
  o = l("18438"),
  c = l("778825"),
  d = l("957730"),
  f = l("962746"),
  m = l("350327"),
  h = l("318661"),
  E = l("706454"),
  p = l("695346"),
  g = l("265159"),
  C = l("25990"),
  I = l("594174");
l("612418");
var P = l("74538"),
  v = l("689938"),
  S = l("824896");
let _ = e => {
    var t;
    let {
      effectIsOwned: l,
      pendingProfileEffectRecord: r,
      product: o,
      purchase: c
    } = e, d = (0, a.useStateFromStores)([I.default], () => I.default.getCurrentUser()), f = (0, a.useStateFromStores)([i.default], () => i.default.getProduct(null == r ? void 0 : r.skuId)), m = (0, a.useStateFromStores)([E.default], () => E.default.locale), h = P.default.canUseCollectibles(d), p = (0, u.isPremiumCollectiblesPurchase)(c), g = (0, u.isPremiumCollectiblesProduct)(o), C = x(!h && p, g, h);
    return null != r ? (0, s.jsx)("div", {
      className: l ? S.effectDescriptionNoGradient : S.effectDescriptionBorderWithGradient,
      children: (0, s.jsxs)("div", {
        className: S.effectDescriptionContainer,
        children: [(0, s.jsx)(n.Text, {
          color: "header-primary",
          variant: "text-sm/semibold",
          className: S.effectName,
          children: null !== (t = null == c ? void 0 : c.name) && void 0 !== t ? t : null == f ? void 0 : f.name
        }), (0, s.jsx)(n.Text, {
          color: "text-normal",
          variant: "text-sm/normal",
          className: S.effectDescription,
          children: null != c ? c.summary : C
        }), null != c && (0, s.jsxs)(n.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: S.effectPurchasedAt,
          children: [v.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
            date: c.purchasedAt.toLocaleDateString(m, {
              month: "long",
              year: "numeric"
            })
          }), p && (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)("br", {}), v.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
          })]
        })]
      })
    }) : null
  },
  x = (e, t, l) => e ? v.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER_CHURNED : t && l ? v.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM : t && !l ? v.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER : v.default.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM;
t.default = e => {
  var t;
  let {
    user: l,
    pendingProfileEffectRecord: n,
    canApplySelectedChange: i,
    product: u,
    purchase: E,
    guild: I
  } = e, {
    pendingGlobalName: v,
    pendingNickname: x,
    pendingPronouns: A,
    pendingBio: N,
    pendingBanner: R,
    pendingAvatar: T,
    pendingAvatarDecoration: M,
    pendingThemeColors: j,
    pendingAccentColor: O
  } = (0, a.useStateFromStoresObject)([c.default, C.default], () => ({
    pendingNickname: void 0,
    pendingGlobalName: void 0,
    pendingAccentColor: void 0,
    ...null != I ? c.default.getAllPending() : C.default.getAllPending()
  })), U = P.default.isPremium(l), L = (0, h.default)(l.id), F = !!(null == L ? void 0 : L.getPreviewBio(N).value), b = p.UseLegacyChatInput.useSetting() && null != N ? d.default.parse(void 0, N).content : N, y = P.default.canUsePremiumProfileCustomization(l), w = (null == L ? void 0 : L.canUsePremiumProfileCustomization) || y, D = {
    user: l,
    guild: I,
    pendingGlobalName: v,
    pendingNickname: x,
    pendingPronouns: A,
    pendingBio: b,
    pendingBanner: R,
    useLargeBanner: !0,
    pendingAvatar: T,
    pendingAvatarDecoration: M,
    pendingThemeColors: j,
    pendingAccentColor: O,
    pendingProfileEffectId: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : null,
    hideFakeActivity: F,
    canUsePremiumCustomization: y,
    onUpsellClick: g.default,
    onAvatarChange: null != I ? o.setPendingAvatar : r.setPendingAvatar,
    onBannerChange: m.setPendingBanner
  };
  return (0, s.jsxs)("div", {
    className: w ? S.previewContainerWithTheme : S.previewContainerWithoutTheme,
    children: [(0, s.jsx)(f.default, {
      ...D,
      disabledInputs: !0,
      forProfileEffectModal: !0,
      hideRecentGames: !0
    }), !1, (0, s.jsx)(_, {
      effectIsOwned: i,
      pendingProfileEffectRecord: n,
      product: u,
      purchase: E,
      userIsPremium: U
    })]
  })
}