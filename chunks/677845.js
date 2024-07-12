n.d(t, {
  Z: function() {
return S;
  }
}), n(653041);
var i = n(735250),
  a = n(470079),
  l = n(990547),
  s = n(442837),
  r = n(704215),
  o = n(40851),
  c = n(317381),
  d = n(374065),
  u = n(213609),
  h = n(358221),
  p = n(381586),
  m = n(159300),
  _ = n(470956),
  f = n(430824),
  E = n(496675),
  C = n(199052),
  g = n(434488),
  I = n(27457),
  x = n(251564),
  T = n(695492),
  v = n(981631),
  N = n(97727);

function S(e) {
  let {
participants: t,
onClick: n,
onDoubleClick: S,
onContextMenu: Z,
channel: A,
className: M,
inCall: b,
totalNumberOfParticipants: R,
paused: j = !1
  } = e, L = (0, o.bp)() === v.IlC.POPOUT, P = (0, s.e7)([f.Z], () => f.Z.getGuild(A.guild_id), [A.guild_id]), {
dismissedActivityEntryPointTileChannel: O
  } = (0, x.d)(), y = (0, s.e7)([h.Z], () => h.Z.getUserParticipantCount(A.id), [A]), D = (0, _.bt)(A.id, t), k = a.useCallback(() => {
x.d.setState({
  dismissedActivityEntryPointTileChannel: A.id
});
  }, [A.id]);
  a.useEffect(() => {
null != O && A.id !== O && x.d.setState({
  dismissedActivityEntryPointTileChannel: null
});
  }, [
A.id,
O
  ]);
  let U = (0, s.e7)([E.Z], () => A.isPrivate() || (0, m.b)(E.Z, P, A), [
  P,
  A
]),
w = (null == P ? void 0 : P.afkChannelId) === A.id,
B = A.userLimit <= 0 || A.userLimit > 1,
H = (0, s.e7)([c.ZP], () => c.ZP.getEmbeddedActivitiesForChannel(A.id).length <= 0),
G = (0, p.N)(r.z.VC_TILE_ACTIVITIES_ENTRY_POINT),
V = (0, d.KF)(A.id) !== d.jy.CAN_LAUNCH,
F = null != O && O === A.id,
W = D.map(e => t => (0, i.jsx)(I.ZP, {
  participant: e,
  channel: A,
  className: N.tile,
  paused: j,
  onClick: n,
  onDoubleClick: S,
  onContextMenu: Z,
  inCall: b,
  width: t,
  inPopout: L
}, e.id));
  (0, u.Z)({
type: l.ImpressionTypes.VIEW,
name: l.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
properties: {
  total_participants: R,
  can_invite: U,
  is_afk_channel: w,
  channel_user_limit: A.userLimit
}
  }, {
trackOnInitialLoad: !0
  }, []), null != P && !w && (!(y >= 2) || !H || V || G || F ? B && 1 === y && U && (H && !V ? W.push(e => (0, i.jsx)(g.h, {
channel: A,
guild: P,
width: e,
inPopout: L,
handleClose: k,
userParticipantCount: y
  })) : W.push(e => (0, i.jsx)(T.Z, {
width: e,
channel: A,
guild: P,
inPopout: L
  }))) : W.push(e => (0, i.jsx)(g.h, {
channel: A,
guild: P,
width: e,
inPopout: L,
handleClose: k,
userParticipantCount: y
  })));
  let z = a.useCallback(e => {
var t, n;
return null !== (n = null === (t = D[e]) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : 'empty-tile';
  }, [D]);
  return (0, i.jsx)(C.Z, {
className: M,
keyExtractor: z,
paddingTop: 64,
paddingBottom: 64,
children: W
  });
}