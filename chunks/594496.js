s.d(t, {
  Z: function() {
return D;
  }
});
var n = s(735250);
s(470079);
var a = s(512722),
  i = s.n(a),
  r = s(442837),
  o = s(481060),
  l = s(295474),
  c = s(150039),
  d = s(126631),
  _ = s(433411),
  E = s(532432),
  u = s(134795),
  T = s(513901),
  I = s(451392),
  S = s(906364),
  N = s(621853),
  C = s(271383),
  m = s(594174),
  A = s(74538),
  g = s(51144),
  h = s(18438),
  O = s(778825),
  p = s(52597),
  R = s(430131),
  x = s(133484),
  M = s(689938),
  f = s(109254);

function D(e) {
  var t, s, a, D;
  let {
guild: P
  } = e, L = (0, r.e7)([m.default], () => {
let e = m.default.getCurrentUser();
return i()(null != e, 'GuildIdentitySettingsPage: user cannot be undefined'), e;
  }), {
pendingAvatar: b,
pendingNickname: Z,
pendingBanner: v,
pendingBio: j,
pendingPronouns: B,
pendingThemeColors: U,
errors: G,
guild: F
  } = (0, r.cj)([O.Z], () => {
let {
  pendingAvatar: e,
  pendingNickname: t,
  pendingBio: s,
  pendingPronouns: n,
  pendingBanner: a,
  pendingThemeColors: i
} = O.Z.getAllPending();
return {
  pendingAvatar: e,
  pendingNickname: t,
  pendingBanner: a,
  pendingBio: s,
  pendingPronouns: n,
  pendingThemeColors: i,
  errors: O.Z.getErrors(),
  guild: O.Z.getGuild()
};
  }), y = null != P ? P : F;
  i()(null != y, 'guild should not be null');
  let V = (0, l.gS)(y.id),
Y = (0, r.e7)([C.ZP], () => null == y.id ? null : C.ZP.getMember(y.id, L.id)),
w = (0, r.e7)([N.Z], () => N.Z.getGuildMemberProfile(L.id, y.id)),
k = A.ZP.canUsePremiumProfileCustomization(L),
H = (0, c.gd)(b, null == Y ? void 0 : Y.avatar),
W = (0, c.f$)(v, null == w ? void 0 : w.banner),
K = (0, p.p)(U, null == w ? void 0 : w.themeColors),
z = null !== (t = null == w ? void 0 : w.bio) && void 0 !== t ? t : '',
Q = null !== (s = null == w ? void 0 : w.pronouns) && void 0 !== s ? s : '',
X = (e, t, s) => {
  s(null != e ? e : null != t ? null : void 0);
};
  return (0, n.jsxs)('div', {
className: f.sectionsContainer,
children: [
  (0, n.jsx)(R.Z, {
    errors: null !== (a = null == G ? void 0 : G.nick) && void 0 !== a ? a : null == V ? void 0 : V.nick,
    username: g.ZP.getName(L),
    pendingNick: Z,
    currentNick: null == Y ? void 0 : Y.nick,
    guild: y
  }, 'nick'),
  (0, n.jsx)(S.Z, {
    sectionTitle: M.Z.Messages.USER_SETTINGS_PRONOUNS,
    errors: null == G ? void 0 : G.pronouns,
    onPronounsChange: e => {
      (0, p.xs)(e, Q);
    },
    pendingPronouns: B,
    currentPronouns: Q
  }, 'pronouns'),
  (0, n.jsxs)(x.Z, {
    user: L,
    showOverlay: !k,
    children: [
      (0, n.jsx)(E.Z, {
        sectionTitle: (0, n.jsxs)(n.Fragment, {
          children: [
            M.Z.Messages.USER_SETTINGS_AVATAR,
            (0, n.jsx)(o.Tooltip, {
              text: M.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
              children: e => (0, n.jsx)(o.NitroWheelIcon, {
                size: 'md',
                color: 'currentColor',
                ...e,
                className: f.nitroWheel
              })
            })
          ]
        }),
        showRemoveAvatarButton: H,
        onAvatarChange: e => X(e, null == Y ? void 0 : Y.avatar, h.I5),
        errors: null == G ? void 0 : G.avatar,
        guildId: y.id,
        disabled: !k
      }, 'avatar'),
      (0, n.jsx)(_.Z, {
        sectionTitle: (0, n.jsxs)(n.Fragment, {
          children: [
            M.Z.Messages.USER_SETTINGS_AVATAR_DECORATION,
            (0, n.jsx)(o.Tooltip, {
              text: M.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
              children: e => (0, n.jsx)(o.NitroWheelIcon, {
                size: 'md',
                color: 'currentColor',
                ...e,
                className: f.nitroWheel
              })
            })
          ]
        }),
        user: L,
        guild: y
      }, 'decoration'),
      (0, n.jsx)(T.Z, {
        sectionTitle: (0, n.jsxs)(n.Fragment, {
          children: [
            M.Z.Messages.USER_SETTINGS_PROFILE_EFFECT,
            (0, n.jsx)(o.Tooltip, {
              text: M.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
              children: e => (0, n.jsx)(o.NitroWheelIcon, {
                size: 'md',
                color: 'currentColor',
                ...e,
                className: f.nitroWheel
              })
            })
          ]
        }),
        user: L,
        guild: y
      }, 'effect'),
      (0, n.jsx)(u.Z, {
        showRemoveBannerButton: W,
        errors: null == G ? void 0 : G.banner,
        onBannerChange: e => X(e, null == w ? void 0 : w.banner, h.g_),
        guildId: null == y ? void 0 : y.id,
        disabled: !k
      }, 'banner'),
      (0, n.jsx)(I.Z, {
        user: L,
        pendingAvatar: b,
        pendingColors: U,
        onThemeColorsChange: e => {
          (0, p.ce)(e, null == w ? void 0 : w.themeColors);
        },
        guildId: null == y ? void 0 : y.id,
        showResetThemeButton: K
      }),
      (0, n.jsx)(d.Z, {
        placeholder: M.Z.Messages.CHANGE_IDENTITY_BIO_PLACEHOLDER,
        sectionTitle: (0, n.jsxs)(n.Fragment, {
          children: [
            M.Z.Messages.USER_PROFILE_ABOUT_ME,
            (0, n.jsx)(o.Tooltip, {
              text: M.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
              children: e => (0, n.jsx)(o.NitroWheelIcon, {
                size: 'md',
                color: 'currentColor',
                ...e,
                className: f.nitroWheel
              })
            })
          ]
        }),
        onBioChange: e => (0, p.qN)(e, z),
        errors: null !== (D = null == G ? void 0 : G.bio) && void 0 !== D ? D : null == V ? void 0 : V.bio,
        pendingBio: j,
        currentBio: z,
        disabled: !k
      }, 'about')
    ]
  })
]
  });
}