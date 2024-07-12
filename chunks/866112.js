n(653041);
var i, a, l, s, r = n(442837),
  o = n(570140),
  c = n(975984);
let d = [],
  u = {},
  h = {};
class p extends(i = r.ZP.Store) {
  getSearchState(e) {
var t;
return null !== (t = u[e]) && void 0 !== t ? t : {
  mostRecentQuery: '',
  fetching: !1
};
  }
  getSearchResults(e, t) {
var n, i, a;
return null !== (a = null === (i = h[e]) || void 0 === i ? void 0 : null === (n = i[t]) || void 0 === n ? void 0 : n.results) && void 0 !== a ? a : d;
  }
  shouldFetch(e, t) {
var n, i;
let a = null === (i = h[e]) || void 0 === i ? void 0 : null === (n = i[t]) || void 0 === n ? void 0 : n.lastSearchedAt;
return null == a || Date.now() - a > 120000;
  }
}
s = 'GuildDirectorySearchStore', (l = 'displayName') in(a = p) ? Object.defineProperty(a, l, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = s, t.Z = new p(o.Z, {
  GUILD_DIRECTORY_SEARCH_START: function(e) {
let {
  channelId: t,
  query: n
} = e;
u[t] = {
  fetching: !0,
  mostRecentQuery: n
};
  },
  GUILD_DIRECTORY_SEARCH_SUCCESS: function(e) {
let {
  channelId: t,
  query: n,
  results: i
} = e;
u[t] = {
  ...u[t],
  fetching: !1
};
let a = [];
i.forEach(e => {
  let t = (0, c.MQ)(e);
  a.push(t);
}), h[t] = {
  ...h[t],
  [n]: {
    results: (0, c.Th)(a),
    lastSearchedAt: Date.now()
  }
};
  },
  GUILD_DIRECTORY_SEARCH_FAILURE: function(e) {
let {
  channelId: t
} = e;
u[t] = {
  ...u[t],
  fetching: !1
};
  },
  GUILD_DIRECTORY_SEARCH_CLEAR: function(e) {
let {
  channelId: t
} = e;
u[t] = {
  fetching: !1,
  mostRecentQuery: ''
};
  },
  GUILD_DIRECTORY_CACHED_SEARCH: function(e) {
let {
  channelId: t,
  query: n
} = e;
u[t] = {
  fetching: !1,
  mostRecentQuery: n
};
  },
  GUILD_DIRECTORY_ENTRY_DELETE: function(e) {
var t;
let {
  channelId: n,
  guildId: i
} = e, a = null === (t = u[n]) || void 0 === t ? void 0 : t.mostRecentQuery;
if (null == a)
  return;
let l = h[n][a];
if (null == l)
  return;
let s = l.results.filter(e => e.guildId !== i);
h[n] = {
  ...h[n],
  [u[n].mostRecentQuery]: {
    ...l,
    results: s
  }
};
  }
});