"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("512722"),
  i = s.n(l),
  r = s("442837"),
  o = s("570140"),
  d = s("232567"),
  u = s("809206"),
  c = s("497321"),
  S = s("634894"),
  E = s("100527"),
  T = s("906732"),
  _ = s("475977"),
  f = s("957730"),
  m = s("962746"),
  g = s("296810"),
  h = s("935147"),
  N = s("350327"),
  I = s("246946"),
  p = s("25990"),
  C = s("594174"),
  A = s("74538"),
  O = s("695346"),
  x = s("265159"),
  R = s("532495");

function M() {
  let e = (0, r.useStateFromStores)([C.default], () => {
    let e = C.default.getCurrentUser();
    return i()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e
  });
  n.useEffect(() => {
    (0, d.fetchProfile)(e.id)
  }, [e.id]);
  let t = (0, r.useStateFromStores)([I.default], () => I.default.hidePersonalInformation),
    {
      pendingAvatar: s,
      pendingBanner: l,
      pendingBio: M,
      pendingPronouns: v,
      pendingGlobalName: D,
      pendingAccentColor: L,
      pendingAvatarDecoration: P,
      pendingThemeColors: j,
      pendingProfileEffectId: b
    } = (0, r.useStateFromStoresObject)([p.default], () => {
      let e = p.default.getAllPending(),
        t = p.default.getErrors();
      return {
        ...e,
        errors: t
      }
    }),
    U = O.UseLegacyChatInput.useSetting() && null != M ? f.default.parse(void 0, M).content : M,
    y = A.default.canUsePremiumProfileCustomization(e),
    {
      analyticsLocations: B
    } = (0, T.default)(E.default.PROFILE),
    F = {
      user: e,
      canUsePremiumCustomization: y,
      onUpsellClick: x.default,
      onAvatarChange: u.setPendingAvatar,
      onBannerChange: N.setPendingBanner,
      pendingBanner: l,
      pendingBio: U,
      pendingPronouns: v,
      pendingAvatar: s,
      pendingGlobalName: D,
      pendingAvatarDecoration: P,
      pendingProfileEffectId: b
    };
  n.useEffect(() => () => o.default.wait(u.resetAllPending), []);
  let G = "UserSettingsProfileCustomization";
  return ((0, S.useTriggerDebuggingAA)({
    location: G + " auto on",
    autoTrackExposure: !0
  }), (0, S.useTriggerDebuggingAA)({
    location: G + " auto off",
    autoTrackExposure: !1
  }), t) ? (0, a.jsx)(c.default, {}) : (0, a.jsx)(T.AnalyticsLocationProvider, {
    value: B,
    children: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(_.default, {}), (0, a.jsx)(g.default, {
        profilePreview: (0, a.jsx)(m.default, {
          ...F,
          pendingThemeColors: j,
          pendingAccentColor: L
        }),
        children: (0, a.jsx)(R.default, {})
      }), !A.default.canUsePremiumProfileCustomization(e) && (0, a.jsx)(h.default, {
        user: e
      })]
    })
  })
}