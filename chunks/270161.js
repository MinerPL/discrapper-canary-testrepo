"use strict";
n.r(t), n.d(t, {
  CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
    return s
  },
  CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
    return r
  },
  CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
    return o
  }
});
var i = n("316693"),
  a = n("923510"),
  l = n("49111");
let s = l.Permissions.VIEW_CHANNEL,
  r = i.combine(s, l.Permissions.CONNECT),
  o = i.combine(s, a.MODERATE_STAGE_CHANNEL_PERMISSIONS)