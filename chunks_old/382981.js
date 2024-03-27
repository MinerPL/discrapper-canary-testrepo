"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
}), s("222007");
var a = s("446674"),
  l = s("913144"),
  n = s("305961");
let i = new Map;
class r extends a.default.Store {
  initialize() {
    this.waitFor(n.default)
  }
  getGuildRoleConnectionsConfiguration(e) {
    return i.get(e)
  }
}
r.displayName = "GuildRoleConnectionsConfigurationStore";
var o = new r(l.default, {
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: e => {
    let {
      roleId: t,
      roleConnectionConfigurations: s
    } = e;
    i.set(t, s)
  }
})