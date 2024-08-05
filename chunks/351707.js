i.d(s, {
  Z: function() {
return T;
  }
}), i(47120);
var n = i(735250),
  l = i(470079),
  t = i(772848),
  o = i(924826),
  a = i(91192),
  r = i(442837),
  d = i(749210),
  c = i(434404),
  u = i(271383),
  I = i(430824),
  _ = i(496675),
  f = i(700785),
  m = i(785717),
  E = i(256226),
  v = i(678738),
  S = i(314172),
  x = i(981631),
  Z = i(689938),
  h = i(700763);

function p(e) {
  let {
user: s,
currentUser: i,
guild: r,
guildMember: d,
roles: c,
highestRole: u,
canManageRoles: I,
onAddRole: _,
onRemoveRole: m
  } = e, v = I && null != d, p = l.useMemo(() => 'roles-'.concat((0, t.Z)()), []), T = (0, o.ZP)({
id: p,
isEnabled: !0,
scrollToStart: x.Cyb,
scrollToEnd: x.Cyb,
wrap: !0
  }), g = c.length, N = 0 === g ? Z.Z.Messages.ROLE_LIST_EMPTY : Z.Z.Messages.ROLES_LIST.format({
numRoles: g
  }), j = c.map(e => {
var l;
return (0, n.jsx)(E.Z, {
  role: e,
  guildId: r.id,
  disableBorderColor: !0,
  onRemove: () => m(e),
  canRemove: I ? f.r6(r, i.id, u, e) : (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) === null && s.id === i.id
}, e.id);
  });
  return (0, n.jsx)(a.bG, {
navigator: T,
children: (0, n.jsx)(a.SJ, {
  children: e => {
    let {
      ref: s,
      ...i
    } = e;
    return (0, n.jsxs)('div', {
      className: h.root,
      'aria-label': N,
      ref: s,
      ...i,
      children: [
        j,
        v && (0, n.jsx)(S.Z, {
          guild: r,
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
user: s,
currentUser: i,
guild: t,
scrollIntoView: o
  } = e, {
trackUserProfileAction: a
  } = (0, m.KZ)(), E = (0, r.e7)([u.ZP], () => u.ZP.getMember(t.id, s.id)), S = (0, r.e7)([I.Z], () => I.Z.getRoles(t.id)), h = null == E ? void 0 : E.roles, T = l.useMemo(() => null == h || 0 === h.length ? [] : Object.values(S).filter(e => h.includes(e.id)).sort((e, s) => {
var i, n;
let l = (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) !== null,
  t = (null === (n = s.tags) || void 0 === n ? void 0 : n.guild_connections) !== null;
return l && !t ? 1 : !l && t ? -1 : 0;
  }), [
S,
h
  ]), g = f.e9(t, i.id), [N] = (0, r.Wu)([_.Z], () => [
_.Z.can(x.Plq.MANAGE_ROLES, t),
null != t ? _.Z.getGuildVersion(t.id) : null
  ]), j = l.useCallback(e => {
var i, n;
a({
  action: 'REMOVE_ROLE'
});
let l = null !== (n = null == h ? void 0 : h.filter(s => s !== e.id)) && void 0 !== n ? n : [];
(null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) === null ? d.Z.unassignGuildRoleConnection(t.id, e.id) : c.Z.updateMemberRoles(t.id, s.id, l, [], [e.id]);
  }, [
h,
t.id,
s.id,
a
  ]), C = l.useCallback(e => {
a({
  action: 'ADD_ROLE'
});
let i = null != h ? h : []; -
1 === i.indexOf(e) && (i = i.concat([e])), c.Z.updateMemberRoles(t.id, s.id, i, [e], []);
  }, [
h,
t.id,
s.id,
a
  ]), A = N && null != E;
  return 0 !== T.length || A ? (0, n.jsx)(v.Z, {
heading: Z.Z.Messages.ROLES,
scrollIntoView: o,
children: (0, n.jsx)(p, {
  user: s,
  currentUser: i,
  guild: t,
  guildMember: E,
  roles: T,
  highestRole: g,
  canManageRoles: N,
  onAddRole: C,
  onRemoveRole: j
})
  }) : null;
}