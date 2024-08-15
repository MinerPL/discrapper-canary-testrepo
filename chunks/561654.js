n(47120);
var s, a, i, r, l = n(442837),
  o = n(570140),
  c = n(430824);
let d = new Map();
class u extends(s = l.ZP.Store) {
  initialize() {
this.waitFor(c.Z);
  }
  getGuildRoleConnectionsConfiguration(e) {
return d.get(e);
  }
}
r = 'GuildRoleConnectionsConfigurationStore', (i = 'displayName') in(a = u) ? Object.defineProperty(a, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[i] = r, t.Z = new u(o.Z, {
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: e => {
let {
  roleId: t,
  roleConnectionConfigurations: n
} = e;
d.set(t, n);
  }
});