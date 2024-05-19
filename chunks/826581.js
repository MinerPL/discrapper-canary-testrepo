"use strict";
n.r(t), n("47120"), n("653041");
var i, r, a, s, o = n("913527"),
  l = n.n(o),
  u = n("442837"),
  d = n("759174"),
  _ = n("570140"),
  c = n("430824"),
  E = n("594174"),
  I = n("70956"),
  T = n("881952"),
  f = n("246364"),
  S = n("937111"),
  h = n("981631");
let A = new Map,
  m = {};

function N(e) {
  return m[e]
}

function p(e, t) {
  m[e] = t, A.set(e, l()())
}

function O(e, t, n) {
  if (t !== n && null != t) {
    if (t === f.GuildJoinRequestApplicationStatuses.SUBMITTED) {
      let t = m[e];
      p(e, t + 1)
    }
    if (n === f.GuildJoinRequestApplicationStatuses.SUBMITTED) {
      let t = m[e];
      p(e, Math.max(0, t - 1))
    }
  }
}
let C = !1,
  R = {
    GUILD_JOIN_REQUESTS_BY_ID: e => "guild-join-request=".concat(e),
    GUILD_JOIN_REQUESTS_BY_STATUS: (e, t) => "guild-".concat(e, "-").concat(t)
  };

function g(e) {
  let t = [];
  return t.push(R.GUILD_JOIN_REQUESTS_BY_ID(e.joinRequestId)), t.push(R.GUILD_JOIN_REQUESTS_BY_STATUS(e.guildId, e.applicationStatus)), t
}
let L = new d.SecondaryIndexMap(g, e => "".concat(e.joinRequestId)),
  v = new d.SecondaryIndexMap(g, e => "".concat(e.joinRequestId)),
  D = new d.SecondaryIndexMap(g, e => "".concat(e.actionedAt));

function M(e) {
  return L.get(e)
}

function y(e) {
  w[e.joinRequestId] = e, L.set(e.joinRequestId, e), (0, T.isSubmittedApplicationStatus)(e.applicationStatus) && (D.delete(e.joinRequestId), v.set(e.joinRequestId, e)), (0, T.isActionedApplicationStatus)(e.applicationStatus) && (v.delete(e.joinRequestId), D.set(e.joinRequestId, e))
}

function P(e) {
  var t, n;
  let {
    guildId: i,
    request: r
  } = e, a = (0, S.joinRequestFromServer)(r), s = E.default.getCurrentUser();
  if (null == s || a.userId === s.id) return !1;
  let o = null === (n = a.joinRequestId, t = L.get(n)) || void 0 === t ? void 0 : t.applicationStatus;
  return O(i, a.applicationStatus, o), y(a), !0
}
let U = {},
  b = {},
  G = {},
  w = {},
  k = 10 * I.default.Seconds.MINUTE;
class B extends(i = u.default.Store) {
  getRequest(e) {
    return w[e]
  }
  getRequests(e, t) {
    let n = R.GUILD_JOIN_REQUESTS_BY_STATUS(e, t);
    return (0, T.isActionedApplicationStatus)(t) ? D.values(n) : (0, T.isSubmittedApplicationStatus)(t) ? v.values(n) : L.values(n)
  }
  getSubmittedGuildJoinRequestTotal(e) {
    return m[e]
  }
  isFetching() {
    return C
  }
  hasFetched(e) {
    if (!A.has(e)) return !1;
    let t = A.get(e);
    return null != t && l()().diff(t, "seconds") < k
  }
  getSelectedApplicationTab(e) {
    var t;
    let n = c.default.getGuild(e),
      i = (null == n ? void 0 : n.hasFeature(h.GuildFeatures.CLAN)) ? "REVIEW_APPLICATION" : f.GuildJoinRequestApplicationStatuses.SUBMITTED;
    return null !== (t = U[e]) && void 0 !== t ? t : i
  }
  getSelectedSortOrder(e) {
    var t;
    return null !== (t = b[e]) && void 0 !== t ? t : f.GuildJoinRequestSortOrders.TIMESTAMP_DESC
  }
  getSelectedGuildJoinRequest(e) {
    var t;
    let n = G[e];
    return null != n ? (t = n.joinRequestId, L.get(t)) : null
  }
}
s = "GuildJoinRequestStoreV2", (a = "displayName") in(r = B) ? Object.defineProperty(r, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[a] = s, t.default = new B(_.default, {
  GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: function(e) {
    let {
      joinRequest: t
    } = e;
    y(t)
  },
  GUILD_JOIN_REQUESTS_FETCH_SUCCESS: function(e) {
    let {
      status: t,
      requests: n,
      total: i,
      guildId: r
    } = e;
    C = !1, t === f.GuildJoinRequestApplicationStatuses.SUBMITTED && p(r, i), n.forEach(e => {
      y(e)
    })
  },
  GUILD_JOIN_REQUESTS_FETCH_START: function() {
    C = !0
  },
  GUILD_JOIN_REQUESTS_FETCH_FAILURE: function() {
    C = !1
  },
  GUILD_JOIN_REQUESTS_BULK_ACTION: function(e) {
    let {
      guildId: t,
      action: n
    } = e;
    L.values(R.GUILD_JOIN_REQUESTS_BY_STATUS(t, f.GuildJoinRequestApplicationStatuses.SUBMITTED)).forEach(e => {
      y({
        ...e,
        applicationStatus: n
      })
    }), p(t, 0)
  },
  GUILD_JOIN_REQUEST_CREATE: P,
  GUILD_JOIN_REQUEST_UPDATE: P,
  GUILD_JOIN_REQUEST_DELETE: function(e) {
    var t, n;
    let {
      id: i,
      guildId: r
    } = e;
    let a = (t = i, L.get(t));
    if (null != a) {
      ;
      O(r, null, a.applicationStatus), n = i, delete w[n], L.delete(n), v.delete(n), D.delete(n)
    }
  },
  GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: function(e) {
    let {
      guildId: t,
      applicationTab: n
    } = e;
    n !== U[t] && (U[t] = n)
  },
  GUILD_JOIN_REQUESTS_SET_SORT_ORDER: function(e) {
    var t;
    let {
      guildId: n,
      sortOrder: i
    } = e;
    if (i === b[n]) return;
    b[n] = i;
    let r = null !== (t = U[n]) && void 0 !== t ? t : f.GuildJoinRequestApplicationStatuses.SUBMITTED;
    "REVIEW_APPLICATION" !== r && ((0, T.isActionedApplicationStatus)(r) && D.clear(), (0, T.isSubmittedApplicationStatus)(r) && v.clear())
  },
  GUILD_JOIN_REQUESTS_SET_SELECTED: function(e) {
    let {
      guildId: t,
      request: n
    } = e;
    G[t] = n
  }
})