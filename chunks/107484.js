n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140);
let u = new Map();
class c extends (r = o.ZP.Store) {
    getGuildRoleConnectionEligibility(e) {
        return null != e ? u.get(e) : void 0;
    }
}
(s = 'GuildRoleConnectionEligibilityStore'),
    (a = 'displayName') in (i = c)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new c(l.Z, {
        GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: (e) => {
            let { roleId: t, roleConnectionEligibility: n } = e;
            u.set(t, n);
        }
    }));
