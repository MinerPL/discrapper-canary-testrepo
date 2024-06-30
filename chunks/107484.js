n(47120);
var r, i, a, o, s = n(442837), l = n(570140);
let u = new Map();
class c extends (r = s.ZP.Store) {
    getGuildRoleConnectionEligibility(e) {
        return null != e ? u.get(e) : void 0;
    }
}
o = 'GuildRoleConnectionEligibilityStore', (a = 'displayName') in (i = c) ? Object.defineProperty(i, a, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = o, t.Z = new c(l.Z, {
    GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: e => {
        let {
            roleId: t,
            roleConnectionEligibility: n
        } = e;
        u.set(t, n);
    }
});
