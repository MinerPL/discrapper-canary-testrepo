"use strict";
t.d(s, {
  G7: function() {
    return r
  },
  LG: function() {
    return d
  },
  Pg: function() {
    return a
  },
  ZI: function() {
    return i
  },
  _0: function() {
    return o
  }
});
var n, i, l = t(689938);
let a = 5,
  r = 10,
  o = 30;
(n = i || (i = {}))[n.DISPLAY = 0] = "DISPLAY", n[n.PERMISSIONS = 1] = "PERMISSIONS", n[n.MEMBERS = 2] = "MEMBERS", n[n.VERIFICATIONS = 3] = "VERIFICATIONS";
let c = {
  afk_channel_id: () => l.Z.Messages.FORM_LABEL_AFK_CHANNEL,
  public_updates_channel_id: () => l.Z.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_TITLE,
  safety_alerts_channel_id: () => l.Z.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE,
  system_channel_id: () => l.Z.Messages.FORM_LABEL_SYSTEM_CHANNEL
};

function d(e) {
  var s;
  if (0 === Object.keys(e).length) return null;
  let t = Object.keys(e)[0],
    n = null === (s = c[t]) || void 0 === s ? void 0 : s.call(c);
  return null != n ? "(".concat(n, ") ").concat(e[t]) : e[t]
}