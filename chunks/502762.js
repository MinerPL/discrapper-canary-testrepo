n(627341);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(278074),
  l = n(481060),
  u = n(721987),
  c = n(138655),
  d = n(793397),
  _ = n(652853),
  E = n(228168),
  f = n(907823);
let h = (e, t) => {
let n = (0, o.EQ)(e).with(E.y0.MODAL, () => f.userProfileModalOuter).with(E.y0.PANEL, () => f.userPanelOuter).with(E.y0.CARD, () => f.userCardOuter).with(E.y0.BITE_SIZE, () => f.biteSizeOuter).with(E.y0.FULL_SIZE, () => f.fullSizeOuter).otherwise(() => f.userPopoutOuter),
  r = t ? f.userProfileOuterThemed : f.userProfileOuterUnthemed;
return s()(n, r);
  },
  p = (e, t, n) => {
let r = (0, o.EQ)(e).with(E.y0.MODAL, E.y0.FULL_SIZE, () => f.userProfileModalInner).with(E.y0.PANEL, () => f.userPanelInner).with(E.y0.CARD, () => f.userCardInner).otherwise(() => f.userPopoutInner),
  i = (0, o.EQ)(e).with(E.y0.PANEL, () => f.userPanelInnerThemed).with(E.y0.BITE_SIZE, () => f.biteSizeInnerThemed).with(E.y0.FULL_SIZE, () => f.fullSizeInnerThemed).otherwise(() => (0, d.zW)({
    premiumUserWithBanner: f.userProfileInnerThemedWithBanner,
    premiumUserWithoutBanner: f.userProfileInnerThemedPremiumWithoutBanner,
    default: f.userProfileInnerThemedNonPremium
  })({
    isPremium: t,
    hasBanner: n
  }));
return s()(r, i);
  },
  m = i.forwardRef(function(e, t) {
let {
  user: n,
  displayProfile: i,
  profileType: a,
  className: o,
  pendingThemeColors: d,
  pendingProfileEffectId: E,
  themeOverride: m,
  children: I,
  forceShowPremium: T = !1,
  showOutOfBoundaryComponents: g = !1
} = e, {
  theme: S,
  primaryColor: A,
  secondaryColor: N
} = (0, u.Z)({
  user: n,
  displayProfile: i,
  pendingThemeColors: d,
  isPreview: T
}), {
  profileThemeStyle: v,
  profileThemeClassName: O
} = (0, c.Z)({
  theme: null != m ? m : S,
  primaryColor: A,
  secondaryColor: N
}), R = (null == i ? void 0 : i.canEditThemes) || T, C = null !== E && ((null == i ? void 0 : i.banner) != null || void 0 !== E);
return (0, r.jsx)('div', {
  className: s()(h(a, R), g ? f.showOutOfBoundaryComponents : void 0, O, o),
  style: v,
  ref: t,
  children: (0, r.jsx)('div', {
    className: p(a, R, C),
    children: (0, r.jsx)(l.ThemeContextProvider, {
      theme: null != m ? m : S,
      children: (0, r.jsx)(_.X, {
        profileType: a,
        theme: null != m ? m : S,
        primaryColor: A,
        secondaryColor: N,
        children: I
      })
    })
  })
});
  }),
  I = e => (0, o.EQ)(e).with(E.y0.POPOUT, E.y0.SETTINGS, () => f.userPopoutOverlayBackground).with(E.y0.MODAL, () => f.userProfileModalOverlayBackground).with(E.y0.BITE_SIZE, () => f.biteSizeOverlayBackground).with(E.y0.FULL_SIZE, () => f.fullSizeOverlayBackground).otherwise(() => f.overlayBackground);
t.Z = Object.assign(m, {
  Overlay: function(e) {
let {
  children: t,
  className: n
} = e, {
  profileType: i
} = (0, _.z)();
return (0, r.jsx)('div', {
  className: s()(I(i), n),
  children: t
});
  }
});