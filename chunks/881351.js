t.r(n);
var s = t(735250);
t(470079);
var i = t(481060),
  l = t(239091),
  a = t(883385),
  o = t(108843),
  u = t(947440),
  d = t(100527),
  r = t(299206),
  c = t(819403),
  Z = t(777658),
  E = t(858488),
  M = t(185457),
  _ = t(389052),
  f = t(24311),
  N = t(710631),
  g = t(88966),
  A = t(991307),
  I = t(725119),
  m = t(700994),
  T = t(332031),
  S = t(981631),
  C = t(689938);
n.default = (0, o.Z)((0, a.Z)(function(e) {
  let {
user: n,
guildId: t,
channelId: a,
showMediaItems: o = !1,
mediaEngineContext: d,
onSelect: S
  } = e, O = (0, I.Z)({
userId: n.id,
guildId: t,
channelId: a
  }), v = (0, g.Z)(n.id), x = (0, f.Z)({
user: n
  }), U = (0, M.Z)({
user: n
  }), D = (0, E.Z)({
user: n
  }), b = (0, T.Z)(n.id), L = (0, m.Z)(n.id), h = (0, A.Z)(n.id, d), R = (0, N.Z)({
user: n
  }), j = (0, u.Z)(null, n), p = (0, Z.Z)(n), V = (0, _.Z)({
user: n
  }), k = (0, r.Z)({
id: n.id,
label: C.Z.Messages.COPY_ID_USER
  }), F = (0, c.Z)(n), P = n.isNonUserBot();
  return (0, s.jsxs)(i.Menu, {
navId: 'user-context',
onClose: l.Zy,
'aria-label': C.Z.Messages.USER_ACTIONS_MENU_LABEL,
onSelect: S,
children: [
  !P && (0, s.jsxs)(s.Fragment, {
    children: [
      (0, s.jsx)(i.MenuGroup, {
        children: F
      }),
      (0, s.jsxs)(i.MenuGroup, {
        children: [
          O,
          v,
          x,
          U,
          D,
          b
        ]
      }),
      o && (0, s.jsx)(i.MenuGroup, {
        children: L
      }),
      (0, s.jsx)(i.MenuGroup, {
        children: j
      }),
      (0, s.jsxs)(i.MenuGroup, {
        children: [
          o && h,
          R,
          p,
          V
        ]
      })
    ]
  }),
  (0, s.jsx)(i.MenuGroup, {
    children: k
  })
]
  });
}, {
  object: S.qAy.CONTEXT_MENU
}), [
  d.Z.CONTEXT_MENU,
  d.Z.USER_GENERIC_MENU
]);