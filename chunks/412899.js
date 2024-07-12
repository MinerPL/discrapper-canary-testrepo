n.d(t, {
  UB: function() {
return k;
  },
  ZP: function() {
return Z;
  }
}), n(47120), n(411104);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(512722),
  l = n.n(s),
  u = n(772848),
  c = n(91192),
  d = n(924826),
  _ = n(866442),
  E = n(442837),
  f = n(692547),
  h = n(481060),
  p = n(239091),
  m = n(749210),
  I = n(112724),
  T = n(607070),
  g = n(605436),
  S = n(134433),
  A = n(518738),
  N = n(434404),
  v = n(271383),
  O = n(430824),
  R = n(496675),
  C = n(594174),
  y = n(285952),
  D = n(153124),
  L = n(176278),
  b = n(700785),
  M = n(944613),
  P = n(981631),
  U = n(689938),
  w = n(384790);
let x = () => Promise.resolve();

function G(e) {
  let {
userRoles: t,
position: n,
...i
  } = e, a = (0, D.Dt)();
  return (0, r.jsxs)(h.Dialog, {
className: o()(w.overflowRolesPopout, {
  [w.popoutBottom]: 'bottom' === n,
  [w.popoutTop]: 'top' === n
}),
'aria-labelledby': a,
children: [
  (0, r.jsx)('div', {
    className: w.overflowRolesPopoutArrowWrapper,
    children: (0, r.jsx)('div', {
      className: w.overflowRolesPopoutArrow
    })
  }),
  (0, r.jsxs)(y.Z, {
    className: w.overflowRolesPopoutHeader,
    align: y.Z.Align.CENTER,
    children: [
      (0, r.jsx)(h.FlagIcon, {
        size: 'xs',
        color: f.Z.unsafe_rawColors.PRIMARY_400.css,
        className: w.overflowRolesPopoutHeaderIcon
      }),
      (0, r.jsx)('div', {
        className: w.overflowRolesPopoutHeaderText,
        id: a,
        children: U.Z.Messages.ROLES_LIST.format({
          numRoles: t.length
        })
      })
    ]
  }),
  (0, r.jsx)(V, {
    ...i,
    wrap: !0,
    userRoles: t
  })
]
  });
}
let k = i.forwardRef(function(e, t) {
  var a, s, l;
  let u;
  let {
canRemove: d,
className: m,
role: I,
onRemove: g,
guildId: N,
disableBorderColor: v,
onMouseDown: O
  } = e, {
tabIndex: R,
...C
  } = (0, c.JA)(I.id), y = (0, A.p9)({
roleId: I.id,
size: 16,
guildId: N
  }), D = (0, E.e7)([T.Z], () => T.Z.roleStyle), b = (null === (a = I.tags) || void 0 === a ? void 0 : a.guild_connections) === null, M = i.useCallback(e => {
(0, p.jW)(e, async () => {
  let {
    default: e
  } = await n.e('5396').then(n.bind(n, 731646));
  return t => (0, r.jsx)(e, {
    ...t,
    id: I.id,
    label: U.Z.Messages.COPY_ID_ROLE
  });
});
  }, [I.id]), P = (0, h.useToken)(f.Z.unsafe_rawColors.PRIMARY_300).hsl(), x = null !== (s = I.colorString) && void 0 !== s ? s : P, G = null !== (l = (0, _.wK)(x, 0.6)) && void 0 !== l ? l : void 0, k = f.Z.unsafe_rawColors.WHITE_500.css, B = (0, _._i)(x);
  null != B && 0.3 > (0, _.Bd)(B) && (k = f.Z.unsafe_rawColors.PRIMARY_630.css), u = b ? (0, r.jsx)(S.Z, {
className: w.roleFlowerStar,
iconClassName: d ? w.roleVerifiedIcon : void 0,
color: x,
size: 14
  }) : 'dot' === D ? (0, r.jsx)(h.RoleDot, {
className: w.roleDot,
color: x,
background: !1,
tooltip: !1
  }) : (0, r.jsx)(h.RoleCircle, {
color: x
  });
  let F = i.useMemo(() => {
var t;
return {
  borderColor: v ? void 0 : G,
  ...null !== (t = e.style) && void 0 !== t ? t : {}
};
  }, [
G,
v,
e.style
  ]);
  return (0, r.jsx)(h.FocusRing, {
children: (0, r.jsxs)('div', {
  ref: t,
  className: o()(w.role, m),
  style: F,
  onContextMenu: M,
  onMouseDown: O,
  'aria-label': I.name,
  tabIndex: R,
  ...C,
  children: [
    (0, r.jsxs)(h.Clickable, {
      className: o()(d && w.roleRemoveButtonCanRemove, w.roleRemoveButton),
      onClick: d ? g : void 0,
      tabIndex: d ? R : -1,
      focusProps: {
        focusClassName: w.roleRemoveIconFocused
      },
      'aria-hidden': !d,
      'aria-label': U.Z.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({
        roleName: I.name
      }),
      children: [
        u,
        d ? (0, r.jsx)(h.CloseSmallIcon, {
          size: 'md',
          color: k,
          className: w.roleRemoveIcon,
          'aria-hidden': !0
        }) : null
      ]
    }),
    null != y ? (0, r.jsx)(L.Z, {
      className: w.roleIcon,
      ...y,
      enableTooltip: !1
    }) : null,
    (0, r.jsx)('div', {
      'aria-hidden': !0,
      className: w.roleName,
      children: (0, r.jsx)(h.Text, {
        variant: 'text-xs/medium',
        className: w.roleNameOverflow,
        children: I.name
      })
    })
  ]
})
  });
});

