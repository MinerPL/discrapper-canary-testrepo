n(47120);
var i, a, l, s, r = n(442837),
  o = n(570140),
  c = n(975984),
  d = n(486527);
let u = Object.freeze({}),
  h = !1,
  p = {},
  m = {},
  _ = {},
  f = {},
  E = {};
class C extends(i = r.ZP.Store) {
  isFetching() {
return h;
  }
  getCurrentCategoryId(e) {
var t;
return null !== (t = m[e]) && void 0 !== t ? t : d.AR.ALL;
  }
  getDirectoryEntries(e, t) {
var n;
return null != t ? null === (n = _[e]) || void 0 === n ? void 0 : n[t] : p[e];
  }
  getDirectoryEntry(e, t) {
var n;
return null === (n = p[e]) || void 0 === n ? void 0 : n[t];
  }
  getDirectoryAllEntriesCount(e) {
var t;
return Object.keys(null !== (t = p[e]) && void 0 !== t ? t : {}).length;
  }
  getDirectoryCategoryCounts(e) {
var t;
return null !== (t = f[e]) && void 0 !== t ? t : u;
  }
  getAdminGuildEntryIds(e) {
return E[e];
  }
}
s = 'GuildDirectoryStore', (l = 'displayName') in(a = C) ? Object.defineProperty(a, l, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = s, t.Z = new C(o.Z, {
  GUILD_DIRECTORY_FETCH_START: function() {
h = !0;
  },
  GUILD_DIRECTORY_FETCH_SUCCESS: function(e) {
let {
  channelId: t,
  entries: n
} = e;
h = !1;
let i = {},
  a = {};
n.forEach(e => {
  let t = (0, c.MQ)(e);
  i[t.guildId] = t, null != a[t.primaryCategoryId] ? a[t.primaryCategoryId][t.guildId] = t : a[t.primaryCategoryId] = {
    [t.guildId]: t
  };
}), p[t] = i, _[t] = a;
  },
  GUILD_DIRECTORY_FETCH_FAILURE: function() {
h = !1;
  },
  GUILD_DIRECTORY_ENTRY_CREATE: function(e) {
var t, n, i, a, l;
let {
  channelId: s,
  entry: r
} = e, o = (0, c.MQ)(r);
if (null == o || (null === (t = p[s]) || void 0 === t ? void 0 : t[o.guildId]) != null)
  return;
p[s] = {
  ...p[s],
  [o.guildId]: o
};
let u = null !== (i = o.primaryCategoryId) && void 0 !== i ? i : d.AR.UNCATEGORIZED;
if (_[s] = {
    ..._[s],
    [u]: {
      ...null === (n = _[s]) || void 0 === n ? void 0 : n[u],
      [o.guildId]: o
    }
  }, null != f[s]) {
  let e = null !== (l = null === (a = f[s]) || void 0 === a ? void 0 : a[u]) && void 0 !== l ? l : 0;
  f[s] = {
    ...f[s],
    [u]: e + 1
  };
}
  },
  GUILD_DIRECTORY_ENTRY_DELETE: function(e) {
var t, n;
let {
  channelId: i,
  guildId: a
} = e, l = null === (t = p[i]) || void 0 === t ? void 0 : t[a];
if (null == l)
  return;
let s = l.primaryCategoryId,
  r = Object.assign({}, p[i]);
delete r[a], null === (n = E[i]) || void 0 === n || n.delete(a), E[i] = new Set(E[i]), p[i] = r;
let o = Object.assign({}, _[i][s]);
if (delete o[a], _[i] = {
    ..._[i],
    [s]: o
  }, null != f[i]) {
  let e = f[i][s] - 1;
  f[i] = {
    ...f[i],
    [s]: e >= 0 ? e : 0
  };
}
  },
  GUILD_DIRECTORY_ENTRY_UPDATE: function(e) {
var t, n, i, a, l, s, r, o, u;
let {
  channelId: h,
  entry: m
} = e, E = (0, c.MQ)(m), C = null === (t = p[h]) || void 0 === t ? void 0 : t[E.guildId];
p[h] = {
  ...p[h],
  [E.guildId]: {
    ...C,
    ...E
  }
};
let g = null !== (a = null == C ? void 0 : C.primaryCategoryId) && void 0 !== a ? a : d.AR.UNCATEGORIZED,
  I = null !== (l = E.primaryCategoryId) && void 0 !== l ? l : d.AR.UNCATEGORIZED,
  x = Object.assign({}, null === (n = _[h]) || void 0 === n ? void 0 : n[g]);
null != C && g !== I && delete x[E.guildId], _[h] = {
  ..._[h],
  [g]: x,
  [I]: {
    ...null === (i = _[h]) || void 0 === i ? void 0 : i[I],
    [E.guildId]: {
      ...C,
      ...E
    }
  }
}, I !== g && null != f[h] && (f[h] = {
  ...f[h],
  [g]: (null === (s = f[h]) || void 0 === s ? void 0 : s[g]) > 0 ? (null === (r = f[h]) || void 0 === r ? void 0 : r[g]) - 1 : 0,
  [I]: (null !== (u = null === (o = f[h]) || void 0 === o ? void 0 : o[I]) && void 0 !== u ? u : 0) + 1
});
  },
  GUILD_DIRECTORY_CATEGORY_SELECT: function(e) {
let {
  channelId: t,
  categoryId: n
} = e;
m[t] = n;
  },
  GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS: function(e) {
let {
  channelId: t,
  counts: n
} = e;
f[t] = n;
  },
  GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS: function(e) {
let {
  channelId: t,
  entries: n
} = e, i = new Set();
n.forEach(e => {
  let t = (0, c.MQ)(e);
  i.add(t.guildId);
}), E[t] = i;
  }
});