let r, i, a, s;
n(47120), n(724458), n(773603), n(653041), n(337869);
var o,
    l,
    u,
    c = n(512722),
    d = n.n(c),
    _ = n(392711),
    E = n.n(_),
    f = n(553813),
    h = n.n(f),
    p = n(404097),
    I = n(442837),
    m = n(46973),
    T = n(433517),
    S = n(846519),
    g = n(570140),
    A = n(579806),
    N = n(887278),
    O = n(547727),
    R = n(435064),
    v = n(779618),
    C = n(710845),
    L = n(811660),
    y = n(353926),
    D = n(646047),
    b = n(594190),
    M = n(502286),
    P = n(12898),
    U = n(294473),
    w = n(706629),
    x = n(926951),
    G = n(998594),
    k = n(14457),
    B = n(529558),
    F = n(111672),
    V = n(441167),
    H = n(338336),
    Z = n(751571),
    Y = n(725380),
    j = n(581883),
    W = n(626135),
    K = n(12647),
    z = n(70956),
    q = n(358085),
    Q = n(747268),
    X = n(960048),
    $ = n(998502),
    J = n(13140),
    ee = n(314897),
    et = n(967368),
    en = n(463395),
    er = n(592125),
    ei = n(858340),
    ea = n(19780),
    es = n(704806),
    eo = n(594174),
    el = n(631768),
    eu = n(981631),
    ec = n(70722),
    ed = n(761274),
    e_ = n(526761),
    eE = n(65154),
    ef = n(689938);
function eh(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let ep = new C.Z('MediaEngineStore');
((u = o || (o = {}))[(u.DETACHED = 0)] = 'DETACHED'), (u[(u.WAITING = 1)] = 'WAITING'), (u[(u.ATTACHED = 2)] = 'ATTACHED'), (u[(u.STARTED = 3)] = 'STARTED'), (u[(u.PLAYING = 4)] = 'PLAYING'), (u[(u.SILENCE = 5)] = 'SILENCE');
let eI = 'MediaEngineStore',
    em = {
        left: 1,
        right: 1
    },
    eT = 5 * z.Z.Millis.SECOND;
function eS() {
    return {
        mode: eu.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: -60,
            autoThreshold: q.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadLeading: 5,
            vadTrailing: 25,
            delay: 20,
            shortcut: []
        },
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: !1,
        deaf: !1,
        echoCancellation: !0,
        noiseSuppression: !1,
        automaticGainControl: !0,
        noiseCancellation: !0,
        experimentalEncoders: !1,
        hardwareH264: !0,
        hardwareEnabledVersion: 0,
        hardwareEncoding: null,
        silenceWarning: !0,
        attenuation: 0,
        attenuateWhileSpeakingSelf: !1,
        attenuateWhileSpeakingOthers: !0,
        localMutes: {},
        disabledLocalVideos: {},
        videoToggleStateMap: {},
        localVolumes: {},
        localPans: {},
        inputVolume: eE.Qx,
        outputVolume: eE.Qx,
        inputDeviceId: eE.w5,
        outputDeviceId: eE.w5,
        videoDeviceId: eE.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: eg.supports(eE.AN.VIDEO_HOOK),
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        openH264: !0,
        h265Enabled: !0,
        vadThrehsoldMigrated: !1,
        aecDumpEnabled: !1,
        sidechainCompression: !1,
        sidechainCompressionSettingVersion: 0,
        sidechainCompressionStrength: 50,
        audioSubsystemSettingVersion: 0,
        automaticAudioSubsystem: !1
    };
}
let eg = (0, m.Mt)((0, m.jj)()),
    eA = {},
    eN = new Set([eE.Yn.DEFAULT]),
    eO = eg.supports(eE.AN.AUTO_ENABLE),
    eR = !1,
    ev = eE.Yn.STREAM,
    eC = { [eE.w5]: tl(ef.Z.Messages.NO_INPUT_DEVICES) },
    eL = { [eE.w5]: tl(ef.Z.Messages.NO_OUTPUT_DEVICES) },
    ey = { [eE.w5]: tl(ef.Z.Messages.NO_VIDEO_DEVICES) },
    eD = !1,
    eb = !1,
    eM = !1,
    eP = !1,
    eU = !1,
    ew = eE.Av,
    ex = !1,
    eG = !1,
    ek = !1,
    eB = !1,
    eF = null,
    eV = !1,
    eH = !1,
    eZ = !1,
    eY = !1,
    ej = !1,
    eW = null,
    eK = !1,
    ez = !1,
    eq = !1;
Z.Z.hasPermission(ed.Eu.AUDIO, { showAuthorizationError: !1 }), Z.Z.hasPermission(ed.Eu.CAMERA, { showAuthorizationError: !1 });
let eQ = new Set(),
    eX = !1,
    e$ = !1,
    eJ = {},
    e0 = null,
    e1 = !0,
    e2 = {},
    e3 = 5 * z.Z.Millis.SECOND;
