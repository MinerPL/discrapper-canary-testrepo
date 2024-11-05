n.d(t, {
    jK: function () {
        return o;
    },
    tS: function () {
        return l;
    }
}),
    n(47120),
    n(411104),
    n(653041);
var r,
    i,
    a,
    s,
    o,
    l,
    u,
    c,
    d = n(512722),
    f = n.n(d),
    _ = n(719711),
    h = n(544891),
    p = n(433517),
    m = n(593472),
    g = n(189451),
    E = n(358085),
    v = n(591759),
    I = n(981631),
    S = n(413135).Buffer;
let T = window.DiscordNative,
    b = ['jpg', 'jpeg', 'png'],
    y = null,
    A = null,
    N = null,
    C = {};
null != T &&
    ((y = T.remoteApp
        .getVersion()
        .split('.')
        .map((e) => parseInt(e))),
    (N = null === (r = (i = T.remoteApp).getModuleVersions) || void 0 === r ? void 0 : r.call(i)),
    (A = null === (a = (s = T.remoteApp).getBuildNumber) || void 0 === a ? void 0 : a.call(s)));
let R = new Set(['discord_erlpack', 'discord_game_utils', 'discord_rpc', 'discord_spellcheck', 'discord_utils', 'discord_voice']),
    O = !1;
