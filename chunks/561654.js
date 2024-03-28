"use strict";
s.r(t), s("47120");
var a, l, n, i, r = s("442837"),
  o = s("570140"),
  d = s("430824");
let u = new Map;
class c extends(a = r.default.Store) {
  initialize() {
    this.waitFor(d.default)
  }
  getGuildRoleConnectionsConfiguration(e) {
    return u.get(e)
  }
}
i = "GuildRoleConnectionsConfigurationStore", (n = "displayName") in(l = c) ? Object.defineProperty(l, n, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[n] = i, t.default = new c(o.default, {
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: e => {
    let {
      roleId: t,
      roleConnectionConfigurations: s
    } = e;
    u.set(t, s)
  }
})