"use strict";
s.r(t), s.d(t, {
  default: function() {
    return P
  }
});
var a = s("735250");
s("470079");
var n = s("512722"),
  l = s.n(n),
  i = s("442837"),
  r = s("809206"),
  o = s("634894"),
  d = s("295474"),
  u = s("150039"),
  c = s("126631"),
  S = s("433411"),
  E = s("532432"),
  T = s("349177"),
  _ = s("872736"),
  f = s("134795"),
  m = s("610966"),
  g = s("513901"),
  h = s("451392"),
  N = s("906364"),
  I = s("676934"),
  p = s("350327"),
  C = s("621853"),
  A = s("318661"),
  O = s("619914"),
  x = s("25990"),
  R = s("594174"),
  M = s("74538"),
  v = s("981631"),
  D = s("689938"),
  L = s("602669");

function P() {
  var e, t, s, n, P, j, b, U;
  let y = (0, i.useStateFromStores)([R.default], () => {
      let e = R.default.getCurrentUser();
      return l()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e
    }),
    B = (0, i.useStateFromStores)([C.default], () => C.default.getUserProfile(y.id)),
    {
      pendingAvatar: F,
      pendingGlobalName: G,
      pendingBanner: k,
      pendingBio: H,
      pendingPronouns: w,
      pendingAccentColor: V,
      pendingThemeColors: Y,
      errors: K
    } = (0, i.useStateFromStoresObject)([x.default], () => {
      let e = x.default.getAllPending(),
        t = x.default.getErrors();
      return {
        ...e,
        errors: t
      }
    }),
    W = (0, d.useGuildAutomodProfileQuarantineErrors)(),
    z = M.default.canUsePremiumProfileCustomization(y),
    Q = (0, u.showRemoveAvatar)(F, y.avatar),
    X = (0, u.showRemoveBanner)(k, null == B ? void 0 : B.banner),
    q = "DefaultCustomizationSections";
  (0, o.useTriggerDebuggingAA)({
    location: q + " auto on",
    autoTrackExposure: !0
  }), (0, o.useTriggerDebuggingAA)({
    location: q + " auto off",
    autoTrackExposure: !1
  });
  let Z = (0, A.default)(y.id),
    J = null == Z ? void 0 : Z.getLegacyUsername(),
    $ = (null !== (s = null === (e = K.global_name) || void 0 === e ? void 0 : e.length) && void 0 !== s ? s : 0) > 0 ? K.global_name : null !== (n = null == W ? void 0 : W.nick) && void 0 !== n ? n : [],
    ee = (null !== (P = null === (t = K.bio) || void 0 === t ? void 0 : t.length) && void 0 !== P ? P : 0) > 0 ? K.bio : null !== (j = null == W ? void 0 : W.bio) && void 0 !== j ? j : [],
    et = (0, O.useUserIsRecentGamesExperimentEnabled)({
      location: "28tk0rv_1",
      autoTrackExposure: !0
    });
  return (0, a.jsxs)("div", {
    className: L.sectionsContainer,
    children: [(0, a.jsx)(T.default, {
      placeholder: y.username,
      errors: $,
      currentGlobalName: y.globalName,
      pendingGlobalName: G,
      onGlobalNameChange: r.setPendingGlobalNameName
    }), (0, a.jsx)(N.default, {
      sectionTitle: D.default.Messages.USER_SETTINGS_PRONOUNS,
      errors: K.pronouns,
      onPronounsChange: p.setPendingPronouns,
      pendingPronouns: w,
      currentPronouns: null !== (b = null == B ? void 0 : B.pronouns) && void 0 !== b ? b : ""
    }, "pronouns"), (0, a.jsx)(E.default, {
      onAvatarChange: r.setPendingAvatar,
      showRemoveAvatarButton: Q,
      errors: K.avatar,
      sectionTitle: D.default.Messages.USER_SETTINGS_AVATAR,
      forcedDivider: !0
    }, "avatar"), (0, a.jsx)(S.default, {
      user: y,
      sectionTitle: D.default.Messages.USER_SETTINGS_AVATAR_DECORATION
    }, "decoration"), (0, a.jsx)(g.default, {
      user: y,
      sectionTitle: D.default.Messages.USER_SETTINGS_PROFILE_EFFECT
    }, "effect"), z ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(f.default, {
        showRemoveBannerButton: X,
        errors: K.banner,
        onBannerChange: p.setPendingBanner,
        forcedDivider: !0
      }, "banner"), (0, a.jsx)(h.default, {
        user: y,
        pendingAvatar: F,
        pendingColors: Y,
        onThemeColorsChange: p.setPendingThemeColors,
        forcedDivider: !0
      })]
    }) : (0, a.jsx)(m.default, {
      user: y,
      savedUserColor: null == B ? void 0 : B.accentColor,
      pendingColor: V,
      setPendingAccentColor: p.setPendingAccentColor
    }, "color"), (0, a.jsx)(c.default, {
      sectionTitle: D.default.Messages.USER_SETTINGS_ABOUT_ME,
      errors: ee,
      onBioChange: e => {
        (0, u.setNewPendingUserBio)(e, null == B ? void 0 : B.bio), (0, r.setDisableSubmit)(null != e && e.length > v.BIO_MAX_LENGTH)
      },
      pendingBio: H,
      currentBio: null !== (U = null == B ? void 0 : B.bio) && void 0 !== U ? U : ""
    }, "bio"), et && (0, a.jsx)(I.default, {}), null != J && (0, a.jsx)(_.default, {
      legacyUsername: J
    }, "legacy_username")]
  })
}