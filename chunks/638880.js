n.d(t, {
  Z: function() {
return p;
  }
});
var r = n(812206),
  i = n(592125),
  a = n(944486),
  o = n(594174),
  s = n(595519),
  l = n(566620),
  u = n(882347),
  c = n(917107),
  d = n(89425),
  _ = n(275920),
  E = n(197386),
  f = n(701488),
  h = n(981631);
async function p(e) {
  let {
applicationId: t,
currentEmbeddedApplication: n,
activityChannelId: p,
locationObject: m,
embeddedActivitiesManager: I,
analyticsLocations: T
  } = e, g = i.Z.getChannel(p), S = null == g ? void 0 : g.getGuildId(), A = null == S || '' === S, N = o.default.getCurrentUser();
  if (null == g || A && !g.isPrivate() || null == p || null == N)
return Promise.resolve(!1);
  if (a.Z.getVoiceChannelId() === p && (null == n ? void 0 : n.id) === t)
return (0, E.Z)(S, p), Promise.resolve(!0);
  if (!await (0, u.p)({
  applicationId: t,
  application: r.Z.getApplication(t),
  channel: g,
  currentEmbeddedApplication: n,
  embeddedActivitiesManager: I,
  user: N
}))
return !1;
  let v = (0, c.Z)(g.id),
O = f.wP.includes(g.type);
  if (v) {
if (!await (0, d.Z)({
    channelId: g.id,
    bypassChangeModal: null != n
  }))
  return !1;
  } else if (!(0, s.WS)(g, !1) || !O)
return !1;
  return (0, E.Z)(S, p), (0, l.J$)(p, t, T), (0, _.Z)({
type: h.q5t.JOIN,
userId: N.id,
applicationId: t,
locationObject: m,
analyticsLocations: T
  }), !0;
}