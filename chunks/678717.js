n.r(t),
    n.d(t, {
        default: function () {
            return Y;
        }
    }),
    n(653041),
    n(47120);
var r = n(735250),
    a = n(470079),
    l = n(120356),
    i = n.n(l),
    o = n(990547),
    s = n(442837),
    c = n(481060),
    u = n(347469),
    d = n(213609),
    h = n(213713),
    m = n(665149),
    x = n(906467),
    f = n(259580),
    g = n(31336),
    p = n(19759),
    b = n(432877);
n(381996);
var v = n(392750),
    _ = n(926976),
    C = n(592197),
    j = n(860337),
    T = n(789654),
    N = n(691867),
    S = n(916790),
    y = n(645973),
    I = n(912072),
    w = n(246992),
    k = n(442954),
    E = n(702904),
    R = n(178821),
    Z = n(248526),
    O = n(958328),
    A = n(514866),
    L = n(678639),
    P = n(351930),
    B = n(771751),
    D = n(596768),
    M = n(621060),
    F = n(689938),
    U = n(941735),
    H = n(535271);
function G(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: a } = e,
        l = (0, u.Z)({
            minDimension: p.h,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: a,
            orientation: u.y.HORIZONTAL_LEFT
        });
    return (0, r.jsx)('div', {
        onMouseDown: l,
        className: U.resizeHandle
    });
}
function z() {
    var e;
    let t = a.useMemo(() => {
            let e = [
                {
                    id: 'analytics',
                    name: 'Analytics',
                    render: () => (0, r.jsx)(_.Z, {})
                },
                {
                    id: 'triggers',
                    name: 'Triggers',
                    render: () => (0, r.jsx)(D.Z, {})
                },
                {
                    id: 'stores',
                    name: 'Stores',
                    render: () => (0, r.jsx)(L.Z, {})
                },
                {
                    id: 'dispatcher',
                    name: 'Dispatcher',
                    render: () => (0, r.jsx)(S.Z, {})
                }
            ];
            return (
                x.Z.isDeveloper &&
                    (e.push({
                        id: 'quick_actions',
                        name: 'Quick Actions',
                        render: () => (0, r.jsx)(A.Z, {})
                    }),
                    e.push({
                        id: 'perks_demos',
                        name: 'Perks Demos',
                        render: () => (0, r.jsx)(Z.Z, {})
                    })),
                x.Z.isDeveloper &&
                    (e.push({
                        id: 'end_to_end_encryption',
                        name: 'E2EE',
                        render: () => (0, r.jsx)(y.Z, {})
                    }),
                    e.push({
                        id: 'clans',
                        name: 'Clans',
                        render: () => (0, r.jsx)(j.Z, {})
                    }),
                    e.push({
                        id: 'performance',
                        name: 'Performance',
                        render: () => (0, r.jsx)(R.Z, {})
                    })),
                e.push({
                    id: 'colors',
                    name: 'Colors',
                    render: () => (0, r.jsx)(T.Z, {})
                }),
                e.push({
                    id: 'design_toggles',
                    name: 'Design Toggles',
                    render: () => (0, r.jsx)(N.Z, {})
                }),
                e.push({
                    id: 'overlays',
                    name: 'Dev Overlays',
                    render: () => (0, r.jsx)(I.Z, { devSettingsCategory: b.zU.OVERLAYS })
                }),
                e.push({
                    id: 'messaging',
                    name: 'Messaging',
                    render: () => (0, r.jsx)(I.Z, { devSettingsCategory: b.zU.MESSAGING })
                }),
                e.push({
                    id: 'reporting',
                    name: 'Reporting',
                    render: () => (0, r.jsx)(I.Z, { devSettingsCategory: b.zU.REPORTING })
                }),
                e.push({
                    id: 'permissions',
                    name: 'Permissions',
                    render: () => (0, r.jsx)(O.Z, {})
                }),
                e.push({
                    id: 'modals',
                    name: 'Modals',
                    render: () => (0, r.jsx)(k.Z, {})
                }),
                e.push({
                    id: 'affinity',
                    name: 'Affinity',
                    render: () => (0, r.jsx)(v.Z, {})
                }),
                x.Z.isDeveloper &&
                    e.push({
                        id: 'content_inventory',
                        name: 'Content Inventory',
                        render: () => (0, r.jsx)(h.Z, {})
                    }),
                window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith('staging') &&
                    (e.push({
                        id: 'trials',
                        name: 'Trials',
                        render: () => (0, r.jsx)(B.Z, {})
                    }),
                    e.push({
                        id: 'payments',
                        name: 'Payments',
                        render: () => (0, r.jsx)(E.Z, {})
                    }),
                    e.push({
                        id: 'subscriptions',
                        name: 'Subscriptions',
                        render: () => (0, r.jsx)(P.Z, {})
                    }),
                    e.push({
                        id: 'billing',
                        name: 'Billing',
                        render: () => (0, r.jsx)(C.Z, {})
                    })),
                e
            );
        }, []),
        {
            TabBar: n,
            renderSelectedTab: l,
            selectedTabId: i
        } = (0, M.Z)(
            {
                tabs: t,
                initialSelectedTabId: null !== (e = p.Z.lastOpenTabId) && void 0 !== e ? e : void 0,
                onChangeTab: (e) => {
                    (0, g.Qh)({ lastOpenTabId: e });
                }
            },
            [t]
        );
    return (
        (0, d.Z)({
            type: o.ImpressionTypes.PANE,
            name: o.ImpressionNames.VIEW_PANEL_DEVTOOLS,
            properties: { panel: i }
        }),
        (0, r.jsxs)(w.Gk, {
            children: [
                (0, r.jsxs)(m.ZP, {
                    className: H.headerBar,
                    toolbar: (0, r.jsx)(m.ZP.Icon, {
                        icon: c.XSmallIcon,
                        tooltip: F.Z.Messages.CLOSE,
                        onClick: g.SO
                    }),
                    children: [
                        (0, r.jsx)(m.ZP.Icon, {
                            icon: c.StaffBadgeIcon,
                            tooltip: 'DevTools'
                        }),
                        (0, r.jsx)(m.ZP.Title, { children: 'DevTools' })
                    ]
                }),
                (0, r.jsx)(n, {}),
                l(),
                (0, r.jsx)(w.Br, { className: U.layerContainer })
            ]
        })
    );
}
function V() {
    let e = a.useRef(null),
        t = (0, s.e7)([p.Z], () => p.Z.sidebarWidth),
        [n, l] = a.useState(null),
        o = a.useCallback((e) => (0, g.Qh)({ sidebarWidth: e }), []);
    return (a.useEffect(() => {
        null === n && null !== t && l(t);
    }, [t, n]),
    null === n)
        ? null
        : (0, r.jsxs)('div', {
              ref: e,
              className: i()(U.container),
              style: {
                  minWidth: p.h,
                  width: n
              },
              children: [
                  (0, r.jsx)(G, {
                      resizableNode: e,
                      onResize: l,
                      onResizeEnd: o
                  }),
                  (0, r.jsx)('div', {
                      className: U.sidebarContent,
                      children: (0, r.jsx)(z, {})
                  })
              ]
          });
}
function W() {
    let e = (0, s.e7)([p.Z], () => p.Z.displayTools);
    return e
        ? (0, r.jsx)('div', {
              className: i()(U.container, U.mobileContainerExpanded),
              children: (0, r.jsx)('div', {
                  className: U.sidebarContent,
                  children: (0, r.jsx)(z, {})
              })
          })
        : (0, r.jsx)('div', {
              className: U.container,
              children: (0, r.jsx)(c.Clickable, {
                  onClick: g.SO,
                  children: (0, r.jsxs)(m.ZP, {
                      className: i()(H.headerBar, U.mobileHeaderCollapsed),
                      toolbar: (0, r.jsx)(f.Z, { direction: f.Z.Directions.UP }),
                      children: [
                          (0, r.jsx)(m.ZP.Icon, {
                              icon: c.StaffBadgeIcon,
                              tooltip: 'DevTools'
                          }),
                          (0, r.jsx)(m.ZP.Title, { children: 'DevTools' })
                      ]
                  })
              })
          });
}
function Y(e) {
    let { mobile: t } = e;
    return t ? (0, r.jsx)(W, {}) : (0, r.jsx)(V, {});
}
