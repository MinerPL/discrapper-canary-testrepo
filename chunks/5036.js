"use strict";
a.r(t);
var n = a("570140"),
  l = a("149071"),
  u = a("9156");
t.default = {
  update(e) {
    n.default.dispatch({
      type: "CHANNEL_COLLAPSE",
      channelId: e
    })
  },
  toggleCollapseGuild(e) {
    l.default.saveUserGuildSettings(e, {
      hide_muted_channels: !u.default.isGuildCollapsed(e)
    }), n.default.dispatch({
      type: "GUILD_TOGGLE_COLLAPSE_MUTED",
      guildId: e
    })
  }
}