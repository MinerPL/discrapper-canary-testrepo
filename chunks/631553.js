let i;
n.d(t, {
    Z: function () {
        return ep;
    }
}),
    n(653041);
var s = n(735250),
    a = n(470079),
    o = n(120356),
    r = n.n(o),
    l = n(921738),
    c = n.n(l),
    d = n(954955),
    u = n.n(d),
    h = n(498607),
    p = n.n(h),
    f = n(442837),
    _ = n(481060),
    g = n(668781),
    m = n(239091),
    E = n(13245),
    Z = n(425493),
    I = n(951483),
    S = n(714338),
    v = n(185666),
    C = n(100527),
    x = n(906732),
    T = n(600164);
n(70097);
var N = n(594190),
    O = n(74299),
    A = n(989941),
    y = n(377400),
    b = n(329557),
    M = n(199902),
    R = n(314897),
    L = n(592125),
    P = n(430824),
    D = n(131951),
    w = n(944486),
    j = n(618541),
    k = n(449224),
    V = n(574254),
    U = n(556296),
    z = n(237997),
    B = n(451478),
    G = n(70956),
    W = n(358085),
    Y = n(998502),
    H = n(13140),
    F = n(145597),
    K = n(658785),
    X = n(681603),
    Q = n(358446),
    J = n(348733),
    q = n(312178),
    $ = n(708383),
    ee = n(923532),
    et = n(107200),
    en = n(987650),
    ei = n(981631),
    es = n(689938),
    ea = n(310906);
function eo(e, t, n) {
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
(f.ZP.PersistedStore.disableWrites = __OVERLAY__), f.ZP.initialize();
let er = null;
function el(e) {
    e.preventDefault();
}
function ec(e) {
    (0, m.jW)(e, async () => {
        let { default: e } = await n.e('92780').then(n.bind(n, 930381));
        return (t) => (0, s.jsx)(e, { ...t });
    });
}
W.isPlatformEmbedded;
let ed = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: a } = e,
            o = a ? _.Clickable : 'div';
        return (0, s.jsx)(o, {
            className: r()(ea.overlayBackground, {
                [ea.overlayActive]: !a,
                [ea.overlayLocked]: a,
                [ea.previewMode]: !a && i
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: s } = e;
                s === ei.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: ec,
            children: a
                ? null
                : (0, s.jsx)('div', {
                      className: ea.closeContainer,
                      children: (0, s.jsx)(Z.Z, {
                          variant: Z.Z.Variants.BOLD,
                          keybind: t,
                          closeAction: n
                      })
                  })
        });
    },
    eu = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: s, ctrlKey: a } = e;
        return {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: s,
            ctrlKey: a
        };
    };
