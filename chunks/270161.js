"use strict";
n.r(t), n.d(t, {
  CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
    return s
  },
  CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
    return o
  },
  CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
    return u
  }
});
var i = n("316693"),
  r = n("923510"),
  l = n("49111");
let s = l.Permissions.VIEW_CHANNEL,
  o = i.combine(s, l.Permissions.CONNECT),
  u = i.combine(s, r.MODERATE_STAGE_CHANNEL_PERMISSIONS)