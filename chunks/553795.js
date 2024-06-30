n(47120);
var r, i, a, o, s = n(442837), l = n(570140), u = n(457330), c = n(726542), d = n(368111), _ = n(601964), E = n(981631);
let f = new Set([E.ABu.CONTACTS]), h = !0, p = [], m = [], I = {}, T = {}, g = {}, S = e => {
        p = e.filter(e => !f.has(e.type) && c.Z.isSupported(e.type)), m = e.filter(e => f.has(e.type)), h = !1;
    };
class A extends (r = s.ZP.Store) {
    isJoining(e) {
        return I[e] || !1;
    }
    joinErrorMessage(e) {
        return g[e];
    }
    isFetching() {
        return h;
    }
    getAccounts() {
        return p;
    }
    getLocalAccounts() {
        return m;
    }
    getAccount(e, t) {
        return p.find(n => (null == e || n.id === e) && n.type === t);
    }
    getLocalAccount(e) {
        return m.find(t => t.type === e);
    }
    isSuggestedAccountType(e) {
        return T[e] || !1;
    }
}
o = 'ConnectedAccountsStore', (a = 'displayName') in (i = A) ? Object.defineProperty(i, a, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = o, t.Z = new A(l.Z, {
    CONNECTION_OPEN: function (e) {
        S(e.connectedAccounts.map(e => new d.Z(e)));
    },
    USER_CONNECTIONS_UPDATE: function (e) {
        e.local && null != e.accounts ? S(e.accounts.map(e => new d.Z({
            ...e,
            integrations: e.integrations.map(e => ({
                ...e,
                guild: new _.ZP(e.guild)
            }))
        }))) : u.Z.fetch();
    },
    USER_CONNECTIONS_INTEGRATION_JOINING: function (e) {
        I[e.integrationId] = e.joining;
    },
    USER_CONNECTION_UPDATE: function (e) {
        let {
                platformType: t,
                id: n,
                revoked: r,
                accessToken: i
            } = e, a = p.find(e => e.id === n && e.type === t);
        if (null == a)
            return !1;
        null != r && (a.revoked = r), null != i && (a.accessToken = i);
    },
    USER_CONNECTIONS_INTEGRATION_JOINING_ERROR: function (e) {
        g[e.integrationId] = void 0 !== e.error ? e.error : '';
    }
});
