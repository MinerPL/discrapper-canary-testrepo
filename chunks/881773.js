n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var r = n(200651),
    o = n(192379),
    i = n(120356),
    l = n.n(i),
    a = n(100621),
    s = n(442837),
    c = n(692547),
    u = n(561779),
    d = n(481060),
    m = n(607070),
    p = n(617136),
    f = n(184299),
    v = n(818570),
    C = n(223418),
    g = n(604162),
    x = n(981631),
    S = n(388032),
    h = n(417575);
let E = '-:--',
    _ = (e, t) => {
        (0, p.dA)({
            questId: e,
            event: x.rMx.QUEST_VIDEO_VOLUME_CHANGED,
            properties: { volume_threshold: t > 0 && t < 1 ? 0.5 : t }
        });
    };
function T(e) {
    let { current: t, duration: n } = e,
        o = null != t ? (0, g.yv)(t) : E,
        i = null != n ? (0, g.yv)(n) : E;
    return (
        (o = o.padStart(i.length, '0')),
        (0, r.jsxs)('div', {
            className: l()(h.durationTimeWrapper, h.controlsBarItem),
            children: [
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: h.durationTimeDisplay,
                    children: o
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: h.durationTimeSeparator,
                    children: '/'
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: h.durationTimeDisplay,
                    children: i
                })
            ]
        })
    );
}
function b(e) {
    let { iconComponent: t, animationTime: n, visible: o, ariaLabel: i, active: s, disabled: u, tooltipLabel: m, tooltipDelayMs: p = 1500, onClick: f } = e,
        v = (e) =>
            (0, r.jsx)(d.Clickable, {
                ...e,
                onClick: f,
                className: l()(h.videoControlsBtnCont, { [h.videoControlsBtnContDisabled]: u }),
                'aria-label': i,
                'aria-disabled': u,
                children: (0, r.jsx)(a.animated.div, {
                    className: l()(h.videoControlsBtnCont),
                    style: {
                        opacity: (0, a.to)(
                            [
                                n.to({
                                    range: [0, 1],
                                    output: [0, 1]
                                })
                            ],
                            (e) => ''.concat(o ? e : Math.pow(e, 8))
                        )
                    },
                    children: (0, r.jsx)(t, {
                        color: !0 !== u ? c.Z.colors.WHITE : c.Z.colors.TEXT_MUTED,
                        className: l()(h.controlsBarItem, {
                            [h.controlsBarItemActive]: s,
                            [h.videoControlsBtn]: !u
                        })
                    })
                })
            });
    return null != m
        ? (0, r.jsx)(d.Tooltip, {
              text: m,
              delay: p,
              children: (e) => v(e)
          })
        : v();
}
function N(e) {
    var t, n;
    let { videoRef: i, quest: p, playerState: g, animSpring: x, visible: E, seekForwardEnabled: N, hideCaptionButton: j, handlePlayPauseBtnClick: I, handleTranscriptBtnClick: y, handleCaptionBtnClick: k, handleFullScreenBtnClick: B, handleSeekBackBtnClick: D, handleSeekForwardBtnClick: A, handleControlBarPendingInteraction: L } = e,
        P = (0, f.km)((e) => e.volume),
        M = (0, f.km)((e) => e.setVolume),
        R = (0, f.km)((e) => e.muted),
        O = (0, f.km)((e) => e.setMuted),
        U = (0, f.km)((e) => e.transcriptEnabled),
        F = (0, f.km)((e) => e.captionEnabled),
        w = (0, f.km)((e) => e.fullScreenEnabled),
        Z = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
        [G, V] = o.useState(R ? 0 : P),
        [H, z] = o.useState(!1),
        [q, Y] = o.useState(!1),
        [{ volumeAnimSpring: W }, Q] = (0, d.useSpring)(() => ({
            from: { volumeAnimSpring: 0 },
            config: {
                tension: 100,
                friction: 3,
                clamp: !0
            }
        })),
        K = (e) => {
            if (null != i.current) e !== i.current.volume && (i.current.volume = e), e !== G && V(e);
        },
        X = () => {
            z(!0);
        },
        J = () => {
            z(!1);
        };
    o.useEffect(
        () => (
            Q({
                volumeAnimSpring: q || H ? 1 : 0,
                immediate: Z
            }),
            () => {
                W.stop();
            }
        ),
        [q, H, Q, Z, W]
    );
    let $ = 0 === G ? d.VoiceXIcon : G < 0.5 ? d.VoiceLowIcon : d.VoiceNormalIcon,
        ee = g === C.r.ENDED ? d.RetryIcon : g === C.r.PLAYING ? d.PauseIcon : d.PlayIcon,
        et = g === C.r.ENDED ? 'Replay' : g === C.r.PLAYING ? S.intl.string(S.t.ZcgDJS) : S.intl.string(S.t.RscU7O);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: l()(h.videoControlsGroup, h.videoControlsGroupStart),
                children: (0, r.jsx)(b, {
                    iconComponent: ee,
                    animationTime: x,
                    visible: E,
                    ariaLabel: et,
                    onClick: I
                })
            }),
            (0, r.jsxs)(a.animated.div, {
                className: l()(h.videoControlsGroup, h.videoControlsGroupMid),
                style: {
                    opacity: (0, a.to)(
                        [
                            x.to({
                                range: [0, 1],
                                output: [0, 1]
                            })
                        ],
                        (e) => ''.concat(E ? e : Math.pow(e, 8))
                    )
                },
                children: [
                    (0, r.jsxs)('div', {
                        onMouseEnter: X,
                        onMouseLeave: J,
                        onFocus: X,
                        onBlur: J,
                        className: h.volumeControlGroup,
                        children: [
                            (0, r.jsx)(b, {
                                iconComponent: $,
                                animationTime: x,
                                visible: E,
                                onClick: () => {
                                    if (null != i.current) 0 === G ? (K(P), O(!1), _(p.id, P)) : (M(G), K(0), O(!0), _(p.id, 0));
                                },
                                ariaLabel: S.intl.string(S.t['eIl+AA']),
                                tooltipLabel: S.intl.string(S.t['eIl+AA'])
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: h.volumeSlider,
                                style: {
                                    opacity: (0, a.to)(
                                        [
                                            W.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(E ? e : Math.pow(e, 8))
                                    ),
                                    width: (0, a.to)(
                                        [
                                            W.to({
                                                range: [0, 1],
                                                output: [0, 100]
                                            })
                                        ],
                                        (e) => ''.concat(e, 'px')
                                    )
                                },
                                children: (0, r.jsx)(u.i, {
                                    mini: !0,
                                    barStyles: {
                                        height: '5px',
                                        top: '10px'
                                    },
                                    grabberStyles: {
                                        marginTop: '-5px',
                                        backgroundColor: c.Z.colors.WHITE.css,
                                        cursor: 'pointer'
                                    },
                                    initialValue: G,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        K(e), M(e), _(p.id, e), q && (Y(!1), L(!1)), R && e > 0 && O(!1);
                                    },
                                    asValueChanges: (e) => {
                                        K(e), !q && (Y(!0), L(!0));
                                    },
                                    fillStyles: { backgroundColor: c.Z.colors.WHITE.css },
                                    orientation: 'horizontal',
                                    'aria-label': S.intl.string(S.t['eIl+AA'])
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(T, {
                        current: null == i ? void 0 : null === (t = i.current) || void 0 === t ? void 0 : t.currentTime,
                        duration: null == i ? void 0 : null === (n = i.current) || void 0 === n ? void 0 : n.duration
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: l()(h.videoControlsGroup, h.videoControlsGroupEnd),
                children: [
                    (0, r.jsx)(b, {
                        iconComponent: d.ArrowAngleLeftUpIcon,
                        animationTime: x,
                        visible: E,
                        onClick: D,
                        ariaLabel: S.intl.string(S.t.r9s3Ul),
                        tooltipLabel: S.intl.string(S.t.r9s3Ul)
                    }),
                    (0, r.jsx)(b, {
                        iconComponent: d.ArrowAngleRightUpIcon,
                        animationTime: x,
                        visible: E,
                        onClick: A,
                        disabled: !N,
                        ariaLabel: N ? S.intl.string(S.t.zWDcND) : S.intl.string(S.t.xXh3y8),
                        tooltipLabel: N ? S.intl.string(S.t.zWDcND) : S.intl.string(S.t.xXh3y8),
                        tooltipDelayMs: N ? 1500 : 0
                    }),
                    (0, r.jsx)(b, {
                        iconComponent: d.PaperIcon,
                        animationTime: x,
                        visible: E,
                        onClick: y,
                        active: U && g !== C.r.ENDED,
                        ariaLabel: S.intl.string(S.t.KCzjTk),
                        tooltipLabel: S.intl.string(S.t.KCzjTk)
                    }),
                    !j &&
                        (0, r.jsx)(b, {
                            iconComponent: v.c,
                            animationTime: x,
                            visible: E,
                            active: F,
                            onClick: k,
                            ariaLabel: S.intl.string(S.t.bDSZOz),
                            tooltipLabel: S.intl.string(S.t.bDSZOz)
                        }),
                    (0, r.jsx)(b, {
                        iconComponent: w ? d.FullscreenExitIcon : d.FullscreenEnterIcon,
                        animationTime: x,
                        visible: E,
                        onClick: B,
                        ariaLabel: S.intl.string(S.t.vKZT5u),
                        tooltipLabel: S.intl.string(S.t.vKZT5u)
                    })
                ]
            })
        ]
    });
}
