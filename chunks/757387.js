i.r(n);
var r = i(735250);
i(470079);
var t = i(442837),
  l = i(481060),
  a = i(239091),
  s = i(883385),
  u = i(108843),
  o = i(911969),
  d = i(947440),
  c = i(100527),
  Z = i(441061),
  E = i(167675),
  _ = i(737013),
  M = i(145474),
  f = i(299206),
  C = i(976192),
  I = i(819403),
  p = i(286694),
  N = i(592125),
  U = i(777658),
  h = i(858488),
  A = i(185457),
  S = i(933409),
  T = i(570870),
  g = i(389052),
  x = i(24311),
  v = i(332576),
  m = i(710631),
  P = i(297047),
  R = i(88966),
  b = i(712301),
  j = i(991307),
  O = i(725119),
  G = i(931617),
  L = i(700994),
  F = i(332031),
  y = i(981631),
  V = i(689938);
n.default = (0, u.Z)((0, s.Z)(function(e) {
  let {
user: n,
guildId: i,
channel: s,
showMediaItems: u = !1,
showChatItems: c = !0,
showChannelCallItems: k = !1,
showModalItems: D = !0,
showStageChannelItems: w = !1,
context: H,
onSelect: K,
onHeightUpdate: W,
viewingChannelId: B
  } = e, X = {
page: y.ZY5.GUILD_CHANNEL,
section: y.jXE.CHAT_USERNAME,
object: y.qAy.CONTEXT_MENU_ITEM
  }, Y = (0, O.Z)(n.id, i, s.id), q = (0, P.Z)(n, i, H), z = (0, R.Z)(n.id, H), J = (0, F.Z)(n.id), Q = (0, x.Z)({
user: n,
context: H
  }), $ = (0, A.Z)({
user: n,
guildId: i,
context: H
  }), ee = (0, h.Z)({
user: n
  }), en = (0, L.Z)(n.id), ei = (0, j.Z)(n.id), er = (0, M.P)({
userId: n.id,
channelId: s.id,
location: 'GuildChannelUserContextMenu'
  }), et = (0, C.Z)({
guildId: i,
userId: n.id,
analyticsLocation: X,
context: H
  }), el = (0, m.Z)({
user: n,
guildId: i
  }), ea = (0, d.Z)(null, n), es = (0, U.Z)(n), eu = (0, g.Z)({
user: n
  }), eo = (0, S.Z)(n, i, s.id), ed = (0, G.Z)(n.id, i), ec = (0, b.Z)(n, i), eZ = (0, f.Z)({
id: n.id,
label: V.Z.Messages.COPY_ID_USER
  }), eE = (0, v.Z)(n.id, s.id), e_ = (0, E.Z)(n.id), eM = (0, Z.Z)(s.id), ef = (0, I.Z)(n), eC = (0, p.Z)(n, i, s.id), eI = (0, t.e7)([N.Z], () => null != B ? N.Z.getChannel(B) : null), ep = (0, T.Z)({
commandType: o.yU.USER,
commandTargetId: n.id,
channel: null != eI ? eI : s,
guildId: i,
onHeightUpdate: W,
context: H
  }), eN = (0, _.Z)(n.id), eU = n.isNonUserBot();
  return (0, r.jsxs)(l.Menu, {
navId: 'user-context',
onClose: a.Zy,
'aria-label': V.Z.Messages.USER_ACTIONS_MENU_LABEL,
onSelect: K,
children: [
  !eU && (0, r.jsxs)(r.Fragment, {
    children: [
      (0, r.jsxs)(l.MenuGroup, {
        children: [
          ef,
          w && eC
        ]
      }),
      (0, r.jsxs)(l.MenuGroup, {
        children: [
          D && Y,
          c && q,
          z,
          Q,
          D && $,
          D && ee,
          J
        ]
      }),
      u && (0, r.jsx)(l.MenuGroup, {
        children: en
      }),
      (0, r.jsx)(l.MenuGroup, {
        children: D && ea
      }),
      (0, r.jsxs)(l.MenuGroup, {
        children: [
          u && ei,
          u && er,
          u && eE,
          D && et,
          ep,
          D && el,
          es,
          D && eu,
          k && eN
        ]
      }),
      (0, r.jsx)(l.MenuGroup, {
        children: eo
      }),
      (0, r.jsxs)(l.MenuGroup, {
        children: [
          ed,
          ec
        ]
      }),
      k && (0, r.jsxs)(l.MenuGroup, {
        children: [
          eM,
          e_
        ]
      })
    ]
  }),
  (0, r.jsx)(l.MenuGroup, {
    children: eZ
  })
]
  });
}, {
  object: y.qAy.CONTEXT_MENU
}), [
  c.Z.CONTEXT_MENU,
  c.Z.GUILD_CHANNEL_USER_MENU
]);