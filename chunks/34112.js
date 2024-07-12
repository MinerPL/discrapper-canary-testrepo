n.d(t, {
  Z: function() {
return Z;
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(225857),
  o = n(290843),
  c = n(866442),
  d = n(442837),
  u = n(481060),
  _ = n(239091),
  I = n(493544),
  E = n(134433),
  T = n(646892),
  m = n(741247),
  N = n(518738),
  S = n(549631),
  h = n(496675),
  g = n(176278),
  C = n(626135),
  x = n(480608),
  p = n(243730),
  R = n(130341),
  f = n(970129),
  L = n(712181),
  O = n(203377),
  A = n(981631),
  M = n(689938),
  D = n(870763),
  v = n(412973);
let j = 'DRAGGABLE_ROLE';

function Z(e) {
  let {
setEditRoleId: t,
guild: n,
everyoneRole: i,
otherRoles: r,
setSelectedSection: l,
renderHeader: o,
headerHeight: c,
query: u
  } = e, _ = (0, d.e7)([p.Z], () => p.Z.getRoleMemberCount(n.id), [n.id]), E = (0, d.e7)([h.Z], () => h.Z.getHighestRole(n), [n]), T = u.trim();
  a.useEffect(() => {
(0, x.E)(n.id);
  }, [n.id]);
  let m = a.useRef(!1);
  a.useEffect(() => {
if (!m.current && '' !== u.trimStart())
  C.default.track(A.rMx.SEARCH_STARTED, {
    search_type: 'Roles'
  }), m.current = !0;
  }, [u]);
  let N = a.useMemo(() => r.filter(e => (0, R.uo)(e, T)), [
  r,
  T
]),
S = a.useMemo(() => [
  ...r,
  i
], [
  r,
  i
]),
{
  draggingId: g,
  handleDragStart: f,
  handleDragReset: O,
  handleDragComplete: M
} = (0, L.Z)(S),
D = a.useCallback(e => {
  var a;
  let {
    row: i
  } = e;
  if (0 === N.length)
    return (0, s.jsx)(b, {}, 'empty-role');
  let o = N[i];
  return (0, s.jsx)(U, {
    role: o,
    guild: n,
    highestRole: E,
    currentPosition: i,
    memberCount: null !== (a = null == _ ? void 0 : _[o.id]) && void 0 !== a ? a : 0,
    onDragStart: f,
    onDragReset: O,
    onDragComplete: M,
    disableHover: null != g,
    disableDrag: r.length !== N.length,
    setEditRoleId: t,
    setSelectedSection: l
  }, o.id);
}, [
  N,
  n,
  E,
  _,
  f,
  O,
  M,
  g,
  r,
  t,
  l
]);
  return (0, s.jsx)(I.Xi, {
sections: [Math.max(N.length, 1)],
sectionHeight: c,
renderSection: o,
rowHeight: 61,
renderRow: D
  });
}

function b() {
  return (0, s.jsxs)('div', {
className: D.emptyRoles,
children: [
  (0, s.jsx)('div', {
    className: v.dragSpacing
  }),
  (0, s.jsx)(u.GroupIcon, {
    size: 'md',
    color: 'currentColor'
  }),
  (0, s.jsx)(u.Text, {
    className: D.emptyRolesText,
    variant: 'text-md/semibold',
    color: 'text-muted',
    children: M.Z.Messages.ROLE_LIST_EMPTY
  })
]
  });
}

function U(e) {
  var t, i, c;
  let {
role: d,
guild: I,
highestRole: N,
currentPosition: h,
memberCount: g,
onDragStart: C,
onDragReset: x,
onDragComplete: p,
disableHover: R,
disableDrag: L,
setEditRoleId: A,
setSelectedSection: Z
  } = e, b = (0, f.T)(I, N, d), U = null != b, [P, B] = a.useState(!1), y = a.useMemo(() => ({
type: j,
item: () => (C(d.id), {
  id: d.id,
  position: h
}),
canDrag: () => P && !U,
collect: e => ({
  isDragging: e.isDragging()
}),
end: (e, t) => {
  let n = t.getDropResult();
  if (null == n) {
    x();
    return;
  }
  p(n.roleId);
}
  }), [
d,
C,
x,
p,
U,
P
  ]), [{
isDragging: F
  }, w] = (0, l.c)(y), k = a.useMemo(() => ({
accept: j,
canDrop: () => !U,
collect: e => {
  let t = e.getItem();
  return null != t && e.isOver() && e.canDrop() ? {
    dragSourcePosition: t.position
  } : {
    dragSourcePosition: null
  };
},
drop: () => ({
  roleId: d.id
})
  }), [
U,
d
  ]), [{
dragSourcePosition: H
  }, V] = (0, o.L)(k), Y = a.useCallback(e => {
(0, _.jW)(e, async () => {
  let {
    default: e
  } = await Promise.resolve().then(n.bind(n, 741247));
  return t => (0, s.jsx)(e, {
    ...t,
    role: d,
    guild: I
  });
});
  }, [
I,
d
  ]), W = (0, m.useHasGuildRoleItems)(I, d);
  if (F)
return (0, s.jsx)('div', {
  ref: w,
  className: r()(D.roleRow, D.roleRowDragging)
});

  function z() {
A(d.id);
  }

  function K() {
z(), Z(O.ZI.MEMBERS);
  }
  return (0, s.jsxs)(u.Clickable, {
className: r()(D.roleRow, {
  [D.roleRowDisableHover]: R,
  [D.containerDragBefore]: null != H && h < H,
  [D.containerDragAfter]: null != H && h > H
}),
onClick: z,
onContextMenu: Y,
innerRef: e => w(V(e)),
'data-dnd-name': d.name,
'aria-label': M.Z.Messages.ROLE_ROW_DESCRIPTION.format({
  name: d.name,
  count: ''.concat(g)
}),
children: [
  (0, s.jsx)('div', {
    className: r()(D.dragIcon, v.dragSpacing, {
      [D.dragIconHidden]: U || L
    }),
    onMouseEnter: () => B(!0),
    onMouseLeave: () => B(!1),
    children: (0, s.jsx)(u.DragIcon, {
      size: 'xs',
      color: 'currentColor'
    })
  }),
  (0, s.jsxs)('div', {
    className: r()(D.roleNameContainer, v.roleNameSpacing),
    children: [
      (null === (t = d.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? (0, s.jsx)(E.Z, {
        className: D.roleFlowerStar,
        color: d.colorString,
        size: 24
      }) : (0, s.jsx)(G, {
        guildId: I.id,
        role: d,
        size: 24,
        className: D.roleIcon,
        defaultIconClassName: D.shield
      }),
      null != b ? (0, s.jsx)(f.Z, {
        className: D.lock,
        tooltipText: b
      }) : null,
      (0, s.jsx)(u.Text, {
        className: D.roleName,
        color: 'header-primary',
        variant: 'text-md/medium',
        children: d.name
      }),
      (null === (i = d.tags) || void 0 === i ? void 0 : i.subscription_listing_id) != null && (0, s.jsx)(S.Z, {
        className: D.subscriptionRoleIcon,
        'aria-label': M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PREMIUM_ROLE_ICON_LABEL
      }),
      (null === (c = d.tags) || void 0 === c ? void 0 : c.is_guild_product_role) === !0 && (0, s.jsx)(T.Z, {})
    ]
  }),
  (0, s.jsx)(u.Tooltip, {
    text: M.Z.Messages.ROLE_OVERVIEW_VIEW_MEMBERS,
    'aria-label': M.Z.Messages.ROLE_ROW_VIEW_MEMBERS.format({
      count: ''.concat(g)
    }),
    position: 'right',
    children: e => (0, s.jsxs)(u.Clickable, {
      ...e,
      className: r()(D.memberCountContainer, v.memberSpacing),
      onClick: K,
      children: [
        (0, s.jsx)(u.Text, {
          variant: 'text-md/normal',
          color: 'none',
          children: g
        }),
        (0, s.jsx)(u.UserIcon, {
          size: 'custom',
          color: 'currentColor',
          className: D.person,
          width: 20,
          height: 20
        })
      ]
    })
  }),
  (0, s.jsxs)('div', {
    className: r()(D.buttonsContainer, v.buttonsSpacing),
    children: [
      (0, s.jsx)(u.CircleIconButton, {
        className: r()(D.circleButton, D.editButton),
        tooltip: U ? M.Z.Messages.VIEW : M.Z.Messages.EDIT,
        color: u.CircleIconButtonColors.SECONDARY,
        size: u.CircleIconButtonSizes.SIZE_36,
        icon: U ? (0, s.jsx)(u.EyeIcon, {
          size: 'custom',
          color: 'currentColor',
          width: 20,
          height: 20
        }) : (0, s.jsx)(u.PencilIcon, {
          size: 'custom',
          color: 'currentColor',
          width: 20,
          height: 20
        }),
        onClick: z
      }),
      (0, s.jsx)(u.CircleIconButton, {
        className: D.circleButton,
        tooltip: M.Z.Messages.MORE,
        color: u.CircleIconButtonColors.SECONDARY,
        size: u.CircleIconButtonSizes.SIZE_36,
        icon: (0, s.jsx)(u.MoreHorizontalIcon, {
          size: 'custom',
          color: 'currentColor',
          width: 20,
          height: 20
        }),
        onClick: Y,
        disabled: !W
      })
    ]
  })
]
  });
}

function G(e) {
  var t;
  let {
guildId: n,
role: a,
size: i,
enableTooltip: l,
className: o,
defaultIconClassName: d
  } = e, _ = (0, N.p9)({
guildId: n,
roleId: a.id,
size: i
  });
  return null != _ ? (0, s.jsx)(g.Z, {
..._,
className: o,
enableTooltip: l
  }) : (0, s.jsx)(u.ShieldUserIcon, {
size: 'custom',
className: r()(o, d),
color: null !== (t = a.colorString) && void 0 !== t ? t : (0, c.Rf)(A.p6O),
width: i,
height: i
  });
}