n.d(t, {
  Z: function() {
return T;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(442837),
  s = n(841784),
  o = n(503438),
  l = n(812206),
  u = n(835473),
  c = n(574176),
  d = n(592125),
  _ = n(430824),
  E = n(496675),
  f = n(979651),
  h = n(626135),
  p = n(409057),
  m = n(128277),
  I = n(981631);

function T(e) {
  let {
user: t,
currentUser: n,
activity: T,
className: g,
onAction: S,
onClose: A
  } = e, N = (0, a.e7)([
f.Z,
d.Z
  ], () => {
var e;
return d.Z.getChannel(null === (e = f.Z.getVoiceStateForUser(t.id)) || void 0 === e ? void 0 : e.channelId);
  }), {
enableHangStatus: v
  } = c.n.useExperiment({
guildId: null == N ? void 0 : N.guild_id,
location: 'UserProfileActivityCardWrapper'
  }, {
autoTrackExposure: !1
  }), O = v && E.Z.can(I.Plq.CONNECT, N), R = (null == T ? void 0 : T.type) === I.IIU.HANG_STATUS && O ? N : null, C = (0, a.e7)([
_.Z,
f.Z,
d.Z
  ], () => {
if ((0, s.Z)(T)) {
  var e, n;
  let r = null === (e = f.Z.getVoiceStateForSession(t.id, null == T ? void 0 : T.session_id)) || void 0 === e ? void 0 : e.channelId;
  return _.Z.getGuild(null === (n = d.Z.getChannel(r)) || void 0 === n ? void 0 : n.getGuildId());
}
return null != R ? _.Z.getGuild(R.getGuildId()) : null;
  });
  (0, u.q)(null == T ? void 0 : T.application_id);
  let y = (0, a.e7)([l.Z], () => (null == T ? void 0 : T.application_id) != null ? l.Z.getApplication(T.application_id) : (null == T ? void 0 : T.name) != null ? l.Z.getApplicationByName(T.name) : null);
  return (i.useEffect(() => {
(null == T ? void 0 : T.type) === I.IIU.HANG_STATUS && O && h.default.track(I.rMx.VIEW_HANG_STATUS, {
  source: 'UserProfilePopout',
  guild_id: null == R ? void 0 : R.guild_id,
  channel_id: null == R ? void 0 : R.id
});
  }, [
null == T ? void 0 : T.type,
O,
R
  ]), (null == T ? void 0 : T.type) !== I.IIU.HANG_STATUS || O) ? (0, o.Z)(T) ? (0, r.jsx)(m.Z, {
user: t,
currentUser: n,
activity: T,
guild: C,
channel: N,
className: g,
onAction: S,
onClose: A
  }) : (0, r.jsx)(p.Z, {
user: t,
currentUser: n,
activity: T,
application: y,
guild: C,
channel: N,
className: g,
onAction: S,
onClose: A
  }) : null;
}