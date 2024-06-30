let r;
n.d(t, {
    FZ: function () {
        return el;
    },
    ik: function () {
        return ea;
    },
    jk: function () {
        return ei;
    },
    rH: function () {
        return er;
    }
}), n(47120), n(653041), n(724458), n(757143), n(733860);
var i, a, o, s, l = n(392711), u = n.n(l), c = n(913527), d = n.n(c), _ = n(442837), E = n(433517), f = n(570140), h = n(593472), p = n(726542), m = n(710845), I = n(630699), T = n(855403), g = n(454991), S = n(77498), A = n(283595), N = n(417363), v = n(626135), O = n(70956), R = n(877481), C = n(823379), y = n(358085), D = n(998502), L = n(145597), b = n(370862), M = n(981631), P = n(987650);
let U = new m.Z('RunningGameStore'), w = 'RunningGameStore', x = [
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
            executables: [{
                    os: 'win32',
                    name: 'bebo.exe'
                }],
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
            name: p.Z.get(M.ABu.SPOTIFY).name
        }
    ], G = !0, k = new Set(), B = [], F = [], V = [], H = null, Z = [], Y = {}, j = {}, W = {
        gamesSeen: [],
        gameOverrides: {},
        enableOverlay: {},
        enableDetection: {}
    }, K = function () {
    }, z = {}, q = 0, Q = null, X = null, $ = {};
