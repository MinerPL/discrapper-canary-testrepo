"use strict";
l.r(t);
var s = l("735250");
l("470079");
var a = l("442837"),
  r = l("481060"),
  n = l("809206"),
  i = l("597688"),
  o = l("884697"),
  u = l("18438"),
  c = l("778825"),
  d = l("957730"),
  f = l("962746"),
  h = l("350327"),
  m = l("318661"),
  g = l("706454"),
  C = l("695346"),
  E = l("265159"),
  p = l("25990"),
  v = l("594174");
l("612418");
var P = l("74538"),
  S = l("689938"),
  I = l("21281");
let x = e => {
    var t;
    let {
      effectIsOwned: l,
      pendingProfileEffectRecord: n,
      product: u,
      purchase: c
    } = e, d = (0, a.useStateFromStores)([v.default], () => v.default.getCurrentUser()), f = (0, a.useStateFromStores)([i.default], () => i.default.getProduct(null == n ? void 0 : n.skuId)), h = (0, a.useStateFromStores)([g.default], () => g.default.locale), m = P.default.canUseCollectibles(d), C = (0, o.isPremiumCollectiblesPurchase)(c), E = (0, o.isPremiumCollectiblesProduct)(u), p = A(!m && C, E, m);
    return null != n ? (0, s.jsx)("div", {
      className: l ? I.effectDescriptionNoGradient : I.effectDescriptionBorderWithGradient,
      children: (0, s.jsxs)("div", {
        className: I.effectDescriptionContainer,
        children: [(0, s.jsx)(r.Text, {
          color: "header-primary",
          variant: "text-sm/semibold",
          className: I.effectName,
          children: null !== (t = null == c ? void 0 : c.name) && void 0 !== t ? t : null == f ? void 0 : f.name
        }), (0, s.jsx)(r.Text, {
          color: "text-normal",
          variant: "text-sm/normal",
          className: I.effectDescription,
          children: null != c ? c.summary : p
        }), null != c && (0, s.jsxs)(r.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: I.effectPurchasedAt,
          children: [S.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
            date: c.purchasedAt.toLocaleDateString(h, {
              month: "long",
              year: "numeric"
            })
          }), C && (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)("br", {}), S.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
          })]
        })]
      })
    }) : null
  },
  A = (e, t, l) => e ? S.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER_CHURNED : t && l ? S.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM : t && !l ? S.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER : S.default.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM;
t.default = e => {
  var t;
  let {
    user: l,
    pendingProfileEffectRecord: r,
    canApplySelectedChange: i,
    product: o,
    purchase: g,
    guild: v
  } = e, {
    pendingGlobalName: S,
    pendingNickname: A,
    pendingPronouns: _,
    pendingBio: T,
    pendingBanner: N,
    pendingAvatar: R,
    pendingAvatarDecoration: b,
    pendingThemeColors: F,
    pendingAccentColor: M
  } = (0, a.useStateFromStoresObject)([c.default, p.default], () => ({
    pendingNickname: void 0,
    pendingGlobalName: void 0,
    pendingAccentColor: void 0,
    ...null != v ? c.default.getAllPending() : p.default.getAllPending()
  })), j = P.default.isPremium(l), O = (0, m.default)(l.id), y = !!(null == O ? void 0 : O.getPreviewBio(T).value), L = C.UseLegacyChatInput.useSetting() && null != T ? d.default.parse(void 0, T).content : T, w = P.default.canUsePremiumProfileCustomization(l), D = (null == O ? void 0 : O.canUsePremiumProfileCustomization) || w, U = {
    user: l,
    guild: v,
    pendingGlobalName: S,
    pendingNickname: A,
    pendingPronouns: _,
    pendingBio: L,
    pendingBanner: N,
    useLargeBanner: !0,
    pendingAvatar: R,
    pendingAvatarDecoration: b,
    pendingThemeColors: F,
    pendingAccentColor: M,
    pendingProfileEffectId: null !== (t = null == r ? void 0 : r.id) && void 0 !== t ? t : null,
    hideFakeActivity: y,
    canUsePremiumCustomization: w,
    onUpsellClick: E.default,
    onAvatarChange: null != v ? u.setPendingAvatar : n.setPendingAvatar,
    onBannerChange: h.setPendingBanner
  };
  return (0, s.jsxs)("div", {
    className: D ? I.previewContainerWithTheme : I.previewContainerWithoutTheme,
    children: [(0, s.jsx)(f.default, {
      ...U,
      disabledInputs: !0,
      forProfileEffectModal: !0
    }), !1, (0, s.jsx)(x, {
      effectIsOwned: i,
      pendingProfileEffectRecord: r,
      product: o,
      purchase: g,
      userIsPremium: j
    })]
  })
}