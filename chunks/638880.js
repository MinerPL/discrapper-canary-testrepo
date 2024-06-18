"use strict";
n.d(t, {
  Z: function() {
    return h
  }
});
var i = n(812206),
  r = n(592125),
  s = n(944486),
  o = n(594174),
  a = n(867176),
  l = n(566620),
  u = n(882347),
  _ = n(917107),
  d = n(89425),
  c = n(275920),
  E = n(197386),
  I = n(701488),
  T = n(981631);
async function h(e) {
  let {
    applicationId: t,
    currentEmbeddedApplication: n,
    activityChannelId: h,
    locationObject: S,
    embeddedActivitiesManager: f,
    analyticsLocations: N
  } = e, A = r.Z.getChannel(h), m = null == A ? void 0 : A.getGuildId(), O = null == m || "" === m, R = o.default.getCurrentUser();
  if (null == A || O && !A.isPrivate() || null == h || null == R) return Promise.resolve(!1);
  if (s.Z.getVoiceChannelId() === h && (null == n ? void 0 : n.id) === t) return (0, E.Z)(m, h), Promise.resolve(!0);
  if (!await (0, u.p)({
      applicationId: t,
      application: i.Z.getApplication(t),
      channel: A,
      currentEmbeddedApplication: n,
      embeddedActivitiesManager: f,
      user: R
    })) return !1;
  let C = (0, _.Z)(A.id),
    p = I.wP.includes(A.type);
  if (C) {
    if (!await (0, d.Z)({
        channelId: A.id,
        bypassChangeModal: null != n
      })) return !1
  } else if (!(0, a.WS)(A, !1, "joinEmbeddedActivity") || !p) return !1;
  return (0, E.Z)(m, h), (0, l.J$)(h, t, N), (0, c.Z)({
    type: T.q5t.JOIN,
    userId: R.id,
    applicationId: t,
    locationObject: S,
    analyticsLocations: N
  }), !0
}