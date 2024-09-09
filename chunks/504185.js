n.d(t, {
    Z: function () {
        return el;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(392711),
    o = n(442837),
    c = n(433517),
    u = n(481060),
    d = n(570140),
    h = n(393238),
    m = n(40851),
    p = n(100527),
    _ = n(906732),
    f = n(358221),
    E = n(414910),
    g = n(909820),
    C = n(493010),
    I = n(788983),
    x = n(928518),
    T = n(703656),
    v = n(493754),
    S = n(880831),
    N = n(73563),
    A = n(800965),
    Z = n(107169),
    M = n(891551),
    b = n(314897),
    R = n(979696),
    L = n(430824),
    j = n(496675),
    P = n(944486),
    O = n(358085),
    y = n(998502),
    D = n(922482),
    k = n(431328),
    U = n(501655),
    w = n(427679),
    B = n(513449),
    H = n(153349),
    G = n(901434),
    V = n(302270),
    F = n(308177),
    W = n(700483),
    z = n(686468),
    Y = n(801405),
    K = n(903108),
    q = n(981631),
    X = n(354459),
    Q = n(689938),
    J = n(394738);
let $ = 'HasBeenInStageChannel',
    ee = (e, t) => () => {
        let n = e.getGuildId();
        null != n && null != t && (0, T.XU)(n, t), I.hP(e);
    },
    et = () => {
        d.Z.wait(() => I.xv(q.KJ3.CHANNEL_CALL_POPOUT));
    },
    en = (e) => {
        I.hY(q.KJ3.CHANNEL_CALL_POPOUT, e);
    };
function ei(e) {
    let { channel: t, appContext: n, popoutOpen: a, popoutWindow: l, popoutWindowAlwaysOnTop: r, selectedParticipant: c } = e,
        u = t.getGuildId(),
        d = (0, o.e7)([P.Z], () => P.Z.getMostRecentSelectedTextChannelId(u), [u]),
        h = b.default.getId(),
        m = !(0, o.e7)([f.Z], () => f.Z.isFullscreenInContext(n)) && (!O.isPlatformEmbedded || (O.isPlatformEmbedded && y.ZP.supportsFeature(q.eRX.POPOUT_WINDOWS))),
        p = null != c && c.type !== X.fO.ACTIVITY && c.user.id !== h,
        _ = s.useMemo(() => {
            var e;
            return null !== (e = null == l ? void 0 : l.window) && void 0 !== e ? e : window;
        }, [l]),
        g = (0, Y.Z)({
            channel: t,
            appContext: n,
            popoutOpen: a,
            popoutWindow: l,
            currentWindow: _
        }),
        C = n === q.IlC.POPOUT && O.isPlatformEmbedded && y.ZP.supportsFeature(q.eRX.POPOUT_WINDOWS);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            p
                ? (0, i.jsx)(M.Z, {
                      context: (0, E.Z)(c.type),
                      userId: c.user.id,
                      currentWindow: _,
                      sliderClassName: J.volumeSlider
                  })
                : null,
            C
                ? (0, i.jsx)(Z.Z, {
                      className: J.rightTrayIcon,
                      popoutWindowAlwaysOnTop: r,
                      onToggleStayOnTop: en
                  })
                : null,
            m
                ? (0, i.jsx)(A.Z, {
                      className: J.rightTrayIcon,
                      popoutOpen: a,
                      onOpenPopout: ee(t, d),
                      onClosePopout: et
                  })
                : null,
            g
        ]
    });
}
function es(e) {
    let { channel: t } = e,
        n = (0, m.bp)(),
        s = (0, o.e7)([j.Z], () => j.Z.can(q.Plq.CREATE_INSTANT_INVITE, t)),
        a = (0, o.e7)([L.Z], () => L.Z.getGuild(t.guild_id)),
        l = (0, o.e7)([w.Z], () => w.Z.getStageInstanceByChannel(t.id)),
        r = s || (null == l ? void 0 : l.invite_code) != null;
    return null != a && r
        ? (0, i.jsx)(v.Z, {
              channel: t,
              appContext: n,
              className: J.__invalid_leftTrayIcon,
              analyticsLocation: q.ZY5.GUILD_CHANNEL
          })
        : null;
}
function ea(e) {
    let t,
        { channel: n, toggleRequestToSpeakSidebar: a, showRequestToSpeakSidebar: c, popoutWindow: u, popoutWindowAlwaysOnTop: d, popoutOpen: h, chatOpen: p } = e,
        _ = (0, m.bp)(),
        E = (0, o.e7)([P.Z], () => P.Z.getVoiceChannelId() === n.id, [n.id]),
        C = (0, o.e7)([j.Z], () => j.Z.can(q.Plq.CONNECT, n)),
        I = (0, k.w8)(n.id, U.pV.SPEAKER),
        x = (0, o.e7)([f.Z], () => f.Z.getSelectedParticipant(n.id)),
        T = h && _ !== q.IlC.POPOUT,
        [v, A] = s.useState(0),
        { isOnStartStageScreen: Z } = (0, B.ZP)();
    (0, B.MV)(n);
    let M = (0, o.e7)([R.Z], () => R.Z.getToastsEnabled(n.id)),
        b = (0, K.Z)(n) ? (null != x ? '84px' : '124px') : null != x ? '0px' : '48px';
    return (
        (t = Z
            ? (0, i.jsx)(z.Z, {
                  channel: n,
                  onContinueClick: () => {
                      (0, B.Ku)(!1), !E && (0, D.TM)(n);
                  }
              })
            : E
              ? (0, i.jsx)(F.Z, {
                    channel: n,
                    onScroll: (e) => {
                        let { scrollTop: t } = e.target;
                        (0, r.debounce)(() => A(t), 1000, { leading: !0 })();
                    }
                })
              : (0, i.jsx)(G.Z, {
                    participants: I,
                    channel: n,
                    hasConnectPermission: C
                })),
        (0, i.jsx)(N.Z, {
            style: {
                height: 'calc(100% - '.concat(b, ')'),
                paddingTop: b
            },
            disableGradients: 0 === v && N.e.TOP,
            renderBottomLeft: () => (0, i.jsx)(es, { channel: n }),
            renderBottomCenter: () =>
                E
                    ? (0, i.jsx)(W.Z, {
                          channel: n,
                          isOnStartStageScreen: Z
                      })
                    : null,
            renderBottomRight: () =>
                E
                    ? (0, i.jsx)(ei, {
                          channel: n,
                          appContext: _,
                          popoutOpen: h,
                          popoutWindow: u,
                          popoutWindowAlwaysOnTop: d,
                          selectedParticipant: x
                      })
                    : null,
            renderHeader: () =>
                (0, i.jsx)(V.Z, {
                    inPopout: _ === q.IlC.POPOUT,
                    toggleRequestToSpeakSidebar: a,
                    showRequestToSpeakSidebar: c,
                    channel: n
                }),
            renderChatToasts: () =>
                !M || p || T
                    ? null
                    : (0, i.jsx)(g.ZP, {
                          children: (0, i.jsx)(S.Z, {
                              className: l()(J.chatToasts, { [J.rtsSidebarOpen]: c }),
                              channelId: n.id
                          })
                      }),
            onActive: () => {},
            onPreventIdle: () => {},
            onAllowIdle: () => {},
            onForceIdle: () => {},
            screenMessage: T ? { mainText: Q.Z.Messages.POPOUT_PLAYER_OPENED } : null,
            idle: !1,
            children: !T && t
        })
    );
}
function el(e) {
    let { channel: t } = e,
        [a, r] = s.useState(!1),
        d = s.useCallback(() => {
            r(!a);
        }, [a, r]),
        { popoutWindow: E, popoutWindowAlwaysOnTop: I } = (0, o.cj)([x.Z], () => ({
            popoutWindow: x.Z.getWindow(q.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: x.Z.getIsAlwaysOnTop(q.KJ3.CHANNEL_CALL_POPOUT)
        })),
        T = null != E && !E.closed,
        { analyticsLocations: v } = (0, _.ZP)(p.Z.STAGE_CHANNEL_CALL),
        S = (0, m.bp)(),
        N = (0, o.e7)([f.Z], () => f.Z.getChatOpen(t.id), [t.id]),
        A = (0, o.e7)([L.Z], () => L.Z.getGuild(t.guild_id), [t.guild_id]);
    s.useEffect(() => {
        null == c.K.get($) &&
            ((0, u.openModalLazy)(async () => {
                let { default: e } = await n.e('37194').then(n.bind(n, 947422));
                return (t) => (0, i.jsx)(e, { ...t });
            }),
            c.K.set($, Date.now()));
    }, []);
    let { width: Z = 0, ref: M } = (0, h.Z)();
    return (0, i.jsx)(_.Gt, {
        value: v,
        children: (0, i.jsxs)(g.B2, {
            children: [
                (0, i.jsxs)('div', {
                    className: J.container,
                    ref: M,
                    children: [
                        (0, i.jsx)(u.ThemeProvider, {
                            theme: q.BRd.DARK,
                            children: (e) =>
                                (0, i.jsx)('div', {
                                    className: l()(J.callContainer, e, {
                                        [J.sidebarVisible]: a,
                                        [J.sidebarOrChatVisible]: a || N
                                    }),
                                    children: (0, i.jsx)(ea, {
                                        channel: t,
                                        toggleRequestToSpeakSidebar: d,
                                        showRequestToSpeakSidebar: a,
                                        popoutWindow: E,
                                        popoutWindowAlwaysOnTop: I,
                                        popoutOpen: T,
                                        chatOpen: N
                                    })
                                })
                        }),
                        a
                            ? (0, i.jsx)(H.Z, {
                                  channel: t,
                                  toggleRequestToSpeakSidebar: d,
                                  chatOpen: N
                              })
                            : null,
                        (0, i.jsx)('div', {
                            className: J.channelChatWrapper,
                            children:
                                N &&
                                (!T || (T && S === q.IlC.POPOUT)) &&
                                (0, i.jsx)(C.Z, {
                                    channel: t,
                                    guild: A,
                                    maxWidth: Z - 550
                                })
                        })
                    ]
                }),
                (0, i.jsx)(g.H_, {})
            ]
        })
    });
}
