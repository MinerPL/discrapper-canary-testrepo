"use strict";
n.d(t, {
  KL: function() {
    return I
  },
  Lc: function() {
    return T
  },
  Lw: function() {
    return f
  },
  Ry: function() {
    return r
  },
  X3: function() {
    return _
  },
  YE: function() {
    return i
  },
  al: function() {
    return h
  },
  bJ: function() {
    return u
  },
  e8: function() {
    return S
  },
  tA: function() {
    return c
  },
  uu: function() {
    return E
  },
  zM: function() {
    return d
  }
}), n(610138), n(216116), n(78328), n(815648), n(47120);
var i, r, s, o, a = n(243814),
  l = n(981631);
let u = "xbox://communitylinking/donut/audio",
  _ = "https://www.xbox.com/en-US/apps/xbox-app-for-mobile",
  d = "https://login.live.com",
  c = [a.x.VOICE, a.x.DM_CHANNELS_READ, a.x.GUILDS, a.x.GUILDS_MEMBERS_READ, a.x.IDENTIFY, a.x.CONNECTIONS],
  E = "https://my.account.sony.com",
  I = c,
  T = e => {
    let {
      guildId: t,
      channelName: n,
      guildName: i,
      channelId: r,
      muted: s,
      deafened: o,
      nonce: a
    } = e, l = {
      channelid: r,
      guildid: t,
      channelname: n,
      guildname: i,
      muted: String(s),
      deafened: String(o)
    };
    return null != a && (l.nonce = a), new URLSearchParams(l)
  };
(s = i || (i = {})).PLAYSTATION = "playstation", s.XBOX = "xbox";
let h = new Set(["xbox", "playstation"]);
l.M7m.XBOX, l.M7m.PS5, (o = r || (r = {}))[o.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED = 27e4] = "CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED", o[o.CONSOLE_DEVICE_UNAVAILABLE = 270001] = "CONSOLE_DEVICE_UNAVAILABLE", o[o.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS = 270002] = "CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS", o[o.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED = 270003] = "CONSOLE_DEVICE_COMMUNICATION_RESTRICTED", o[o.CONSOLE_DEVICE_INVALID_POWER_MODE = 270004] = "CONSOLE_DEVICE_INVALID_POWER_MODE", o[o.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR = 270005] = "CONSOLE_DEVICE_ACCOUNT_LINK_ERROR", o[o.CONSOLE_DEVICE_MAX_MEMBERS_REACHED = 270006] = "CONSOLE_DEVICE_MAX_MEMBERS_REACHED", o[o.CONSOLE_DEVICE_BAD_COMMAND = 270007] = "CONSOLE_DEVICE_BAD_COMMAND";
let S = new Set([27e4]),
  f = "console error alert"