n.d(t, {
    jK: function () {
        return s;
    },
    tS: function () {
        return l;
    }
}), n(47120), n(411104), n(653041);
var r, i, a, o, s, l, u, c, d = n(512722), _ = n.n(d), E = n(719711), f = n(544891), h = n(433517), p = n(593472), m = n(358085), I = n(591759), T = n(981631), g = n(413135).Buffer;
let S = window.DiscordNative, A = [
        'jpg',
        'jpeg',
        'png'
    ], N = null, v = null, O = null, R = {};
null != S && (N = S.remoteApp.getVersion().split('.').map(e => parseInt(e)), O = null === (r = (i = S.remoteApp).getModuleVersions) || void 0 === r ? void 0 : r.call(i), v = null === (a = (o = S.remoteApp).getBuildNumber) || void 0 === a ? void 0 : a.call(o));
let C = new Set([
        'discord_erlpack',
        'discord_game_utils',
        'discord_rpc',
        'discord_spellcheck',
        'discord_utils',
        'discord_voice'
    ]), y = !1;
async function D(e) {
    let t = await fetch(new Request(e, {
        method: 'GET',
        mode: 'cors'
    }));
    _()(200 === t.status, 'Data fetch unsuccessful');
    let n = await t.arrayBuffer();
    return _()(null != n, 'Data is null'), n;
}
function L(e) {
    return D(e);
}
function b(e) {
    var t, n, r, i, a, o, s, l;
    return {
        id: R[null !== (t = e.id) && void 0 !== t ? t : ''],
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
        pidPath: null !== (o = e.pidPath) && void 0 !== o ? o : [],
        windowHandle: null !== (s = e.windowHandle) && void 0 !== s ? s : null,
        fullscreenType: null !== (l = e.fullscreenType) && void 0 !== l ? l : p.Jx.UNKNOWN
    };
}
(u = s || (s = {}))[u.Camera = 0] = 'Camera', u[u.Microphone = 1] = 'Microphone', u[u.Photo = 2] = 'Photo', u[u.InputMonitoring = 3] = 'InputMonitoring', u[u.ScreenRecording = 4] = 'ScreenRecording', (c = l || (l = {})).VIDEO = 'VIDEO', c.MUTE = 'MUTE', c.DEAFEN = 'DEAFEN', c.DISCONNECT = 'DISCONNECT', t.ZP = {
    requireModule: e => S.nativeModules.requireModule(e),
    ensureModule: e => m.isPlatformEmbedded ? __OVERLAY__ && C.has(e) ? Promise.resolve() : S.nativeModules.ensureModule(e) : Promise.reject(Error('not embedded')),
    get canBootstrapNewUpdater() {
        return S.nativeModules.canBootstrapNewUpdater || !1;
    },
    getCrashReporterMetadata: () => S.crashReporter.getMetadata(),
    getSetting: async (e, t) => await S.settings.get(e, t),
    beforeUnload() {
        var e, t;
        let n;
        try {
            n = this.requireModule('discord_overlay2');
        } catch (e) {
        }
        n && n.reset && n.reset(), n && n.disconnectAllProcesses && n.destroyHostProcess && (n.disconnectAllProcesses(), n.destroyHostProcess()), S.remotePowerMonitor.removeAllListeners(), window.location.origin === window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN && !0 !== h.K.get(E.SV) && this.supportsFeature(T.eRX.USER_DATA_CACHE) && S.userDataCache.cacheUserData(h.K.stringify()), null == S || null === (t = S.window) || void 0 === t || t.close(null == S ? void 0 : null === (e = S.globalOverlay) || void 0 === e ? void 0 : e.WINDOW_KEY);
    },
    inputEventRegister(e, t, n, r) {
        !Array.isArray(t) && (t = t.toJS()), this.getDiscordUtils().inputEventRegister(parseInt(e), t.map(e => {
            let [t, n, r] = e;
            return 'string' == typeof r ? [
                t,
                n,
                r
            ] : [
                t,
                n
            ];
        }), n, r);
    },
    inputEventUnregister(e) {
        this.getDiscordUtils().inputEventUnregister(parseInt(e));
    },
    setOnInputEventCallback(e) {
        if (!!m.isPlatformEmbedded)
            this.getDiscordUtils().inputWatchAll(e);
    },
    setFocused(e) {
        this.getDiscordUtils().inputSetFocused(e);
    },
    setObservedGamesCallback(e, t) {
        try {
            R = {};
            let n = 0;
            this.getDiscordUtils().setObservedGamesCallback(e.map(e => {
                let t = ++n;
                return null != e.id && (R[t] = e.id), {
                    ...e,
                    cmdline: e.cmdLine,
                    id: t
                };
            }), e => t(e.map(b)));
        } catch (e) {
        }
    },
    setCandidateGamesCallback(e) {
        this.getDiscordUtils().setCandidateGamesCallback(t => e(t.map(b)));
    },
    clearCandidateGamesCallback() {
        this.getDiscordUtils().clearCandidateGamesCallback();
    },
    setGameCandidateOverrides(e) {
        this.getDiscordUtils().setGameCandidateOverrides(e.map(e => ({
            ...e,
            gameId: e.id,
            gameName: e.name
        })));
    },
    shouldDisplayNotifications() {
        return this.getDiscordUtils().shouldDisplayNotifications();
    },
    getVoiceEngine() {
        if (__OVERLAY__)
            throw Error('cannot require discord_voice in overlay');
        return y = !0, this.requireModule('discord_voice');
    },
    getDiscordUtils() {
        if (!y)
            try {
                this.getVoiceEngine();
            } catch (e) {
            }
        return this.requireModule('discord_utils');
    },
    isSystemDarkMode() {
        var e, t, n;
        return !!(0, m.isWindows)() && (null === (n = null === (e = (t = this.getDiscordUtils()).isSystemDarkMode) || void 0 === e ? void 0 : e.call(t)) || void 0 === n || n);
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
        if ('darwin' === (0, m.getPlatformName)()) {
            let t = '';
            -1 === e ? t = '\u2022' : e > 0 && (t = ''.concat(e)), S.remoteApp.dock.setBadge(t);
        } else
            'win32' === (0, m.getPlatformName)() ? this.send('APP_BADGE_SET', e) : 'linux' === (0, m.getPlatformName)() && S.remoteApp.setBadgeCount(e >= 0 ? e : 0);
    },
    setSystemTrayIcon(e) {
        if (!!m.isPlatformEmbedded)
            this.send('SYSTEM_TRAY_SET_ICON', e);
    },
    setThumbarButtons(e) {
        var t, n;
        if (!!m.isPlatformEmbedded)
            null === (n = S.thumbar) || void 0 === n || null === (t = n.setThumbarButtons) || void 0 === t || t.call(n, e, this.isSystemDarkMode());
    },
    bounceDock(e) {
        if (m.isPlatformEmbedded) {
            let t = S.remoteApp;
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
        if (!!m.isPlatformEmbedded)
            this.send('SYSTEM_TRAY_SET_APPLICATIONS', e);
    },
    get architecture() {
        return m.isPlatformEmbedded ? S.process.arch : '';
    },
    get releaseChannel() {
        if (!m.isPlatformEmbedded)
            return '';
        let e = S.remoteApp.getReleaseChannel();
        if (null != e)
            return e;
        return '';
    },
    get version() {
        return N;
    },
    get buildNumber() {
        return v;
    },
    get moduleVersions() {
        return O;
    },
    copy(e) {
        m.isPlatformEmbedded && S.clipboard.copy(e);
    },
    async copyImage(e) {
        _()(m.isPlatformEmbedded, 'Copy image method called outside native app'), _()('function' == typeof S.clipboard.copyImage, 'Copy image not supported');
        let t = await D(e);
        S.clipboard.copyImage(g.from(t), e);
    },
    async saveImage(e) {
        var t;
        _()(m.isPlatformEmbedded, 'Save image method called outside native app');
        let n = I.Z.toURLSafe(e);
        if (null == n)
            return;
        let r = null !== (t = n.pathname.split('/').pop()) && void 0 !== t ? t : 'unknown', i = await D(e), a = g.from(i);
        S.fileManager.saveWithDialog(a, r);
    },
    async saveFile(e, t) {
        var n;
        _()(m.isPlatformEmbedded, 'Save file method called outside native app');
        let r = I.Z.toURLSafe(e);
        if (null == r)
            return;
        let i = null !== (n = null != t ? t : r.pathname.split('/').pop()) && void 0 !== n ? n : 'unknown', a = await D(e), o = g.from(a);
        S.fileManager.saveWithDialog(o, i);
    },
    canCopyImage() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
        if (null != e) {
            var t, n;
            let r = null === (t = I.Z.toURLSafe(e)) || void 0 === t ? void 0 : t.pathname;
            if (null == r)
                return !1;
            let i = null === (n = r.split('.').pop()) || void 0 === n ? void 0 : n.toLowerCase();
            if (null != i && !A.includes(i))
                return !1;
        }
        return 'function' == typeof S.clipboard.copyImage;
    },
    cut() {
        m.isPlatformEmbedded && S.clipboard.cut();
    },
    paste() {
        m.isPlatformEmbedded && S.clipboard.paste();
    },
    readClipboard: () => m.isPlatformEmbedded ? S.clipboard.read() : '',
    on(e, t) {
        S.ipc.on(e, t);
    },
    invoke(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
        return S.ipc.invoke(e, ...n);
    },
    send(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
        S.ipc.send(e, ...n);
    },
    flashFrame(e) {
        S.window.flashFrame(e);
    },
    webAuthnRegister: e => S.nativeModules.ensureModule('discord_webauthn').then(() => S.webAuthn.webAuthnRegister(e)),
    webAuthnAuthenticate: e => S.nativeModules.ensureModule('discord_webauthn').then(() => S.webAuthn.webAuthnAuthenticate(e)),
    minimize(e) {
        S.window.minimize(e);
    },
    restore(e) {
        S.window.restore(e);
    },
    maximize(e) {
        S.window.maximize(e);
    },
    focus(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        t && (0, m.isWindows)() && this.minimize(null), S.window.focus(t, e);
    },
    blur() {
        m.isPlatformEmbedded && null != S.window.blur ? S.window.blur() : window.blur();
    },
    fullscreen(e) {
        S.window.fullscreen(e);
    },
    close(e) {
        S.window.close(e);
    },
    setAlwaysOnTop(e, t) {
        'function' == typeof S.window.setAlwaysOnTop && S.window.setAlwaysOnTop(e, t);
    },
    async isAlwaysOnTop(e) {
        let t = !1;
        return 'function' == typeof S.window.isAlwaysOnTop && (t = await S.window.isAlwaysOnTop(e)), t;
    },
    purgeMemory() {
        if (!!m.isPlatformEmbedded)
            S.processUtils.purgeMemory();
    },
    updateCrashReporter(e) {
        S.crashReporter.updateCrashReporter(e);
    },
    triggerJSException(e) {
        S.crashReporter.triggerJSException(e);
    },
    flushDNSCache() {
        m.isPlatformEmbedded && S.processUtils.flushDNSCache();
    },
    supportsFeature: e => S.features.supports(e),
    getEnableHardwareAcceleration: () => !m.isPlatformEmbedded || !__OVERLAY__ && S.gpuSettings.getEnableHardwareAcceleration(),
    setEnableHardwareAcceleration(e) {
        S.gpuSettings.setEnableHardwareAcceleration(e);
    },
    setChromiumSwitches(e) {
        S.gpuSettings.setChromiumSwitches(e);
    },
    getGPUDriverVersions() {
        return (0, m.isWindows)() && null != this.getDiscordUtils().getGPUDriverVersions ? this.getDiscordUtils().getGPUDriverVersions() : Promise.resolve(Object.freeze({}));
    },
    setZoomFactor: e => !!m.isPlatformEmbedded && (S.window.setZoomFactor(e), !0),
    setBackgroundThrottling(e) {
        null != S.window.setBackgroundThrottling ? S.window.setBackgroundThrottling(e) : S.window.webContents.setBackgroundThrottling(e);
    },
    pauseFrameEvictor() {
        var e, t;
        null === (e = (t = S.app).pauseFrameEvictor) || void 0 === e || e.call(t);
    },
    unpauseFrameEvictor() {
        var e, t;
        null === (e = (t = S.app).pauseFrameEvictor) || void 0 === e || e.call(t);
    },
    getPidFromDesktopSource(e) {
        if (!((0, m.isWindows)() || (0, m.isMac)()) || null == this.getDiscordUtils().getPidFromWindowHandle)
            return null;
        let t = null == e ? void 0 : e.split(':'), n = null == t ? void 0 : t[0];
        if ('window' === n) {
            var r;
            let e = null !== (r = null == t ? void 0 : t[1]) && void 0 !== r ? r : '', n = this.getDiscordUtils().getPidFromWindowHandle(e);
            return null == n || 0 === n ? null : n;
        }
        if (n.startsWith('screen'))
            return 1;
        return null;
    },
    getDesktopSourceFromPid(e) {
        if (!(0, m.isWindows)() || null == this.getDiscordUtils().getWindowHandleFromPid || null == e)
            return null;
        let t = this.getDiscordUtils().getWindowHandleFromPid(e);
        return null == t || 0 === t.length ? null : [
            'window',
            t,
            '0'
        ].join(':');
    },
    generateSessionFromPid(e) {
        return this.getDiscordUtils().generateSessionFromPid(e);
    },
    getAudioPid(e) {
        return null == this.getDiscordUtils().getAudioPid || null == e ? e : this.getDiscordUtils().getAudioPid(e);
    },
    setForegroundProcess(e) {
        let {setForegroundProcess: t} = this.getDiscordUtils();
        return null != t && t(e);
    },
    getDiscordMemoryUsage() {
        let {getDiscordMemoryUsage: e} = this.getDiscordUtils();
        return null != e ? e() : null;
    },
    getDiscordMemoryUsageElectronRenderer() {
        let {getDiscordMemoryUsageElectronRenderer: e} = this.getDiscordUtils();
        return null == e ? void 0 : e();
    },
    showOpenDialog: e => S.fileManager.showOpenDialog({ properties: e }),
    flushStorageData: () => m.isPlatformEmbedded ? new Promise((e, t) => {
        null != S.processUtils.flushStorageData ? S.processUtils.flushStorageData(n => null != n ? t(Error(n)) : e()) : e();
    }) : Promise.resolve(),
    flushCookies: () => m.isPlatformEmbedded ? new Promise((e, t) => {
        null != S.processUtils.flushCookies ? S.processUtils.flushCookies(n => null != n ? t(Error(n)) : e()) : e();
    }) : Promise.resolve(),
    setCrashInformation(e, t) {
        var n;
        if (!!m.isPlatformEmbedded && (null == S ? void 0 : null === (n = S.processUtils) || void 0 === n ? void 0 : n.setCrashInformation) != null)
            S.processUtils.setCrashInformation(e, t);
    },
    blockDisplaySleep: () => m.isPlatformEmbedded && null != S.powerSaveBlocker ? S.powerSaveBlocker.blockDisplaySleep() : null,
    unblockDisplaySleep(e) {
        if (!!m.isPlatformEmbedded && null != S.powerSaveBlocker)
            S.powerSaveBlocker.unblockDisplaySleep(e);
    },
    cleanupDisplaySleep() {
        if (!!m.isPlatformEmbedded && null != S.powerSaveBlocker)
            S.powerSaveBlocker.cleanupDisplaySleep();
    },
    relaunch() {
        if (!!m.isPlatformEmbedded)
            null != S.remoteApp.relaunch && S.remoteApp.relaunch();
    },
    makeChunkedRequest(e, t, n) {
        let r = ''.concat((0, f.K0)()).concat(e);
        if (!m.isPlatformEmbedded)
            return Promise.reject(Error('Not embedded!'));
        if (null == S.http)
            return Promise.reject(Error('HTTP module not available'));
        let {
                method: i,
                maxBps: a,
                token: o,
                chunkInterval: s,
                contentType: l
            } = {
                maxBps: 8000,
                chunkInterval: 50,
                contentType: 'application/json',
                ...n
            }, u = t;
        'application/json' === l && (u = JSON.stringify(t));
        let c = s / 1000 * a, d = Math.ceil(u.length / c), _ = Array(d);
        for (let e = 0; e < d; e++) {
            let t = e * c;
            _[e] = u.substring(t, t + c);
        }
        return new Promise((e, t) => {
            null != S.http && S.http.makeChunkedRequest(r, _, {
                method: i,
                chunkInterval: s,
                contentType: l,
                token: o
            }, (n, r) => null != n ? t(n) : r.status >= 400 ? t(Error(r.body)) : void e(r));
        });
    },
    submitLiveCrashReport(e) {
        if (!(0, m.isWindows)() || null == this.getDiscordUtils().submitLiveCrashReport)
            return Promise.resolve();
        let t = this.getCrashReporterMetadata(), n = S.app.getReleaseChannel(), r = null == t ? void 0 : t.sentry;
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
        S.ipc.send('SETTINGS_UPDATE_BACKGROUND_COLOR', e);
    },
    initializeExitHook() {
        let {initializeExitHook: e} = this.getDiscordUtils();
        null != e && e();
    },
    asyncify: e => new Promise((t, n) => {
        e(t);
    }),
    IsGameDisplayModeUpdateSupported() {
        let {gameDisplayModeUpdate: e} = this.getDiscordUtils();
        return null != e;
    },
    GameDisplayModeUpdate(e) {
        let {gameDisplayModeUpdate: t} = this.getDiscordUtils();
        return null != t && null != e && t(e);
    },
    GameDisplayModeIsGameSupported(e) {
        let {gameDisplayModeIsSupported: t} = this.getDiscordUtils();
        return null != t && null != e && t(e);
    },
    GetWindowFullscreenTypeByPid(e, t, n) {
        var r;
        let {getWindowFullscreenTypeByPid: i} = this.getDiscordUtils(), a = 0 !== e && null != i && null != t ? i(e, t) : null;
        return -1 === a && (a = null), null !== (r = null != a ? a : n) && void 0 !== r ? r : p.Jx.UNKNOWN;
    },
    isModuleVersionAtLeast(e, t) {
        var n, r, i;
        let a = [...null != N ? N : [
                0,
                0,
                0
            ]];
        a.push(null !== (r = null === (n = this.moduleVersions) || void 0 === n ? void 0 : n[e]) && void 0 !== r ? r : 0);
        let o = null !== (i = t[this.releaseChannel]) && void 0 !== i ? i : t.stable;
        for (let [e, t] of a.entries()) {
            if (t > o[e])
                break;
            if (t < o[e])
                return !1;
        }
        return !0;
    }
};
