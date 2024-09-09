n.d(t, {
    NZ: function () {
        return eL;
    },
    r: function () {
        return eR;
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
    d = n(180081),
    h = n(848246),
    m = n(442837),
    p = n(704215),
    _ = n(481060),
    f = n(846027),
    E = n(287734),
    g = n(872810),
    C = n(410575),
    I = n(40851),
    x = n(317381),
    T = n(596040),
    v = n(100527),
    S = n(906732),
    N = n(67212),
    A = n(757454),
    Z = n(158631),
    M = n(709369),
    b = n(552740),
    R = n(358221),
    L = n(887012),
    j = n(659580),
    P = n(793865),
    O = n(575175),
    y = n(243778),
    D = n(258609),
    k = n(446226),
    U = n(594190),
    w = n(569545),
    B = n(74299),
    H = n(989941),
    G = n(803647),
    V = n(554747),
    F = n(95764),
    W = n(459502),
    z = n(386542),
    Y = n(746599),
    K = n(455961),
    q = n(611845),
    X = n(634750),
    Q = n(618158),
    J = n(390322),
    $ = n(791592),
    ee = n(136995),
    et = n(402113),
    en = n(197016),
    ei = n(386000),
    es = n(698877),
    ea = n(25827),
    el = n(199902),
    er = n(523746),
    eo = n(131951),
    ec = n(944486),
    eu = n(594174),
    ed = n(78839),
    eh = n(449224),
    em = n(626135),
    ep = n(700785),
    e_ = n(923973),
    ef = n(829750),
    eE = n(189771),
    eg = n(294629),
    eC = n(304745),
    eI = n(985370),
    ex = n(544384),
    eT = n(560688),
    ev = n(127608),
    eS = n(76021),
    eN = n(173507),
    eA = n(981631),
    eZ = n(354459),
    eM = n(921944),
    eb = n(177480);
function eR(e, t) {
    if (eo.Z.isVideoEnabled() === e) return;
    let n = () => f.Z.setVideoEnabled(e);
    e ? (0, eN.Z)(n, t) : n();
}
function eL(e) {
    let { channel: t, currentUser: n, exitFullScreen: i, canGoLive: s, hasPermission: r, disabled: o } = e,
        c = (0, I.bp)(),
        u = (0, m.Wu)([el.Z], () => el.Z.getAllActiveStreams()),
        d = u.find((e) => e.ownerId === n.id),
        { activated: f, hqStreamingState: E } = (0, z.k)(h.q.STREAM_HIGH_QUALITY),
        C = null != d && f,
        x = l.useRef(null),
        T = t.getGuildId(),
        v = l.useCallback(() => {
            if ((null == i || i(), !s)) return (0, ev.Z)();
            (0, eS.Z)(T, t.id, eA.ZY5.GUILD_CHANNEL);
        }, [T, t.id, s, i]),
        S = (0, m.e7)([U.ZP, eh.Z], () => (0, H.Z)(U.ZP, eh.Z)),
        M = (0, Z.ZP)(),
        R = (0, A.Z)() && null != S,
        L = (0, m.e7)([ed.ZP], () => ed.ZP.inReverseTrial()),
        j = () => {
            R &&
                (null == d
                    ? (0, g.tE)({
                          channelId: t.id,
                          pid: null == S ? void 0 : S.pid
                      })
                    : (0, N.v$)((0, w.V9)(d), null == S ? void 0 : S.pid));
        },
        P = () => {
            if (R) {
                (0, b.D)(j);
                return;
            }
            if (s) {
                v();
                return;
            }
            (0, ev.Z)();
        },
        O = () => {
            if (M) {
                (0, b.Z)(() => (0, G.Z)(d));
                return;
            }
            (0, G.Z)(d);
        },
        D = Y.pM,
        k = l.useCallback(() => {
            em.default.track(eA.rMx.PERK_DEMO_OFFER_DISMISSED, {
                guild_id: t.guild_id,
                channel_id: t.id,
                perk_type: h.q.STREAM_HIGH_QUALITY
            }),
                (0, Y.qA)();
        }, [t.guild_id, t.id]),
        B = (e, t) => {
            let { onClick: n, ...i } = null != e ? e : { onClick: void 0 },
                s = null != d && !M;
            return (0, a.jsx)(es.O, {
                ...i,
                centerButton: !0,
                disabled: o || !r,
                className: eb.controlButton,
                hasPermission: r,
                streamActive: null != d,
                isSelfStream: !0,
                onPopoutClick: s
                    ? function (e) {
                          E.hqStreamingIsEnabled && !E.hqStreamingPopoutDismissed && D(), null == n || n(e);
                      }
                    : null,
                popoutOpen: t,
                shouldShowTooltip: !t,
                premiumGlow: C && E.hqStreamingIsEnabled,
                buttonRef: x,
                onClick: null != d ? O : P
            });
        };
    return M
        ? B()
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  L && 0 === u.length
                      ? (0, a.jsx)(y.ZP, {
                            contentTypes: [p.z.REVERSE_TRIAL_STREAM_POPOUT],
                            bypassAutoDismiss: !0,
                            children: (e) => {
                                let { visibleContent: t, markAsDismissed: n } = e;
                                if (t === p.z.REVERSE_TRIAL_STREAM_POPOUT)
                                    return (0, a.jsx)(X.G, {
                                        buttonRef: x,
                                        dismissed: !1,
                                        onDismiss: () => n(eM.L.USER_DISMISS)
                                    });
                            }
                        })
                      : C && E.hqStreamingIsEnabled
                        ? (0, a.jsx)(q.$, {
                              buttonRef: x,
                              dismissed: E.hqStreamingPopoutDismissed,
                              onDismiss: D
                          })
                        : (0, a.jsx)(K.b, {
                              channel: t,
                              buttonRef: x,
                              dismissed: E.hqStreamingOptInPopoutDismissed,
                              onDismiss: k
                          }),
                  (0, a.jsx)(Q.Z, {
                      children: (0, a.jsx)(_.Popout, {
                          renderPopout: (e) => {
                              let { closePopout: i } = e;
                              return (0, a.jsx)(J.Z, {
                                  children: (0, a.jsx)(ex.Z, {
                                      channel: t,
                                      currentUser: n,
                                      activeStreams: null != d ? [d] : [],
                                      handleGoLive: v,
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
                              return (0, a.jsx)('div', { children: B(n, i) });
                          }
                      })
                  })
              ]
          });
}
function ej(e) {
    let { channel: t, idle: n } = e,
        i = t.getGuildId();
    return (0, T.Z)(i, t.id)
        ? (0, a.jsx)('div', {
              className: eb.buttonContainer,
              children: (0, a.jsx)(eC.M, {
                  channel: t,
                  idle: n
              })
          })
        : null;
}
((s = i || (i = {})).ACTIVITY = 'ACTIVITY'), (s.STREAM = 'STREAM'), (s.CALL = 'CALL'), (s.EVENT = 'EVENT'), (s.BROADCAST = 'BROADCAST');
let eP = l.memo(function (e) {
    let { connectedActivityApplicationId: t, currentUser: n, onDisconnectCall: i, channel: s } = e,
        r = (0, m.e7)([R.Z], () => R.Z.getSelectedParticipant(s.id)),
        { reducedMotion: o } = l.useContext(_.AccessibilityPreferencesContext),
        [c, u] = l.useState(!1),
        h = null == r ? void 0 : r.id,
        p = (0, m.e7)([el.Z], () => (null != h ? el.Z.getActiveStreamForStreamKey(h) : null), [h]),
        f = (null == r ? void 0 : r.type) === eZ.fO.STREAM && null != p && p.ownerId !== (null == n ? void 0 : n.id),
        C = (0, m.Wu)([el.Z], () =>
            el.Z.getAllActiveStreamsForChannel(s.id).filter((e) => {
                let { ownerId: t } = e;
                return t !== (null == n ? void 0 : n.id);
            })
        ),
        I = (0, V.qY)(s.id),
        x = (0, Z.zW)(s.id),
        T = l.useCallback(() => {
            if ((null == r ? void 0 : r.type) === eZ.fO.ACTIVITY && r.id === t) return 'ACTIVITY';
            if (f) return 'STREAM';
            if (null != I) return 'EVENT';
            return 'CALL';
        }, [r, t, f, I]),
        [v, S] = l.useState(T()),
        N = (0, _.useSpring)(
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
        T() !== v && u(!0);
    }, [v, T]);
    let A = l.useCallback(() => {
            if (null != p) (0, g.g)((0, w.V9)(p));
            else for (let e of C) (0, g.g)((0, w.V9)(e));
        }, [C, p]),
        b = (e, t) => {
            let l = {
                centerButton: !0,
                className: eb.controlButton,
                popoutOpen: e
            };
            switch (v) {
                case 'ACTIVITY':
                    if (null == r || null == n) return;
                    return (0, a.jsx)(et.Z, {
                        ...l,
                        applicationId: r.id,
                        color: 'red',
                        channelId: s.id,
                        onPopoutClick: C.length > 0 ? t : null
                    });
                case 'STREAM':
                    return (0, a.jsx)(es.O, {
                        ...l,
                        hasPermission: !0,
                        streamActive: !0,
                        color: 'red',
                        onClick: A,
                        onPopoutClick: C.length > 1 ? t : null,
                        isSelfStream: !1
                    });
                case 'CALL':
                    return (0, a.jsx)(en.Z, {
                        ...l,
                        color: 'red',
                        onClick: () => (null == i ? void 0 : i()),
                        onPopoutClick: C.length > 0 ? t : null,
                        channel: s
                    });
                case 'EVENT':
                    return (0, a.jsx)(F.Z, {
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
            return x
                ? (0, a.jsx)(M.Z, { onClose: t })
                : (0, a.jsx)(ex.Z, {
                      channel: s,
                      currentUser: n,
                      activeStreams: C,
                      handleGoLive: eA.VqG,
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
                style: N,
                children: b(i, n)
            });
        }
    });
});
function eO(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: i, currentUser: s } = e,
        r = (0, I.bp)(),
        { reachedLimit: c, limit: u } = (0, ef.Z)(t),
        d = l.useCallback(() => {
            (0, eN.Z)(() => E.default.selectVoiceChannel(t.id, !0), r);
        }, [t.id, r]),
        h = l.useCallback(() => {
            n ? (0, eT.Z)() : d();
        }, [n, d]),
        p = (0, m.e7)([er.Z], () => {
            let e = er.Z.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(s.id)) === !0;
        });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ea.C, {
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
                className: eb.controlButton,
                iconClassName: eb.__invalid_joinIcon,
                onChange: d
            }),
            (0, a.jsx)(ee.Z, {
                centerButton: !0,
                color: 'green',
                channel: t,
                className: o()(eb.controlButton, eb.__invalid_lastButton)
            }),
            p
                ? (0, a.jsx)($.Z, {
                      color: 'red',
                      channel: t,
                      className: eb.controlButton
                  })
                : null
        ]
    });
}
t.ZP = function (e) {
    var t;
    let { channel: n, className: i, onDisconnectCall: s, exitFullScreen: l, idleProps: r } = e,
        c = (0, m.e7)([eu.default], () => {
            let e = eu.default.getCurrentUser();
            return u()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        { cameraUnavailable: d, enabled: h } = (0, e_.Z)(),
        p = (0, eE.Z)(n),
        { suppress: f, selfMute: E, mute: g } = (0, eg.Z)(n),
        { canGoLive: I } = (0, m.cj)([eo.Z], () => ({ canGoLive: (0, B.Z)(eo.Z) })),
        T = (0, k.Z)(),
        N = (0, m.e7)([D.Z], () => null != D.Z.getAwaitingRemoteSessionInfo()),
        A = null != T,
        Z = (0, m.e7)([ec.Z], () => {
            var e;
            return (null !== (e = null == T ? void 0 : T.channelId) && void 0 !== e ? e : ec.Z.getVoiceChannelId()) === n.id;
        }),
        M = (0, L.Z)(n, !0),
        b = (0, m.e7)([x.ZP], () => {
            let e = x.ZP.getSelfEmbeddedActivityForChannel(n.id);
            return null != e ? e.applicationId : null;
        }),
        { reachedLimit: R, limit: y } = (0, ef.Z)(n),
        { analyticsLocations: U } = (0, S.ZP)(v.Z.VOICE_CONTROL_TRAY);
    if (!Z)
        return (0, a.jsx)(S.Gt, {
            value: U,
            children: (0, a.jsx)(eO, {
                channel: n,
                cameraUnavailable: d,
                hasCameraPermission: p,
                currentUser: c
            })
        });
    let w =
        ep.BT({
            permission: eA.Plq.ADD_REACTIONS,
            user: c,
            context: n
        }) &&
        !n.isPrivate() &&
        !M;
    return (0, a.jsx)(S.Gt, {
        value: U,
        children: (0, a.jsxs)(C.Z, {
            section: eA.jXE.VOICE_CONTROL_TRAY,
            children: [
                (0, a.jsx)('div', {
                    className: eb.eventPromptsContainer,
                    children: (0, a.jsx)(W.Z, { channelId: n.id })
                }),
                (0, a.jsxs)('div', {
                    className: o()(eb.wrapper, i),
                    children: [
                        !A &&
                            (0, a.jsx)(_.Popout, {
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, a.jsx)(J.Z, { children: (0, a.jsx)(P.Z, { onClose: t }) });
                                },
                                position: 'top',
                                align: 'center',
                                animation: _.Popout.Animation.FADE,
                                children: (e, t) => {
                                    let { onClick: n } = e,
                                        { isShown: i } = t;
                                    return (0, a.jsx)(ea.C, {
                                        centerButton: !0,
                                        hasPermission: p,
                                        className: eb.controlButton,
                                        enabled: h,
                                        cameraUnavailable: d,
                                        onChange: eR,
                                        onCameraUnavailable: eT.Z,
                                        channelLimitReached: R,
                                        channelLimit: y,
                                        popoutOpen: i,
                                        onPopoutClick: n
                                    });
                                }
                            }),
                        !A &&
                            (0, a.jsx)(ej, {
                                channel: n,
                                idle: null === (t = null == r ? void 0 : r.idle) || void 0 === t || t
                            }),
                        !A &&
                            (0, a.jsx)(eL, {
                                channel: n,
                                currentUser: c,
                                exitFullScreen: l,
                                canGoLive: I,
                                hasPermission: p
                            }),
                        (0, a.jsx)(_.Popout, {
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, a.jsx)(J.Z, {
                                    children: (0, a.jsx)(j.default, {
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
                                return (0, a.jsx)(ei.Z, {
                                    centerButton: !0,
                                    onPopoutClick: A ? null : n,
                                    className: eb.controlButton,
                                    selfMute: E,
                                    serverMute: g,
                                    suppress: f,
                                    popoutOpen: i,
                                    awaitingRemote: N,
                                    onClick: () => (0, O.Z)(g, f)
                                });
                            }
                        }),
                        w && !A
                            ? (0, a.jsx)('div', {
                                  className: eb.buttonContainer,
                                  children: (0, a.jsx)(eI.Z, { channel: n })
                              })
                            : null,
                        (0, a.jsx)(eP, {
                            connectedActivityApplicationId: b,
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
