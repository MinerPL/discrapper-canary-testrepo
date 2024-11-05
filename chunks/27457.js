n.d(t, {
    BP: function () {
        return ep;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(848246),
    o = n(442837),
    c = n(692547),
    u = n(481060),
    d = n(846027),
    m = n(410575),
    f = n(607070),
    p = n(812206),
    h = n(835473),
    g = n(414910),
    v = n(415635),
    S = n(120619),
    I = n(332487),
    _ = n(925329),
    x = n(649739),
    E = n(574176),
    C = n(833858),
    Z = n(223135),
    y = n(37091),
    T = n(6572),
    b = n(352978),
    A = n(936847),
    N = n(512384),
    w = n(6242),
    P = n(757692),
    j = n(386542),
    R = n(933843),
    M = n(746599),
    O = n(231664),
    L = n(614011),
    k = n(210975),
    D = n(695346),
    U = n(937995),
    F = n(456631),
    V = n(274459),
    B = n(314897),
    W = n(857192),
    G = n(77498),
    H = n(131951),
    z = n(158776),
    Y = n(594174),
    J = n(979651),
    q = n(374129),
    X = n(639351),
    K = n(584729),
    Q = n(334374),
    $ = n(849171),
    ee = n(607187),
    et = n(833519),
    en = n(462061),
    ei = n(623825),
    el = n(839662),
    ea = n(981631),
    er = n(354459),
    es = n(524484),
    eo = n(65154),
    ec = n(388032),
    eu = n(810190);
let ed = l.memo((e) => {
    var t, n, a, c, _;
    let { participant: C, onDoubleClick: Z, onContextMenu: q, onClick: X, onMouseDown: ei, onKeyDown: ed, className: em, style: ep, containerStyle: eh, channel: eg, width: ev, inPopout: eS, onVideoResize: eI, inCall: e_ = !1, selected: ex = !1, noBorder: eE = !1, noVideoRender: eC = !1, focused: eZ = !1, blocked: ey = !1, fit: eT = b.L.CONTAIN, paused: eb = !1, pulseSpeakingIndicator: eA = !1, forceIdle: eN = !1 } = e,
        ew = l.useContext(U.h9) || eN,
        [eP, ej] = l.useState(!1),
        eR = D.Sb.useSetting(),
        eM = (0, o.e7)([W.default], () => W.default.isStreamInfoOverlayEnabled),
        [eO, eL] = l.useState(!1),
        ek = (0, o.e7)([B.default], () => B.default.getId()),
        eD = (0, o.e7)([Y.default], () => Y.default.getCurrentUser()),
        eU = C.type === er.fO.ACTIVITY ? null : null === (t = C.user) || void 0 === t ? void 0 : t.id,
        [eF] = (0, h.Z)(C.type === er.fO.ACTIVITY ? [C.id] : []),
        eV = (0, o.e7)([y.Z], () => y.Z.getEnabled()),
        eB = (0, o.e7)([H.Z], () => null != eU && H.Z.isLocalVideoDisabled(eU, (0, g.Z)(C.type)), [eU, C.type]),
        eW = (0, o.e7)([H.Z], () => (null != eU ? H.Z.getVideoToggleState(eU, (0, g.Z)(C.type)) : ea.ZUi.NONE), [eU, C.type]),
        eG = eW === ea.ZUi.AUTO_PROBING,
        { speaking: eH, ringing: ez, hasVideo: eY } = (0, el.Z)(C, ek),
        eJ = (function (e, t, n) {
            var i, l, a, r;
            let s = (0, o.cj)([J.Z], () => {
                    var e, i, l;
                    let a = J.Z.getVoiceState(n, t.id);
                    return {
                        muted: null !== (e = null == a ? void 0 : a.mute) && void 0 !== e && e,
                        deafened: null !== (i = null == a ? void 0 : a.deaf) && void 0 !== i && i,
                        suppressed: null !== (l = null == a ? void 0 : a.suppress) && void 0 !== l && l,
                        voiceChannelId: null == a ? void 0 : a.channelId
                    };
                }),
                c = (0, o.cj)(
                    [H.Z],
                    () => {
                        let n = (0, g.Z)(t.type),
                            i = t.type !== er.fO.ACTIVITY ? t.user.id : t.id;
                        return e === i
                            ? {
                                  muted: !1,
                                  deafened: !1
                              }
                            : {
                                  muted: H.Z.isLocalMute(i, n),
                                  localVideoDisabled: H.Z.isLocalVideoDisabled(i, n),
                                  localVideoAutoDisabled: H.Z.isLocalVideoAutoDisabled(i, n)
                              };
                    },
                    [e, t]
                );
            return {
                serverMuted: s.muted,
                serverDeafened: s.deafened,
                suppressed: s.suppressed,
                localMuted: c.muted,
                muted: null !== (a = t.type === er.fO.USER && (null === (i = t.voiceState) || void 0 === i ? void 0 : i.isVoiceMuted())) && void 0 !== a && a,
                deafened: null !== (r = t.type === er.fO.USER && (null === (l = t.voiceState) || void 0 === l ? void 0 : l.isVoiceDeafened())) && void 0 !== r && r
            };
        })(ek, C, eg.getGuildId()),
        eq = C.type === er.fO.STREAM && eU === ek,
        eX = (0, R.So)(s.q.STREAM_HIGH_QUALITY),
        { hqStreamingState: eK } = (0, j.k)(s.q.STREAM_HIGH_QUALITY),
        eQ = (0, O.Z)(),
        e$ = eX && eq && null != eQ,
        e0 = (0, P.o)(C, eD),
        e1 = (0, w.lL)('CallTile', !0, eD, e0),
        e2 = (0, o.e7)([F.Z], () => (C.type === er.fO.USER && null != eU ? F.Z.getEffectForUserId(eU) : null)),
        e9 = (0, o.e7)([J.Z], () => J.Z.getVoicePlatformForChannel(eg.id, null != eU ? eU : ea.lds)),
        { enableHangStatus: e3 } = E.n.useExperiment({
            guildId: eg.guild_id,
            location: 'VoiceUsers'
        }),
        { showGameIcon: e7 } = x.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
        e8 = e7 || e3,
        { hangStatusActivity: e4, gameActivity: e6 } = (0, o.cj)(
            [z.Z],
            () => ({
                hangStatusActivity: e3 && null != eU ? z.Z.findActivity(eU, (e) => e.type === ea.IIU.HANG_STATUS) : null,
                gameActivity: e8 && null != eU ? z.Z.findActivity(eU, (e) => null != e.application_id && e.type === ea.IIU.PLAYING) : null
            }),
            [e3, eU, e8]
        ),
        e5 = (0, o.e7)([G.Z], () => ((null == e6 ? void 0 : e6.application_id) != null ? G.Z.getDetectableGame(e6.application_id) : null)),
        te = (0, o.e7)([p.Z], () => (null != e5 && (null == e6 ? void 0 : e6.application_id) != null ? p.Z.getApplication(null == e6 ? void 0 : e6.application_id) : void 0)),
        tt = (0, k.wV)({
            userId: eU,
            channelId: eg.id,
            location: 'CallTile'
        }),
        tn = (0, k.zU)({
            streamKey: C.type === er.fO.STREAM ? C.id : null,
            channelId: eg.id,
            location: 'CallTile'
        }),
        ti = l.useMemo(() => (C.type === er.fO.STREAM ? null != tn && tn : C.type === er.fO.USER && null != tt && tt), [tn, tt, C.type]);
    l.useEffect(() => {
        ej(eZ);
    }, [eZ]);
    let tl = eg.hdStreamingUntil,
        ta = l.useRef(!0),
        [tr, ts] = l.useState(!1),
        to = (0, o.e7)([S.Z], () => S.Z.getPlayedAnimation()),
        tc = (0, o.e7)([f.Z], () => f.Z.useReducedMotion);
    l.useEffect(() => {
        if (ta.current) {
            ta.current = !1;
            return;
        }
        null != tl && new Date(tl) > new Date() && !tc && ts(!0);
    }, [tl]),
        l.useEffect(() => {
            to && ts(!1);
        }, [to]);
    let tu = l.useCallback(() => {
            null != eU && d.Z.toggleLocalMute(eU, eo.Yn.STREAM);
        }, [eU]),
        td = l.useCallback(() => {
            (0, M.hP)();
        }, []),
        tm = l.useCallback(
            (e) => {
                null == X || X(C, e);
            },
            [X, C]
        ),
        tf = l.useCallback(
            (e) => {
                null == Z || Z(C, e);
            },
            [Z, C]
        ),
        tp = l.useCallback(
            (e) => {
                null == q || q(C, e);
            },
            [q, C]
        ),
        th = ew;
    e$ && (th = !1);
    let tg = null,
        tv = null,
        tS = '';
    switch (C.type) {
        case er.fO.STREAM:
            (tg = (0, i.jsx)(et.Z, {
                participant: C,
                selected: ex,
                width: ev,
                fit: eT,
                onVideoResize: eI,
                paused: eb,
                inPopout: eS,
                focused: eZ
            })),
                (tv = (0, i.jsx)(et._, {
                    participant: C,
                    selected: ex,
                    width: ev,
                    focused: eZ,
                    idle: th,
                    premiumIndicator: e$ || e1.enabled
                })),
                (tS = ec.intl.formatToPlainString(ec.t.gHPz3d, { streamerName: C.user.username }));
            break;
        case er.fO.USER:
            (tg = (0, i.jsx)(en.Z, {
                channel: eg,
                inCall: e_,
                participant: C,
                fit: eT,
                onVideoResize: eI,
                paused: eb,
                selected: ex,
                width: ev,
                blocked: ey,
                noVideoRender: eC || eG,
                pulseSpeakingIndicator: eA
            })),
                (tv = (0, i.jsx)(en.T, {
                    userId: C.user.id,
                    channelId: eg.id
                })),
                (tS = ec.intl.formatToPlainString(ec.t['iC/x/f'], { username: C.user.username }));
            break;
        case er.fO.ACTIVITY:
            (tg = (0, i.jsx)($.ZP, {
                interactible: eZ,
                participant: C,
                selected: ex,
                channel: eg,
                width: ev
            })),
                (tS = ec.intl.formatToPlainString(ec.t.YCvOsL, { activityName: null == eF ? void 0 : eF.name }));
            break;
        case er.fO.HIDDEN_STREAM:
            tg = (0, i.jsx)(et.Z, {
                participant: C,
                selected: ex,
                width: ev,
                fit: eT,
                onVideoResize: eI,
                paused: eb,
                inPopout: eS,
                focused: eZ
            });
    }
    let tI = l.useRef(null),
        t_ = C.type === er.fO.STREAM ? u.ScreenIcon : u.VideoIcon;
    return (0, i.jsx)(m.Z, {
        section: ea.jXE.VOICE_CHANNEL_TILE,
        children: (0, i.jsxs)('div', {
            className: r()(eu.wrapper, { [eu.ringing]: ez }, em),
            style: eh,
            onMouseEnter: () => {
                eL(!0);
            },
            onMouseLeave: () => {
                eL(!1);
            },
            children: [
                tr && C.type === er.fO.STREAM && (0, i.jsx)(I.Z, { baseTileRef: tI.current }),
                (0, i.jsxs)(N.Z, {
                    shakeLocation: es.oZ.VOICE_USER,
                    isShaking: eH,
                    className: eu.tile,
                    children: [
                        (0, i.jsx)(ee.Z, {
                            ref: tI,
                            className: r()(eu.tile, {
                                [eu.noBorder]: eE,
                                [eu.noInteraction]: null == X,
                                [eu.idle]: ew
                            }),
                            noBorder: eE,
                            style: ep,
                            participantUserId: eU,
                            children: (0, i.jsxs)(u.ClickableContainer, {
                                'aria-label': tS,
                                className: eu.tileChild,
                                onDoubleClick: tf,
                                onContextMenu: tp,
                                onClick: tm,
                                onMouseDown: ei,
                                onKeyDown: ed,
                                focusProps: { offset: 1 },
                                children: [
                                    null != e2 && null != eU
                                        ? (0, i.jsx)(V.Z, {
                                              voiceChannelEffect: e2,
                                              onComplete: () => (0, F.H)(eU),
                                              userId: eU
                                          })
                                        : null,
                                    C.type === er.fO.USER
                                        ? (0, i.jsx)('div', {
                                              className: eu.voiceChannelEffectsContainer,
                                              children: (0, i.jsx)(v.Z, {
                                                  userId: eU,
                                                  channelId: eg.id,
                                                  guildId: eg.getGuildId(),
                                                  containerDimensions: {
                                                      width: null !== (c = null == tI ? void 0 : null === (n = tI.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== c ? c : 0,
                                                      height: null !== (_ = null == tI ? void 0 : null === (a = tI.current) || void 0 === a ? void 0 : a.clientHeight) && void 0 !== _ ? _ : 0
                                                  }
                                              })
                                          })
                                        : null,
                                    tg,
                                    e$
                                        ? (0, i.jsx)(L.W, {
                                              onPlayed: td,
                                              played: eK.hqStreamingFrameAnimationPlayed
                                          })
                                        : null,
                                    eE
                                        ? null
                                        : (0, i.jsx)('div', {
                                              className: eu.indicators,
                                              children: tv
                                          }),
                                    ex
                                        ? (0, i.jsx)('div', {
                                              className: eu.selectedScreen,
                                              children: (0, i.jsx)(t_, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: eu.selectedIcon
                                              })
                                          })
                                        : null,
                                    C.type !== er.fO.ACTIVITY
                                        ? (0, i.jsx)(ef, {
                                              focused: eZ,
                                              width: ev,
                                              inCall: e_,
                                              participantType: C.type,
                                              hasVideo: null != eY && eY,
                                              ...eJ,
                                              idle: ew,
                                              platform: e9,
                                              title: (0, K.Z)(eg, C),
                                              blocked: ey,
                                              localVideoDisabled: eB,
                                              videoToggleState: eW,
                                              hideAudioIcon: eq,
                                              onContextMenu: tp,
                                              onToggleMute: tu,
                                              participantUserId: eU,
                                              hangStatusActivity: e4,
                                              application: te,
                                              speaking: eH,
                                              secureFramesVerified: ti
                                          })
                                        : null,
                                    C.type === er.fO.USER && eV
                                        ? (0, i.jsx)(T.Z, {
                                              userId: C.id,
                                              channelId: eg.id
                                          })
                                        : null,
                                    e_ && !eE
                                        ? (0, i.jsx)('div', {
                                              className: r()(eu.border, {
                                                  [eu.voiceChannelEffect]: !eZ && null != e2,
                                                  [eu.speaking]: eH && !eZ
                                              })
                                          })
                                        : null
                                ]
                            })
                        }),
                        eR &&
                            eM &&
                            eO &&
                            (0, i.jsx)(Q.Z, {
                                currentUserId: ek,
                                participant: C
                            }),
                        (0, i.jsx)(A.Z, {
                            isFiring: eP,
                            callTileRef: tI.current
                        })
                    ]
                })
            ]
        })
    });
});
function em(e) {
    let { participantType: t, platform: n, className: l } = e;
    if (t === er.fO.STREAM)
        return n === er.wR.XBOX
            ? (0, i.jsx)(X.Z, { className: l })
            : (0, i.jsx)(u.ScreenIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: l
              });
    switch (n) {
        case er.wR.MOBILE:
            return (0, i.jsx)(u.MobilePhoneIcon, {
                size: 'xs',
                color: 'currentColor',
                className: l
            });
        case er.wR.XBOX:
            return (0, i.jsx)(X.Z, { className: l });
        case er.wR.PLAYSTATION:
            return (0, i.jsx)(q.Z, { className: l });
        default:
            return null;
    }
}
ed.displayName = 'CallTile';
let ef = l.memo((e) => {
    let { muted: t, deafened: n, localMuted: l, serverMuted: a, serverDeafened: s, idle: d, title: m, width: f, hasVideo: p, inCall: h, localVideoDisabled: v, videoToggleState: S, focused: I, blocked: x, hideAudioIcon: E, participantType: y, participantUserId: T, onContextMenu: b, onToggleMute: A, platform: N, hangStatusActivity: w, application: P, speaking: j, secureFramesVerified: R } = e,
        M = null,
        O = null,
        L = null,
        k = null,
        D = (0, ei.K)(f),
        U = (0, ei.N)(f),
        F = (0, o.e7)([H.Z], () => null != T && H.Z.isLocalVideoAutoDisabled(T, (0, g.Z)(y)), [T, y]),
        V = (0, u.useRedesignIconContext)().enabled;
    if (!E) {
        if (l && y === er.fO.STREAM && p && !I)
            M = (0, i.jsx)(u.Tooltip, {
                text: ec.intl.string(ec.t.YqAjX1),
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), A();
                        },
                        className: r()(eu.interactive, eu.toggleMute),
                        children: (0, i.jsx)(u.VoiceXIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
        else if (l || y !== er.fO.STREAM || !p || D || I) {
            if (V) {
                let e;
                s ? (e = u.HeadphonesDenyIcon) : a ? (e = u.MicrophoneDenyIcon) : n ? (e = u.HeadphonesSlashIcon) : l ? (e = u.MicrophoneDenyIcon) : t && (e = u.MicrophoneSlashIcon), (M = null != e ? (0, i.jsx)(e, { color: c.Z.colors.WHITE }) : null);
            } else if (n || t || l) {
                let e = n ? u.HeadphonesSlashIcon : u.MicrophoneSlashIcon;
                M = (0, i.jsx)(e, { color: 'currentColor' });
            }
        } else
            M = (0, i.jsx)(u.Tooltip, {
                text: ec.intl.string(ec.t['w4m94+']),
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), A();
                        },
                        className: r()(eu.interactive, eu.toggleMute),
                        children: (0, i.jsx)(u.VoiceNormalIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
    }
    return (
        (h && H.Z.supports(eo.AN.VIDEO)) || !p
            ? h &&
              p &&
              v &&
              !F &&
              (O = (0, i.jsx)(u.VideoSlashIcon, {
                  size: 'md',
                  color: 'currentColor',
                  colorClass: eu.localMuteStrikethrough
              }))
            : (O = (0, i.jsx)(u.VideoIcon, {
                  size: 'md',
                  color: 'currentColor'
              })),
        y === er.fO.STREAM &&
            !I &&
            p &&
            (L = (0, i.jsx)(u.Tooltip, {
                text: ec.intl.string(ec.t['+1H47u']),
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), b(e);
                        },
                        className: r()(eu.status, eu.interactive),
                        children: (0, i.jsx)(u.MoreHorizontalIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            })),
        y === er.fO.USER && null != w
            ? (k = (0, i.jsx)(u.Tooltip, {
                  text: (0, C.O8)(w),
                  children: (e) =>
                      (0, i.jsx)('div', {
                          ...e,
                          className: r()(eu.hangStatusContainer, { [eu.hangStatusSmall]: f < 500 }),
                          children: (0, i.jsx)(Z.Z, {
                              hangStatusActivity: w,
                              className: eu.hangStatusIcon,
                              animate: j
                          })
                      })
              }))
            : y === er.fO.USER &&
              null != P &&
              (k = (0, i.jsx)(u.Tooltip, {
                  text: ec.intl.formatToPlainString(ec.t.Sq9xJy, { game: P.name }),
                  children: (e) =>
                      (0, i.jsx)('div', {
                          ...e,
                          className: r()(eu.hangStatusContainer, { [eu.hangStatusSmall]: f < 500 }),
                          children: (0, i.jsx)(_.Z, {
                              className: eu.hangStatusIcon,
                              game: P,
                              size: _.Z.Sizes.SMALL
                          })
                      })
              })),
        (0, i.jsxs)('div', {
            className: eu.overlayContainer,
            children: [
                (0, i.jsx)('div', {
                    className: r()(eu.overlayTop, { [eu.small]: f < 195 }),
                    children:
                        F || S === ea.ZUi.AUTO_PROBING
                            ? d
                                ? (0, i.jsx)('div', {
                                      className: eu.status,
                                      children: (0, i.jsx)(u.VideoSlashIcon, {
                                          size: 'md',
                                          color: 'currentColor'
                                      })
                                  })
                                : (0, i.jsxs)('div', {
                                      className: r()(eu.overlayTitle, eu.videoDisabledTitle),
                                      children: [
                                          (0, i.jsx)('div', {
                                              className: eu.status,
                                              children: (0, i.jsx)(u.VideoSlashIcon, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          }),
                                          (0, i.jsx)(u.Text, {
                                              variant: 'text-sm/normal',
                                              className: eu.overlayTitleText,
                                              children: ec.intl.string(ec.t.m2Hyj4)
                                          })
                                      ]
                                  })
                            : null
                }),
                (0, i.jsxs)('div', {
                    className: r()(eu.overlayBottom, { [eu.small]: f < 195 }),
                    children: [
                        U
                            ? (0, i.jsx)('div', {})
                            : (0, i.jsxs)(u.Text, {
                                  className: r()(eu.overlayTitle, { [eu.idle]: d }),
                                  color: 'none',
                                  variant: 'text-md/normal',
                                  children: [
                                      x
                                          ? (0, i.jsx)('div', {
                                                className: eu.blocked,
                                                children: (0, i.jsx)(u.DenyIcon, {
                                                    size: 'lg',
                                                    className: eu.blockedIcon,
                                                    color: c.Z.unsafe_rawColors.RED_400.css
                                                })
                                            })
                                          : null,
                                      (0, i.jsx)(em, {
                                          participantType: y,
                                          platform: N,
                                          className: eu.titleIcon
                                      }),
                                      null != m && '' !== m
                                          ? (0, i.jsx)('span', {
                                                className: eu.overlayTitleText,
                                                children: m
                                            })
                                          : null,
                                      R &&
                                          (0, i.jsx)(u.Tooltip, {
                                              text: ec.intl.string(ec.t.ZEem6O),
                                              children: (e) =>
                                                  (0, i.jsx)(u.ShieldLockIcon, {
                                                      ...e,
                                                      className: eu.secureFramesIcon,
                                                      size: 'xs',
                                                      color: c.Z.colors.HEADER_PRIMARY,
                                                      'aria-label': ec.intl.string(ec.t.mR9cf3)
                                                  })
                                          })
                                  ]
                              }),
                        (0, i.jsxs)('div', {
                            className: eu.statusContainer,
                            children: [
                                null != O &&
                                    (0, i.jsx)('div', {
                                        className: eu.status,
                                        children: O
                                    }),
                                null != M &&
                                    (0, i.jsx)('div', {
                                        className: eu.status,
                                        children: M
                                    }),
                                L,
                                k
                            ]
                        })
                    ]
                })
            ]
        })
    );
});
ef.displayName = 'CallTileOverlay';
let ep = b.L;
t.ZP = ed;
