n.d(t, {
    NZ: function () {
        return eS;
    },
    r: function () {
        return ex;
    }
}),
    n(47120);
var i,
    s,
    a = n(735250),
    l = n(470079),
    r = n(120356),
    o = n.n(r),
    c = n(512722),
    u = n.n(c),
    d = n(212433),
    h = n(848246),
    p = n(442837),
    m = n(704215),
    _ = n(481060),
    f = n(846027),
    E = n(287734),
    g = n(872810),
    C = n(410575),
    I = n(40851),
    T = n(317381),
    x = n(596040),
    S = n(100527),
    v = n(906732),
    N = n(358221),
    A = n(887012),
    Z = n(659580),
    M = n(793865),
    b = n(575175),
    R = n(243778),
    L = n(258609),
    j = n(446226),
    P = n(569545),
    O = n(74299),
    y = n(803647),
    D = n(554747),
    U = n(95764),
    k = n(459502),
    w = n(386542),
    B = n(746599),
    H = n(455961),
    G = n(611845),
    V = n(634750),
    F = n(618158),
    W = n(390322),
    z = n(791592),
    Y = n(136995),
    K = n(402113),
    q = n(197016),
    X = n(386000),
    J = n(698877),
    Q = n(25827),
    $ = n(199902),
    ee = n(523746),
    et = n(131951),
    en = n(944486),
    ei = n(594174),
    es = n(78839),
    ea = n(626135),
    el = n(700785),
    er = n(923973),
    eo = n(829750),
    ec = n(189771),
    eu = n(294629),
    ed = n(304745),
    eh = n(985370),
    ep = n(544384),
    em = n(560688),
    e_ = n(127608),
    ef = n(76021),
    eE = n(173507),
    eg = n(981631),
    eC = n(354459),
    eI = n(921944),
    eT = n(892216);
