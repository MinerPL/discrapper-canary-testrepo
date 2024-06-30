t.r(n), t.d(n, {
    default: function () {
        return H;
    }
}), t(47120);
var l, s, a = t(735250), i = t(470079), r = t(512722), o = t.n(r), u = t(920906), c = t(442837), d = t(481060), m = t(668781), E = t(287734), _ = t(872810), S = t(410575), g = t(812206), h = t(594190), C = t(751571), N = t(361291), Z = t(592125), I = t(430824), x = t(131951), f = t(944486), A = t(594174), R = t(449224), T = t(285952), v = t(153124), L = t(626135), M = t(358085), p = t(998502), O = t(451467), j = t(537413), P = t(989941), D = t(399299), G = t(351152), U = t(567126), b = t(143135), w = t(37113), B = t(981631), y = t(761274), V = t(689938), k = t(278768);
(s = l || (l = {}))[s.GUILD = 0] = 'GUILD', s[s.SOURCE = 1] = 'SOURCE', s[s.CONFIRM = 2] = 'CONFIRM';
function H(e) {
    var n, l, s, r, H, W;
    let {
            selectGuild: F = !1,
            selectSource: z = !0,
            guildId: K,
            analyticsLocation: Y,
            onClose: Q,
            transitionState: J
        } = e, {
            preset: q,
            resolution: X,
            fps: $,
            soundshareEnabled: ee
        } = (0, c.cj)([N.Z], () => N.Z.getState()), en = (0, c.e7)([
            f.Z,
            Z.Z
        ], () => Z.Z.getChannel(f.Z.getVoiceChannelId())), et = (0, c.e7)([
            h.ZP,
            R.Z
        ], () => (0, M.isWindows)() ? (0, P.Z)(h.ZP, R.Z) : null), el = (0, c.e7)([A.default], () => {
            let e = A.default.getCurrentUser();
            return o()(null != e, 'GoLiveModal: user cannot be undefined'), e;
        }), es = null !== (n = null == en ? void 0 : en.getGuildId()) && void 0 !== n ? n : K, ea = (0, c.e7)([I.Z], () => {
            var e;
            return null != es ? null === (e = I.Z.getGuild(es)) || void 0 === e ? void 0 : e.premiumTier : null;
        }), [ei, er] = null !== (l = (0, j.Z)(q, el, ea)) && void 0 !== l ? l : [
            w.LY.RESOLUTION_720,
            w.ws.FPS_30
        ];
    q !== w.tI.PRESET_CUSTOM && (X = ei, $ = er), !(0, O.Z)(q, X, $, el, ea) && (X = ei, $ = er);
    let eo = (0, v.Dt)();
    let [eu, ec] = i.useState((H = F, W = z, H ? 0 : W ? 1 : 2)), [ed, em] = i.useState(null), [eE, e_] = i.useState(!1), [eS, eg] = i.useState(null), [eh, eC] = i.useState(null), [eN, eZ] = i.useState(null), [eI, ex] = i.useState(q), [ef, eA] = i.useState(X), [eR, eT] = i.useState($), [ev, eL] = i.useState(ee), [eM, ep] = i.useState(null != K ? K : null), eO = null !== (s = null == en ? void 0 : en.id) && void 0 !== s ? s : eS;
    i.useEffect(() => {
        let e = (0, M.isWindows)() ? (0, P.Z)(h.ZP, R.Z) : null, n = (null == e ? void 0 : e.id) != null ? g.Z.getApplication(e.id) : null;
        L.default.track(B.rMx.OPEN_MODAL, {
            type: 'Go Live Modal',
            application_id: null == n ? void 0 : n.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == n ? void 0 : n.id,
            location_section: Y
        });
    }, [Y]);
    function ej() {
        !function () {
            var e, n;
            o()(null != et || null != eh, 'got nothing to stream');
            let t = null !== (e = null == en ? void 0 : en.id) && void 0 !== e ? e : eS;
            o()(null != t, 'Received null target channel ID');
            let l = Z.Z.getChannel(t), s = null !== (n = null == l ? void 0 : l.getGuildId()) && void 0 !== n ? n : K;
            null == en && E.default.selectVoiceChannel(t);
            let a = eI, i = ef, r = eR;
            !(0, O.Z)(a, i, r, el, ea) && (a = w.tI.PRESET_VIDEO, i = w.LY.RESOLUTION_720, r = w.ws.FPS_30), (0, _.Rc)({
                preset: a,
                resolution: i,
                frameRate: r,
                soundshareEnabled: ev
            });
            let u = (0, b.Z)(et, eh, h.ZP.getRunningGames()), c = !(0, M.isWindows)() || null == u || (null == eh ? void 0 : eh.id.startsWith('camera:')) || null == u ? null : u.pid;
            (0, _.WH)(s, t, {
                pid: c,
                sourceId: null == c && null != eh ? eh.id : null,
                sourceName: null == c && null != eh ? eh.name : null,
                audioSourceId: eN,
                sound: ev
            }), (async () => {
                !await C.Z.hasPermission(y.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }) && m.Z.show({
                    title: V.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
                    body: V.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
                });
            })();
        }(), Q();
    }
    let eP = i.useCallback((e, n, t) => {
        let l = (0, j.Z)(e, el, ea), [s, a] = null != l ? l : [
                n,
                t
            ];
        if (e !== eI && (n = s, t = a), !(0, O.Z)(e, n, t, el, ea)) {
            let [e, l] = (0, j.Z)(w.tI.PRESET_VIDEO, el, ea);
            n = e, t = l;
        }
        t !== eR && eT(t), n !== ef && eA(n), s !== n || a !== t ? ex(w.tI.PRESET_CUSTOM) : e !== eI && ex(e);
    }, [
        el,
        ea,
        eR,
        ef,
        eI
    ]);
    async function eD(e) {
        if (e.preventDefault(), 1 === eu)
            return ec(2);
        let n = (0, b.Z)(et, eh, h.ZP.getRunningGames()), l = p.ZP.supportsFeature(B.eRX.ELEVATED_HOOK) && (null == n ? void 0 : n.elevated);
        if ((0, M.isMac)() && null != eh) {
            let e = await x.Z.getMediaEngine().getDesktopSources(), n = eh.id;
            if (n.startsWith('screen') && e.length > 0 && !e.some(e => e.includes(n))) {
                var s, i;
                s = n, i = e, L.default.track(B.rMx.SCREENSHARE_FAILED, {
                    source_id: s,
                    screens: i.length
                }), (0, d.openModal)(e => (0, a.jsx)(d.ConfirmModal, {
                    header: V.Z.Messages.SCREENSHARE_RELAUNCH,
                    confirmText: V.Z.Messages.OKAY,
                    cancelText: V.Z.Messages.CANCEL,
                    onConfirm: () => p.ZP.relaunch(),
                    ...e,
                    children: (0, a.jsx)(d.Text, {
                        variant: 'text-md/normal',
                        children: V.Z.Messages.SCREENSHARE_RELAUNCH_BODY
                    })
                }));
                return;
            }
        }
        l ? !function () {
            var e;
            let n = null !== (e = null == et ? void 0 : et.pid) && void 0 !== e ? e : null;
            (0, d.openModalLazy)(async () => {
                let {default: e} = await t.e('74300').then(t.bind(t, 566852));
                return t => (0, a.jsx)(e, {
                    ...t,
                    handleStream: ej,
                    pid: n
                });
            });
        }() : ej();
    }
    let eG = i.useCallback(e => {
            eC(e), null != e && (ec(2), e_(!0));
        }, []), eU = i.useCallback(e => {
            ep(e), ec(z ? 1 : 2);
        }, [z]), eb = function (e) {
            switch (e) {
            case 1:
                return V.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
            case 2:
                return null;
            default:
                return V.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC;
            }
        }(eu), ew = (0, a.jsx)(d.ModalHeader, {
            className: k.modalHeader,
            separator: !1,
            children: (0, a.jsxs)(T.Z, {
                direction: T.Z.Direction.VERTICAL,
                align: T.Z.Align.CENTER,
                className: k.header,
                children: [
                    (0, a.jsx)(d.Heading, {
                        variant: 'heading-xl/semibold',
                        id: eo,
                        className: k.headerText,
                        children: V.Z.Messages.GO_LIVE_MODAL_TITLE
                    }),
                    null != eb ? (0, a.jsx)(d.Text, {
                        className: k.headerDescription,
                        variant: 'text-md/normal',
                        color: 'text-normal',
                        children: eb
                    }) : null
                ]
            })
        }), eB = (0, a.jsxs)(d.Slides, {
            springConfig: {
                ...u.config.stiff,
                clamp: !0
            },
            activeSlide: eu,
            width: 480,
            onSlideReady: em,
            children: [
                (0, a.jsx)(d.Slide, {
                    id: 0,
                    children: (0, a.jsx)('div', {
                        className: k.modalSize,
                        children: (0, a.jsx)(G.Z, { onSelectGuild: eU })
                    })
                }),
                (0, a.jsx)(d.Slide, {
                    id: 1,
                    children: (0, a.jsx)('div', {
                        className: k.modalSize,
                        children: (0, a.jsx)(U.Z, {
                            selectedSource: eh,
                            onChangeSelectedSource: eG
                        })
                    })
                }),
                (0, a.jsx)(d.Slide, {
                    id: 2,
                    children: (0, a.jsx)('div', {
                        className: k.modalSize,
                        children: (0, a.jsx)(D.Z, {
                            selectedChannelId: null !== (r = null == en ? void 0 : en.id) && void 0 !== r ? r : eS,
                            selectedPreset: eI,
                            selectedResolution: ef,
                            selectedSource: eh,
                            selectedFPS: eR,
                            sound: ev,
                            sourceChanged: eE,
                            selectSource: z,
                            onChangeSelectedFPS: e => eP(eI, ef, e),
                            onChangeSelectedResolution: e => eP(eI, e, eR),
                            onChangeSelectedPreset: e => eP(e, ef, eR),
                            onChangeSelectedChannelId: eg,
                            onChangeSelectedSource: eG,
                            onChangeSource: () => ec(1),
                            onChangeAudioDevice: e => eZ(e),
                            onChangeGuild: () => ec(0),
                            onChangeSound: e => eL(e),
                            onClose: Q,
                            selectedGuildId: eM,
                            targetGuildPremiumTier: ea,
                            selectGuild: F,
                            isAnimationDone: 2 === ed && J === d.ModalTransitionState.ENTERED
                        })
                    })
                })
            ]
        }), ey = function (e, n, t, l) {
            switch (e) {
            case 1:
                return n ? 0 : null;
            case 2:
                if (l)
                    return 1;
                if (!t && n)
                    return 0;
                return null;
            default:
                return null;
            }
        }(eu, F, z, eE), eV = 2 !== eu || null == eh && null == et || null == eO, ek = (0, a.jsxs)(d.ModalFooter, {
            justify: null == ey ? T.Z.Justify.START : T.Z.Justify.BETWEEN,
            children: [
                (0, a.jsx)(d.Button, {
                    type: 'submit',
                    size: d.Button.Sizes.SMALL,
                    disabled: eV,
                    autoFocus: !0,
                    children: V.Z.Messages.GO_LIVE_MODAL_CTA
                }),
                null == ey ? (0, a.jsx)(d.Button, {
                    className: k.cancelButton,
                    look: d.Button.Looks.LINK,
                    size: d.Button.Sizes.SMALL,
                    color: d.ButtonColors.PRIMARY,
                    onClick: Q,
                    children: V.Z.Messages.CANCEL
                }) : (0, a.jsx)(d.Button, {
                    size: d.Button.Sizes.SMALL,
                    color: d.ButtonColors.PRIMARY,
                    onClick: () => ec(ey),
                    children: V.Z.Messages.BACK
                })
            ]
        });
    return (0, a.jsx)(S.Z, {
        page: B.ZY5.GO_LIVE_MODAL,
        children: (0, a.jsxs)(d.ModalRoot, {
            'aria-labelledby': eo,
            transitionState: J,
            size: d.ModalSize.DYNAMIC,
            className: k.modalSize,
            children: [
                (0, a.jsx)(d.ModalCloseButton, {
                    onClick: Q,
                    className: k.modalCloseButton
                }),
                (0, a.jsx)('div', { className: k.art }),
                (0, a.jsxs)('form', {
                    onSubmit: eD,
                    children: [
                        ew,
                        eB,
                        ek
                    ]
                })
            ]
        })
    });
}
