"use strict";
n(47120);
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(457330),
  _ = n(726542),
  d = n(368111),
  c = n(601964),
  E = n(981631);
let I = new Set([E.ABu.CONTACTS]),
  T = !0,
  h = [],
  S = [],
  f = {},
  N = {},
  A = {},
  m = e => {
    h = e.filter(e => !I.has(e.type) && _.Z.isSupported(e.type)), S = e.filter(e => I.has(e.type)), T = !1
  };
class O extends(i = a.ZP.Store) {
  isJoining(e) {
    return f[e] || !1
  }
  joinErrorMessage(e) {
    return A[e]
  }
  isFetching() {
    return T
  }
  getAccounts() {
    return h
  }
  getLocalAccounts() {
    return S
  }
  getAccount(e, t) {
    return h.find(n => (null == e || n.id === e) && n.type === t)
  }
  getLocalAccount(e) {
    return S.find(t => t.type === e)
  }
  isSuggestedAccountType(e) {
    return N[e] || !1
  }
}
o = "ConnectedAccountsStore", (s = "displayName") in(r = O) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new O(l.Z, {
  CONNECTION_OPEN: function(e) {
    m(e.connectedAccounts.map(e => new d.Z(e)))
  },
  USER_CONNECTIONS_UPDATE: function(e) {
    e.local && null != e.accounts ? m(e.accounts.map(e => new d.Z({
      ...e,
      integrations: e.integrations.map(e => ({
        ...e,
        guild: new c.ZP(e.guild)
      }))
    }))) : u.Z.fetch()
  },
  USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
    f[e.integrationId] = e.joining
  },
  USER_CONNECTION_UPDATE: function(e) {
    let {
      platformType: t,
      id: n,
      revoked: i,
      accessToken: r
    } = e, s = h.find(e => e.id === n && e.type === t);
    if (null == s) return !1;
    null != i && (s.revoked = i), null != r && (s.accessToken = r)
  },
  USER_CONNECTIONS_INTEGRATION_JOINING_ERROR: function(e) {
    A[e.integrationId] = void 0 !== e.error ? e.error : ""
  }
})