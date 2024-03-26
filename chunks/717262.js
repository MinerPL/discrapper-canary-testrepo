"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var r = n("37983");
n("884691");
var i = n("446674"),
  s = n("77078"),
  l = n("152584"),
  a = n("853987"),
  o = n("491232"),
  u = n("929423"),
  c = n("424562"),
  d = n("884351"),
  f = n("184900"),
  h = n("783142"),
  E = n("217513"),
  v = n("915639"),
  m = n("845579"),
  C = n("415167"),
  p = n("790618"),
  S = n("697218");
n("550515");
var g = n("719923"),
  _ = n("782340"),
  I = n("619986");
let T = e => {
    var t;
    let {
      effectIsOwned: n,
      pendingProfileEffectRecord: l,
      product: u,
      purchase: c
    } = e, d = (0, i.useStateFromStores)([S.default], () => S.default.getCurrentUser()), f = (0, i.useStateFromStores)([a.default], () => a.default.getProduct(null == l ? void 0 : l.skuId)), h = (0, i.useStateFromStores)([v.default], () => v.default.locale), E = g.default.canUseCollectibles(d), m = (0, o.isPremiumCollectiblesPurchase)(c), C = (0, o.isPremiumCollectiblesProduct)(u), p = N(!E && m, C, E);
    return null != l ? (0, r.jsx)("div", {
      className: n ? I.effectDescriptionNoGradient : I.effectDescriptionBorderWithGradient,
      children: (0, r.jsxs)("div", {
        className: I.effectDescriptionContainer,
        children: [(0, r.jsx)(s.Text, {
          color: "header-primary",
          variant: "text-sm/semibold",
          className: I.effectName,
          children: null !== (t = null == c ? void 0 : c.name) && void 0 !== t ? t : null == f ? void 0 : f.name
        }), (0, r.jsx)(s.Text, {
          color: "text-normal",
          variant: "text-sm/normal",
          className: I.effectDescription,
          children: null != c ? c.summary : p
        }), null != c && (0, r.jsxs)(s.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: I.effectPurchasedAt,
          children: [_.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
            date: c.purchasedAt.toLocaleDateString(h, {
              month: "long",
              year: "numeric"
            })
          }), m && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("br", {}), _.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
          })]
        })]
      })
    }) : null
  },
  N = (e, t, n) => e ? _.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER_CHURNED : t && n ? _.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM : t && !n ? _.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER : _.default.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM;
var A = e => {
  var t;
  let {
    user: n,
    pendingProfileEffectRecord: s,
    canApplySelectedChange: a,
    product: o,
    purchase: v,
    guild: S
  } = e, {
    pendingGlobalName: _,
    pendingNickname: N,
    pendingPronouns: A,
    pendingBio: x,
    pendingBanner: P,
    pendingAvatar: R,
    pendingAvatarDecoration: M,
    pendingThemeColors: L,
    pendingAccentColor: y
  } = (0, i.useStateFromStoresObject)([c.default, p.default], () => ({
    pendingNickname: void 0,
    pendingGlobalName: void 0,
    pendingAccentColor: void 0,
    ...null != S ? c.default.getAllPending() : p.default.getAllPending()
  })), b = g.default.isPremium(n), w = (0, E.default)(n.id), j = !!(null == w ? void 0 : w.getPreviewBio(x).value), O = m.UseLegacyChatInput.useSetting(), F = O && null != x ? d.default.parse(void 0, x).content : x, V = g.default.canUsePremiumProfileCustomization(n), H = (null == w ? void 0 : w.canUsePremiumProfileCustomization) || V, D = {
    user: n,
    guild: S,
    pendingGlobalName: _,
    pendingNickname: N,
    pendingPronouns: A,
    pendingBio: F,
    pendingBanner: P,
    useLargeBanner: !0,
    pendingAvatar: R,
    pendingAvatarDecoration: M,
    pendingThemeColors: L,
    pendingAccentColor: y,
    pendingProfileEffectId: null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : null,
    hideFakeActivity: j,
    canUsePremiumCustomization: V,
    onUpsellClick: C.default,
    onAvatarChange: null != S ? u.setPendingAvatar : l.setPendingAvatar,
    onBannerChange: h.setPendingBanner
  };
  return (0, r.jsxs)("div", {
    className: H ? I.previewContainerWithTheme : I.previewContainerWithoutTheme,
    children: [(0, r.jsx)(f.default, {
      ...D,
      disabledInputs: !0,
      forProfileEffectModal: !0
    }), !1, (0, r.jsx)(T, {
      effectIsOwned: a,
      pendingProfileEffectRecord: s,
      product: o,
      purchase: v,
      userIsPremium: b
    })]
  })
}