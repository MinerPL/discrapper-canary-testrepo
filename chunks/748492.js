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
var i = n(120356), a = n.n(i), o = n(442837), s = n(481060), l = n(846027), u = n(40851), c = n(835473), d = n(221888), _ = n(788983), E = n(189771), f = n(560688), h = n(618158), p = n(922745), m = n(871499), I = n(402113), T = n(800965), g = n(157813), S = n(25827), A = n(131951), N = n(285952), v = n(602623), O = n(349619), R = n(981631), C = n(231338), y = n(689938), D = n(483889), L = n(910310);
function b(e) {
    let {
        onClick: t,
        isExpanded: n
    } = e;
    return (0, r.jsx)(m.Z, {
        iconClassName: a()(D.arrowIcon, { [D.arrowIconExpanded]: n }),
        onClick: t,
        iconComponent: s.ChevronSmallDownIcon,
        label: n ? y.Z.Messages.PICTURE_IN_PICTURE_COLLAPSE : y.Z.Messages.PICTURE_IN_PICTURE_EXPAND
    });
}
function M(e) {
    var t, n;
    let {
            channel: i,
            applicationId: a,
            onMouseDown: s,
            onMouseMove: m,
            onMouseLeave: g,
            onJumpToChannel: v,
            idle: y,
            selectedParticipant: b
        } = e, M = (0, u.bp)() === R.IlC.POPOUT, P = (0, o.e7)([A.Z], () => A.Z.isVideoEnabled()), U = (0, o.e7)([A.Z], () => Object.values(A.Z.getVideoDevices())[0]), w = !1 === (null === (t = null == U ? void 0 : U.disabled) || void 0 === t || t), x = (0, c.Z)([a])[0], G = (0, E.Z)(i), k = e => {
            l.Z.setVideoEnabled(e);
        };
    return (0, r.jsxs)('div', {
        className: L.videoControls,
        onMouseMove: m,
        onMouseDown: s,
        onMouseLeave: g,
        children: [
            (0, r.jsx)('div', {
                className: L.topControls,
                children: (0, r.jsx)(p.r, {
                    idle: y,
                    title: null !== (n = null == x ? void 0 : x.name) && void 0 !== n ? n : i.name,
                    onJumpToChannel: v,
                    preventIdleComponent: h.Z
                })
            }),
            (0, r.jsxs)('div', {
                className: L.bottomControls,
                children: [
                    (0, r.jsxs)(N.Z, {
                        grow: 0,
                        shrink: 1,
                        basis: '50%',
                        align: N.Z.Align.CENTER,
                        children: [
                            (0, r.jsx)(S.C, {
                                className: D.leftPipIcon,
                                enabled: P,
                                cameraUnavailable: !w,
                                hasPermission: G,
                                onChange: k,
                                onCameraUnavailable: () => {
                                    w ? k(!0) : (0, f.Z)();
                                }
                            }),
                            (0, r.jsx)(h.Z, {
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
                    (0, r.jsxs)(N.Z, {
                        grow: 0,
                        shrink: 1,
                        justify: N.Z.Justify.END,
                        basis: '50%',
                        align: N.Z.Align.CENTER,
                        children: [
                            M ? null : (0, r.jsx)(T.Z, {
                                className: D.rightPipIcon,
                                popoutOpen: !1,
                                onOpenPopout: () => {
                                    (0, O.Z)(() => _.hP(i));
                                },
                                onClosePopout: C.Vq
                            }),
                            (0, r.jsx)(I.Z, {
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
    let {
            channel: n,
            applicationId: i,
            onMouseDown: o,
            onMouseMove: l,
            onMouseLeave: u,
            onJumpToChannel: d,
            idle: _,
            users: E
        } = e, f = (0, c.Z)([i])[0];
    return (0, r.jsxs)(s.Clickable, {
        className: a()(L.videoControls, L.videoControlsTextActivity),
        onMouseMove: l,
        onMouseDown: o,
        onMouseLeave: u,
        onDoubleClick: d,
        children: [
            (0, r.jsx)('div', {
                className: a()(L.topControls),
                children: (0, r.jsx)(p.r, {
                    idle: _,
                    title: null !== (t = null == f ? void 0 : f.name) && void 0 !== t ? t : n.name,
                    onJumpToChannel: d,
                    preventIdleComponent: h.Z
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
                    (0, r.jsx)(I.Z, {
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
    let {
        channelId: t,
        participantsOpen: n,
        showToggleParticipants: i
    } = e;
    return i ? (0, r.jsx)(g.Z, {
        channelId: t,
        isParticipantsOpen: n,
        className: D.participantsButton
    }) : null;
}
function w(e) {
    var t;
    let {
            onMouseDown: n,
            onMouseMove: i,
            onMouseLeave: o,
            showControls: l,
            applicationId: u,
            channel: d,
            onJumpToChannel: _,
            onToggleHeight: E,
            isExpanded: f,
            hideExpandedButton: m
        } = e, T = (0, c.Z)([u])[0];
    return (0, r.jsx)('div', {
        className: D.pipHeader,
        onMouseMove: i,
        onMouseDown: n,
        onMouseLeave: o,
        children: (0, r.jsxs)('div', {
            className: a()(L.topControls, D.pipHeaderContent, { [D.pipHeaderContentOpen]: l }),
            children: [
                !l && (0, r.jsx)(s.MoreHorizontalIcon, {
                    size: 'xxs',
                    color: 'currentColor',
                    className: D.menuIcon
                }),
                l && (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(p.r, {
                            idle: !l,
                            title: null !== (t = null == T ? void 0 : T.name) && void 0 !== t ? t : d.name,
                            onJumpToChannel: _,
                            preventIdleComponent: h.Z
                        }),
                        (0, r.jsxs)('div', {
                            className: D.pipHeaderButtonsRight,
                            children: [
                                m ? null : (0, r.jsx)(b, {
                                    isExpanded: f,
                                    onClick: E
                                }),
                                (0, r.jsx)(I.Z, {
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
