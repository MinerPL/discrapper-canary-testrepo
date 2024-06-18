"use strict";
n.d(t, {
  M: function() {
    return i
  }
}), n(47120), n(653041);
var i, r, s, o, a, l, u = n(442837),
  _ = n(570140),
  d = n(973616),
  c = n(911955);
(s = i || (i = {}))[s.NOT_FETCHED = 0] = "NOT_FETCHED", s[s.FETCHING = 1] = "FETCHING", s[s.FETCHED = 2] = "FETCHED", s[s.FETCH_FAILED = 3] = "FETCH_FAILED";
let E = new Map,
  I = new Map,
  T = [],
  h = 0,
  S = [];
class f extends(r = u.ZP.Store) {
  getIntegrations(e) {
    var t;
    return null !== (t = E.get(e)) && void 0 !== t ? t : S
  }
  getIntegration(e, t) {
    var n;
    return null === (n = E.get(e)) || void 0 === n ? void 0 : n.find(e => e.application.id === t)
  }
  getAllIntegrations() {
    return E
  }
  getIntegrationsFetchState(e) {
    var t;
    return null !== (t = I.get(e)) && void 0 !== t ? t : 0
  }
  getApplicationsShelfFetchState() {
    return h
  }
  getApplicationsShelf() {
    return T
  }
}

function N(e) {
  return e.sort((e, t) => e.application.name.localeCompare(t.application.name))
}
l = "PrivateChannelIntegrationStore", (a = "displayName") in(o = f) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l;
let A = new f(_.Z, {
  LOGOUT() {
    E.clear()
  },
  CONNECTION_OPEN() {
    E.clear(), I.clear()
  },
  CHANNEL_SELECT(e) {
    let {
      channelId: t
    } = e;
    if (null == t || 3 !== I.get(t)) return !1;
    I.set(t, 0)
  },
  APPLICATIONS_SHELF_FETCH_START() {
    h = 1
  },
  APPLICATIONS_SHELF_FETCH_SUCCESS(e) {
    let {
      applications: t
    } = e;
    T = t.map(d.Z.createFromServer).sort((e, t) => e.name.localeCompare(t.name)), h = 2
  },
  APPLICATIONS_SHELF_FETCH_FAIL() {
    h = 3
  },
  FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START(e) {
    let {
      channelId: t
    } = e;
    E.set(t, null), I.set(t, 1)
  },
  FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS(e) {
    let {
      channelId: t,
      integrations: n
    } = e;
    E.set(t, N(n.map(c.F))), I.set(t, 2)
  },
  FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL(e) {
    let {
      channelId: t
    } = e;
    I.set(t, 3)
  },
  PRIVATE_CHANNEL_INTEGRATION_CREATE(e) {
    let {
      integration: t
    } = e, n = E.get(t.channel_id);
    if (null == n) return !1;
    E.set(t.channel_id, N([...n, (0, c.F)(t)]))
  },
  PRIVATE_CHANNEL_INTEGRATION_UPDATE(e) {
    let {
      integration: t
    } = e, n = E.get(t.channel_id);
    if (null == n) return !1;
    let i = (0, c.F)(t),
      r = n.findIndex(e => e.application.id === i.application.id),
      s = [...n]; - 1 === r ? s.push(i) : s[r] = i, E.set(i.channel_id, N(s))
  },
  PRIVATE_CHANNEL_INTEGRATION_DELETE(e) {
    let {
      channelId: t,
      applicationId: n
    } = e, i = E.get(t);
    if (null == i) return !1;
    E.set(t, i.filter(e => e.application.id !== n))
  },
  CHANNEL_DELETE(e) {
    let {
      channel: t
    } = e;
    return E.delete(t.id)
  }
});
t.Z = A