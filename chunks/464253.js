n(411104);
var r = n(570140),
    i = n(846027),
    a = n(872810),
    s = n(710845),
    o = n(252759),
    l = n(361291),
    u = n(199902),
    c = n(314897),
    d = n(569545),
    _ = n(803647),
    E = n(981631),
    f = n(65154);
function h(e, t, n) {
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
class p {
    _onGameDetectionUpdate(e) {
        if (
            ((this.applications = e.map((e) => {
                var t, n;
                return {
                    applicationId: null !== (t = e.id) && void 0 !== t ? t : null,
                    processId: e.pid,
                    processPath: e.pidPath,
                    windowHandle: null !== (n = e.windowHandle) && void 0 !== n ? n : null,
                    executableName: e.exeName
                };
            })),
            'verbatim-source' !== this.mode)
        )
            this.director.onDetectionUpdate(this.applications);
    }
    _onStreamApplication(e, t) {
        (this.mode = 'application'), (this.streamKey = e), this.director.onStreamBegin(this.applications, t);
    }
    _onStreamDirectSource(e, t, n, r) {
        (this.mode = 'verbatim-source'),
            (this.streamKey = e),
            this._onDirectorAction({
                type: o.A.STREAM,
                sourceId: t,
                audioSourceId: n,
                sound: r
            });
    }
    _onStreamEnd(e) {
        if (this.streamKey === e)
            switch (((this.streamKey = null), this.mode)) {
                case 'application':
                    this.director.onStreamEnd();
                    break;
                case 'verbatim-source':
                    this._onDirectorAction({ type: o.A.STOP });
                    break;
                default:
                    var t;
                    throw Error('unknown streaming mode: '.concat(null !== (t = this.mode) && void 0 !== t ? t : '(none)'));
            }
    }
    _onStreamKilled(e) {
        if (this.streamKey === e)
            switch (((this.streamKey = null), this.mode)) {
                case 'application':
                    this.director.onStreamKilled();
                    break;
                case 'verbatim-source':
                    break;
                default:
                    var t;
                    throw Error('unknown streaming mode: '.concat(null !== (t = this.mode) && void 0 !== t ? t : '(none)'));
            }
    }
    _onDirectorAction(e) {
        let t = u.Z.getCurrentUserActiveStream(),
            n = l.Z.getState();
        switch (e.type) {
            case o.A.STREAM:
                if ((null != t && (0, a.tK)(t, !1), e.sourceId.startsWith('camera') && null != e.audioSourceId)) {
                    let t = e.sourceId.split(':')[1];
                    i.Z.setGoLiveSource({
                        cameraSettings: {
                            videoDeviceGuid: t,
                            audioDeviceGuid: e.audioSourceId
                        },
                        qualityOptions: {
                            preset: n.preset,
                            resolution: n.resolution,
                            frameRate: n.fps
                        },
                        context: f.Yn.STREAM
                    });
                } else {
                    var r;
                    i.Z.setGoLiveSource({
                        desktopSettings: {
                            sourceId: e.sourceId,
                            sound: null === (r = e.sound) || void 0 === r || r
                        },
                        qualityOptions: {
                            preset: n.preset,
                            resolution: n.resolution,
                            frameRate: n.fps
                        },
                        context: f.Yn.STREAM
                    });
                }
                break;
            case o.A.PAUSE:
                null != t && (0, a.tK)(t, !0);
                break;
            case o.A.STOP:
                null != t && (0, _.Z)(t);
                break;
            default:
                throw Error('unhandled stream action: '.concat(e.type));
        }
    }
    _onCapturePaused(e) {
        let t = u.Z.getCurrentUserActiveStream();
        null != t && (0, a.tK)(t, e);
    }
    _onCaptureEnded() {
        switch (this.mode) {
            case 'application':
                this._onCapturePaused(!0);
                break;
            case 'verbatim-source':
                null != this.streamKey && this._onStreamEnd(this.streamKey);
                break;
            default:
                var e;
                throw Error('unknown streaming mode: '.concat(null !== (e = this.mode) && void 0 !== e ? e : '(none)'));
        }
    }
    constructor() {
        h(this, 'director', void 0),
            h(this, 'applications', void 0),
            h(this, 'streamKey', void 0),
            h(this, 'mode', void 0),
            (this.mode = null),
            (this.applications = []),
            (this.director = new o.a((e) => this._onDirectorAction(e))),
            r.Z.subscribe('STREAM_START', (e) => {
                let { streamType: t, guildId: n, channelId: r, pid: i, sourceId: a, audioSourceId: o, sound: l } = e,
                    u = c.default.getId(),
                    _ = (0, d.V9)({
                        streamType: t,
                        guildId: n,
                        channelId: r,
                        ownerId: u
                    });
                (null == i) != (null == a) ? (null != i && this._onStreamApplication(_, i), null != a && this._onStreamDirectSource(_, a, o, l)) : new s.Z('ApplicationSwitchingManager').warn('invalid start_stream: both application + display modes were specified (pid: '.concat(i, ', source-id: ').concat(a, ')'));
            }),
            r.Z.subscribe('STREAM_DELETE', (e) => {
                let { streamKey: t } = e;
                this._onStreamKilled(t);
            }),
            r.Z.subscribe('STREAM_STOP', (e) => {
                let { streamKey: t } = e;
                this._onStreamEnd(t);
            }),
            r.Z.subscribe('RUNNING_GAMES_CHANGE', (e) => {
                let { games: t } = e;
                this._onGameDetectionUpdate(t);
            }),
            r.Z.subscribe('MEDIA_ENGINE_VIDEO_STATE_CHANGED', (e) => {
                let { videoState: t, context: n } = e;
                n === f.Yn.STREAM && this._onCapturePaused(t === E.FQ1.PAUSED);
            }),
            r.Z.subscribe('MEDIA_ENGINE_SET_GO_LIVE_SOURCE', (e) => {
                let { settings: t } = e;
                (null == t ? void 0 : t.context) === f.Yn.STREAM && (null == t ? void 0 : t.desktopSettings) == null && (null == t ? void 0 : t.cameraSettings) == null && this._onCaptureEnded();
            });
    }
}
t.Z = {
    instance: null,
    init() {
        null == this.instance && (this.instance = new p());
    }
};
