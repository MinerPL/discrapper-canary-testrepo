n.r(t),
    n.d(t, {
        default: function () {
            return el;
        }
    }),
    n(47120),
    n(653041);
var l,
    i,
    r = n(200651),
    s = n(192379),
    a = n(512722),
    o = n.n(a),
    c = n(100621),
    d = n(553813),
    u = n.n(d),
    f = n(442837),
    h = n(704215),
    m = n(481060),
    x = n(668781),
    g = n(287734),
    p = n(872810),
    v = n(410575),
    j = n(579806),
    C = n(812206),
    S = n(600164),
    _ = n(313201),
    Z = n(243778),
    I = n(594190),
    T = n(998594),
    N = n(751571),
    w = n(970731),
    b = n(695346),
    y = n(361291),
    R = n(592125),
    E = n(430824),
    M = n(131951),
    k = n(944486),
    A = n(594174),
    P = n(449224),
    B = n(626135),
    L = n(63063),
    G = n(358085),
    D = n(998502),
    O = n(451467),
    U = n(537413),
    F = n(299570),
    W = n(960861),
    H = n(989941),
    V = n(399299),
    z = n(351152),
    K = n(567126),
    Y = n(143135),
    X = n(70722),
    J = n(37113),
    q = n(981631),
    Q = n(921944),
    $ = n(761274),
    ee = n(388032),
    et = n(410894);
