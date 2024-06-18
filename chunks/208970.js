"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(592125);
let _ = {};

function d(e) {
  let t = u.Z.getChannel(e);
  return !!(null != t && t.isForumLikeChannel()) || !1
}

function c(e) {
  var t;
  let n = null !== (t = _[e]) && void 0 !== t ? t : {
    query: null,
    loading: !1,
    results: null
  };
  return _[e] = n, n
}
class E extends(o = a.ZP.Store) {
  getSearchQuery(e) {
    let t = _[e];
    return null == t ? void 0 : t.query
  }
  getSearchLoading(e) {
    var t;
    let n = _[e];
    return null !== (t = null == n ? void 0 : n.loading) && void 0 !== t && t
  }
  getSearchResults(e) {
    let t = _[e];
    return null == t ? void 0 : t.results
  }
  getHasSearchResults(e) {
    let t = _[e];
    return (null == t ? void 0 : t.results) != null && t.results.length > 0
  }
}
s = "ForumSearchStore", (r = "displayName") in(i = E) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new E(l.Z, {
  CONNECTION_OPEN: function() {
    _ = {}
  },
  THREAD_DELETE: function(e) {
    var t;
    let {
      channel: n
    } = e, i = n.parent_id;
    if (null == i) return !1;
    let r = _[i];
    if (null == r) return !1;
    _[i] = {
      ...r,
      results: null === (t = r.results) || void 0 === t ? void 0 : t.filter(e => n.id !== e)
    }
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return delete _[t.id]
  },
  FORUM_SEARCH_QUERY_UPDATED: function(e) {
    let {
      channelId: t,
      query: n
    } = e;
    if (!d(t)) return !1;
    let i = c(t);
    _[t] = {
      ...i,
      query: n,
      results: null
    }
  },
  FORUM_SEARCH_START: function(e) {
    let {
      channelId: t
    } = e;
    if (!d(t)) return !1;
    let n = c(t);
    _[t] = {
      ...n,
      loading: !0
    }
  },
  FORUM_SEARCH_SUCCESS: function(e) {
    let {
      channelId: t,
      threadIds: n
    } = e;
    if (!d(t)) return !1;
    let i = c(t);
    _[t] = {
      ...i,
      loading: !1,
      results: n
    }
  },
  FORUM_SEARCH_FAILURE: function(e) {
    let {
      channelId: t
    } = e;
    if (!d(t)) return !1;
    let n = c(t);
    _[t] = {
      ...n,
      loading: !1,
      results: []
    }
  },
  FORUM_SEARCH_CLEAR: function(e) {
    let {
      channelId: t
    } = e;
    return !!d(t) && delete _[t]
  }
})