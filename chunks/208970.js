var r, i, a, o, s = n(442837),
  l = n(570140),
  u = n(592125);
let c = {};

function d(e) {
  let t = u.Z.getChannel(e);
  return !!(null != t && t.isForumLikeChannel()) || !1;
}

function _(e) {
  var t;
  let n = null !== (t = c[e]) && void 0 !== t ? t : {
query: null,
loading: !1,
results: null
  };
  return c[e] = n, n;
}
class E extends(o = s.ZP.Store) {
  getSearchQuery(e) {
let t = c[e];
return null == t ? void 0 : t.query;
  }
  getSearchLoading(e) {
var t;
let n = c[e];
return null !== (t = null == n ? void 0 : n.loading) && void 0 !== t && t;
  }
  getSearchResults(e) {
let t = c[e];
return null == t ? void 0 : t.results;
  }
  getHasSearchResults(e) {
let t = c[e];
return (null == t ? void 0 : t.results) != null && t.results.length > 0;
  }
}
a = 'ForumSearchStore', (i = 'displayName') in(r = E) ? Object.defineProperty(r, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[i] = a, t.Z = new E(l.Z, {
  CONNECTION_OPEN: function() {
c = {};
  },
  THREAD_DELETE: function(e) {
var t;
let {
  channel: n
} = e, r = n.parent_id;
if (null == r)
  return !1;
let i = c[r];
if (null == i)
  return !1;
c[r] = {
  ...i,
  results: null === (t = i.results) || void 0 === t ? void 0 : t.filter(e => n.id !== e)
};
  },
  CHANNEL_DELETE: function(e) {
let {
  channel: t
} = e;
return delete c[t.id];
  },
  FORUM_SEARCH_QUERY_UPDATED: function(e) {
let {
  channelId: t,
  query: n
} = e;
if (!d(t))
  return !1;
let r = _(t);
c[t] = {
  ...r,
  query: n,
  results: null
};
  },
  FORUM_SEARCH_START: function(e) {
let {
  channelId: t
} = e;
if (!d(t))
  return !1;
let n = _(t);
c[t] = {
  ...n,
  loading: !0
};
  },
  FORUM_SEARCH_SUCCESS: function(e) {
let {
  channelId: t,
  threadIds: n
} = e;
if (!d(t))
  return !1;
let r = _(t);
c[t] = {
  ...r,
  loading: !1,
  results: n
};
  },
  FORUM_SEARCH_FAILURE: function(e) {
let {
  channelId: t
} = e;
if (!d(t))
  return !1;
let n = _(t);
c[t] = {
  ...n,
  loading: !1,
  results: []
};
  },
  FORUM_SEARCH_CLEAR: function(e) {
let {
  channelId: t
} = e;
return !!d(t) && delete c[t];
  }
});