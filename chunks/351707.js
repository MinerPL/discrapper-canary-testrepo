i.d(n, {
  Z: function() {
return T;
  }
}), i(47120);
var s = i(735250),
  l = i(470079),
  o = i(772848),
  t = i(924826),
  r = i(91192),
  a = i(442837),
  d = i(749210),
  c = i(434404),
  u = i(271383),
  I = i(430824),
  _ = i(496675),
  f = i(700785),
  E = i(785717),
  m = i(256226),
  S = i(678738),
  Z = i(314172),
  x = i(981631),
  v = i(689938),
  h = i(700763);

function p(e) {
  let {
user: n,
currentUser: i,
guild: a,
guildMember: d,
roles: c,
highestRole: u,
canManageRoles: I,
onAddRole: _,
onRemoveRole: E
  } = e, S = I && null != d, p = l.useMemo(() => 'roles-'.concat((0, o.Z)()), []), T = (0, t.ZP)({
id: p,
isEnabled: !0,
scrollToStart: x.Cyb,
scrollToEnd: x.Cyb,
wrap: !0
  }), g = c.length, N = 0 === g ? v.Z.Messages.ROLE_LIST_EMPTY : v.Z.Messages.ROLES_LIST.format({
numRoles: g
  }), C = c.map(e => {
var l;
return (0, s.jsx)(m.Z, {
  role: e,
  guildId: a.id,
  disableBorderColor: !0,
  onRemove: () => E(e),
  canRemove: I ? f.r6(a, i.id, u, e) : (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) === null && n.id === i.id
}, e.id);
  });
  return (0, s.jsx)(r.bG, {
navigator: T,
children: (0, s.jsx)(r.SJ, {
  children: e => {
    let {
      ref: n,
      ...i
    } = e;
    return (0, s.jsxs)('div', {
      className: h.root,
      'aria-label': N,
      ref: n,
      ...i,
      children: [
        C,
        S && (0, s.jsx)(Z.Z, {
          guild: a,
          guildMember: d,
          numRoles: g,
          highestRole: u,
          onAddRole: _
        })
      ]
    });
  }
})
  });
}

function T(e) {
  let {
user: n,
currentUser: i,
guild: o,
scrollIntoView: t
  } = e, {
trackUserProfileAction: r
  } = (0, E.KZ)(), m = (0, a.e7)([u.ZP], () => u.ZP.getMember(o.id, n.id)), Z = (0, a.e7)([I.Z], () => I.Z.getRoles(o.id)), h = null == m ? void 0 : m.roles, T = l.useMemo(() => null == h || 0 === h.length ? [] : Object.values(Z).filter(e => h.includes(e.id)).sort((e, n) => {
var i, s;
let l = (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) !== null,
  o = (null === (s = n.tags) || void 0 === s ? void 0 : s.guild_connections) !== null;
return l && !o ? 1 : !l && o ? -1 : 0;
  }), [
Z,
h
  ]), g = f.e9(o, i.id), [N] = (0, a.Wu)([_.Z], () => [
_.Z.can(x.Plq.MANAGE_ROLES, o),
null != o ? _.Z.getGuildVersion(o.id) : null
  ]), C = l.useCallback(e => {
var i, s;
r({
  action: 'REMOVE_ROLE'
});
let l = null !== (s = null == h ? void 0 : h.filter(n => n !== e.id)) && void 0 !== s ? s : [];
(null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) === null ? d.Z.unassignGuildRoleConnection(o.id, e.id) : c.Z.updateMemberRoles(o.id, n.id, l, [], [e.id]);
  }, [
h,
o.id,
n.id,
r
  ]), j = l.useCallback(e => {
r({
  action: 'ADD_ROLE'
});
let i = null != h ? h : []; -
1 === i.indexOf(e) && (i = i.concat([e])), c.Z.updateMemberRoles(o.id, n.id, i, [e], []);
  }, [
h,
o.id,
n.id,
r
  ]), A = N && null != m;
  return 0 !== T.length || A ? (0, s.jsx)(S.Z, {
title: v.Z.Messages.ROLES,
scrollIntoView: t,
children: (0, s.jsx)(p, {
  user: n,
  currentUser: i,
  guild: o,
  guildMember: m,
  roles: T,
  highestRole: g,
  canManageRoles: N,
  onAddRole: j,
  onRemoveRole: C
})
  }) : null;
}