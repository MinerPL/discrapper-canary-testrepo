n(47120);
var i,
    a,
    s,
    l,
    r = n(442837),
    o = n(570140),
    c = n(975984),
    u = n(486527);
let d = Object.freeze({}),
    h = !1,
    m = {},
    p = {},
    _ = {},
    E = {},
    f = {};
class C extends (i = r.ZP.Store) {
    isFetching() {
        return h;
    }
    getCurrentCategoryId(e) {
        var t;
        return null !== (t = p[e]) && void 0 !== t ? t : u.AR.ALL;
    }
    getDirectoryEntries(e, t) {
        var n;
        return null != t ? (null === (n = _[e]) || void 0 === n ? void 0 : n[t]) : m[e];
    }
    getDirectoryEntry(e, t) {
        var n;
        return null === (n = m[e]) || void 0 === n ? void 0 : n[t];
    }
    getDirectoryAllEntriesCount(e) {
        var t;
        return Object.keys(null !== (t = m[e]) && void 0 !== t ? t : {}).length;
    }
    getDirectoryCategoryCounts(e) {
        var t;
        return null !== (t = E[e]) && void 0 !== t ? t : d;
    }
    getAdminGuildEntryIds(e) {
        return f[e];
    }
}
(l = 'GuildDirectoryStore'),
    (s = 'displayName') in (a = C)
        ? Object.defineProperty(a, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = l),
    (t.Z = new C(o.Z, {
        GUILD_DIRECTORY_FETCH_START: function () {
            h = !0;
        },
        GUILD_DIRECTORY_FETCH_SUCCESS: function (e) {
            let { channelId: t, entries: n } = e;
            h = !1;
            let i = {},
                a = {};
            n.forEach((e) => {
                let t = (0, c.MQ)(e);
                (i[t.guildId] = t), null != a[t.primaryCategoryId] ? (a[t.primaryCategoryId][t.guildId] = t) : (a[t.primaryCategoryId] = { [t.guildId]: t });
            }),
                (m[t] = i),
                (_[t] = a);
        },
        GUILD_DIRECTORY_FETCH_FAILURE: function () {
            h = !1;
        },
        GUILD_DIRECTORY_ENTRY_CREATE: function (e) {
            var t, n, i, a, s;
            let { channelId: l, entry: r } = e,
                o = (0, c.MQ)(r);
            if (null == o || (null === (t = m[l]) || void 0 === t ? void 0 : t[o.guildId]) != null) return;
            m[l] = {
                ...m[l],
                [o.guildId]: o
            };
            let d = null !== (i = o.primaryCategoryId) && void 0 !== i ? i : u.AR.UNCATEGORIZED;
            if (
                ((_[l] = {
                    ..._[l],
                    [d]: {
                        ...(null === (n = _[l]) || void 0 === n ? void 0 : n[d]),
                        [o.guildId]: o
                    }
                }),
                null != E[l])
            ) {
                let e = null !== (s = null === (a = E[l]) || void 0 === a ? void 0 : a[d]) && void 0 !== s ? s : 0;
                E[l] = {
                    ...E[l],
                    [d]: e + 1
                };
            }
        },
        GUILD_DIRECTORY_ENTRY_DELETE: function (e) {
            var t, n;
            let { channelId: i, guildId: a } = e,
                s = null === (t = m[i]) || void 0 === t ? void 0 : t[a];
            if (null == s) return;
            let l = s.primaryCategoryId,
                r = Object.assign({}, m[i]);
            delete r[a], null === (n = f[i]) || void 0 === n || n.delete(a), (f[i] = new Set(f[i])), (m[i] = r);
            let o = Object.assign({}, _[i][l]);
            if (
                (delete o[a],
                (_[i] = {
                    ..._[i],
                    [l]: o
                }),
                null != E[i])
            ) {
                let e = E[i][l] - 1;
                E[i] = {
                    ...E[i],
                    [l]: e >= 0 ? e : 0
                };
            }
        },
        GUILD_DIRECTORY_ENTRY_UPDATE: function (e) {
            var t, n, i, a, s, l, r, o, d;
            let { channelId: h, entry: p } = e,
                f = (0, c.MQ)(p),
                C = null === (t = m[h]) || void 0 === t ? void 0 : t[f.guildId];
            m[h] = {
                ...m[h],
                [f.guildId]: {
                    ...C,
                    ...f
                }
            };
            let g = null !== (a = null == C ? void 0 : C.primaryCategoryId) && void 0 !== a ? a : u.AR.UNCATEGORIZED,
                I = null !== (s = f.primaryCategoryId) && void 0 !== s ? s : u.AR.UNCATEGORIZED,
                x = Object.assign({}, null === (n = _[h]) || void 0 === n ? void 0 : n[g]);
            null != C && g !== I && delete x[f.guildId],
                (_[h] = {
                    ..._[h],
                    [g]: x,
                    [I]: {
                        ...(null === (i = _[h]) || void 0 === i ? void 0 : i[I]),
                        [f.guildId]: {
                            ...C,
                            ...f
                        }
                    }
                }),
                I !== g &&
                    null != E[h] &&
                    (E[h] = {
                        ...E[h],
                        [g]: (null === (l = E[h]) || void 0 === l ? void 0 : l[g]) > 0 ? (null === (r = E[h]) || void 0 === r ? void 0 : r[g]) - 1 : 0,
                        [I]: (null !== (d = null === (o = E[h]) || void 0 === o ? void 0 : o[I]) && void 0 !== d ? d : 0) + 1
                    });
        },
        GUILD_DIRECTORY_CATEGORY_SELECT: function (e) {
            let { channelId: t, categoryId: n } = e;
            p[t] = n;
        },
        GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS: function (e) {
            let { channelId: t, counts: n } = e;
            E[t] = n;
        },
        GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS: function (e) {
            let { channelId: t, entries: n } = e,
                i = new Set();
            n.forEach((e) => {
                let t = (0, c.MQ)(e);
                i.add(t.guildId);
            }),
                (f[t] = i);
        }
    }));
