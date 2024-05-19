"use strict";
n.r(t), n.d(t, {
  GAME_CONSOLE_ALERT_MODAL_LOCATION: function() {
    return h
  },
  GAME_CONSOLE_SESSIONS: function() {
    return f
  },
  GameConsoleCommandResultErrorCodes: function() {
    return r
  },
  GameConsoleTypes: function() {
    return i
  },
  PLAYSTATION_CLIENT_SCOPES: function() {
    return I
  },
  PLAYSTATION_LINK_DEST_ORIGIN: function() {
    return E
  },
  USER_ACTION_REQUIRED_ERROR_CODES: function() {
    return S
  },
  XBOX_APP_WEB_LINK: function() {
    return d
  },
  XBOX_CLIENT_SCOPES: function() {
    return c
  },
  XBOX_HANDOFF_SEARCH_PARAMS: function() {
    return T
  },
  XBOX_LINK_DEST_ORIGIN: function() {
    return _
  },
  XBOX_URL_BASE: function() {
    return u
  }
}), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
var i, r, a, s, o = n("243814"),
  l = n("981631");
let u = "xbox://communitylinking/donut/audio",
  d = "https://www.xbox.com/en-US/apps/xbox-app-for-mobile",
  _ = "https://login.live.com",
  c = [o.OAuth2Scopes.VOICE, o.OAuth2Scopes.DM_CHANNELS_READ, o.OAuth2Scopes.GUILDS, o.OAuth2Scopes.GUILDS_MEMBERS_READ, o.OAuth2Scopes.IDENTIFY, o.OAuth2Scopes.CONNECTIONS],
  E = "https://my.account.sony.com",
  I = c,
  T = e => {
    let {
      guildId: t,
      channelName: n,
      guildName: i,
      channelId: r,
      muted: a,
      deafened: s,
      nonce: o
    } = e, l = {
      channelid: r,
      guildid: t,
      channelname: n,
      guildname: i,
      muted: String(a),
      deafened: String(s)
    };
    return null != o && (l.nonce = o), new URLSearchParams(l)
  };
(a = i || (i = {})).PLAYSTATION = "playstation", a.XBOX = "xbox";
let f = new Set(["xbox", "playstation"]);
l.ActivityGamePlatforms.XBOX, l.ActivityGamePlatforms.PS5, (s = r || (r = {}))[s.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED = 27e4] = "CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED", s[s.CONSOLE_DEVICE_UNAVAILABLE = 270001] = "CONSOLE_DEVICE_UNAVAILABLE", s[s.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS = 270002] = "CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS", s[s.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED = 270003] = "CONSOLE_DEVICE_COMMUNICATION_RESTRICTED", s[s.CONSOLE_DEVICE_INVALID_POWER_MODE = 270004] = "CONSOLE_DEVICE_INVALID_POWER_MODE", s[s.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR = 270005] = "CONSOLE_DEVICE_ACCOUNT_LINK_ERROR", s[s.CONSOLE_DEVICE_MAX_MEMBERS_REACHED = 270006] = "CONSOLE_DEVICE_MAX_MEMBERS_REACHED", s[s.CONSOLE_DEVICE_BAD_COMMAND = 270007] = "CONSOLE_DEVICE_BAD_COMMAND";
let S = new Set([27e4]),
  h = "console error alert"