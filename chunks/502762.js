"use strict";
n(627341);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(278074),
  l = n(721987),
  u = n(138655),
  _ = n(793397),
  d = n(652853),
  c = n(228168),
  E = n(983094);
let I = (e, t) => {
    let n = (0, a.EQ)(e).with(c.y0.MODAL, () => E.userProfileModalOuter).with(c.y0.PANEL, () => E.userPanelOuter).with(c.y0.CARD, () => E.userCardOuter).with(c.y0.BITE_SIZE, () => E.biteSizeOuter).with(c.y0.FULL_SIZE, () => E.fullSizeOuter).otherwise(() => E.userPopoutOuter),
      i = t ? E.userProfileOuterThemed : E.userProfileOuterUnthemed;
    return o()(n, i)
  },
  T = (e, t, n) => {
    let i = (0, a.EQ)(e).with(c.y0.MODAL, c.y0.FULL_SIZE, () => E.userProfileModalInner).with(c.y0.PANEL, () => E.userPanelInner).with(c.y0.CARD, () => E.userCardInner).otherwise(() => E.userPopoutInner),
      r = (0, a.EQ)(e).with(c.y0.PANEL, () => E.userPanelInnerThemed).with(c.y0.BITE_SIZE, () => E.biteSizeInnerThemed).with(c.y0.FULL_SIZE, () => E.fullSizeInnerThemed).otherwise(() => (0, _.zW)({
        premiumUserWithBanner: E.userProfileInnerThemedWithBanner,
        premiumUserWithoutBanner: E.userProfileInnerThemedPremiumWithoutBanner,
        default: E.userProfileInnerThemedNonPremium
      })({
        isPremium: t,
        hasBanner: n
      }));
    return o()(i, r)
  },
  h = r.forwardRef(function(e, t) {
    let {
      user: n,
      displayProfile: r,
      profileType: s,
      className: a,
      pendingThemeColors: _,
      pendingProfileEffectId: c,
      themeOverride: h,
      children: S,
      forceShowPremium: f = !1,
      showOutOfBoundaryComponents: N = !1
    } = e, {
      theme: A,
      primaryColor: m,
      secondaryColor: O
    } = (0, l.Z)({
      user: n,
      displayProfile: r,
      pendingThemeColors: _,
      isPreview: f
    }), {
      profileThemeStyle: R,
      profileThemeClassName: C
    } = (0, u.Z)({
      theme: null != h ? h : A,
      primaryColor: m,
      secondaryColor: O
    }), p = (null == r ? void 0 : r.canEditThemes) || f, g = null !== c && ((null == r ? void 0 : r.banner) != null || void 0 !== c);
    return (0, i.jsx)("div", {
      className: o()(I(s, p), N ? E.showOutOfBoundaryComponents : void 0, C, a),
      style: R,
      ref: t,
      children: (0, i.jsx)("div", {
        className: T(s, p, g),
        children: (0, i.jsx)(d.X, {
          profileType: s,
          theme: null != h ? h : A,
          primaryColor: m,
          secondaryColor: O,
          children: S
        })
      })
    })
  }),
  S = e => (0, a.EQ)(e).with(c.y0.POPOUT, c.y0.SETTINGS, () => E.userPopoutOverlayBackground).with(c.y0.MODAL, () => E.userProfileModalOverlayBackground).with(c.y0.BITE_SIZE, () => E.biteSizeOverlayBackground).with(c.y0.FULL_SIZE, () => E.fullSizeOverlayBackground).otherwise(() => E.overlayBackground);
t.Z = Object.assign(h, {
  Overlay: function(e) {
    let {
      children: t,
      className: n
    } = e, {
      profileType: r
    } = (0, d.z)();
    return (0, i.jsx)("div", {
      className: o()(S(r), n),
      children: t
    })
  }
})