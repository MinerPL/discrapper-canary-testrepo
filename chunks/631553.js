let i;
n.d(t, {
    Z: function () {
        return em;
    }
}),
    n(653041);
var r = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(921738),
    c = n.n(o),
    d = n(954955),
    u = n.n(d),
    h = n(498607),
    p = n.n(h),
    f = n(442837),
    g = n(481060),
    m = n(668781),
    v = n(239091),
    _ = n(13245),
    E = n(425493),
    x = n(951483),
    Z = n(714338),
    I = n(185666),
    S = n(100527),
    C = n(906732),
    y = n(146282),
    N = n(600164);
n(70097);
var T = n(594190),
    b = n(567409),
    O = n(74299),
    j = n(989941),
    A = n(377400),
    P = n(329557),
    R = n(199902),
    L = n(314897),
    w = n(592125),
    M = n(430824),
    D = n(131951),
    k = n(944486),
    z = n(618541),
    V = n(449224),
    U = n(574254),
    B = n(556296),
    W = n(237997),
    G = n(451478),
    F = n(70956),
    H = n(358085),
    Y = n(998502),
    K = n(13140),
    X = n(145597),
    Q = n(658785),
    q = n(681603),
    J = n(358446),
    $ = n(348733),
    ee = n(312178),
    et = n(708383),
    en = n(923532),
    ei = n(107200),
    er = n(987650),
    es = n(981631),
    ea = n(206583),
    el = n(388032),
    eo = n(310906);
