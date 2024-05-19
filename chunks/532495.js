"use strict";
s.r(t), s.d(t, {
  default: function() {
    return b
  }
});
var a = s("735250");
s("470079");
var n = s("512722"),
  l = s.n(n),
  i = s("442837"),
  r = s("809206"),
  o = s("634894"),
  d = s("954138"),
  u = s("891728"),
  c = s("328783"),
  S = s("295474"),
  E = s("150039"),
  T = s("126631"),
  f = s("433411"),
  _ = s("532432"),
  m = s("349177"),
  g = s("872736"),
  I = s("134795"),
  h = s("610966"),
  N = s("513901"),
  p = s("451392"),
  C = s("906364"),
  A = s("676934"),
  O = s("350327"),
  x = s("621853"),
  R = s("318661"),
  M = s("619914"),
  v = s("25990"),
  L = s("594174"),
  D = s("74538"),
  P = s("689938"),
  j = s("741129");

function b() {
  var e, t, s, n, b, U, y, B;
  let G = (0, i.useStateFromStores)([L.default], () => {
      let e = L.default.getCurrentUser();
      return l()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e
    }),
    F = (0, i.useStateFromStores)([x.default], () => x.default.getUserProfile(G.id)),
    {
      pendingAvatar: k,
      pendingGlobalName: w,
      pendingBanner: H,
      pendingBio: V,
      pendingPronouns: Y,
      pendingAccentColor: W,
      pendingThemeColors: K,
      errors: z
    } = (0, i.useStateFromStoresObject)([v.default], () => {
      let e = v.default.getAllPending(),
        t = v.default.getErrors();
      return {
        ...e,
        errors: t
      }
    }),
    Q = (0, S.useGuildAutomodProfileQuarantineErrors)(),
    q = D.default.canUsePremiumProfileCustomization(G),
    Z = (0, E.showRemoveAvatar)(k, G.avatar),
    X = (0, E.showRemoveBanner)(H, null == F ? void 0 : F.banner),
    J = "DefaultCustomizationSections";
  (0, o.useTriggerDebuggingAA)({
    location: J + " auto on",
    autoTrackExposure: !0
  }), (0, o.useTriggerDebuggingAA)({
    location: J + " auto off",
    autoTrackExposure: !1
  });
  let $ = (0, R.default)(G.id),
    ee = null == $ ? void 0 : $.getLegacyUsername(),
    et = (null !== (s = null === (e = z.global_name) || void 0 === e ? void 0 : e.length) && void 0 !== s ? s : 0) > 0 ? z.global_name : null !== (n = null == Q ? void 0 : Q.nick) && void 0 !== n ? n : [],
    es = (null !== (b = null === (t = z.bio) || void 0 === t ? void 0 : t.length) && void 0 !== b ? b : 0) > 0 ? z.bio : null !== (U = null == Q ? void 0 : Q.bio) && void 0 !== U ? U : [],
    ea = (0, M.useUserIsRecentGamesExperimentEnabled)({
      location: "28tk0bf_7",
      autoTrackExposure: !0
    }),
    en = (0, d.default)("user_profile"),
    el = (0, u.useCurrentUserAvailableClans)();
  return (0, a.jsxs)("div", {
    className: j.sectionsContainer,
    children: [(0, a.jsx)(m.default, {
      placeholder: G.username,
      errors: et,
      currentGlobalName: G.globalName,
      pendingGlobalName: w,
      onGlobalNameChange: r.setPendingGlobalNameName
    }), (0, a.jsx)(C.default, {
      sectionTitle: P.default.Messages.USER_SETTINGS_PRONOUNS,
      errors: z.pronouns,
      onPronounsChange: O.setPendingPronouns,
      pendingPronouns: Y,
      currentPronouns: null !== (y = null == F ? void 0 : F.pronouns) && void 0 !== y ? y : ""
    }, "pronouns"), (0, a.jsx)(_.default, {
      onAvatarChange: r.setPendingAvatar,
      showRemoveAvatarButton: Z,
      errors: z.avatar,
      sectionTitle: P.default.Messages.USER_SETTINGS_AVATAR,
      forcedDivider: !0
    }, "avatar"), (0, a.jsx)(f.default, {
      user: G,
      sectionTitle: P.default.Messages.USER_SETTINGS_AVATAR_DECORATION
    }, "decoration"), (0, a.jsx)(N.default, {
      user: G,
      sectionTitle: P.default.Messages.USER_SETTINGS_PROFILE_EFFECT
    }, "effect"), q ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(I.default, {
        showRemoveBannerButton: X,
        errors: z.banner,
        onBannerChange: O.setPendingBanner,
        forcedDivider: !0
      }, "banner"), (0, a.jsx)(p.default, {
        user: G,
        pendingAvatar: k,
        pendingColors: K,
        onThemeColorsChange: O.setPendingThemeColors,
        forcedDivider: !0
      })]
    }) : (0, a.jsx)(h.default, {
      user: G,
      savedUserColor: null == F ? void 0 : F.accentColor,
      pendingColor: W,
      setPendingAccentColor: O.setPendingAccentColor
    }, "color"), (0, a.jsx)(T.default, {
      sectionTitle: P.default.Messages.USER_SETTINGS_ABOUT_ME,
      errors: es,
      onBioChange: e => (0, E.setNewPendingUserBio)(e, null == F ? void 0 : F.bio),
      pendingBio: V,
      currentBio: null !== (B = null == F ? void 0 : F.bio) && void 0 !== B ? B : ""
    }, "bio"), en && el.length > 0 && (0, a.jsx)(c.default, {
      availableClans: el
    }), ea && (0, a.jsx)(A.default, {}), null != ee && (0, a.jsx)(g.default, {
      legacyUsername: ee
    }, "legacy_username")]
  })
}