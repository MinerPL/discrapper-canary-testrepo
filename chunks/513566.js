n(47120);
var r = n(348327),
    i = n.n(r),
    a = n(392711),
    s = n.n(a),
    o = n(570140),
    l = n(846027),
    u = n(287734),
    c = n(317770),
    d = n(829750),
    _ = n(189771),
    E = n(67844),
    f = n(173507),
    h = n(592125),
    p = n(131951),
    m = n(944486),
    I = n(358085),
    T = n(998502),
    g = n(981631),
    S = n(689938);
function A(e, t, n) {
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
class N extends c.Z {
    _initialize() {
        if (!!this.isSupported) o.Z.subscribe('AUDIO_SET_MODE', this.handleViewUpdate), o.Z.subscribe('VOICE_CHANNEL_SELECT', this.handleViewUpdate), o.Z.subscribe('START_SESSION', this.handleViewUpdate), o.Z.subscribe('CONNECTION_OPEN', this.handleViewUpdate), o.Z.subscribe('CONNECTION_CLOSED', this.handleViewUpdate), o.Z.subscribe('CALL_CREATE', this.handleViewUpdate), o.Z.subscribe('CALL_UPDATE', this.handleViewUpdate), o.Z.subscribe('CALL_DELETE', this.handleViewUpdate), o.Z.subscribe('CHANNEL_DELETE', this.handleViewUpdate), o.Z.subscribe('VOICE_STATE_UPDATES', this.handleViewUpdate), o.Z.subscribe('AUDIO_TOGGLE_SELF_MUTE', this.handleViewUpdate), o.Z.subscribe('AUDIO_TOGGLE_SELF_DEAF', this.handleViewUpdate), o.Z.subscribe('AUDIO_TOGGLE_LOCAL_MUTE', this.handleViewUpdate), o.Z.subscribe('AUDIO_SET_LOCAL_VIDEO_DISABLED', this.handleViewUpdate), T.ZP.on('THUMBAR_BUTTONS_CLICKED', (e, t) => this.buttonClicked(t));
    }
    _terminate() {
        if (!!this.isSupported) o.Z.unsubscribe('AUDIO_SET_MODE', this.handleViewUpdate), o.Z.unsubscribe('VOICE_CHANNEL_SELECT', this.handleViewUpdate), o.Z.unsubscribe('START_SESSION', this.handleViewUpdate), o.Z.unsubscribe('CONNECTION_OPEN', this.handleViewUpdate), o.Z.unsubscribe('CONNECTION_CLOSED', this.handleViewUpdate), o.Z.unsubscribe('CALL_CREATE', this.handleViewUpdate), o.Z.unsubscribe('CALL_UPDATE', this.handleViewUpdate), o.Z.unsubscribe('CALL_DELETE', this.handleViewUpdate), o.Z.unsubscribe('CHANNEL_DELETE', this.handleViewUpdate), o.Z.unsubscribe('VOICE_STATE_UPDATES', this.handleViewUpdate), o.Z.unsubscribe('AUDIO_TOGGLE_SELF_MUTE', this.handleViewUpdate), o.Z.unsubscribe('AUDIO_TOGGLE_SELF_DEAF', this.handleViewUpdate), o.Z.unsubscribe('AUDIO_TOGGLE_LOCAL_MUTE', this.handleViewUpdate), o.Z.unsubscribe('AUDIO_SET_LOCAL_VIDEO_DISABLED', this.handleViewUpdate);
    }
    setThumbarButtons(e) {
        !i()(this.prevButtons, e) && ((this.prevButtons = e), T.ZP.setThumbarButtons(e));
    }
    constructor(...e) {
        super(...e),
            A(this, 'callbackActions', {
                [T.tS.VIDEO]: () => {
                    p.Z.isVideoEnabled() ? l.Z.setVideoEnabled(!1) : (0, f.Z)(() => l.Z.setVideoEnabled(!0), g.IlC.APP);
                },
                [T.tS.MUTE]: () => l.Z.toggleSelfMute(),
                [T.tS.DEAFEN]: () => l.Z.toggleSelfDeaf(),
                [T.tS.DISCONNECT]: () => u.default.disconnect()
            }),
            A(this, 'isSupported', (0, I.isMac)() || (0, I.isWindows)()),
            A(this, 'prevButtons', []),
            A(this, 'buttonClicked', (e) => {
                if (!(e.buttonName in this.callbackActions)) {
                    console.error('ThumbarButtonsManager: Unknown callback eventName: "'.concat(e.buttonName, '"'), e);
                    return;
                }
                this.callbackActions[e.buttonName]();
            }),
            A(
                this,
                'handleViewUpdate',
                s().debounce(() => {
                    let e = m.Z.getVoiceChannelId();
                    if (null == e) {
                        this.setThumbarButtons([]);
                        return;
                    }
                    let t = p.Z.isSelfMute(),
                        n = p.Z.isSelfDeaf(),
                        r = p.Z.isVideoEnabled(),
                        i = p.Z.isVideoAvailable(),
                        a = h.Z.getChannel(e),
                        s = null == a || (0, _.y)(a),
                        { reachedLimit: o, limit: l } =
                            null != a
                                ? (0, d.t)(a)
                                : {
                                      reachedLimit: void 0,
                                      limit: void 0
                                  },
                        u = (0, E.X)({
                            enabled: r,
                            join: !1,
                            channel: a,
                            cameraUnavailable: !i,
                            hasPermission: s,
                            channelLimit: l,
                            channelLimitReached: o
                        });
                    this.setThumbarButtons([
                        {
                            name: T.tS.VIDEO,
                            active: !r,
                            tooltip: u,
                            flags: i ? [] : ['disabled']
                        },
                        {
                            name: T.tS.MUTE,
                            active: t,
                            tooltip: t ? S.Z.Messages.UNMUTE : S.Z.Messages.MUTE
                        },
                        {
                            name: T.tS.DEAFEN,
                            active: n,
                            tooltip: n ? S.Z.Messages.UNDEAFEN : S.Z.Messages.DEAFEN
                        },
                        {
                            name: T.tS.DISCONNECT,
                            active: !0,
                            tooltip: S.Z.Messages.DISCONNECT_SELF
                        }
                    ]);
                }, 100)
            );
    }
}
t.Z = new N();
