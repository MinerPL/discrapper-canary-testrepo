n.d(t, {
  Z: function() {
return O;
  }
});
var s = n(735250),
  a = n(470079),
  i = n(512722),
  r = n.n(i),
  l = n(442837),
  o = n(481060),
  c = n(367907),
  d = n(605436),
  u = n(228643),
  _ = n(496675),
  I = n(626135),
  E = n(823379),
  T = n(243730),
  m = n(946724),
  N = n(999382),
  S = n(130341),
  h = n(981975),
  g = n(660962),
  C = n(442182),
  x = n(322816),
  p = n(266665),
  R = n(203377),
  f = n(981631),
  L = n(538196);

function O(e) {
  let t, {
  editRoleId: n,
  setEditRoleId: i,
  selectedSection: O,
  setSelectedSection: A
} = e,
M = (0, l.e7)([m.Z], () => m.Z.guild, []);
  r()(null != M, 'guildId cannot be null here');
  let {
role: D,
permissionSearchQuery: v
  } = (0, l.cj)([m.Z], () => ({
role: m.Z.getRole(n),
permissionSearchQuery: m.Z.getPermissionSearchQuery()
  }), [n]);
  a.useEffect(() => {
null == D && i(null);
  }, [
D,
i
  ]);
  let j = (0, l.e7)([_.Z], () => _.Z.getHighestRole(M), [M]),
Z = (0, l.e7)([_.Z], () => !_.Z.isRoleHigher(M, j, D)),
b = a.useRef(null),
U = (0, l.e7)([N.Z], () => N.Z.getProps().integrations);
  if (a.useEffect(() => {
  var e, t;
  let s = (0, S.UT)(O),
    a = null !== (t = null === (e = T.Z.getRoleMemberCount(M.id)) || void 0 === e ? void 0 : e[n]) && void 0 !== t ? t : 0;
  I.default.track(f.rMx.ROLE_PAGE_VIEWED, {
    tab_opened: s,
    is_everyone: (0, d.pM)(M.id, n),
    role_id: n,
    role_mentionable: null == D ? void 0 : D.mentionable,
    role_hoist: null == D ? void 0 : D.hoist,
    role_permissions: null == D ? void 0 : D.permissions.toString(),
    role_num_members: a,
    ...(0, c.hH)(M.id)
  });
}, [
  O,
  M.id,
  null == D ? void 0 : D.id
]), a.useEffect(() => {
  if ((null == D ? void 0 : D.id) != null)
    (0, u.sE)(M.id, D.id);
}, [
  M.id,
  null == D ? void 0 : D.id
]), null == D)
return null;
  switch (O) {
case R.ZI.DISPLAY:
  t = (0, s.jsx)(g.ZP, {
    guild: M,
    role: D,
    locked: Z,
    highestRole: j,
    setSelectedSection: A
  });
  break;
case R.ZI.PERMISSIONS:
  t = (0, s.jsx)(x.ZP, {
    guild: M,
    role: D,
    locked: Z,
    setSelectedSection: A,
    initialSearchQuery: v
  });
  break;
case R.ZI.VERIFICATIONS:
  t = (0, s.jsx)(h.Z, {
    guild: M,
    role: D,
    locked: Z,
    setSelectedSection: A,
    integrations: null != U ? U : void 0
  });
  break;
case R.ZI.MEMBERS:
  t = (0, s.jsx)(C.ZP, {
    guild: M,
    role: D,
    locked: Z,
    setSelectedSection: A
  });
  break;
default:
  (0, E.vE)(O);
  }
  return (0, s.jsxs)(o.FormSection, {
className: L.page,
children: [
  (0, s.jsx)(p.Z, {
    guild: M,
    currentRoleId: n,
    setCurrentRoleId: i,
    setSelectedSection: A
  }),
  (0, s.jsx)('div', {
    className: L.contentContainer,
    ref: b,
    children: (0, s.jsx)(o.FocusRingScope, {
      containerRef: b,
      children: t
    })
  })
]
  });
}