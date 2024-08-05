t.r(n);
var i = t(735250);
t(470079);
var r = t(481060),
  a = t(239091),
  s = t(883385),
  l = t(108843),
  o = t(911969),
  u = t(947440),
  d = t(100527),
  c = t(441061),
  E = t(167675),
  _ = t(737013),
  I = t(145474),
  T = t(299206),
  N = t(819403),
  S = t(777658),
  p = t(858488),
  f = t(185457),
  A = t(570870),
  O = t(389052),
  h = t(24311),
  Z = t(915193),
  M = t(332576),
  m = t(710631),
  g = t(297047),
  R = t(88966),
  v = t(397616),
  C = t(558924),
  G = t(991307),
  y = t(725119),
  D = t(700994),
  P = t(332031),
  b = t(981631),
  U = t(689938);
n.default = (0, l.Z)((0, s.Z)(function(e) {
  var n;
  let {
user: t,
channel: s,
context: l,
showChatItems: d = !0,
showMediaItems: b = !1,
showChannelCallItems: x = !1,
showModalItems: H = !0,
onSelect: j,
onHeightUpdate: L
  } = e, w = (0, y.Z)({
userId: t.id,
guildId: null
  }), F = (0, g.Z)(t, null, l), B = (0, C.Z)(t.id, s.id), V = (0, R.Z)(t.id, l), k = (0, h.Z)({
user: t,
context: l
  }), W = (0, f.Z)({
user: t,
context: l
  }), K = (0, p.Z)({
user: t
  }), Y = (0, D.Z)(t.id), z = (0, v.Z)(t.id, s.id), q = (0, G.Z)(t.id), Q = (0, I.P)({
userId: t.id,
channelId: s.id,
location: 'GroupDMUserContextMenu'
  }), $ = (0, M.Z)(t.id, s.id), X = (0, m.Z)({
user: t
  }), J = (0, u.Z)(null, t), ee = (0, S.Z)(t), en = (0, O.Z)({
user: t
  }), et = (0, T.Z)({
id: t.id,
label: U.Z.Messages.COPY_ID_USER
  }), ei = (0, P.Z)(t.id), er = (0, E.Z)(t.id), ea = (0, c.Z)(s.id), es = (0, N.Z)(t), el = (0, _.Z)(t.id), eo = (0, A.Z)({
commandType: o.yU.USER,
commandTargetId: t.id,
channel: s,
guildId: void 0,
onHeightUpdate: L
  }), eu = (0, Z.Z)(t, s), ed = t.isNonUserBot(), ec = s.isManaged(), eE = null === (n = s.recipients) || void 0 === n ? void 0 : n.includes(t.id);
  return (0, i.jsxs)(r.Menu, {
navId: 'user-context',
onClose: a.Zy,
'aria-label': U.Z.Messages.USER_ACTIONS_MENU_LABEL,
onSelect: j,
children: [
  !ed && (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(r.MenuGroup, {
        children: es
      }),
      (0, i.jsxs)(r.MenuGroup, {
        children: [
          H && w,
          d && F,
          V,
          k,
          !ec && B,
          H && W,
          H && K,
          ei
        ]
      }),
      b && (0, i.jsx)(r.MenuGroup, {
        children: Y
      }),
      eE && (0, i.jsxs)(r.MenuGroup, {
        children: [
          !ec && z,
          eu
        ]
      }),
      (0, i.jsx)(r.MenuGroup, {
        children: H && J
      }),
      (0, i.jsxs)(r.MenuGroup, {
        children: [
          b && q,
          b && Q,
          b && $,
          eo,
          H && X,
          ee,
          H && en,
          b && el
        ]
      }),
      x && (0, i.jsxs)(r.MenuGroup, {
        children: [
          ea,
          er
        ]
      })
    ]
  }),
  (0, i.jsx)(r.MenuGroup, {
    children: et
  })
]
  });
}, {
  object: b.qAy.CONTEXT_MENU
}), [
  d.Z.CONTEXT_MENU,
  d.Z.GROUP_DM_USER_MENU
]);