function ec(e, t, n) {
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
let ed = null;
function eu(e) {
    e.preventDefault();
}
function eh(e) {
    (0, v.jW)(e, async () => {
        let { default: e } = await n.e('92780').then(n.bind(n, 930381));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
H.isPlatformEmbedded;
let ep = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: s } = e,
            a = s ? g.Clickable : 'div';
        return (0, r.jsx)(a, {
            className: l()(eo.overlayBackground, {
                [eo.overlayActive]: !s,
                [eo.overlayLocked]: s,
                [eo.previewMode]: !s && i
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === es.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: eh,
            children: s
                ? null
                : (0, r.jsx)('div', {
                      className: eo.closeContainer,
                      children: (0, r.jsx)(E.Z, {
                          variant: E.Z.Variants.BOLD,
                          keybind: t,
                          closeAction: n
                      })
                  })
        });
    },
    ef = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: r, ctrlKey: s } = e;
        return {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: r,
            ctrlKey: s
        };
    };
class eg extends s.Component {
    handleLock() {
        !(0, g.hasAnyModalOpen)() && !U.Z.isOpen() && _.Z.setInputLocked(!0, (0, X.QF)());
    }
    handleDeactivate() {
        _.Z.deactivateAllRegions();
    }
    componentDidMount() {
        _.Z.startSession(), A.Z.initialize(), I.Z.initialize(), P.Z.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (!!t) {
            if (t && !e.initialized) {
                this.initialSetup();
                return;
            }
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener('contextmenu', eu, !1), null != ed)) {
                    let e = Date.now() - ed;
                    _.Z.track(es.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (ed = null);
                }
                Z.Z.disable(), (this.activeKeyEventShapes = []), W.Z.isPinned(es.Odu.TEXT) && (Z.Z.setLayout(x.Xq), Z.Z.enable());
            } else e.locked && !this.props.locked && (window.removeEventListener('contextmenu', eu, !1), null == ed && ((ed = Date.now()), _.Z.track(es.rMx.OVERLAY_UNLOCKED)), Z.Z.disable(), (this.activeKeyEventShapes = []), Z.Z.setLayout(x.Sr), Z.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, K.d2)(this.props.keybindKeyCodes)), !e.hasFetchedContentInventory && this.props.hasFetchedContentInventory && _.Z.notifyContentInventoryReady(this.props.contentInventoryEntries);
        }
    }
    initialSetup() {
        let { connectedToVoice: e, locked: t, canGoLive: n, isStreaming: i, voiceGuild: r, voiceChannelId: s, game: a, showKeybindNotification: l, dismissKeybindNotification: o } = this.props;
        _.Z.track(es.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: W.Z.isPinned(es.Odu.TEXT)
        }),
            Q.Z.trackExposure({ location: 'Overlay' });
        let c = n && !i && null != a,
            d = e && null != r && null != s,
            u = { type: er.nc.WELCOME };
        if (
            (l
                ? (u = {
                      type: er.nc.KEYBIND_INDICATORS,
                      markAsDismissed: o
                  })
                : c && d
                  ? (u = {
                        type: er.nc.GO_LIVE_VOICE,
                        game: a,
                        voiceChannelId: s,
                        voiceGuild: r
                    })
                  : c &&
                    (u = {
                        type: er.nc.GO_LIVE_NON_VOICE,
                        game: a
                    }),
            _.Z.overlayMounted(u),
            window.addEventListener('resize', this.handleWindowResize),
            t && window.addEventListener('contextmenu', eu, !1),
            H.isPlatformEmbedded)
        ) {
            let e = Y.ZP.requireModule('discord_overlay2');
            void 0 !== e.setPerfInfoCallback &&
                (e.setPerfInfoCallback((e) => {
                    _.Z.track(es.rMx.OVERLAY_PERF_INFO, e);
                }),
                e.broadcastCommand({
                    message: 'set_perf_report_interval',
                    interval: 15 * F.Z.Millis.MINUTE
                })),
                Y.ZP.on('REQUEST_OPEN_EXTERNAL_URL', (e, t) => {
                    W.Z.getDisableExternalLinkAlert() || t === z.Z.getLastURL()
                        ? Y.ZP.send('OPEN_EXTERNAL_URL', t)
                        : m.Z.show({
                              title: el.intl.string(el.t.WLx4Fx),
                              body: el.intl.string(el.t.H8O1TE),
                              secondaryConfirmText: el.intl.string(el.t.IwqGhY),
                              confirmText: el.intl.string(el.t['3PatS0']),
                              cancelText: el.intl.string(el.t['ETE/oK']),
                              onConfirmSecondary: () => {
                                  _.Z.disableExternalLinkAlert(), Y.ZP.send('OPEN_EXTERNAL_URL', t);
                              },
                              onConfirm: () => Y.ZP.send('OPEN_EXTERNAL_URL', t)
                          });
                });
        }
        window.addEventListener('keydown', this.onKeyDownGlobal, !0), window.addEventListener('keyup', this.onKeyUpGlobal, !0);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize), window.removeEventListener('keydown', this.onKeyDownGlobal, !0), window.removeEventListener('keyup', this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener('contextmenu', eu, !1), A.Z.terminate(), I.Z.terminate(), P.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, r.jsx)(N.Z, {
            justify: N.Z.Justify.CENTER,
            align: N.Z.Align.CENTER,
            className: eo.invalidContainer,
            children: (0, r.jsx)('div', {
                className: eo.inactiveContainer,
                children: el.intl.format(el.t.ketnW1, X.FW)
            })
        });
    }
    render() {
        let { locked: e, keybind: t, incompatibleApp: n, initialized: s, isPreviewingInGame: a, activeRegions: o, windowSize: c, voiceGuild: d, voiceChannelId: u } = this.props,
            { width: h, height: p } = c;
        if (0 === h || 0 === p || n || !s) return null;
        let f = e || a,
            g = L.default.getId();
        return (0, r.jsxs)('div', {
            className: eo.overlay,
            children: [
                (0, r.jsx)(et.Z, {}),
                a &&
                    (0, r.jsx)('header', {
                        className: eo.previewingInGameHeader,
                        children: el.intl.string(el.t.iOq96u)
                    }),
                i,
                (!e || o.has(es.O0n.TEXT_WIDGET)) &&
                    (0, r.jsx)(ep, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: a
                    }),
                (0, X.Te)(c)
                    ? (0, r.jsx)(ee.Z, {
                          className: l()({
                              [eo.layoutLocked]: e,
                              [eo.layoutUnlocked]: !e
                          })
                      })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, r.jsx)(ei.Z, {}),
                null != d &&
                    null != u &&
                    (0, r.jsx)(en.Z, {
                        streamerId: g,
                        guildId: d.id,
                        channelId: u
                    }),
                (0, r.jsx)($.Z, {
                    locked: f,
                    keybind: t
                }),
                (0, r.jsx)(q.Z, {})
            ]
        });
    }
    constructor(e) {
        super(e),
            ec(this, 'handleWindowResize', () => {
                (0, X.W2)()
                    ? this.forceUpdate()
                    : u()(() => {
                          this.forceUpdate();
                      }, 500);
            }),
            ec(this, 'activeKeyEventShapes', []),
            ec(this, 'lockEventShape', (0, K.d2)(this.props.keybindKeyCodes)),
            ec(this, 'getActiveKeyEventIndex', (e) => this.activeKeyEventShapes.findIndex((t) => p()(t, e))),
            ec(this, 'onKeyDownGlobal', (e) => {
                let t = ef(e),
                    n = this.getActiveKeyEventIndex(t) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                !n && !i && this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => p()(e, t))) && (e.preventDefault(), e.stopPropagation());
                let { locked: r, activeRegions: s } = this.props;
                t.keyCode === c().codes.esc && r && s.has(es.O0n.TEXT_WIDGET) && _.Z.deactivateAllRegions();
            }),
            ec(this, 'onKeyUpGlobal', (e) => {
                let t = ef(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
        let t = e.locked && W.Z.isPinned(es.Odu.TEXT);
        Z.Z.setLayout(t ? x.Xq : x.Sr), t && Z.Z.enable();
    }
}
function em() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: s
        } = (0, f.cj)([W.Z], () => ({
            locked: W.Z.isLocked((0, X.QF)()),
            initialized: W.Z.initialized,
            incompatibleApp: W.Z.incompatibleApp,
            activeRegions: W.Z.getActiveRegions(),
            isPreviewingInGame: W.Z.isPreviewingInGame()
        })),
        a = (0, f.e7)([G.Z], () => G.Z.windowSize()),
        l = (0, f.e7)([B.Z], () => B.Z.getOverlayKeybind()),
        o = (0, f.e7)([k.Z], () => k.Z.getVoiceChannelId()),
        c = (0, f.e7)([w.Z], () => w.Z.getChannel(o)),
        d = (0, f.e7)([M.Z], () => (null != c ? M.Z.getGuild(c.guild_id) : null)),
        u = (0, f.e7)([T.ZP, V.Z], () => (0, j.Z)(T.ZP, V.Z)),
        h = (0, b.Ns)(null == u ? void 0 : u.id),
        p = (0, f.e7)([y.Z], () => null != y.Z.getLastFeedFetchDate(ea.YN.GAME_PROFILE_FEED)),
        m = (0, f.e7)([D.Z], () => (0, O.Z)(D.Z)),
        v = (0, f.e7)([R.Z], () => null != R.Z.getCurrentUserActiveStream()),
        { analyticsLocations: _ } = (0, C.ZP)(S.Z.OVERLAY),
        { showKeybindIndicators: E, dismissKeybindNotification: x } = (0, J.K)();
    return (0, r.jsx)(C.Gt, {
        value: _,
        children: (0, r.jsx)(g.RedesignIconContextProvider, {
            children: (0, r.jsx)(eg, {
                locked: e,
                initialized: t,
                incompatibleApp: n,
                activeRegions: i,
                isPreviewingInGame: s,
                windowSize: a,
                keybind: null != l ? (0, K.BB)(l.shortcut, !0) : '???',
                keybindKeyCodes: null != l ? l.shortcut : [],
                connectedToVoice: null != o,
                voiceChannelId: null != c ? c.id : null,
                voiceGuild: d,
                game: u,
                canGoLive: m,
                isStreaming: v,
                showKeybindNotification: E,
                dismissKeybindNotification: x,
                contentInventoryEntries: h,
                hasFetchedContentInventory: p
            })
        })
    });
}
