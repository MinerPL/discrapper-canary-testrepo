n(627494), n(757143);
var i = n(735250),
  a = n(470079),
  s = n(442837),
  l = n(481060),
  r = n(2052),
  o = n(620662),
  c = n(841784),
  u = n(429589),
  d = n(403404),
  h = n(906732),
  p = n(522474),
  m = n(706454),
  _ = n(823379),
  f = n(5192),
  E = n(192918),
  g = n(561308),
  C = n(907152),
  I = n(206295),
  x = n(297781),
  T = n(591853),
  N = n(797342),
  v = n(981631),
  S = n(701488),
  Z = n(689938);
let A = (e, t) => Z.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
username: t.username,
activity: e.extra.activity_name
  }),
  M = (e, t, n) => {
let i = Z.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME,
  a = f.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
  s = e.extra.activity_name;
return i.plainFormat({
  gameName: s,
  userName: a
}).replaceAll('*', '');
  },
  b = e => {
let {
  entry: t,
  channel: n,
  users: i,
  countOthers: a
} = e;
return Z.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYED.plainFormat({
  gameName: t.extra.activity_name,
  user1: f.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, i[0]),
  user2: f.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, i[1]),
  countOthers: a
}).replaceAll('*', '');
  };
t.ZP = e => {
  var t;
  let {
channel: n,
entry: f,
requestId: R,
closePopout: j
  } = e, {
iconUrl: L,
iconTitle: P,
user: O,
details: y,
activity: D,
coverImageUrl: k,
richIcon: U
  } = (0, N.n)(f), {
primaryColor: w,
secondaryColor: B
  } = (0, I.Z)(L), H = (0, s.e7)([m.default], () => m.default.locale), {
displayParticipants: G,
participant1: V,
participant2: F,
numOtherParticipants: W
  } = (0, E.Z)(f, 3), z = (0, r.O)(), {
analyticsLocations: Y
  } = (0, h.ZP)(), K = p.Z.getWindowOpen(v.KJ3.CHANNEL_CALL_POPOUT), q = () => {
(0, d.Z)({
  guildId: n.guild_id,
  locationObject: z.location,
  openInPopout: K,
  initialSelectedApplicationId: f.extra.application_id,
  initialSlide: S.ag.SELECT_CHANNEL,
  analyticsLocations: Y
});
  }, X = a.useCallback(e => {
if (null == L || null == n || null == O)
  return;
let t = W > 0 ? b({
  entry: f,
  channel: n,
  users: [
    V,
    F
  ],
  countOthers: W
}) : M(f, n, O);
return (0, C.C4)({
  entry: f,
  applicationImageSrc: L,
  avatarSrcs: G.map(e => e.getAvatarURL(n.guild_id, 128)),
  description: t,
  timestamp: (0, g.yh)(f, H),
  colors: [
    w,
    B
  ],
  channelId: e
});
  }, [
L,
n,
G,
f,
H,
W,
V,
F,
w,
B,
O
  ]);
  if (null == O)
return null;
  let Q = (0, i.jsx)(x.PZ, {
  location: x.Gt.POPOUT,
  entry: f
}),
J = (0, i.jsx)(T.wG, {
  thumbnailSrc: null !== (t = null != U ? U : k) && void 0 !== t ? t : L,
  thumbnailTitle: P,
  channel: n,
  userDescription: (0, g.kr)(f) ? Z.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING : Z.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
  title: f.extra.activity_name,
  subtitle: y,
  badges: Q,
  entry: f,
  onClickTitle: q,
  onClickSubtitle: q,
  onClickThumbnail: q
}),
$ = (0, o.Z)(D, v.xjy.JOIN) || (0, c.Z)(D) ? (0, i.jsx)(u.Z, {
  activity: D,
  user: O,
  ButtonComponent: e => (0, i.jsx)(T.Ll, {
    IconComponent: l.GameControllerIcon,
    ...e
  })
}) : null,
ee = [
  $,
  (0, i.jsx)(T.Ll, {
    onClick: q,
    IconComponent: l.ActivitiesIcon,
    children: Z.Z.Messages.CONTENT_INVENTORY_VIEW_ACTIVITY
  })
].filter(_.lm);
  return (0, i.jsxs)(T.yR, {
children: [
  J,
  (0, i.jsx)(T.St, {
    children: (0, i.jsx)(T.WT, {
      closePopout: j,
      user: O,
      channel: n,
      generateReactionImage: X,
      reactionImageAltText: A(f, O),
      entry: f,
      requestId: R,
      buttons: ee
    })
  })
]
  });
};