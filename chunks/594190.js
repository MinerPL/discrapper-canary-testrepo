let r;
n.d(t, {
    FZ: function () {
        return ef;
    },
    ik: function () {
        return ed;
    },
    jk: function () {
        return ec;
    },
    rH: function () {
        return eu;
    }
}),
    n(47120),
    n(653041),
    n(724458),
    n(757143),
    n(733860);
var i,
    a,
    s,
    o,
    l = n(392711),
    u = n.n(l),
    c = n(913527),
    d = n.n(c),
    _ = n(442837),
    E = n(433517),
    f = n(570140),
    h = n(593472),
    p = n(726542),
    m = n(439849),
    I = n(710845),
    T = n(630699),
    g = n(855403),
    S = n(454991),
    A = n(77498),
    N = n(283595),
    v = n(417363),
    O = n(626135),
    R = n(70956),
    C = n(877481),
    y = n(823379),
    D = n(358085),
    L = n(998502),
    b = n(145597),
    M = n(370862),
    P = n(981631),
    U = n(987650);
let w = new I.Z('RunningGameStore'),
    x = 'RunningGameStore',
    G = [
        {
            executables: [
                {
                    os: 'win32',
                    name: 'obs/obs.exe'
                },
                {
                    os: 'win32',
                    name: 'obs32.exe'
                },
                {
                    os: 'win32',
                    name: 'obs64.exe'
                },
                {
                    os: 'darwin',
                    name: 'OBS.app'
                },
                {
                    os: 'linux',
                    name: 'obs'
                }
            ],
            name: 'OBS',
            streamerTool: !0
        },
        {
            executables: [
                {
                    os: 'win32',
                    name: 'XSplit.Gamecaster.exe'
                },
                {
                    os: 'win32',
                    name: 'XSplit.Core.exe'
                },
                {
                    os: 'win32',
                    name: 'Gamecaster.exe'
                }
            ],
            name: 'XSplit',
            streamerTool: !0
        },
        {
            executables: [
                {
                    os: 'win32',
                    name: 'bebo.exe'
                }
            ],
            name: 'Bebo',
            streamerTool: !0
        },
        {
            executables: [
                {
                    os: 'win32',
                    name: 'Streamlabs OBS.exe'
                },
                {
                    os: 'win32',
                    name: 'Streamlabs Desktop.exe'
                },
                {
                    os: 'darwin',
                    name: 'Streamlabs Desktop.app'
                }
            ],
            name: 'Streamlabs Desktop',
            streamerTool: !0
        },
        {
            executables: [
                {
                    os: 'win32',
                    name: 'TwitchStudio.exe'
                },
                {
                    os: 'darwin',
                    name: 'Twitch Studio.app'
                }
            ],
            name: 'Twitch Studio',
            streamerTool: !0
        },
        {
            executables: [
                {
                    os: 'win32',
                    name: 'Spotify.exe'
                },
                {
                    os: 'darwin',
                    name: 'Spotify.app'
                },
                {
                    os: 'linux',
                    name: 'spotify'
                }
            ],
            name: p.Z.get(P.ABu.SPOTIFY).name
        }
    ],
    k = [],
    B = !0,
    F = new Set(),
    V = [],
    H = [],
    Z = [],
    Y = null,
    j = [],
    W = {},
    K = {},
    z = {
        gamesSeen: [],
        gameOverrides: {},
        enableOverlay: {},
        enableDetection: {}
    },
    q = function () {},
    Q = {},
    X = 0,
    $ = null,
    J = null,
    ee = {},
    et = new Set(),
    en = new Set(),
    er = null,
    ei = null;
