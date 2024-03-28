"use strict";
n.r(t), n("653041");
var a, l, s, i, r = n("442837"),
  o = n("570140"),
  u = n("975984");
let d = [],
  c = {},
  f = {};
class h extends(a = r.default.Store) {
  getSearchState(e) {
    var t;
    return null !== (t = c[e]) && void 0 !== t ? t : {
      mostRecentQuery: "",
      fetching: !1
    }
  }
  getSearchResults(e, t) {
    var n, a, l;
    return null !== (l = null === (a = f[e]) || void 0 === a ? void 0 : null === (n = a[t]) || void 0 === n ? void 0 : n.results) && void 0 !== l ? l : d
  }
  shouldFetch(e, t) {
    var n, a;
    let l = null === (a = f[e]) || void 0 === a ? void 0 : null === (n = a[t]) || void 0 === n ? void 0 : n.lastSearchedAt;
    return null == l || Date.now() - l > 12e4
  }
}
i = "GuildDirectorySearchStore", (s = "displayName") in(l = h) ? Object.defineProperty(l, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[s] = i, t.default = new h(o.default, {
  GUILD_DIRECTORY_SEARCH_START: function(e) {
    let {
      channelId: t,
      query: n
    } = e;
    c[t] = {
      fetching: !0,
      mostRecentQuery: n
    }
  },
  GUILD_DIRECTORY_SEARCH_SUCCESS: function(e) {
    let {
      channelId: t,
      query: n,
      results: a
    } = e;
    c[t] = {
      ...c[t],
      fetching: !1
    };
    let l = [];
    a.forEach(e => {
      let t = (0, u.guildDirectoryEntryFromServer)(e);
      l.push(t)
    }), f[t] = {
      ...f[t],
      [n]: {
        results: (0, u.orderByTotalMemberCount)(l),
        lastSearchedAt: Date.now()
      }
    }
  },
  GUILD_DIRECTORY_SEARCH_FAILURE: function(e) {
    let {
      channelId: t
    } = e;
    c[t] = {
      ...c[t],
      fetching: !1
    }
  },
  GUILD_DIRECTORY_SEARCH_CLEAR: function(e) {
    let {
      channelId: t
    } = e;
    c[t] = {
      fetching: !1,
      mostRecentQuery: ""
    }
  },
  GUILD_DIRECTORY_CACHED_SEARCH: function(e) {
    let {
      channelId: t,
      query: n
    } = e;
    c[t] = {
      fetching: !1,
      mostRecentQuery: n
    }
  },
  GUILD_DIRECTORY_ENTRY_DELETE: function(e) {
    var t;
    let {
      channelId: n,
      guildId: a
    } = e, l = null === (t = c[n]) || void 0 === t ? void 0 : t.mostRecentQuery;
    if (null == l) return;
    let s = f[n][l];
    if (null == s) return;
    let i = s.results.filter(e => e.guildId !== a);
    f[n] = {
      ...f[n],
      [c[n].mostRecentQuery]: {
        ...s,
        results: i
      }
    }
  }
})