function B(e) {
  let {
user: t,
numRolesHidden: n,
roleClassName: i
  } = e, a = (0, c.JA)('overflow-more-roles-'.concat(t.id));
  return (0, r.jsx)(h.Popout, {
renderPopout: t => {
  let {
    position: n
  } = t;
  return (0, r.jsx)(G, {
    ...e,
    position: null != n ? n : 'top'
  });
},
position: 'top',
align: 'center',
children: e => (0, r.jsx)(h.FocusRing, {
  children: (0, r.jsx)('button', {
    ...e,
    className: o()(w.overflowButton, i),
    ...a,
    children: '+'.concat(n)
  })
})
  });
}

function F(e) {
  let {
guild: t,
user: n,
handleAddRole: i,
roleClassName: a,
addButtonClassName: s,
addButtonIconClassName: l
  } = e, u = (0, c.JA)('overflow-add-roles-'.concat(n.id)), d = (0, E.e7)([T.Z], () => T.Z.roleStyle), _ = R.Z.getHighestRole(t), f = v.ZP.getMember(t.id, n.id), p = e => (0, g.Gy)(t.id, e.id) && !e.managed && R.Z.isRoleHigher(t, _, e) && (null == f || -1 === f.roles.indexOf(e.id));
  return (0, r.jsx)(h.Popout, {
renderPopout: e => {
  let {
    closePopout: n
  } = e;
  return (0, r.jsx)(M.Z, {
    guild: t,
    roleStyle: d,
    roleFilter: p,
    onSelect: i,
    onClose: n
  });
},
position: 'bottom',
align: 'center',
children: e => (0, r.jsx)(h.FocusRing, {
  children: (0, r.jsx)('button', {
    ...e,
    className: o()(w.addButton, a, s),
    'aria-label': U.Z.Messages.GUILD_SETTINGS_MEMBERS_ADD_ROLE,
    type: 'button',
    ...u,
    children: (0, r.jsx)(h.PlusSmallIcon, {
      size: 'md',
      color: 'currentColor',
      className: o()(w.addButtonIcon, l),
      'aria-hidden': !0
    })
  })
})
  });
}

