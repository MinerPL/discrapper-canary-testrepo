"use strict";
n(47120);
var i, r, s, o, a = n(442837),
  l = n(570140);
let u = new Map;
class _ extends(i = a.ZP.Store) {
  getGuildRoleConnectionEligibility(e) {
    return null != e ? u.get(e) : void 0
  }
}
o = "GuildRoleConnectionEligibilityStore", (s = "displayName") in(r = _) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new _(l.Z, {
  GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: e => {
    let {
      roleId: t,
      roleConnectionEligibility: n
    } = e;
    u.set(t, n)
  }
})