function ex(e, t) {
    if (et.Z.isVideoEnabled() === e) return;
    let n = () => f.Z.setVideoEnabled(e);
    e ? (0, eE.Z)(n, t) : n();
}
function eS(e) {
    let { channel: t, currentUser: n, exitFullScreen: i, canGoLive: s, hasPermission: r, disabled: o } = e,
        c = (0, I.bp)(),
        u = (0, p.Wu)([$.Z], () => $.Z.getAllActiveStreams()),
        d = u.find((e) => e.ownerId === n.id),
        { activated: f, hqStreamingState: E } = (0, w.k)(h.q.STREAM_HIGH_QUALITY),
        g = null != d && f,
        C = l.useRef(null),
        T = t.getGuildId(),
        x = l.useCallback(() => {
            if ((null == i || i(), !s)) return (0, e_.Z)();
            (0, ef.Z)(T, t.id, eg.ZY5.GUILD_CHANNEL);
        }, [T, t.id, s, i]),
        S = (0, p.e7)([es.ZP], () => es.ZP.inReverseTrial()),
        v = () => {
            if (s) {
                x();
                return;
            }
            (0, e_.Z)();
        },
        N = () => {
            (0, y.Z)(d);
        },
        A = B.pM,
        Z = l.useCallback(() => {
            ea.default.track(eg.rMx.PERK_DEMO_OFFER_DISMISSED, {
                guild_id: t.guild_id,
                channel_id: t.id,
                perk_type: h.q.STREAM_HIGH_QUALITY
            }),
                (0, B.qA)();
        }, [t.guild_id, t.id]),
        M = (e, t) => {
            let { onClick: n, ...i } = null != e ? e : { onClick: void 0 },
                s = null != d;
            return (0, a.jsx)(J.O, {
                ...i,
                centerButton: !0,
                disabled: o || !r,
                className: eT.controlButton,
                hasPermission: r,
                streamActive: null != d,
                isSelfStream: !0,
                onPopoutClick: s
                    ? function (e) {
                          E.hqStreamingIsEnabled && !E.hqStreamingPopoutDismissed && A(), null == n || n(e);
                      }
                    : null,
                popoutOpen: t,
                shouldShowTooltip: !t,
                premiumGlow: g && E.hqStreamingIsEnabled,
                buttonRef: C,
                onClick: null != d ? N : v
            });
        };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            S && 0 === u.length
                ? (0, a.jsx)(R.ZP, {
                      contentTypes: [m.z.REVERSE_TRIAL_STREAM_POPOUT],
                      bypassAutoDismiss: !0,
                      children: (e) => {
                          let { visibleContent: t, markAsDismissed: n } = e;
                          if (t === m.z.REVERSE_TRIAL_STREAM_POPOUT)
                              return (0, a.jsx)(V.G, {
                                  buttonRef: C,
                                  dismissed: !1,
                                  onDismiss: () => n(eI.L.USER_DISMISS)
                              });
                      }
                  })
                : g && E.hqStreamingIsEnabled
                  ? (0, a.jsx)(G.$, {
                        buttonRef: C,
                        dismissed: E.hqStreamingPopoutDismissed,
                        onDismiss: A
                    })
                  : (0, a.jsx)(H.b, {
                        channel: t,
                        buttonRef: C,
                        dismissed: E.hqStreamingOptInPopoutDismissed,
                        onDismiss: Z
                    }),
            (0, a.jsx)(F.Z, {
                children: (0, a.jsx)(_.Popout, {
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, a.jsx)(W.Z, {
                            children: (0, a.jsx)(ep.Z, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != d ? [d] : [],
                                handleGoLive: x,
                                onClose: i,
                                appContext: c
                            })
                        });
                    },
                    position: 'top',
                    align: 'center',
                    animation: _.Popout.Animation.FADE,
                    children: (e, t) => {
                        let { ...n } = e,
                            { isShown: i } = t;
                        return (0, a.jsx)('div', { children: M(n, i) });
                    }
                })
            })
        ]
    });
}
function ev(e) {
    let { channel: t, idle: n } = e,
        i = t.getGuildId();
    return (0, x.Z)(i, t.id)
        ? (0, a.jsx)('div', {
              className: eT.buttonContainer,
              children: (0, a.jsx)(ed.M, {
                  channel: t,
                  idle: n
              })
          })
        : null;
}
((s = i || (i = {})).ACTIVITY = 'ACTIVITY'), (s.STREAM = 'STREAM'), (s.CALL = 'CALL'), (s.EVENT = 'EVENT');
let eN = l.memo(function (e) {
    let { connectedActivityApplicationId: t, currentUser: n, onDisconnectCall: i, channel: s } = e,
        r = (0, p.e7)([N.Z], () => N.Z.getSelectedParticipant(s.id)),
        { reducedMotion: o } = l.useContext(_.AccessibilityPreferencesContext),
        [c, u] = l.useState(!1),
        h = null == r ? void 0 : r.id,
        m = (0, p.e7)([$.Z], () => (null != h ? $.Z.getActiveStreamForStreamKey(h) : null), [h]),
        f = (null == r ? void 0 : r.type) === eC.fO.STREAM && null != m && m.ownerId !== (null == n ? void 0 : n.id),
        C = (0, p.Wu)([$.Z], () =>
            $.Z.getAllActiveStreamsForChannel(s.id).filter((e) => {
                let { ownerId: t } = e;
                return t !== (null == n ? void 0 : n.id);
            })
        ),
        I = (0, D.qY)(s.id),
        T = l.useCallback(() => {
            if ((null == r ? void 0 : r.type) === eC.fO.ACTIVITY && r.id === t) return 'ACTIVITY';
            if (f) return 'STREAM';
            if (null != I) return 'EVENT';
            return 'CALL';
        }, [r, t, f, I]),
        [x, S] = l.useState(T()),
        v = (0, _.useSpring)(
            {
                opacity: c ? 0.2 : 1,
                transform: c && !o.enabled ? 'scale(0.7)' : 'scale(1)',
                config: {
                    mass: 2,
                    tension: c ? 600 : 1000,
                    friction: 45,
                    precision: 0.01,
                    clamp: c
                },
                onRest: () => {
                    S(T()), u(!1);
                }
            },
            'animate-always'
        );
    l.useEffect(() => {
        T() !== x && u(!0);
    }, [x, T]);
    let A = l.useCallback(() => {
            if (null != m) (0, g.g)((0, P.V9)(m));
            else for (let e of C) (0, g.g)((0, P.V9)(e));
        }, [C, m]),
        Z = (e, t) => {
            let l = {
                centerButton: !0,
                className: eT.controlButton,
                popoutOpen: e
            };
            switch (x) {
                case 'ACTIVITY':
                    if (null == r || null == n) return;
                    return (0, a.jsx)(K.Z, {
                        ...l,
                        applicationId: r.id,
                        color: 'red',
                        channelId: s.id,
                        onPopoutClick: C.length > 0 ? t : null
                    });
                case 'STREAM':
                    return (0, a.jsx)(J.O, {
                        ...l,
                        hasPermission: !0,
                        streamActive: !0,
                        color: 'red',
                        onClick: A,
                        onPopoutClick: C.length > 1 ? t : null,
                        isSelfStream: !1
                    });
                case 'CALL':
                    return (0, a.jsx)(q.Z, {
                        ...l,
                        color: 'red',
                        onClick: () => (null == i ? void 0 : i()),
                        onPopoutClick: C.length > 0 ? t : null
                    });
                case 'EVENT':
                    return (0, a.jsx)(U.Z, {
                        channelId: s.id,
                        onClick: () => {
                            E.default.disconnect(), null == i || i();
                        }
                    });
            }
        };
    return (0, a.jsx)(_.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(ep.Z, {
                channel: s,
                currentUser: n,
                activeStreams: C,
                handleGoLive: eg.VqG,
                hideSelfOptions: !0,
                onClose: t
            });
        },
        position: 'top',
        align: 'center',
        animation: _.Popout.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: i } = t;
            return (0, a.jsx)(d.animated.div, {
                style: v,
                children: Z(i, n)
            });
        }
    });
});
function eA(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: i, currentUser: s } = e,
        r = (0, I.bp)(),
        { reachedLimit: c, limit: u } = (0, eo.Z)(t),
        d = l.useCallback(() => {
            (0, eE.Z)(() => E.default.selectVoiceChannel(t.id, !0), r);
        }, [t.id, r]),
        h = l.useCallback(() => {
            n ? (0, em.Z)() : d();
        }, [n, d]),
        m = (0, p.e7)([ee.Z], () => {
            let e = ee.Z.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(s.id)) === !0;
        });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(Q.C, {
                enabled: !0,
                centerButton: !0,
                join: !0,
                color: 'green',
                channelLimitReached: c,
                channelLimit: u,
                channel: t,
                cameraUnavailable: n,
                hasPermission: i,
                onCameraUnavailable: h,
                className: eT.controlButton,
                iconClassName: eT.__invalid_joinIcon,
                onChange: d
            }),
            (0, a.jsx)(Y.Z, {
                centerButton: !0,
                color: 'green',
                channel: t,
                className: o()(eT.controlButton, eT.__invalid_lastButton)
            }),
            m
                ? (0, a.jsx)(z.Z, {
                      color: 'red',
                      channel: t,
                      className: eT.controlButton
                  })
                : null
        ]
    });
}
t.ZP = function (e) {
    var t;
    let { channel: n, className: i, onDisconnectCall: s, exitFullScreen: l, idleProps: r } = e,
        c = (0, p.e7)([ei.default], () => {
            let e = ei.default.getCurrentUser();
            return u()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        { cameraUnavailable: d, enabled: h } = (0, er.Z)(),
        m = (0, ec.Z)(n),
        { suppress: f, selfMute: E, mute: g } = (0, eu.Z)(n),
        { canGoLive: I } = (0, p.cj)([et.Z], () => ({ canGoLive: (0, O.Z)(et.Z) })),
        x = (0, j.Z)(),
        N = (0, p.e7)([L.Z], () => null != L.Z.getAwaitingRemoteSessionInfo()),
        R = null != x,
        P = (0, p.e7)([en.Z], () => {
            var e;
            return (null !== (e = null == x ? void 0 : x.channelId) && void 0 !== e ? e : en.Z.getVoiceChannelId()) === n.id;
        }),
        y = (0, A.Z)(n, !0),
        D = (0, p.e7)([T.ZP], () => {
            let e = T.ZP.getSelfEmbeddedActivityForChannel(n.id);
            return null != e ? e.applicationId : null;
        }),
        { reachedLimit: U, limit: w } = (0, eo.Z)(n),
        { analyticsLocations: B } = (0, v.ZP)(S.Z.VOICE_CONTROL_TRAY);
    if (!P)
        return (0, a.jsx)(v.Gt, {
            value: B,
            children: (0, a.jsx)(eA, {
                channel: n,
                cameraUnavailable: d,
                hasCameraPermission: m,
                currentUser: c
            })
        });
    let H =
        el.BT({
            permission: eg.Plq.ADD_REACTIONS,
            user: c,
            context: n
        }) &&
        !n.isPrivate() &&
        !y;
    return (0, a.jsx)(v.Gt, {
        value: B,
        children: (0, a.jsxs)(C.Z, {
            section: eg.jXE.VOICE_CONTROL_TRAY,
            children: [
                (0, a.jsx)('div', {
                    className: eT.eventPromptsContainer,
                    children: (0, a.jsx)(k.Z, { channelId: n.id })
                }),
                (0, a.jsxs)('div', {
                    className: o()(eT.wrapper, i),
                    children: [
                        !R &&
                            (0, a.jsx)(_.Popout, {
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, a.jsx)(W.Z, { children: (0, a.jsx)(M.Z, { onClose: t }) });
                                },
                                position: 'top',
                                align: 'center',
                                animation: _.Popout.Animation.FADE,
                                children: (e, t) => {
                                    let { onClick: n } = e,
                                        { isShown: i } = t;
                                    return (0, a.jsx)(Q.C, {
                                        centerButton: !0,
                                        hasPermission: m,
                                        className: eT.controlButton,
                                        enabled: h,
                                        cameraUnavailable: d,
                                        onChange: ex,
                                        onCameraUnavailable: em.Z,
                                        channelLimitReached: U,
                                        channelLimit: w,
                                        popoutOpen: i,
                                        onPopoutClick: n
                                    });
                                }
                            }),
                        !R &&
                            (0, a.jsx)(ev, {
                                channel: n,
                                idle: null === (t = null == r ? void 0 : r.idle) || void 0 === t || t
                            }),
                        !R &&
                            (0, a.jsx)(eS, {
                                channel: n,
                                currentUser: c,
                                exitFullScreen: l,
                                canGoLive: I,
                                hasPermission: m
                            }),
                        (0, a.jsx)(_.Popout, {
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, a.jsx)(W.Z, {
                                    children: (0, a.jsx)(Z.default, {
                                        onClose: t,
                                        renderInputDevices: !0,
                                        renderOutputDevices: !0,
                                        renderInputModes: !0
                                    })
                                });
                            },
                            align: 'center',
                            position: 'top',
                            animation: _.Popout.Animation.FADE,
                            children: (e, t) => {
                                let { onClick: n } = e,
                                    { isShown: i } = t;
                                return (0, a.jsx)(X.Z, {
                                    centerButton: !0,
                                    onPopoutClick: R ? null : n,
                                    className: eT.controlButton,
                                    selfMute: E,
                                    serverMute: g,
                                    suppress: f,
                                    popoutOpen: i,
                                    awaitingRemote: N,
                                    onClick: () => (0, b.Z)(g, f, eg.jXE.VOICE_CONTROL_TRAY)
                                });
                            }
                        }),
                        H && !R
                            ? (0, a.jsx)('div', {
                                  className: eT.buttonContainer,
                                  children: (0, a.jsx)(eh.Z, { channel: n })
                              })
                            : null,
                        (0, a.jsx)(eN, {
                            connectedActivityApplicationId: D,
                            currentUser: c,
                            channel: n,
                            onDisconnectCall: s
                        })
                    ]
                })
            ]
        })
    });
};
