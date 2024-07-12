n.d(t, {
  Fw: function() {
return i;
  },
  ZP: function() {
return h;
  },
  s5: function() {
return p;
  }
});
var r, i, a = n(442837),
  o = n(592125),
  s = n(430824),
  l = n(496675),
  u = n(594174),
  c = n(979651),
  d = n(934415),
  _ = n(782769),
  E = n(983695),
  f = n(981631);

function h(e) {
  var t, n, r;
  let {
userId: i,
activity: a,
application: o,
channelId: s,
currentUser: l,
isActivitiesEnabledForCurrentPlatform: u,
ChannelStore: c,
VoiceStateStore: _,
PermissionStore: h,
GuildStore: p
  } = e;
  if (null == i)
return 8;
  if ((null == l ? void 0 : l.nsfwAllowed) === !1 && (null == o ? void 0 : null === (t = o.embeddedActivityConfig) || void 0 === t ? void 0 : t.requires_age_gate) === !0)
return 7;
  if (!u)
return 5;
  if (!(0, E.Z)(null == o ? void 0 : null === (n = o.embeddedActivityConfig) || void 0 === n ? void 0 : n.supported_platforms))
return 6;
  let m = null != s ? s : null === (r = _.getVoiceStateForSession(i, null == a ? void 0 : a.session_id)) || void 0 === r ? void 0 : r.channelId;
  if (null == m)
return 4;
  let I = c.getChannel(s);
  if (null == I)
return 4;
  let T = I.getGuildId();
  if (!I.isPrivate()) {
if (null == T)
  return 10;
let e = p.getGuild(T);
if ((null == e ? void 0 : e.afkChannelId) === I.id)
  return 9;
let t = _.getCurrentClientVoiceChannelId(I.getGuildId()) === m,
  n = (0, d.rY)(I, _, p),
  r = h.can(f.Plq.CONNECT, I);
if (!h.can(f.Plq.USE_EMBEDDED_ACTIVITIES, I))
  return 1;
if (I.isVocal() && !t) {
  if (n)
    return 3;
  if (!r)
    return 2;
}
  }
  return 0;
}

function p(e) {
  let {
userId: t,
activity: n,
channelId: r,
application: i
  } = e, d = (0, _.z)(null != r ? r : void 0), E = (0, a.e7)([u.default], () => u.default.getCurrentUser());
  return (0, a.e7)([
o.Z,
c.Z,
l.Z,
s.Z
  ], () => h({
userId: t,
activity: n,
application: i,
channelId: r,
currentUser: E,
isActivitiesEnabledForCurrentPlatform: d,
ChannelStore: o.Z,
VoiceStateStore: c.Z,
PermissionStore: l.Z,
GuildStore: s.Z
  }), [
n,
i,
r,
E,
d,
t
  ]);
}
(r = i || (i = {}))[r.CAN_JOIN = 0] = 'CAN_JOIN', r[r.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1] = 'NO_USE_EMBEDDED_ACTIVITIES_PERMISSION', r[r.NO_CHANNEL_CONNECT_PERMISSION = 2] = 'NO_CHANNEL_CONNECT_PERMISSION', r[r.CHANNEL_FULL = 3] = 'CHANNEL_FULL', r[r.NO_CHANNEL = 4] = 'NO_CHANNEL', r[r.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 5] = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS', r[r.ACTIVITY_NOT_SUPPORTED_ON_OS = 6] = 'ACTIVITY_NOT_SUPPORTED_ON_OS', r[r.ACTIVITY_AGE_GATED = 7] = 'ACTIVITY_AGE_GATED', r[r.NO_USER = 8] = 'NO_USER', r[r.IS_AFK_CHANNEL = 9] = 'IS_AFK_CHANNEL', r[r.NO_GUILD = 10] = 'NO_GUILD';