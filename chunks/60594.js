n.r(t),
    n.d(t, {
        default: function () {
            return $;
        }
    }),
    n(47120),
    n(653041);
var l,
    s,
    i = n(735250),
    r = n(470079),
    a = n(512722),
    o = n.n(a),
    c = n(212433),
    d = n(442837),
    u = n(704215),
    f = n(481060),
    h = n(668781),
    m = n(287734),
    x = n(872810),
    _ = n(410575),
    g = n(812206),
    p = n(600164),
    C = n(313201),
    S = n(243778),
    E = n(594190),
    j = n(998594),
    v = n(751571),
    I = n(970731),
    Z = n(695346),
    T = n(361291),
    N = n(592125),
    M = n(430824),
    R = n(131951),
    A = n(944486),
    O = n(594174),
    L = n(449224),
    w = n(626135),
    b = n(63063),
    D = n(358085),
    P = n(998502),
    y = n(451467),
    G = n(537413),
    B = n(299570),
    k = n(960861),
    U = n(989941),
    H = n(399299),
    V = n(351152),
    F = n(567126),
    W = n(143135),
    z = n(37113),
    Y = n(981631),
    K = n(921944),
    Q = n(761274),
    X = n(689938),
    q = n(410894);
((s = l || (l = {}))[(s.GUILD = 0)] = 'GUILD'), (s[(s.NATIVE_PICKER_SOURCE = 1)] = 'NATIVE_PICKER_SOURCE'), (s[(s.SOURCE = 2)] = 'SOURCE'), (s[(s.CONFIRM = 3)] = 'CONFIRM');
let J = (e) => {
    let { visibleContent: t, markAsDismissed: n } = e;
    return t === u.z.GO_LIVE_SYSTEM_PICKER_COACHMARK
        ? (0, i.jsx)(I.ZP, {
              content: X.Z.Messages.GO_LIVE_MODAL_SYSTEM_PICKER_COACHMARK_CONTENT,
              buttonCTA: X.Z.Messages.GOT_IT,
              onClick: () => {},
              onSecondaryClick: () => {
                  open(b.Z.getArticleURL(Y.BhN.SCREEN_SHARING_MACOS));
              },
              secondaryButtonCTA: X.Z.Messages.LEARN_MORE,
              caretPosition: I.DF.LEFT_CENTER,
              markAsDismissed: n
          })
        : null;
};
function $(e) {
    var t, l, s, a, I, b, $;
    let { selectGuild: ee = !1, selectSource: et = !0, guildId: en, analyticsLocation: el, onClose: es, transitionState: ei } = e,
        { preset: er, resolution: ea, fps: eo, soundshareEnabled: ec } = (0, d.cj)([T.Z], () => T.Z.getState()),
        ed = (0, d.e7)([A.Z, N.Z], () => N.Z.getChannel(A.Z.getVoiceChannelId())),
        eu = (0, d.e7)([E.ZP, L.Z], () => ((0, D.isWindows)() ? (0, U.Z)(E.ZP, L.Z) : null)),
        ef = (0, d.e7)([O.default], () => {
            let e = O.default.getCurrentUser();
            return o()(null != e, 'GoLiveModal: user cannot be undefined'), e;
        }),
        eh = null !== (t = null == ed ? void 0 : ed.getGuildId()) && void 0 !== t ? t : en,
        em = (0, d.e7)([M.Z], () => {
            var e;
            return null != eh ? (null === (e = M.Z.getGuild(eh)) || void 0 === e ? void 0 : e.premiumTier) : null;
        }),
        [ex, e_] = null !== (l = (0, G.Z)(er, ef, em)) && void 0 !== l ? l : [z.LY.RESOLUTION_720, z.ws.FPS_30],
        { lastPickerAction: eg } = (0, d.e7)([k.ZP], () => k.ZP.getPickerState()),
        ep = R.Z.getUseSystemScreensharePicker();
    (0, k.UB)();
    let eC = [];
    ei === f.ModalTransitionState.ENTERED && ep && (0, D.isMac)() && eC.push(u.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
    let [eS, eE] = (0, S.US)(eC, void 0, !0);
    er !== z.tI.PRESET_CUSTOM && ((ea = ex), (eo = e_)), !(0, y.Z)(er, ea, eo, ef, em) && ((ea = ex), (eo = e_));
    let ej = (0, C.Dt)();
    let [ev, eI] = r.useState(((b = ee), ($ = et), b ? 0 : $ ? 2 : 3)),
        [eZ, eT] = r.useState(!1),
        [eN, eM] = r.useState(null),
        [eR, eA] = r.useState(null),
        [eO, eL] = r.useState(null),
        [ew, eb] = r.useState(er),
        [eD, eP] = r.useState(ea),
        [ey, eG] = r.useState(eo),
        [eB, ek] = r.useState(ec),
        [eU, eH] = r.useState(null !== (s = Z.I0.getSetting()) && void 0 !== s && s),
        [eV, eF] = r.useState(null != en ? en : null),
        eW = null !== (a = null == ed ? void 0 : ed.id) && void 0 !== a ? a : eN;
    r.useEffect(() => {
        let e = (0, D.isWindows)() ? (0, U.Z)(E.ZP, L.Z) : null,
            t = (null == e ? void 0 : e.id) != null ? g.Z.getApplication(e.id) : null;
        w.default.track(Y.rMx.OPEN_MODAL, {
            type: 'Go Live Modal',
            application_id: null == t ? void 0 : t.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == t ? void 0 : t.id,
            location_section: el
        }),
            j.Z.trackExposure({ location: 'GoLiveModal' });
    }, [el]);
    function ez() {
        !(function () {
            var e, t;
            o()(null != eu || null != eR, 'got nothing to stream');
            let n = null !== (e = null == ed ? void 0 : ed.id) && void 0 !== e ? e : eN;
            o()(null != n, 'Received null target channel ID');
            let l = N.Z.getChannel(n),
                s = null !== (t = null == l ? void 0 : l.getGuildId()) && void 0 !== t ? t : en;
            null == ed && m.default.selectVoiceChannel(n);
            let i = ew,
                r = eD,
                a = ey;
            !(0, y.Z)(i, r, a, ef, em) && ((i = z.tI.PRESET_VIDEO), (r = z.LY.RESOLUTION_720), (a = z.ws.FPS_30)),
                (0, x.Rc)({
                    preset: i,
                    resolution: r,
                    frameRate: a,
                    soundshareEnabled: eB
                });
            let c = (0, W.Z)(eu, eR, E.ZP.getRunningGames()),
                d = !(0, D.isWindows)() || null == c || (null == eR ? void 0 : eR.id.startsWith('camera:')) || null == c ? null : c.pid;
            (0, x.WH)(s, n, {
                pid: d,
                sourceId: null == d && null != eR ? eR.id : null,
                sourceName: null == d && null != eR ? eR.name : null,
                audioSourceId: eO,
                sound: eB,
                previewDisabled: eU
            }),
                null != eS && eE(K.L.AUTO_DISMISS),
                !ep &&
                    (async () => {
                        !(await v.Z.hasPermission(Q.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) &&
                            h.Z.show({
                                title: X.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
                                body: X.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
                            });
                    })();
        })(),
            es();
    }
    let eY = r.useCallback(
            (e, t, n) => {
                let l = (0, G.Z)(e, ef, em),
                    [s, i] = null != l ? l : [t, n];
                if ((e !== ew && ((t = s), (n = i)), !(0, y.Z)(e, t, n, ef, em))) {
                    let [e, l] = (0, G.Z)(z.tI.PRESET_VIDEO, ef, em);
                    (t = e), (n = l);
                }
                n !== ey && eG(n), t !== eD && eP(t), s !== t || i !== n ? eb(z.tI.PRESET_CUSTOM) : e !== ew && eb(e);
            },
            [ef, em, ey, eD, ew]
        ),
        [eK, eQ] = r.useState(void 0),
        eX = r.useCallback(
            (e) => {
                (0, B.t)(), (0, B.T)(null != e ? e : eK);
            },
            [eK]
        );
    function eq(e) {
        if ((e.preventDefault(), 1 === ev)) return eX();
        if (2 === ev) return eI(3);
        if (null != eK) return eI(1);
        let t = (0, W.Z)(eu, eR, E.ZP.getRunningGames());
        P.ZP.supportsFeature(Y.eRX.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated)
            ? !(function () {
                  var e;
                  let t = null !== (e = null == eu ? void 0 : eu.pid) && void 0 !== e ? e : null;
                  (0, f.openModalLazy)(async () => {
                      let { default: e } = await n.e('74300').then(n.bind(n, 566852));
                      return (n) =>
                          (0, i.jsx)(e, {
                              ...n,
                              handleStream: ez,
                              pid: t
                          });
                  });
              })()
            : ez();
    }
    let eJ = r.useCallback(
            (e) => {
                eA(e), null != e && (ep && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0 ? eQ(e.id.split(':')[1]) : eQ(void 0), eI(3), eT(!0));
            },
            [ep]
        ),
        e$ = r.useCallback(
            (e) => {
                eF(e);
                var t = 3;
                eI((t = et ? 2 : 3));
            },
            [et]
        ),
        e1 = !(1 === ev && ep && eg === k.Uc.Error),
        e0 = (function (e) {
            switch (e) {
                case 2:
                    return X.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
                case 1:
                    return X.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_NATIVE_SOURCE.format({ buttonName: X.Z.Messages.GO_LIVE_MODAL_NATIVE_SELECT_CTA });
                case 3:
                    return null;
                default:
                    return X.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC;
            }
        })(ev),
        e2 = (0, i.jsx)(f.ModalHeader, {
            className: q.modalHeader,
            separator: !1,
            children: (0, i.jsxs)(p.Z, {
                direction: p.Z.Direction.VERTICAL,
                align: p.Z.Align.CENTER,
                className: q.header,
                children: [
                    (0, i.jsx)(f.Heading, {
                        variant: 'heading-xl/semibold',
                        id: ej,
                        className: q.headerText,
                        children: X.Z.Messages.GO_LIVE_MODAL_TITLE
                    }),
                    e1 && null != e0
                        ? (0, i.jsx)(f.Text, {
                              className: q.headerDescription,
                              variant: 'text-md/normal',
                              color: 'text-normal',
                              children: e0
                          })
                        : null
                ]
            })
        }),
        e5 = r.useCallback(() => {
            ep && (0, B.t)(), eI(2);
        }, [ep]),
        e3 = (function (e, t, n, l) {
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
        })(ev, ee, et, eZ),
        e7 = 1 !== ev && (3 !== ev || (null == eR && null == eu) || null == eW),
        e4 = r.useCallback(() => {
            null != e3 && eI(e3);
        }, [e3]),
        e9 = (0, i.jsxs)(f.Slides, {
            springConfig: {
                ...c.config.stiff,
                clamp: !0
            },
            activeSlide: ev,
            width: 480,
            children: [
                (0, i.jsx)(f.Slide, {
                    id: 0,
                    children: (0, i.jsx)('div', {
                        className: q.modalSize,
                        children: (0, i.jsx)(V.Z, { onSelectGuild: e$ })
                    })
                }),
                (0, i.jsx)(f.Slide, {
                    id: 2,
                    children: (0, i.jsx)('div', {
                        className: q.modalSize,
                        children: ep
                            ? (0, i.jsx)(F.se, { onSourceSelect: eJ })
                            : (0, i.jsx)(F.oA, {
                                  selectedSource: eR,
                                  onChangeSelectedSource: eJ
                              })
                    })
                }),
                (0, i.jsx)(f.Slide, {
                    id: 3,
                    children: (0, i.jsx)('div', {
                        className: q.modalSize,
                        children: (0, i.jsx)(H.Z, {
                            selectedChannelId: null !== (I = null == ed ? void 0 : ed.id) && void 0 !== I ? I : eN,
                            selectedPreset: ew,
                            selectedResolution: eD,
                            selectedSource: eR,
                            selectedFPS: ey,
                            sound: eB,
                            previewDisabled: eU,
                            sourceChanged: eZ,
                            selectSource: et,
                            onChangeSelectedFPS: (e) => eY(ew, eD, e),
                            onChangeSelectedResolution: (e) => eY(ew, e, ey),
                            onChangeSelectedPreset: (e) => eY(e, eD, ey),
                            onChangeSelectedChannelId: eM,
                            onChangeSelectedSource: eJ,
                            onChangeSource: () => e5(),
                            onChangeAudioDevice: (e) => eL(e),
                            onChangeGuild: () => eI(0),
                            onChangeSound: (e) => ek(e),
                            onChangePreviewDisabled: (e) => eH(e),
                            onClose: es,
                            selectedGuildId: eV,
                            targetGuildPremiumTier: em,
                            selectGuild: ee
                        })
                    })
                }),
                (0, i.jsx)(f.Slide, {
                    id: 1,
                    children: (0, i.jsx)('div', {
                        className: q.modalSize,
                        children: (0, i.jsx)(F.Hu, {
                            onSourceSelect: ez,
                            onCancel: e4
                        })
                    })
                })
            ]
        }),
        e8 = 1 === ev ? X.Z.Messages.GO_LIVE_MODAL_NATIVE_SELECT_CTA : ep && (3 !== ev || null != eK) ? X.Z.Messages.NEXT : X.Z.Messages.GO_LIVE_MODAL_CTA,
        e6 = (0, i.jsxs)(f.ModalFooter, {
            justify: null == e3 ? p.Z.Justify.START : p.Z.Justify.BETWEEN,
            children: [
                (0, i.jsx)(f.Button, {
                    type: 'submit',
                    size: f.Button.Sizes.SMALL,
                    disabled: e7,
                    autoFocus: !0,
                    children: e8
                }),
                null == e3
                    ? (0, i.jsx)(f.Button, {
                          className: q.cancelButton,
                          look: f.Button.Looks.LINK,
                          size: f.Button.Sizes.SMALL,
                          color: f.ButtonColors.PRIMARY,
                          onClick: es,
                          children: X.Z.Messages.CANCEL
                      })
                    : (0, i.jsx)(f.Button, {
                          size: f.Button.Sizes.SMALL,
                          color: f.ButtonColors.PRIMARY,
                          onClick: e4,
                          children: X.Z.Messages.BACK
                      })
            ]
        });
    return (0, i.jsx)(_.Z, {
        page: Y.ZY5.GO_LIVE_MODAL,
        children: (0, i.jsxs)(f.ModalRoot, {
            'aria-labelledby': ej,
            transitionState: ei,
            size: f.ModalSize.DYNAMIC,
            className: q.modalSize,
            children: [
                (0, i.jsx)(f.ModalCloseButton, {
                    onClick: es,
                    className: q.modalCloseButton
                }),
                (0, i.jsx)('div', { className: q.art }),
                (0, i.jsx)(f.Popout, {
                    position: 'right',
                    align: 'center',
                    shouldShow: null != eS,
                    spacing: 18,
                    renderPopout: () =>
                        (0, i.jsx)(J, {
                            visibleContent: eS,
                            markAsDismissed: eE
                        }),
                    children: () =>
                        (0, i.jsxs)('form', {
                            onSubmit: eq,
                            children: [e2, e9, e6]
                        })
                })
            ]
        })
    });
}
