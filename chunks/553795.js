n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(457330),
    c = n(726542),
    d = n(368111),
    f = n(601964),
    _ = n(981631);
let h = new Set([_.ABu.CONTACTS]),
    p = !0,
    m = [],
    g = [],
    E = {},
    v = new Set(),
    I = {},
    S = {},
    T = (e) => {
        (m = e.filter((e) => !h.has(e.type) && c.Z.isSupported(e.type))), (g = e.filter((e) => h.has(e.type))), (p = !1);
    };
class b extends (r = o.ZP.Store) {
    isJoining(e) {
        return E[e] || !1;
    }
    joinErrorMessage(e) {
        return S[e];
    }
    isFetching() {
        return p;
    }
    getAccounts() {
        return m;
    }
    getLocalAccounts() {
        return g;
    }
    getAccount(e, t) {
        return m.find((n) => (null == e || n.id === e) && n.type === t);
    }
    getLocalAccount(e) {
        return g.find((t) => t.type === e);
    }
    isSuggestedAccountType(e) {
        return I[e] || !1;
    }
    addPendingAuthorizedState(e) {
        v.add(e);
    }
    deletePendingAuthorizedState(e) {
        v.delete(e);
    }
    hasPendingAuthorizedState(e) {
        return v.has(e);
    }
}
(s = 'ConnectedAccountsStore'),
    (a = 'displayName') in (i = b)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new b(l.Z, {
        CONNECTION_OPEN: function (e) {
            T(e.connectedAccounts.map((e) => new d.Z(e)));
        },
        USER_CONNECTIONS_UPDATE: function (e) {
            e.local && null != e.accounts
                ? T(
                      e.accounts.map(
                          (e) =>
                              new d.Z({
                                  ...e,
                                  integrations: e.integrations.map((e) => ({
                                      ...e,
                                      guild: new f.ZP(e.guild)
                                  }))
                              })
                      )
                  )
                : u.Z.fetch();
        },
        USER_CONNECTIONS_INTEGRATION_JOINING: function (e) {
            E[e.integrationId] = e.joining;
        },
        USER_CONNECTION_UPDATE: function (e) {
            let { platformType: t, id: n, revoked: r, accessToken: i } = e,
                a = m.find((e) => e.id === n && e.type === t);
            if (null == a) return !1;
            null != r && (a.revoked = r), null != i && (a.accessToken = i);
        },
        USER_CONNECTIONS_INTEGRATION_JOINING_ERROR: function (e) {
            S[e.integrationId] = void 0 !== e.error ? e.error : '';
        },
        USER_CONNECTIONS_CALLBACK: function (e) {
            let { code: t, state: n, openid_params: r, provider: i } = e;
            u.Z.callback(i, {
                code: t,
                state: n,
                openid_params: r
            });
        }
    }));
