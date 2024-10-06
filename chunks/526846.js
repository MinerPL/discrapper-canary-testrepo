n.d(t, {
    m: function () {
        return Z;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(772848),
    o = n(442837),
    c = n(481060),
    u = n(2052),
    d = n(40851),
    h = n(607070),
    p = n(100527),
    m = n(906732),
    _ = n(895924),
    f = n(390322),
    E = n(626135),
    g = n(566620),
    C = n(127255),
    I = n(5200),
    T = n(558317),
    x = n(403404),
    S = n(981631),
    v = n(689938),
    N = n(735338);
let A = 'vc-activities-'.concat((0, r.Z)()),
    Z = s.forwardRef(function (e, t) {
        let { channel: n, isHovered: a, closePopout: r, onMouseEnter: Z, onMouseLeave: M, onClick: b, className: R } = e,
            L = (0, o.e7)([h.Z], () => h.Z.useReducedMotion),
            { id: j, guild_id: P } = n;
        s.useEffect(() => {
            E.default.track(S.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
                channel_id: j,
                guild_id: P
            });
        }, [j, P]),
            s.useEffect(() => {
                !a && r();
            }, [r, a]);
        let O = (0, d.bp)(),
            { analyticsLocations: y } = (0, m.ZP)(p.Z.ACTIVITIES_MINI_SHELF),
            { analyticsLocations: D } = (0, m.ZP)([...y, p.Z.ACTIVITIES_MINI_SHELF_BANNER]),
            U = O === S.IlC.POPOUT,
            k = (0, u.O)(),
            w = (function (e) {
                return (0, C.Z)({ guildId: e }).slice(0, 5);
            })(n.getGuildId());
        s.useEffect(() => {
            let e = setTimeout(() => g.ux(), 1000);
            return () => clearTimeout(e);
        }, []);
        let B = s.useCallback(() => {
                var e;
                (0, x.Z)({
                    channel: n,
                    guildId: null !== (e = n.getGuildId()) && void 0 !== e ? e : void 0,
                    locationObject: k.location,
                    openInPopout: U,
                    analyticsLocations: y,
                    opensAppLauncherModal: !0
                }),
                    M(),
                    b();
            }, [k, y, n, b, M, U]),
            H = s.useCallback(
                (e) => {
                    Z(),
                        E.default.track(S.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
                            channel_id: n.id,
                            guild_id: n.getGuildId()
                        });
                },
                [Z, n]
            );
        return (0, i.jsx)(m.Gt, {
            value: y,
            children: (0, i.jsx)(f.Z, {
                children: (0, i.jsxs)(c.Dialog, {
                    ref: t,
                    'aria-labelledby': A,
                    className: R,
                    children: [
                        (0, i.jsx)(c.HeadingLevel, {
                            forceLevel: 2,
                            children: (0, i.jsx)(c.HiddenVisually, {
                                children: (0, i.jsx)(c.H, {
                                    id: A,
                                    children: v.Z.Messages.EMBEDDED_ACTIVITIES_MINI_SHELF_TITLE
                                })
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: N.container,
                            onMouseEnter: H,
                            onMouseLeave: M,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: N.titleContainer,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: N.titleLeft,
                                            children: [
                                                (0, i.jsx)(c.ActivitiesIcon, {
                                                    size: 'md',
                                                    className: N.titleLeftIcon,
                                                    color: 'var(--interactive-active)'
                                                }),
                                                (0, i.jsx)(c.Text, {
                                                    variant: 'eyebrow',
                                                    children: v.Z.Messages.EMBEDDED_ACTIVITIES_AUTO_SUGGEST_ACTIVITIES_TITLE
                                                })
                                            ]
                                        }),
                                        (0, i.jsxs)(c.Clickable, {
                                            className: N.titleRight,
                                            onClick: B,
                                            children: [
                                                (0, i.jsx)(c.Text, {
                                                    variant: 'eyebrow',
                                                    children: v.Z.Messages.EMBEDDED_ACTIVITIES_AUTO_SUGGEST_SEE_ALL
                                                }),
                                                (0, i.jsx)(c.ChevronSmallRightIcon, {
                                                    size: 'custom',
                                                    width: 12,
                                                    height: 12,
                                                    color: 'var(--interactive-active)',
                                                    className: N.titleRightIcon
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsx)(m.Gt, {
                                    value: D,
                                    children: null
                                }),
                                (0, i.jsxs)('div', {
                                    className: N.activityContainer,
                                    children: [
                                        w.map((e) =>
                                            (0, i.jsx)(
                                                I.Y,
                                                {
                                                    channel: n,
                                                    activityItem: e,
                                                    onClick: () => {
                                                        r(), b();
                                                    },
                                                    aspectRatio: I.Y.AspectRatio.THIRTEEN_BY_ELEVEN,
                                                    animatedDivClass: N.activitySuggestion,
                                                    commandOrigin: _.bB.MINI_SHELF
                                                },
                                                e.application.id
                                            )
                                        ),
                                        (0, i.jsx)('div', {
                                            className: l()(N.wumpusRocketOuterContainer, { [N.wumpusReducedMotion]: L }),
                                            children: (0, i.jsx)('div', {
                                                className: N.wumpusRocketInnerContainer,
                                                children: (0, i.jsx)(T.Z, { className: N.wumpusRocket })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        });
    });
