n.r(t),
    n.d(t, {
        default: function () {
            return z;
        }
    }),
    n(47120);
var l,
    s,
    i = n(735250),
    r = n(470079),
    a = n(512722),
    o = n.n(a),
    c = n(180081),
    d = n(442837),
    u = n(481060),
    f = n(668781),
    h = n(287734),
    m = n(872810),
    x = n(410575),
    _ = n(812206),
    g = n(600164),
    p = n(313201),
    C = n(594190),
    S = n(998594),
    j = n(751571),
    v = n(695346),
    E = n(361291),
    I = n(592125),
    Z = n(430824),
    T = n(944486),
    N = n(594174),
    M = n(449224),
    R = n(626135),
    A = n(358085),
    O = n(998502),
    L = n(451467),
    w = n(537413),
    b = n(299570),
    D = n(960861),
    P = n(989941),
    y = n(399299),
    G = n(351152),
    B = n(567126),
    k = n(143135),
    U = n(37113),
    V = n(981631),
    H = n(761274),
    W = n(689938),
    F = n(458623);
((s = l || (l = {}))[(s.GUILD = 0)] = 'GUILD'), (s[(s.NATIVE_PICKER_SOURCE = 1)] = 'NATIVE_PICKER_SOURCE'), (s[(s.SOURCE = 2)] = 'SOURCE'), (s[(s.CONFIRM = 3)] = 'CONFIRM');
function z(e) {
    var t, l, s, a, z, Y, K;
    let { selectGuild: Q = !1, selectSource: X = !0, guildId: q, analyticsLocation: J, onClose: $, transitionState: ee } = e,
        { preset: et, resolution: en, fps: el, soundshareEnabled: es } = (0, d.cj)([E.Z], () => E.Z.getState()),
        ei = (0, d.e7)([T.Z, I.Z], () => I.Z.getChannel(T.Z.getVoiceChannelId())),
        er = (0, d.e7)([C.ZP, M.Z], () => ((0, A.isWindows)() ? (0, P.Z)(C.ZP, M.Z) : null)),
        ea = (0, d.e7)([N.default], () => {
            let e = N.default.getCurrentUser();
            return o()(null != e, 'GoLiveModal: user cannot be undefined'), e;
        }),
        eo = null !== (t = null == ei ? void 0 : ei.getGuildId()) && void 0 !== t ? t : q,
        ec = (0, d.e7)([Z.Z], () => {
            var e;
            return null != eo ? (null === (e = Z.Z.getGuild(eo)) || void 0 === e ? void 0 : e.premiumTier) : null;
        }),
        [ed, eu] = null !== (l = (0, w.Z)(et, ea, ec)) && void 0 !== l ? l : [U.LY.RESOLUTION_720, U.ws.FPS_30],
        ef = (0, d.e7)([D.ZP], () => D.ZP.supported()),
        { lastPickerAction: eh } = (0, d.e7)([D.ZP], () => D.ZP.getPickerState()),
        em = S.Z.useExperiment(
            { location: 'GoLiveModal' },
            {
                disable: !ef,
                autoTrackExposure: !0
            }
        ).enableSystemPicker;
    (0, D.UB)(), et !== U.tI.PRESET_CUSTOM && ((en = ed), (el = eu)), !(0, L.Z)(et, en, el, ea, ec) && ((en = ed), (el = eu));
    let ex = (0, p.Dt)();
    let [e_, eg] = r.useState(((Y = Q), (K = X), Y ? 0 : K ? 2 : 3)),
        [ep, eC] = r.useState(!1),
        [eS, ej] = r.useState(null),
        [ev, eE] = r.useState(null),
        [eI, eZ] = r.useState(null),
        [eT, eN] = r.useState(et),
        [eM, eR] = r.useState(en),
        [eA, eO] = r.useState(el),
        [eL, ew] = r.useState(es),
        [eb, eD] = r.useState(null !== (s = v.I0.getSetting()) && void 0 !== s && s),
        [eP, ey] = r.useState(null != q ? q : null),
        eG = null !== (a = null == ei ? void 0 : ei.id) && void 0 !== a ? a : eS;
    r.useEffect(() => {
        let e = (0, A.isWindows)() ? (0, P.Z)(C.ZP, M.Z) : null,
            t = (null == e ? void 0 : e.id) != null ? _.Z.getApplication(e.id) : null;
        R.default.track(V.rMx.OPEN_MODAL, {
            type: 'Go Live Modal',
            application_id: null == t ? void 0 : t.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == t ? void 0 : t.id,
            location_section: J
        });
    }, [J]);
    function eB() {
        !(function () {
            var e, t;
            o()(null != er || null != ev, 'got nothing to stream');
            let n = null !== (e = null == ei ? void 0 : ei.id) && void 0 !== e ? e : eS;
            o()(null != n, 'Received null target channel ID');
            let l = I.Z.getChannel(n),
                s = null !== (t = null == l ? void 0 : l.getGuildId()) && void 0 !== t ? t : q;
            null == ei && h.default.selectVoiceChannel(n);
            let i = eT,
                r = eM,
                a = eA;
            !(0, L.Z)(i, r, a, ea, ec) && ((i = U.tI.PRESET_VIDEO), (r = U.LY.RESOLUTION_720), (a = U.ws.FPS_30)),
                (0, m.Rc)({
                    preset: i,
                    resolution: r,
                    frameRate: a,
                    soundshareEnabled: eL
                });
            let c = (0, k.Z)(er, ev, C.ZP.getRunningGames()),
                d = !(0, A.isWindows)() || null == c || (null == ev ? void 0 : ev.id.startsWith('camera:')) || null == c ? null : c.pid;
            (0, m.WH)(s, n, {
                pid: d,
                sourceId: null == d && null != ev ? ev.id : null,
                sourceName: null == d && null != ev ? ev.name : null,
                audioSourceId: eI,
                sound: eL,
                previewDisabled: eb
            }),
                !em &&
                    (async () => {
                        !(await j.Z.hasPermission(H.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) &&
                            f.Z.show({
                                title: W.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
                                body: W.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
                            });
                    })();
        })(),
            $();
    }
    let ek = r.useCallback(
            (e, t, n) => {
                let l = (0, w.Z)(e, ea, ec),
                    [s, i] = null != l ? l : [t, n];
                if ((e !== eT && ((t = s), (n = i)), !(0, L.Z)(e, t, n, ea, ec))) {
                    let [e, l] = (0, w.Z)(U.tI.PRESET_VIDEO, ea, ec);
                    (t = e), (n = l);
                }
                n !== eA && eO(n), t !== eM && eR(t), s !== t || i !== n ? eN(U.tI.PRESET_CUSTOM) : e !== eT && eN(e);
            },
            [ea, ec, eA, eM, eT]
        ),
        [eU, eV] = r.useState(void 0),
        eH = r.useCallback(
            (e) => {
                (0, b.t)(), (0, b.T)(null != e ? e : eU);
            },
            [eU]
        ),
        eW = r.useCallback(
            (e) => {
                eE(e), null != e && (em && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0 ? eV(e.id.split(':')[1]) : eV(void 0), eg(3), eC(!0));
            },
            [em]
        ),
        eF = r.useCallback(
            (e) => {
                ey(e);
                var t = 3;
                eg((t = X ? 2 : 3));
            },
            [X]
        ),
        ez = !(1 === e_ && em && eh === D.Uc.Error),
        eY = (function (e) {
            switch (e) {
                case 2:
                    return W.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
                case 1:
                    return W.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_NATIVE_SOURCE.format({ buttonName: W.Z.Messages.GO_LIVE_MODAL_NATIVE_SELECT_CTA });
                case 3:
                    return null;
                default:
                    return W.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC;
            }
        })(e_),
        eK = (0, i.jsx)(u.ModalHeader, {
            className: F.modalHeader,
            separator: !1,
            children: (0, i.jsxs)(g.Z, {
                direction: g.Z.Direction.VERTICAL,
                align: g.Z.Align.CENTER,
                className: F.header,
                children: [
                    (0, i.jsx)(u.Heading, {
                        variant: 'heading-xl/semibold',
                        id: ex,
                        className: F.headerText,
                        children: W.Z.Messages.GO_LIVE_MODAL_TITLE
                    }),
                    ez && null != eY
                        ? (0, i.jsx)(u.Text, {
                              className: F.headerDescription,
                              variant: 'text-md/normal',
                              color: 'text-normal',
                              children: eY
                          })
                        : null
                ]
            })
        }),
        eQ = r.useCallback(() => {
            em && (0, b.t)(), eg(2);
        }, [em]),
        eX = (function (e, t, n, l) {
            switch (e) {
                case 2:
                    return t ? 0 : null;
                case 1:
                    return 3;
                case 3:
                    if (l) return 2;
                    if (!n && t) return 0;
                    return null;
                default:
                    return null;
            }
        })(e_, Q, X, ep),
        eq = 1 !== e_ && (3 !== e_ || (null == ev && null == er) || null == eG),
        eJ = r.useCallback(() => {
            null != eX && eg(eX);
        }, [eX]),
        e$ = (0, i.jsxs)(u.Slides, {
            springConfig: {
                ...c.config.stiff,
                clamp: !0
            },
            activeSlide: e_,
            width: 480,
            children: [
                (0, i.jsx)(u.Slide, {
                    id: 0,
                    children: (0, i.jsx)('div', {
                        className: F.modalSize,
                        children: (0, i.jsx)(G.Z, { onSelectGuild: eF })
                    })
                }),
                (0, i.jsx)(u.Slide, {
                    id: 2,
                    children: (0, i.jsx)('div', {
                        className: F.modalSize,
                        children: em
                            ? (0, i.jsx)(B.se, { onSourceSelect: eW })
                            : (0, i.jsx)(B.oA, {
                                  selectedSource: ev,
                                  onChangeSelectedSource: eW
                              })
                    })
                }),
                (0, i.jsx)(u.Slide, {
                    id: 3,
                    children: (0, i.jsx)('div', {
                        className: F.modalSize,
                        children: (0, i.jsx)(y.Z, {
                            selectedChannelId: null !== (z = null == ei ? void 0 : ei.id) && void 0 !== z ? z : eS,
                            selectedPreset: eT,
                            selectedResolution: eM,
                            selectedSource: ev,
                            selectedFPS: eA,
                            sound: eL,
                            previewDisabled: eb,
                            sourceChanged: ep,
                            selectSource: X,
                            onChangeSelectedFPS: (e) => ek(eT, eM, e),
                            onChangeSelectedResolution: (e) => ek(eT, e, eA),
                            onChangeSelectedPreset: (e) => ek(e, eM, eA),
                            onChangeSelectedChannelId: ej,
                            onChangeSelectedSource: eW,
                            onChangeSource: () => eQ(),
                            onChangeAudioDevice: (e) => eZ(e),
                            onChangeGuild: () => eg(0),
                            onChangeSound: (e) => ew(e),
                            onChangePreviewDisabled: (e) => eD(e),
                            onClose: $,
                            selectedGuildId: eP,
                            targetGuildPremiumTier: ec,
                            selectGuild: Q
                        })
                    })
                }),
                (0, i.jsx)(u.Slide, {
                    id: 1,
                    children: (0, i.jsx)('div', {
                        className: F.modalSize,
                        children: (0, i.jsx)(B.Hu, {
                            onSourceSelect: eB,
                            onCancel: eJ
                        })
                    })
                })
            ]
        }),
        e1 = 1 === e_ ? W.Z.Messages.GO_LIVE_MODAL_NATIVE_SELECT_CTA : em && (3 !== e_ || null != eU) ? W.Z.Messages.NEXT : W.Z.Messages.GO_LIVE_MODAL_CTA,
        e0 = (0, i.jsxs)(u.ModalFooter, {
            justify: null == eX ? g.Z.Justify.START : g.Z.Justify.BETWEEN,
            children: [
                (0, i.jsx)(u.Button, {
                    type: 'submit',
                    size: u.Button.Sizes.SMALL,
                    disabled: eq,
                    autoFocus: !0,
                    children: e1
                }),
                null == eX
                    ? (0, i.jsx)(u.Button, {
                          className: F.cancelButton,
                          look: u.Button.Looks.LINK,
                          size: u.Button.Sizes.SMALL,
                          color: u.ButtonColors.PRIMARY,
                          onClick: $,
                          children: W.Z.Messages.CANCEL
                      })
                    : (0, i.jsx)(u.Button, {
                          size: u.Button.Sizes.SMALL,
                          color: u.ButtonColors.PRIMARY,
                          onClick: eJ,
                          children: W.Z.Messages.BACK
                      })
            ]
        });
    return (0, i.jsx)(x.Z, {
        page: V.ZY5.GO_LIVE_MODAL,
        children: (0, i.jsxs)(u.ModalRoot, {
            'aria-labelledby': ex,
            transitionState: ee,
            size: u.ModalSize.DYNAMIC,
            className: F.modalSize,
            children: [
                (0, i.jsx)(u.ModalCloseButton, {
                    onClick: $,
                    className: F.modalCloseButton
                }),
                (0, i.jsx)('div', { className: F.art }),
                (0, i.jsxs)('form', {
                    onSubmit: function (e) {
                        if ((e.preventDefault(), 1 === e_)) return eH();
                        if (2 === e_) return eg(3);
                        if (null != eU) return eg(1);
                        let t = (0, k.Z)(er, ev, C.ZP.getRunningGames());
                        O.ZP.supportsFeature(V.eRX.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated)
                            ? !(function () {
                                  var e;
                                  let t = null !== (e = null == er ? void 0 : er.pid) && void 0 !== e ? e : null;
                                  (0, u.openModalLazy)(async () => {
                                      let { default: e } = await n.e('74300').then(n.bind(n, 566852));
                                      return (n) =>
                                          (0, i.jsx)(e, {
                                              ...n,
                                              handleStream: eB,
                                              pid: t
                                          });
                                  });
                              })()
                            : eB();
                    },
                    children: [eK, e$, e0]
                })
            ]
        })
    });
}
