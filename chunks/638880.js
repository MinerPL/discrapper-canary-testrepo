n.d(t, {
  Z: function() {
return m;
  }
});
var r = n(812206),
  i = n(592125),
  a = n(944486),
  s = n(594174),
  o = n(595519),
  l = n(566620),
  u = n(317381),
  c = n(882347),
  d = n(917107),
  _ = n(89425),
  E = n(275920),
  f = n(197386),
  h = n(701488),
  p = n(981631);
async function m(e) {
  let {
applicationId: t,
currentEmbeddedApplication: n,
activityChannelId: m,
locationObject: I,
embeddedActivitiesManager: T,
analyticsLocations: g
  } = e, S = i.Z.getChannel(m), A = null == S ? void 0 : S.getGuildId(), N = null == A || '' === A, v = s.default.getCurrentUser(), O = u.ZP.getCurrentEmbeddedActivity();
  if (null == S || N && !S.isPrivate() || null == m || null == v)
return Promise.resolve(!1);
  if (a.Z.getVoiceChannelId() === m && (null == O ? void 0 : O.applicationId) === t && (null == O ? void 0 : O.channelId) === a.Z.getVoiceChannelId())
return (0, f.Z)(A, m), Promise.resolve(!0);
  if (!await (0, c.p)({
  applicationId: t,
  application: r.Z.getApplication(t),
  channel: S,
  currentEmbeddedApplication: n,
  embeddedActivitiesManager: T,
  user: v
}))
return !1;
  let R = (0, d.Z)(S.id),
C = h.wP.includes(S.type);
  if (R) {
if (!await (0, _.Z)({
    channelId: S.id,
    bypassChangeModal: null != n
  }))
  return !1;
  } else if (!(0, o.WS)(S, !1) || !C)
return !1;
  return (0, f.Z)(A, m), (0, l.J$)(m, t, g), (0, E.Z)({
type: p.q5t.JOIN,
userId: v.id,
applicationId: t,
locationObject: I,
analyticsLocations: g
  }), !0;
}