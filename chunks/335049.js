t.d(n, {
  Z: function() {
return R;
  }
});
var i = t(735250),
  a = t(470079),
  s = t(120356),
  l = t.n(s),
  o = t(512722),
  r = t.n(o),
  d = t(866442),
  c = t(442837),
  u = t(481060),
  I = t(239091),
  m = t(895924),
  _ = t(581364),
  N = t(471445),
  E = t(91218),
  T = t(518738),
  h = t(592125),
  g = t(271383),
  p = t(430824),
  f = t(246946),
  C = t(594174),
  x = t(51144),
  O = t(981631),
  S = t(689938),
  A = t(694182);

function R(e) {
  let {
guild: n,
id: s,
type: l,
isLocked: o,
lockTooltipText: d
  } = e, c = !o || null != d;
  r()(c, 'No lockTooltipText provided while isLocked=true');
  let u = a.useCallback(e => {
(0, I.jW)(e, async () => {
  let {
    default: e
  } = await t.e('5396').then(t.bind(t, 731646));
  return n => (0, i.jsx)(e, {
    ...n,
    id: s,
    label: S.Z.Messages.COPY_ID_COMMAND
  });
});
  }, [s]);
  switch (l) {
case m.Kw.CHANNEL:
  return (0, i.jsx)(b, {
    guild: n,
    id: s,
    isLocked: o,
    lockTooltipText: d,
    openEntryContextMenu: u
  });
case m.Kw.ROLE:
  return (0, i.jsx)(Z, {
    guild: n,
    id: s,
    isLocked: o,
    lockTooltipText: d,
    openEntryContextMenu: u
  });
case m.Kw.USER:
  return (0, i.jsx)(v, {
    guild: n,
    id: s,
    isLocked: o,
    lockTooltipText: d,
    openEntryContextMenu: u
  });
  }
}

function b(e) {
  let {
guild: n,
id: t,
isLocked: s,
lockTooltipText: o,
openEntryContextMenu: r
  } = e, d = (0, _.bD)(n.id), {
icon: I,
name: m,
categoryName: E
  } = (0, c.cj)([h.Z], () => {
if (d === t)
  return {
    name: S.Z.Messages.INTEGRATIONS_APPLICATION_ALL_CHANNELS,
    icon: u.TextIcon
  };
let e = h.Z.getChannel(t),
  i = (null == e ? void 0 : e.parent_id) != null ? h.Z.getChannel(e.parent_id) : null;
return {
  icon: null != e ? (0, N.KS)(e, n) : null,
  name: null == e ? void 0 : e.name,
  categoryName: null == i ? void 0 : i.name
};
  }, [
d,
n,
t
  ]), T = a.useCallback(e => {
t !== d && r(e);
  }, [
d,
t,
r
  ]);
  return null == I || null == m ? null : (0, i.jsxs)('div', {
onContextMenu: T,
className: A.identifier,
children: [
  (0, i.jsx)(I, {
    size: 'custom',
    width: 20,
    height: 20,
    color: 'currentColor',
    className: l()(A.channelIcon, A.image)
  }),
  (0, i.jsx)(u.Text, {
    className: A.roleName,
    color: 'header-primary',
    variant: 'text-md/normal',
    children: m
  }),
  null != E ? (0, i.jsxs)(u.Text, {
    className: A.tag,
    variant: 'text-sm/normal',
    children: [
      '(',
      E,
      ')'
    ]
  }) : null,
  s ? (0, i.jsx)(M, {
    tooltipText: o
  }) : null
]
  });
}

function Z(e) {
  var n;
  let {
guild: s,
id: o,
isLocked: r,
lockTooltipText: m
  } = e, _ = (0, c.e7)([p.Z], () => p.Z.getRole(s.id, o)), N = (0, T.p9)({
guildId: s.id,
roleId: o,
size: 24
  }), h = a.useCallback(e => {
if (null != s && null != _)
  (0, I.jW)(e, async () => {
    let {
      default: e
    } = await t.e('14486').then(t.bind(t, 786746));
    return n => (0, i.jsx)(e, {
      ...n,
      guild: s,
      role: _
    });
  });
  }, [
s,
_
  ]);
  return (null == _ ? void 0 : _.name) == null ? null : (0, i.jsxs)('div', {
onContextMenu: h,
className: A.identifier,
children: [
  null != N ? (0, i.jsx)(E.Z, {
    className: l()(A.__invalid_icon, A.image),
    ...N
  }) : (0, i.jsx)(u.ShieldUserIcon, {
    size: 'custom',
    width: 23,
    height: 23,
    className: l()(A.shield, A.image),
    color: null !== (n = _.colorString) && void 0 !== n ? n : (0, d.Rf)(O.p6O)
  }),
  (0, i.jsx)(u.Text, {
    className: A.roleName,
    color: 'header-primary',
    variant: 'text-md/normal',
    children: _.name
  }),
  r ? (0, i.jsx)(M, {
    tooltipText: m
  }) : null
]
  });
}

function v(e) {
  let {
guild: n,
id: t,
isLocked: a,
lockTooltipText: s,
openEntryContextMenu: l
  } = e, o = (0, c.e7)([C.default], () => C.default.getUser(t)), r = (0, c.e7)([g.ZP], () => {
var e;
return null === (e = g.ZP.getMember(n.id, t)) || void 0 === e ? void 0 : e.nick;
  }, [
n.id,
t
  ]), d = (0, c.e7)([f.Z], () => f.Z.hidePersonalInformation);
  return null == o ? null : (0, i.jsxs)('div', {
onContextMenu: l,
className: A.identifier,
children: [
  (0, i.jsx)(u.Avatar, {
    className: A.image,
    src: o.getAvatarURL(n.id, 24),
    'aria-label': o.username,
    size: u.AvatarSizes.SIZE_24
  }),
  (0, i.jsx)(u.Text, {
    className: A.roleName,
    color: 'header-primary',
    variant: 'text-md/normal',
    children: null != r ? r : o.username
  }),
  d ? null : (0, i.jsx)(u.Text, {
    className: A.tag,
    variant: 'text-sm/normal',
    children: x.ZP.getUserTag(o)
  }),
  a ? (0, i.jsx)(M, {
    tooltipText: s
  }) : null
]
  });
}

function M(e) {
  let {
tooltipText: n
  } = e;
  return (0, i.jsx)(u.Tooltip, {
text: n,
children: e => (0, i.jsx)('div', {
  className: A.lockIcon,
  ...e,
  children: (0, i.jsx)(u.LockIcon, {
    size: 'xs',
    color: 'currentColor'
  })
})
  });
}