"use strict";
i.r(t), i.d(t, {
  default: function() {
    return A
  }
}), i("424973"), i("222007");
var n = i("446674"),
  a = i("407846"),
  l = i("913144"),
  s = i("305961"),
  r = i("697218"),
  o = i("591023"),
  d = i("567054"),
  u = i("982527"),
  c = i("49111");
let f = {};

function E(e) {
  var t;
  return null !== (t = f[e]) && void 0 !== t ? t : 0
}

function I(e, t) {
  f[e] = t
}

function T(e, t, i) {
  if (t !== i && null != t) {
    var n, a, l, s;
    if (t === d.GuildJoinRequestApplicationStatuses.SUBMITTED) {
      ;
      let t = E(e);
      n = e, a = t + 1, f[n] = a
    }
    if (i === d.GuildJoinRequestApplicationStatuses.SUBMITTED) {
      ;
      let t = E(e);
      l = e, s = Math.max(0, t - 1), f[l] = s
    }
  }
}
let m = !1,
  _ = {
    GUILD_JOIN_REQUESTS_BY_ID: e => "guild-join-request=".concat(e),
    GUILD_JOIN_REQUESTS_BY_STATUS: (e, t) => "guild-".concat(e, "-").concat(t)
  };

function x(e) {
  let t = [];
  return t.push(_.GUILD_JOIN_REQUESTS_BY_ID(e.id)), t.push(_.GUILD_JOIN_REQUESTS_BY_STATUS(e.guildId, e.applicationStatus)), t
}
let h = new a.default(x, e => "".concat(e.id)),
  p = new a.default(x, e => "".concat(e.id)),
  R = new a.default(x, e => "".concat(e.actionedAt));

function M(e) {
  return h.get(e)
}

function F(e) {
  h.set(e.id, e), (0, o.isSubmittedApplicationStatus)(e.applicationStatus) && (R.delete(e.id), p.set(e.id, e)), (0, o.isActionedApplicationStatus)(e.applicationStatus) && (p.delete(e.id), R.set(e.id, e))
}

function v(e) {
  var t, i;
  let {
    guildId: n,
    request: a
  } = e, l = (0, u.joinRequestFromServer)(a), s = r.default.getCurrentUser();
  if (null == s || l.userId === s.id) return !1;
  let o = null === (i = l.id, t = h.get(i)) || void 0 === t ? void 0 : t.applicationStatus;
  return T(n, l.applicationStatus, o), F(l), !0
}
let N = {},
  S = {},
  C = {};
class g extends n.default.Store {
  getRequests(e, t) {
    let i = _.GUILD_JOIN_REQUESTS_BY_STATUS(e, t);
    return (0, o.isActionedApplicationStatus)(t) ? R.values(i) : (0, o.isSubmittedApplicationStatus)(t) ? p.values(i) : h.values(i)
  }
  getSubmittedGuildJoinRequestTotal(e) {
    return E(e)
  }
  isFetching() {
    return m
  }
  getSelectedApplicationTab(e) {
    var t;
    let i = s.default.getGuild(e),
      n = (null == i ? void 0 : i.hasFeature(c.GuildFeatures.CLAN)) ? "REVIEW_APPLICATION" : d.GuildJoinRequestApplicationStatuses.SUBMITTED;
    return null !== (t = N[e]) && void 0 !== t ? t : n
  }
  getSelectedSortOrder(e) {
    var t;
    return null !== (t = S[e]) && void 0 !== t ? t : d.GuildJoinRequestSortOrders.TIMESTAMP_DESC
  }
  getSelectedGuildJoinRequest(e) {
    var t;
    let i = C[e];
    return null != i ? (t = i.id, h.get(t)) : null
  }
}
g.displayName = "GuildJoinRequestStoreV2";
var A = new g(l.default, {
  GUILD_JOIN_REQUESTS_FETCH_SUCCESS: function(e) {
    let {
      status: t,
      requests: i,
      total: n,
      guildId: a
    } = e;
    if (m = !1, t === d.GuildJoinRequestApplicationStatuses.SUBMITTED) {
      var l, s;
      l = a, s = n, f[l] = s
    }
    i.forEach(e => {
      F(e)
    })
  },
  GUILD_JOIN_REQUESTS_FETCH_START: function() {
    m = !0
  },
  GUILD_JOIN_REQUESTS_FETCH_FAILURE: function() {
    m = !1
  },
  GUILD_JOIN_REQUESTS_BULK_ACTION: function(e) {
    let {
      guildId: t,
      action: i
    } = e, n = h.values(_.GUILD_JOIN_REQUESTS_BY_STATUS(t, d.GuildJoinRequestApplicationStatuses.SUBMITTED));
    n.forEach(e => {
      F({
        ...e,
        applicationStatus: i
      })
    }), f[t] = 0
  },
  GUILD_JOIN_REQUEST_CREATE: v,
  GUILD_JOIN_REQUEST_UPDATE: v,
  GUILD_JOIN_REQUEST_DELETE: function(e) {
    var t, i;
    let {
      id: n,
      guildId: a
    } = e;
    let l = (t = n, h.get(t));
    if (null != l) {
      ;
      T(a, null, l.applicationStatus), i = n, h.delete(i), p.delete(i), R.delete(i)
    }
  },
  GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: function(e) {
    let {
      guildId: t,
      applicationTab: i
    } = e;
    i !== N[t] && (N[t] = i)
  },
  GUILD_JOIN_REQUESTS_SET_SORT_ORDER: function(e) {
    var t;
    let {
      guildId: i,
      sortOrder: n
    } = e;
    if (n === S[i]) return;
    S[i] = n;
    let a = null !== (t = N[i]) && void 0 !== t ? t : d.GuildJoinRequestApplicationStatuses.SUBMITTED;
    "REVIEW_APPLICATION" !== a && ((0, o.isActionedApplicationStatus)(a) && R.clear(), (0, o.isSubmittedApplicationStatus)(a) && p.clear())
  },
  GUILD_JOIN_REQUESTS_SET_SELECTED: function(e) {
    let {
      guildId: t,
      request: i
    } = e;
    C[t] = i
  }
})