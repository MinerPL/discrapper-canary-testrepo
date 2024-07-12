t.d(n, {
  Z: function() {
return g;
  }
}), t(47120);
var s = t(735250),
  i = t(470079),
  a = t(442837),
  l = t(481060),
  u = t(58540),
  o = t(100527),
  r = t(931240),
  d = t(353093),
  c = t(314897),
  E = t(271383),
  _ = t(430824),
  M = t(496675),
  N = t(594174),
  I = t(981631),
  S = t(689938);

function g(e) {
  let {
guildId: n,
userId: t,
analyticsLocation: g,
analyticsLocations: L,
context: T,
icon: A
  } = e, h = (0, a.e7)([_.Z], () => _.Z.getGuild(n), [n]), f = (0, a.e7)([c.default], () => c.default.getId()), Z = (0, a.e7)([N.default], () => N.default.getUser(t)), O = (0, a.e7)([E.ZP], () => E.ZP.isGuestOrLurker(n, t), [
n,
t
  ]), p = i.useMemo(() => ({
[n]: [t]
  }), [
n,
t
  ]), C = (0, d.EJ)(h);
  (0, u.$)(p);
  let m = T === I.IlC.POPOUT,
x = f === t,
[G, b] = (0, a.Wu)([M.Z], () => {
  if (null == h)
    return [
      !1,
      !1
    ];
  let e = f === t && (M.Z.can(I.Plq.CHANGE_NICKNAME, h) || M.Z.can(I.Plq.MANAGE_NICKNAMES, h));
  return [
    e,
    M.Z.canManageUser(I.Plq.MANAGE_NICKNAMES, t, h)
  ];
}, [
  f,
  t,
  h
]),
U = i.useCallback((e, n) => () => {
  (0, r.nE)(e, n, o.Z.CONTEXT_MENU);
}, []);
  return null != h && !m && (G || b || x) && null != Z && !O && C && Z.isStaff() ? (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)(l.MenuItem, {
    id: 'adopt-clan-identity',
    label: S.Z.Messages.CLAN_ADOPT_CLAN_IDENTITY,
    icon: A,
    action: U(n, !0)
  }),
  (0, s.jsx)(l.MenuItem, {
    id: 'deadopt-clan-identity',
    label: S.Z.Messages.CLAN_CLEAR_CLAN_IDENTITY,
    icon: A,
    action: U(null, null)
  })
]
  }) : null;
}