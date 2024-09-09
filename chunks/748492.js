n.d(t, {
    Ds: function () {
        return U;
    },
    YB: function () {
        return M;
    },
    of: function () {
        return w;
    },
    q5: function () {
        return P;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    l = n(846027),
    u = n(40851),
    c = n(835473),
    d = n(221888),
    _ = n(600164),
    E = n(788983),
    f = n(189771),
    h = n(560688),
    p = n(618158),
    m = n(922745),
    I = n(871499),
    T = n(402113),
    g = n(800965),
    S = n(157813),
    A = n(25827),
    N = n(131951),
    v = n(884338),
    O = n(349619),
    R = n(981631),
    C = n(231338),
    y = n(689938),
    D = n(783540),
    L = n(582920);
function b(e) {
    let { onClick: t, isExpanded: n } = e;
    return (0, r.jsx)(I.Z, {
        iconClassName: a()(D.arrowIcon, { [D.arrowIconExpanded]: n }),
        onClick: t,
        iconComponent: o.ChevronSmallDownIcon,
        label: n ? y.Z.Messages.PICTURE_IN_PICTURE_COLLAPSE : y.Z.Messages.PICTURE_IN_PICTURE_EXPAND
    });
}
function M(e) {
    var t, n;
    let { channel: i, applicationId: a, onMouseDown: o, onMouseMove: I, onMouseLeave: S, onJumpToChannel: v, idle: y, selectedParticipant: b } = e,
        M = (0, u.bp)() === R.IlC.POPOUT,
        P = (0, s.e7)([N.Z], () => N.Z.isVideoEnabled()),
        U = (0, s.e7)([N.Z], () => Object.values(N.Z.getVideoDevices())[0]),
        w = !1 === (null === (t = null == U ? void 0 : U.disabled) || void 0 === t || t),
        x = (0, c.Z)([a])[0],
        G = (0, f.Z)(i),
        k = (e) => {
            l.Z.setVideoEnabled(e);
        };
    return (0, r.jsxs)('div', {
        className: L.videoControls,
        onMouseMove: I,
        onMouseDown: o,
        onMouseLeave: S,
        children: [
            (0, r.jsx)('div', {
                className: L.topControls,
                children: (0, r.jsx)(m.r, {
                    idle: y,
                    title: null !== (n = null == x ? void 0 : x.name) && void 0 !== n ? n : i.name,
                    onJumpToChannel: v,
                    preventIdleComponent: p.Z
                })
            }),
            (0, r.jsxs)('div', {
                className: L.bottomControls,
                children: [
                    (0, r.jsxs)(_.Z, {
                        grow: 0,
                        shrink: 1,
                        basis: '50%',
                        align: _.Z.Align.CENTER,
                        children: [
                            (0, r.jsx)(A.C, {
                                className: D.leftPipIcon,
                                enabled: P,
                                cameraUnavailable: !w,
                                hasPermission: G,
                                onChange: k,
                                onCameraUnavailable: () => {
                                    w ? k(!0) : (0, h.Z)();
                                }
                            }),
                            (0, r.jsx)(p.Z, {
                                children: (0, r.jsx)(d.Z, {
                                    channelId: i.id,
                                    guildId: i.getGuildId(),
                                    className: L.__invalid_leftTrayIcon,
                                    participant: b,
                                    compact: !0
                                })
                            })
                        ]
                    }),
                    (0, r.jsxs)(_.Z, {
                        grow: 0,
                        shrink: 1,
                        justify: _.Z.Justify.END,
                        basis: '50%',
                        align: _.Z.Align.CENTER,
                        children: [
                            M
                                ? null
                                : (0, r.jsx)(g.Z, {
                                      className: D.rightPipIcon,
                                      popoutOpen: !1,
                                      onOpenPopout: () => {
                                          (0, O.Z)(() => E.hP(i));
                                      },
                                      onClosePopout: C.Vq
                                  }),
                            (0, r.jsx)(T.Z, {
                                applicationId: a,
                                channelId: i.id,
                                className: D.rightPipIcon
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function P(e) {
    var t;
    let { channel: n, applicationId: i, onMouseDown: s, onMouseMove: l, onMouseLeave: u, onJumpToChannel: d, idle: _, users: E } = e,
        f = (0, c.Z)([i])[0];
    return (0, r.jsxs)(o.Clickable, {
        className: a()(L.videoControls, L.videoControlsTextActivity),
        onMouseMove: l,
        onMouseDown: s,
        onMouseLeave: u,
        onDoubleClick: d,
        children: [
            (0, r.jsx)('div', {
                className: a()(L.topControls),
                children: (0, r.jsx)(m.r, {
                    idle: _,
                    title: null !== (t = null == f ? void 0 : f.name) && void 0 !== t ? t : n.name,
                    onJumpToChannel: d,
                    preventIdleComponent: p.Z
                })
            }),
            (0, r.jsxs)('div', {
                className: L.bottomControls,
                children: [
                    (0, r.jsx)(v.Z, {
                        renderIcon: !1,
                        users: E,
                        size: 24,
                        max: 3,
                        className: D.__invalid_userSummaryContainer
                    }),
                    (0, r.jsx)(T.Z, {
                        applicationId: i,
                        channelId: n.id,
                        iconClassName: D.leaveActivityIcon,
                        isActive: !0
                    })
                ]
            })
        ]
    });
}
function U(e) {
    let { channelId: t, participantsOpen: n, showToggleParticipants: i } = e;
    return i
        ? (0, r.jsx)(S.Z, {
              channelId: t,
              isParticipantsOpen: n,
              className: D.participantsButton
          })
        : null;
}
function w(e) {
    var t;
    let { onMouseDown: n, onMouseMove: i, onMouseLeave: s, showControls: l, applicationId: u, channel: d, onJumpToChannel: _, onToggleHeight: E, isExpanded: f, hideExpandedButton: h } = e,
        I = (0, c.Z)([u])[0];
    return (0, r.jsx)('div', {
        className: D.pipHeader,
        onMouseMove: i,
        onMouseDown: n,
        onMouseLeave: s,
        children: (0, r.jsxs)('div', {
            className: a()(L.topControls, D.pipHeaderContent, { [D.pipHeaderContentOpen]: l }),
            children: [
                !l &&
                    (0, r.jsx)(o.MoreHorizontalIcon, {
                        size: 'xxs',
                        color: 'currentColor',
                        className: D.menuIcon
                    }),
                l &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(m.r, {
                                idle: !l,
                                title: null !== (t = null == I ? void 0 : I.name) && void 0 !== t ? t : d.name,
                                onJumpToChannel: _,
                                preventIdleComponent: p.Z
                            }),
                            (0, r.jsxs)('div', {
                                className: D.pipHeaderButtonsRight,
                                children: [
                                    h
                                        ? null
                                        : (0, r.jsx)(b, {
                                              isExpanded: f,
                                              onClick: E
                                          }),
                                    (0, r.jsx)(T.Z, {
                                        applicationId: u,
                                        channelId: d.id,
                                        iconClassName: D.leaveActivityIcon
                                    })
                                ]
                            })
                        ]
                    })
            ]
        })
    });
}
