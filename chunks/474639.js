n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var r = n(46973),
    i = n(570140),
    a = n(147913),
    s = n(579806),
    o = n(569545),
    l = n(441167),
    u = n(314897),
    c = n(131951),
    d = n(19780),
    _ = n(959457),
    E = n(704806),
    f = n(626135),
    h = n(358085),
    p = n(924557),
    I = n(435064),
    m = n(894694),
    T = n(779618),
    S = n(356659),
    g = n(981631),
    A = n(70722);
class N extends a.Z {
    handleRTCConnectionState(e) {
        let { context: t, state: n, streamKey: i } = e;
        if (!(0, p.ln)() || n !== g.hes.RTC_CONNECTED) return;
        let a = u.default.getId();
        if (t === r.Yn.DEFAULT) return this.applyUserVoiceRecording(a);
        if (t === r.Yn.STREAM && null != i) {
            let { ownerId: e } = (0, o.my)(i);
            if (e !== a) return;
            let t = _.Z.getRTCConnection(i);
            if (null == t) return;
            this.applyStreamRecording(a, t);
        }
    }
    handleRTCUserCreate(e) {
        let { userId: t, context: n } = e;
        n === r.Yn.DEFAULT && this.applyUserVoiceRecording(t);
    }
    handleRTCConnectionFlags(e) {
        let { userId: t, channelId: n, guildId: r } = e;
        this.maybeShowClipsWarning(t), this.applyUserVoiceRecording(t);
        let i = _.Z.getRTCConnection(
            o.V9({
                streamType: null != r ? A.lo.GUILD : A.lo.CALL,
                ownerId: t,
                channelId: n,
                guildId: r
            })
        );
        null != i && this.applyStreamRecording(t, i);
    }
    handleClipsInitFailure(e) {
        let { applicationName: t, errMsg: n } = e;
        f.default.track(g.rMx.CLIPS_INIT_FAILURE, {
            application_name: t,
            error_message: n
        });
    }
    maybeShowClipsWarning(e) {
        let t = d.Z.getChannelId();
        if (!(null == t || I.Z.getClipsWarningShown(t)) && e !== u.default.getId())
            I.Z.isClipsEnabledForUser(e) &&
                (i.Z.dispatch({
                    type: 'CLIPS_SHOW_CALL_WARNING',
                    channelId: t
                }),
                this.showClipsToast());
    }
    handlePostConnectionOpen() {
        if (!!(0, T.Z)(c.Z)) {
            if ((this.applyNativeClipsSettings(), !(0, p.ln)())) {
                I.Z.getSettings().clipsEnabled && this.disableClips();
                return;
            }
            (null == I.Z.getHardwareClassification() || null == I.Z.getHardwareClassificationForDecoupled() || I.Z.getHardwareClassificationVersion() !== S.WM) &&
                this.classifyHardwareAndTrack().then((e) => {
                    i.Z.dispatch({
                        type: 'CLIPS_CLASSIFY_HARDWARE',
                        classification: e
                    });
                });
        }
    }
    handleRTCConnectionVideo(e) {
        let { userId: t, context: n, channelId: i, guildId: a } = e;
        if (n !== r.Yn.STREAM || !(0, T.Z)(c.Z)) return;
        let s = _.Z.getRTCConnection(
            o.V9({
                streamType: null != a ? A.lo.GUILD : A.lo.CALL,
                ownerId: t,
                channelId: i,
                guildId: a
            })
        );
        null != s && this.applyStreamRecording(t, s);
    }
    async classifyHardwareAndTrack() {
        try {
            let { gpuModels: e, classification: t } = await (async () => {
                let e = await (0, E.q)();
                if ((null == e ? void 0 : e.gpus) != null) {
                    let t = e.gpus.map((e) => e.brand),
                        n = this.classifyHardware(t);
                    return {
                        gpuModels: t,
                        classification: n
                    };
                }
                {
                    let e = (await s.Z.processUtils.getSystemInfo()).gpus.map((e) => {
                            let { model: t } = e;
                            return t;
                        }),
                        t = this.classifyHardware(e);
                    return {
                        gpuModels: e,
                        classification: t
                    };
                }
            })();
            return (
                f.default.track(g.rMx.CLIPS_HARDWARE_CLASSIFICATION, {
                    classification: t,
                    version: S.WM,
                    gpu_models: e
                }),
                t
            );
        } catch (e) {
            return m.x.UNKNOWN;
        }
    }
    classifyHardware(e) {
        if ((0, h.isWindows)()) {
            let t = e.some((e) => S.mg.test(e)),
                n = e.some((e) => S.nU.test(e));
            return t ? m.x.MEETS_AUTO_ENABLE : n ? m.x.MEETS_MINIMUM : m.x.BELOW_MINIMUM;
        }
        if ((0, h.isMac)()) {
            let e = s.Z.remoteApp.getAppArch();
            return 'arm64' === e ? m.x.MEETS_AUTO_ENABLE : m.x.MEETS_MINIMUM;
        }
        return m.x.UNKNOWN;
    }
    applyUserVoiceRecording(e) {
        if (!(0, T.Z)(c.Z)) return;
        let t = d.Z.getRTCConnection();
        if (null == t) return;
        if (e === u.default.getId()) {
            t.setClipRecordUser(e, 'audio', I.Z.getSettings().clipsEnabled);
            return;
        }
        let n = I.Z.isVoiceRecordingAllowedForUser(e);
        t.setClipRecordUser(e, 'audio', n);
    }
    applyStreamRecording(e, t) {
        if (!(0, T.Z)(c.Z)) return;
        if (u.default.getId() === e) {
            let { clipsEnabled: n } = I.Z.getSettings(),
                r = (0, p.ln)();
            t.setClipRecordUser(e, 'audio', r && n), t.setClipRecordUser(e, 'video', r && n);
            return;
        }
        let { enableViewerClipping: n, ignoreSenderPreference: r } = l.Z.getCurrentConfig({ location: 'ClipsManager:applyStreamRecording' });
        if (!n) return;
        let i = r || I.Z.isViewerClippingAllowedForUser(e);
        this.applyNativeClipsSettings(), t.setClipRecordUser(e, 'audio', i), t.setClipRecordUser(e, 'video', i);
    }
    disableClips() {}
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                POST_CONNECTION_OPEN: (e) => this.handlePostConnectionOpen(),
                RTC_CONNECTION_FLAGS: (e) => this.handleRTCConnectionFlags(e),
                RTC_CONNECTION_USER_CREATE: (e) => this.handleRTCUserCreate(e),
                CLIPS_INIT_FAILURE: (e) => this.handleClipsInitFailure(e),
                CLIPS_SETTINGS_UPDATE: (e) => this.applyNativeClipsSettings(e),
                STREAM_START: () => this.applyNativeClipsSettings(),
                RUNNING_GAME_TOGGLE_DETECTION: (e) => this.handleClipsInitOnToggleDetection(e),
                RUNNING_GAMES_CHANGE: (e) => this.handleClipsInitOnGamesChange(e),
                CLIPS_RESTART: () => this.fireClipsInitEvent(),
                RTC_CONNECTION_VIDEO: (e) => this.handleRTCConnectionVideo(e),
                RTC_CONNECTION_STATE: (e) => this.handleRTCConnectionState(e),
                MEDIA_ENGINE_SET_HARDWARE_ENCODING: (e) => this.handleMediaEngineSetHardwareEncoding(e)
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