class eh extends a.Component {
    handleLock() {
        !(0, _.hasAnyModalOpen)() && !V.Z.isOpen() && E.Z.setLocked(!0, (0, F.QF)());
    }
    handleDeactivate() {
        E.Z.deactivateAllRegions();
    }
    componentDidMount() {
        E.Z.startSession(), y.Z.initialize(), v.Z.initialize(), b.Z.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (!!t) {
            if (t && !e.initialized) {
                this.initialSetup();
                return;
            }
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener('contextmenu', el, !1), null != er)) {
                    let e = Date.now() - er;
                    E.Z.track(ei.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (er = null);
                }
                S.Z.disable(), (this.activeKeyEventShapes = []), z.Z.isPinned(ei.Odu.TEXT) && (S.Z.setLayout(I.Xq), S.Z.enable());
            } else e.locked && !this.props.locked && (window.removeEventListener('contextmenu', el, !1), null == er && ((er = Date.now()), E.Z.track(ei.rMx.OVERLAY_UNLOCKED)), S.Z.disable(), (this.activeKeyEventShapes = []), S.Z.setLayout(I.Sr), S.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, H.d2)(this.props.keybindKeyCodes));
        }
    }
    initialSetup() {
        let { connectedToVoice: e, locked: t, canGoLive: n, isStreaming: i, voiceGuild: s, voiceChannelId: a, game: o, showKeybindNotification: r, dismissKeybindNotification: l } = this.props;
        E.Z.track(ei.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: z.Z.isPinned(ei.Odu.TEXT)
        }),
            K.Z.trackExposure({ location: 'Overlay' });
        let c = n && !i && null != o,
            d = e && null != s && null != a,
            u = { type: en.nc.WELCOME };
        if (
            (r
                ? (u = {
                      type: en.nc.KEYBIND_INDICATORS,
                      markAsDismissed: l
                  })
                : c && d
                  ? (u = {
                        type: en.nc.GO_LIVE_VOICE,
                        game: o,
                        voiceChannelId: a,
                        voiceGuild: s
                    })
                  : c &&
                    (u = {
                        type: en.nc.GO_LIVE_NON_VOICE,
                        game: o
                    }),
            E.Z.overlayMounted(u),
            window.addEventListener('resize', this.handleWindowResize),
            t && window.addEventListener('contextmenu', el, !1),
            W.isPlatformEmbedded)
        ) {
            let e = Y.ZP.requireModule('discord_overlay2');
            void 0 !== e.setPerfInfoCallback &&
                (e.setPerfInfoCallback((e) => {
                    E.Z.track(ei.rMx.OVERLAY_PERF_INFO, e);
                }),
                e.broadcastCommand({
                    message: 'set_perf_report_interval',
                    interval: 15 * G.Z.Millis.MINUTE
                })),
                Y.ZP.on('REQUEST_OPEN_EXTERNAL_URL', (e, t) => {
                    z.Z.getDisableExternalLinkAlert() || t === j.Z.getLastURL()
                        ? Y.ZP.send('OPEN_EXTERNAL_URL', t)
                        : g.Z.show({
                              title: es.Z.Messages.OVERLAY_LINK_ALERT_TITLE,
                              body: es.Z.Messages.OVERLAY_LINK_ALERT_BODY,
                              secondaryConfirmText: es.Z.Messages.OVERLAY_LINK_ALERT_SECONDARY,
                              confirmText: es.Z.Messages.CONTINUE,
                              cancelText: es.Z.Messages.CANCEL,
                              onConfirmSecondary: () => {
                                  E.Z.disableExternalLinkAlert(), Y.ZP.send('OPEN_EXTERNAL_URL', t);
                              },
                              onConfirm: () => Y.ZP.send('OPEN_EXTERNAL_URL', t)
                          });
                });
        }
        window.addEventListener('keydown', this.onKeyDownGlobal, !0), window.addEventListener('keyup', this.onKeyUpGlobal, !0);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize), window.removeEventListener('keydown', this.onKeyDownGlobal, !0), window.removeEventListener('keyup', this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener('contextmenu', el, !1), y.Z.terminate(), v.Z.terminate(), b.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, s.jsx)(T.Z, {
            justify: T.Z.Justify.CENTER,
            align: T.Z.Align.CENTER,
            className: ea.invalidContainer,
            children: (0, s.jsx)('div', {
                className: ea.inactiveContainer,
                children: es.Z.Messages.OVERLAY_TOO_SMALL.format(F.FW)
            })
        });
    }
    render() {
        let { locked: e, keybind: t, incompatibleApp: n, initialized: a, isPreviewingInGame: o, activeRegions: l, windowSize: c, voiceGuild: d, voiceChannelId: u } = this.props,
            { width: h, height: p } = c;
        if (0 === h || 0 === p || n || !a) return null;
        let f = e || o,
            _ = R.default.getId();
        return (0, s.jsxs)('div', {
            className: ea.overlay,
            children: [
                (0, s.jsx)($.Z, {}),
                o &&
                    (0, s.jsx)('header', {
                        className: ea.previewingInGameHeader,
                        children: es.Z.Messages.OVERLAY_IN_GAME_PREVIEW_HEADER
                    }),
                i,
                (!e || l.has(ei.O0n.TEXT_WIDGET)) &&
                    (0, s.jsx)(ed, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: o
                    }),
                (0, F.Te)(c)
                    ? (0, s.jsx)(q.Z, {
                          className: r()({
                              [ea.layoutLocked]: e,
                              [ea.layoutUnlocked]: !e
                          })
                      })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, s.jsx)(et.Z, {}),
                null != d &&
                    null != u &&
                    (0, s.jsx)(ee.Z, {
                        streamerId: _,
                        guildId: d.id,
                        channelId: u
                    }),
                (0, s.jsx)(J.Z, {
                    locked: f,
                    keybind: t
                }),
                (0, s.jsx)(X.Z, {})
            ]
        });
    }
    constructor(e) {
        super(e),
            eo(this, 'handleWindowResize', () => {
                (0, F.W2)()
                    ? this.forceUpdate()
                    : u()(() => {
                          this.forceUpdate();
                      }, 500);
            }),
            eo(this, 'activeKeyEventShapes', []),
            eo(this, 'lockEventShape', (0, H.d2)(this.props.keybindKeyCodes)),
            eo(this, 'getActiveKeyEventIndex', (e) => this.activeKeyEventShapes.findIndex((t) => p()(t, e))),
            eo(this, 'onKeyDownGlobal', (e) => {
                let t = eu(e),
                    n = this.getActiveKeyEventIndex(t) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                !n && !i && this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => p()(e, t))) && (e.preventDefault(), e.stopPropagation());
                let { locked: s, activeRegions: a } = this.props;
                t.keyCode === c().codes.esc && s && a.has(ei.O0n.TEXT_WIDGET) && E.Z.deactivateAllRegions();
            }),
            eo(this, 'onKeyUpGlobal', (e) => {
                let t = eu(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
        let t = e.locked && z.Z.isPinned(ei.Odu.TEXT);
        S.Z.setLayout(t ? I.Xq : I.Sr), t && S.Z.enable();
    }
}
function ep() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: a
        } = (0, f.cj)([z.Z], () => ({
            locked: z.Z.isUILocked((0, F.QF)()),
            initialized: z.Z.initialized,
            incompatibleApp: z.Z.incompatibleApp,
            activeRegions: z.Z.getActiveRegions(),
            isPreviewingInGame: z.Z.isPreviewingInGame()
        })),
        o = (0, f.e7)([B.Z], () => B.Z.windowSize()),
        r = (0, f.e7)([U.Z], () => U.Z.getOverlayKeybind()),
        l = (0, f.e7)([w.Z], () => w.Z.getVoiceChannelId()),
        c = (0, f.e7)([L.Z], () => L.Z.getChannel(l)),
        d = (0, f.e7)([P.Z], () => (null != c ? P.Z.getGuild(c.guild_id) : null)),
        u = (0, f.e7)([N.ZP, k.Z], () => (0, A.Z)(N.ZP, k.Z)),
        h = (0, f.e7)([D.Z], () => (0, O.Z)(D.Z)),
        p = (0, f.e7)([M.Z], () => null != M.Z.getCurrentUserActiveStream()),
        { analyticsLocations: g } = (0, x.ZP)(C.Z.OVERLAY),
        { showKeybindIndicators: m, dismissKeybindNotification: E } = (0, Q.K)();
    return (0, s.jsx)(x.Gt, {
        value: g,
        children: (0, s.jsx)(_.RedesignIconContextProvider, {
            children: (0, s.jsx)(eh, {
                locked: e,
                initialized: t,
                incompatibleApp: n,
                activeRegions: i,
                isPreviewingInGame: a,
                windowSize: o,
                keybind: null != r ? (0, H.BB)(r.shortcut, !0) : '???',
                keybindKeyCodes: null != r ? r.shortcut : [],
                connectedToVoice: null != l,
                voiceChannelId: null != c ? c.id : null,
                voiceGuild: d,
                game: u,
                canGoLive: h,
                isStreaming: p,
                showKeybindNotification: m,
                dismissKeybindNotification: E
            })
        })
    });
}
