"use strict";
n.r(t), n.d(t, {
  CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
    return o
  },
  CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
    return a
  },
  CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
    return l
  }
});
var r = n("316693"),
  i = n("923510"),
  s = n("49111");
let o = s.Permissions.VIEW_CHANNEL,
  a = r.combine(o, s.Permissions.CONNECT),
  l = r.combine(o, i.MODERATE_STAGE_CHANNEL_PERMISSIONS)