function J(e, t, n) {
    let r = e[t];
    void 0 !== r && (delete e[t], e[n] = r);
}
function ee(e, t) {
    null != t.lastLaunched ? e.lastLaunched = t.lastLaunched : null != t.start && (e.lastLaunched = t.start);
}
function et(e) {
    return x.some(t => t.name === e.name && !0 === t.streamerTool);
}
function en() {
    if (V.length > 0) {
        let e = H;
        H = V[0], null != e && H.pid === e.pid ? H.start = e.start : H.start = Date.now();
    } else
        H = null;
    let e = [];
    for (let t of V)
        !(t.pid in $) && ($[t.pid] = t, e.push(t));
    let t = [];
    for (let e of Object.values($))
        !V.some(t => t.pid === e.pid) && (t.push(e), delete $[e.pid]);
    U.info('games', {
        runningGames: V,
        added: e,
        removed: t,
        previousGames: $
    }), f.Z.dispatch({
        type: 'RUNNING_GAMES_CHANGE',
        games: V,
        added: e,
        removed: t
    });
}
function er(e) {
    let t = null != e.name ? e.name : '';
    return ''.concat(e.exePath, ':').concat(t);
}
function ei(e) {
    if (e.isLauncher)
        return {
            source: b.d.LAUNCHER,
            enabled: !1,
            overlayMethod: P.gl.Disabled
        };
    let t = S.Z.getGameByName(e.name);
    if (null != t) {
        let e = A.Z.getActiveLibraryApplication(t.id);
        if (null != e)
            return {
                source: b.d.LIBRARY_APPLICATION,
                enabled: e.isOverlayEnabled(),
                overlayMethod: P.gl.Disabled
            };
    }
    let n = I.H() && (0, L.VS)() && !g.v.legacyEnabled, r = n ? P.gl.OutOfProcess : P.gl.Hook, i = W.enableOverlay[er(e)];
    if (null != i)
        return {
            source: b.d.USER_OVERRIDE,
            enabled: i,
            overlayMethod: r
        };
    let a = null == e.id ? null : z[e.id];
    return null != a ? {
        source: b.d.DATABASE,
        enabled: a.enabled || n,
        overlayMethod: r
    } : {
        source: b.d.DEFAULT,
        enabled: !1,
        overlayMethod: P.gl.Hook
    };
}
function ea(e) {
    let t = W.enableDetection[er(e)];
    return null == t || t;
}
function eo(e) {
    return !e.hidden && ea(e);
}
function es() {
    E.K.set(w, W);
}
function el(e) {
    var t, n;
    let r = {
        ...e,
        played: null != e.lastFocused && 0 !== e.lastFocused ? d()(new Date(e.lastFocused * O.Z.Millis.SECOND)).fromNow() : ' ',
        overlay: (t = e, null !== (n = W.enableOverlay[er(t)]) && void 0 !== n ? n : ei(t).enabled),
        verified: S.Z.isGameInDatabase(e),
        detectable: ea(e)
    };
    if (null != e.id && null != z[e.id]) {
        let t = z[e.id];
        r.overlayWarn = t.warn;
    }
    return r;
}
function eu() {
    let e = !1;
    return B = u().values(A.Z.libraryApplications).reduce((t, n) => {
        let r = S.Z.getDetectableGame(n.id);
        if (null == r)
            return t;
        for (let i of N.Z.getLaunchOptions(n.id, n.branchId)) {
            let a = ''.concat(n.id, ':').concat(n.branchId);
            !k.has(a) && (e = !0, k.add(a));
            let {fullExecutablePath: o} = i, s = o.replace(/\\/g, '/').toLowerCase();
            Y[s] = r.id, t.push({
                id: r.id,
                name: r.name,
                exePath: s,
                cmdLine: '',
                lastFocused: 0,
                add: !0
            });
        }
        return t;
    }, []), e && ec(), e;
}
function ec() {
    if (!__OVERLAY__ && y.isPlatformEmbedded) {
        let e = [
            ...B,
            ...u().values(W.gameOverrides)
        ];
        D.ZP.setGameCandidateOverrides(e);
    }
}
function ed(e) {
    if (null != e && 0 !== e.length)
        e.forEach(e => {
            if (W.gamesSeen.some(t => {
                    if (t.name === e.name) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = W.gameOverrides[er(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        return ee(t, e), !0;
                    }
                    return !1;
                }));
            else {
                if (e.hidden)
                    return;
                W.gamesSeen.unshift(function (e) {
                    let t = {
                        exePath: e.exePath,
                        cmdLine: e.cmdLine,
                        lastFocused: e.lastFocused
                    };
                    return null != e.id && (t.id = e.id), null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId), null != e.name && (t.name = e.name), e.add && (t.add = !0), e.block && (t.block = !0), ee(t, e), t;
                }(e));
            }
        }), W.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused), es(), R.Z.setRecentGames(e_().map(e => el(e)));
}
function e_() {
    let e = u().values(W.gameOverrides);
    return W.gamesSeen.filter(e => void 0 === W.gameOverrides[er(e)]).concat(e);
}
!__OVERLAY__ && (0, y.isDesktop)() && (K = function () {
    let e = [], t = new Set();
    r = {};
    let n = S.Z.games;
    for (let e of n) {
        var i, a, o, s;
        z[e.id] = {
            compatibilityHook: null !== (i = e.overlayCompatibilityHook) && void 0 !== i ? i : h.r.compatibilityHook,
            warn: null !== (a = e.overlayWarn) && void 0 !== a ? a : h.r.warn,
            enabled: null !== (o = e.overlay) && void 0 !== o ? o : h.r.enabled,
            allowHook: null !== (s = e.hook) && void 0 !== s ? s : h.r.allowHook,
            supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
        };
    }
    [
        ...n,
        ...x
    ].forEach(n => {
        var r;
        let i = null != n.executables ? null === (r = n.executables) || void 0 === r ? void 0 : r.filter(e => {
                let {os: t} = e;
                return t === (0, y.getPlatformName)();
            }) : [], a = {};
        i.forEach(e => {
            let n = null != e.arguments && e.arguments.length > 0 ? e.arguments : 'null';
            null == a[n] && (a[n] = []), a[n].push(e.name), e.isLauncher && t.add(e.name);
        }), Object.keys(a).forEach(t => e.push({
            name: n.name,
            id: n.id,
            executables: a[t],
            cmdLine: 'null' !== t ? t : null
        }));
    }), e = e.filter(e => null != e.executables && e.executables.length > 0), D.ZP.setObservedGamesCallback(e, e => {
        let n = [], i = {};
        e = e.filter(e => (e.distributor = function (e) {
            if (null != Y[e.exePath])
                return M.GQo.DISCORD;
            if (/steamapps/.test(e.cmdLine))
                return M.GQo.STEAM;
            if (/-epicapp/.test(e.cmdLine))
                return M.GQo.EPIC;
            return e.distributor;
        }(e), e.isLauncher = t.has(e.exeName), e.isLauncher && null != e.id && (i[e.id] = e), e.windowHandle = function (e, t) {
            if (void 0 === t) {
                let t = D.ZP.getDiscordUtils();
                if (null != t && null != t.getWindowHandleFromPid) {
                    let n = t.getWindowHandleFromPid(e);
                    return null != n && '0' !== n ? n : null;
                }
                return null;
            }
            return '0' === t ? null : t;
        }(e.pid, e.windowHandle), null == x.find(t => {
            let {name: n} = t;
            return n === e.name;
        }) || (n.push(e), !1)));
        let a = n.filter(et).length;
        a !== q && (q = a, f.Z.dispatch({
            type: 'RUNNING_STREAMER_TOOLS_CHANGE',
            count: q
        })), V = e, Z = n, r = i, en();
    }), ec();
});
class eE extends (i = _.ZP.Store) {
    initialize() {
        var e, t, n, r;
        let i = null !== (e = E.K.get(w)) && void 0 !== e ? e : {
            gamesSeen: [],
            gameOverrides: {},
            enableOverlay: {},
            enableDetection: {}
        };
        W.gameOverrides = {};
        let a = !1;
        if (u().values(null !== (t = i.gameOverrides) && void 0 !== t ? t : {}).forEach(e => {
                let t = er(e);
                W.gameOverrides[t] = e;
            }), W.enableOverlay = null !== (n = i.enableOverlay) && void 0 !== n ? n : {}, W.enableDetection = null !== (r = i.enableDetection) && void 0 !== r ? r : {}, ec(), Array.isArray(i.gamesSeen))
            for (let e of i.gamesSeen)
                'number' == typeof e.id && (e.nativeProcessObserverId = e.id, delete e.id, a = !0);
        ed(i.gamesSeen), this.waitFor(S.Z), this.syncWith([
            A.Z,
            S.Z,
            N.Z
        ], u().throttle(eu, 1000)), a && es();
    }
    getVisibleGame() {
        return null == H || eo(H) ? H : null;
    }
    getCurrentGameForAnalytics() {
        return H;
    }
    getVisibleRunningGames() {
        return V.filter(eo);
    }
    getRunningGames() {
        return V;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of V)
            null != Y[t.exePath] && e.push(Y[t.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames().map(e => S.Z.getGameByName(e.name)).filter(C.lm).map(e => e.id);
    }
    getGameForPID(e) {
        var t;
        return null !== (t = V.find(t => t.pid === e)) && void 0 !== t ? t : null;
    }
    getLauncherForPID(e) {
        let t = this.getGameForPID(e);
        return null != t ? null != t.id ? r[t.id] : null : null;
    }
    getOverlayOptionsForPID(e) {
        let t = this.getGameForPID(e);
        return null == t || t.isLauncher || null == t.id ? null : { ...z[t.id] };
    }
    shouldElevateProcessForPID(e) {
        return null != Q && Q === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != X && X === e;
    }
    getCandidateGames() {
        return F.filter(e => e.hidden || null == e.id).filter(e => void 0 === W.gameOverrides[er(e)]);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], n = e_();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = er(e);
                n = n.filter(e => er(e) !== t);
            }
        }
        return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n;
    }
    getSeenGameByName(e) {
        return W.gamesSeen.find(t => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return Z.some(t => t.name === e);
    }
    getOverrides() {
        return Object.values(W.gameOverrides);
    }
    getOverrideForGame(e) {
        return W.gameOverrides[er(e)];
    }
    getGameOverlayStatus(e) {
        if (e.hidden || e.isLauncher || e.elevated || e.sandboxed)
            return U.verbose('getGameOverlayStatus: Overlay not supported.', e), null;
        let t = ei(e);
        return t.enabled ? t : null;
    }
    getObservedAppNameForWindow(e) {
        var t, n;
        return null !== (n = null === (t = Z.find(t => (0, T.Z)(e, t.windowHandle))) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : null;
    }
    get canShowAdminWarning() {
        return G;
    }
    isDetectionEnabled(e) {
        return ea(e);
    }
}
s = 'RunningGameStore', (o = 'displayName') in (a = eE) ? Object.defineProperty(a, o, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : a[o] = s, t.ZP = new eE(f.Z, {
    RUNNING_GAMES_CHANGE: function (e) {
        ed(V);
    },
    CANDIDATE_GAMES_CHANGE: function (e) {
        F = e.games;
    },
    PERMISSION_CLEAR_PTT_ADMIN_WARNING: function () {
        G = !1;
    },
    PERMISSION_REQUEST_ELEVATED_PROCESS: function (e) {
        let {pid: t} = e;
        Q = t, X = null;
    },
    PERMISSION_CLEAR_ELEVATED_PROCESS: function () {
        Q = null;
    },
    PERMISSION_CONTINUE_NONELEVATED_PROCESS: function (e) {
        let {pid: t} = e;
        X = t, Q = null;
    },
    RUNNING_GAME_ADD_OVERRIDE: function (e) {
        let t;
        let n = e.pid, r = V.find(e => e.pid === n);
        if (null == r) {
            let e = F.find(e => e.pid === n);
            if (null == e)
                return;
            (r = { ...e }).hidden = !1, V.push(r), t = er(r);
        } else
            t = er(r), r.hidden && (j[t] = !0), r.hidden = !1;
        (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1000)), W.gameOverrides[t] = {
            ...r,
            add: !0
        }, ed(V), ec(), es(), en();
    },
    RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
        if (W.enableOverlay[er(e.game)] = e.newEnabledValue, es(), !__OVERLAY__) {
            let t = null != e.game.id ? S.Z.getDetectableGame(e.game.id) : null;
            null != t && v.default.track(M.rMx.OVERLAY_TOGGLED, {
                enabled: e.newEnabledValue,
                setting_type: 'overlay toggled - game',
                application_id: t.id,
                application_name: t.name
            });
        }
    },
    RUNNING_GAME_TOGGLE_DETECTION: function (e) {
        let {game: t} = e, n = ea(t);
        W.enableDetection[er(t)] = !n, es(), v.default.track(M.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n });
    },
    RUNNING_GAME_EDIT_NAME: function (e) {
        let t = er(e.game), n = W.gameOverrides[t];
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
        let i = er(n);
        delete W.gameOverrides[t], W.gameOverrides[i] = n, J(W.enableOverlay, t, i), J(W.enableDetection, t, i), J(j, t, i), W.gamesSeen.forEach(n => {
            er(n) === t && (n.name = e.newName);
        });
        let a = !1;
        V.forEach(n => {
            er(n) === t && (n.name = e.newName, a = !0);
        }), ec(), es(), a && en();
    },
    RUNNING_GAME_DELETE_ENTRY: function (e) {
        let t = er(e.game);
        delete W.gameOverrides[t], delete W.enableOverlay[t], delete W.enableDetection[t], W.gamesSeen = W.gamesSeen.filter(e => er(e) !== t), j[t] && (V.forEach(e => {
            t === er(e) && (e.hidden = !0);
        }), delete j[t], en()), ec(), es();
    },
    GAMES_DATABASE_UPDATE: K,
    GAME_LAUNCH_SUCCESS: function (e) {
        var t;
        if (__OVERLAY__ || !y.isPlatformEmbedded)
            return;
        let n = D.ZP.getDiscordUtils().notifyGameLaunched;
        if (null == n)
            return;
        let r = S.Z.getDetectableGame(e.applicationId);
        if (null != r)
            n(r.id, r.name, null !== (t = e.pids) && void 0 !== t ? t : []);
    },
    GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: function () {
        ec();
    }
});
