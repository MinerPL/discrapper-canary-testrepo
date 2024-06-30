n(653041);
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(392711), o = n.n(l), c = n(442837), d = n(433517), u = n(481060), _ = n(205355), E = n(607070), h = n(38618), I = n(197344), m = n(474873), p = n(706454), g = n(215427), T = n(820254), S = n(838949), C = n(358085), N = n(557177), f = n(998502), A = n(981631), Z = n(689938), L = n(76410);
function v(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class O extends s.PureComponent {
    createSound() {
        let {soundpack: e} = this.props, t = (0, N.uk)('discodo', e);
        return t.volume = 1, t;
    }
    componentDidMount() {
        this.setProblemsTimeout();
    }
    componentDidUpdate(e, t) {
        let {
                ready: n,
                hide: i,
                problems: s
            } = this.state, {
                connected: a,
                soundpack: r
            } = this.props, l = a && n && !i && !s;
        e.soundpack !== r && (this._connectedSound = this.createSound()), e.connected !== a || l ? (a && null != this.videoRef && d.K.get(A.wli) && this._connectedSound.play(), this.setState({
            problems: !1,
            hide: a
        })) : t.hide !== i ? (i ? this.clearProblemsTimeout() : this.setProblemsTimeout(), this.setState({ shouldRender: !0 }), setTimeout(() => this.setState({ shouldRender: !i }), 200)) : t.problems !== s && s && _.Z.checkIncidents();
    }
    componentWillUnmount() {
        this.clearProblemsTimeout();
    }
    render() {
        let {
                connected: e,
                incident: t
            } = this.props, {hide: n} = this.state;
        if (!this.state.shouldRender)
            return null;
        {
            let s = this._loadingText, a = null;
            return null != this._eventLoadingText && (s = this._eventLoadingText), null != t && (s = t.name, a = t.incident_updates[0].body), (0, i.jsxs)('div', {
                className: L.container,
                'data-fade': n,
                style: {
                    '--connecting-container-fade-duration': ''.concat(200, 'ms'),
                    '--connecting-content-fade-duration': ''.concat(150, 'ms')
                },
                children: [
                    (0, i.jsxs)('div', {
                        className: L.content,
                        children: [
                            (0, i.jsx)(S.Z, {
                                autoPlay: !0,
                                loop: !e,
                                setRef: this.setVideoRef,
                                onReady: this.handleReady,
                                className: r()(L.spinner, this.state.ready ? L.ready : '')
                            }),
                            (0, i.jsxs)('div', {
                                className: L.text,
                                children: [
                                    null != t ? null : (0, i.jsx)('div', {
                                        className: L.tipTitle,
                                        children: Z.Z.Messages.LOADING_DID_YOU_KNOW
                                    }),
                                    (0, i.jsx)('div', {
                                        className: null != t ? L.title : L.tip,
                                        children: s
                                    }),
                                    (0, i.jsx)('div', {
                                        className: L.body,
                                        children: a
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: r()(L.problems, { [L.slideIn]: this.state.problems }),
                        children: [
                            (0, i.jsx)('div', {
                                className: L.problemsText,
                                children: Z.Z.Messages.CONNECTING_PROBLEMS_CTA
                            }),
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsxs)(u.Anchor, {
                                        className: L.twitterLink,
                                        href: A.yXt.TWITTER_SUPPORT,
                                        target: '_blank',
                                        children: [
                                            (0, i.jsx)(u.XNeutralIcon, {
                                                size: 'xs',
                                                color: 'currentColor',
                                                className: L.icon
                                            }),
                                            Z.Z.Messages.TWEET_US
                                        ]
                                    }),
                                    (0, i.jsxs)(u.Anchor, {
                                        className: L.statusLink,
                                        href: A.yXt.STATUS,
                                        target: '_blank',
                                        children: [
                                            (0, i.jsx)(T.Z, { className: L.icon }),
                                            Z.Z.Messages.SERVER_STATUS
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            });
        }
    }
    constructor(e) {
        super(e), v(this, 'videoRef', null), v(this, '_noProblemsTimeout', null), v(this, '_problemsTimeout', null), v(this, '_connectedSound', this.createSound()), v(this, '_loadingText', function () {
            let e = [
                Z.Z.Messages.ACCESSIBILITY_LOADING_TIP_1,
                Z.Z.Messages.ACCESSIBILITY_LOADING_TIP_2,
                Z.Z.Messages.ACCESSIBILITY_LOADING_TIP_3,
                Z.Z.Messages.ACCESSIBILITY_LOADING_TIP_4,
                Z.Z.Messages.ACCESSIBILITY_LOADING_TIP_5,
                Z.Z.Messages.ACCESSIBILITY_LOADING_TIP_6.format({
                    tabHook: (e, t) => (0, i.jsx)(u.KeyCombo, {
                        shortcut: 'tab',
                        className: L.keybind
                    }, t)
                }),
                Z.Z.Messages.ACCESSIBILITY_LOADING_TIP_7,
                Z.Z.Messages.ACCESSIBILITY_LOADING_TIP_8,
                Z.Z.Messages.ACCESSIBILITY_LOADING_TIP_9,
                Z.Z.Messages.ACCESSIBILITY_LOADING_TIP_10.format({
                    F6Hook: (e, t) => (0, i.jsx)(u.KeyCombo, {
                        shortcut: 'f6',
                        className: L.keybind
                    }, t),
                    tabHook: (e, t) => (0, i.jsx)(u.KeyCombo, {
                        shortcut: 'tab',
                        className: L.keybind
                    }, t)
                }),
                Z.Z.Messages.LOADING_LINE_1,
                Z.Z.Messages.LOADING_LINE_2,
                Z.Z.Messages.LOADING_LINE_4,
                Z.Z.Messages.LOADING_LINE_5,
                Z.Z.Messages.LOADING_LINE_6,
                Z.Z.Messages.LOADING_LINE_7,
                Z.Z.Messages.LOADING_LINE_8,
                Z.Z.Messages.LOADING_LINE_9,
                Z.Z.Messages.LOADING_LINE_10,
                Z.Z.Messages.LOADING_LINE_11,
                Z.Z.Messages.LOADING_LINE_12,
                Z.Z.Messages.LOADING_LINE_13,
                Z.Z.Messages.LOADING_LINE_14,
                Z.Z.Messages.LOADING_LINE_15,
                Z.Z.Messages.LOADING_TIP_1,
                Z.Z.Messages.LOADING_TIP_2,
                Z.Z.Messages.LOADING_TIP_3,
                Z.Z.Messages.LOADING_TIP_4,
                Z.Z.Messages.LOADING_TIP_5,
                Z.Z.Messages.LOADING_TIP_6,
                Z.Z.Messages.LOADING_TIP_7,
                Z.Z.Messages.LOADING_TIP_8,
                Z.Z.Messages.LOADING_TIP_9,
                Z.Z.Messages.LOADING_TIP_10,
                Z.Z.Messages.LOADING_TIP_11,
                Z.Z.Messages.LOADING_TIP_12,
                Z.Z.Messages.LOADING_TIP_13,
                Z.Z.Messages.LOADING_TIP_14,
                Z.Z.Messages.LOADING_TIP_15,
                Z.Z.Messages.LOADING_TIP_16,
                Z.Z.Messages.LOADING_TIP_17,
                Z.Z.Messages.LOADING_TIP_18,
                Z.Z.Messages.LOADING_TIP_19,
                Z.Z.Messages.LOADING_TIP_20,
                Z.Z.Messages.LOADING_TIP_21,
                Z.Z.Messages.LOADING_TIP_22,
                Z.Z.Messages.LOADING_TIP_23,
                Z.Z.Messages.LOADING_TIP_24,
                Z.Z.Messages.LOADING_TIP_25,
                Z.Z.Messages.LOADING_TIP_26,
                Z.Z.Messages.LOADING_TIP_27.format({ asterisks: '**' }),
                Z.Z.Messages.LOADING_KEYBIND_TIP_1.format({
                    quickSwitcherHook: (e, t) => (0, i.jsx)(u.KeyCombo, {
                        shortcut: 'mod+k',
                        className: L.keybind
                    }, t)
                }),
                Z.Z.Messages.LOADING_KEYBIND_TIP_2.format({
                    markUnreadHook: (e, t) => (0, i.jsx)(u.KeyCombo, {
                        shortcut: 'alt+click',
                        className: L.keybind
                    }, t)
                }),
                Z.Z.Messages.LOADING_KEYBIND_TIP_3.format({
                    markServerUnreadHook: (e, t) => (0, i.jsx)(u.KeyCombo, {
                        shortcut: 'shift+esc',
                        className: L.keybind
                    }, t)
                }),
                Z.Z.Messages.LOADING_KEYBIND_TIP_4.format({
                    navigateUnreadHook: (e, t) => (0, i.jsx)(u.KeyCombo, {
                        shortcut: 'shift+alt+up',
                        className: L.keybind
                    }, t),
                    downHook: (e, t) => (0, i.jsx)(u.KeyCombo, {
                        shortcut: 'down',
                        className: L.keybind
                    }, t)
                }),
                Z.Z.Messages.LOADING_KEYBIND_TIP_5.format({
                    keyboardShortcutsHook: (e, t) => (0, i.jsx)(u.KeyCombo, {
                        shortcut: 'mod+/',
                        className: L.keybind
                    }, t)
                }),
                Z.Z.Messages.LOADING_KEYBIND_TIP_6.format({
                    messageNewlineHook: (e, t) => (0, i.jsx)(u.KeyCombo, {
                        shortcut: 'shift+return',
                        className: L.keybind
                    }, t)
                }),
                Z.Z.Messages.LOADING_KEYBIND_TIP_7.format({
                    shiftHook: (e, t) => (0, i.jsx)(u.KeyCombo, {
                        shortcut: 'shift',
                        className: L.keybind
                    }, t)
                }),
                Z.Z.Messages.LOADING_KEYBIND_TIP_8.format({
                    upHook: (e, t) => (0, i.jsx)(u.KeyCombo, {
                        shortcut: 'up',
                        className: L.keybind
                    }, t)
                })
            ];
            return p.default.locale.startsWith('en-') && e.push(Z.Z.Messages.POLLS_MARKETING_EASTER_EGG_LOADING_LINE), e[o().random(e.length - 1)];
        }()), v(this, '_eventLoadingText', function () {
            let e = I.Z.getLoadingTips();
            if (null != e && e.length > 0)
                return e[o().random(e.length - 1)];
        }()), v(this, 'handleReady', () => {
            this.setState({ ready: !0 }), (0, C.isDesktop)() && (f.ZP.send('UPDATED_QUOTES', ['Hold Tight \u2014 Loading Discord']), f.ZP.send('UPDATE_OPEN_ON_STARTUP'));
        }), v(this, 'setVideoRef', e => {
            this.videoRef = e;
        }), v(this, 'setProblemsTimeout', () => {
            null == this._problemsTimeout && (this._problemsTimeout = setTimeout(() => this.setState({ problems: !0 }), 10000));
        }), v(this, 'clearProblemsTimeout', () => {
            clearTimeout(this._problemsTimeout), this._problemsTimeout = null;
        });
        let {connected: t} = e;
        this.state = {
            ready: t,
            hide: t,
            problems: !1,
            shouldRender: !t
        }, this._connectedSound.volume = 1;
    }
}
t.Z = c.ZP.connectStores([
    h.Z,
    g.Z,
    m.Z,
    E.Z
], () => ({
    isTryingToConnect: h.Z.isTryingToConnect(),
    connected: h.Z.isConnected(),
    incident: g.Z.getIncident(),
    soundpack: m.Z.getSoundpack(),
    reducedMotion: E.Z.useReducedMotion
}))(e => {
    let {
        isTryingToConnect: t,
        connected: n,
        incident: s,
        soundpack: a,
        reducedMotion: r
    } = e;
    return t ? (0, i.jsx)(O, {
        reducedMotion: r,
        soundpack: a,
        connected: n,
        incident: s
    }) : null;
});
