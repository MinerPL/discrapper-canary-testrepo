n.d(t, {
  Z: function() {
return O;
  }
});
var r = n(668781),
  i = n(812206),
  a = n(835873),
  o = n(592125),
  s = n(430824),
  l = n(496675),
  u = n(594174),
  c = n(979651),
  d = n(585483),
  _ = n(595519),
  E = n(337682),
  f = n(566620),
  h = n(882347),
  p = n(307091),
  m = n(374065),
  I = n(917107),
  T = n(89425),
  g = n(275920),
  S = n(197386),
  A = n(701488),
  N = n(981631),
  v = n(689938);
async function O(e) {
  var t;
  let {
targetApplicationId: n,
currentEmbeddedApplication: O,
locationObject: R,
channelId: C,
guildId: y,
embeddedActivitiesManager: D,
analyticsLocations: L
  } = e, b = s.Z.getGuild(y), M = u.default.getCurrentUser();
  if (null == n)
return !1;
  let P = null !== (t = i.Z.getApplication(n)) && void 0 !== t ? t : await (0, p.Z)(n, C);
  if (null == C)
return d.S.dispatch(N.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, {
  applicationId: n
}), !1;
  let U = o.Z.getChannel(C);
  if (null == U || null == b && !U.isPrivate() || null == M || null == P)
return !1;
  let w = null != C ? (0, m.e4)({
channelId: C,
ChannelStore: o.Z,
GuildStore: s.Z,
PermissionStore: l.Z,
VoiceStateStore: c.Z
  }) : m.jy.NO_CHANNEL;
  if (w !== m.jy.CAN_LAUNCH)
return w === m.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION ? (0, a.w)() : w === m.jy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS && r.Z.show({
  title: v.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC,
  body: v.Z.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
  hideActionSheet: !1
}), !1;
  if (!await (0, h.p)({
  applicationId: P.id,
  application: P,
  channel: U,
  currentEmbeddedApplication: O,
  embeddedActivitiesManager: D,
  user: M
}))
return !1;
  let x = (0, I.Z)(C),
G = A.wP.includes(U.type);
  if (x) {
if (!await (0, T.Z)({
    channelId: C,
    bypassChangeModal: null != O
  }))
  return !1;
  } else if (!(0, _.WS)(U, !0) || !G)
return !1;
  return f.J$(C, P.id, L), (0, S.Z)(y, C), (0, g.Z)({
type: N.q5t.LAUNCH,
userId: M.id,
applicationId: P.id,
locationObject: R,
analyticsLocations: L
  }), E.tZ(P.id), !0;
}