t.r(e);
var i = t(735250);
t(470079);
var u = t(481060),
  l = t(239091),
  r = t(883385),
  s = t(108843),
  a = t(947440),
  d = t(100527),
  o = t(299206),
  _ = t(819403),
  c = t(777658),
  E = t(858488),
  T = t(185457),
  S = t(389052),
  f = t(24311),
  A = t(710631),
  I = t(88966),
  M = t(991307),
  N = t(725119),
  O = t(700994),
  Z = t(332031),
  g = t(981631),
  h = t(689938);
e.default = (0, s.Z)((0, r.Z)(function(n) {
  let {
user: e,
showMediaItems: t = !1,
mediaEngineContext: r,
onSelect: s
  } = n, d = (0, N.Z)(e.id), g = (0, I.Z)(e.id), p = (0, f.Z)({
user: e
  }), C = (0, T.Z)({
user: e
  }), R = (0, E.Z)({
user: e
  }), P = (0, Z.Z)(e.id), v = (0, O.Z)(e.id), U = (0, M.Z)(e.id, r), y = (0, A.Z)({
user: e
  }), b = (0, a.Z)(null, e), G = (0, c.Z)(e), D = (0, S.Z)({
user: e
  }), m = (0, o.Z)({
id: e.id,
label: h.Z.Messages.COPY_ID_USER
  }), w = (0, _.Z)(e), x = e.isNonUserBot();
  return (0, i.jsxs)(u.Menu, {
navId: 'user-context',
onClose: l.Zy,
'aria-label': h.Z.Messages.USER_ACTIONS_MENU_LABEL,
onSelect: s,
children: [
  !x && (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(u.MenuGroup, {
        children: w
      }),
      (0, i.jsxs)(u.MenuGroup, {
        children: [
          d,
          g,
          p,
          C,
          R,
          P
        ]
      }),
      t && (0, i.jsx)(u.MenuGroup, {
        children: v
      }),
      (0, i.jsx)(u.MenuGroup, {
        children: b
      }),
      (0, i.jsxs)(u.MenuGroup, {
        children: [
          t && U,
          y,
          G,
          D
        ]
      })
    ]
  }),
  (0, i.jsx)(u.MenuGroup, {
    children: m
  })
]
  });
}, {
  object: g.qAy.CONTEXT_MENU
}), [
  d.Z.CONTEXT_MENU,
  d.Z.USER_GENERIC_MENU
]);