async function D(e) {
    let t = await fetch(
        new Request(e, {
            method: 'GET',
            mode: 'cors'
        })
    );
    f()(200 === t.status, 'Data fetch unsuccessful');
    let n = await t.arrayBuffer();
    return f()(null != n, 'Data is null'), n;
}
function L(e) {
    return D(e);
}
function x(e) {
    var t, n, r, i, a, s, o, l;
    return {
        id: C[null !== (t = e.id) && void 0 !== t ? t : ''],
        nativeProcessObserverId: parseInt(null !== (n = e.id) && void 0 !== n ? n : '', 10),
        name: null !== (r = e.gameName) && void 0 !== r ? r : e.name,
        processName: null !== (i = e.name) && void 0 !== i ? i : '',
        hidden: e.hidden,
        elevated: e.elevated,
        sandboxed: null !== (a = e.sandboxed) && void 0 !== a && a,
        lastFocused: e.lastFocused,
        exePath: e.exePath,
        exeName: e.exeName,
        cmdLine: e.cmdLine,
        distributor: e.distributor,
        sku: e.sku,
        pid: e.pid,
        pidPath: null !== (s = e.pidPath) && void 0 !== s ? s : [],
        windowHandle: null !== (o = e.windowHandle) && void 0 !== o ? o : null,
        fullscreenType: null !== (l = e.fullscreenType) && void 0 !== l ? l : m.Jx.UNKNOWN
    };
}
((u = o || (o = {}))[(u.Camera = 0)] = 'Camera'),
    (u[(u.Microphone = 1)] = 'Microphone'),
    (u[(u.Photo = 2)] = 'Photo'),
    (u[(u.InputMonitoring = 3)] = 'InputMonitoring'),
    (u[(u.ScreenRecording = 4)] = 'ScreenRecording'),
    ((c = l || (l = {})).VIDEO = 'VIDEO'),
    (c.MUTE = 'MUTE'),
    (c.DEAFEN = 'DEAFEN'),
    (c.DISCONNECT = 'DISCONNECT'),
    (t.ZP = {
        requireModule: (e) => T.nativeModules.requireModule(e),
        ensureModule: (e) => (E.isPlatformEmbedded ? (__OVERLAY__ && R.has(e) ? Promise.resolve() : T.nativeModules.ensureModule(e)) : Promise.reject(Error('not embedded'))),
        get canBootstrapNewUpdater() {
            return T.nativeModules.canBootstrapNewUpdater || !1;
        },
        getCrashReporterMetadata: () => T.crashReporter.getMetadata(),
        getSetting: async (e, t) => await T.settings.get(e, t),
        beforeUnload() {
            var e, t;
            let n;
            try {
                n = this.requireModule('discord_overlay2');
            } catch (e) {}
            n && n.reset && n.reset(), n && n.disconnectAllProcesses && n.destroyHostProcess && (n.disconnectAllProcesses(), n.destroyHostProcess()), T.remotePowerMonitor.removeAllListeners(), window.location.origin === window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN && !0 !== p.K.get(_.SV) && this.supportsFeature(I.eRX.USER_DATA_CACHE) && T.userDataCache.cacheUserData(p.K.stringify()), null == T || null === (t = T.window) || void 0 === t || t.close(null == T ? void 0 : null === (e = T.globalOverlay) || void 0 === e ? void 0 : e.WINDOW_KEY);
        },
        inputEventRegister(e, t, n, r) {
            !Array.isArray(t) && (t = t.toJS()),
                this.getDiscordUtils().inputEventRegister(
                    parseInt(e),
                    t.map((e) => {
                        let [t, n, r] = e;
                        return 'string' == typeof r ? [t, n, r] : [t, n];
                    }),
                    n,
                    r
                );
        },
        inputEventUnregister(e) {
            this.getDiscordUtils().inputEventUnregister(parseInt(e));
        },
        setOnInputEventCallback(e) {
            if (!!E.isPlatformEmbedded) this.getDiscordUtils().inputWatchAll(e);
        },
        setFocused(e) {
            this.getDiscordUtils().inputSetFocused(e);
        },
        setObservedGamesCallback(e, t) {
            try {
                C = {};
                let n = 0;
                this.getDiscordUtils().setObservedGamesCallback(
                    e.map((e) => {
                        let t = ++n;
                        return (
                            null != e.id && (C[t] = e.id),
                            {
                                ...e,
                                cmdline: e.cmdLine,
                                id: t
                            }
                        );
                    }),
                    (e) => t(e.map(x))
                );
            } catch (e) {}
        },
        setCandidateGamesCallback(e) {
            this.getDiscordUtils().setCandidateGamesCallback((t) => e(t.map(x)));
        },
        clearCandidateGamesCallback() {
            this.getDiscordUtils().clearCandidateGamesCallback();
        },
        setGameCandidateOverrides(e) {
            this.getDiscordUtils().setGameCandidateOverrides(
                e.map((e) => ({
                    ...e,
                    gameId: e.id,
                    gameName: e.name
                }))
            );
        },
        setObserverDebugCallback(e, t, n) {
            this.getDiscordUtils().setObserverDebugCallback((t) => e(t), t, n);
        },
        clearObserverDebugCallback() {
            this.getDiscordUtils().setObserverDebugCallback(null, g.l.NONE, 0);
        },
        shouldDisplayNotifications() {
            return this.getDiscordUtils().shouldDisplayNotifications();
        },
        getVoiceEngine() {
            if (__OVERLAY__) throw Error('cannot require discord_voice in overlay');
            return (O = !0), this.requireModule('discord_voice');
        },
        getDiscordUtils() {
            if (!O)
                try {
                    this.getVoiceEngine();
                } catch (e) {}
            return this.requireModule('discord_utils');
        },
        isSystemDarkMode() {
            var e, t, n;
            return !!(0, E.isWindows)() && (null === (n = null === (e = (t = this.getDiscordUtils()).isSystemDarkMode) || void 0 === e ? void 0 : e.call(t)) || void 0 === n || n);
        },
        getGameUtils() {
            return this.requireModule('discord_game_utils');
        },
        getCloudSync() {
            return this.requireModule('discord_cloudsync');
        },
        getDispatch() {
            return this.requireModule('discord_dispatch');
        },
        setBadge(e) {
            if ('darwin' === (0, E.getPlatformName)()) {
                let t = '';
                -1 === e ? (t = '\u2022') : e > 0 && (t = ''.concat(e)), T.remoteApp.dock.setBadge(t);
            } else 'win32' === (0, E.getPlatformName)() ? this.send('APP_BADGE_SET', e) : 'linux' === (0, E.getPlatformName)() && T.remoteApp.setBadgeCount(e >= 0 ? e : 0);
        },
        setSystemTrayIcon(e) {
            if (!!E.isPlatformEmbedded) this.send('SYSTEM_TRAY_SET_ICON', e);
        },
        setThumbarButtons(e) {
            var t, n;
            if (!!E.isPlatformEmbedded) null === (n = T.thumbar) || void 0 === n || null === (t = n.setThumbarButtons) || void 0 === t || t.call(n, e, this.isSystemDarkMode());
        },
        bounceDock(e) {
            if (E.isPlatformEmbedded) {
                let t = T.remoteApp;
                if (null != t.dock) {
                    let n = t.dock.bounce(e);
                    return async () => {
                        let e = await n;
                        t.dock.cancelBounce(e);
                    };
                }
            }
        },
        setSystemTrayApplications(e) {
            if (!!E.isPlatformEmbedded) this.send('SYSTEM_TRAY_SET_APPLICATIONS', e);
        },
        get architecture() {
            return E.isPlatformEmbedded ? T.process.arch : '';
        },
        get releaseChannel() {
            if (!E.isPlatformEmbedded) return '';
            let e = T.remoteApp.getReleaseChannel();
            if (null != e) return e;
            return '';
        },
        get version() {
            return y;
        },
        get buildNumber() {
            return A;
        },
        get moduleVersions() {
            return N;
        },
        copy(e) {
            E.isPlatformEmbedded && T.clipboard.copy(e);
        },
        async copyImage(e) {
            f()(E.isPlatformEmbedded, 'Copy image method called outside native app'), f()('function' == typeof T.clipboard.copyImage, 'Copy image not supported');
            let t = await D(e);
            T.clipboard.copyImage(S.from(t), e);
        },
        async saveImage(e) {
            var t;
            f()(E.isPlatformEmbedded, 'Save image method called outside native app');
            let n = v.Z.toURLSafe(e);
            if (null == n) return;
            let r = null !== (t = n.pathname.split('/').pop()) && void 0 !== t ? t : 'unknown',
                i = await D(e),
                a = S.from(i);
            T.fileManager.saveWithDialog(a, r);
        },
        async saveFile(e, t) {
            var n;
            f()(E.isPlatformEmbedded, 'Save file method called outside native app');
            let r = v.Z.toURLSafe(e);
            if (null == r) return;
            let i = null !== (n = null != t ? t : r.pathname.split('/').pop()) && void 0 !== n ? n : 'unknown',
                a = await D(e),
                s = S.from(a);
            T.fileManager.saveWithDialog(s, i);
        },
        canCopyImage() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
            if (null != e) {
                var t, n;
                let r = null === (t = v.Z.toURLSafe(e)) || void 0 === t ? void 0 : t.pathname;
                if (null == r) return !1;
                let i = null === (n = r.split('.').pop()) || void 0 === n ? void 0 : n.toLowerCase();
                if (null != i && !b.includes(i)) return !1;
            }
            return 'function' == typeof T.clipboard.copyImage;
        },
        cut() {
            E.isPlatformEmbedded && T.clipboard.cut();
        },
        paste() {
            E.isPlatformEmbedded && T.clipboard.paste();
        },
        readClipboard: () => (E.isPlatformEmbedded ? T.clipboard.read() : ''),
        on(e, t) {
            T.ipc.on(e, t);
        },
        invoke(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return T.ipc.invoke(e, ...n);
        },
        send(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            T.ipc.send(e, ...n);
        },
        flashFrame(e) {
            T.window.flashFrame(e);
        },
        webAuthnRegister: (e) => T.nativeModules.ensureModule('discord_webauthn').then(() => T.webAuthn.webAuthnRegister(e)),
        webAuthnAuthenticate: (e) => T.nativeModules.ensureModule('discord_webauthn').then(() => T.webAuthn.webAuthnAuthenticate(e)),
        minimize(e) {
            T.window.minimize(e);
        },
        restore(e) {
            T.window.restore(e);
        },
        maximize(e) {
            T.window.maximize(e);
        },
        focus(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            t && (0, E.isWindows)() && this.minimize(null), T.window.focus(t, e);
        },
        blur() {
            E.isPlatformEmbedded && null != T.window.blur ? T.window.blur() : window.blur();
        },
        fullscreen(e) {
            T.window.fullscreen(e);
        },
        close(e) {
            T.window.close(e);
        },
        setAlwaysOnTop(e, t) {
            'function' == typeof T.window.setAlwaysOnTop && T.window.setAlwaysOnTop(e, t);
        },
        async isAlwaysOnTop(e) {
            let t = !1;
            return 'function' == typeof T.window.isAlwaysOnTop && (t = await T.window.isAlwaysOnTop(e)), t;
        },
        setMinimumSize(e, t) {
            var n, r;
            null == T || null === (r = T.window) || void 0 === r || null === (n = r.setMinimumSize) || void 0 === n || n.call(r, e, t);
        },
        purgeMemory() {
            if (!!E.isPlatformEmbedded) T.processUtils.purgeMemory();
        },
        updateCrashReporter(e) {
            T.crashReporter.updateCrashReporter(e);
        },
        triggerJSException(e) {
            T.crashReporter.triggerJSException(e);
        },
        flushDNSCache() {
            E.isPlatformEmbedded && T.processUtils.flushDNSCache();
        },
        supportsFeature: (e) => T.features.supports(e),
        getEnableHardwareAcceleration: () => !E.isPlatformEmbedded || (!__OVERLAY__ && T.gpuSettings.getEnableHardwareAcceleration()),
        setEnableHardwareAcceleration(e) {
            T.gpuSettings.setEnableHardwareAcceleration(e);
        },
        setChromiumSwitches(e) {
            T.gpuSettings.setChromiumSwitches(e);
        },
        getGPUDriverVersions() {
            return (0, E.isWindows)() && null != this.getDiscordUtils().getGPUDriverVersions ? this.getDiscordUtils().getGPUDriverVersions() : Promise.resolve(Object.freeze({}));
        },
        setZoomFactor: (e) => !!E.isPlatformEmbedded && (T.window.setZoomFactor(e), !0),
        setBackgroundThrottling(e) {
            null != T.window.setBackgroundThrottling ? T.window.setBackgroundThrottling(e) : T.window.webContents.setBackgroundThrottling(e);
        },
        pauseFrameEvictor() {
            var e, t;
            null === (e = (t = T.app).pauseFrameEvictor) || void 0 === e || e.call(t);
        },
        unpauseFrameEvictor() {
            var e, t;
            null === (e = (t = T.app).pauseFrameEvictor) || void 0 === e || e.call(t);
        },
        getPidFromDesktopSource(e) {
            if (!((0, E.isWindows)() || (0, E.isMac)()) || null == this.getDiscordUtils().getPidFromWindowHandle) return null;
            let t = null == e ? void 0 : e.split(':'),
                n = null == t ? void 0 : t[0];
            if ('window' === n) {
                var r;
                let e = null !== (r = null == t ? void 0 : t[1]) && void 0 !== r ? r : '',
                    n = this.getDiscordUtils().getPidFromWindowHandle(e);
                return null == n || 0 === n ? null : n;
            }
            if (n.startsWith('screen')) return 1;
            if ('prepicked' === n) return 1;
            else return null;
        },
        getDesktopSourceFromPid(e) {
            if (!(0, E.isWindows)() || null == this.getDiscordUtils().getWindowHandleFromPid || null == e) return null;
            let t = this.getDiscordUtils().getWindowHandleFromPid(e);
            return null == t || 0 === t.length ? null : ['window', t, '0'].join(':');
        },
        generateSessionFromPid(e) {
            return this.getDiscordUtils().generateSessionFromPid(e);
        },
        getAudioPid(e) {
            return null == this.getDiscordUtils().getAudioPid || null == e ? e : this.getDiscordUtils().getAudioPid(e);
        },
        setForegroundProcess(e) {
            let { setForegroundProcess: t } = this.getDiscordUtils();
            return null != t && t(e);
        },
        getDiscordMemoryUsage() {
            let { getDiscordMemoryUsage: e } = this.getDiscordUtils();
            return null != e ? e() : null;
        },
        getDiscordMemoryUsageElectronRenderer() {
            let { getDiscordMemoryUsageElectronRenderer: e } = this.getDiscordUtils();
            return null == e ? void 0 : e();
        },
        showOpenDialog: (e) => T.fileManager.showOpenDialog({ properties: e }),
        flushStorageData: () =>
            E.isPlatformEmbedded
                ? new Promise((e, t) => {
                      null != T.processUtils.flushStorageData ? T.processUtils.flushStorageData((n) => (null != n ? t(Error(n)) : e())) : e();
                  })
                : Promise.resolve(),
        flushCookies: () =>
            E.isPlatformEmbedded
                ? new Promise((e, t) => {
                      null != T.processUtils.flushCookies ? T.processUtils.flushCookies((n) => (null != n ? t(Error(n)) : e())) : e();
                  })
                : Promise.resolve(),
        setCrashInformation(e, t) {
            var n;
            if (!!E.isPlatformEmbedded && (null == T ? void 0 : null === (n = T.processUtils) || void 0 === n ? void 0 : n.setCrashInformation) != null) T.processUtils.setCrashInformation(e, t);
        },
        blockDisplaySleep: () => (E.isPlatformEmbedded && null != T.powerSaveBlocker ? T.powerSaveBlocker.blockDisplaySleep() : null),
        unblockDisplaySleep(e) {
            if (!!E.isPlatformEmbedded && null != T.powerSaveBlocker) T.powerSaveBlocker.unblockDisplaySleep(e);
        },
        cleanupDisplaySleep() {
            if (!!E.isPlatformEmbedded && null != T.powerSaveBlocker) T.powerSaveBlocker.cleanupDisplaySleep();
        },
        relaunch() {
            if (!!E.isPlatformEmbedded) null != T.remoteApp.relaunch && T.remoteApp.relaunch();
        },
        makeChunkedRequest(e, t, n) {
            let r = ''.concat((0, h.K0)()).concat(e);
            if (!E.isPlatformEmbedded) return Promise.reject(Error('Not embedded!'));
            if (null == T.http) return Promise.reject(Error('HTTP module not available'));
            let {
                    method: i,
                    maxBps: a,
                    token: s,
                    chunkInterval: o,
                    contentType: l
                } = {
                    maxBps: 8000,
                    chunkInterval: 50,
                    contentType: 'application/json',
                    ...n
                },
                u = t;
            'application/json' === l && (u = JSON.stringify(t));
            let c = (o / 1000) * a,
                d = Math.ceil(u.length / c),
                f = Array(d);
            for (let e = 0; e < d; e++) {
                let t = e * c;
                f[e] = u.substring(t, t + c);
            }
            return new Promise((e, t) => {
                null != T.http &&
                    T.http.makeChunkedRequest(
                        r,
                        f,
                        {
                            method: i,
                            chunkInterval: o,
                            contentType: l,
                            token: s
                        },
                        (n, r) => (null != n ? t(n) : r.status >= 400 ? t(Error(r.body)) : void e(r))
                    );
            });
        },
        submitLiveCrashReport(e) {
            if (!(0, E.isWindows)() || null == this.getDiscordUtils().submitLiveCrashReport) return Promise.resolve();
            let t = this.getCrashReporterMetadata(),
                n = T.app.getReleaseChannel(),
                r = null == t ? void 0 : t.sentry;
            return this.getDiscordUtils().submitLiveCrashReport(n, {
                ...r,
                ...e
            });
        },
        crash(e) {
            let t = this.getDiscordUtils().crash;
            return null != t && (t(e), !0);
        },
        setApplicationBackgroundColor(e) {
            T.ipc.send('SETTINGS_UPDATE_BACKGROUND_COLOR', e);
        },
        initializeExitHook() {
            let { initializeExitHook: e } = this.getDiscordUtils();
            null != e && e();
        },
        initializeWERHandler() {
            let { initializeWERHandler: e } = this.getDiscordUtils();
            null != e && e();
        },
        asyncify: (e) =>
            new Promise((t, n) => {
                e(t);
            }),
        IsGameDisplayModeUpdateSupported() {
            let { gameDisplayModeUpdate: e } = this.getDiscordUtils();
            return null != e;
        },
        GameDisplayModeUpdate(e) {
            let { gameDisplayModeUpdate: t } = this.getDiscordUtils();
            return null != t && null != e && t(e);
        },
        GameDisplayModeIsGameSupported(e) {
            let { gameDisplayModeIsSupported: t } = this.getDiscordUtils();
            return null != t && null != e && t(e);
        },
        GetWindowFullscreenTypeByPid(e, t, n) {
            var r;
            let { getWindowFullscreenTypeByPid: i } = this.getDiscordUtils(),
                a = 0 !== e && null != i && null != t ? i(e, t) : null;
            return -1 === a && (a = null), null !== (r = null != a ? a : n) && void 0 !== r ? r : m.Jx.UNKNOWN;
        },
        isModuleVersionAtLeast(e, t) {
            var n, r, i;
            let a = [...(null != y ? y : [0, 0, 0])];
            a.push(null !== (r = null === (n = this.moduleVersions) || void 0 === n ? void 0 : n[e]) && void 0 !== r ? r : 0);
            let s = null !== (i = t[this.releaseChannel]) && void 0 !== i ? i : t.stable;
            for (let [e, t] of a.entries()) {
                if (t > s[e]) break;
                if (t < s[e]) return !1;
            }
            return !0;
        },
        fetchRiotGamesLiveClientData: (e, t) => (E.isPlatformEmbedded ? (null == T.riotGames ? Promise.reject(Error('Riot Games module not available')) : T.riotGames.fetchLiveClientData(e, t)) : Promise.reject(Error('Not embedded!')))
    });
