"use strict";
t(47120);
var n, i, l, a, r = t(442837),
  o = t(570140),
  c = t(430824);
let d = new Map;
class u extends(n = r.ZP.Store) {
  initialize() {
    this.waitFor(c.Z)
  }
  getGuildRoleConnectionsConfiguration(e) {
    return d.get(e)
  }
}
a = "GuildRoleConnectionsConfigurationStore", (l = "displayName") in(i = u) ? Object.defineProperty(i, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[l] = a, s.Z = new u(o.Z, {
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: e => {
    let {
      roleId: s,
      roleConnectionConfigurations: t
    } = e;
    d.set(s, t)
  }
})