function ea(e, t, n) {
    let r = e[t];
    void 0 !== r && (delete e[t], (e[n] = r));
}
function es(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function eo(e) {
    return G.some((t) => t.name === e.name && !0 === t.streamerTool);
}
function el() {
    if (Z.length > 0) {
        let e = Y;
        (Y = Z[0]), null != e && Y.pid === e.pid ? (Y.start = e.start) : (Y.start = Date.now());
    } else Y = null;
    let e = [];
    for (let t of Z) !(t.pid in ee) && ((ee[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(ee)) !Z.some((t) => t.pid === e.pid) && (t.push(e), delete ee[e.pid]);
    w.info('games', {
        runningGames: Z,
        added: e,
        removed: t,
        previousGames: ee
    }),
        f.Z.dispatch({
            type: 'RUNNING_GAMES_CHANGE',
            games: Z,
            added: e,
            removed: t
        });
}
function eu(e) {
    let t = null != e.name ? e.name : '';
    return ''.concat(e.exePath, ':').concat(t);
}
function ec(e) {
    if (e.isLauncher)
        return {
            source: M.d.LAUNCHER,
            enabled: !1,
            overlayMethod: U.gl.Disabled
        };
    let t = A.Z.getGameByName(e.name);
    if (null != t) {
        let e = N.Z.getActiveLibraryApplication(t.id);
        if (null != e)
            return {
                source: M.d.LIBRARY_APPLICATION,
                enabled: e.isOverlayEnabled(),
                overlayMethod: U.gl.Disabled
            };
    }
    let n = T.H() && (0, b.VS)() && !S.v.legacyEnabled,
        r = n ? U.gl.OutOfProcess : U.gl.Hook,
        i = z.enableOverlay[eu(e)];
    if (null != i)
        return {
            source: M.d.USER_OVERRIDE,
            enabled: i,
            overlayMethod: r
        };
    let a = null == e.id ? null : Q[e.id];
    return null != a
        ? {
              source: M.d.DATABASE,
              enabled: a.enabled || n,
              overlayMethod: r
          }
        : {
              source: M.d.DEFAULT,
              enabled: !1,
              overlayMethod: U.gl.Hook
          };
}
function ed(e) {
    let t = z.enableDetection[eu(e)];
    return null == t || t;
}
function e_(e) {
    return !e.hidden && ed(e);
}
function eE() {
    E.K.set(x, z);
}
function ef(e) {
    var t, n;
    let r = {
        ...e,
        played: null != e.lastFocused && 0 !== e.lastFocused ? d()(new Date(e.lastFocused * R.Z.Millis.SECOND)).fromNow() : ' ',
        overlay: ((t = e), null !== (n = z.enableOverlay[eu(t)]) && void 0 !== n ? n : ec(t).enabled),
        verified: A.Z.isGameInDatabase(e),
        detectable: ed(e)
    };
    if (null != e.id && null != Q[e.id]) {
        let t = Q[e.id];
        r.overlayWarn = t.warn;
    }
    return r;
}
function eh() {
    let e = !1;
    return (
        (V = u()
            .values(N.Z.libraryApplications)
            .reduce((t, n) => {
                let r = A.Z.getDetectableGame(n.id);
                if (null == r) return t;
                for (let i of v.Z.getLaunchOptions(n.id, n.branchId)) {
                    let a = ''.concat(n.id, ':').concat(n.branchId);
                    !F.has(a) && ((e = !0), F.add(a));
                    let { fullExecutablePath: s } = i,
                        o = s.replace(/\\/g, '/').toLowerCase();
                    (W[o] = r.id),
                        t.push({
                            id: r.id,
                            name: r.name,
                            exePath: o,
                            cmdLine: '',
                            lastFocused: 0,
                            add: !0
                        });
                }
                return t;
            }, [])),
        e && ep(),
        e
    );
}
function ep() {
    if (!__OVERLAY__ && D.isPlatformEmbedded) {
        let e = [...V, ...u().values(z.gameOverrides)];
        L.ZP.setGameCandidateOverrides(e);
    }
}
function em(e) {
    if (null != e && 0 !== e.length)
        e.forEach((e) => {
            if (
                z.gamesSeen.some((t) => {
                    if (t.name === e.name) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = z.gameOverrides[eu(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        return es(t, e), !0;
                    }
                    return !1;
                })
            );
            else {
                if (e.hidden) return;
                z.gamesSeen.unshift(
                    (function (e) {
                        let t = {
                            exePath: e.exePath,
                            cmdLine: e.cmdLine,
                            lastFocused: e.lastFocused
                        };
                        return null != e.id && (t.id = e.id), null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId), null != e.name && (t.name = e.name), e.add && (t.add = !0), e.block && (t.block = !0), es(t, e), t;
                    })(e)
                );
            }
        }),
            z.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
            eE(),
            C.Z.setRecentGames(eI().map((e) => ef(e)));
}
function eI() {
    let e = u().values(z.gameOverrides);
    return z.gamesSeen.filter((e) => void 0 === z.gameOverrides[eu(e)]).concat(e);
}
!__OVERLAY__ &&
    (0, D.isDesktop)() &&
    (q = function () {
        let e = [],
            t = new Set();
        r = {};
        let n = A.Z.games;
        for (let e of n) {
            var i, a, s, o;
            Q[e.id] = {
                compatibilityHook: null !== (i = e.overlayCompatibilityHook) && void 0 !== i ? i : h.r.compatibilityHook,
                warn: null !== (a = e.overlayWarn) && void 0 !== a ? a : h.r.warn,
                enabled: null !== (s = e.overlay) && void 0 !== s ? s : h.r.enabled,
                allowHook: null !== (o = e.hook) && void 0 !== o ? o : h.r.allowHook,
                supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
            };
        }
        [...n, ...G].forEach((n) => {
            var r;
            let i =
                    null != n.executables
                        ? null === (r = n.executables) || void 0 === r
                            ? void 0
                            : r.filter((e) => {
                                  let { os: t } = e;
                                  return t === (0, D.getPlatformName)();
                              })
                        : [],
                a = {};
            i.forEach((e) => {
                let n = null != e.arguments && e.arguments.length > 0 ? e.arguments : 'null';
                null == a[n] && (a[n] = []), a[n].push(e.name), e.isLauncher && t.add(e.name);
            }),
                Object.keys(a).forEach((t) =>
                    e.push({
                        name: n.name,
                        id: n.id,
                        executables: a[t],
                        cmdLine: 'null' !== t ? t : null
                    })
                );
        }),
            (e = e.filter((e) => null != e.executables && e.executables.length > 0)),
            L.ZP.setObservedGamesCallback(e, (e) => {
                let n = [],
                    i = {};
                e = e.filter(
                    (e) => (
                        (e.distributor = (function (e) {
                            if (null != W[e.exePath]) return P.GQo.DISCORD;
                            if (/steamapps/.test(e.cmdLine)) return P.GQo.STEAM;
                            if (/-epicapp/.test(e.cmdLine)) return P.GQo.EPIC;
                            return e.distributor;
                        })(e)),
                        (e.isLauncher = t.has(e.exeName)),
                        e.isLauncher && null != e.id && (i[e.id] = e),
                        (e.windowHandle = (function (e, t) {
                            if (void 0 === t) {
                                let t = L.ZP.getDiscordUtils();
                                if (null != t && null != t.getWindowHandleFromPid) {
                                    let n = t.getWindowHandleFromPid(e);
                                    return null != n && '0' !== n ? n : null;
                                }
                                return null;
                            }
                            return '0' === t ? null : t;
                        })(e.pid, e.windowHandle)),
                        null ==
                            G.find((t) => {
                                let { name: n } = t;
                                return n === e.name;
                            }) || (n.push(e), !1)
                    )
                );
                let a = n.filter(eo).length;
                a !== X &&
                    ((X = a),
                    f.Z.dispatch({
                        type: 'RUNNING_STREAMER_TOOLS_CHANGE',
                        count: X
                    })),
                    (Z = e),
                    (j = n),
                    (r = i),
                    el();
            }),
            ep();
    });
class eT extends (i = _.ZP.Store) {
    initialize() {
        var e, t, n, r;
        let i =
            null !== (e = E.K.get(x)) && void 0 !== e
                ? e
                : {
                      gamesSeen: [],
                      gameOverrides: {},
                      enableOverlay: {},
                      enableDetection: {}
                  };
        z.gameOverrides = {};
        let a = !1;
        if (
            (u()
                .values(null !== (t = i.gameOverrides) && void 0 !== t ? t : {})
                .forEach((e) => {
                    let t = eu(e);
                    z.gameOverrides[t] = e;
                }),
            (z.enableOverlay = null !== (n = i.enableOverlay) && void 0 !== n ? n : {}),
            (z.enableDetection = null !== (r = i.enableDetection) && void 0 !== r ? r : {}),
            ep(),
            Array.isArray(i.gamesSeen))
        )
            for (let e of i.gamesSeen) 'number' == typeof e.id && ((e.nativeProcessObserverId = e.id), delete e.id, (a = !0));
        em(i.gamesSeen), this.waitFor(A.Z), this.syncWith([N.Z, A.Z, v.Z], u().throttle(eh, 1000)), a && eE();
    }
    getVisibleGame() {
        return null == Y || e_(Y) ? Y : null;
    }
    getCurrentGameForAnalytics() {
        return Y;
    }
    getVisibleRunningGames() {
        return Z.filter(e_);
    }
    getRunningGames() {
        return Z;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of Z) null != W[t.exePath] && e.push(W[t.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => A.Z.getGameByName(e.name))
            .filter(y.lm)
            .map((e) => e.id);
    }
    getGameForPID(e) {
        var t;
        return null !== (t = Z.find((t) => t.pid === e)) && void 0 !== t ? t : null;
    }
    getLauncherForPID(e) {
        let t = this.getGameForPID(e);
        return null != t ? (null != t.id ? r[t.id] : null) : null;
    }
    getOverlayOptionsForPID(e) {
        let t = this.getGameForPID(e);
        return null == t || t.isLauncher || null == t.id ? null : { ...Q[t.id] };
    }
    shouldElevateProcessForPID(e) {
        return null != $ && $ === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != J && J === e;
    }
    getCandidateGames() {
        return H.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === z.gameOverrides[eu(e)]);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = eI();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = eu(e);
                n = n.filter((e) => eu(e) !== t);
            }
        }
        return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n;
    }
    getSeenGameByName(e) {
        return z.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return j.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(z.gameOverrides);
    }
    getOverrideForGame(e) {
        return z.gameOverrides[eu(e)];
    }
    getGameOverlayStatus(e) {
        if (e.hidden || e.isLauncher || e.elevated || e.sandboxed) return w.verbose('getGameOverlayStatus: Overlay not supported.', e), null;
        let t = ec(e);
        return t.enabled ? t : null;
    }
    getObservedAppNameForWindow(e) {
        var t, n;
        return null !== (n = null === (t = j.find((t) => (0, g.Z)(e, t.windowHandle))) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : null;
    }
    get canShowAdminWarning() {
        return B;
    }
    isDetectionEnabled(e) {
        return ed(e);
    }
    addExecutableTrackedByAnalytics(e) {
        var t;
        en.add(null !== (t = (0, m.F)(e)) && void 0 !== t ? t : e);
    }
}
(o = 'RunningGameStore'),
    (s = 'displayName') in (a = eT)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.ZP = new eT(f.Z, {
        RUNNING_GAMES_CHANGE: function (e) {
            em(Z);
        },
        CANDIDATE_GAMES_CHANGE: function (e) {
            H = e.games;
        },
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: function () {
            B = !1;
        },
        PERMISSION_REQUEST_ELEVATED_PROCESS: function (e) {
            let { pid: t } = e;
            ($ = t), (J = null);
        },
        PERMISSION_CLEAR_ELEVATED_PROCESS: function () {
            $ = null;
        },
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: function (e) {
            let { pid: t } = e;
            (J = t), ($ = null);
        },
        RUNNING_GAME_ADD_OVERRIDE: function (e) {
            let t;
            let n = e.pid,
                r = Z.find((e) => e.pid === n);
            if (null == r) {
                let e = H.find((e) => e.pid === n);
                if (null == e) return;
                ((r = { ...e }).hidden = !1), Z.push(r), (t = eu(r));
            } else (t = eu(r)), r.hidden && (K[t] = !0), (r.hidden = !1);
            (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1000)),
                (z.gameOverrides[t] = {
                    ...r,
                    add: !0
                }),
                em(Z),
                ep(),
                eE(),
                el();
        },
        RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
            if (((z.enableOverlay[eu(e.game)] = e.newEnabledValue), eE(), !__OVERLAY__)) {
                let t = null != e.game.id ? A.Z.getDetectableGame(e.game.id) : null;
                null != t &&
                    O.default.track(P.rMx.OVERLAY_TOGGLED, {
                        enabled: e.newEnabledValue,
                        setting_type: 'overlay toggled - game',
                        application_id: t.id,
                        application_name: t.name
                    });
            }
        },
        RUNNING_GAME_TOGGLE_DETECTION: function (e) {
            let { game: t } = e,
                n = ed(t);
            (z.enableDetection[eu(t)] = !n), eE(), O.default.track(P.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n });
        },
        RUNNING_GAME_EDIT_NAME: function (e) {
            let t = eu(e.game),
                n = z.gameOverrides[t];
            if (null == n) {
                var r;
                (n = {
                    name: (r = e.game).name,
                    exePath: r.exePath,
                    cmdLine: r.cmdLine,
                    lastFocused: r.lastFocused
                }).add = !0;
            }
            n.name = e.newName;
            let i = eu(n);
            delete z.gameOverrides[t],
                (z.gameOverrides[i] = n),
                ea(z.enableOverlay, t, i),
                ea(z.enableDetection, t, i),
                ea(K, t, i),
                z.gamesSeen.forEach((n) => {
                    eu(n) === t && (n.name = e.newName);
                });
            let a = !1;
            Z.forEach((n) => {
                eu(n) === t && ((n.name = e.newName), (a = !0));
            }),
                ep(),
                eE(),
                a && el();
        },
        RUNNING_GAME_DELETE_ENTRY: function (e) {
            let t = eu(e.game);
            delete z.gameOverrides[t],
                delete z.enableOverlay[t],
                delete z.enableDetection[t],
                (z.gamesSeen = z.gamesSeen.filter((e) => eu(e) !== t)),
                K[t] &&
                    (Z.forEach((e) => {
                        t === eu(e) && (e.hidden = !0);
                    }),
                    delete K[t],
                    el()),
                ep(),
                eE();
        },
        GAMES_DATABASE_UPDATE: q,
        GAME_LAUNCH_SUCCESS: function (e) {
            var t;
            if (__OVERLAY__ || !D.isPlatformEmbedded) return;
            let n = L.ZP.getDiscordUtils().notifyGameLaunched;
            if (null == n) return;
            let r = A.Z.getDetectableGame(e.applicationId);
            if (null != r) n(r.id, r.name, null !== (t = e.pids) && void 0 !== t ? t : []);
        },
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: function () {
            ep();
        },
        GAME_DETECTION_DEBUGGING_START: function (e) {
            (er = e.level), (ei = e.intervalSeconds);
        },
        GAME_DETECTION_DEBUGGING_STOP: function () {
            (er = null), (ei = null), et.clear();
        },
        GAME_DETECTION_DEBUGGING_TICK: function (e) {
            let t = e.processes
                .map((e) => {
                    var t;
                    return {
                        pid: e.pid,
                        cleanedExePath: null !== (t = (0, m.F)(e.exePath)) && void 0 !== t ? t : e.exePath
                    };
                })
                .filter((e) => {
                    if (et.has(e.pid) || en.has(e.cleanedExePath)) return !1;
                    let t = k.some((t) => e.cleanedExePath.includes(t));
                    return t && et.add(e.pid), t;
                })
                .map((e) => e.cleanedExePath);
            t.length > 0 &&
                O.default.track(P.rMx.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
                    keywords: k,
                    paths: t,
                    debugging_level: er,
                    interval_seconds: ei
                });
        }
    }));
