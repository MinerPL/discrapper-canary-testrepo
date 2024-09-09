n.d(t, {
    m: function () {
        return A;
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
    m = n(100527),
    p = n(906732),
    _ = n(390322),
    f = n(626135),
    E = n(566620),
    g = n(127255),
    C = n(5200),
    I = n(558317),
    x = n(403404),
    T = n(981631),
    v = n(689938),
    S = n(57241);
let N = 'vc-activities-'.concat((0, r.Z)()),
    A = s.forwardRef(function (e, t) {
        let { channel: n, isHovered: a, closePopout: r, onMouseEnter: A, onMouseLeave: Z, onClick: M, className: b } = e,
            R = (0, o.e7)([h.Z], () => h.Z.useReducedMotion),
            { id: L, guild_id: j } = n;
        s.useEffect(() => {
            f.default.track(T.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
                channel_id: L,
                guild_id: j
            });
        }, [L, j]),
            s.useEffect(() => {
                !a && r();
            }, [r, a]);
        let P = (0, d.bp)(),
            { analyticsLocations: O } = (0, p.ZP)(m.Z.ACTIVITIES_MINI_SHELF),
            { analyticsLocations: y } = (0, p.ZP)([...O, m.Z.ACTIVITIES_MINI_SHELF_BANNER]),
            D = P === T.IlC.POPOUT,
            k = (0, u.O)(),
            U = (function (e) {
                return (0, g.Z)({ guildId: e }).slice(0, 5);
            })(n.getGuildId());
        s.useEffect(() => {
            let e = setTimeout(() => E.ux(), 1000);
            return () => clearTimeout(e);
        }, []);
        let w = s.useCallback(() => {
                var e;
                (0, x.Z)({
                    channel: n,
                    guildId: null !== (e = n.getGuildId()) && void 0 !== e ? e : void 0,
                    locationObject: k.location,
                    openInPopout: D,
                    analyticsLocations: O,
                    opensAppLauncherModal: !0
                }),
                    Z(),
                    M();
            }, [k, O, n, M, Z, D]),
            B = s.useCallback(
                (e) => {
                    A(),
                        f.default.track(T.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
                            channel_id: n.id,
                            guild_id: n.getGuildId()
                        });
                },
                [A, n]
            );
        return (0, i.jsx)(p.Gt, {
            value: O,
            children: (0, i.jsx)(_.Z, {
                children: (0, i.jsxs)(c.Dialog, {
                    ref: t,
                    'aria-labelledby': N,
                    className: b,
                    children: [
                        (0, i.jsx)(c.HeadingLevel, {
                            forceLevel: 2,
                            children: (0, i.jsx)(c.HiddenVisually, {
                                children: (0, i.jsx)(c.H, {
                                    id: N,
                                    children: v.Z.Messages.EMBEDDED_ACTIVITIES_MINI_SHELF_TITLE
                                })
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: S.container,
                            onMouseEnter: B,
                            onMouseLeave: Z,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: S.titleContainer,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: S.titleLeft,
                                            children: [
                                                (0, i.jsx)(c.ActivitiesIcon, {
                                                    size: 'md',
                                                    className: S.titleLeftIcon,
                                                    color: 'var(--interactive-active)'
                                                }),
                                                (0, i.jsx)(c.Text, {
                                                    variant: 'eyebrow',
                                                    children: v.Z.Messages.EMBEDDED_ACTIVITIES_AUTO_SUGGEST_ACTIVITIES_TITLE
                                                })
                                            ]
                                        }),
                                        (0, i.jsxs)(c.Clickable, {
                                            className: S.titleRight,
                                            onClick: w,
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
                                                    className: S.titleRightIcon
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsx)(p.Gt, {
                                    value: y,
                                    children: null
                                }),
                                (0, i.jsxs)('div', {
                                    className: S.activityContainer,
                                    children: [
                                        U.map((e) =>
                                            (0, i.jsx)(
                                                C.Y,
                                                {
                                                    channel: n,
                                                    activityItem: e,
                                                    onClick: () => {
                                                        r(), M();
                                                    },
                                                    aspectRatio: C.Y.AspectRatio.THIRTEEN_BY_ELEVEN,
                                                    animatedDivClass: S.activitySuggestion
                                                },
                                                e.application.id
                                            )
                                        ),
                                        (0, i.jsx)('div', {
                                            className: l()(S.wumpusRocketOuterContainer, { [S.wumpusReducedMotion]: R }),
                                            children: (0, i.jsx)('div', {
                                                className: S.wumpusRocketInnerContainer,
                                                children: (0, i.jsx)(I.Z, { className: S.wumpusRocket })
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