function e4() {
    var e, t;
    return null !== (t = null === (e = eo.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t ? 'always' : Q.Z === p.R.CANARY ? 'permittedDevicesOnly' : 'never';
}
function e5() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT,
        t = eA[e];
    return null == t && ((t = eS()), (eA[e] = t)), t;
}
function e6(e) {
    let t = e5(e.context);
    e.setInputMode(t.mode, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: t.modeOptions.autoThreshold,
        vadUseKrisp:
            t.modeOptions.vadUseKrisp &&
            (function () {
                return ej || !1;
            })(),
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: t.modeOptions.delay
    });
}
function e7(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.Qx;
    return E().clamp(e, 0, t);
}
function e8(e) {
    let t = e5(e.context),
        n = !eO || t.mute || t.deaf;
    e.context === eE.Yn.DEFAULT ? (n = n || eD || eb || eM || !Z.Z.didHavePermission(ed.Eu.AUDIO)) : e.context === eE.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eE.Yn.DEFAULT && O.Z.updateNativeMute();
}
function e9() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        o = a;
    if (((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == s ? void 0 : null === (e = s.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, q.isWindows)() && N.pn(o.desktopSource.soundshareId), eg.setGoLiveSource(null, ev)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == s ? void 0 : null === (t = s.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == s ? void 0 : null === (n = s.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eg.setGoLiveSource(null, ev), (eU || i) && ((ew = (eU = i) ? tc(ey, e5().videoDeviceId) : eE.Av), eg.setVideoInputDevice(ew)), (a = s), null != s)) {
        let e = {
            resolution: s.quality.resolution,
            frameRate: s.quality.frameRate
        };
        if (null != s.desktopSource) {
            let t = e4(),
                n = e5().videoHook;
            eg.setGoLiveSource(
                {
                    desktopDescription: {
                        id: s.desktopSource.id,
                        soundshareId: s.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: tn(),
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tr(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: eT,
                        hdrCaptureMode: t
                    },
                    quality: e
                },
                ev
            );
        }
        null != s.cameraSource &&
            eg.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: s.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: s.cameraSource.audioDeviceGuid
                    },
                    quality: e
                },
                ev
            );
    }
}
function te(e, t, n, r) {
    var i;
    let a = null !== (i = null == e ? void 0 : e.soundshareSession) && void 0 !== i ? i : '';
    null == e2[a] && (e2[a] = new Set());
    let s = null != t && !e2[a].has(t);
    s && e2[a].add(t),
        (null == t || s) &&
            W.default.track(eu.rMx.SOUNDSHARE_FAILED, {
                soundshare_failure_code: t,
                soundshare_failure_reason: n,
                soundshare_failure_will_retry: r,
                ...(0, M.Z)(e)
            });
}
function tt(e) {
    let t = e5(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(en.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(en.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(en.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, q.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tn() {
    return (0, q.isWindows)() && h().satisfies(null === A.Z || void 0 === A.Z ? void 0 : A.Z.os.release, ec.nz);
}
function tr() {
    return (0, q.isMac)() && eg.supports(eE.AN.SCREEN_CAPTURE_KIT) && h().satisfies(null === A.Z || void 0 === A.Z ? void 0 : A.Z.os.release, ec.C7);
}
function ti() {
    var e;
    let t = (null === (e = er.Z.getChannel(eW)) || void 0 === e ? void 0 : e.type) === eu.d4z.GUILD_STAGE_VOICE,
        n = r.getHardwareEncoding();
    return !t && n && x.Z.supportsSimulcast();
}
let ta = new (class {
    start() {
        !this.started && ((this.started = !0), eg.on(m.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eg.removeListener(m.aB.Silence, this.handleSilence),
            g.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = e5();
        !eV && ea.Z.getState() === eu.hes.RTC_CONNECTED && e.mode === eu.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        eh(this, 'stateChangeTimeout', void 0),
            eh(this, 'noVoiceTimeout', 5000),
            eh(this, 'voiceTimeout', 1500),
            eh(this, 'started', !1),
            eh(this, 'handleSilence', (e) => {
                let t = !e;
                null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout),
                    (this.stateChangeTimeout = setTimeout(
                        () => {
                            (this.stateChangeTimeout = null),
                                this.started &&
                                    (g.Z.dispatch({
                                        type: 'AUDIO_INPUT_DETECTED',
                                        inputDetected: t
                                    }),
                                    e && (eH = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout
                    ));
            });
    }
})();
function ts(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = e5(t);
    return Object.assign(r, e), !__OVERLAY__ && n && T.K.set(eI, eA), r;
}
function to() {
    !eO &&
        eg.enable().then(() =>
            g.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function tl(e) {
    return {
        id: eE.w5,
        index: 0,
        name: e,
        disabled: !0
    };
}
function tu(e, t) {
    if (0 === e.length) {
        let e = tl(t);
        return { [e.id]: e };
    }
    return E()(e)
        .map((e) => ({
            id: e.id,
            index: e.index,
            name: e.name,
            disabled: !1
        }))
        .keyBy('id')
        .value();
}
function tc(e, t) {
    var n;
    let r = null !== (n = e[t]) && void 0 !== n ? n : E()(e).values().first();
    return null != r ? r.id : t;
}
function td() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null !== (e = j.Z.settings.audioContextSettings) && void 0 !== e
                ? e
                : {
                      user: {},
                      stream: {}
                  };
    for (let e of Object.keys(r)) {
        let i = e === e_.u0.USER ? eE.Yn.DEFAULT : eE.Yn.STREAM,
            a = i === eE.Yn.STREAM ? eE.Yh : eE.Qx,
            s = null !== (t = r[e]) && void 0 !== t ? t : {},
            { localMutes: o, localVolumes: l } = e5(i);
        for (let [e, t] of Object.entries(s))
            null == (0, Y.Ky)(i, e) &&
                (t.muted ? (o[e] = !0) : delete o[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                eg.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(o), ...Object.keys(l)]))
                null == s[e] &&
                    (delete o[e],
                    delete l[e],
                    eg.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        ts(
            {
                localMutes: o,
                localVolumes: l
            },
            i
        );
    }
}
function t_(e) {
    if (null == r)
        return (
            ep.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
            {
                soundshareId: null,
                soundshareSession: ''
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : K.Z.getAudioPid(e),
            n = '';
        return (
            null != t && (n = K.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n
            }
        );
    }
}
function tE(e, t) {
    (0, q.isWindows)() &&
        N.YT(e, { soundshare_session: t }).then((t) => {
            null != t &&
                !b.ZP.shouldContinueWithoutElevatedProcessForPID(e) &&
                g.Z.wait(() => {
                    g.Z.dispatch({
                        type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                        errorMessage: t
                    });
                });
        });
}
function tf() {
    let e = eE.Yn.DEFAULT,
        { videoToggleStateMap: t } = e5(e);
    for (let [e, n] of Object.entries(t)) n === eu.ZUi.AUTO_PROBING && delete t[e];
    ts({ videoToggleStateMap: t }, e, !1);
}
function th(e) {
    let t = e5();
    W.default.track(eu.rMx.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e
    });
}
function tp(e) {
    let t = ts({ sidechainCompression: e });
    eg.setSidechainCompression(t.sidechainCompression);
}
function tI() {
    let e = e5(),
        t = e.inputDeviceId,
        n = en.Z.hasEchoCancellation(t) || e.echoCancellation,
        r = en.Z.hasNoiseSuppression(t) || e.noiseSuppression,
        i = en.Z.hasAutomaticGainControl(t) || e.automaticGainControl,
        a = e.noiseCancellation;
    eg.setLoopback(e$, {
        echoCancellation: n,
        noiseSuppression: r,
        automaticGainControl: i,
        noiseCancellation: a
    });
}
function tm() {
    return ej || !1;
}
async function tT() {
    try {
        await $.ZP.ensureModule('discord_krisp'), $.ZP.requireModule('discord_krisp'), (ej = !0), r.emitChange();
    } catch (t) {
        ep.warn('Failed to load Krisp module: '.concat(t.message)), X.Z.captureException(t);
        let e = eE.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? eE.H3.INITIALIZED : n;
        }
        W.default.track(eu.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), ts({ noiseCancellation: !1 });
    } finally {
        eY = !1;
    }
}
function tS(e) {
    e === eE.iA.AUTOMATIC ? (ts({ automaticAudioSubsystem: !0 }), tg()) : (ts({ automaticAudioSubsystem: !1 }), eg.setAudioSubsystem(e));
}
function tg() {
    let { enabled: e } = k.I.getCurrentConfig({ location: 'interpretAutomaticAudioSubsystem' }, { autoTrackExposure: !1 });
    e ? eg.setAudioSubsystem(eE.iA.EXPERIMENTAL) : eg.setAudioSubsystem(eE.iA.STANDARD);
}
function tA(e) {
    let { section: t } = e;
    return t === eu.oAB.VOICE && to(), !1;
}
class tN extends (l = I.ZP.Store) {
    initialize() {
        eg.on(m.aB.Connection, (e) => {
            var t, n;
            e6(e), e8(e), tt(e);
            let i = e5();
            e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers), e.setQoS(i.qos), e.setExperimentalEncoders(i.experimentalEncoders), e.setHardwareH264(null === (t = i.hardwareEncoding) || void 0 === t || t), e.setSoftwareH264(null === (n = i.openH264) || void 0 === n || n);
            let s = ea.Z.getGuildId(),
                {
                    muteBeforeProcessing: o,
                    pttBeforeProcessing: l,
                    skipEncode: u
                } = (null != s ? w.Z : U.Z).getCurrentConfig(
                    {
                        location: 'setupMediaEngine',
                        ...(null != s && { guildId: s })
                    },
                    { autoTrackExposure: !0 }
                );
            o && e.setExperimentFlag(eE.V8.MUTE_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(eE.V8.PTT_BEFORE_PROCESSING, !0), u && e.setExperimentFlag(eE.V8.SKIP_ENCODE, !0);
            e.setExperimentFlag(eE.V8.RESET_DECODER_ON_ERRORS, !0), e.setExperimentFlag(eE.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
            if (e.context === eE.Yn.STREAM && ti()) {
                let t = x.Z.goliveSimulcastFlag();
                void 0 !== t && e.setExperimentFlag(t, !0);
            }
            if (((0, q.isWindows)() ? ((null == e0 ? void 0 : e0.startsWith('NVIDIA')) ? e.setExperimentFlag(eE.V8.SIGNAL_AV1, !0) : (null == e0 ? void 0 : e0.startsWith('AMD')) && P.Z.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 }).signalAV1Support ? e.setExperimentFlag(eE.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(eE.V8.SIGNAL_AV1_DECODE, !0)) : ((0, q.isMac)() || (0, q.isLinux)()) && e.setExperimentFlag(eE.V8.SIGNAL_AV1_DECODE, !0), (0, q.isWindows)() && e.setExperimentFlag(eE.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), eg.setHasFullbandPerformance((0, L.b)()), e.setRemoteAudioHistory(0), (0, v.Z)(r))) {
                let t = R.Z.getSettings();
                e.setExperimentFlag(eE.V8.STREAMER_CLIP, t.clipsEnabled);
                let { enableViewerClipping: n } = V.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
                e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eE.ux);
            }
            for (let t of ((i = e5(e.context)), e.setPostponeDecodeLevel(100), Object.keys(i.localMutes))) t !== ee.default.getId() && e.setLocalMute(t, i.localMutes[t]);
            for (let t of Object.keys(i.localVolumes)) t !== ee.default.getId() && e.setLocalVolume(t, i.localVolumes[t]);
            for (let t of Object.keys(i.localPans)) {
                let n = i.localPans[t];
                e.setLocalPan(t, n.left, n.right);
            }
            for (let t of Object.keys(i.disabledLocalVideos)) e.setLocalVideoDisabled(t, i.disabledLocalVideos[t]);
            e.on(m.Sh.Speaking, (t, n) => {
                g.Z.dispatch({
                    type: 'SPEAKING',
                    context: e.context,
                    userId: t,
                    speakingFlags: n
                });
            }),
                e.context === eE.Yn.DEFAULT &&
                    ((eG = !1),
                    e.on(m.Sh.SpeakingWhileMuted, () => {
                        (eG = !0), r.emitChange();
                    })),
                e.on(m.Sh.DesktopSourceEnd, () => {
                    g.Z.dispatch({
                        type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                        settings: { context: e.context }
                    });
                }),
                e.on(m.Sh.SoundshareAttached, () => {
                    (null == a ? void 0 : a.desktopSource) != null && W.default.track(eu.rMx.SOUNDSHARE_ATTACHED, (0, M.Z)(null == a ? void 0 : a.desktopSource));
                }),
                e.on(m.Sh.SoundshareFailed, (e) => {
                    let { failureCode: t, failureReason: n, willRetry: r } = e;
                    te(null == a ? void 0 : a.desktopSource, t, n, r);
                }),
                e.on(m.Sh.SoundshareSpeaking, () => {
                    (null == a ? void 0 : a.desktopSource) != null && (W.default.track(eu.rMx.SOUNDSHARE_TRANSMITTING, (0, M.Z)(null == a ? void 0 : a.desktopSource)), null != ei.Z.getHookError(eu.K3D.SOUND) && g.Z.wait(() => g.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
                });
            let c = new S.V7();
            e.on(m.Sh.SoundshareTrace, (e) => {
                switch (e.type) {
                    case 'soundshare_attach_requested':
                        c.start(e3, () => {
                            g.Z.dispatch({
                                type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                                errorMessage: 'Sound Hook Failed'
                            });
                        });
                        break;
                    case 'soundshare_recv_failed':
                        let t = e.reason,
                            n = e.code,
                            r = e.retry;
                        (null == a ? void 0 : a.desktopSource) != null &&
                            (te(null == a ? void 0 : a.desktopSource, n, t, r),
                            !r &&
                                (c.stop(),
                                g.Z.wait(() =>
                                    g.Z.dispatch({
                                        type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                                        errorMessage: t,
                                        errorCode: n
                                    })
                                )));
                        break;
                    case 'soundshare_state_transition':
                        4 === e.newState && (c.stop(), g.Z.wait(() => g.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
                }
            }),
                e.on(m.Sh.InteractionRequired, (e) => {
                    g.Z.dispatch({
                        type: 'MEDIA_ENGINE_INTERACTION_REQUIRED',
                        required: e
                    });
                }),
                e.on(m.Sh.VideoHookInitialize, (e, t, n, r, i, s) => {
                    (null == a ? void 0 : a.desktopSource) != null &&
                        W.default.track(eu.rMx.VIDEOHOOK_INITIALIZED, {
                            backend: e,
                            format: t,
                            framebuffer_format: n,
                            sample_count: r,
                            success: i,
                            reinitialization: s,
                            ...(0, M.Z)(null == a ? void 0 : a.desktopSource)
                        });
                }),
                e.on(m.Sh.NoiseCancellationError, (e) => {
                    ep.warn('noisecancellererror event: '.concat(e)),
                        (eK = !0),
                        W.default.track(eu.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                        g.Z.dispatch({
                            type: 'AUDIO_SET_NOISE_SUPPRESSION',
                            enabled: !0
                        }),
                        g.Z.dispatch({
                            type: 'AUDIO_SET_NOISE_CANCELLATION',
                            enabled: !1
                        }),
                        g.Z.dispatch({
                            type: 'MEDIA_ENGINE_NOISE_CANCELLATION_ERROR',
                            code: e
                        });
                }),
                e.on(m.Sh.VoiceActivityDetectorError, (e) => {
                    ep.warn('voiceactivitydetectorerror event: '.concat(e)),
                        W.default.track(eu.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                        g.Z.dispatch({
                            type: 'AUDIO_SET_MODE',
                            context: eE.Yn.DEFAULT,
                            mode: eu.pM4.VOICE_ACTIVITY,
                            options: {
                                ...e5(eE.Yn.DEFAULT).modeOptions,
                                vadUseKrisp: !1
                            }
                        }),
                        g.Z.dispatch({
                            type: 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR',
                            code: e
                        });
                }),
                e.on(m.Sh.VideoState, (t) => {
                    g.Z.dispatch({
                        type: 'MEDIA_ENGINE_VIDEO_STATE_CHANGED',
                        videoState: t,
                        context: e.context
                    });
                }),
                e.on(m.Sh.Destroy, () => {
                    c.stop();
                }),
                e.setBitRate(et.Z.bitrate),
                e.applyVideoQualityMode(el.Z.mode);
        }),
            eg.on(m.aB.DeviceChange, (e, t, n) => {
                g.Z.dispatch({
                    type: 'MEDIA_ENGINE_DEVICES',
                    inputDevices: e,
                    outputDevices: t,
                    videoDevices: n
                });
            }),
            eg.on(m.aB.VolumeChange, (e, t) => {
                g.Z.dispatch({
                    type: 'AUDIO_VOLUME_CHANGE',
                    inputVolume: e,
                    outputVolume: t
                });
            }),
            eg.on(m.aB.DesktopSourceEnd, () => {
                g.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: null
                });
            }),
            eg.on(m.aB.AudioPermission, (e) => {
                (eq = !0),
                    g.Z.dispatch({
                        type: 'MEDIA_ENGINE_PERMISSION',
                        kind: 'audio',
                        granted: e
                    });
            }),
            eg.on(m.aB.VideoPermission, (e) => {
                g.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'video',
                    granted: e
                });
            }),
            eg.on(m.aB.WatchdogTimeout, async () => {
                let e;
                try {
                    await K.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
                } catch (t) {
                    'number' == typeof t.status && (e = t.status);
                }
                ep.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), W.default.track(eu.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
            }),
            eg.on(m.aB.VideoInputInitialized, (e) => {
                W.default.track(eu.rMx.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * z.Z.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy
                });
            }),
            eg.on(m.aB.ClipsRecordingRestartNeeded, () => {
                g.Z.dispatch({ type: 'CLIPS_RESTART' });
            }),
            eg.on(m.aB.ClipsInitFailure, (e, t) => {
                g.Z.wait(() => {
                    g.Z.dispatch({
                        type: 'CLIPS_INIT_FAILURE',
                        errMsg: e,
                        applicationName: t
                    });
                });
            }),
            eg.on(m.aB.ClipsRecordingEnded, (e, t) => {
                var n, r;
                (null == s ? void 0 : null === (n = s.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == a ? void 0 : null === (r = a.desktopSource) || void 0 === r ? void 0 : r.soundshareId) !== t && N.pn(t), (s = null));
            }),
            eg.on(m.aB.NativeScreenSharePickerUpdate, (e) => {
                G.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerUpdate' }),
                    g.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                        existing: e
                    });
            }),
            eg.on(m.aB.NativeScreenSharePickerCancel, (e) => {
                G.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerCancel' }),
                    g.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                        existing: e
                    });
            }),
            eg.on(m.aB.NativeScreenSharePickerError, (e) => {
                G.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerError' }),
                    g.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                        error: e
                    });
            }),
            eg.on(m.aB.AudioDeviceModuleError, (e, t, n) => {
                W.default.track(eu.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                    audio_device_module: e,
                    code: t,
                    device_name: n
                });
            }),
            ta.reset(),
            (0, es.q)().then((e) => {
                null != e && (e0 = e.gpu_brand);
            }),
            !(function () {
                var e;
                let t = T.K.get('audio');
                null != t && (T.K.set(eI, { [eE.Yn.DEFAULT]: t }), T.K.remove('audio')),
                    (eA = null !== (e = T.K.get(eI)) && void 0 !== e ? e : {}),
                    E().each(eA, (e) => {
                        if ((E().defaultsDeep(e, eS()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, J.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)), !e.qosMigrated && ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                            var t;
                            (e.vadThrehsoldMigrated = !0), (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60);
                        }
                        (0, q.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : 1 !== e.ncUseKrispSettingVersion && ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), 1 !== e.hardwareEnabledVersion && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = 1)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
                    }),
                    (function () {
                        var e, t, n;
                        let r = e5();
                        eg.setAudioInputDevice(r.inputDeviceId), eg.setAudioOutputDevice(r.outputDeviceId), e9(), eg.setInputVolume(r.inputVolume), eg.setOutputVolume(r.outputVolume), eg.setH264Enabled(null === (e = r.hardwareEncoding) || void 0 === e || e || r.openH264), eg.setAv1Enabled(null === (t = r.hardwareEncoding) || void 0 === t || t), eg.setH265Enabled(null === (n = r.hardwareEncoding) || void 0 === n || n), eg.setAecDump(r.aecDumpEnabled), eg.setSidechainCompression(r.sidechainCompression), eg.setSidechainCompressionStrength(r.sidechainCompressionStrength);
                    })();
            })(),
            ((0, q.isWindows)() || (0, q.isLinux)() || ((0, q.isMac)() && h().satisfies(null === A.Z || void 0 === A.Z ? void 0 : A.Z.os.release, '>=21.0.0'))) && !__OVERLAY__ && !eY && !ej ? ((eY = !0), tT()) : (0, q.isWeb)() && eg.supports(eE.AN.NOISE_CANCELLATION) ? ((ej = !0), r.emitChange()) : (0, q.isWeb)() && ts({ noiseCancellation: !1 }),
            tf(),
            (eJ = {
                [eE.AN.VIDEO]: eg.supports(eE.AN.VIDEO),
                [eE.AN.DESKTOP_CAPTURE]: eg.supports(eE.AN.DESKTOP_CAPTURE),
                [eE.AN.HYBRID_VIDEO]: eg.supports(eE.AN.HYBRID_VIDEO)
            }),
            this.waitFor(ee.default, en.Z, er.Z, ei.Z, ea.Z, b.ZP, Z.Z.storage, j.Z, y.Z, R.Z);
    }
    supports(e) {
        return eg.supports(e);
    }
    supportsInApp(e) {
        return eJ[e] || eg.supports(e);
    }
    isSupported() {
        return eg.supported();
    }
    isExperimentalEncodersSupported() {
        return eg.supports(eE.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eg.supports(eE.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return ej || !1;
    }
    isNoiseCancellationError() {
        return eK;
    }
    isAutomaticGainControlSupported() {
        return eg.supports(eE.AN.AUTOMATIC_GAIN_CONTROL);
    }
    isAdvancedVoiceActivitySupported() {
        return ej || !1;
    }
    isAecDumpSupported() {
        return eg.supports(eE.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eg.supports(eE.AN.VIDEO) && eg.supports(eE.AN.SIMULCAST);
    }
    getAecDump() {
        return e5().aecDumpEnabled;
    }
    getMediaEngine() {
        return eg;
    }
    getVideoComponent() {
        return eg.supports(eE.AN.DIRECT_VIDEO) && eg.setUseDirectVideo(!0), eg.Video;
    }
    getCameraComponent() {
        return eg.supports(eE.AN.DIRECT_VIDEO) && eg.setUseDirectVideo(!0), eg.Camera;
    }
    isEnabled() {
        return eO;
    }
    isMute() {
        return this.isSelfMute() || eD;
    }
    isDeaf() {
        return this.isSelfDeaf() || eP;
    }
    hasContext(e) {
        return null != eA[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT;
        return e === eE.Yn.DEFAULT && eb;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT;
        return !this.isEnabled() || e5(e).mute || !Z.Z.didHavePermission(ed.Eu.AUDIO) || this.isSelfDeaf(e) || (e === eE.Yn.DEFAULT && eM);
    }
    shouldSkipMuteUnmuteSound() {
        return ex;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        ex = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && en.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return e1;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT;
        return !this.isSupported() || e5(e).deaf;
    }
    isVideoEnabled() {
        return eU && eB;
    }
    isVideoAvailable() {
        return Object.values(ey).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.STREAM;
        return ev === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.STREAM;
        return ev === t && null != a && (null === (e = a.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.Yn.DEFAULT;
        return e !== ee.default.getId() && (e5(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eg.supports(eE.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.Yn.DEFAULT;
        return null !== (t = e5(n).disabledLocalVideos[e]) && void 0 !== t && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.Yn.DEFAULT;
        return null !== (t = e5(n).videoToggleStateMap[e]) && void 0 !== t ? t : eu.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.Yn.DEFAULT;
        return t === eE.Yn.DEFAULT && eQ.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT;
        return e === eE.Yn.DEFAULT && eQ.size > 0;
    }
    isMediaFilterSettingLoading() {
        return ez;
    }
    isNativeAudioPermissionReady() {
        return eq;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return ev;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.Yn.DEFAULT,
            n = e5(t).localPans[e];
        return null != n ? n : em;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.Yn.DEFAULT,
            n = t === eE.Yn.STREAM ? eE.Yh : eE.Qx,
            r = e5(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return e5().inputVolume;
    }
    getOutputVolume() {
        return e5().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT;
        return e5(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT;
        return e5(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            E().each(eA, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i }
                } = t;
                r === eu.pM4.PUSH_TO_TALK && eN.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return tc(eC, e5().inputDeviceId);
    }
    getOutputDeviceId() {
        return tc(eL, e5().outputDeviceId);
    }
    getVideoDeviceId() {
        return tc(ey, e5().videoDeviceId);
    }
    getInputDevices() {
        return eC;
    }
    getOutputDevices() {
        return eL;
    }
    getVideoDevices() {
        return ey;
    }
    getEchoCancellation() {
        let e = e5();
        return en.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e5().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return e5().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return e5().h265Enabled;
    }
    getLoopback() {
        return eg.getLoopback();
    }
    getNoiseSuppression() {
        let e = e5();
        return en.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = e5();
        return en.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getNoiseCancellation() {
        return e5().noiseCancellation;
    }
    getExperimentalEncoders() {
        return e5().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null === (e = e5().hardwareEncoding) || void 0 === e || e;
    }
    getEnableSilenceWarning() {
        return e5().silenceWarning;
    }
    getDebugLogging() {
        return eg.getDebugLogging();
    }
    getQoS() {
        return e5().qos;
    }
    getAttenuation() {
        return e5().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return e5().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return e5().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return e5().automaticAudioSubsystem ? eE.iA.AUTOMATIC : eg.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eg.getMLSSigningKey(e, t);
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT;
        return e5(e);
    }
    getState() {
        return {
            settingsByContext: eA,
            inputDevices: eC,
            outputDevices: eL,
            appSupported: eJ,
            krispModuleLoaded: ej,
            goLiveSource: a,
            goLiveContext: ev
        };
    }
    getInputDetected() {
        return eF;
    }
    getNoInputDetectedNotice() {
        return eH;
    }
    getPacketDelay() {
        return q.isPlatformEmbedded || this.getMode() !== eu.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eg.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eR;
    }
    getVideoHook() {
        return e5().videoHook;
    }
    supportsVideoHook() {
        return eg.supports(eE.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = e5().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return eg.supports(eE.AN.EXPERIMENTAL_SOUNDSHARE) && h().satisfies(null === A.Z || void 0 === A.Z ? void 0 : A.Z.os.release, ec.I9);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = e5().useSystemScreensharePicker,
            n =
                (0, q.isLinux)() ||
                G.Z.getCurrentConfig(
                    { location: 'getUseSystemScreensharePicker' },
                    {
                        disable: !e,
                        autoTrackExposure: !1
                    }
                ).useSystemPickerInModalByDefault;
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        let e = eg.supports(eE.AN.NATIVE_SCREENSHARE_PICKER);
        return G.Z.getCurrentConfig(
            { location: 'supportsSystemScreensharePicker' },
            {
                disable: !e,
                autoTrackExposure: !1
            }
        ).enableSystemPicker;
    }
    getOpenH264() {
        return e5().openH264;
    }
    getEverSpeakingWhileMuted() {
        return eG;
    }
    supportsScreenSoundshare() {
        return ((0, q.isMac)() && eg.supports(eE.AN.SOUNDSHARE) && h().satisfies(null === A.Z || void 0 === A.Z ? void 0 : A.Z.os.release, ec.yG) && tr()) || ((0, q.isWindows)() && eg.supports(eE.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare());
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT,
            t = this.supports(eE.AN.VIDEO)
                ? [
                      {
                          rid: '100',
                          type: e === eE.Yn.DEFAULT ? eE.Tr.VIDEO : eE.Tr.SCREEN,
                          quality: 100
                      }
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eE.Yn.DEFAULT || ti()) &&
                t.push({
                    rid: '50',
                    type: e === eE.Yn.DEFAULT ? eE.Tr.VIDEO : eE.Tr.SCREEN,
                    quality: 50
                }),
            t
        );
    }
    getSupportedSecureFramesProtocolVersion(e) {
        var t;
        let n = eg.getSupportedSecureFramesProtocolVersion(),
            r = B.m.getCurrentConfig({ location: 'MediaEngineStore' }),
            i =
                null != e
                    ? B.N.getCurrentConfig({
                          guildId: e,
                          location: 'MediaEngineStore'
                      })
                    : null,
            a = r.canSupportDaveProtocol || (null == i ? void 0 : i.canSupportDaveProtocol),
            s = Math.max(r.protocolVersionFloor, null !== (t = null == i ? void 0 : i.protocolVersionFloor) && void 0 !== t ? t : 0);
        return a && (n >= s || (n > 5 && 114 === n)) ? n : 0;
    }
    hasClipsSource() {
        return null != s;
    }
}
eh(tN, 'displayName', 'MediaEngineStore'),
    (r = new tN(g.Z, {
        VOICE_CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
            if ((r !== n && e9(i, null), null != t || null == n)) {
                eZ = !1;
                return;
            }
            if (eZ) return;
            eZ = !0;
            let a = e5();
            (a.mute || a.deaf) &&
                (ts({
                    deaf: !1,
                    mute: !1
                }),
                eg.eachConnection(e8));
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => (i === t.sessionId ? ((eD = t.mute || t.suppress), (eP = t.deaf), eg.eachConnection(e8), e9(!(null != t.guildId && null != t.channelId && null != eW && eW !== t.channelId) && eU), (eW = t.channelId), !0) : (!__OVERLAY__ && t.userId === ee.default.getId() && null == ea.Z.getChannelId() && e9(!1, null), e)), !1);
        },
        CONNECTION_OPEN: function (e) {
            (i = e.sessionId),
                (eD = !1),
                (eP = !1),
                !(0, q.isWeb)() &&
                    F.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                        let t = e5();
                        !e.sidechainAvailable && t.sidechainCompression ? (ts({ sidechainCompressionSettingVersion: 0 }), tp(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < 1 && (ts({ sidechainCompressionSettingVersion: 1 }), tp(e.sidechainEnabled));
                    });
            let t = e5();
            eg.supports(eE.AN.AUTOMATIC_AUDIO_SUBSYSTEM) ? (t.automaticAudioSubsystem && tg(), (0, q.isWindows)() && t.audioSubsystemSettingVersion < 2 && (ts({ audioSubsystemSettingVersion: 2 }), !t.automaticAudioSubsystem && eg.getAudioSubsystem() === eE.iA.STANDARD && tS(eE.iA.AUTOMATIC))) : ts({ automaticAudioSubsystem: !1 }), td();
        },
        CONNECTION_CLOSED: function () {
            i = null;
        },
        RTC_CONNECTION_STATE: function (e) {
            switch (e.state) {
                case eu.hes.CONNECTING:
                    to();
                    break;
                case eu.hes.RTC_CONNECTING:
                    (eV = !1), (eH = !1);
                    break;
                case eu.hes.RTC_CONNECTED:
                    e9();
                    break;
                case eu.hes.DISCONNECTED:
                    (function () {
                        if (0 === eQ.size) return;
                        let e = eE.Yn.DEFAULT,
                            { disabledLocalVideos: t } = e5(e);
                        eQ.forEach((n) => {
                            d()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], eg.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            eQ.clear(),
                            ts({ disabledLocalVideos: t }, e, !1);
                    })(),
                        tf();
            }
            ta.update();
        },
        AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
            let { mute: t } = e;
            (eb = t), eg.eachConnection(e8);
        },
        AUDIO_TOGGLE_SELF_MUTE: function (e) {
            let { context: t, skipMuteUnmuteSoundEffect: n } = e,
                { mute: r, deaf: i } = e5(t);
            if (t === eE.Yn.DEFAULT && (Z.Z.requestPermission(ed.Eu.AUDIO), eM)) return !1;
            !(r = !i && !r) && (i = !1),
                n && (ex = !0),
                ts(
                    {
                        mute: r,
                        deaf: i
                    },
                    t
                ),
                eg.eachConnection(e8);
        },
        AUDIO_SET_SELF_MUTE: function (e) {
            let { context: t, mute: n } = e;
            ts({ mute: n }, t), eg.eachConnection(e8);
        },
        AUDIO_TOGGLE_SELF_DEAF: function (e) {
            let { context: t } = e;
            ts({ deaf: !e5(t).deaf }, t), eg.eachConnection(e8);
        },
        AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
            let { context: t, userId: n } = e;
            if (n === ee.default.getId()) return;
            let { localMutes: r } = e5(t);
            r[n] ? delete r[n] : (r[n] = !0), ts({ localMutes: r }, t), eg.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
        },
        AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
            var t, n, r, i, a, s, o;
            let { context: l, userId: u, videoToggleState: c, persist: _, isAutomatic: E } = e;
            d()(!(_ && E), 'These are not allowed to both be true.');
            let f = c === eu.ZUi.DISABLED,
                { disabledLocalVideos: h } = e5(l),
                p = null !== (t = h[u]) && void 0 !== t && t,
                I = eQ.has(u),
                m = c === eu.ZUi.AUTO_ENABLED || c === eu.ZUi.MANUAL_ENABLED;
            ep.info('disableVideo='.concat(f, ' currentlyDisabled=').concat(p, ' currentlyAutoDisabled=').concat(I, ', isVideoShown=').concat(m)), d()(!(I && !p), 'If you are auto-disabled, then you are also disabled.');
            let T = f !== p,
                S = l === eE.Yn.DEFAULT,
                g = E && T && S,
                A = _ && T && S;
            ep.info('changed='.concat(T, ' isDefaultContext=').concat(S, ' isUpdateCausedByVideoHealthManager=').concat(g, ' isManualToggleByUser=').concat(A));
            let { videoToggleStateMap: N } = e5(l);
            if ((N[u] === eu.ZUi.AUTO_PROBING && c === eu.ZUi.AUTO_ENABLED && (0, H.Z)(u, f ? eE.fC.AUTO_DISABLE : eE.fC.AUTO_ENABLE, m), (N[u] = c), ts({ videoToggleStateMap: N }, l, _), c === eu.ZUi.AUTO_PROBING ? null === (n = ea.Z.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (r = ea.Z.getRTCConnection()) || void 0 === r || r.pauseStatsCollectionForUser(u, !1), !eX && (ep.info('isAutoDisableAllowed='.concat(eX, ' - disabling VideoHealthManager')), null === (a = ea.Z.getRTCConnection()) || void 0 === a || null === (i = a.getVideoHealthManager()) || void 0 === i || i.disable()), g)) {
                if ((!f && !I) || (f && !eX)) return;
                (0, H.Z)(u, f ? eE.fC.AUTO_DISABLE : eE.fC.AUTO_ENABLE, m), f ? eQ.add(u) : eQ.delete(u);
            } else A && (I && !f ? (ep.info('disallowing auto-disable for this session because of manual override by user'), (eX = !1), null === (o = ea.Z.getRTCConnection()) || void 0 === o || null === (s = o.getVideoHealthManager()) || void 0 === s || s.disable(), (0, H.Z)(u, eE.fC.MANUAL_REENABLE, m)) : (0, H.Z)(u, f ? eE.fC.MANUAL_DISABLE : eE.fC.MANUAL_ENABLE, m));
            S && !f && eQ.delete(u),
                f ? (h[u] = !0) : delete h[u],
                ts({ disabledLocalVideos: h }, l, _),
                eg.eachConnection((e) => {
                    var t;
                    return e.setLocalVideoDisabled(u, null !== (t = h[u]) && void 0 !== t && t);
                }, l);
        },
        AUDIO_SET_LOCAL_VOLUME: function (e) {
            let { context: t, userId: n, volume: r } = e;
            if (n === ee.default.getId()) return;
            let i = t === eE.Yn.STREAM ? eE.Yh : eE.Qx,
                { localVolumes: a } = e5(t);
            r === i ? delete a[n] : (a[n] = r), ts({ localVolumes: a }, t), eg.eachConnection((e) => e.setLocalVolume(n, r), t);
        },
        AUDIO_SET_LOCAL_PAN: function (e) {
            let { context: t, userId: n, left: r, right: i } = e,
                { localPans: a } = e5(t);
            (a[n] = {
                left: r,
                right: i
            }),
                ts({ localPans: a }, t),
                eg.eachConnection((e) => e.setLocalPan(n, r, i), t);
        },
        AUDIO_SET_MODE: function (e) {
            let { context: t, mode: n, options: r } = e;
            ts(
                {
                    mode: n,
                    modeOptions: r
                },
                t
            ),
                eg.eachConnection(e6),
                ta.update();
        },
        AUDIO_SET_INPUT_VOLUME: function (e) {
            let { volume: t } = e;
            ts({ inputVolume: e7(t) }), eg.setInputVolume(t);
        },
        AUDIO_SET_OUTPUT_VOLUME: function (e) {
            let { volume: t } = e;
            ts({ outputVolume: t }), eg.setOutputVolume(t);
        },
        AUDIO_SET_INPUT_DEVICE: function (e) {
            let { id: t } = e;
            ts({ inputDeviceId: (t = tc(eC, t)) }), eg.setAudioInputDevice(t);
        },
        AUDIO_SET_OUTPUT_DEVICE: function (e) {
            let { id: t } = e;
            ts({ outputDeviceId: (t = tc(eL, t)) }), eg.setAudioOutputDevice(t);
        },
        AUDIO_SET_ECHO_CANCELLATION: function (e) {
            let t = ts({ echoCancellation: e.enabled });
            eg.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), tI(), th(e.location);
        },
        AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
            tp(e.enabled);
        },
        AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
            let t = ts({ sidechainCompressionStrength: e.strength });
            eg.setSidechainCompressionStrength(t.sidechainCompressionStrength);
        },
        AUDIO_SET_LOOPBACK: function (e) {
            let { enabled: t } = e;
            return (e$ = t), tI();
        },
        AUDIO_SET_NOISE_SUPPRESSION: function (e) {
            let t = ts({ noiseSuppression: e.enabled });
            eg.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), tI(), th(e.location);
        },
        AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
            let t = ts({ automaticGainControl: e.enabled });
            eg.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), tI(), th(e.location);
        },
        AUDIO_SET_NOISE_CANCELLATION: function (e) {
            let t = ts({ noiseCancellation: e.enabled });
            eg.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), tI(), th(e.location);
        },
        AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
            ts({ silenceWarning: e.enabled }), ta.update();
        },
        AUDIO_SET_DEBUG_LOGGING: function (e) {
            eg.setDebugLogging(e.enabled);
        },
        MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
            ts({ videoHook: e.enabled });
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
            ts({ experimentalSoundshare2: e.enabled });
        },
        MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
            let { enabled: t } = e;
            ts({ useSystemScreensharePicker: t });
        },
        AUDIO_SET_ATTENUATION: function (e) {
            let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
                i = ts({
                    attenuation: t,
                    attenuateWhileSpeakingSelf: n,
                    attenuateWhileSpeakingOthers: r
                });
            eg.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
        },
        AUDIO_SET_QOS: function (e) {
            let { enabled: t } = e;
            ts({ qos: t }), eg.eachConnection((e) => e.setQoS(t));
        },
        MEDIA_ENGINE_DEVICES: function (e) {
            let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
            !(function (e) {
                let t = eC;
                if (((eC = tu(e, ef.Z.Messages.NO_INPUT_DEVICES)), !E().isEqual(eC, t))) {
                    let e = e5(),
                        t = tc(eC, e.inputDeviceId);
                    eg.setAudioInputDevice(t);
                }
            })(t),
                !(function (e) {
                    let t = eL;
                    if (((eL = tu(e, ef.Z.Messages.NO_OUTPUT_DEVICES)), !E().isEqual(eL, t))) {
                        let e = e5(),
                            t = tc(eL, e.outputDeviceId);
                        eg.setAudioOutputDevice(t);
                    }
                })(n),
                !(function (e) {
                    eB = e.length > 0;
                    let t = ey;
                    if (((ey = tu(e, ef.Z.Messages.NO_VIDEO_DEVICES)), eU && !E().isEqual(ey, t))) {
                        var n;
                        let e = void 0 !== ey[ew],
                            r = ew === eE.w5 && (null === (n = t[eE.w5]) || void 0 === n ? void 0 : n.disabled);
                        e9(e || r);
                    }
                })(r);
        },
        AUDIO_VOLUME_CHANGE: function (e) {
            let { inputVolume: t, outputVolume: n } = e;
            ts({
                inputVolume: e7(t),
                outputVolume: n
            });
        },
        AUDIO_RESET: function () {
            T.K.remove(eI), location.reload();
        },
        AUDIO_INPUT_DETECTED: function (e) {
            let { inputDetected: t } = e;
            (eF = t), !eV && eF && ((eV = !0), ta.update());
        },
        AUDIO_SET_SUBSYSTEM: function (e) {
            tS(e.subsystem);
        },
        MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
            (eO = e.enabled),
                e.unmute &&
                    ts({
                        mute: !1,
                        deaf: !1
                    }),
                eg.eachConnection(e8);
        },
        MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
            let { enabled: t } = e;
            Z.Z.requestPermission(ed.Eu.CAMERA), e9(t);
        },
        MEDIA_ENGINE_PERMISSION: function (e) {
            let { kind: t, granted: n } = e;
            if (!n)
                switch (t) {
                    case 'audio':
                        (eO = !1), eg.eachConnection(e8);
                        break;
                    case 'video':
                        e9(!1);
                }
        },
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
            var t, n, r, i;
            let { settings: s } = e;
            if ((null == s ? void 0 : s.desktopSettings) != null) {
                let e = null,
                    r = null,
                    { sourceId: i, sound: o } = s.desktopSettings,
                    l = null !== (t = s.context) && void 0 !== t ? t : eE.Yn.DEFAULT,
                    u =
                        null !== (n = s.qualityOptions) && void 0 !== n
                            ? n
                            : {
                                  resolution: 720,
                                  frameRate: 30
                              },
                    c = !1 === o ? null : K.Z.getPidFromDesktopSource(i);
                q.isPlatformEmbedded && !0 === o && (({ soundshareId: e, soundshareSession: r } = t_(c)), null != e && tE(e, r)),
                    !(function (e) {
                        if (e !== ev) null != a && eg.setGoLiveSource(null, ev), (ev = e);
                    })(l),
                    e9(l === eE.Yn.STREAM && eU, {
                        desktopSource: {
                            id: i,
                            sourcePid: c,
                            soundshareId: e,
                            soundshareSession: r
                        },
                        quality: {
                            resolution: u.resolution,
                            frameRate: u.frameRate
                        }
                    });
            } else if ((null == s ? void 0 : s.cameraSettings) != null) {
                let e = null !== (r = s.context) && void 0 !== r ? r : eE.Yn.DEFAULT,
                    { videoDeviceGuid: t, audioDeviceGuid: n } = s.cameraSettings,
                    a = e === eE.Yn.STREAM && eU,
                    o =
                        null !== (i = s.qualityOptions) && void 0 !== i
                            ? i
                            : {
                                  resolution: 720,
                                  frameRate: 30
                              };
                e9(a, {
                    cameraSource: {
                        videoDeviceGuid: t,
                        audioDeviceGuid: n
                    },
                    quality: {
                        resolution: o.resolution,
                        frameRate: o.frameRate
                    }
                });
            } else e9(eU, null);
        },
        MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
            let { id: t } = e;
            ts({ videoDeviceId: (t = tc(ey, t)) }), e9();
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function (e) {
            let t = ts({ experimentalEncoders: e.enabled });
            eg.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
        },
        MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
            return eR !== e.required && ((eR = e.required), !e.required && eg.interact(), !0);
        },
        USER_SETTINGS_MODAL_INIT: tA,
        USER_SETTINGS_MODAL_SET_SECTION: tA,
        CERTIFIED_DEVICES_SET: function () {
            return eg.eachConnection(tt), !1;
        },
        RPC_APP_CONNECTED: function (e) {
            let { application: t } = e;
            eN.add(t.id);
        },
        RPC_APP_DISCONNECTED: function (e) {
            let { application: t } = e;
            eN.delete(t.id);
        },
        OVERLAY_INITIALIZE: function (e) {
            let { mediaEngineState: t } = e;
            (eA = t.settingsByContext), (eC = t.inputDevices), (eL = t.outputDevices), (eJ = t.appSupported), (ej = t.krispModuleLoaded), (ev = t.goLiveContext);
        },
        MEDIA_ENGINE_SET_OPEN_H264: function (e) {
            let { enabled: t } = e,
                n = ts({ openH264: t });
            eg.setH264Enabled(n.hardwareEncoding || n.openH264),
                eg.eachConnection((e) => {
                    var t;
                    return e.setSoftwareH264(null === (t = n.openH264) || void 0 === t || t);
                });
        },
        MEDIA_ENGINE_SET_HARDWARE_ENCODING: function (e) {
            var t, n;
            let { enabled: r } = e,
                i = ts({ hardwareEncoding: r });
            eg.eachConnection((e) => {
                var t;
                return e.setHardwareH264(null === (t = i.hardwareEncoding) || void 0 === t || t);
            }),
                eg.setH264Enabled(i.hardwareEncoding || i.openH264),
                eg.setAv1Enabled(null === (t = i.hardwareEncoding) || void 0 === t || t),
                eg.setH265Enabled(null === (n = i.hardwareEncoding) || void 0 === n || n);
        },
        APP_STATE_UPDATE: function (e) {
            let { state: t } = e,
                n = D.Z.isEnabled();
            if (t === eu.$7l.BACKGROUND && eU && !n) (ek = !0), e9(!1);
            else {
                if (t !== eu.$7l.ACTIVE || !ek) return !1;
                (ek = !1), e9(!0);
            }
            return !0;
        },
        SET_CHANNEL_BITRATE: function (e) {
            eg.eachConnection((t) => t.setBitRate(e.bitrate));
        },
        SET_VAD_PERMISSION: function (e) {
            let { hasPermission: t } = e,
                n = !t;
            if (n === eM) return !1;
            (eM = n), eg.eachConnection(e8);
        },
        SET_NATIVE_PERMISSION: function (e) {
            let { state: t, permissionType: n } = e,
                r = t === ed.PQ.ACCEPTED;
            switch (n) {
                case ed.Eu.AUDIO:
                    (eq = !0), eg.eachConnection(e8);
                    break;
                case ed.Eu.CAMERA:
                    !r && eU && e9(!1);
                    break;
                default:
                    return !1;
            }
        },
        SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
            eg.eachConnection((t) => t.applyVideoQualityMode(e.mode));
        },
        MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
            let { enabled: t } = e,
                n = ts({ aecDumpEnabled: t });
            eg.setAecDump(n.aecDumpEnabled);
        },
        CHANNEL_DELETE: function () {
            if ((!eU && null == a) || null != ea.Z.getRTCConnectionId()) return !1;
            e9(!1, null);
        },
        MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
            return !!eK && ((eK = !1), !0);
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
            let { settings: t } = e;
            eg.applyMediaFilterSettings(t).finally(() => {
                (ez = !1), r.emitChange();
            });
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
            ez = !0;
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
            ez = !1;
        },
        USER_SETTINGS_PROTO_UPDATE: function (e) {
            let {
                settings: { type: t },
                local: n,
                wasSaved: r
            } = e;
            if (t !== e_.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
            td(!0);
        },
        CLIPS_INIT: function (e) {
            let { sourceId: t, applicationName: n, quality: i } = e,
                a = R.Z.isDecoupledGameClippingEnabled(),
                o = R.Z.getSettings().decoupledClipsEnabled;
            if (!a || !o || null == A.Z) return;
            let l = null,
                u = null,
                c = K.Z.getPidFromDesktopSource(t);
            ({ soundshareId: l, soundshareSession: u } = t_(c));
            let d = {
                desktopSource: {
                    id: t,
                    sourcePid: c,
                    soundshareId: l,
                    soundshareSession: u
                },
                quality: i
            };
            null != s && s.desktopSource.id !== d.desktopSource.id && (eg.setClipsSource(null), (0, q.isWindows)() && null != s.desktopSource.soundshareId && N.pn(s.desktopSource.soundshareId)), null != l && tE(l, u), (s = d);
            let _ = e4(),
                E = e5().videoHook;
            eg.setClipsSource({
                desktopDescription: {
                    id: s.desktopSource.id,
                    soundshareId: s.desktopSource.soundshareId,
                    useVideoHook: E,
                    useGraphicsCapture: tn(),
                    useLoopback: r.getExperimentalSoundshare(),
                    useQuartzCapturer: !0,
                    allowScreenCaptureKit: tr(),
                    videoHookStaleFrameTimeoutMs: 500,
                    graphicsCaptureStaleFrameTimeoutMs: eT,
                    hdrCaptureMode: _
                },
                quality: i,
                applicationName: n
            });
        },
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            !1 === t.decoupledClipsEnabled && ((s = null), eg.setClipsSource(null));
        },
        MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
            e1 = e.enabled;
        }
    })),
    (t.Z = r);
