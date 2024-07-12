n.d(t, {
  Z: function() {
return S;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  l = n(392711),
  s = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(32750),
  d = n(109764),
  u = n(323597),
  h = n(438536),
  p = n(251746),
  m = n(193987),
  _ = n(933793),
  f = n(13736),
  E = n(732393),
  C = n(137591),
  g = n(299206),
  I = n(665149),
  x = n(695346),
  T = n(979651),
  v = n(488131),
  N = n(689938);

function S(e) {
  let {
channel: t
  } = e, [n, l] = a.useState(!1);

  function s() {
l(e => !e);
  }
  let r = N.Z.Messages.MORE;
  return (0, i.jsx)(o.Popout, {
shouldShow: n,
animation: o.Popout.Animation.NONE,
position: 'bottom',
align: 'right',
autoInvert: !1,
onRequestClose: () => l(!1),
renderPopout: function(e) {
  return (0, i.jsx)(Z, {
    ...e,
    channel: t
  });
},
children: (e, t) => {
  let {
    isShown: n
  } = t;
  return (0, i.jsx)(I.ZP.Icon, {
    ...e,
    onClick: s,
    tooltip: n ? null : r,
    icon: o.MoreHorizontalIcon,
    'aria-label': r,
    selected: n
  });
}
  });
}

function Z(e) {
  let {
channel: t,
closePopout: n,
onSelect: a
  } = e, l = (0, c.Z)(t), I = (0, m.Z)(t), S = (0, E.Z)(t.id), Z = (0, f.Z)(t), A = (0, g.Z)({
id: t.id,
label: N.Z.Messages.COPY_ID_THREAD
  }), M = (0, d.Z)(t), b = (0, u.Z)(t), R = (0, h.Z)(t, 'Toolbar Overflow'), j = (0, _.Z)(t), L = (0, p.Z)(t), P = (0, C.Z)(t), O = x.vF.useSetting(), y = (0, r.e7)([T.Z], () => !s().isEmpty(T.Z.getVoiceStatesForChannel(t.id)));
  return (0, i.jsxs)(o.Menu, {
navId: 'thread-context',
onClose: n,
'aria-label': N.Z.Messages.THREAD_ACTIONS_MENU_LABEL,
onSelect: a,
children: [
  (0, i.jsxs)(o.MenuGroup, {
    children: [
      R,
      L
    ]
  }),
  (0, i.jsxs)(o.MenuGroup, {
    children: [
      Z,
      j,
      S,
      O && !y ? (0, i.jsx)(o.MenuItem, {
        id: 'open',
        label: N.Z.Messages.OPEN_IN_SPLIT_VIEW,
        action: function() {
          (0, v.ok)(t);
        }
      }) : null
    ]
  }),
  (0, i.jsxs)(o.MenuGroup, {
    children: [
      P,
      l,
      I,
      b
    ]
  }),
  (0, i.jsxs)(o.MenuGroup, {
    children: [
      M,
      A
    ]
  })
]
  });
}