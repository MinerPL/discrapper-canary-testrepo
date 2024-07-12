i.r(e);
var l = i(735250);
i(470079);
var u = i(481060),
  o = i(239091),
  r = i(883385),
  t = i(108843),
  a = i(947440),
  d = i(100527),
  s = i(299206),
  c = i(976192),
  p = i(276022),
  Z = i(777658),
  v = i(858488),
  _ = i(185457),
  A = i(933409),
  E = i(389052),
  M = i(24311),
  I = i(710631),
  b = i(297047),
  N = i(88966),
  f = i(712301),
  T = i(991307),
  h = i(725119),
  C = i(931617),
  U = i(700994),
  j = i(332031),
  G = i(981631),
  g = i(689938);
e.default = (0, t.Z)((0, r.Z)(function(n) {
  let {
user: e,
guildId: i,
showModalItems: r = !0,
showMediaItems: t = !1,
showChatItems: d = !0,
context: x,
onSelect: O
  } = n, P = {
page: G.ZY5.GUILD_CHANNEL,
section: G.jXE.CHAT_USERNAME,
object: G.qAy.CONTEXT_MENU_ITEM
  }, L = (0, h.Z)(e.id, i), R = (0, b.Z)(e, i, x), m = (0, N.Z)(e.id, x), y = (0, j.Z)(e.id), S = (0, M.Z)({
user: e,
context: x
  }), w = (0, _.Z)({
user: e,
guildId: i,
context: x
  }), D = (0, v.Z)({
user: e
  }), k = (0, U.Z)(e.id), q = (0, T.Z)(e.id), z = (0, c.Z)({
guildId: i,
userId: e.id,
analyticsLocation: P,
context: x
  }), H = (0, p.Z)({
user: e,
guildId: i
  }), X = (0, I.Z)({
user: e,
guildId: i
  }), B = (0, a.Z)(null, e), W = (0, Z.Z)(e), Y = (0, E.Z)({
user: e
  }), F = (0, A.Z)(e, i), K = (0, C.Z)(e.id, i), V = (0, f.Z)(e, i), J = (0, s.Z)({
id: e.id,
label: g.Z.Messages.COPY_ID_USER
  }), Q = e.isNonUserBot();
  return (0, l.jsxs)(u.Menu, {
navId: 'user-context',
onClose: o.Zy,
'aria-label': g.Z.Messages.USER_ACTIONS_MENU_LABEL,
onSelect: O,
children: [
  !Q && (0, l.jsxs)(l.Fragment, {
    children: [
      (0, l.jsxs)(u.MenuGroup, {
        children: [
          r && L,
          d && R,
          m,
          S,
          r && w,
          r && D,
          y
        ]
      }),
      t && (0, l.jsx)(u.MenuGroup, {
        children: k
      }),
      (0, l.jsx)(u.MenuGroup, {
        children: r && B
      }),
      (0, l.jsxs)(u.MenuGroup, {
        children: [
          t && q,
          r && z,
          r && X,
          W,
          H,
          r && Y
        ]
      }),
      (0, l.jsx)(u.MenuGroup, {
        children: F
      }),
      (0, l.jsxs)(u.MenuGroup, {
        children: [
          K,
          V
        ]
      })
    ]
  }),
  (0, l.jsx)(u.MenuGroup, {
    children: J
  })
]
  });
}, {
  object: G.qAy.CONTEXT_MENU
}), [
  d.Z.CONTEXT_MENU,
  d.Z.GUILD_USER_MENU
]);