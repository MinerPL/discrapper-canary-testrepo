n.r(t),
    n.d(t, {
        default: function () {
            return v;
        },
        useAppSidebarState: function () {
            return A;
        }
    });
var i = n(735250),
    a = n(470079),
    s = n(652874),
    r = n(442837),
    l = n(481060),
    o = n(230711),
    c = n(174556),
    d = n(565138),
    u = n(300986),
    _ = n(314451),
    E = n(35583),
    h = n(51596),
    m = n(141321),
    I = n(703656),
    p = n(592125),
    g = n(430824),
    T = n(944486),
    f = n(998502),
    S = n(981631),
    C = n(741764),
    N = n(350133);
let A = (0, s.Z)(() => ({ isOpen: !0 }));
function v() {
    let e = (0, r.e7)([T.Z], () => T.Z.getChannelId()),
        t = (0, r.e7)([p.Z], () => p.Z.getChannel(e), [e]),
        n = g.Z.getGuild(null == t ? void 0 : t.guild_id),
        s = A((e) => e.isOpen),
        { hasBugReporterAccess: v } = c.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 });
    return (
        a.useLayoutEffect(() => {
            f.ZP.setMinimumSize(C.J, C.N);
        }, []),
        (0, i.jsxs)('div', {
            className: N.bar,
            children: [
                (0, i.jsxs)('div', {
                    className: N.sidebar,
                    'data-sidebar-collapsed': !s,
                    children: [
                        !s &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(l.Clickable, {
                                        onClick: () => {
                                            A.setState({ isOpen: !A.getState().isOpen });
                                        },
                                        children: (0, i.jsx)(Z, {})
                                    }),
                                    (0, i.jsx)(l.Clickable, {
                                        onClick: () => {
                                            o.Z.open(S.oAB.ACCOUNT);
                                        },
                                        children: (0, i.jsx)(l.SettingsIcon, { size: 'xs' })
                                    })
                                ]
                            }),
                        (0, i.jsx)(l.Clickable, {
                            onClick: () => (0, h.$Z)('APP_BAR'),
                            children: (0, i.jsx)(l.MagnifyingGlassIcon, { size: 'xs' })
                        }),
                        (0, i.jsx)(l.Clickable, {
                            onClick: I.op,
                            children: (0, i.jsx)(l.ArrowSmallLeftIcon, { size: 'sm' })
                        }),
                        (0, i.jsx)(l.Clickable, {
                            onClick: I.eH,
                            children: (0, i.jsx)(l.ArrowSmallRightIcon, { size: 'sm' })
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: N.center,
                    children:
                        null != n &&
                        (0, i.jsxs)('div', {
                            className: N.guild,
                            children: [
                                (0, i.jsx)(d.Z, {
                                    guild: n,
                                    size: d.Z.Sizes.SMALLER,
                                    active: !0,
                                    className: N.icon
                                }),
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-sm/medium',
                                    children: n.name
                                })
                            ]
                        })
                }),
                (0, i.jsxs)('div', {
                    className: N.right,
                    children: [(0, i.jsx)(m.Z, {}), v ? (0, i.jsx)(_.Z, {}) : (0, i.jsx)(u.Z, {}), (0, i.jsx)(E.Z, {})]
                })
            ]
        })
    );
}
function Z() {
    return (0, i.jsxs)('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        className: N.icon,
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'var(--interactive-normal)',
        'stroke-width': '2',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        children: [
            (0, i.jsx)('rect', {
                width: '18',
                height: '18',
                x: '3',
                y: '3',
                rx: '2'
            }),
            (0, i.jsx)('path', { d: 'M9 3v18' })
        ]
    });
}
