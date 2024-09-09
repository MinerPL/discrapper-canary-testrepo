n(653041);
var i,
    a,
    s,
    l,
    r = n(442837),
    o = n(570140),
    c = n(975984);
let u = [],
    d = {},
    h = {};
class m extends (i = r.ZP.Store) {
    getSearchState(e) {
        var t;
        return null !== (t = d[e]) && void 0 !== t
            ? t
            : {
                  mostRecentQuery: '',
                  fetching: !1
              };
    }
    getSearchResults(e, t) {
        var n, i, a;
        return null !== (a = null === (i = h[e]) || void 0 === i ? void 0 : null === (n = i[t]) || void 0 === n ? void 0 : n.results) && void 0 !== a ? a : u;
    }
    shouldFetch(e, t) {
        var n, i;
        let a = null === (i = h[e]) || void 0 === i ? void 0 : null === (n = i[t]) || void 0 === n ? void 0 : n.lastSearchedAt;
        return null == a || Date.now() - a > 120000;
    }
}
(l = 'GuildDirectorySearchStore'),
    (s = 'displayName') in (a = m)
        ? Object.defineProperty(a, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = l),
    (t.Z = new m(o.Z, {
        GUILD_DIRECTORY_SEARCH_START: function (e) {
            let { channelId: t, query: n } = e;
            d[t] = {
                fetching: !0,
                mostRecentQuery: n
            };
        },
        GUILD_DIRECTORY_SEARCH_SUCCESS: function (e) {
            let { channelId: t, query: n, results: i } = e;
            d[t] = {
                ...d[t],
                fetching: !1
            };
            let a = [];
            i.forEach((e) => {
                let t = (0, c.MQ)(e);
                a.push(t);
            }),
                (h[t] = {
                    ...h[t],
                    [n]: {
                        results: (0, c.Th)(a),
                        lastSearchedAt: Date.now()
                    }
                });
        },
        GUILD_DIRECTORY_SEARCH_FAILURE: function (e) {
            let { channelId: t } = e;
            d[t] = {
                ...d[t],
                fetching: !1
            };
        },
        GUILD_DIRECTORY_SEARCH_CLEAR: function (e) {
            let { channelId: t } = e;
            d[t] = {
                fetching: !1,
                mostRecentQuery: ''
            };
        },
        GUILD_DIRECTORY_CACHED_SEARCH: function (e) {
            let { channelId: t, query: n } = e;
            d[t] = {
                fetching: !1,
                mostRecentQuery: n
            };
        },
        GUILD_DIRECTORY_ENTRY_DELETE: function (e) {
            var t;
            let { channelId: n, guildId: i } = e,
                a = null === (t = d[n]) || void 0 === t ? void 0 : t.mostRecentQuery;
            if (null == a) return;
            let s = h[n][a];
            if (null == s) return;
            let l = s.results.filter((e) => e.guildId !== i);
            h[n] = {
                ...h[n],
                [d[n].mostRecentQuery]: {
                    ...s,
                    results: l
                }
            };
        }
    }));
