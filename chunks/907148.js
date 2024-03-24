"use strict";
s.r(t), s.d(t, {
  default: function() {
    return P
  }
});
var a = s("37983");
s("884691");
var n = s("627445"),
  l = s.n(n),
  i = s("446674"),
  r = s("152584"),
  o = s("875212"),
  d = s("956967"),
  u = s("906932"),
  c = s("702877"),
  S = s("668688"),
  E = s("447645"),
  T = s("569460"),
  f = s("97747"),
  _ = s("52704"),
  m = s("79685"),
  g = s("741781"),
  h = s("121370"),
  N = s("370505"),
  I = s("687006"),
  p = s("783142"),
  C = s("713135"),
  A = s("217513"),
  O = s("75326"),
  x = s("790618"),
  R = s("697218"),
  M = s("719923"),
  D = s("49111"),
  v = s("782340"),
  L = s("141990");

function P() {
  var e, t, s, n, P, j, b, U;
  let y = (0, i.useStateFromStores)([R.default], () => {
      let e = R.default.getCurrentUser();
      return l(null != e, "DefaultCustomizationSections: user cannot be undefined"), e
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
      sectionTitle: v.default.Messages.USER_SETTINGS_PRONOUNS,
      errors: K.pronouns,
      onPronounsChange: p.setPendingPronouns,
      pendingPronouns: w,
      currentPronouns: null !== (b = null == B ? void 0 : B.pronouns) && void 0 !== b ? b : ""
    }, "pronouns"), (0, a.jsx)(E.default, {
      onAvatarChange: r.setPendingAvatar,
      showRemoveAvatarButton: Q,
      errors: K.avatar,
      sectionTitle: v.default.Messages.USER_SETTINGS_AVATAR,
      forcedDivider: !0
    }, "avatar"), (0, a.jsx)(S.default, {
      user: y,
      sectionTitle: v.default.Messages.USER_SETTINGS_AVATAR_DECORATION
    }, "decoration"), (0, a.jsx)(g.default, {
      user: y,
      sectionTitle: v.default.Messages.USER_SETTINGS_PROFILE_EFFECT
    }, "effect"), z ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(_.default, {
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
      sectionTitle: v.default.Messages.USER_SETTINGS_ABOUT_ME,
      errors: ee,
      onBioChange: e => {
        (0, u.setNewPendingUserBio)(e, null == B ? void 0 : B.bio), (0, r.setDisableSubmit)(null != e && e.length > D.BIO_MAX_LENGTH)
      },
      pendingBio: H,
      currentBio: null !== (U = null == B ? void 0 : B.bio) && void 0 !== U ? U : ""
    }, "bio"), et && (0, a.jsx)(I.default, {}), null != J && (0, a.jsx)(f.default, {
      legacyUsername: J
    }, "legacy_username")]
  })
}