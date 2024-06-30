let i;
n.d(t, {
    Z: function () {
        return e_;
    }
}), n(653041);
var s = n(735250), a = n(470079), o = n(120356), r = n.n(o), l = n(921738), c = n.n(l), d = n(954955), u = n.n(d), h = n(498607), p = n.n(h), f = n(442837), _ = n(481060), g = n(668781), m = n(239091), E = n(13245), Z = n(425493), I = n(951483), S = n(714338), C = n(185666), v = n(100527), x = n(906732), T = n(770471), N = n(757454), O = n(594190), A = n(74299), y = n(989941), R = n(377400), M = n(329557), b = n(199902), L = n(314897), P = n(592125), D = n(430824), w = n(131951), j = n(944486), k = n(618541), V = n(449224), B = n(574254), U = n(556296), z = n(237997), G = n(451478), W = n(285952);
n(810090);
var Y = n(70956), F = n(358085), H = n(998502), K = n(13140), X = n(145597), Q = n(658785), J = n(681603), q = n(358446), $ = n(348733), ee = n(312178), et = n(708383), en = n(923532), ei = n(107200), es = n(987650), ea = n(981631), eo = n(689938), er = n(217098);
function el(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
f.ZP.PersistedStore.disableWrites = __OVERLAY__, f.ZP.initialize();
let ec = null;
function ed(e) {
    e.preventDefault();
}
function eu(e) {
    (0, m.jW)(e, async () => {
        let {default: e} = await n.e('92780').then(n.bind(n, 930381));
        return t => (0, s.jsx)(e, { ...t });
    });
}
F.isPlatformEmbedded;
let eh = e => {
        let {
                keybind: t,
                onClick: n,
                isPreviewingInGame: i,
                locked: a
            } = e, o = a ? _.Clickable : 'div';
        return (0, s.jsx)(o, {
            className: r()(er.overlayBackground, {
                [er.overlayActive]: !a,
                [er.overlayLocked]: a,
                [er.previewMode]: !a && i
            }),
            onMouseDown: e => {
                let {
                    currentTarget: t,
                    target: i,
                    button: s
                } = e;
                s === ea.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: eu,
            children: a ? null : (0, s.jsx)('div', {
                className: er.closeContainer,
                children: (0, s.jsx)(Z.Z, {
                    variant: Z.Z.Variants.BOLD,
                    keybind: t,
                    closeAction: n
                })
            })
        });
    }, ep = e => {
        let {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: s,
            ctrlKey: a
        } = e;
        return {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: s,
            ctrlKey: a
        };
    };
class ef extends a.Component {
    handleLock() {
        !(0, _.hasAnyModalOpen)() && !B.Z.isOpen() && E.Z.setLocked(!0, (0, X.QF)());
    }
    handleDeactivate() {
        E.Z.deactivateAllRegions();
    }
    componentDidMount() {
        E.Z.startSession(), R.Z.initialize(), C.Z.initialize(), M.Z.initialize();
    }
    componentDidUpdate(e) {
        let {initialized: t} = this.props;
        if (!!t) {
            if (t && !e.initialized) {
                this.initialSetup();
                return;
            }
            if (!e.locked && this.props.locked) {
                if (window.addEventListener('contextmenu', ed, !1), null != ec) {
                    let e = Date.now() - ec;
                    E.Z.track(ea.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), ec = null;
                }
                S.Z.disable(), this.activeKeyEventShapes = [], z.Z.isPinned(ea.Odu.TEXT) && (S.Z.setLayout(I.Xq), S.Z.enable());
            } else
                e.locked && !this.props.locked && (window.removeEventListener('contextmenu', ed, !1), null == ec && (ec = Date.now(), E.Z.track(ea.rMx.OVERLAY_UNLOCKED)), S.Z.disable(), this.activeKeyEventShapes = [], S.Z.setLayout(I.Sr), S.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, K.d2)(this.props.keybindKeyCodes));
        }
    }
    initialSetup() {
        let {
            connectedToVoice: e,
            locked: t,
            canGoLive: n,
            isStreaming: i,
            voiceGuild: s,
            voiceChannelId: a,
            game: o,
            canStartBroadcast: r,
            canBroadcast: l,
            showKeybindNotification: c,
            dismissKeybindNotification: d
        } = this.props;
        E.Z.track(ea.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: z.Z.isPinned(ea.Odu.TEXT)
        }), Q.Z.trackExposure({ location: 'Overlay' });
        let u = n && !i && null != o, h = e && null != s && null != a, p = { type: es.nc.WELCOME };
        if (c ? p = {
                type: es.nc.KEYBIND_INDICATORS,
                markAsDismissed: d
            } : u && !e && r ? (T.Z.trackExposure({ location: 'overlay_notification' }), l && (p = {
                type: es.nc.BROADCAST,
                game: o
            })) : u && h ? p = {
                type: es.nc.GO_LIVE_VOICE,
                game: o,
                voiceChannelId: a,
                voiceGuild: s
            } : u && (p = {
                type: es.nc.GO_LIVE_NON_VOICE,
                game: o
            }), E.Z.overlayMounted(p), window.addEventListener('resize', this.handleWindowResize), t && window.addEventListener('contextmenu', ed, !1), F.isPlatformEmbedded) {
            let e = H.ZP.requireModule('discord_overlay2');
            void 0 !== e.setPerfInfoCallback && (e.setPerfInfoCallback(e => {
                E.Z.track(ea.rMx.OVERLAY_PERF_INFO, e);
            }), e.broadcastCommand({
                message: 'set_perf_report_interval',
                interval: 15 * Y.Z.Millis.MINUTE
            })), H.ZP.on('REQUEST_OPEN_EXTERNAL_URL', (e, t) => {
                z.Z.getDisableExternalLinkAlert() || t === k.Z.getLastURL() ? H.ZP.send('OPEN_EXTERNAL_URL', t) : g.Z.show({
                    title: eo.Z.Messages.OVERLAY_LINK_ALERT_TITLE,
                    body: eo.Z.Messages.OVERLAY_LINK_ALERT_BODY,
                    secondaryConfirmText: eo.Z.Messages.OVERLAY_LINK_ALERT_SECONDARY,
                    confirmText: eo.Z.Messages.CONTINUE,
                    cancelText: eo.Z.Messages.CANCEL,
                    onConfirmSecondary: () => {
                        E.Z.disableExternalLinkAlert(), H.ZP.send('OPEN_EXTERNAL_URL', t);
                    },
                    onConfirm: () => H.ZP.send('OPEN_EXTERNAL_URL', t)
                });
            });
        }
        window.addEventListener('keydown', this.onKeyDownGlobal, !0), window.addEventListener('keyup', this.onKeyUpGlobal, !0);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize), window.removeEventListener('keydown', this.onKeyDownGlobal, !0), window.removeEventListener('keyup', this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener('contextmenu', ed, !1), R.Z.terminate(), C.Z.terminate(), M.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, s.jsx)(W.Z, {
            justify: W.Z.Justify.CENTER,
            align: W.Z.Align.CENTER,
            className: er.invalidContainer,
            children: (0, s.jsx)('div', {
                className: er.inactiveContainer,
                children: eo.Z.Messages.OVERLAY_TOO_SMALL.format(X.FW)
            })
        });
    }
    render() {
        let {
                locked: e,
                keybind: t,
                incompatibleApp: n,
                initialized: a,
                isPreviewingInGame: o,
                activeRegions: l,
                windowSize: c,
                voiceGuild: d,
                voiceChannelId: u
            } = this.props, {
                width: h,
                height: p
            } = c;
        if (0 === h || 0 === p || n || !a)
            return null;
        let f = e || o, _ = L.default.getId();
        return (0, s.jsxs)('div', {
            className: er.overlay,
            children: [
                (0, s.jsx)(et.Z, {}),
                o && (0, s.jsx)('header', {
                    className: er.previewingInGameHeader,
                    children: eo.Z.Messages.OVERLAY_IN_GAME_PREVIEW_HEADER
                }),
                i,
                (!e || l.has(ea.O0n.TEXT_WIDGET)) && (0, s.jsx)(eh, {
                    locked: e,
                    keybind: t,
                    onClick: e ? this.handleDeactivate : this.handleLock,
                    isPreviewingInGame: o
                }),
                (0, X.Te)(c) ? (0, s.jsx)(ee.Z, {
                    className: r()({
                        [er.layoutLocked]: e,
                        [er.layoutUnlocked]: !e
                    })
                }) : e ? null : this.renderInvalidSizeMessage(),
                (0, s.jsx)(ei.Z, {}),
                null != d && null != u && (0, s.jsx)(en.Z, {
                    streamerId: _,
                    guildId: d.id,
                    channelId: u
                }),
                (0, s.jsx)($.Z, {
                    locked: f,
                    keybind: t
                }),
                (0, s.jsx)(J.Z, {})
            ]
        });
    }
    constructor(e) {
        super(e), el(this, 'handleWindowResize', () => {
            (0, X.W2)() ? this.forceUpdate() : u()(() => {
                this.forceUpdate();
            }, 500);
        }), el(this, 'activeKeyEventShapes', []), el(this, 'lockEventShape', (0, K.d2)(this.props.keybindKeyCodes)), el(this, 'getActiveKeyEventIndex', e => this.activeKeyEventShapes.findIndex(t => p()(t, e))), el(this, 'onKeyDownGlobal', e => {
            let t = ep(e), n = this.getActiveKeyEventIndex(t) > -1, i = [
                    16,
                    17,
                    18,
                    91
                ].includes(e.keyCode);
            !n && !i && this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every(e => this.activeKeyEventShapes.some(t => p()(e, t))) && (e.preventDefault(), e.stopPropagation());
            let {
                locked: s,
                activeRegions: a
            } = this.props;
            t.keyCode === c().codes.esc && s && a.has(ea.O0n.TEXT_WIDGET) && E.Z.deactivateAllRegions();
        }), el(this, 'onKeyUpGlobal', e => {
            let t = ep(e), n = this.getActiveKeyEventIndex(t);
            n > -1 && this.activeKeyEventShapes.splice(n, 1);
        });
        let t = e.locked && z.Z.isPinned(ea.Odu.TEXT);
        S.Z.setLayout(t ? I.Xq : I.Sr), t && S.Z.enable();
    }
}
function e_() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: a
        } = (0, f.cj)([z.Z], () => ({
            locked: z.Z.isUILocked((0, X.QF)()),
            initialized: z.Z.initialized,
            incompatibleApp: z.Z.incompatibleApp,
            activeRegions: z.Z.getActiveRegions(),
            isPreviewingInGame: z.Z.isPreviewingInGame()
        })), o = (0, f.e7)([G.Z], () => G.Z.windowSize()), r = (0, f.e7)([U.Z], () => U.Z.getOverlayKeybind()), l = (0, f.e7)([j.Z], () => j.Z.getVoiceChannelId()), c = (0, f.e7)([P.Z], () => P.Z.getChannel(l)), d = (0, f.e7)([D.Z], () => null != c ? D.Z.getGuild(c.guild_id) : null), u = (0, f.e7)([
            O.ZP,
            V.Z
        ], () => (0, y.Z)(O.ZP, V.Z)), h = (0, f.e7)([w.Z], () => (0, A.Z)(w.Z)), {canBroadcast: p} = T.Z.useExperiment({ location: 'overlay' }, { autoTrackExposure: !1 }), g = (0, N.Z)() && null != u, m = (0, f.e7)([b.Z], () => null != b.Z.getCurrentUserActiveStream()), {analyticsLocations: E} = (0, x.ZP)(v.Z.OVERLAY), {
            showKeybindIndicators: Z,
            dismissKeybindNotification: I
        } = (0, q.K)();
    return (0, s.jsx)(x.Gt, {
        value: E,
        children: (0, s.jsx)(_.RedesignIconContextProvider, {
            children: (0, s.jsx)(ef, {
                locked: e,
                initialized: t,
                incompatibleApp: n,
                activeRegions: i,
                isPreviewingInGame: a,
                windowSize: o,
                keybind: null != r ? (0, K.BB)(r.shortcut, !0) : '???',
                keybindKeyCodes: null != r ? r.shortcut : [],
                connectedToVoice: null != l,
                voiceChannelId: null != c ? c.id : null,
                voiceGuild: d,
                game: u,
                canGoLive: h,
                isStreaming: m,
                canBroadcast: p,
                canStartBroadcast: g,
                showKeybindNotification: Z,
                dismissKeybindNotification: I
            })
        })
    });
}
