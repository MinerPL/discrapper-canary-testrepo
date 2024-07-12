s.d(t, {
  Z: function() {
return f;
  }
});
var n = s(735250),
  a = s(470079),
  i = s(512722),
  r = s.n(i),
  o = s(442837),
  l = s(481060),
  c = s(570140),
  d = s(497321),
  _ = s(100527),
  E = s(367907),
  u = s(906732),
  T = s(296810),
  I = s(921813),
  S = s(621853),
  N = s(246946),
  C = s(594174),
  m = s(63063),
  A = s(74538),
  h = s(18438),
  g = s(778825),
  O = s(856607),
  p = s(594496),
  R = s(856768),
  x = s(981631),
  M = s(689938);

function D(e) {
  (0, l.openModalLazy)(async () => {
let {
  default: t
} = await s.e('84509').then(s.bind(s, 933696));
return s => (0, n.jsx)(t, {
  source: {
    ...e,
    page: x.ZY5.GUILD_MEMBER_PROFILE_SETTINGS
  },
  ...s
});
  });
}

function f(e) {
  let {
selectedGuild: t
  } = e, {
analyticsLocations: s
  } = (0, u.ZP)(_.Z.GUILD_PROFILE), i = (0, o.e7)([C.default], () => {
let e = C.default.getCurrentUser();
return r()(null != e, 'GuildIdentitySettingsPage: user cannot be undefined'), e;
  }), f = (0, o.e7)([S.Z], () => !S.Z.isFetchingProfile(i.id)), P = (0, o.e7)([N.Z], () => N.Z.hidePersonalInformation), {
source: L,
...Z
  } = (0, o.cj)([g.Z], () => ({
...g.Z.getAllPending(),
source: g.Z.getSource()
  }));
  return (a.useEffect(() => () => c.Z.wait(h.W3), []), a.useEffect(() => {
null != L && E.ZP.trackWithMetadata(x.rMx.SETTINGS_PANE_VIEWED, {
  settings_type: 'guild',
  destination_pane: x.jXE.SETTINGS_CUSTOMIZE_PROFILE,
  source: L
});
  }, [L]), P) ? (0, n.jsx)(d.Z, {}) : f ? (0, n.jsxs)(u.Gt, {
value: s,
children: [
  (0, n.jsx)(l.Text, {
    variant: 'text-sm/normal',
    children: M.Z.Messages.PROFILE_CUSTOMIZATION_GUILD_HINT.format({
      helpCenterLink: m.Z.getArticleURL(x.BhN.GUILD_PROFILES)
    })
  }),
  null != t ? (0, n.jsxs)(n.Fragment, {
    children: [
      (0, n.jsx)(R.Z, {
        guildId: t.id,
        onChange: e => {
          null != e && (0, h.HP)(e);
        }
      }),
      (0, n.jsx)(T.Z, {
        previewTitle: M.Z.Messages.CHANGE_IDENTITY_PREVIEW_WITH_GUILD_NAME.format({
          guildName: null == t ? void 0 : t.name
        }),
        profilePreview: (0, n.jsx)(I.Z, {
          user: i,
          guild: t,
          canUsePremiumCustomization: A.ZP.canUsePremiumProfileCustomization(i),
          onUpsellClick: D,
          ...Z
        }),
        children: (0, n.jsx)(p.Z, {})
      })
    ]
  }) : (0, n.jsx)(O.Z, {})
]
  }) : (0, n.jsx)(l.Spinner, {});
}