n.d(t, {
    yv: function () {
        return G;
    }
}), n(653041), n(47120), n(411104);
var r, i, a = n(735250), o = n(470079), s = n(120356), l = n.n(s), u = n(392711), c = n.n(u), d = n(748780), _ = n(481060), E = n(818083), f = n(268353), h = n(866960), p = n(196050), m = n(27268), I = n(259773), T = n(80618), g = n(181058), S = n(810090), A = n(626135), N = n(70956), v = n(36703), O = n(228488), R = n(540026), C = n(981631), y = n(768760), D = n(689938), L = n(475282), b = n(83922);
function M(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let P = '-:--', U = {
        friction: 14,
        tension: 200
    }, w = {
        VIDEO: 'VIDEO',
        AUDIO: 'AUDIO'
    }, x = {
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    };
function G(e) {
    let t = 0 | e, n = t % 60;
    return ''.concat((t - n) / 60, ':').concat(String(n).padStart(2, '0'));
}
let k = e => {
    let {
            current: t,
            duration: n
        } = e, r = null != t ? G(t) : P, i = null != n ? G(n) : P;
    return r = r.padStart(i.length, '0'), (0, a.jsxs)('div', {
        className: L.durationTimeWrapper,
        children: [
            (0, a.jsx)('span', {
                className: L.durationTimeDisplay,
                children: r
            }),
            (0, a.jsx)('span', {
                className: L.durationTimeSeparator,
                children: '/'
            }),
            (0, a.jsx)('span', {
                className: L.durationTimeDisplay,
                children: i
            })
        ]
    });
};
class B extends (r = o.Component) {
    componentDidMount() {
        this.state.translateY.setValue(this.props.autoPlay ? 1 : 0);
    }
    componentDidUpdate(e) {
        var t, n, r, i, a;
        let {
            hide: o,
            playing: s
        } = this.props;
        o && !e.hide ? (this.animateControls(1, s), null === (t = this.volumeButton) || void 0 === t || t.blur(), null === (n = (r = this.props).onControlsHide) || void 0 === n || n.call(r)) : !o && e.hide && (this.animateControls(0, s), null === (i = (a = this.props).onControlsShow) || void 0 === i || i.call(a));
    }
    updateProgress(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], {durationBar: n} = this;
        null != n && n.setGrabber(e, t);
    }
    animateControls(e, t) {
        let {translateY: n} = this.state;
        t ? d.Z.spring(n, {
            toValue: e,
            ...U
        }).start() : n.setValue(e);
    }
    getAnimatedStyle() {
        let {translateY: e} = this.state;
        return {
            transform: [{
                    translateY: e.interpolate({
                        inputRange: [
                            0,
                            1
                        ],
                        outputRange: [
                            '0%',
                            '100%'
                        ]
                    })
                }]
        };
    }
    renderPlayIcon() {
        let {
            playing: e,
            currentTime: t,
            duration: n,
            onPause: r,
            onPlay: i,
            disabled: o
        } = this.props;
        return e ? (0, a.jsx)(_.Clickable, {
            className: L.videoButton,
            onClick: r,
            tabIndex: o ? -1 : 0,
            'aria-label': D.Z.Messages.PAUSE,
            children: (0, a.jsx)(_.PauseIcon, {
                size: 'xs',
                color: 'currentColor',
                className: L.controlIcon
            }, 'pause')
        }) : null != t && t === n ? (0, a.jsx)(_.Clickable, {
            className: L.videoButton,
            onClick: i,
            tabIndex: o ? -1 : 0,
            'aria-label': D.Z.Messages.PLAY_AGAIN,
            children: (0, a.jsx)(g.Z, { className: L.controlIcon }, 'replay')
        }) : (0, a.jsx)(_.Clickable, {
            className: L.videoButton,
            onClick: i,
            tabIndex: o ? -1 : 0,
            'aria-label': D.Z.Messages.PLAY,
            children: (0, a.jsx)(_.PlayIcon, {
                size: 'xs',
                color: 'currentColor',
                className: L.controlIcon
            }, 'play')
        });
    }
    render() {
        let {
            buffers: e,
            children: t,
            currentTime: n,
            duration: r,
            muted: i,
            onDrag: o,
            onDragEnd: s,
            onDragStart: l,
            onToggleMuted: u,
            onVolumeShow: c,
            onVolumeHide: _,
            width: E,
            volume: f,
            type: h
        } = this.props;
        return (0, a.jsxs)(d.Z.div, {
            className: h === w.VIDEO ? L.videoControls : L.audioControls,
            onClick: e => e.stopPropagation(),
            onDoubleClick: e => e.stopPropagation(),
            style: this.getAnimatedStyle(),
            children: [
                this.renderPlayIcon(),
                'string' == typeof E || E > 250 ? (0, a.jsx)(k, {
                    current: n,
                    duration: r
                }) : null,
                (0, a.jsx)(R.Z, {
                    buffers: e,
                    value: null != r ? r : 0,
                    onDrag: o,
                    onDragEnd: s,
                    onDragStart: l,
                    type: R.Z.Types.DURATION,
                    ref: this.setDurationRef
                }),
                (0, a.jsx)('div', {
                    className: b.flex,
                    children: (0, a.jsx)(T.Z, {
                        ref: this.setVolumeButtonRef,
                        muted: i,
                        value: f,
                        minValue: 0,
                        maxValue: 1,
                        currentWindow: window,
                        onValueChange: e => o(e, R.Z.Types.VOLUME),
                        onToggleMute: u,
                        onVolumeShow: c,
                        onVolumeHide: _,
                        iconClassName: L.controlIcon,
                        sliderWrapperClassName: L.volumeSliderWrapper
                    })
                }),
                t
            ]
        });
    }
    constructor(...e) {
        super(...e), M(this, 'state', { translateY: new d.Z.Value(0) }), M(this, 'volumeButton', void 0), M(this, 'durationBar', void 0), M(this, 'setDurationRef', e => {
            this.durationBar = e;
        }), M(this, 'setVolumeButtonRef', e => {
            this.volumeButton = e;
        });
    }
}
function F(e) {
    let {
        fileName: t,
        fileSize: n,
        src: r,
        disabled: i,
        mimeType: o,
        hideDownloadButton: s
    } = e;
    return (0, a.jsxs)('div', {
        className: L.audioMetadata,
        children: [
            (0, a.jsxs)('div', {
                className: L.metadataContent,
                children: [
                    i ? t : (0, a.jsx)(p.Z, {
                        href: r,
                        className: L.metadataDownload,
                        iconClassName: L.metadataIcon,
                        mimeType: o,
                        fileName: t
                    }),
                    (0, a.jsx)('div', {
                        className: L.metadataSize,
                        children: n
                    })
                ]
            }),
            !s && (0, a.jsx)(p.Z, {
                href: r,
                className: L.metadataDownload,
                iconClassName: L.metadataIcon,
                mimeType: o
            })
        ]
    });
}
M(B, 'defaultProps', { disabled: !1 });
class V extends o.Component {
    pop() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.setState({ play: e }, this.popAnimation);
    }
    getAnimatedStyle() {
        let {
            opacity: e,
            scale: t
        } = this.state;
        return d.Z.accelerate({
            opacity: e.interpolate({
                inputRange: [
                    0,
                    1
                ],
                outputRange: [
                    0,
                    0.8
                ]
            }),
            transform: [{
                    scale: t.interpolate({
                        inputRange: [
                            0,
                            1
                        ],
                        outputRange: [
                            1,
                            2
                        ]
                    })
                }]
        });
    }
    render() {
        let {play: e} = this.state, t = e ? _.PlayIcon : _.PauseIcon;
        return (0, a.jsx)(d.Z.div, {
            className: L.playPausePop,
            style: this.getAnimatedStyle(),
            children: (0, a.jsx)(t, { className: L.playPausePopIcon })
        });
    }
    constructor(...e) {
        super(...e), M(this, 'state', {
            play: !1,
            scale: new d.Z.Value(0),
            opacity: new d.Z.Value(0)
        }), M(this, 'popAnimation', () => {
            let {
                opacity: e,
                scale: t
            } = this.state;
            t.setValue(0), e.setValue(0), d.Z.parallel([
                d.Z.sequence([
                    d.Z.timing(e, {
                        toValue: 1,
                        duration: 200
                    }),
                    d.Z.timing(e, {
                        toValue: 0,
                        duration: 200
                    })
                ]),
                d.Z.spring(t, {
                    toValue: 1.5,
                    ...U,
                    friction: 80
                })
            ]).start();
        });
    }
}
let H = (0, E.B)({
    kind: 'user',
    id: '2024-03_media_play_metrics',
    label: 'Media play metrics User Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [{
            id: 1,
            label: 'Send metrics',
            config: { enabled: !0 }
        }]
});
class Z {
    moveToState(e) {
        this.stateTime = performance.now(), this.currentState = e;
    }
    timeInState() {
        return performance.now() - this.stateTime;
    }
    assertUnreachable(e) {
        throw Error('uhoh');
    }
    sendEvent() {
        this.analyticsEnabled && A.default.track(C.rMx.MEDIA_PLAY_FINISHED, {
            play_time_sec: this.playTimeSec,
            play_wall_time_ms: this.playWallTimeMs,
            first_play_waiting_ms: this.firstPlayWaitingMs,
            stall_count: this.stallCount,
            stall_ms: this.stallMs,
            seek_count: this.seekCount,
            seek_waiting_ms: this.seekWaitingMs,
            media_source: this.metadata.src,
            mime_type: this.metadata.mimeType,
            file_size: this.metadata.fileSize,
            file_duration_sec: this.metadata.fileDurationSec,
            connection_type: h.Z.getType(),
            effective_connection_speed: h.Z.getEffectiveConnectionSpeed(),
            service_provider: h.Z.getServiceProvider()
        }), this.playTimeSec = 0, this.playWallTimeMs = 0, this.firstPlayWaitingMs = 0, this.stallCount = 0, this.stallMs = 0, this.seekCount = 0, this.seekWaitingMs = 0, this.playbackStartTime = void 0, this.lastPlayingTime = void 0, this.moveToState('not_started');
    }
    updatePlayTime(e) {
        var t, n;
        this.playTimeSec += Math.max((null !== (t = this.lastPlayingTime) && void 0 !== t ? t : e) - (null !== (n = this.playbackStartTime) && void 0 !== n ? n : 0), 0), this.playWallTimeMs += this.timeInState();
    }
    constructor(e) {
        M(this, 'metadata', void 0), M(this, 'playTimeSec', 0), M(this, 'playWallTimeMs', 0), M(this, 'firstPlayWaitingMs', 0), M(this, 'stallCount', 0), M(this, 'stallMs', 0), M(this, 'seekCount', 0), M(this, 'seekWaitingMs', 0), M(this, 'stateTime', performance.now()), M(this, 'currentState', 'not_started'), M(this, 'playbackStartTime', void 0), M(this, 'lastPlayingTime', void 0), M(this, 'analyticsEnabled', void 0), M(this, 'onWaiting', e => {
            switch (this.currentState) {
            case 'not_started':
                this.moveToState('not_started_waiting');
                break;
            case 'playing':
                this.updatePlayTime(e.currentTarget.currentTime), this.stallCount += 1, this.moveToState('stalled');
                break;
            case 'seeking':
            case 'not_started_waiting':
            case 'stalled':
                break;
            case 'paused':
            case 'seeked':
                this.moveToState('stalled');
                break;
            default:
                this.assertUnreachable(this.currentState);
            }
        }), M(this, 'onSeeking', e => {
            switch (this.currentState) {
            case 'seeking':
            case 'seeked':
                this.moveToState('seeking');
                return;
            case 'stalled':
                this.stallMs += this.timeInState();
                break;
            case 'playing':
                this.updatePlayTime(e.currentTarget.currentTime);
                break;
            case 'not_started':
            case 'not_started_waiting':
            case 'paused':
                break;
            default:
                this.assertUnreachable(this.currentState);
            }
            this.seekCount += 1, this.moveToState('seeking');
        }), M(this, 'onSeeked', e => {
            switch (this.currentState) {
            case 'seeking':
            case 'seeked':
                let t = this.stateTime;
                this.moveToState('seeked'), this.stateTime = t;
                break;
            case 'not_started':
            case 'not_started_waiting':
            case 'stalled':
            case 'playing':
            case 'paused':
                break;
            default:
                this.assertUnreachable(this.currentState);
            }
        }), M(this, 'onPause', e => {
            switch (this.currentState) {
            case 'playing':
                this.updatePlayTime(e.currentTarget.currentTime), this.moveToState('paused'), this.sendEvent();
                break;
            case 'stalled':
                this.stallMs += this.timeInState(), this.moveToState('paused'), this.sendEvent();
                break;
            case 'not_started':
            case 'not_started_waiting':
            case 'paused':
            case 'seeking':
                break;
            case 'seeked':
                this.seekWaitingMs += this.timeInState(), this.seekCount += 1;
                break;
            default:
                this.assertUnreachable(this.currentState);
            }
        }), M(this, 'onPlaying', e => {
            switch (this.currentState) {
            case 'playing':
                return;
            case 'not_started':
                this.firstPlayWaitingMs = 0;
                break;
            case 'not_started_waiting':
                this.firstPlayWaitingMs = this.timeInState();
                break;
            case 'stalled':
                this.stallMs += this.timeInState();
                break;
            case 'seeked':
                this.seekWaitingMs += this.timeInState();
                break;
            case 'paused':
            case 'seeking':
                break;
            default:
                this.assertUnreachable(this.currentState);
            }
            this.playbackStartTime = e.currentTarget.currentTime, this.moveToState('playing');
        }), M(this, 'onTimeUpdate', e => {
            switch (this.currentState) {
            case 'playing':
                this.lastPlayingTime = e.currentTarget.currentTime;
                return;
            case 'not_started':
            case 'not_started_waiting':
            case 'stalled':
            case 'seeked':
            case 'paused':
            case 'seeking':
                break;
            default:
                this.assertUnreachable(this.currentState);
            }
        }), M(this, 'onDragStart', e => {
            null != e && (this.lastPlayingTime = e);
        }), M(this, 'onLoadedMetadata', e => {
            this.metadata.fileDurationSec = e.currentTarget.duration;
        }), this.metadata = e, this.analyticsEnabled = H.getCurrentConfig({ location: 'media_player' }).enabled;
    }
}
class Y extends (i = o.PureComponent) {
    static getDerivedStateFromProps(e, t) {
        return !e.playable && t.playing ? {
            playing: !1,
            hideControls: !1
        } : null;
    }
    componentDidMount() {
        let {
                playing: e,
                muted: t,
                volume: n
            } = this.state, {current: r} = this.mediaRef;
        if (null != r)
            t && (r.muted = t), e && (this.play(!0), this.handleUIUpdate()), r.volume = n;
    }
    componentDidUpdate(e, t) {
        let {
                props: {
                    onPause: n,
                    onVolumeChange: r,
                    onMute: i
                },
                state: {
                    playing: a,
                    fullscreen: o,
                    muted: s,
                    dragging: l,
                    volume: u
                }
            } = this, {current: c} = this.mediaRef, {current: d} = this.playPausePopRef;
        if (null == c)
            return;
        a && !t.playing ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && (null == d || d.pop(a))) : !a && t.playing && (c.pause(), null == d || d.pop(a), null == n || n());
        let _ = (0, O.fn)(c.parentNode, c);
        o && !t.fullscreen && null != _ ? ((0, O.Dj)(_), _.addEventListener(O.NO, this.handleFullScreenExit)) : !o && t.fullscreen && null != _ && (_.removeEventListener(O.NO, this.handleFullScreenExit), (0, O.Pr)(_)), l === R.Z.Types.DURATION && t.dragging !== R.Z.Types.DURATION && a ? c.pause() : l !== R.Z.Types.DURATION && t.dragging === R.Z.Types.DURATION && a && c.play(), s !== t.muted && (c.muted = s, null == i || i(s)), u !== t.volume && (c.volume = u, null == r || r(u));
    }
    componentWillUnmount() {
        this._unmounted = !0;
        let {current: e} = this.mediaRef;
        if (null == e)
            return;
        let t = (0, O.fn)(e.parentNode, e);
        null != t && (t.removeEventListener(O.NO, this.handleFullScreenExit), (0, O.Pr)(t));
    }
    play() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], {
                onPlay: t,
                volume: n,
                autoMute: r
            } = this.props, {current: i} = this.mediaRef;
        if (null != i) {
            let a = {};
            if ('function' == typeof n) {
                let e = n();
                e !== this.state.volume && (i.volume = e, a.volume = e);
            }
            if ('function' == typeof r) {
                let e = r();
                e !== this.state.muted && (i.muted = e, a.muted = e);
            }
            this.setState(a), i.play(), null == t || t(e, i.currentTime * N.Z.Millis.SECOND, i.duration * N.Z.Millis.SECOND);
        }
    }
    getWidth() {
        let {width: e} = this.props;
        return '100%' === e ? e : Math.max(e, Y.minWidth);
    }
    getHeight() {
        let {height: e} = this.props;
        return '100%' === e ? e : Math.max(e, Y.minHeight);
    }
    updateValue(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], {current: n} = this.controlsRef;
        null != n && n.updateProgress(e, t);
    }
    updateTime(e, t) {
        let n = 0 | e, r = 0 | t;
        (this.state.currentTime !== n || this.state.duration !== r) && this.setState({
            currentTime: n,
            duration: r
        });
    }
    updateControlsVisibility() {
        let {
                dragging: e,
                fullscreen: t
            } = this.state, n = Math.max(0, Date.now() - this._lastMove) > (t ? 1000 : 3000);
        n !== this.state.hideControls && null == e && this.setState({ hideControls: n });
    }
    renderVideo() {
        let {
                src: e,
                poster: t,
                forceExternal: n,
                onError: r,
                responsive: i,
                mediaLayoutType: o
            } = this.props, {
                playing: s,
                fullscreen: l
            } = this.state, u = this.getWidth(), c = this.getHeight();
        return n ? (0, a.jsx)(S.Z, {
            className: L.video,
            controls: !1,
            height: c,
            poster: t,
            width: u,
            responsive: i && !l,
            mediaLayoutType: o,
            playsInline: !0,
            autoPlay: s
        }) : (0, a.jsx)(S.Z, {
            className: L.video,
            controls: !1,
            playsInline: !0,
            autoPlay: s,
            height: c,
            responsive: i && !l,
            mediaLayoutType: l ? y.hV.STATIC : o,
            onClick: this.handleVideoClick,
            onEnded: this.handleEnded,
            onError: r,
            onWaiting: this._analytics.onWaiting,
            onSeeking: this._analytics.onSeeking,
            onSeeked: this._analytics.onSeeked,
            onPause: this._analytics.onPause,
            onPlaying: this._analytics.onPlaying,
            onTimeUpdate: this._analytics.onTimeUpdate,
            onLoadedMetadata: this.handleLoaded,
            onProgress: this.handleBuffer,
            poster: t,
            preload: this.state.preload,
            ref: this.mediaRef,
            width: u,
            src: e
        });
    }
    renderAudio() {
        return (0, a.jsx)('audio', {
            className: L.audio,
            controls: !1,
            onClick: this.handleVideoClick,
            onEnded: this.handleEnded,
            onLoadedMetadata: this.handleLoaded,
            onProgress: this.handleBuffer,
            preload: this.state.preload,
            ref: this.mediaRef,
            children: (0, a.jsx)('source', { src: this.props.src })
        });
    }
    renderControls() {
        let {current: e} = this.mediaRef, {
                props: {
                    type: t,
                    autoPlay: n,
                    playable: r = !0,
                    onVolumeShow: i,
                    onVolumeHide: o,
                    onControlsHide: s,
                    onControlsShow: l
                },
                state: {
                    buffers: u,
                    currentTime: c,
                    duration: d,
                    hasClickedPlay: _,
                    hideControls: E,
                    muted: h,
                    playing: p,
                    fullscreen: I,
                    volume: T,
                    dragging: g
                }
            } = this, S = this.getWidth();
        return _ || n || t === w.AUDIO ? (0, a.jsx)(B, {
            buffers: u,
            currentTime: c,
            duration: d,
            volume: (0, v.P)(T, 1),
            hide: t === w.VIDEO && E,
            muted: h,
            autoPlay: n,
            onDrag: this.handleDrag,
            onDragEnd: this.handleDragEnd,
            onDragStart: this.handleDragStart,
            onPause: () => this.setPlay(!1),
            onPlay: () => this.setPlay(!0),
            onToggleMuted: this.toggleMuted,
            onVolumeShow: i,
            onVolumeHide: o,
            onControlsShow: l,
            onControlsHide: s,
            playing: p,
            dragging: g,
            type: t,
            ref: this.controlsRef,
            width: I ? window.screen.width : S,
            disabled: !r,
            children: t === w.VIDEO ? (0, a.jsx)(f.Z, {
                'aria-label': D.Z.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
                className: L.videoButton,
                guestWindow: window,
                onClick: this.toggleFullscreen,
                node: (0, O.fn)(null == e ? void 0 : e.parentNode, e)
            }) : null
        }) : (0, a.jsx)(m.Z, {
            onPlay: this.handleVideoClick,
            inactive: !r
        });
    }
    renderMetadata() {
        let {
            fileName: e,
            fileSize: t,
            src: n,
            type: r,
            playable: i,
            mimeType: o
        } = this.props;
        return null == e || null == t ? null : r === w.AUDIO ? (0, a.jsx)(F, {
            fileName: e,
            fileSize: t,
            src: n,
            disabled: !i,
            mimeType: o,
            hideDownloadButton: !0
        }) : null;
    }
    renderPlayPausePop() {
        return (0, a.jsx)(V, { ref: this.playPausePopRef });
    }
    getMediaStyle() {
        let {
                responsive: e,
                type: t,
                height: n
            } = this.props, {fullscreen: r} = this.state, i = this.getWidth();
        return r ? x : t === w.AUDIO ? {
            width: void 0,
            height: 'auto'
        } : e ? void 0 : {
            width: i,
            height: n
        };
    }
    render() {
        let {
                height: e,
                type: t,
                src: n,
                forceExternal: r,
                className: i,
                renderLinkComponent: o,
                responsive: s,
                mediaLayoutType: u,
                renderOverlayContent: c
            } = this.props, {
                fullscreen: d,
                hideControls: _,
                playing: E
            } = this.state, f = L.wrapperPaused;
        if (t === w.AUDIO ? f = L.wrapperAudio : _ ? f = L.wrapperControlsHidden : E && (f = L.wrapperPlaying), r && t === w.VIDEO) {
            let t = this.getWidth();
            return (0, a.jsxs)('div', {
                className: l()(f, { [L.wrapperMediaMosaic]: u === y.hV.MOSAIC }),
                style: s ? void 0 : {
                    width: t,
                    height: e
                },
                children: [
                    this.renderMetadata(),
                    this.renderVideo(),
                    (0, a.jsx)('div', {
                        className: L.playCenter,
                        children: (0, a.jsx)(I.Z, {
                            className: L.__invalid_playButton,
                            externalURL: n,
                            renderLinkComponent: o
                        })
                    })
                ]
            });
        }
        return (0, a.jsxs)('div', {
            className: l()(f, L.newMosaicStyle, i, { [L.wrapperMediaMosaic]: u === y.hV.MOSAIC }),
            'data-fullscreen': d,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseMove: E ? this.handleMouseMove : void 0,
            onKeyDown: this.handleKeyDown,
            style: this.getMediaStyle(),
            children: [
                this.renderMetadata(),
                t === w.AUDIO ? this.renderAudio() : this.renderVideo(),
                this.renderControls(),
                t === w.VIDEO ? this.renderPlayPausePop() : null,
                null != c ? (0, a.jsx)('div', {
                    className: l()({ [L.overlayContentHidden]: E || d }),
                    children: c()
                }) : null
            ]
        });
    }
    constructor(e) {
        var t, n;
        super(e), t = this, M(this, '_unmounted', !1), M(this, '_lastMove', 0), M(this, '_analytics', void 0), M(this, 'mediaRef', o.createRef()), M(this, 'controlsRef', o.createRef()), M(this, 'playPausePopRef', o.createRef()), M(this, 'handleFullScreenExit', () => {
            let {current: e} = this.mediaRef;
            if (null == e)
                return;
            let t = (0, O.fn)(e.parentNode, e);
            (null == t || !(0, O.rB)(t)) && this.setState({ fullscreen: !1 });
        }), M(this, 'toggleFullscreen', () => {
            let e = !this.state.fullscreen;
            this.setState({ fullscreen: e });
        }), M(this, 'setMuted', e => {
            this.setState({ muted: e });
        }), M(this, 'toggleMuted', () => {
            this.setMuted(!this.state.muted);
        }), M(this, 'setTime', function (e) {
            let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], {current: r} = t.mediaRef;
            null != r && isFinite(r.duration) && isFinite(r.currentTime) && (r.currentTime = e, t.updateValue(e / r.duration, n), t.updateTime(e, r.duration));
        }), M(this, 'handleUIUpdate', () => {
            if (!this.state.playing || this._unmounted)
                return;
            let {current: e} = this.mediaRef;
            if (null != e)
                e.duration > 0 && this.updateValue(e.currentTime / e.duration), this.updateTime(e.currentTime, e.duration), this.updateControlsVisibility(), requestAnimationFrame(this.handleUIUpdate);
        }), M(this, 'handleDrag', (e, t) => {
            let {current: n} = this.mediaRef;
            if (t === R.Z.Types.DURATION)
                null != n && isFinite(n.duration) && this.setTime(n.duration * e, !1);
            else if (t === R.Z.Types.VOLUME) {
                let t = (0, v.A)(e, 1);
                0 === t ? this.setState({
                    muted: !0,
                    volume: t
                }) : this.state.muted && t > 0 ? this.setState({
                    muted: !1,
                    volume: t
                }) : this.setState({ volume: t });
            }
        }), M(this, 'handleLoaded', e => {
            this._analytics.onLoadedMetadata(e);
            let {current: t} = this.mediaRef;
            null != t && (this.updateTime(t.currentTime, t.duration), this.setState({
                hasLoadedMetadata: !0,
                currentTime: t.currentTime,
                duration: t.duration
            }));
        }), M(this, 'handleDurationChange', () => {
            let {current: e} = this.mediaRef;
            null != e && (this.updateTime(e.currentTime, e.duration), this.setState({ duration: e.duration }));
        }), M(this, 'handleBuffer', c().debounce(() => {
            let {current: e} = this.mediaRef;
            if (null == e) {
                this.setState({ buffers: [] });
                return;
            }
            this.setState({
                buffers: function (e) {
                    let t = [], {duration: n} = e;
                    for (let r = 0; r < e.buffered.length; r++) {
                        let i = e.buffered.start(r), a = e.buffered.end(r);
                        if (a - i < 1)
                            continue;
                        let o = (a - i) / n, s = i / n;
                        t.push([
                            s,
                            o
                        ]);
                    }
                    return t;
                }(e)
            });
        }, 400)), M(this, 'handleEnded', e => {
            let {onEnded: t} = this.props;
            this.setState({
                playing: !1,
                hideControls: !1
            }), null != t && t(e);
        }), M(this, 'handleMouseMove', () => {
            this._lastMove = Date.now();
        }), M(this, 'handleMouseLeave', () => {
            this.state.playing && (this._lastMove = 0), this.setState({ hovering: !1 });
        }), M(this, 'handleMouseEnter', () => {
            'none' === this.state.preload && this.setState({ preload: 'metadata' }), this.setState({ hovering: !0 });
        }), M(this, 'handleVideoClick', e => {
            let {
                state: {
                    hasClickedPlay: t,
                    playing: n
                },
                props: {
                    onClick: r,
                    autoPlay: i,
                    autoMute: a
                }
            } = this;
            if (null != r) {
                r(e);
                return;
            }
            e.stopPropagation(), i && !t && n && a ? this.setState({
                muted: !1,
                hasClickedPlay: !0
            }) : this.setPlay(!this.state.playing);
        }), M(this, 'setPlay', e => {
            let {
                props: {autoMute: t},
                state: {
                    hasClickedPlay: n,
                    muted: r
                }
            } = this;
            if (e !== this.state.playing)
                e ? this.setState({
                    playing: e,
                    hasClickedPlay: !0,
                    muted: (!!n || !t) && r
                }) : this.setState({
                    playing: !1,
                    hideControls: !1
                });
        }), M(this, 'handleDragStart', e => {
            var t, n;
            this.setState({ dragging: e }), this._analytics.onDragStart(null !== (n = null === (t = this.mediaRef.current) || void 0 === t ? void 0 : t.currentTime) && void 0 !== n ? n : null);
        }), M(this, 'handleDragEnd', () => {
            this.setState({ dragging: null }), this._lastMove = Date.now();
        }), M(this, 'handleKeyDown', e => {
            let {current: t} = this.mediaRef;
            if (e.which === C.yXg.SPACE)
                e.preventDefault(), this.setPlay(!this.state.playing);
            else if (e.which >= C.yXg.DIGIT_0 && e.which <= C.yXg.DIGIT_9 && null != t) {
                e.preventDefault();
                let n = (e.which - C.yXg.DIGIT_0) / 10;
                t.currentTime = t.duration * n, this.setPlay(!0);
            }
        }), this._analytics = new Z({
            src: e.src,
            mimeType: null === (n = e.mimeType) || void 0 === n ? void 0 : n.join('/'),
            fileSize: e.fileSizeBytes
        });
        let {
                autoPlay: r,
                autoMute: i,
                volume: a,
                playable: s
            } = this.props, l = 'function' == typeof a ? a() : a, u = 'function' == typeof i ? i() : i;
        this.state = {
            buffers: [],
            currentTime: null,
            dragging: null,
            duration: null,
            fullscreen: !1,
            hasClickedPlay: !1,
            hasLoadedMetadata: !1,
            hideControls: !s,
            muted: u,
            volume: l,
            playing: r,
            preload: 'none',
            width: Y.minWidth,
            height: Y.minHeight,
            hovering: !1
        };
    }
}
M(Y, 'Types', w), M(Y, 'defaultProps', {
    width: 400,
    height: 300,
    forceExternal: !1,
    playable: !0,
    downloadable: !0,
    autoPlay: !1,
    autoMute: !1,
    volume: 1
}), M(Y, 'minWidth', 150), M(Y, 'minHeight', 110), t.ZP = Y;
