n.d(t, {
    I9: function () {
        return z;
    },
    LE: function () {
        return w;
    },
    ML: function () {
        return F;
    },
    Qc: function () {
        return U;
    },
    c2: function () {
        return G;
    },
    kN: function () {
        return V;
    }
}),
    n(47120),
    n(773603),
    n(724458),
    n(653041);
var i = n(192379),
    r = n(348327),
    l = n.n(r),
    a = n(664751);
if (12633 == n.j) var o = n(512969);
if (12633 == n.j) var s = n(782690);
var c = n(731965),
    d = n(442837),
    u = n(224706),
    m = n(110924),
    h = n(410030),
    f = n(728345),
    p = n(812206),
    g = n(963202),
    _ = n(564990),
    C = n(353647),
    E = n(669764),
    I = n(210753),
    x = n(571457),
    v = n(859921),
    N = n(369566),
    T = n(314897),
    S = n(480294),
    b = n(564334),
    A = n(302221),
    j = n(823379),
    Z = n(956664),
    R = n(229893),
    P = n(229765),
    y = n(286083),
    L = n(207796),
    O = n(976757),
    M = n(981631),
    k = n(308083),
    D = n(128449);
function B() {
    var e;
    let { search: t } = (0, o.TH)(),
        { game: n } = a.parse(t.slice(1)),
        i = (0, L.GN)(L.t1, l());
    return null != n && (null === (e = i.games) || void 0 === e ? void 0 : e.length) === 0 && (i.games = [n]), i;
}
function w() {
    let e = (0, L.GN)((e) => e.setGame, s.Z),
        t = (0, L.GN)((e) => e.setSelectedGames, s.Z),
        n = (0, L.GN)((e) => e.selectedGames, s.Z),
        r = B(),
        l = (0, g.An)({ location: 'clan_discovery' }),
        a = (0, g.iN)('clan_discovery'),
        { defaultGameId: o } = (0, g.nk)('clan_discovery'),
        c = null != l ? l : o,
        m = (function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                t = (0, d.e7)([R.Z], () => R.Z.hasLoadedStaticClanDiscovery());
            return (
                i.useEffect(() => {
                    e && !t && (0, P.XB)();
                }, [t, e]),
                t
            );
        })(!a),
        h = (0, d.e7)([R.Z], () => R.Z.isLoading());
    return (
        i.useEffect(() => {
            !(n.length > 0) && !a && (c === k.nJ ? (e(L.hz.VALORANT), t([c])) : c === k.xn ? (e(L.hz.GENSHIN), t([c])) : null == c && (e(L.hz.NONE), t([])));
        }, [e, t, c, n, a]),
        i.useEffect(() => {
            if (a) (0, P.Cg)(r);
            else {
                if (!m) return;
                (0, P.jc)(r);
            }
        }, [r, m, a]),
        i.useEffect(() => {
            u.Z.getDetectableGames();
        }, []),
        { loading: h }
    );
}
function U() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = B(),
        { savedGuildIds: r, loaded: l } = (0, d.cj)([R.Z], () => ({
            savedGuildIds: R.Z.getSavedGuildIds(),
            loaded: R.Z.hasLoadedStaticClanDiscovery()
        })),
        a = (0, g.iN)('clan_discovery'),
        o = (0, d.e7)([R.Z], () => R.Z.getSearchResult(n), [n]),
        s = (0, d.Wu)([R.Z], () => (t && null != r ? r.map((e) => R.Z.getGuildProfile(e)).filter(j.lm) : []), [t, r]),
        c = i.useMemo(() => {
            if ((0, O.Pw)(o)) {
                let t = o.items;
                return null != e ? t.slice(0, e) : t;
            }
            return [];
        }, [e, o]);
    return t
        ? {
              loaded: l || a,
              clans: s,
              searchCriteria: n,
              searchResult: {
                  items: s,
                  loadedAt: Date.now(),
                  status: 'loaded',
                  guildIds: r
              }
          }
        : {
              loaded: l || a,
              clans: c,
              searchCriteria: n,
              searchResult: o
          };
}
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { updatePaginationSettings: n, currentColumnCount: r, pageSize: a, chunkedPages: o, currentPage: c, fetchableGuildIds: u } = (0, y.a)(),
        h = c - 1,
        f = (0, L.GN)((e) => e.loadingGameApplication, s.Z),
        p = (0, d.e7)([R.Z], () => R.Z.getSavedGuildIds()),
        g = B(),
        { searchResult: _, hasError: C } = (0, d.cj)(
            [R.Z],
            () => ({
                searchResult: R.Z.getSearchResult(g),
                hasError: R.Z.hasError()
            }),
            [g]
        );
    i.useEffect(() => {
        n(e, y.$, { pageMemoryEnabled: !0 });
    }, [e, n, _]),
        !(function (e) {
            let [t, n] = i.useState(!1),
                r = i.useRef(),
                a = (0, d.Wu)([R.Z], () => e.filter((e) => R.Z.shouldFetchGuild(e)), [e]),
                o = (0, m.Z)(a),
                s = i.useRef(new AbortController()),
                c = i.useCallback(async (e) => {
                    n(!0), null != r.current && (s.current.abort(), (s.current = new AbortController())), (r.current = (0, P.$s)(e, s.current.signal)), await r.current, null !== r.current && (n(!1), (r.current = null));
                }, []);
            i.useEffect(() => {
                if (!(0 === a.length || l()(a, o))) c(a);
            }, [c, a, o, e]),
                i.useEffect(
                    () => () => {
                        r.current = null;
                    },
                    []
                ),
                t && a.length;
        })(u),
        i.useEffect(() => {
            (0, P.IS)();
        }, []);
    let E = i.useMemo(() => {
            var e;
            return null !== (e = t ? p : o[h]) && void 0 !== e ? e : [];
        }, [p, o, h, t]),
        I = (0, d.Wu)([R.Z], () => E.map((e) => R.Z.getGuildProfile(e)).filter(j.lm), [E]),
        x = E.length === I.length || t,
        v = I.length === a || x,
        N = (0, O.Pw)(_);
    return {
        loaded: e === r && N && v && !f,
        clans: I,
        searchCriteria: g,
        searchResult: _,
        hasError: C
    };
}
function G() {
    let { search: e } = (0, o.TH)(),
        t = (0, g.iN)('GlobalDiscovery'),
        { game: n } = t ? a.parse(e.slice(1)) : {},
        r = (0, d.e7)([p.Z], () => (null != n ? p.Z.getApplication(n) : null));
    i.useEffect(() => {
        null != n && (0, x.$X)({ gameId: n });
    }, [n]),
        i.useEffect(() => {
            if (null == n || !t) {
                L.GN.setState({ entrypointGameId: null });
                return;
            }
            (0, c.j)(() => {
                v.Z.setState({ selectedTab: D.vf.GUILDS }), L.GN.setState({ mode: L.v0.DISCOVERY });
            }),
                null == r
                    ? ((0, c.j)(() => {
                          L.GN.setState({ loadingGameApplication: !0 });
                      }),
                      f.ZP.fetchApplication(n)
                          .then(() => {
                              (0, c.j)(() => {
                                  L.GN.setState({ entrypointGameId: n });
                              });
                          })
                          .finally(() => {
                              (0, c.j)(() => {
                                  L.GN.setState({ loadingGameApplication: !1 });
                              });
                          }))
                    : (L.GN.getState().setSelectedGames([n]), L.GN.setState({ entrypointGameId: n }));
        }, [r, n, t]);
}
function V(e, t) {
    var n;
    let { data: r, isLoading: l } = (0, f.IX)(e),
        a = (0, d.e7)([E.Z], () => (null != e ? E.Z.getGame(e) : null)),
        { isFetching: o } = (0, I.$)(e, t),
        s = i.useMemo(() => {
            if (null == a) return '';
            let { artwork: e, screenshots: t } = a;
            if (e.length > 0) {
                let t = Math.floor(Math.random() * (e.length - 1));
                return e[t];
            }
            if (t.length > 0) {
                let e = Math.floor(Math.random() * (t.length - 1));
                return t[e];
            }
            return '';
        }, [a]);
    return {
        isLoading: l || o,
        backgroundImageUrl: s,
        gameName: null !== (n = null == a ? void 0 : a.name) && void 0 !== n ? n : null == r ? void 0 : r.name
    };
}
let H = b.Z.parseString('#E93446');
function z() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, d.e7)([T.default], () => T.default.getId()),
        r = (0, h.ZP)(),
        { recent: l, outbox: a } = (0, N.Z)(n),
        o = (0, d.e7)([C.Z], () => C.Z.hasInitialized),
        s = (0, d.e7)([S.Z], () => S.Z.hasConsented(M.pjP.PERSONALIZATION)),
        c = null == a && o,
        m = i.useMemo(() => (s ? l.reduce((t, n) => (t.length >= e || 'played_game_extra' !== n.extra.type || null == k.gQ.get(n.extra.application_id) ? t : t.concat(n.extra.application_id)), []) : []), [s, l, e]),
        f = i.useMemo(() => {
            let n = m.length > 0 ? m : k.Id;
            return t && n.length < e && n.push(...k.Id, ...k.J6.slice(0, e)), Array.from(new Set(n)).slice(0, e);
        }, [m, t, e]);
    i.useEffect(() => {
        c && s && (0, _.JX)(n);
    }, [n, c, s]),
        i.useEffect(() => {
            u.Z.getDetectableGamesSupplemental(f);
        }, [f]);
    let p = (0, d.Wu)([E.Z], () => E.Z.getGames(f), [f]),
        g = (0, d.e7)([E.Z], () => f.some((e) => E.Z.isFetching(e)), [f]),
        I = i.useMemo(() => {
            let e = {};
            for (let t of p) {
                if (null == t) continue;
                let { coverImageUrl: n, artwork: i, screenshots: r } = t;
                if (null != n) {
                    e[t.applicationId] = n;
                    continue;
                }
                if (i.length > 0) {
                    let n = Math.floor(Math.random() * (i.length - 1));
                    e[t.applicationId] = i[n];
                    continue;
                }
                if (r.length > 0) {
                    let n = Math.floor(Math.random() * (r.length - 1));
                    e[t.applicationId] = r[n];
                    continue;
                }
            }
            return e;
        }, [p]),
        [x, v] = i.useState({});
    return (
        i.useEffect(() => {
            Promise.all(
                Object.entries(I).map((e) => {
                    let [t, n] = e;
                    return null == n
                        ? Promise.resolve({
                              color: new b.Z(0, 255, 0, 1),
                              gameId: t
                          })
                        : (0, Z.OF)(n)
                              .then((e) => {
                                  let [n, i, l] = e[0],
                                      a = new b.Z(n, i, l, 1),
                                      o = 'light' === r ? new b.Z(255, 255, 255, 1) : new b.Z(0, 0, 0, 1),
                                      s = (0, A.k8)({
                                          colors: [a, o],
                                          ratio: 5,
                                          saturationFactor: 1
                                      });
                                  return Promise.resolve({
                                      color: null != s ? s : new b.Z(0, 0, 255, 1),
                                      gameId: t
                                  });
                              })
                              .catch(() =>
                                  Promise.resolve({
                                      color: H,
                                      gameId: t
                                  })
                              );
                })
            ).then((e) =>
                v(
                    e.reduce((e, t) => {
                        let { color: n, gameId: i } = t;
                        return (e[i] = n), e;
                    }, {})
                )
            );
        }, [I, v, r]),
        {
            games: i.useMemo(
                () =>
                    f.map((e) => {
                        var t, n, i;
                        let r = I[e],
                            l = null !== (n = x[e]) && void 0 !== n ? n : H,
                            a = null !== (i = null === (t = p.find((t) => (null == t ? void 0 : t.applicationId) === e)) || void 0 === t ? void 0 : t.name) && void 0 !== i ? i : '';
                        return {
                            id: e,
                            name: a,
                            backgroundImageUrl: r,
                            primaryColor: l
                        };
                    }),
                [f, p, I, x]
            ),
            treatment: m.length > 0 && s ? k.O7.GAME_SPECIFIC : k.O7.GENERIC,
            hasFetchedGames: !c && !g
        }
    );
}
