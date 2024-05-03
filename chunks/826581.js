"use strict";
s.r(t), s("653041"), s("47120");
var E, _, a, n, T = s("442837"),
  i = s("759174"),
  u = s("570140"),
  A = s("430824"),
  l = s("594174"),
  I = s("881952"),
  r = s("246364"),
  o = s("937111"),
  L = s("981631");
let d = {};

function S(e) {
  return d[e]
}

function N(e, t) {
  d[e] = t
}

function g(e, t, s) {
  if (t !== s && null != t) {
    var E, _, a, n;
    if (t === r.GuildJoinRequestApplicationStatuses.SUBMITTED) {
      ;
      let t = d[e];
      E = e, _ = t + 1, d[E] = _
    }
    if (s === r.GuildJoinRequestApplicationStatuses.SUBMITTED) {
      ;
      let t = d[e];
      a = e, n = Math.max(0, t - 1), d[a] = n
    }
  }
}
let D = !1,
  c = {
    GUILD_JOIN_REQUESTS_BY_ID: e => "guild-join-request=".concat(e),
    GUILD_JOIN_REQUESTS_BY_STATUS: (e, t) => "guild-".concat(e, "-").concat(t)
  };

function G(e) {
  let t = [];
  return t.push(c.GUILD_JOIN_REQUESTS_BY_ID(e.joinRequestId)), t.push(c.GUILD_JOIN_REQUESTS_BY_STATUS(e.guildId, e.applicationStatus)), t
}
let O = new i.SecondaryIndexMap(G, e => "".concat(e.joinRequestId)),
  U = new i.SecondaryIndexMap(G, e => "".concat(e.joinRequestId)),
  C = new i.SecondaryIndexMap(G, e => "".concat(e.actionedAt));

function M(e) {
  return O.get(e)
}

function R(e) {
  P[e.joinRequestId] = e, O.set(e.joinRequestId, e), (0, I.isSubmittedApplicationStatus)(e.applicationStatus) && (C.delete(e.joinRequestId), U.set(e.joinRequestId, e)), (0, I.isActionedApplicationStatus)(e.applicationStatus) && (U.delete(e.joinRequestId), C.set(e.joinRequestId, e))
}

function f(e) {
  var t, s;
  let {
    guildId: E,
    request: _
  } = e, a = (0, o.joinRequestFromServer)(_), n = l.default.getCurrentUser();
  if (null == n || a.userId === n.id) return !1;
  let T = null === (s = a.joinRequestId, t = O.get(s)) || void 0 === t ? void 0 : t.applicationStatus;
  return g(E, a.applicationStatus, T), R(a), !0
}
let h = {},
  p = {},
  y = {},
  P = {};
class m extends(E = T.default.Store) {
  getRequest(e) {
    return P[e]
  }
  getRequests(e, t) {
    let s = c.GUILD_JOIN_REQUESTS_BY_STATUS(e, t);
    return (0, I.isActionedApplicationStatus)(t) ? C.values(s) : (0, I.isSubmittedApplicationStatus)(t) ? U.values(s) : O.values(s)
  }
  getSubmittedGuildJoinRequestTotal(e) {
    return d[e]
  }
  isFetching() {
    return D
  }
  getSelectedApplicationTab(e) {
    var t;
    let s = A.default.getGuild(e),
      E = (null == s ? void 0 : s.hasFeature(L.GuildFeatures.CLAN)) ? "REVIEW_APPLICATION" : r.GuildJoinRequestApplicationStatuses.SUBMITTED;
    return null !== (t = h[e]) && void 0 !== t ? t : E
  }
  getSelectedSortOrder(e) {
    var t;
    return null !== (t = p[e]) && void 0 !== t ? t : r.GuildJoinRequestSortOrders.TIMESTAMP_DESC
  }
  getSelectedGuildJoinRequest(e) {
    var t;
    let s = y[e];
    return null != s ? (t = s.joinRequestId, O.get(t)) : null
  }
}
n = "GuildJoinRequestStoreV2", (a = "displayName") in(_ = m) ? Object.defineProperty(_, a, {
  value: n,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : _[a] = n, t.default = new m(u.default, {
  GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: function(e) {
    let {
      joinRequest: t
    } = e;
    R(t)
  },
  GUILD_JOIN_REQUESTS_FETCH_SUCCESS: function(e) {
    let {
      status: t,
      requests: s,
      total: E,
      guildId: _
    } = e;
    if (D = !1, t === r.GuildJoinRequestApplicationStatuses.SUBMITTED) {
      var a, n;
      a = _, n = E, d[a] = n
    }
    s.forEach(e => {
      R(e)
    })
  },
  GUILD_JOIN_REQUESTS_FETCH_START: function() {
    D = !0
  },
  GUILD_JOIN_REQUESTS_FETCH_FAILURE: function() {
    D = !1
  },
  GUILD_JOIN_REQUESTS_BULK_ACTION: function(e) {
    let {
      guildId: t,
      action: s
    } = e;
    O.values(c.GUILD_JOIN_REQUESTS_BY_STATUS(t, r.GuildJoinRequestApplicationStatuses.SUBMITTED)).forEach(e => {
      R({
        ...e,
        applicationStatus: s
      })
    }), d[t] = 0
  },
  GUILD_JOIN_REQUEST_CREATE: f,
  GUILD_JOIN_REQUEST_UPDATE: f,
  GUILD_JOIN_REQUEST_DELETE: function(e) {
    var t, s;
    let {
      id: E,
      guildId: _
    } = e;
    let a = (t = E, O.get(t));
    if (null != a) {
      ;
      g(_, null, a.applicationStatus), s = E, delete P[s], O.delete(s), U.delete(s), C.delete(s)
    }
  },
  GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: function(e) {
    let {
      guildId: t,
      applicationTab: s
    } = e;
    s !== h[t] && (h[t] = s)
  },
  GUILD_JOIN_REQUESTS_SET_SORT_ORDER: function(e) {
    var t;
    let {
      guildId: s,
      sortOrder: E
    } = e;
    if (E === p[s]) return;
    p[s] = E;
    let _ = null !== (t = h[s]) && void 0 !== t ? t : r.GuildJoinRequestApplicationStatuses.SUBMITTED;
    "REVIEW_APPLICATION" !== _ && ((0, I.isActionedApplicationStatus)(_) && C.clear(), (0, I.isSubmittedApplicationStatus)(_) && U.clear())
  },
  GUILD_JOIN_REQUESTS_SET_SELECTED: function(e) {
    let {
      guildId: t,
      request: s
    } = e;
    y[t] = s
  }
})