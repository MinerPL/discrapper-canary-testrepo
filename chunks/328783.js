s(47120), s(724458), s(653041);
var n = s(735250),
  a = s(470079),
  i = s(442837),
  r = s(481060),
  o = s(993413),
  l = s(594174),
  c = s(153124),
  d = s(931240),
  _ = s(353093),
  E = s(369077),
  u = s(981631),
  T = s(689938),
  I = s(715970);
let S = (0, c.hQ)();
t.Z = a.memo(function(e) {
  let {
availableClans: t
  } = e, s = a.useMemo(() => new Map(t.map(e => [
e.id,
e
  ])), [t]), c = (0, i.e7)([l.default], () => {
var e;
return (0, _.vh)(null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.clan).guildId;
  }), N = a.useMemo(() => t.reduce((e, t) => {
var s;
return (null === (s = t.clan) || void 0 === s ? void 0 : s.tag) != null && e.push({
  label: t.name,
  value: t.id
}), e;
  }, []), [t]), C = a.useCallback(e => {
var t, a;
if (null == e)
  return null;
let i = s.get(e.value);
if (null == i)
  return null;
let r = null === (t = i.clan) || void 0 === t ? void 0 : t.tag;
return null == r ? null : (0, n.jsx)(E.Dh, {
  clanTag: r,
  clanBadge: null === (a = i.clan) || void 0 === a ? void 0 : a.badge,
  guildId: i.id,
  guildName: e.label,
  guildIcon: i.icon,
  guildIconSize: 32
});
  }, [s]), m = a.useCallback(e => {
let t = e[0];
return null == t ? null : (0, n.jsx)(n.Fragment, {
  children: C(t)
});
  }, [C]), A = a.useCallback(e => (0, d.nE)(e, !0, u.Sbl.USER_SETTINGS), []), h = a.useCallback(e => e === c, [c]), g = a.useCallback(e => e, []), O = a.useCallback(() => (0, d.nE)(null, !1), []);
  return (0, n.jsxs)(o.Z, {
title: T.Z.Messages.CLANS,
titleId: S,
children: [
  (0, n.jsx)(r.Text, {
    className: I.subtitle,
    variant: 'text-sm/normal',
    children: T.Z.Messages.CLAN_USER_PROFILE_PRIMARY_CLAN_SUBTITLE
  }),
  (0, n.jsx)(r.Select, {
    className: I.select,
    optionClassName: I.selectPopout,
    isSelected: h,
    options: N,
    select: A,
    renderOptionValue: m,
    renderOptionLabel: C,
    serialize: g,
    clear: O,
    clearable: null != c
  })
]
  });
});