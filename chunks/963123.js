n.d(t, {
    Z: function () {
        return F;
    }
}),
    n(47120),
    n(653041);
var r = n(200651),
    o = n(192379),
    i = n(120356),
    l = n.n(i),
    a = n(100621),
    s = n(442837),
    c = n(692547),
    u = n(780384),
    d = n(481060),
    m = n(607070),
    p = n(70097),
    f = n(210887),
    v = n(866960),
    C = n(228488),
    g = n(617136),
    x = n(272008),
    S = n(497505),
    h = n(918701),
    E = n(184299),
    _ = n(720293),
    T = n(881773),
    b = n(355243),
    N = n(106743),
    j = n(223418),
    I = n(604162),
    y = n(747717),
    k = n(281055),
    B = n(981631),
    D = n(217702),
    A = n(388032),
    L = n(417575);
let P = new Set([B.IyS.FIVE_G, B.IyS.FOUR_G, B.IyS.UNKNOWN]),
    M = {
        tension: 250,
        friction: 5,
        clamp: !0
    };
function R() {
    let e = (0, s.e7)([f.Z], () => f.Z.getState().theme);
    return (0, r.jsx)('div', {
        className: L.pauseText,
        style: { background: (0, u.wj)(e) ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)' },
        children: (0, r.jsx)(d.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: A.intl.string(A.t.U7Xrb2)
        })
    });
}
function O(e) {
    let { quest: t, className: n } = e,
        i = o.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return null == i
        ? null
        : (0, r.jsx)('img', {
              src: i.url,
              alt: 'Video thumbnail',
              className: l()(L.stillFrameImageCard, n)
          });
}
function U(e) {
    let { title: t, subtitle: n, icon: i, onClick: a, className: m } = e,
        p = (0, s.e7)([f.Z], () => f.Z.getState().theme),
        [v, C] = o.useState(!1),
        g = () => {
            C(!0);
        },
        x = () => {
            C(!1);
        };
    return (0, r.jsx)(d.Clickable, {
        className: l()(L.endScreenPanel, L.accentOnHover, m),
        onMouseEnter: g,
        onMouseLeave: x,
        onFocus: g,
        onBlur: x,
        onClick: a,
        style: { background: (0, u.wj)(p) ? 'rgba(0, 0, 0, 0.45)' : 'rgba(255, 255, 255, 0.55)' },
        children: (0, r.jsxs)('div', {
            className: L.endScreenPanelInner,
            children: [
                (0, r.jsxs)('div', {
                    className: L.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(d.Heading, {
                            variant: 'heading-md/semibold',
                            children: t
                        }),
                        (0, r.jsx)(d.Heading, {
                            variant: 'heading-sm/normal',
                            color: 'text-normal',
                            children: n
                        })
                    ]
                }),
                (0, r.jsx)(y.Z, {}),
                (0, r.jsx)(i, {
                    size: 'md',
                    color: v ? c.Z.colors.INTERACTIVE_ACTIVE : c.Z.colors.INTERACTIVE_NORMAL,
                    className: L.endScreenIcon
                })
            ]
        })
    });
}
function F(e) {
    var t, n, i, c, u, f, y, F, w, Z, G;
    let { quest: V, onOptimisticProgressUpdate: H, autoplay: z, parentTransitionState: q } = e,
        Y = (0, E.km)((e) => e.transcriptEnabled),
        W = (0, E.km)((e) => e.setTranscriptEnabled),
        Q = (0, E.km)((e) => e.captionEnabled),
        K = (0, E.km)((e) => e.setCaptionEnabled),
        X = (0, E.km)((e) => e.fullScreenEnabled),
        J = (0, E.km)((e) => e.setFullScreenEnabled),
        { focused: $, focusedChanged: ee } = (0, k.xU)(),
        { visible: et, visibleChanged: en, targetRef: er } = (0, k.Yy)(),
        [eo, ei] = o.useState(!0 === z ? j.r.PLAYING : j.r.PAUSED),
        [el, ea] = o.useState(!1),
        es = (0, h.il)(V),
        [ec, eu] = o.useState(es.percentComplete),
        [ed, em] = o.useState(!1),
        [ep, ef] = o.useState(!0),
        [ev, eC] = o.useState(!1),
        [eg, ex] = o.useState([]),
        [eS, eh] = o.useState(v.Z.getEffectiveConnectionSpeed()),
        [eE, e_] = o.useState(0),
        [eT, eb] = o.useState(0),
        [eN, ej] = o.useState(!1),
        [eI, ey] = o.useState(!1),
        ek = (0, E.km)((e) => {
            var t;
            return null !== (t = e.videoProgress[V.id]) && void 0 !== t
                ? t
                : {
                      timestampSec: 0,
                      duration: 10
                  };
        }),
        eB = (0, E.km)((e) => e.setVideoProgress),
        eD = (0, E.km)((e) => e.muted),
        eA = (0, E.km)((e) => e.volume),
        eL = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
        eP = (0, o.useRef)(null),
        eM = o.useRef(!0),
        eR = (null === (t = V.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        eO = (0, E.km)((e) => e.transcript),
        [eU, eF] = o.useState(null),
        [ew, eZ] = o.useState(null),
        eG = eR ? (null !== (y = null === (n = eP.current) || void 0 === n ? void 0 : n.duration) && void 0 !== y ? y : 0) : ek.maxTimestampSec;
    o.useLayoutEffect(() => {
        eM.current && ((eM.current = !1), eh(v.Z.getEffectiveConnectionSpeed()), eR && ek.timestampSec >= ek.duration && eB(V.id, 0, ek.duration));
    }, []),
        o.useEffect(() => {
            null != eP.current &&
                (0, g.dA)({
                    questId: V.id,
                    event: B.rMx.QUEST_VIDEO_PAUSED,
                    properties: {
                        video_timestamp_seconds: eP.current.currentTime,
                        reason: eU
                    }
                });
        }, [eU, V.id]),
        o.useEffect(() => {
            ee &&
                null != eP.current &&
                (0, g.dA)({
                    questId: V.id,
                    event: $ ? B.rMx.QUEST_VIDEO_APP_FOCUSED : B.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                    properties: {
                        video_timestamp_seconds: eP.current.currentTime,
                        video_state: eo
                    }
                });
        }, [$, ee, eo, V.id]),
        o.useEffect(() => {
            (q === d.ModalTransitionState.HIDDEN || q === d.ModalTransitionState.EXITING || q === d.ModalTransitionState.EXITED || (null != q && en && !et && !eR) || (ee && !$ && !eR)) && null != eP.current && eo === j.r.PLAYING && (eY(!1), eF(j.y.LOST_FOCUS));
        }, [q, $, ee, et, en, eo, eR]);
    let eV = () => {
            ea(!0);
        },
        eH = () => {
            ea(!1);
        },
        ez = el || eo === j.r.PAUSED || eo === j.r.ENDED,
        eq = o.useCallback(() => {
            var e;
            let t = (0, C.fn)(null === (e = eP.current) || void 0 === e ? void 0 : e.parentNode, eP.current);
            null != t &&
                !(0, C.rB)(t) &&
                (t.removeEventListener(C.NO, eq),
                J(!1),
                (0, g.dA)({
                    questId: V.id,
                    event: B.rMx.QUEST_VIDEO_FULLSCREEN_EXITED
                }));
        }, [V.id, J]);
    o.useEffect(() => {
        let e = eP.current;
        return () => {
            let t = (0, C.fn)(null == e ? void 0 : e.parentNode, e);
            null != t && t.removeEventListener(C.NO, eq);
        };
    }, [eq]);
    let eY = (e) => {
            if (null != eP.current) e ? (eP.current.play(), eF(null)) : eP.current.pause(), ei(e ? j.r.PLAYING : j.r.PAUSED);
        },
        eW = o.useCallback(
            (e) => {
                if (null != eP.current) em(!0), (eP.current.currentTime = e), eB(V.id, e, eP.current.duration);
            },
            [eP, eB, V]
        ),
        eQ = () => {
            if (null != eP.current)
                switch (eo) {
                    case j.r.ENDED:
                        eW(0), eY(!0);
                        break;
                    case j.r.PLAYING:
                        eY(!1), eF(j.y.PAUSE_BUTTON);
                        break;
                    default:
                        eY(!0);
                }
        },
        eK = (e) => {
            eZ(e);
        },
        eX = (e) => {
            eZ((t) => ((null == t ? void 0 : t.id) === e.id ? null : t));
        },
        eJ = (e) => {
            if (null != eP.current && eo === j.r.PLAYING) ep && ef(!1), ev && eC(!1), eY(!0);
        };
    o.useEffect(() => {
        if (!ed) return;
        let e = setTimeout(() => {
            em(!1);
        }, 1000);
        return () => clearTimeout(e);
    }, [ed]);
    let e$ = o.useCallback(() => {
            if (null != eP.current) eW(Math.max(eP.current.currentTime - 10, 0));
        }, [eW]),
        e0 = o.useCallback(() => {
            if (null != eP.current) eW(Math.min(eP.current.currentTime + 10, eP.current.duration));
        }, [eW]),
        [{ controlBarAnimSpring: e1 }, e2] = (0, d.useSpring)(() => ({
            from: { controlBarAnimSpring: 0 },
            config: M,
            onStart: () => {
                ey(!1);
            },
            onRest: (e) => {
                1 === e.value && ey(!0);
            }
        })),
        e9 = (0, o.useRef)(null),
        [{ captionHeightSpring: e4 }, e6] = (0, d.useSpring)(() => ({
            from: { captionHeightSpring: 0 },
            config: M
        }));
    o.useEffect(() => {
        var e, t;
        return (
            e6({
                captionHeightSpring: Q && null != ew && null !== (t = null === (e = e9.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                immediate: eL
            }),
            () => {
                e4.stop();
            }
        );
    }, [Q, e6, eL, ew, e4]),
        o.useEffect(
            () => (
                e2({
                    controlBarAnimSpring: ez || eN ? 1 : 0,
                    immediate: eL
                }),
                () => {
                    e1.stop();
                }
            ),
            [ez, e2, eL, eN, e1]
        );
    let e7 = (e) => {
            !eR && (0, x.FI)(V.id, e),
                null != eP.current &&
                    (0, g.dA)({
                        questId: V.id,
                        event: B.rMx.QUEST_VIDEO_PROGRESSED,
                        properties: {
                            progress: ec / 100,
                            video_timestamp_seconds: eP.current.currentTime
                        }
                    });
        },
        e3 = eo === j.r.ENDED,
        e5 = o.useMemo(() => (P.has(eS) ? (0, _.z)(_.i.VIDEO_PLAYER_VIDEO, V) : (0, _.z)(_.i.VIDEO_PLAYER_VIDEO_LOW_RES, V)), [eS, V]),
        e8 = o.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_THUMBNAIL, V), [V]),
        te = o.useMemo(() => (0, _.z)(_.i.VIDEO_PLAYER_CAPTION, V), [V]),
        tt = eR || ek.maxTimestampSec >= (null !== (F = null === (i = eP.current) || void 0 === i ? void 0 : i.currentTime) && void 0 !== F ? F : 0) + 1;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(d.Clickable, {
            className: L.videoCont,
            'data-fullscreen': X,
            tabIndex: -1,
            onMouseEnter: eV,
            onMouseLeave: eH,
            onFocus: eV,
            onBlur: eH,
            children: (0, r.jsxs)('div', {
                className: L.videoContInnerRelative,
                children: [
                    (0, r.jsx)(O, {
                        quest: V,
                        className: l()({ [L.stillFrameImageCardHidden]: !e3 })
                    }),
                    e3 && (0, r.jsx)('div', { className: L.videoContOverlay }),
                    (0, r.jsxs)(p.Z, {
                        ref: (e) => {
                            (eP.current = e), (er.current = e);
                        },
                        autoPlay: z,
                        playsInline: !0,
                        mediaLayoutType: X ? D.hV.STATIC : D.hV.RESPONSIVE,
                        className: l()({
                            [L.hidden]: e3,
                            [L.videoInner]: !0
                        }),
                        controls: !1,
                        poster: null == e8 ? void 0 : e8.url,
                        disablePictureInPicture: !0,
                        onTimeUpdate: (e) => {
                            if (null != eP.current) eP.current.currentTime >= eE && (e_(eP.current.currentTime + 10 + 5 * Math.random()), e7(eP.current.currentTime)), eP.current.currentTime >= eT && (eb(eP.current.currentTime + 1), (0, x.qm)(V.id, es.taskType, eP.current.currentTime), H(eP.current.currentTime)), eB(V.id, eP.current.currentTime, eP.current.duration), eu((eP.current.currentTime / eP.current.duration) * 100);
                        },
                        onEnded: (e) => {
                            null != eP.current && (e7(eP.current.duration + 1), eB(V.id, eP.current.duration, eP.current.duration)), ei(j.r.ENDED);
                        },
                        onLoadedData: (e) => {
                            ep && ef(!1);
                        },
                        onLoadedMetadata: (e) => {
                            if (null == eP.current) return;
                            if ((eW(ek.timestampSec), eD ? (eP.current.volume = 0) : (eP.current.volume = eA), 0 === eP.current.textTracks.length)) return;
                            let t = eP.current.textTracks[0];
                            if (((t.mode = 'hidden'), null != t.cues))
                                for (let e = 0; e < t.cues.length; e++) {
                                    let n = t.cues[e];
                                    (0, I.JC)(n) && ((n.id = 'cue-'.concat(e)), (n.onenter = () => eK(n)), (n.onexit = () => eX(n)));
                                }
                        },
                        onWaiting: (e) => {
                            eC(!0);
                        },
                        onProgress: (e) => {
                            if (null == eP.current) return;
                            let t = [];
                            for (let e = 0; e < eP.current.buffered.length; e++) {
                                let n = eP.current.buffered.start(e),
                                    r = eP.current.buffered.end(e);
                                if (!(r - n < 1))
                                    t.push({
                                        start: n / eP.current.duration,
                                        size: (r - n) / eP.current.duration
                                    });
                            }
                            ex(t);
                        },
                        onCanPlay: eJ,
                        onCanPlayThrough: eJ,
                        onClick: () => {
                            eQ();
                        },
                        crossOrigin: 'anonymous',
                        children: [
                            null != te &&
                                (0, r.jsx)('track', {
                                    src: te.url,
                                    label: 'English',
                                    kind: 'captions',
                                    srcLang: 'en',
                                    default: !0
                                }),
                            null != e5 &&
                                (0, r.jsx)('source', {
                                    src: e5.url,
                                    type: e5.mimetype
                                })
                        ]
                    }),
                    (ep || ev) &&
                        (0, r.jsx)(d.Spinner, {
                            type: d.Spinner.Type.WANDERING_CUBES,
                            className: L.loadingSpinner
                        }),
                    eo === j.r.PAUSED && eU === j.y.LOST_FOCUS && (0, r.jsx)(R, {}),
                    Y &&
                        eo !== j.r.ENDED &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.Clickable, {
                                    onClick: () => W(!1),
                                    children: (0, r.jsx)('div', { className: L.transcriptOverlay })
                                }),
                                (0, r.jsx)(a.animated.div, {
                                    className: L.transcriptCont,
                                    style: {
                                        marginBottom: (0, a.to)([e1, e4], (e, t) => ''.concat(50 * e + t, 'px'))
                                    },
                                    children: (0, r.jsx)(N.K, {
                                        quest: V,
                                        onClose: () => {
                                            W(!1);
                                        }
                                    })
                                })
                            ]
                        }),
                    eo === j.r.ENDED &&
                        (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)(U, {
                                title: null !== (w = null === (c = V.config.videoMetadata) || void 0 === c ? void 0 : c.messages.videoEndCtaTitle) && void 0 !== w ? w : A.intl.string(A.t.iiTtpK),
                                subtitle: null !== (Z = null === (u = V.config.videoMetadata) || void 0 === u ? void 0 : u.messages.videoEndCtaSubtitle) && void 0 !== Z ? Z : A.intl.string(A.t.mxaHf3),
                                icon: d.LinkExternalMediumIcon,
                                className: L.endScreenPanelRight,
                                onClick: () => {
                                    (0, g._3)({
                                        questId: V.id,
                                        questContent: S.jn.QUEST_BAR_V2,
                                        questContentCTA: g.jZ.LEARN_MORE
                                    }),
                                        (0, h.FE)(V, {
                                            content: S.jn.QUEST_BAR_V2,
                                            ctaContent: g.jZ.LEARN_MORE
                                        });
                                }
                            })
                        }),
                    (0, r.jsx)(a.animated.div, {
                        className: L.videoFooterContGradient,
                        style: {
                            opacity: (0, a.to)(
                                [
                                    e1.to({
                                        range: [0, 1],
                                        output: [0, 1]
                                    })
                                ],
                                (e) => ''.concat(e)
                            )
                        }
                    }),
                    (0, r.jsx)(
                        'div',
                        {
                            className: l()(L.playPausePopCont, {
                                [L.play]: eo === j.r.PLAYING,
                                [L.pause]: eo === j.r.PAUSED
                            }),
                            children: eo === j.r.PLAYING ? (0, r.jsx)(d.PlayIcon, { className: L.playPausePopIcon }) : (0, r.jsx)(d.PauseIcon, { className: L.playPausePopIcon })
                        },
                        eo
                    ),
                    Q &&
                        null != ew &&
                        (0, r.jsx)(a.animated.div, {
                            className: L.captionContainer,
                            ref: e9,
                            style: {
                                translateY: (0, a.to)(
                                    [
                                        e1.to({
                                            range: [0, 1],
                                            output: [0, -50]
                                        })
                                    ],
                                    (e) => ''.concat(e, 'px')
                                )
                            },
                            children: (0, r.jsx)(d.Text, {
                                variant: 'text-lg/semibold',
                                color: 'always-white',
                                className: L.captionText,
                                children: ew.text
                            })
                        }),
                    (0, r.jsxs)(a.animated.div, {
                        className: L.videoFooterCont,
                        style: {
                            paddingLeft: (0, a.to)(
                                [
                                    e1.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            paddingRight: (0, a.to)(
                                [
                                    e1.to({
                                        range: [0, 1],
                                        output: [0, 25]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            ),
                            height: (0, a.to)(
                                [
                                    e1.to({
                                        range: [0, 1],
                                        output: [0, 50]
                                    })
                                ],
                                (e) => ''.concat(e, 'px')
                            )
                        },
                        children: [
                            (0, r.jsx)(b.Z, {
                                percent: ec,
                                animate: !0 !== eM.current && !ed,
                                interactionEnabled: eR && eI,
                                backgroundColor: ez ? void 0 : 'rgba(0, 0, 0, 0.0)',
                                preloadedBuffers: ez ? eg : void 0,
                                duration: null !== (G = null === (f = eP.current) || void 0 === f ? void 0 : f.duration) && void 0 !== G ? G : 1,
                                maxSeekableTime: ez && eI ? eG : void 0,
                                onClick: (e) => {
                                    eW(e), eo === j.r.ENDED && eY(!0);
                                },
                                onScrubBack: e$,
                                onScrubForward: e0
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: L.videoControlsCont,
                                style: {
                                    paddingTop: (0, a.to)(
                                        [
                                            e1.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    paddingBottom: (0, a.to)(
                                        [
                                            e1.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(e * e * 12, 'px')
                                    ),
                                    pointerEvents: (0, a.to)(
                                        [
                                            e1.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => (e < 0.3 ? 'none' : 'auto')
                                    )
                                },
                                children: (0, r.jsx)(T.Z, {
                                    videoRef: eP,
                                    quest: V,
                                    playerState: eo,
                                    animSpring: e1,
                                    visible: ez,
                                    seekForwardEnabled: tt,
                                    hideCaptionButton: null == te,
                                    handlePlayPauseBtnClick: eQ,
                                    handleTranscriptBtnClick: () => {
                                        !Y && (null == eO || eO.questId !== V.id || eO.fetchStatus === E.iF.NONE || eO.fetchStatus === E.iF.FAILURE) && (0, x.lL)(V), W(!Y);
                                    },
                                    handleCaptionBtnClick: () => {
                                        K(!Q);
                                    },
                                    handleFullScreenBtnClick: () => {
                                        var e;
                                        let t = !X,
                                            n = (0, C.fn)(null === (e = eP.current) || void 0 === e ? void 0 : e.parentNode, eP.current);
                                        t && null != n
                                            ? ((0, C.Dj)(n),
                                              n.addEventListener(C.NO, eq),
                                              (0, g.dA)({
                                                  questId: V.id,
                                                  event: B.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED
                                              }))
                                            : !t && null != n && (n.removeEventListener(C.NO, eq), (0, C.Pr)(n)),
                                            J(t);
                                    },
                                    handleSeekBackBtnClick: () => {
                                        if (null != eP.current) eW(Math.max(eP.current.currentTime - 10, 0));
                                    },
                                    handleSeekForwardBtnClick: () => {
                                        if (null != eP.current && !!tt) eW(Math.min(eP.current.currentTime + 10, eG));
                                    },
                                    handleControlBarPendingInteraction: ej
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
