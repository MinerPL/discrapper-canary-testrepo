"use strict";
n.d(t, {
  KF: function() {
    return I
  },
  e4: function() {
    return E
  },
  g5: function() {
    return T
  },
  jy: function() {
    return r
  }
});
var i, r, s = n(442837),
  o = n(592125),
  a = n(430824),
  l = n(496675),
  u = n(979651),
  _ = n(782769),
  d = n(981631),
  c = n(689938);

function E(e) {
  let {
    channelId: t,
    ChannelStore: n,
    GuildStore: i,
    PermissionStore: r,
    VoiceStateStore: s
  } = e, o = n.getChannel(t);
  if (null == o) return 3;
  if (!(0, _.a)(o)) return 6;
  if (!o.isPrivate()) {
    let e = o.getGuildId();
    if (null == e) return 4;
    let n = i.getGuild(e);
    if ((null == n ? void 0 : n.afkChannelId) === o.id) return 5;
    let a = r.can(d.Plq.CONNECT, o);
    if (!r.can(d.Plq.USE_EMBEDDED_ACTIVITIES, o)) return 1;
    let l = s.getCurrentClientVoiceChannelId(o.getGuildId()) === t;
    if (o.isVocal() && !l && !a) return 2
  }
  return 0
}

function I(e) {
  return (0, s.e7)([o.Z, a.Z, l.Z, u.Z], () => E({
    channelId: e,
    ChannelStore: o.Z,
    GuildStore: a.Z,
    PermissionStore: l.Z,
    VoiceStateStore: u.Z
  }), [e])
}

function T(e) {
  switch (e) {
    case 0:
      return c.Z.Messages.EMBEDDED_ACTIVITIES_START_AN_ACTIVITY;
    case 1:
      return c.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
    default:
      return c.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL
  }
}(i = r || (r = {}))[i.CAN_LAUNCH = 0] = "CAN_LAUNCH", i[i.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", i[i.NO_CHANNEL_CONNECT_PERMISSION = 2] = "NO_CHANNEL_CONNECT_PERMISSION", i[i.NO_CHANNEL = 3] = "NO_CHANNEL", i[i.NO_GUILD = 4] = "NO_GUILD", i[i.IS_AFK_CHANNEL = 5] = "IS_AFK_CHANNEL", i[i.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 6] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS"