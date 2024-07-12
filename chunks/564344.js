s.d(t, {
  Z: function() {
return x;
  }
});
var n = s(735250),
  a = s(470079),
  i = s(442837),
  r = s(481060),
  o = s(503089),
  l = s(906732),
  c = s(254901),
  d = s(18438),
  _ = s(778825),
  E = s(66516),
  u = s(484459),
  T = s(216045),
  I = s(839469),
  S = s(25990),
  N = s(594174),
  C = s(585483),
  m = s(16703),
  A = s(785145),
  h = s(981631),
  g = s(526761),
  O = s(726985),
  p = s(689938),
  R = s(537865);

function x() {
  c.Z.useExperiment({
location: 'profile_customization_auto'
  });
  let e = (0, i.e7)([_.Z], () => _.Z.getGuild()),
t = (0, m.Z)(),
s = (0, i.e7)([
  _.Z,
  S.Z
], () => _.Z.showNotice() || S.Z.showNotice()),
x = null != e ? e : t,
M = (0, i.e7)([N.default], () => N.default.getCurrentUser()),
{
  subsection: D,
  setSubsection: f
} = (0, A.Z)(),
{
  analyticsLocations: P
} = (0, l.ZP)(),
{
  hasSearchResults: L,
  searchResults: Z
} = (0, I.E)();

  function b(t) {
if (D !== t) {
  if (s) {
    C.S.dispatch(h.CkL.SHAKE_APP, {
      duration: 300,
      intensity: o.$x
    }), C.S.dispatch(h.CkL.EMPHASIZE_NOTICE);
    return;
  }
  t === g.NB.GUILD && null == e && null != x && (0, d.Fq)(x, P), f(t);
}
  }
  a.useEffect(() => {
null != M && (0, u.Z)(M.id, M.getAvatarURL(null == x ? void 0 : x.id, 80), {
  guildId: null == x ? void 0 : x.id
});
  }, [
null == x ? void 0 : x.id,
M
  ]);
  let v = !0,
j = !0;
  return L && 1 === Z.length && (Z.includes(O.s6.PROFILE_SERVER_PROFILES) ? (b(g.NB.GUILD), j = !1) : Z.includes(O.s6.PROFILE_USER_PROFILE) && (b(g.NB.USER_PROFILE), v = !1)), (0, n.jsx)(l.Gt, {
value: P,
children: (0, n.jsxs)(r.HeadingLevel, {
  component: (0, n.jsx)(r.Heading, {
    variant: 'heading-lg/semibold',
    children: p.Z.Messages.USER_SETTINGS_PROFILES
  }),
  children: [
    (0, n.jsxs)(r.TabBar, {
      className: R.tabBar,
      type: 'top',
      look: 'brand',
      selectedItem: D,
      onItemSelect: b,
      children: [
        j ? (0, n.jsx)(r.TabBar.Item, {
          className: R.tabBarItem,
          id: g.NB.USER_PROFILE,
          children: p.Z.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE
        }, g.NB.USER_PROFILE) : null,
        v ? (0, n.jsx)(r.TabBar.Item, {
          className: R.tabBarItem,
          id: g.NB.GUILD,
          children: p.Z.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY
        }, g.NB.GUILD) : null
      ]
    }),
    D === g.NB.GUILD ? (0, n.jsx)(E.Z, {
      selectedGuild: x
    }) : (0, n.jsx)(T.Z, {})
  ]
})
  });
}