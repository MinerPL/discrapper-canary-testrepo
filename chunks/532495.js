s.d(t, {
  Z: function() {
return b;
  }
});
var n = s(735250);
s(470079);
var a = s(512722),
  i = s.n(a),
  r = s(442837),
  o = s(809206),
  l = s(634894),
  c = s(954138),
  d = s(891728),
  _ = s(328783),
  E = s(295474),
  u = s(150039),
  T = s(126631),
  I = s(433411),
  S = s(532432),
  N = s(349177),
  C = s(872736),
  m = s(134795),
  A = s(610966),
  g = s(513901),
  h = s(451392),
  O = s(906364),
  p = s(350327),
  R = s(621853),
  x = s(318661),
  M = s(25990),
  f = s(594174),
  D = s(74538),
  P = s(689938),
  L = s(121223);

function b() {
  var e, t, s, a, b, Z, v, j;
  let B = (0, r.e7)([f.default], () => {
  let e = f.default.getCurrentUser();
  return i()(null != e, 'DefaultCustomizationSections: user cannot be undefined'), e;
}),
U = (0, r.e7)([R.Z], () => R.Z.getUserProfile(B.id)),
{
  pendingAvatar: G,
  pendingGlobalName: F,
  pendingBanner: y,
  pendingBio: V,
  pendingPronouns: Y,
  pendingAccentColor: w,
  pendingThemeColors: k,
  errors: H
} = (0, r.cj)([M.Z], () => {
  let e = M.Z.getAllPending(),
    t = M.Z.getErrors();
  return {
    ...e,
    errors: t
  };
}),
W = (0, E.gS)(),
K = D.ZP.canUsePremiumProfileCustomization(B),
z = (0, u.gd)(G, B.avatar),
Q = (0, u.f$)(y, null == U ? void 0 : U.banner),
X = 'DefaultCustomizationSections';
  (0, l.j)({
location: X + ' auto on',
autoTrackExposure: !0
  }), (0, l.j)({
location: X + ' auto off',
autoTrackExposure: !1
  });
  let q = (0, x.ZP)(B.id),
J = null == q ? void 0 : q.getLegacyUsername(),
$ = (null !== (s = null === (e = H.global_name) || void 0 === e ? void 0 : e.length) && void 0 !== s ? s : 0) > 0 ? H.global_name : null !== (a = null == W ? void 0 : W.nick) && void 0 !== a ? a : [],
ee = (null !== (b = null === (t = H.bio) || void 0 === t ? void 0 : t.length) && void 0 !== b ? b : 0) > 0 ? H.bio : null !== (Z = null == W ? void 0 : W.bio) && void 0 !== Z ? Z : [],
et = (0, c.Z)('user_profile'),
es = (0, d.V)();
  return (0, n.jsxs)('div', {
className: L.sectionsContainer,
children: [
  (0, n.jsx)(N.Z, {
    placeholder: B.username,
    errors: $,
    currentGlobalName: B.globalName,
    pendingGlobalName: F,
    onGlobalNameChange: o.UZ
  }),
  (0, n.jsx)(O.Z, {
    sectionTitle: P.Z.Messages.USER_SETTINGS_PRONOUNS,
    errors: H.pronouns,
    onPronounsChange: p.ID,
    pendingPronouns: Y,
    currentPronouns: null !== (v = null == U ? void 0 : U.pronouns) && void 0 !== v ? v : ''
  }, 'pronouns'),
  (0, n.jsx)(S.Z, {
    onAvatarChange: o.I5,
    showRemoveAvatarButton: z,
    errors: H.avatar,
    sectionTitle: P.Z.Messages.USER_SETTINGS_AVATAR,
    forcedDivider: !0
  }, 'avatar'),
  (0, n.jsx)(I.Z, {
    user: B,
    sectionTitle: P.Z.Messages.USER_SETTINGS_AVATAR_DECORATION
  }, 'decoration'),
  (0, n.jsx)(g.Z, {
    user: B,
    sectionTitle: P.Z.Messages.USER_SETTINGS_PROFILE_EFFECT
  }, 'effect'),
  K ? (0, n.jsxs)(n.Fragment, {
    children: [
      (0, n.jsx)(m.Z, {
        showRemoveBannerButton: Q,
        errors: H.banner,
        onBannerChange: p.g_,
        forcedDivider: !0
      }, 'banner'),
      (0, n.jsx)(h.Z, {
        user: B,
        pendingAvatar: G,
        pendingColors: k,
        onThemeColorsChange: p.z5,
        forcedDivider: !0
      })
    ]
  }) : (0, n.jsx)(A.Z, {
    user: B,
    savedUserColor: null == U ? void 0 : U.accentColor,
    pendingColor: w,
    setPendingAccentColor: p.CM
  }, 'color'),
  (0, n.jsx)(T.Z, {
    sectionTitle: P.Z.Messages.USER_SETTINGS_ABOUT_ME,
    errors: ee,
    onBioChange: e => (0, u.xQ)(e, null == U ? void 0 : U.bio),
    pendingBio: V,
    currentBio: null !== (j = null == U ? void 0 : U.bio) && void 0 !== j ? j : ''
  }, 'bio'),
  et && es.length > 0 && (0, n.jsx)(_.Z, {
    availableClans: es
  }),
  null != J && (0, n.jsx)(C.Z, {
    legacyUsername: J
  }, 'legacy_username')
]
  });
}