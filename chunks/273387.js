"use strict";
n.r(t), n("47120");
var a, l, s, i, r = n("442837"),
  o = n("570140"),
  u = n("975984"),
  d = n("486527");
let c = Object.freeze({}),
  f = !1,
  h = {},
  m = {},
  p = {},
  E = {},
  C = {};
class g extends(a = r.default.Store) {
  isFetching() {
    return f
  }
  getCurrentCategoryId(e) {
    var t;
    return null !== (t = m[e]) && void 0 !== t ? t : d.DirectoryEntryCategories.ALL
  }
  getDirectoryEntries(e, t) {
    var n;
    return null != t ? null === (n = p[e]) || void 0 === n ? void 0 : n[t] : h[e]
  }
  getDirectoryEntry(e, t) {
    var n;
    return null === (n = h[e]) || void 0 === n ? void 0 : n[t]
  }
  getDirectoryAllEntriesCount(e) {
    var t;
    return Object.keys(null !== (t = h[e]) && void 0 !== t ? t : {}).length
  }
  getDirectoryCategoryCounts(e) {
    var t;
    return null !== (t = E[e]) && void 0 !== t ? t : c
  }
  getAdminGuildEntryIds(e) {
    return C[e]
  }
}
i = "GuildDirectoryStore", (s = "displayName") in(l = g) ? Object.defineProperty(l, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[s] = i, t.default = new g(o.default, {
  GUILD_DIRECTORY_FETCH_START: function() {
    f = !0
  },
  GUILD_DIRECTORY_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      entries: n
    } = e;
    f = !1;
    let a = {},
      l = {};
    n.forEach(e => {
      let t = (0, u.guildDirectoryEntryFromServer)(e);
      a[t.guildId] = t, null != l[t.primaryCategoryId] ? l[t.primaryCategoryId][t.guildId] = t : l[t.primaryCategoryId] = {
        [t.guildId]: t
      }
    }), h[t] = a, p[t] = l
  },
  GUILD_DIRECTORY_FETCH_FAILURE: function() {
    f = !1
  },
  GUILD_DIRECTORY_ENTRY_CREATE: function(e) {
    var t, n, a, l, s;
    let {
      channelId: i,
      entry: r
    } = e, o = (0, u.guildDirectoryEntryFromServer)(r);
    if (null == o || (null === (t = h[i]) || void 0 === t ? void 0 : t[o.guildId]) != null) return;
    h[i] = {
      ...h[i],
      [o.guildId]: o
    };
    let c = null !== (a = o.primaryCategoryId) && void 0 !== a ? a : d.DirectoryEntryCategories.UNCATEGORIZED;
    if (p[i] = {
        ...p[i],
        [c]: {
          ...null === (n = p[i]) || void 0 === n ? void 0 : n[c],
          [o.guildId]: o
        }
      }, null != E[i]) {
      let e = null !== (s = null === (l = E[i]) || void 0 === l ? void 0 : l[c]) && void 0 !== s ? s : 0;
      E[i] = {
        ...E[i],
        [c]: e + 1
      }
    }
  },
  GUILD_DIRECTORY_ENTRY_DELETE: function(e) {
    var t, n;
    let {
      channelId: a,
      guildId: l
    } = e, s = null === (t = h[a]) || void 0 === t ? void 0 : t[l];
    if (null == s) return;
    let i = s.primaryCategoryId,
      r = Object.assign({}, h[a]);
    delete r[l], null === (n = C[a]) || void 0 === n || n.delete(l), C[a] = new Set(C[a]), h[a] = r;
    let o = Object.assign({}, p[a][i]);
    if (delete o[l], p[a] = {
        ...p[a],
        [i]: o
      }, null != E[a]) {
      let e = E[a][i] - 1;
      E[a] = {
        ...E[a],
        [i]: e >= 0 ? e : 0
      }
    }
  },
  GUILD_DIRECTORY_ENTRY_UPDATE: function(e) {
    var t, n, a, l, s, i, r, o, c;
    let {
      channelId: f,
      entry: m
    } = e, C = (0, u.guildDirectoryEntryFromServer)(m), g = null === (t = h[f]) || void 0 === t ? void 0 : t[C.guildId];
    h[f] = {
      ...h[f],
      [C.guildId]: {
        ...g,
        ...C
      }
    };
    let S = null !== (l = null == g ? void 0 : g.primaryCategoryId) && void 0 !== l ? l : d.DirectoryEntryCategories.UNCATEGORIZED,
      _ = null !== (s = C.primaryCategoryId) && void 0 !== s ? s : d.DirectoryEntryCategories.UNCATEGORIZED,
      T = Object.assign({}, null === (n = p[f]) || void 0 === n ? void 0 : n[S]);
    null != g && S !== _ && delete T[C.guildId], p[f] = {
      ...p[f],
      [S]: T,
      [_]: {
        ...null === (a = p[f]) || void 0 === a ? void 0 : a[_],
        [C.guildId]: {
          ...g,
          ...C
        }
      }
    }, _ !== S && null != E[f] && (E[f] = {
      ...E[f],
      [S]: (null === (i = E[f]) || void 0 === i ? void 0 : i[S]) > 0 ? (null === (r = E[f]) || void 0 === r ? void 0 : r[S]) - 1 : 0,
      [_]: (null !== (c = null === (o = E[f]) || void 0 === o ? void 0 : o[_]) && void 0 !== c ? c : 0) + 1
    })
  },
  GUILD_DIRECTORY_CATEGORY_SELECT: function(e) {
    let {
      channelId: t,
      categoryId: n
    } = e;
    m[t] = n
  },
  GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      counts: n
    } = e;
    E[t] = n
  },
  GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      entries: n
    } = e, a = new Set;
    n.forEach(e => {
      let t = (0, u.guildDirectoryEntryFromServer)(e);
      a.add(t.guildId)
    }), C[t] = a
  }
})