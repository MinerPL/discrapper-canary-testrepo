"use strict";
n.r(t), n("627341");
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("278074"),
  l = n("721987"),
  u = n("138655"),
  d = n("793397"),
  _ = n("652853"),
  c = n("228168"),
  E = n("194502");
let I = (e, t) => {
    let n = (0, o.match)(e).with(c.UserProfileTypes.MODAL, () => E.userProfileModalOuter).with(c.UserProfileTypes.PANEL, () => E.userPanelOuter).with(c.UserProfileTypes.CARD, () => E.userCardOuter).with(c.UserProfileTypes.BITE_SIZE, () => E.biteSizeOuter).with(c.UserProfileTypes.FULL_SIZE, () => E.fullSizeOuter).otherwise(() => E.userPopoutOuter),
      i = t ? E.userProfileOuterThemed : E.userProfileOuterUnthemed;
    return s()(n, i)
  },
  T = (e, t, n) => {
    let i = (0, o.match)(e).with(c.UserProfileTypes.MODAL, c.UserProfileTypes.FULL_SIZE, () => E.userProfileModalInner).with(c.UserProfileTypes.PANEL, () => E.userPanelInner).with(c.UserProfileTypes.CARD, () => E.userCardInner).otherwise(() => E.userPopoutInner),
      r = (0, o.match)(e).with(c.UserProfileTypes.PANEL, () => E.userPanelInnerThemed).with(c.UserProfileTypes.BITE_SIZE, () => E.biteSizeInnerThemed).with(c.UserProfileTypes.FULL_SIZE, () => E.fullSizeInnerThemed).otherwise(() => (0, d.buildGetPremiumUserBannerStyles)({
        premiumUserWithBanner: E.userProfileInnerThemedWithBanner,
        premiumUserWithoutBanner: E.userProfileInnerThemedPremiumWithoutBanner,
        default: E.userProfileInnerThemedNonPremium
      })({
        isPremium: t,
        hasBanner: n
      }));
    return s()(i, r)
  },
  f = r.forwardRef(function(e, t) {
    let {
      user: n,
      displayProfile: r,
      profileType: a,
      className: o,
      pendingThemeColors: d,
      pendingProfileEffectId: c,
      themeOverride: f,
      children: S,
      forceShowPremium: h = !1,
      showOutOfBoundaryComponents: A = !1
    } = e, {
      theme: m,
      primaryColor: N,
      secondaryColor: p
    } = (0, l.default)({
      user: n,
      displayProfile: r,
      pendingThemeColors: d,
      isPreview: h
    }), {
      profileThemeStyle: O,
      profileThemeClassName: R
    } = (0, u.default)({
      theme: null != f ? f : m,
      primaryColor: N,
      secondaryColor: p
    }), C = (null == r ? void 0 : r.canEditThemes) || h, g = null !== c && ((null == r ? void 0 : r.banner) != null || void 0 !== c);
    return (0, i.jsx)("div", {
      className: s()(I(a, C), A ? E.showOutOfBoundaryComponents : void 0, R, o),
      style: O,
      ref: t,
      children: (0, i.jsx)("div", {
        className: T(a, C, g),
        children: (0, i.jsx)(_.UserProfileThemeContextProvider, {
          profileType: a,
          theme: null != f ? f : m,
          primaryColor: N,
          secondaryColor: p,
          children: S
        })
      })
    })
  }),
  S = e => (0, o.match)(e).with(c.UserProfileTypes.POPOUT, c.UserProfileTypes.SETTINGS, () => E.userPopoutOverlayBackground).with(c.UserProfileTypes.MODAL, () => E.userProfileModalOverlayBackground).with(c.UserProfileTypes.PANEL, () => E.userPanelOverlayBackground).with(c.UserProfileTypes.BITE_SIZE, () => E.biteSizeOverlayBackground).with(c.UserProfileTypes.FULL_SIZE, () => E.fullSizeOverlayBackground).otherwise(() => E.overlayBackground);
t.default = Object.assign(f, {
  Overlay: function(e) {
    let {
      children: t,
      className: n
    } = e, {
      profileType: r
    } = (0, _.useUserProfileThemeContext)();
    return (0, i.jsx)("div", {
      className: s()(S(r), n),
      children: t
    })
  }
})