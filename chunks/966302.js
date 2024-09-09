n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(180081),
    l = n(442837),
    u = n(481060),
    c = n(26151),
    d = n(922555),
    _ = n(287734),
    E = n(249000),
    f = n(43267),
    h = n(933557),
    p = n(703656),
    I = n(932724),
    m = n(672339),
    T = n(898531),
    S = n(923973),
    g = n(189771),
    A = n(560688),
    N = n(871499),
    O = n(136995),
    R = n(25827),
    v = n(131951),
    C = n(594174),
    y = n(451478),
    L = n(358221),
    D = n(584511),
    b = n(793865),
    M = n(981631),
    P = n(65154),
    U = n(689938),
    w = n(318618),
    x = n(256507);
let G = {
        width: 232,
        height: 315
    },
    k = {
        width: 232,
        height: 267
    },
    B = 475,
    F = 267;
function V(e) {
    let { header: t } = e,
        n = v.Z.getCameraComponent(),
        a = (0, l.e7)([v.Z], () => v.Z.getVideoDeviceId()),
        s = (0, T.Z)();
    return (
        i.useEffect(() => {
            let e = C.default.getCurrentUser();
            if (s && null != e) {
                let t = (0, I.P)(e);
                (0, m.FU)(t, a, { track: !1 }).catch(M.dG4);
            }
        }, [s, a]),
        (0, r.jsxs)('div', {
            className: w.previewRoot,
            children: [
                (0, r.jsx)(u.Spinner, {}),
                (0, r.jsx)('div', {
                    className: w.preview,
                    children: (0, r.jsx)(n, {
                        disabled: !1,
                        deviceId: a,
                        width: B,
                        height: F
                    })
                }),
                (0, r.jsx)('div', {
                    className: w.previewChannelHeader,
                    children: t
                })
            ]
        })
    );
}
function H(e) {
    let { canVideo: t, channel: n, numVideoDevices: i } = e,
        { cameraUnavailable: a, enabled: o } = (0, S.Z)(),
        l = (0, g.Z)(n);
    return (0, r.jsxs)('div', {
        className: w.actions,
        children: [
            (0, r.jsx)(N.d, {
                iconComponent: u.XSmallIcon,
                color: 'red',
                className: w.actionButton,
                label: U.Z.Messages.DISMISS,
                onClick: () => c.Z.stopRinging(n.id)
            }),
            t &&
                (0, r.jsx)(u.Popout, {
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(b.Z, { onClose: t });
                    },
                    position: 'top',
                    align: 'center',
                    animation: u.Popout.Animation.FADE,
                    children: (e, t) => {
                        let { onClick: s } = e,
                            { isShown: u } = t;
                        return (0, r.jsx)(R.C, {
                            join: !0,
                            enabled: o,
                            color: 'green',
                            centerButton: !0,
                            hasPermission: l,
                            cameraUnavailable: a,
                            channel: n,
                            onPopoutClick: i > 1 ? s : null,
                            className: w.actionButton,
                            popoutOpen: u,
                            onCameraUnavailable: A.Z,
                            onChange: () => {
                                _.default.selectVoiceChannel(n.id, !0), (0, p.XU)(M.ME, n.id);
                            }
                        });
                    }
                }),
            (0, r.jsx)(O.Z, {
                channel: n,
                color: 'green',
                centerButton: !0,
                className: s()(w.actionButton, w.last)
            })
        ]
    });
}
function Z(e) {
    let { animatedStyle: t, y: n, x: a, channel: _ } = e,
        [p, I] = i.useState(!1),
        m = (0, f.x)(_),
        T = (0, h.ZP)(_),
        [S, g] = (0, l.Wu)([v.Z], () => [v.Z.supports(P.AN.VIDEO), Object.keys(v.Z.getVideoDevices()).length]),
        A = (0, l.e7)([y.Z], () => y.Z.isFocused()),
        N = (0, l.e7)([L.Z], () => L.Z.getMode(_.id)),
        O = i.useCallback((e) => {
            null != e.top && null != e.left && d.Z.move(e.left, e.top);
        }, []),
        R = (0, u.useSpring)(
            {
                value: p ? 1 : 0,
                config: {
                    ...o.config.stiff,
                    clamp: !0
                }
            },
            'animate-always'
        );
    i.useEffect(() => {
        let e = (e) => {
            e.keyCode === M.yXg.ESCAPE && c.Z.stopRinging(_.id);
        };
        return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
    }, [_]);
    let C = N === M.WtW.VIDEO && S && g > 0,
        b = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(D.Z, {
                    className: w.icon,
                    ringing: A,
                    src: null != m ? m : '',
                    ringingType: D.Z.RingingType.INCOMING,
                    size: p ? u.AvatarSizes.SIZE_40 : u.AvatarSizes.SIZE_80
                }),
                (0, r.jsxs)('div', {
                    className: w.titleGroup,
                    children: [
                        (0, r.jsx)(u.Text, {
                            className: w.title,
                            color: 'header-primary',
                            variant: p ? 'text-md/semibold' : 'text-lg/semibold',
                            children: T
                        }),
                        (0, r.jsx)(u.Text, {
                            color: 'header-secondary',
                            className: w.subtitle,
                            variant: p ? 'text-sm/normal' : 'text-md/normal',
                            children: N === M.WtW.VOICE ? U.Z.Messages.INCOMING_CALL_ELLIPSIS : U.Z.Messages.INCOMING_VIDEO_CALL_ELLIPSIS
                        })
                    ]
                })
            ]
        }),
        Z = C ? G : k,
        Y = (0, l.e7)([y.Z], () => y.Z.windowSize());
    return (0, r.jsx)(E.Z, {
        className: w.wrapper,
        selector: '.'.concat(w.root),
        initialPosition: {
            left: a,
            top: n
        },
        maxX: Y.width,
        maxY: Y.height,
        onDragEnd: O,
        dragAnywhere: !0,
        children: (0, r.jsx)(u.ThemeProvider, {
            theme: p ? M.BRd.DARK : void 0,
            children: (e) =>
                (0, r.jsxs)(o.animated.div, {
                    className: s()(w.root, x.elevationHigh, { [w.previewCamera]: p }, e),
                    style: {
                        ...t,
                        width: R.value.interpolate([0, 1], [Z.width, B]),
                        minHeight: R.value.interpolate([0, 1], [Z.height, F]),
                        translateX: R.value.interpolate([0, 1], [0, (-1 * Math.abs(B - Z.width)) / 2])
                    },
                    children: [
                        p
                            ? (0, r.jsx)(V, { header: b })
                            : (0, r.jsx)('div', {
                                  className: w.mainChannelInfo,
                                  children: b
                              }),
                        (0, r.jsx)(H, {
                            canVideo: C,
                            channel: _,
                            numVideoDevices: g
                        }),
                        C && !p
                            ? (0, r.jsx)(u.Button, {
                                  size: u.Button.Sizes.SMALL,
                                  fullWidth: !0,
                                  look: u.Button.Looks.LINK,
                                  color: u.Button.Colors.PRIMARY,
                                  className: w.previewButton,
                                  onClick: () => I(!0),
                                  children: U.Z.Messages.INCOMING_CALL_PREVIEW_CAMERA
                              })
                            : null
                    ]
                })
        })
    });
}