function V(e) {
  let t;
  let {
user: n,
guild: a,
userRoles: s,
wrap: _ = !0,
width: f,
className: h,
readOnly: p,
roleClassName: I,
disableBorderColor: T
  } = e, g = i.useRef({}), S = i.useCallback(e => {
var t;
let r = s.filter(t => t !== e.id);
(null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? m.Z.unassignGuildRoleConnection(a.id, e.id) : N.Z.updateMemberRoles(a.id, n.id, r, [], [e.id]);
  }, [
s,
a.id,
n.id
  ]), A = i.useCallback(e => {
let t = s; -
1 === t.indexOf(e) && (t = t.concat([e])), N.Z.updateMemberRoles(a.id, n.id, t, [e], []);
  }, [
s,
a.id,
n.id
  ]), [v, y] = i.useState(null), D = (0, E.e7)([O.Z], () => O.Z.getRoles(a.id)), L = i.useMemo(() => {
let e = Object.values(D).filter(e => s.includes(e.id)).sort((e, t) => {
  var n, r;
  let i = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
    a = (null === (r = t.tags) || void 0 === r ? void 0 : r.guild_connections) !== null;
  return i && !a ? 1 : !i && a ? -1 : 0;
});
return null != v ? e.slice(0, v) : e;
  }, [
D,
v,
s
  ]), M = s.length - L.length;
  i.useLayoutEffect(() => {
if (_)
  return;
if ('number' != typeof f)
  throw Error('Unexpected null width');
let e = 0,
  t = 0,
  n = f - 30 - 4;
for (let r = 0; r < L.length; r++) {
  let i = L[r],
    a = g.current[i.id];
  if (null != a) {
    if ((t += a.offsetWidth + 4) > n)
      break;
    e++;
  }
}
y(t => e < L.length ? e : t);
  }, [
_,
f,
L
  ]);
  let G = C.default.getCurrentUser();
  l()(null != G, 'MemberRolesList: currentUser cannot be undefined');
  let V = !p && R.Z.can(P.Plq.MANAGE_ROLES, a),
H = b.e9(a, G.id),
Z = i.useMemo(() => 'roles-'.concat((0, u.Z)()), []),
Y = (0, d.ZP)({
  id: Z,
  isEnabled: !0,
  scrollToStart: x,
  scrollToEnd: x,
  wrap: !0
}),
j = L.map(e => {
  var t;
  return (0, r.jsx)(k, {
    className: I,
    role: e,
    canRemove: V && b.r6(a, G.id, H, e) || (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null && n.id === G.id,
    onRemove: () => S(e),
    ref: t => {
      var n, r;
      return n = e.id, void(null != (r = t) ? g.current[n] = r : delete g.current[n]);
    },
    guildId: a.id,
    disableBorderColor: T
  }, e.id);
});
  return null != v && 0 !== M ? t = (0, r.jsx)(B, {
...e,
numRolesHidden: M
  }) : V && (t = (0, r.jsx)(F, {
...e,
handleAddRole: A
  })), (0, r.jsx)(c.bG, {
navigator: Y,
children: (0, r.jsx)(c.SJ, {
  children: e => {
    let {
      ref: n,
      ...i
    } = e;
    return (0, r.jsxs)('div', {
      className: o()(w.root, h),
      'aria-label': U.Z.Messages.ROLES_LIST.format({
        numRoles: s.length
      }),
      ref: n,
      ...i,
      children: [
        j,
        t
      ]
    });
  }
})
  });
}
let H = (0, I.Z)(V);

function Z(e) {
  return (0, E.e7)([R.Z], () => {
var t;
return R.Z.getGuildVersion(null === (t = e.guild) || void 0 === t ? void 0 : t.id);
  }), !1 === e.wrap ? (0, r.jsx)(H, {
...e
  }) : (0, r.jsx)(V, {
...e
  });
}