let r, i, a, s;
n(47120), n(724458), n(773603), n(653041), n(337869);
var o,
    l,
    u,
    c = n(512722),
    d = n.n(c),
    f = n(392711),
    _ = n.n(f),
    h = n(553813),
    p = n.n(h),
    m = n(404097),
    g = n(442837),
    E = n(46973),
    v = n(433517),
    I = n(846519),
    S = n(570140),
    T = n(579806),
    b = n(887278),
    y = n(547727),
    A = n(435064),
    N = n(779618),
    C = n(710845),
    R = n(811660),
    O = n(353926),
    D = n(646047),
    L = n(594190),
    x = n(502286),
    w = n(12898),
    M = n(294473),
    P = n(706629),
    k = n(166884),
    U = n(998594),
    G = n(14457),
    B = n(529558),
    Z = n(111672),
    F = n(441167),
    V = n(338336),
    j = n(751571),
    H = n(725380),
    Y = n(581883),
    W = n(626135),
    K = n(12647),
    z = n(70956),
    q = n(358085),
    Q = n(747268),
    X = n(960048),
    J = n(998502),
    $ = n(13140),
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
    ef = n(526761),
    e_ = n(65154),
    eh = n(388032);
function ep(e, t, n) {
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
let em = new C.Z('MediaEngineStore');
((u = o || (o = {}))[(u.DETACHED = 0)] = 'DETACHED'), (u[(u.WAITING = 1)] = 'WAITING'), (u[(u.ATTACHED = 2)] = 'ATTACHED'), (u[(u.STARTED = 3)] = 'STARTED'), (u[(u.PLAYING = 4)] = 'PLAYING'), (u[(u.SILENCE = 5)] = 'SILENCE');
let eg = 'MediaEngineStore',
    eE = {
        left: 1,
        right: 1
    },
    ev = 5 * z.Z.Millis.SECOND,
    eI = 2 * z.Z.Millis.SECOND;
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
        inputVolume: e_.Qx,
        outputVolume: e_.Qx,
        inputDeviceId: e_.w5,
        outputDeviceId: e_.w5,
        videoDeviceId: e_.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: eT.supports(e_.AN.VIDEO_HOOK),
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
let eT = (0, E.Mt)((0, E.jj)()),
    eb = {},
    ey = new Set([e_.Yn.DEFAULT]),
    eA = eT.supports(e_.AN.AUTO_ENABLE),
    eN = !1,
    eC = e_.Yn.STREAM,
    eR = { [e_.w5]: tc('No Input Devices') },
    eO = { [e_.w5]: tc('No Output Devices') },
    eD = { [e_.w5]: tc('No Video Devices') },
    eL = !1,
    ex = !1,
    ew = !1,
    eM = !1,
    eP = !1,
    ek = e_.Av,
    eU = !1,
    eG = !1,
    eB = !1,
    eZ = new I.V7(),
    eF = !1,
    eV = !1,
    ej = null,
    eH = !1,
    eY = !1,
    eW = !1,
    eK = !1,
    ez = !1,
    eq = null,
    eQ = !1,
    eX = !1,
    eJ = !1;
j.Z.hasPermission(ed.Eu.AUDIO, { showAuthorizationError: !1 }), j.Z.hasPermission(ed.Eu.CAMERA, { showAuthorizationError: !1 });
let e$ = new Set(),
    e0 = !1,
    e1 = !1,
    e2 = {},
    e3 = null,
    e4 = !0,
    e6 = {},
    e5 = 5 * z.Z.Millis.SECOND;
function e7() {
    var e, t;
    return null !== (t = null === (e = eo.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t ? 'always' : Q.Z === m.R.CANARY ? 'permittedDevicesOnly' : 'never';
}
function e8() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.DEFAULT,
        t = eb[e];
    return null == t && ((t = eS()), (eb[e] = t)), t;
}
function e9(e) {
    let t = e8(e.context);
    e.setInputMode(t.mode, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: t.modeOptions.autoThreshold,
        vadUseKrisp:
            t.modeOptions.vadUseKrisp &&
            (function () {
                return ez || !1;
            })(),
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: t.modeOptions.delay
    });
}
function te(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.Qx;
    return _().clamp(e, 0, t);
}
function tt(e) {
    let t = e8(e.context),
        n = !eA || t.mute || t.deaf;
    e.context === e_.Yn.DEFAULT ? (n = n || eL || ex || ew || !j.Z.didHavePermission(ed.Eu.AUDIO)) : e.context === e_.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === e_.Yn.DEFAULT && y.Z.updateNativeMute();
}
function tn() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        o = a;
    if (((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == s ? void 0 : null === (e = s.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, q.isWindows)() && b.pn(o.desktopSource.soundshareId), eT.setGoLiveSource(null, eC)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == s ? void 0 : null === (t = s.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == s ? void 0 : null === (n = s.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eT.setGoLiveSource(null, eC), (eP || i) && ((ek = (eP = i) ? tf(eD, e8().videoDeviceId) : e_.Av), eT.setVideoInputDevice(ek)), (a = s), null != s)) {
        let e = {
            resolution: s.quality.resolution,
            frameRate: s.quality.frameRate
        };
        if (null != s.desktopSource) {
            let t = e7(),
                n = e8().videoHook;
            eT.setGoLiveSource(
                {
                    desktopDescription: {
                        id: s.desktopSource.id,
                        soundshareId: s.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: ta(),
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: ts(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: ev,
                        hdrCaptureMode: t
                    },
                    quality: e
                },
                eC
            );
        }
        null != s.cameraSource &&
            eT.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: s.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: s.cameraSource.audioDeviceGuid
                    },
                    quality: e
                },
                eC
            );
    }
}
function tr(e, t, n, r) {
    var i;
    let a = null !== (i = null == e ? void 0 : e.soundshareSession) && void 0 !== i ? i : '';
    null == e6[a] && (e6[a] = new Set());
    let s = null != t && !e6[a].has(t);
    s && e6[a].add(t),
        (null == t || s) &&
            W.default.track(eu.rMx.SOUNDSHARE_FAILED, {
                soundshare_failure_code: t,
                soundshare_failure_reason: n,
                soundshare_failure_will_retry: r,
                ...(0, x.Z)(e)
            });
}
function ti(e) {
    let t = e8(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(en.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(en.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(en.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, q.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function ta() {
    return (0, q.isWindows)() && p().satisfies(null === T.Z || void 0 === T.Z ? void 0 : T.Z.os.release, ec.nz);
}
function ts() {
    return (0, q.isMac)() && eT.supports(e_.AN.SCREEN_CAPTURE_KIT) && p().satisfies(null === T.Z || void 0 === T.Z ? void 0 : T.Z.os.release, ec.C7);
}
let to = new (class {
    start() {
        !this.started && ((this.started = !0), eT.on(E.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eT.removeListener(E.aB.Silence, this.handleSilence),
            S.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = e8();
        !eH && ea.Z.getState() === eu.hes.RTC_CONNECTED && e.mode === eu.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        ep(this, 'stateChangeTimeout', void 0),
            ep(this, 'noVoiceTimeout', 5000),
            ep(this, 'voiceTimeout', 1500),
            ep(this, 'started', !1),
            ep(this, 'handleSilence', (e) => {
                let t = !e;
                null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout),
                    (this.stateChangeTimeout = setTimeout(
                        () => {
                            (this.stateChangeTimeout = null),
                                this.started &&
                                    (S.Z.dispatch({
                                        type: 'AUDIO_INPUT_DETECTED',
                                        inputDetected: t
                                    }),
                                    e && (eY = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout
                    ));
            });
    }
})();
function tl(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = e8(t);
    return Object.assign(r, e), !__OVERLAY__ && n && v.K.set(eg, eb), r;
}
function tu() {
    !eA &&
        eT.enable().then(() =>
            S.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function tc(e) {
    return {
        id: e_.w5,
        index: 0,
        name: e,
        disabled: !0
    };
}
function td(e, t) {
    if (0 === e.length) {
        let e = tc(t);
        return { [e.id]: e };
    }
    return _()(e)
        .map((e) => ({
            id: e.id,
            index: e.index,
            name: e.name,
            disabled: !1
        }))
        .keyBy('id')
        .value();
}
function tf(e, t) {
    var n;
    let r = null !== (n = e[t]) && void 0 !== n ? n : _()(e).values().first();
    return null != r ? r.id : t;
}
function t_() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null !== (e = Y.Z.settings.audioContextSettings) && void 0 !== e
                ? e
                : {
                      user: {},
                      stream: {}
                  };
    for (let e of Object.keys(r)) {
        let i = e === ef.u0.USER ? e_.Yn.DEFAULT : e_.Yn.STREAM,
            a = i === e_.Yn.STREAM ? e_.Yh : e_.Qx,
            s = null !== (t = r[e]) && void 0 !== t ? t : {},
            { localMutes: o, localVolumes: l } = e8(i);
        for (let [e, t] of Object.entries(s))
            null == (0, H.Ky)(i, e) &&
                (t.muted ? (o[e] = !0) : delete o[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                eT.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(o), ...Object.keys(l)]))
                null == s[e] &&
                    (delete o[e],
                    delete l[e],
                    eT.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        tl(
            {
                localMutes: o,
                localVolumes: l
            },
            i
        );
    }
}
function th(e) {
    if (null == r)
        return (
            em.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
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
function tp(e, t) {
    (0, q.isWindows)() &&
        b.YT(e, { soundshare_session: t }).then((t) => {
            null != t &&
                !L.ZP.shouldContinueWithoutElevatedProcessForPID(e) &&
                S.Z.wait(() => {
                    S.Z.dispatch({
                        type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                        errorMessage: t
                    });
                });
        });
}
function tm() {
    let e = e_.Yn.DEFAULT,
        { videoToggleStateMap: t } = e8(e);
    for (let [e, n] of Object.entries(t)) n === eu.ZUi.AUTO_PROBING && delete t[e];
    tl({ videoToggleStateMap: t }, e, !1);
}
function tg(e) {
    let t = e8();
    W.default.track(eu.rMx.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e
    });
}
function tE(e) {
    let t = tl({ sidechainCompression: e });
    eT.setSidechainCompression(t.sidechainCompression);
}
function tv() {
    let e = e8(),
        t = e.inputDeviceId,
        n = en.Z.hasEchoCancellation(t) || e.echoCancellation,
        r = en.Z.hasNoiseSuppression(t) || e.noiseSuppression,
        i = en.Z.hasAutomaticGainControl(t) || e.automaticGainControl,
        a = e.noiseCancellation;
    eT.setLoopback(e1, {
        echoCancellation: n,
        noiseSuppression: r,
        automaticGainControl: i,
        noiseCancellation: a
    });
}
function tI() {
    return ez || !1;
}
async function tS() {
    try {
        await J.ZP.ensureModule('discord_krisp'), J.ZP.requireModule('discord_krisp'), (ez = !0), r.emitChange();
    } catch (t) {
        em.warn('Failed to load Krisp module: '.concat(t.message)), X.Z.captureException(t);
        let e = e_.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? e_.H3.INITIALIZED : n;
        }
        W.default.track(eu.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tl({ noiseCancellation: !1 });
    } finally {
        eK = !1;
    }
}
function tT(e) {
    e === e_.iA.AUTOMATIC ? (tl({ automaticAudioSubsystem: !0 }), tb()) : (tl({ automaticAudioSubsystem: !1 }), eT.setAudioSubsystem(e));
}
function tb() {
    let { enabled: e } = G.I.getCurrentConfig({ location: 'interpretAutomaticAudioSubsystem' });
    e ? eT.setAudioSubsystem(e_.iA.EXPERIMENTAL) : eT.setAudioSubsystem(e_.iA.STANDARD);
}
function ty(e) {
    let { section: t } = e;
    return t === eu.oAB.VOICE && tu(), !1;
}
class tA extends (l = g.ZP.Store) {
    initialize() {
        eT.on(E.aB.Connection, (e) => {
            var t, n;
            e9(e), tt(e), ti(e);
            let i = e8();
            e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers), e.setQoS(i.qos), e.setExperimentalEncoders(i.experimentalEncoders), e.setHardwareH264(null === (t = i.hardwareEncoding) || void 0 === t || t), e.setSoftwareH264(null === (n = i.openH264) || void 0 === n || n);
            let s = ea.Z.getGuildId(),
                {
                    muteBeforeProcessing: o,
                    pttBeforeProcessing: l,
                    skipEncode: u
                } = (null != s ? P.Z : M.Z).getCurrentConfig(
                    {
                        location: 'setupMediaEngine',
                        ...(null != s && { guildId: s })
                    },
                    { autoTrackExposure: !0 }
                );
            o && e.setExperimentFlag(e_.V8.MUTE_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(e_.V8.PTT_BEFORE_PROCESSING, !0), u && e.setExperimentFlag(e_.V8.SKIP_ENCODE, !0);
            e.setExperimentFlag(e_.V8.RESET_DECODER_ON_ERRORS, !0), e.setExperimentFlag(e_.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
            if (e.context === e_.Yn.STREAM) {
                let { simulcastEnabled: t, lqStreamBitrate: n } = k.Z.getConfig();
                e.configureGoLiveSimulcast(t, n);
            }
            if (((0, q.isWindows)() ? ((null == e3 ? void 0 : e3.startsWith('NVIDIA')) ? e.setExperimentFlag(e_.V8.SIGNAL_AV1, !0) : (null == e3 ? void 0 : e3.startsWith('AMD')) && w.Z.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 }).signalAV1Support ? e.setExperimentFlag(e_.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(e_.V8.SIGNAL_AV1_DECODE, !0)) : ((0, q.isMac)() || (0, q.isLinux)()) && e.setExperimentFlag(e_.V8.SIGNAL_AV1_DECODE, !0), (0, q.isWindows)() && e.setExperimentFlag(e_.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), eT.setHasFullbandPerformance((0, R.b)()), e.setRemoteAudioHistory(0), (0, N.Z)(r))) {
                let t = A.Z.getSettings();
                e.setExperimentFlag(e_.V8.STREAMER_CLIP, t.clipsEnabled);
                let { enableViewerClipping: n } = F.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
                e.setViewerSideClip(n), e.setClipsKeyFrameInterval(e_.ux);
            }
            for (let t of ((i = e8(e.context)), e.setPostponeDecodeLevel(100), Object.keys(i.localMutes))) t !== ee.default.getId() && e.setLocalMute(t, i.localMutes[t]);
            for (let t of Object.keys(i.localVolumes)) t !== ee.default.getId() && e.setLocalVolume(t, i.localVolumes[t]);
            for (let t of Object.keys(i.localPans)) {
                let n = i.localPans[t];
                e.setLocalPan(t, n.left, n.right);
            }
            for (let t of Object.keys(i.disabledLocalVideos)) e.setLocalVideoDisabled(t, i.disabledLocalVideos[t]);
            e.on(E.Sh.Speaking, (t, n) => {
                S.Z.dispatch({
                    type: 'SPEAKING',
                    context: e.context,
                    userId: t,
                    speakingFlags: n
                });
            }),
                e.context === e_.Yn.DEFAULT &&
                    ((eG = !1),
                    (eB = !1),
                    e.on(E.Sh.SpeakingWhileMuted, () => {
                        (eG = !0),
                            (eB = !0),
                            r.emitChange(),
                            eZ.stop(),
                            eZ.start(eI, () => {
                                (eB = !1), r.emitChange();
                            });
                    })),
                e.on(E.Sh.DesktopSourceEnd, () => {
                    S.Z.dispatch({
                        type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                        settings: { context: e.context }
                    });
                }),
                e.on(E.Sh.SoundshareAttached, () => {
                    (null == a ? void 0 : a.desktopSource) != null && W.default.track(eu.rMx.SOUNDSHARE_ATTACHED, (0, x.Z)(null == a ? void 0 : a.desktopSource));
                }),
                e.on(E.Sh.SoundshareFailed, (e) => {
                    let { failureCode: t, failureReason: n, willRetry: r } = e;
                    tr(null == a ? void 0 : a.desktopSource, t, n, r);
                }),
                e.on(E.Sh.SoundshareSpeaking, () => {
                    (null == a ? void 0 : a.desktopSource) != null && (W.default.track(eu.rMx.SOUNDSHARE_TRANSMITTING, (0, x.Z)(null == a ? void 0 : a.desktopSource)), null != ei.Z.getHookError(eu.K3D.SOUND) && S.Z.wait(() => S.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
                });
            let c = new I.V7();
            e.on(E.Sh.SoundshareTrace, (e) => {
                switch (e.type) {
                    case 'soundshare_attach_requested':
                        c.start(e5, () => {
                            S.Z.dispatch({
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
                            (tr(null == a ? void 0 : a.desktopSource, n, t, r),
                            !r &&
                                (c.stop(),
                                S.Z.wait(() =>
                                    S.Z.dispatch({
                                        type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                                        errorMessage: t,
                                        errorCode: n
                                    })
                                )));
                        break;
                    case 'soundshare_state_transition':
                        4 === e.newState && (c.stop(), S.Z.wait(() => S.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
                }
            }),
                e.on(E.Sh.InteractionRequired, (e) => {
                    S.Z.dispatch({
                        type: 'MEDIA_ENGINE_INTERACTION_REQUIRED',
                        required: e
                    });
                }),
                e.on(E.Sh.VideoHookInitialize, (e, t, n, r, i, s) => {
                    (null == a ? void 0 : a.desktopSource) != null &&
                        W.default.track(eu.rMx.VIDEOHOOK_INITIALIZED, {
                            backend: e,
                            format: t,
                            framebuffer_format: n,
                            sample_count: r,
                            success: i,
                            reinitialization: s,
                            ...(0, x.Z)(null == a ? void 0 : a.desktopSource)
                        });
                }),
                e.on(E.Sh.NoiseCancellationError, (e) => {
                    em.warn('noisecancellererror event: '.concat(e)),
                        (eQ = !0),
                        W.default.track(eu.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                        S.Z.dispatch({
                            type: 'AUDIO_SET_NOISE_SUPPRESSION',
                            enabled: !0
                        }),
                        S.Z.dispatch({
                            type: 'AUDIO_SET_NOISE_CANCELLATION',
                            enabled: !1
                        }),
                        S.Z.dispatch({
                            type: 'MEDIA_ENGINE_NOISE_CANCELLATION_ERROR',
                            code: e
                        });
                }),
                e.on(E.Sh.VoiceActivityDetectorError, (e) => {
                    em.warn('voiceactivitydetectorerror event: '.concat(e)),
                        W.default.track(eu.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                        S.Z.dispatch({
                            type: 'AUDIO_SET_MODE',
                            context: e_.Yn.DEFAULT,
                            mode: eu.pM4.VOICE_ACTIVITY,
                            options: {
                                ...e8(e_.Yn.DEFAULT).modeOptions,
                                vadUseKrisp: !1
                            }
                        }),
                        S.Z.dispatch({
                            type: 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR',
                            code: e
                        });
                }),
                e.on(E.Sh.SdpError, (e, t, n, r) => {
                    Q.Z === m.R.CANARY &&
                        W.default.track(eu.rMx.SDP_ERROR, {
                            operation: e,
                            error: t,
                            type: n,
                            sdp: r
                        });
                }),
                e.on(E.Sh.VideoState, (t) => {
                    S.Z.dispatch({
                        type: 'MEDIA_ENGINE_VIDEO_STATE_CHANGED',
                        videoState: t,
                        context: e.context
                    });
                }),
                e.on(E.Sh.Destroy, () => {
                    c.stop();
                }),
                e.setBitRate(et.Z.bitrate),
                e.applyVideoQualityMode(el.Z.mode);
        }),
            eT.on(E.aB.DeviceChange, (e, t, n) => {
                S.Z.dispatch({
                    type: 'MEDIA_ENGINE_DEVICES',
                    inputDevices: e,
                    outputDevices: t,
                    videoDevices: n
                });
            }),
            eT.on(E.aB.VolumeChange, (e, t) => {
                S.Z.dispatch({
                    type: 'AUDIO_VOLUME_CHANGE',
                    inputVolume: e,
                    outputVolume: t
                });
            }),
            eT.on(E.aB.DesktopSourceEnd, () => {
                S.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: null
                });
            }),
            eT.on(E.aB.AudioPermission, (e) => {
                (eJ = !0),
                    S.Z.dispatch({
                        type: 'MEDIA_ENGINE_PERMISSION',
                        kind: 'audio',
                        granted: e
                    });
            }),
            eT.on(E.aB.VideoPermission, (e) => {
                S.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'video',
                    granted: e
                });
            }),
            eT.on(E.aB.WatchdogTimeout, async () => {
                let e;
                try {
                    await K.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
                } catch (t) {
                    'number' == typeof t.status && (e = t.status);
                }
                em.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), W.default.track(eu.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
            }),
            eT.on(E.aB.VideoInputInitialized, (e) => {
                W.default.track(eu.rMx.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * z.Z.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy
                });
            }),
            eT.on(E.aB.ClipsRecordingRestartNeeded, () => {
                S.Z.dispatch({ type: 'CLIPS_RESTART' });
            }),
            eT.on(E.aB.ClipsInitFailure, (e, t) => {
                S.Z.wait(() => {
                    S.Z.dispatch({
                        type: 'CLIPS_INIT_FAILURE',
                        errMsg: e,
                        applicationName: t
                    });
                });
            }),
            eT.on(E.aB.ClipsRecordingEnded, (e, t) => {
                var n, r;
                (null == s ? void 0 : null === (n = s.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == a ? void 0 : null === (r = a.desktopSource) || void 0 === r ? void 0 : r.soundshareId) !== t && b.pn(t), (s = null));
            }),
            eT.on(E.aB.NativeScreenSharePickerUpdate, (e) => {
                U.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerUpdate' }),
                    S.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                        existing: e
                    });
            }),
            eT.on(E.aB.NativeScreenSharePickerCancel, (e) => {
                U.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerCancel' }),
                    S.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                        existing: e
                    });
            }),
            eT.on(E.aB.NativeScreenSharePickerError, (e) => {
                U.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerError' }),
                    S.Z.dispatch({
                        type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                        error: e
                    });
            }),
            eT.on(E.aB.AudioDeviceModuleError, (e, t, n) => {
                W.default.track(eu.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                    audio_device_module: e,
                    code: t,
                    device_name: n
                });
            }),
            eT.setOnVideoContainerResized((e, t, n) => {
                S.Z.wait(() =>
                    S.Z.dispatch({
                        type: 'VIDEO_SIZE_UPDATE',
                        streamId: e,
                        pixelCount: t * n
                    })
                );
            }),
            to.reset(),
            (0, es.q)().then((e) => {
                null != e && (e3 = e.gpu_brand);
            }),
            !(function () {
                var e;
                let t = v.K.get('audio');
                null != t && (v.K.set(eg, { [e_.Yn.DEFAULT]: t }), v.K.remove('audio')),
                    (eb = null !== (e = v.K.get(eg)) && void 0 !== e ? e : {}),
                    _().each(eb, (e) => {
                        if ((_().defaultsDeep(e, eS()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, $.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)), !e.qosMigrated && ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                            var t;
                            (e.vadThrehsoldMigrated = !0), (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60);
                        }
                        (0, q.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : 1 !== e.ncUseKrispSettingVersion && ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), 1 !== e.hardwareEnabledVersion && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = 1)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
                    }),
                    (function () {
                        var e, t, n;
                        let r = e8();
                        eT.setAudioInputDevice(r.inputDeviceId), eT.setAudioOutputDevice(r.outputDeviceId), tn(), eT.setInputVolume(r.inputVolume), eT.setOutputVolume(r.outputVolume), eT.setH264Enabled(null === (e = r.hardwareEncoding) || void 0 === e || e || r.openH264), eT.setAv1Enabled(null === (t = r.hardwareEncoding) || void 0 === t || t), eT.setH265Enabled(null === (n = r.hardwareEncoding) || void 0 === n || n), eT.setAecDump(r.aecDumpEnabled), eT.setSidechainCompression(r.sidechainCompression), eT.setSidechainCompressionStrength(r.sidechainCompressionStrength);
                    })();
            })(),
            ((0, q.isWindows)() || (0, q.isLinux)() || ((0, q.isMac)() && p().satisfies(null === T.Z || void 0 === T.Z ? void 0 : T.Z.os.release, '>=21.0.0'))) && !__OVERLAY__ && !eK && !ez ? ((eK = !0), tS()) : (0, q.isWeb)() && eT.supports(e_.AN.NOISE_CANCELLATION) ? ((ez = !0), r.emitChange()) : (0, q.isWeb)() && tl({ noiseCancellation: !1 }),
            tm(),
            (e2 = {
                [e_.AN.VIDEO]: eT.supports(e_.AN.VIDEO),
                [e_.AN.DESKTOP_CAPTURE]: eT.supports(e_.AN.DESKTOP_CAPTURE),
                [e_.AN.HYBRID_VIDEO]: eT.supports(e_.AN.HYBRID_VIDEO)
            }),
            this.waitFor(ee.default, en.Z, er.Z, ei.Z, ea.Z, L.ZP, j.Z.storage, Y.Z, O.Z, A.Z);
    }
    supports(e) {
        return eT.supports(e);
    }
    supportsInApp(e) {
        return e2[e] || eT.supports(e);
    }
    isSupported() {
        return eT.supported();
    }
    isExperimentalEncodersSupported() {
        return eT.supports(e_.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eT.supports(e_.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return ez || !1;
    }
    isNoiseCancellationError() {
        return eQ;
    }
    isAutomaticGainControlSupported() {
        return eT.supports(e_.AN.AUTOMATIC_GAIN_CONTROL);
    }
    isAdvancedVoiceActivitySupported() {
        return ez || !1;
    }
    isAecDumpSupported() {
        return eT.supports(e_.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eT.supports(e_.AN.VIDEO) && eT.supports(e_.AN.SIMULCAST);
    }
    getAecDump() {
        return e8().aecDumpEnabled;
    }
    getMediaEngine() {
        return eT;
    }
    getVideoComponent() {
        return eT.supports(e_.AN.DIRECT_VIDEO) && eT.setUseDirectVideo(!0), eT.Video;
    }
    getCameraComponent() {
        return eT.supports(e_.AN.DIRECT_VIDEO) && eT.setUseDirectVideo(!0), eT.Camera;
    }
    isEnabled() {
        return eA;
    }
    isMute() {
        return this.isSelfMute() || eL;
    }
    isDeaf() {
        return this.isSelfDeaf() || eM;
    }
    hasContext(e) {
        return null != eb[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.DEFAULT;
        return e === e_.Yn.DEFAULT && ex;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.DEFAULT;
        return !this.isEnabled() || e8(e).mute || !j.Z.didHavePermission(ed.Eu.AUDIO) || this.isSelfDeaf(e) || (e === e_.Yn.DEFAULT && ew);
    }
    shouldSkipMuteUnmuteSound() {
        return eU;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        eU = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && en.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return e4;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.DEFAULT;
        return !this.isSupported() || e8(e).deaf;
    }
    isVideoEnabled() {
        return eP && eV;
    }
    isVideoAvailable() {
        return Object.values(eD).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.STREAM;
        return eC === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.STREAM;
        return eC === t && null != a && (null === (e = a.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.Yn.DEFAULT;
        return e !== ee.default.getId() && (e8(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eT.supports(e_.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.Yn.DEFAULT;
        return null !== (t = e8(n).disabledLocalVideos[e]) && void 0 !== t && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.Yn.DEFAULT;
        return null !== (t = e8(n).videoToggleStateMap[e]) && void 0 !== t ? t : eu.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.Yn.DEFAULT;
        return t === e_.Yn.DEFAULT && e$.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.DEFAULT;
        return e === e_.Yn.DEFAULT && e$.size > 0;
    }
    isMediaFilterSettingLoading() {
        return eX;
    }
    isNativeAudioPermissionReady() {
        return eJ;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return eC;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.Yn.DEFAULT,
            n = e8(t).localPans[e];
        return null != n ? n : eE;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e_.Yn.DEFAULT,
            n = t === e_.Yn.STREAM ? e_.Yh : e_.Qx,
            r = e8(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return e8().inputVolume;
    }
    getOutputVolume() {
        return e8().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.DEFAULT;
        return e8(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.DEFAULT;
        return e8(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            _().each(eb, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i }
                } = t;
                r === eu.pM4.PUSH_TO_TALK && ey.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return tf(eR, e8().inputDeviceId);
    }
    getOutputDeviceId() {
        return tf(eO, e8().outputDeviceId);
    }
    getVideoDeviceId() {
        return tf(eD, e8().videoDeviceId);
    }
    getInputDevices() {
        return eR;
    }
    getOutputDevices() {
        return eO;
    }
    getVideoDevices() {
        return eD;
    }
    getEchoCancellation() {
        let e = e8();
        return en.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e8().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return e8().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return e8().h265Enabled;
    }
    getLoopback() {
        return eT.getLoopback();
    }
    getNoiseSuppression() {
        let e = e8();
        return en.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = e8();
        return en.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getNoiseCancellation() {
        return e8().noiseCancellation;
    }
    getExperimentalEncoders() {
        return e8().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null === (e = e8().hardwareEncoding) || void 0 === e || e;
    }
    getEnableSilenceWarning() {
        return e8().silenceWarning;
    }
    getDebugLogging() {
        return eT.getDebugLogging();
    }
    getQoS() {
        return e8().qos;
    }
    getAttenuation() {
        return e8().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return e8().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return e8().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return e8().automaticAudioSubsystem ? e_.iA.AUTOMATIC : eT.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eT.getMLSSigningKey(e, t);
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.DEFAULT;
        return e8(e);
    }
    getState() {
        return {
            settingsByContext: eb,
            inputDevices: eR,
            outputDevices: eO,
            appSupported: e2,
            krispModuleLoaded: ez,
            goLiveSource: a,
            goLiveContext: eC
        };
    }
    getInputDetected() {
        return ej;
    }
    getNoInputDetectedNotice() {
        return eY;
    }
    getPacketDelay() {
        return q.isPlatformEmbedded || this.getMode() !== eu.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eT.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eN;
    }
    getVideoHook() {
        return e8().videoHook;
    }
    supportsVideoHook() {
        return eT.supports(e_.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = e8().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return eT.supports(e_.AN.EXPERIMENTAL_SOUNDSHARE) && p().satisfies(null === T.Z || void 0 === T.Z ? void 0 : T.Z.os.release, ec.I9);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = e8().useSystemScreensharePicker,
            n =
                (0, q.isLinux)() ||
                U.Z.getCurrentConfig(
                    { location: 'getUseSystemScreensharePicker' },
                    {
                        disable: !e,
                        autoTrackExposure: !1
                    }
                ).useSystemPickerInModalByDefault;
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        let e = eT.supports(e_.AN.NATIVE_SCREENSHARE_PICKER);
        return U.Z.getCurrentConfig(
            { location: 'supportsSystemScreensharePicker' },
            {
                disable: !e,
                autoTrackExposure: !1
            }
        ).enableSystemPicker;
    }
    getOpenH264() {
        return e8().openH264;
    }
    getEverSpeakingWhileMuted() {
        return eG;
    }
    getSpeakingWhileMuted() {
        return eB;
    }
    supportsScreenSoundshare() {
        return ((0, q.isMac)() && eT.supports(e_.AN.SOUNDSHARE) && p().satisfies(null === T.Z || void 0 === T.Z ? void 0 : T.Z.os.release, ec.yG) && ts()) || ((0, q.isWindows)() && eT.supports(e_.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare());
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_.Yn.DEFAULT,
            t = this.supports(e_.AN.VIDEO)
                ? [
                      {
                          rid: '100',
                          type: e === e_.Yn.DEFAULT ? e_.Tr.VIDEO : e_.Tr.SCREEN,
                          quality: 100
                      }
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === e_.Yn.DEFAULT ||
                    (function () {
                        var e;
                        let t = (null === (e = er.Z.getChannel(eq)) || void 0 === e ? void 0 : e.type) === eu.d4z.GUILD_STAGE_VOICE,
                            n = r.getHardwareEncoding();
                        return !t && n && k.Z.simulcastEnabled();
                    })()) &&
                t.push({
                    rid: '50',
                    type: e === e_.Yn.DEFAULT ? e_.Tr.VIDEO : e_.Tr.SCREEN,
                    quality: 50
                }),
            t
        );
    }
    getSupportedSecureFramesProtocolVersion(e) {
        var t;
        let n = eT.getSupportedSecureFramesProtocolVersion(),
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
ep(tA, 'displayName', 'MediaEngineStore'),
    (r = new tA(S.Z, {
        VOICE_CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
            if ((r !== n && tn(i, null), null != t || null == n)) {
                eW = !1;
                return;
            }
            if (eW) return;
            eW = !0;
            let a = e8();
            (a.mute || a.deaf) &&
                (tl({
                    deaf: !1,
                    mute: !1
                }),
                eT.eachConnection(tt));
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => (i === t.sessionId ? ((eL = t.mute || t.suppress), (eM = t.deaf), eT.eachConnection(tt), tn(!(null != t.guildId && null != t.channelId && null != eq && eq !== t.channelId) && eP), (eq = t.channelId), !0) : (!__OVERLAY__ && t.userId === ee.default.getId() && null == ea.Z.getChannelId() && tn(!1, null), e)), !1);
        },
        CONNECTION_OPEN: function (e) {
            (i = e.sessionId),
                (eL = !1),
                (eM = !1),
                !(0, q.isWeb)() &&
                    Z.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                        let t = e8();
                        !e.sidechainAvailable && t.sidechainCompression ? (tl({ sidechainCompressionSettingVersion: 0 }), tE(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < 1 && (tl({ sidechainCompressionSettingVersion: 1 }), tE(e.sidechainEnabled));
                    });
            let t = e8();
            eT.supports(e_.AN.AUTOMATIC_AUDIO_SUBSYSTEM) ? (t.automaticAudioSubsystem && tb(), (0, q.isWindows)() && t.audioSubsystemSettingVersion < 2 && (tl({ audioSubsystemSettingVersion: 2 }), !t.automaticAudioSubsystem && eT.getAudioSubsystem() === e_.iA.STANDARD && tT(e_.iA.AUTOMATIC))) : tl({ automaticAudioSubsystem: !1 }), t_();
        },
        CONNECTION_CLOSED: function () {
            i = null;
        },
        RTC_CONNECTION_STATE: function (e) {
            switch (e.state) {
                case eu.hes.CONNECTING:
                    tu();
                    break;
                case eu.hes.RTC_CONNECTING:
                    (eH = !1), (eY = !1);
                    break;
                case eu.hes.RTC_CONNECTED:
                    tn();
                    break;
                case eu.hes.DISCONNECTED:
                    (function () {
                        if (0 === e$.size) return;
                        let e = e_.Yn.DEFAULT,
                            { disabledLocalVideos: t } = e8(e);
                        e$.forEach((n) => {
                            d()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], eT.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            e$.clear(),
                            tl({ disabledLocalVideos: t }, e, !1);
                    })(),
                        tm();
            }
            to.update();
        },
        AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
            let { mute: t } = e;
            (ex = t), eT.eachConnection(tt);
        },
        AUDIO_TOGGLE_SELF_MUTE: function (e) {
            let { context: t, skipMuteUnmuteSoundEffect: n } = e,
                { mute: r, deaf: i } = e8(t);
            if (t === e_.Yn.DEFAULT && (j.Z.requestPermission(ed.Eu.AUDIO), ew)) return !1;
            !(r = !i && !r) && (i = !1),
                n && (eU = !0),
                tl(
                    {
                        mute: r,
                        deaf: i
                    },
                    t
                ),
                eT.eachConnection(tt);
        },
        AUDIO_SET_SELF_MUTE: function (e) {
            let { context: t, mute: n } = e;
            tl({ mute: n }, t), eT.eachConnection(tt);
        },
        AUDIO_TOGGLE_SELF_DEAF: function (e) {
            let { context: t } = e;
            tl({ deaf: !e8(t).deaf }, t), eT.eachConnection(tt);
        },
        AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
            let { context: t, userId: n } = e;
            if (n === ee.default.getId()) return;
            let { localMutes: r } = e8(t);
            r[n] ? delete r[n] : (r[n] = !0), tl({ localMutes: r }, t), eT.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
        },
        AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
            var t, n, r, i, a, s, o;
            let { context: l, userId: u, videoToggleState: c, persist: f, isAutomatic: _ } = e;
            d()(!(f && _), 'These are not allowed to both be true.');
            let h = c === eu.ZUi.DISABLED,
                { disabledLocalVideos: p } = e8(l),
                m = null !== (t = p[u]) && void 0 !== t && t,
                g = e$.has(u),
                E = c === eu.ZUi.AUTO_ENABLED || c === eu.ZUi.MANUAL_ENABLED;
            em.info('disableVideo='.concat(h, ' currentlyDisabled=').concat(m, ' currentlyAutoDisabled=').concat(g, ', isVideoShown=').concat(E)), d()(!(g && !m), 'If you are auto-disabled, then you are also disabled.');
            let v = h !== m,
                I = l === e_.Yn.DEFAULT,
                S = _ && v && I,
                T = f && v && I;
            em.info('changed='.concat(v, ' isDefaultContext=').concat(I, ' isUpdateCausedByVideoHealthManager=').concat(S, ' isManualToggleByUser=').concat(T));
            let { videoToggleStateMap: b } = e8(l);
            if ((b[u] === eu.ZUi.AUTO_PROBING && c === eu.ZUi.AUTO_ENABLED && (0, V.Z)(u, h ? e_.fC.AUTO_DISABLE : e_.fC.AUTO_ENABLE, E), (b[u] = c), tl({ videoToggleStateMap: b }, l, f), c === eu.ZUi.AUTO_PROBING ? null === (n = ea.Z.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (r = ea.Z.getRTCConnection()) || void 0 === r || r.pauseStatsCollectionForUser(u, !1), !e0 && (em.info('isAutoDisableAllowed='.concat(e0, ' - disabling VideoHealthManager')), null === (a = ea.Z.getRTCConnection()) || void 0 === a || null === (i = a.getVideoHealthManager()) || void 0 === i || i.disable()), S)) {
                if ((!h && !g) || (h && !e0)) return;
                (0, V.Z)(u, h ? e_.fC.AUTO_DISABLE : e_.fC.AUTO_ENABLE, E), h ? e$.add(u) : e$.delete(u);
            } else T && (g && !h ? (em.info('disallowing auto-disable for this session because of manual override by user'), (e0 = !1), null === (o = ea.Z.getRTCConnection()) || void 0 === o || null === (s = o.getVideoHealthManager()) || void 0 === s || s.disable(), (0, V.Z)(u, e_.fC.MANUAL_REENABLE, E)) : (0, V.Z)(u, h ? e_.fC.MANUAL_DISABLE : e_.fC.MANUAL_ENABLE, E));
            I && !h && e$.delete(u),
                h ? (p[u] = !0) : delete p[u],
                tl({ disabledLocalVideos: p }, l, f),
                eT.eachConnection((e) => {
                    var t;
                    return e.setLocalVideoDisabled(u, null !== (t = p[u]) && void 0 !== t && t);
                }, l);
        },
        AUDIO_SET_LOCAL_VOLUME: function (e) {
            let { context: t, userId: n, volume: r } = e;
            if (n === ee.default.getId()) return;
            let i = t === e_.Yn.STREAM ? e_.Yh : e_.Qx,
                { localVolumes: a } = e8(t);
            r === i ? delete a[n] : (a[n] = r), tl({ localVolumes: a }, t), eT.eachConnection((e) => e.setLocalVolume(n, r), t);
        },
        AUDIO_SET_LOCAL_PAN: function (e) {
            let { context: t, userId: n, left: r, right: i } = e,
                { localPans: a } = e8(t);
            (a[n] = {
                left: r,
                right: i
            }),
                tl({ localPans: a }, t),
                eT.eachConnection((e) => e.setLocalPan(n, r, i), t);
        },
        AUDIO_SET_MODE: function (e) {
            let { context: t, mode: n, options: r } = e;
            tl(
                {
                    mode: n,
                    modeOptions: r
                },
                t
            ),
                eT.eachConnection(e9),
                to.update();
        },
        AUDIO_SET_INPUT_VOLUME: function (e) {
            let { volume: t } = e;
            tl({ inputVolume: te(t) }), eT.setInputVolume(t);
        },
        AUDIO_SET_OUTPUT_VOLUME: function (e) {
            let { volume: t } = e;
            tl({ outputVolume: t }), eT.setOutputVolume(t);
        },
        AUDIO_SET_INPUT_DEVICE: function (e) {
            let { id: t } = e;
            tl({ inputDeviceId: (t = tf(eR, t)) }), eT.setAudioInputDevice(t);
        },
        AUDIO_SET_OUTPUT_DEVICE: function (e) {
            let { id: t } = e;
            tl({ outputDeviceId: (t = tf(eO, t)) }), eT.setAudioOutputDevice(t);
        },
        AUDIO_SET_ECHO_CANCELLATION: function (e) {
            let t = tl({ echoCancellation: e.enabled });
            eT.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), tv(), tg(e.location);
        },
        AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
            tE(e.enabled);
        },
        AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
            let t = tl({ sidechainCompressionStrength: e.strength });
            eT.setSidechainCompressionStrength(t.sidechainCompressionStrength);
        },
        AUDIO_SET_LOOPBACK: function (e) {
            let { enabled: t } = e;
            return (e1 = t), tv();
        },
        AUDIO_SET_NOISE_SUPPRESSION: function (e) {
            let t = tl({ noiseSuppression: e.enabled });
            eT.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), tv(), tg(e.location);
        },
        AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
            let t = tl({ automaticGainControl: e.enabled });
            eT.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), tv(), tg(e.location);
        },
        AUDIO_SET_NOISE_CANCELLATION: function (e) {
            let t = tl({ noiseCancellation: e.enabled });
            eT.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), tv(), tg(e.location);
        },
        AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
            tl({ silenceWarning: e.enabled }), to.update();
        },
        AUDIO_SET_DEBUG_LOGGING: function (e) {
            eT.setDebugLogging(e.enabled);
        },
        MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
            tl({ videoHook: e.enabled });
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
            tl({ experimentalSoundshare2: e.enabled });
        },
        MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
            let { enabled: t } = e;
            tl({ useSystemScreensharePicker: t });
        },
        AUDIO_SET_ATTENUATION: function (e) {
            let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
                i = tl({
                    attenuation: t,
                    attenuateWhileSpeakingSelf: n,
                    attenuateWhileSpeakingOthers: r
                });
            eT.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
        },
        AUDIO_SET_QOS: function (e) {
            let { enabled: t } = e;
            tl({ qos: t }), eT.eachConnection((e) => e.setQoS(t));
        },
        MEDIA_ENGINE_DEVICES: function (e) {
            let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
            !(function (e) {
                let t = eR;
                if (((eR = td(e, eh.intl.string(eh.t['/QIjDA']))), !_().isEqual(eR, t))) {
                    let e = e8(),
                        t = tf(eR, e.inputDeviceId);
                    eT.setAudioInputDevice(t);
                }
            })(t),
                !(function (e) {
                    let t = eO;
                    if (((eO = td(e, eh.intl.string(eh.t.xlUg0t))), !_().isEqual(eO, t))) {
                        let e = e8(),
                            t = tf(eO, e.outputDeviceId);
                        eT.setAudioOutputDevice(t);
                    }
                })(n),
                !(function (e) {
                    eV = e.length > 0;
                    let t = eD;
                    if (((eD = td(e, eh.intl.string(eh.t.WKWARU))), eP && !_().isEqual(eD, t))) {
                        var n;
                        let e = void 0 !== eD[ek],
                            r = ek === e_.w5 && (null === (n = t[e_.w5]) || void 0 === n ? void 0 : n.disabled);
                        tn(e || r);
                    }
                })(r);
        },
        AUDIO_VOLUME_CHANGE: function (e) {
            let { inputVolume: t, outputVolume: n } = e;
            tl({
                inputVolume: te(t),
                outputVolume: n
            });
        },
        AUDIO_RESET: function () {
            v.K.remove(eg), location.reload();
        },
        AUDIO_INPUT_DETECTED: function (e) {
            let { inputDetected: t } = e;
            (ej = t), !eH && ej && ((eH = !0), to.update());
        },
        AUDIO_SET_SUBSYSTEM: function (e) {
            tT(e.subsystem);
        },
        MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
            (eA = e.enabled),
                e.unmute &&
                    tl({
                        mute: !1,
                        deaf: !1
                    }),
                eT.eachConnection(tt);
        },
        MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
            let { enabled: t } = e;
            j.Z.requestPermission(ed.Eu.CAMERA), tn(t);
        },
        MEDIA_ENGINE_PERMISSION: function (e) {
            let { kind: t, granted: n } = e;
            if (!n)
                switch (t) {
                    case 'audio':
                        (eA = !1), eT.eachConnection(tt);
                        break;
                    case 'video':
                        tn(!1);
                }
        },
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
            var t, n, r, i;
            let { settings: s } = e;
            if ((null == s ? void 0 : s.desktopSettings) != null) {
                let e = null,
                    r = null,
                    { sourceId: i, sound: o } = s.desktopSettings,
                    l = null !== (t = s.context) && void 0 !== t ? t : e_.Yn.DEFAULT,
                    u =
                        null !== (n = s.qualityOptions) && void 0 !== n
                            ? n
                            : {
                                  resolution: 720,
                                  frameRate: 30
                              },
                    c = !1 === o ? null : K.Z.getPidFromDesktopSource(i);
                q.isPlatformEmbedded && !0 === o && (({ soundshareId: e, soundshareSession: r } = th(c)), null != e && tp(e, r)),
                    !(function (e) {
                        if (e !== eC) null != a && eT.setGoLiveSource(null, eC), (eC = e);
                    })(l),
                    tn(l === e_.Yn.STREAM && eP, {
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
                let e = null !== (r = s.context) && void 0 !== r ? r : e_.Yn.DEFAULT,
                    { videoDeviceGuid: t, audioDeviceGuid: n } = s.cameraSettings,
                    a = e === e_.Yn.STREAM && eP,
                    o =
                        null !== (i = s.qualityOptions) && void 0 !== i
                            ? i
                            : {
                                  resolution: 720,
                                  frameRate: 30
                              };
                tn(a, {
                    cameraSource: {
                        videoDeviceGuid: t,
                        audioDeviceGuid: n
                    },
                    quality: {
                        resolution: o.resolution,
                        frameRate: o.frameRate
                    }
                });
            } else tn(eP, null);
        },
        MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
            let { id: t } = e;
            tl({ videoDeviceId: (t = tf(eD, t)) }), tn();
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function (e) {
            let t = tl({ experimentalEncoders: e.enabled });
            eT.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
        },
        MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
            return eN !== e.required && ((eN = e.required), !e.required && eT.interact(), !0);
        },
        USER_SETTINGS_MODAL_INIT: ty,
        USER_SETTINGS_MODAL_SET_SECTION: ty,
        CERTIFIED_DEVICES_SET: function () {
            return eT.eachConnection(ti), !1;
        },
        RPC_APP_CONNECTED: function (e) {
            let { application: t } = e;
            ey.add(t.id);
        },
        RPC_APP_DISCONNECTED: function (e) {
            let { application: t } = e;
            ey.delete(t.id);
        },
        OVERLAY_INITIALIZE: function (e) {
            let { mediaEngineState: t } = e;
            (eb = t.settingsByContext), (eR = t.inputDevices), (eO = t.outputDevices), (e2 = t.appSupported), (ez = t.krispModuleLoaded), (eC = t.goLiveContext);
        },
        MEDIA_ENGINE_SET_OPEN_H264: function (e) {
            let { enabled: t } = e,
                n = tl({ openH264: t });
            eT.setH264Enabled(n.hardwareEncoding || n.openH264),
                eT.eachConnection((e) => {
                    var t;
                    return e.setSoftwareH264(null === (t = n.openH264) || void 0 === t || t);
                });
        },
        MEDIA_ENGINE_SET_HARDWARE_ENCODING: function (e) {
            var t, n;
            let { enabled: r } = e,
                i = tl({ hardwareEncoding: r });
            eT.eachConnection((e) => {
                var t;
                return e.setHardwareH264(null === (t = i.hardwareEncoding) || void 0 === t || t);
            }),
                eT.setH264Enabled(i.hardwareEncoding || i.openH264),
                eT.setAv1Enabled(null === (t = i.hardwareEncoding) || void 0 === t || t),
                eT.setH265Enabled(null === (n = i.hardwareEncoding) || void 0 === n || n);
        },
        APP_STATE_UPDATE: function (e) {
            let { state: t } = e,
                n = D.Z.isEnabled();
            if (t === eu.$7l.BACKGROUND && eP && !n) (eF = !0), tn(!1);
            else {
                if (t !== eu.$7l.ACTIVE || !eF) return !1;
                (eF = !1), tn(!0);
            }
            return !0;
        },
        SET_CHANNEL_BITRATE: function (e) {
            eT.eachConnection((t) => t.setBitRate(e.bitrate));
        },
        SET_VAD_PERMISSION: function (e) {
            let { hasPermission: t } = e,
                n = !t;
            if (n === ew) return !1;
            (ew = n), eT.eachConnection(tt);
        },
        SET_NATIVE_PERMISSION: function (e) {
            let { state: t, permissionType: n } = e,
                r = t === ed.PQ.ACCEPTED;
            switch (n) {
                case ed.Eu.AUDIO:
                    (eJ = !0), eT.eachConnection(tt);
                    break;
                case ed.Eu.CAMERA:
                    !r && eP && tn(!1);
                    break;
                default:
                    return !1;
            }
        },
        SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
            eT.eachConnection((t) => t.applyVideoQualityMode(e.mode));
        },
        MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
            let { enabled: t } = e,
                n = tl({ aecDumpEnabled: t });
            eT.setAecDump(n.aecDumpEnabled);
        },
        CHANNEL_DELETE: function () {
            if ((!eP && null == a) || null != ea.Z.getRTCConnectionId()) return !1;
            tn(!1, null);
        },
        MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
            return !!eQ && ((eQ = !1), !0);
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
            let { settings: t } = e;
            eT.applyMediaFilterSettings(t).finally(() => {
                (eX = !1), r.emitChange();
            });
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
            eX = !0;
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
            eX = !1;
        },
        USER_SETTINGS_PROTO_UPDATE: function (e) {
            let {
                settings: { type: t },
                local: n,
                wasSaved: r
            } = e;
            if (t !== ef.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
            t_(!0);
        },
        CLIPS_INIT: function (e) {
            let { sourceId: t, applicationName: n, quality: i } = e,
                a = A.Z.isDecoupledGameClippingEnabled(),
                o = A.Z.getSettings().decoupledClipsEnabled;
            if (!a || !o || null == T.Z) return;
            let l = null,
                u = null,
                c = K.Z.getPidFromDesktopSource(t);
            ({ soundshareId: l, soundshareSession: u } = th(c));
            let d = {
                desktopSource: {
                    id: t,
                    sourcePid: c,
                    soundshareId: l,
                    soundshareSession: u
                },
                quality: i
            };
            null != s && s.desktopSource.id !== d.desktopSource.id && (eT.setClipsSource(null), (0, q.isWindows)() && null != s.desktopSource.soundshareId && b.pn(s.desktopSource.soundshareId)), null != l && tp(l, u), (s = d);
            let f = e7(),
                _ = e8().videoHook;
            eT.setClipsSource({
                desktopDescription: {
                    id: s.desktopSource.id,
                    soundshareId: s.desktopSource.soundshareId,
                    useVideoHook: _,
                    useGraphicsCapture: ta(),
                    useLoopback: r.getExperimentalSoundshare(),
                    useQuartzCapturer: !0,
                    allowScreenCaptureKit: ts(),
                    videoHookStaleFrameTimeoutMs: 500,
                    graphicsCaptureStaleFrameTimeoutMs: ev,
                    hdrCaptureMode: f
                },
                quality: i,
                applicationName: n
            });
        },
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            !1 === t.decoupledClipsEnabled && ((s = null), eT.setClipsSource(null));
        },
        MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
            e4 = e.enabled;
        }
    })),
    (t.Z = r);
