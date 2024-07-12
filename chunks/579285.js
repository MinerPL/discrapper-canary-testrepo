n.d(t, {
  Z: function() {
return y;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(512722),
  o = n.n(a),
  s = n(772848),
  l = n(924826),
  u = n(91192),
  c = n(442837),
  d = n(481060),
  _ = n(749210),
  E = n(112724),
  f = n(434404),
  h = n(271383),
  p = n(430824),
  m = n(496675),
  I = n(259580),
  T = n(700785),
  g = n(785717),
  S = n(556239),
  A = n(256226),
  N = n(314172),
  v = n(981631),
  O = n(689938),
  R = n(228892);
let C = (0, E.Z)(function(e) {
  let {
user: t,
currentUser: n,
guild: a,
guildMember: c,
roles: _,
highestRole: E,
canManageRoles: f,
width: h,
onAddRole: p,
onRemoveRole: m,
onOpenProfile: C
  } = e;
  o()(null != h, 'Unexpected null width');
  let y = i.useRef({}),
D = (e, t) => {
  null != t ? y.current[e] = t : delete y.current[e];
},
[L, b] = i.useState(null),
[M, P] = i.useState(!1),
U = i.useMemo(() => null == L || M ? _ : _.slice(0, L), [
  _,
  L,
  M
]),
[w, x] = i.useState(h),
G = _.length > U.length,
k = f && null != c,
B = i.useRef(null),
F = i.useRef(null);
  i.useLayoutEffect(() => {
var e, t, n, r, i, a, o, s;
let l = null !== (i = null === (t = B.current) || void 0 === t ? void 0 : null === (e = t.getBoundingClientRect()) || void 0 === e ? void 0 : e.width) && void 0 !== i ? i : 0,
  u = null !== (a = null === (r = F.current) || void 0 === r ? void 0 : null === (n = r.getBoundingClientRect()) || void 0 === n ? void 0 : n.width) && void 0 !== a ? a : 0,
  c = h - (l > 0 ? l + 4 : 0) - (u > 0 ? u + 4 : 0),
  d = 0;
for (let e = 0; e < 2; e++) {
  let t = 1 === e,
    n = 0;
  for (let e = d; e < U.length; e++) {
    let r = U[e],
      i = y.current[r.id];
    if (null == i)
      continue;
    let a = null !== (s = null === (o = i.getBoundingClientRect()) || void 0 === o ? void 0 : o.width) && void 0 !== s ? s : 0;
    if (n > 0 && !t && n + a > h || n > 0 && t && n + a > c)
      break;
    n += a + 4, d++;
  }
}
b(d === _.length ? null : d), x(c);
  }, [
h,
_,
U
  ]);
  let V = i.useMemo(() => 'roles-'.concat((0, s.Z)()), []),
H = (0, l.ZP)({
  id: V,
  isEnabled: !0,
  scrollToStart: v.Cyb,
  scrollToEnd: v.Cyb,
  wrap: !0
}),
Z = _.length,
Y = 0 === Z ? O.Z.Messages.ROLE_LIST_EMPTY : O.Z.Messages.ROLES_LIST.format({
  numRoles: Z
}),
j = U.map((e, i) => {
  var o;
  return (0, r.jsx)(A.Z, {
    role: e,
    guildId: a.id,
    style: {
      maxWidth: i === U.length - 1 ? w : h
    },
    disableBorderColor: !0,
    ref: t => D(e.id, t),
    onRemove: () => m(e),
    canRemove: f ? T.r6(a, n.id, E, e) : (null === (o = e.tags) || void 0 === o ? void 0 : o.guild_connections) === null && t.id === n.id
  }, e.id);
}),
{
  expandRolesInlineEnabled: W
} = (0, S.L)({
  location: 'BiteSizeProfileMemberRolesListSection'
}),
{
  trackUserProfileAction: K
} = (0, g.KZ)(),
z = i.useCallback(() => {
  P(!0), K({
    action: 'EXPAND_ROLES'
  });
}, [K]),
q = i.useCallback(() => {
  P(!1), K({
    action: 'COLLAPSE_ROLES'
  });
}, [K]);
  return (0, r.jsx)(u.bG, {
navigator: H,
children: (0, r.jsx)(u.SJ, {
  children: e => {
    let {
      ref: t,
      ...n
    } = e;
    return (0, r.jsxs)('div', {
      className: R.root,
      'aria-label': Y,
      ref: t,
      ...n,
      children: [
        j,
        G && (0, r.jsx)(d.TooltipContainer, {
          text: O.Z.Messages.VIEW_ALL_ROLES,
          children: (0, r.jsx)(d.Clickable, {
            innerRef: B,
            onClick: W ? z : C,
            className: R.showMoreButton,
            children: (0, r.jsx)(d.Text, {
              variant: 'text-xs/medium',
              children: '+'.concat(_.length - U.length)
            })
          })
        }),
        M && (0, r.jsx)(d.TooltipContainer, {
          text: O.Z.Messages.COLLAPSE_ROLES,
          children: (0, r.jsx)(d.Clickable, {
            onClick: q,
            className: R.collapseButton,
            children: (0, r.jsx)(I.Z, {
              direction: I.Z.Directions.LEFT,
              width: 12,
              height: 12
            })
          })
        }),
        k && (0, r.jsx)(N.Z, {
          buttonRef: F,
          guild: a,
          guildMember: c,
          numRoles: Z,
          highestRole: E,
          onAddRole: p
        })
      ]
    });
  }
})
  });
});

function y(e) {
  let {
user: t,
currentUser: n,
guild: a,
onOpenProfile: o
  } = e, {
trackUserProfileAction: s
  } = (0, g.KZ)(), l = (0, c.e7)([h.ZP], () => h.ZP.getMember(a.id, t.id)), u = (0, c.e7)([p.Z], () => p.Z.getRoles(a.id)), d = null == l ? void 0 : l.roles, E = i.useMemo(() => null == d || 0 === d.length ? [] : Object.values(u).filter(e => d.includes(e.id)).sort((e, t) => {
var n, r;
let i = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
  a = (null === (r = t.tags) || void 0 === r ? void 0 : r.guild_connections) !== null;
return i && !a ? 1 : !i && a ? -1 : 0;
  }), [
u,
d
  ]), I = T.e9(a, n.id), [S] = (0, c.Wu)([m.Z], () => [
m.Z.can(v.Plq.MANAGE_ROLES, a),
null != a ? m.Z.getGuildVersion(a.id) : null
  ]), A = i.useCallback(e => {
var n, r;
s({
  action: 'REMOVE_ROLE'
});
let i = null !== (r = null == d ? void 0 : d.filter(t => t !== e.id)) && void 0 !== r ? r : [];
(null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) === null ? _.Z.unassignGuildRoleConnection(a.id, e.id) : f.Z.updateMemberRoles(a.id, t.id, i, [], [e.id]);
  }, [
d,
a.id,
t.id,
s
  ]), N = i.useCallback(e => {
s({
  action: 'ADD_ROLE'
});
let n = null != d ? d : []; -
1 === n.indexOf(e) && (n = n.concat([e])), f.Z.updateMemberRoles(a.id, t.id, n, [e], []);
  }, [
d,
a.id,
t.id,
s
  ]), O = S && null != l;
  return 0 !== E.length || O ? (0, r.jsx)('div', {
children: (0, r.jsx)(C, {
  user: t,
  currentUser: n,
  guild: a,
  guildMember: l,
  roles: E,
  highestRole: I,
  canManageRoles: S,
  onAddRole: N,
  onRemoveRole: A,
  onOpenProfile: o
})
  }) : null;
}