((i = l || (l = {}))[(i.GUILD = 0)] = 'GUILD'), (i[(i.NATIVE_PICKER_SOURCE = 1)] = 'NATIVE_PICKER_SOURCE'), (i[(i.SOURCE = 2)] = 'SOURCE'), (i[(i.CONFIRM = 3)] = 'CONFIRM');
let en = (e) => {
    let { visibleContent: t, markAsDismissed: n } = e;
    return t === h.z.GO_LIVE_SYSTEM_PICKER_COACHMARK
        ? (0, r.jsx)(w.ZP, {
              content: ee.intl.string(ee.t.sFyFJy),
              buttonCTA: ee.intl.string(ee.t['NX+WJC']),
              onClick: () => {},
              onSecondaryClick: () => {
                  open(L.Z.getArticleURL(q.BhN.SCREEN_SHARING_MACOS));
              },
              secondaryButtonCTA: ee.intl.string(ee.t.hvVgAQ),
              caretPosition: w.DF.LEFT_CENTER,
              markAsDismissed: n
          })
        : null;
};
function el(e) {
    var t, l, i, a, d, w, L;
    let { selectGuild: el = !1, selectSource: ei = !0, guildId: er, analyticsLocation: es, onClose: ea, transitionState: eo } = e,
        { preset: ec, resolution: ed, fps: eu, soundshareEnabled: ef } = (0, f.cj)([y.Z], () => y.Z.getState()),
        eh = (0, f.e7)([k.Z, R.Z], () => R.Z.getChannel(k.Z.getVoiceChannelId())),
        em = (0, f.e7)([I.ZP, P.Z], () => ((0, G.isWindows)() ? (0, H.Z)(I.ZP, P.Z) : null)),
        ex = (0, f.e7)([A.default], () => {
            let e = A.default.getCurrentUser();
            return o()(null != e, 'GoLiveModal: user cannot be undefined'), e;
        }),
        eg = null !== (t = null == eh ? void 0 : eh.getGuildId()) && void 0 !== t ? t : er,
        ep = (0, f.e7)([E.Z], () => {
            var e;
            return null != eg ? (null === (e = E.Z.getGuild(eg)) || void 0 === e ? void 0 : e.premiumTier) : null;
        }),
        [ev, ej] = null !== (l = (0, U.Z)(ec, ex, ep)) && void 0 !== l ? l : [J.LY.RESOLUTION_720, J.ws.FPS_30],
        { lastPickerAction: eC } = (0, f.e7)([W.ZP], () => W.ZP.getPickerState()),
        eS = M.Z.getUseSystemScreensharePicker();
    (0, W.UB)();
    let e_ = eS && (0, G.isMac)() && u().satisfies(null === j.Z || void 0 === j.Z ? void 0 : j.Z.os.release, X.jR),
        eZ = [];
    eo === m.ModalTransitionState.ENTERED && eS && (0, G.isMac)() && eZ.push(h.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
    let [eI, eT] = (0, Z.US)(eZ, void 0, !0);
    ec !== J.tI.PRESET_CUSTOM && ((ed = ev), (eu = ej)), !(0, O.Z)(ec, ed, eu, ex, ep) && ((ed = ev), (eu = ej));
    let eN = (0, _.Dt)();
    let [ew, eb] = s.useState(((w = el), (L = ei && !e_), w ? 0 : L ? 2 : 3)),
        [ey, eR] = s.useState(e_),
        [eE, eM] = s.useState(null),
        [ek, eA] = s.useState(
            e_
                ? {
                      id: 'prepicked:',
                      name: ee.intl.string(ee.t['KKcy9/']),
                      url: ''
                  }
                : null
        ),
        [eP, eB] = s.useState(null),
        [eL, eG] = s.useState(ec),
        [eD, eO] = s.useState(ed),
        [eU, eF] = s.useState(eu),
        [eW, eH] = s.useState(ef),
        [eV, ez] = s.useState(null !== (i = b.I0.getSetting()) && void 0 !== i && i),
        [eK, eY] = s.useState(null != er ? er : null),
        eX = null !== (a = null == eh ? void 0 : eh.id) && void 0 !== a ? a : eE;
    s.useEffect(() => {
        let e = (0, G.isWindows)() ? (0, H.Z)(I.ZP, P.Z) : null,
            t = (null == e ? void 0 : e.id) != null ? C.Z.getApplication(e.id) : null;
        B.default.track(q.rMx.OPEN_MODAL, {
            type: 'Go Live Modal',
            application_id: null == t ? void 0 : t.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == t ? void 0 : t.id,
            location_section: es
        }),
            T.Z.trackExposure({ location: 'GoLiveModal' });
    }, [es]);
    function eJ() {
        !(function () {
            var e, t;
            o()(null != em || null != ek, 'got nothing to stream');
            let n = null !== (e = null == eh ? void 0 : eh.id) && void 0 !== e ? e : eE;
            o()(null != n, 'Received null target channel ID');
            let l = R.Z.getChannel(n),
                i = null !== (t = null == l ? void 0 : l.getGuildId()) && void 0 !== t ? t : er;
            null == eh && g.default.selectVoiceChannel(n);
            let r = eL,
                s = eD,
                a = eU;
            !(0, O.Z)(r, s, a, ex, ep, l) && ((r = J.tI.PRESET_VIDEO), (s = J.LY.RESOLUTION_720), (a = J.ws.FPS_30)),
                (0, p.Rc)({
                    preset: r,
                    resolution: s,
                    frameRate: a,
                    soundshareEnabled: eW
                });
            let c = (0, Y.Z)(em, ek, I.ZP.getRunningGames()),
                d = !(0, G.isWindows)() || null == c || (null == ek ? void 0 : ek.id.startsWith('camera:')) || null == c ? null : c.pid;
            (0, p.WH)(i, n, {
                pid: d,
                sourceId: null == d && null != ek ? ek.id : null,
                sourceName: null == d && null != ek ? ek.name : null,
                audioSourceId: eP,
                sound: eW,
                previewDisabled: eV
            }),
                null != eI && eT(Q.L.AUTO_DISMISS),
                !eS &&
                    (async () => {
                        !(await N.Z.hasPermission($.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) &&
                            x.Z.show({
                                title: ee.intl.string(ee.t['X+mXen']),
                                body: ee.intl.string(ee.t.MIJCzs)
                            });
                    })();
        })(),
            ea();
    }
    let eq = s.useCallback(
            (e, t, n) => {
                var l;
                let i = (0, U.Z)(e, ex, ep),
                    [r, s] = null != i ? i : [t, n];
                e !== eL && ((t = r), (n = s));
                let a = null !== (l = null == eh ? void 0 : eh.id) && void 0 !== l ? l : eE;
                o()(null != a, 'Received null target channel ID');
                let c = R.Z.getChannel(a);
                if (!(0, O.Z)(e, t, n, ex, ep, c)) {
                    let [e, l] = (0, U.Z)(J.tI.PRESET_VIDEO, ex, ep);
                    (t = e), (n = l);
                }
                n !== eU && eF(n), t !== eD && eO(t), r !== t || s !== n ? eG(J.tI.PRESET_CUSTOM) : e !== eL && eG(e);
            },
            [eh, eE, ex, ep, eU, eD, eL]
        ),
        [eQ, e$] = s.useState(e_ ? '' : void 0),
        e1 = s.useCallback(
            (e) => {
                (0, F.t)(), (0, F.T)(null != e ? e : eQ);
            },
            [eQ]
        );
    function e0(e) {
        if ((e.preventDefault(), 1 === ew)) return e1();
        if (2 === ew) return eb(3);
        if (null != eQ) return eb(1);
        let t = (0, Y.Z)(em, ek, I.ZP.getRunningGames());
        D.ZP.supportsFeature(q.eRX.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated)
            ? !(function () {
                  var e;
                  let t = null !== (e = null == em ? void 0 : em.pid) && void 0 !== e ? e : null;
                  (0, m.openModalLazy)(async () => {
                      let { default: e } = await n.e('74300').then(n.bind(n, 566852));
                      return (n) =>
                          (0, r.jsx)(e, {
                              ...n,
                              handleStream: eJ,
                              pid: t
                          });
                  });
              })()
            : eJ();
    }
    let e2 = s.useCallback(
            (e) => {
                eA(e), null != e && (eS && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0 ? e$(e.id.split(':')[1]) : e$(void 0), eb(3), eR(!0));
            },
            [eS]
        ),
        e5 = s.useCallback(
            (e) => {
                eY(e);
                var t = 3;
                eb((t = ei ? 2 : 3));
            },
            [ei]
        ),
        e3 = !(1 === ew && eS && eC === W.Uc.Error),
        e7 = (function (e) {
            switch (e) {
                case 2:
                    return ee.intl.string(ee.t['aC4/Zm']);
                case 1:
                    return ee.intl.formatToPlainString(ee.t.sbbPhY, { buttonName: ee.intl.string(ee.t.FiBjwc) });
                case 3:
                    return null;
                default:
                    return ee.intl.string(ee.t['1hKIam']);
            }
        })(ew),
        e4 = (0, r.jsx)(m.ModalHeader, {
            className: et.modalHeader,
            separator: !1,
            children: (0, r.jsxs)(S.Z, {
                direction: S.Z.Direction.VERTICAL,
                align: S.Z.Align.CENTER,
                className: et.header,
                children: [
                    (0, r.jsx)(m.Heading, {
                        variant: 'heading-xl/semibold',
                        id: eN,
                        className: et.headerText,
                        children: ee.intl.string(ee.t.RDkJQ0)
                    }),
                    e3 && null != e7
                        ? (0, r.jsx)(m.Text, {
                              className: et.headerDescription,
                              variant: 'text-md/normal',
                              color: 'text-normal',
                              children: e7
                          })
                        : null
                ]
            })
        }),
        e9 = s.useCallback(() => {
            eS && (0, F.t)(), eb(2);
        }, [eS]),
        e8 = (function (e, t, n, l) {
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
        })(ew, el, ei, ey),
        e6 = 1 !== ew && (3 !== ew || (null == ek && null == em) || null == eX),
        te = s.useCallback(() => {
            null != e8 && eb(e8);
        }, [e8]),
        tt = (0, r.jsxs)(m.Slides, {
            springConfig: {
                ...c.config.stiff,
                clamp: !0
            },
            activeSlide: ew,
            width: 480,
            children: [
                (0, r.jsx)(m.Slide, {
                    id: 0,
                    children: (0, r.jsx)('div', {
                        className: et.modalSize,
                        children: (0, r.jsx)(z.Z, { onSelectGuild: e5 })
                    })
                }),
                (0, r.jsx)(m.Slide, {
                    id: 2,
                    children: (0, r.jsx)('div', {
                        className: et.modalSize,
                        children: eS
                            ? (0, r.jsx)(K.se, { onSourceSelect: e2 })
                            : (0, r.jsx)(K.oA, {
                                  selectedSource: ek,
                                  onChangeSelectedSource: e2
                              })
                    })
                }),
                (0, r.jsx)(m.Slide, {
                    id: 3,
                    children: (0, r.jsx)('div', {
                        className: et.modalSize,
                        children: (0, r.jsx)(V.Z, {
                            selectedChannelId: null !== (d = null == eh ? void 0 : eh.id) && void 0 !== d ? d : eE,
                            selectedPreset: eL,
                            selectedResolution: eD,
                            selectedSource: ek,
                            selectedFPS: eU,
                            sound: eW,
                            previewDisabled: eV,
                            sourceChanged: ey,
                            selectSource: ei,
                            onChangeSelectedFPS: (e) => eq(eL, eD, e),
                            onChangeSelectedResolution: (e) => eq(eL, e, eU),
                            onChangeSelectedPreset: (e) => eq(e, eD, eU),
                            onChangeSelectedChannelId: eM,
                            onChangeSelectedSource: e2,
                            onChangeSource: () => e9(),
                            onChangeAudioDevice: (e) => eB(e),
                            onChangeGuild: () => eb(0),
                            onChangeSound: (e) => eH(e),
                            onChangePreviewDisabled: (e) => ez(e),
                            onClose: ea,
                            selectedGuildId: eK,
                            targetGuildPremiumTier: ep,
                            selectGuild: el
                        })
                    })
                }),
                (0, r.jsx)(m.Slide, {
                    id: 1,
                    children: (0, r.jsx)('div', {
                        className: et.modalSize,
                        children: (0, r.jsx)(K.Hu, {
                            onSourceSelect: eJ,
                            onCancel: te,
                            pickerType: eQ
                        })
                    })
                })
            ]
        }),
        tn = 1 === ew || (e_ && 3 === ew) ? ee.intl.string(ee.t.FiBjwc) : eS && (3 !== ew || null != eQ) ? ee.intl.string(ee.t.PDTjLC) : ee.intl.string(ee.t['UE/rPz']),
        tl = (0, r.jsxs)(m.ModalFooter, {
            justify: null == e8 ? S.Z.Justify.START : S.Z.Justify.BETWEEN,
            children: [
                (0, r.jsx)(m.Button, {
                    type: 'submit',
                    size: m.Button.Sizes.SMALL,
                    disabled: e6,
                    autoFocus: !0,
                    children: tn
                }),
                null == e8
                    ? (0, r.jsx)(m.Button, {
                          className: et.cancelButton,
                          look: m.Button.Looks.LINK,
                          size: m.Button.Sizes.SMALL,
                          color: m.ButtonColors.PRIMARY,
                          onClick: ea,
                          children: ee.intl.string(ee.t['ETE/oK'])
                      })
                    : (0, r.jsx)(m.Button, {
                          size: m.Button.Sizes.SMALL,
                          color: m.ButtonColors.PRIMARY,
                          onClick: te,
                          children: ee.intl.string(ee.t['13/7kZ'])
                      })
            ]
        });
    return (0, r.jsx)(v.Z, {
        page: q.ZY5.GO_LIVE_MODAL,
        children: (0, r.jsxs)(m.ModalRoot, {
            'aria-labelledby': eN,
            transitionState: eo,
            size: m.ModalSize.DYNAMIC,
            className: et.modalSize,
            children: [
                (0, r.jsx)(m.ModalCloseButton, {
                    onClick: ea,
                    className: et.modalCloseButton
                }),
                (0, r.jsx)('div', { className: et.art }),
                (0, r.jsx)(m.Popout, {
                    position: 'right',
                    align: 'center',
                    shouldShow: null != eI,
                    spacing: 18,
                    renderPopout: () =>
                        (0, r.jsx)(en, {
                            visibleContent: eI,
                            markAsDismissed: eT
                        }),
                    children: () =>
                        (0, r.jsxs)('form', {
                            onSubmit: e0,
                            children: [e4, tt, tl]
                        })
                })
            ]
        })
    });
}
