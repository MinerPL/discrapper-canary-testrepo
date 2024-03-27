"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var i = n("37983");
n("884691");
var r = n("446674"),
  l = n("77078"),
  s = n("152584"),
  o = n("853987"),
  u = n("491232"),
  a = n("929423"),
  c = n("424562"),
  d = n("884351"),
  f = n("184900"),
  h = n("783142"),
  v = n("217513"),
  m = n("915639"),
  E = n("845579"),
  C = n("415167"),
  g = n("790618"),
  p = n("697218");
n("550515");
var S = n("719923"),
  _ = n("782340"),
  I = n("619986");
let P = e => {
    var t;
    let {
      effectIsOwned: n,
      pendingProfileEffectRecord: s,
      product: a,
      purchase: c
    } = e, d = (0, r.useStateFromStores)([p.default], () => p.default.getCurrentUser()), f = (0, r.useStateFromStores)([o.default], () => o.default.getProduct(null == s ? void 0 : s.skuId)), h = (0, r.useStateFromStores)([m.default], () => m.default.locale), v = S.default.canUseCollectibles(d), E = (0, u.isPremiumCollectiblesPurchase)(c), C = (0, u.isPremiumCollectiblesProduct)(a), g = A(!v && E, C, v);
    return null != s ? (0, i.jsx)("div", {
      className: n ? I.effectDescriptionNoGradient : I.effectDescriptionBorderWithGradient,
      children: (0, i.jsxs)("div", {
        className: I.effectDescriptionContainer,
        children: [(0, i.jsx)(l.Text, {
          color: "header-primary",
          variant: "text-sm/semibold",
          className: I.effectName,
          children: null !== (t = null == c ? void 0 : c.name) && void 0 !== t ? t : null == f ? void 0 : f.name
        }), (0, i.jsx)(l.Text, {
          color: "text-normal",
          variant: "text-sm/normal",
          className: I.effectDescription,
          children: null != c ? c.summary : g
        }), null != c && (0, i.jsxs)(l.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: I.effectPurchasedAt,
          children: [_.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
            date: c.purchasedAt.toLocaleDateString(h, {
              month: "long",
              year: "numeric"
            })
          }), E && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("br", {}), _.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
          })]
        })]
      })
    }) : null
  },
  A = (e, t, n) => e ? _.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER_CHURNED : t && n ? _.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM : t && !n ? _.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER : _.default.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM;
var T = e => {
  var t;
  let {
    user: n,
    pendingProfileEffectRecord: l,
    canApplySelectedChange: o,
    product: u,
    purchase: m,
    guild: p
  } = e, {
    pendingGlobalName: _,
    pendingNickname: A,
    pendingPronouns: T,
    pendingBio: N,
    pendingBanner: x,
    pendingAvatar: M,
    pendingAvatarDecoration: R,
    pendingThemeColors: b,
    pendingAccentColor: y
  } = (0, r.useStateFromStoresObject)([c.default, g.default], () => ({
    pendingNickname: void 0,
    pendingGlobalName: void 0,
    pendingAccentColor: void 0,
    ...null != p ? c.default.getAllPending() : g.default.getAllPending()
  })), L = S.default.isPremium(n), w = (0, v.default)(n.id), j = !!(null == w ? void 0 : w.getPreviewBio(N).value), O = E.UseLegacyChatInput.useSetting(), F = O && null != N ? d.default.parse(void 0, N).content : N, V = S.default.canUsePremiumProfileCustomization(n), U = (null == w ? void 0 : w.canUsePremiumProfileCustomization) || V, D = {
    user: n,
    guild: p,
    pendingGlobalName: _,
    pendingNickname: A,
    pendingPronouns: T,
    pendingBio: F,
    pendingBanner: x,
    useLargeBanner: !0,
    pendingAvatar: M,
    pendingAvatarDecoration: R,
    pendingThemeColors: b,
    pendingAccentColor: y,
    pendingProfileEffectId: null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : null,
    hideFakeActivity: j,
    canUsePremiumCustomization: V,
    onUpsellClick: C.default,
    onAvatarChange: null != p ? a.setPendingAvatar : s.setPendingAvatar,
    onBannerChange: h.setPendingBanner
  };
  return (0, i.jsxs)("div", {
    className: U ? I.previewContainerWithTheme : I.previewContainerWithoutTheme,
    children: [(0, i.jsx)(f.default, {
      ...D,
      disabledInputs: !0,
      forProfileEffectModal: !0
    }), !1, (0, i.jsx)(P, {
      effectIsOwned: o,
      pendingProfileEffectRecord: l,
      product: u,
      purchase: m,
      userIsPremium: L
    })]
  })
}