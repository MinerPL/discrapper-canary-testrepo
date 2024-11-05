n.r(t),
    n.d(t, {
        default: function () {
            return $;
        }
    }),
    n(653041),
    n(47120);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(990547),
    s = n(442837),
    c = n(481060),
    d = n(347469),
    u = n(213609),
    h = n(213713),
    m = n(665149),
    x = n(906467),
    f = n(259580),
    p = n(31336),
    g = n(19759),
    b = n(432877);
n(381996);
var v = n(392750),
    j = n(926976),
    _ = n(592197),
    C = n(806240),
    T = n(789654),
    S = n(691867),
    N = n(916790),
    y = n(645973),
    I = n(903502),
    k = n(912072),
    w = n(272193),
    E = n(735959),
    Z = n(246992),
    R = n(496025),
    O = n(442954),
    A = n(702904),
    B = n(178821),
    L = n(248526),
    P = n(958328),
    M = n(514866),
    D = n(678639),
    F = n(351930),
    H = n(771751),
    U = n(596768),
    G = n(621060),
    z = n(388032),
    V = n(622331),
    W = n(219299);
function Y(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: a } = e,
        l = (0, d.Z)({
            minDimension: g.h,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: a,
            orientation: d.y.HORIZONTAL_LEFT
        });
    return (0, r.jsx)('div', {
        onMouseDown: l,
        className: V.resizeHandle
    });
}
function K() {
    var e;
    let t = a.useMemo(() => {
            let e = [
                {
                    id: 'analytics',
                    name: 'Analytics',
                    render: () => (0, r.jsx)(j.Z, {})
                },
                {
                    id: 'triggers',
                    name: 'Triggers',
                    render: () => (0, r.jsx)(U.Z, {})
                },
                {
                    id: 'stores',
                    name: 'Stores',
                    render: () => (0, r.jsx)(D.Z, {})
                },
                {
                    id: 'dispatcher',
                    name: 'Dispatcher',
                    render: () => (0, r.jsx)(N.Z, {})
                }
            ];
            return (
                x.Z.isDeveloper &&
                    (e.push({
                        id: 'quick_actions',
                        name: 'Quick Actions',
                        render: () => (0, r.jsx)(M.Z, {})
                    }),
                    e.push({
                        id: 'perks_demos',
                        name: 'Perks Demos',
                        render: () => (0, r.jsx)(L.Z, {})
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
                        render: () => (0, r.jsx)(C.Z, {})
                    }),
                    e.push({
                        id: 'performance',
                        name: 'Performance',
                        render: () => (0, r.jsx)(B.Z, {})
                    }),
                    e.push({
                        id: 'feedback',
                        name: 'Feedback',
                        render: () => (0, r.jsx)(I.Z, {})
                    })),
                e.push({
                    id: 'intl',
                    name: 'Intl',
                    render: () => (0, r.jsx)(E.Z, {})
                }),
                e.push({
                    id: 'colors',
                    name: 'Colors',
                    render: () => (0, r.jsx)(T.Z, {})
                }),
                e.push({
                    id: 'design_toggles',
                    name: 'Design Toggles',
                    render: () => (0, r.jsx)(S.Z, {})
                }),
                e.push({
                    id: 'overlays',
                    name: 'Dev Overlays',
                    render: () => (0, r.jsx)(k.Z, { devSettingsCategory: b.zU.OVERLAYS })
                }),
                e.push({
                    id: 'messaging',
                    name: 'Messaging',
                    render: () => (0, r.jsx)(R.Z, {})
                }),
                e.push({
                    id: 'reporting',
                    name: 'Reporting',
                    render: () => (0, r.jsx)(k.Z, { devSettingsCategory: b.zU.REPORTING })
                }),
                e.push({
                    id: 'permissions',
                    name: 'Permissions',
                    render: () => (0, r.jsx)(P.Z, {})
                }),
                e.push({
                    id: 'modals',
                    name: 'Modals',
                    render: () => (0, r.jsx)(O.Z, {})
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
                        render: () => (0, r.jsx)(H.Z, {})
                    }),
                    e.push({
                        id: 'payments',
                        name: 'Payments',
                        render: () => (0, r.jsx)(A.Z, {})
                    }),
                    e.push({
                        id: 'subscriptions',
                        name: 'Subscriptions',
                        render: () => (0, r.jsx)(F.Z, {})
                    }),
                    e.push({
                        id: 'billing',
                        name: 'Billing',
                        render: () => (0, r.jsx)(_.Z, {})
                    })),
                e.push({
                    id: 'gifting_intent',
                    name: 'Gifting Intent',
                    render: () => (0, r.jsx)(w.Z, {})
                }),
                e
            );
        }, []),
        {
            TabBar: n,
            renderSelectedTab: l,
            selectedTabId: i
        } = (0, G.Z)(
            {
                tabs: t,
                initialSelectedTabId: null !== (e = g.Z.lastOpenTabId) && void 0 !== e ? e : void 0,
                onChangeTab: (e) => {
                    (0, p.Qh)({ lastOpenTabId: e });
                }
            },
            [t]
        );
    return (
        (0, u.Z)({
            type: o.ImpressionTypes.PANE,
            name: o.ImpressionNames.VIEW_PANEL_DEVTOOLS,
            properties: { panel: i }
        }),
        (0, r.jsxs)(Z.Gk, {
            children: [
                (0, r.jsxs)(m.ZP, {
                    className: W.headerBar,
                    toolbar: (0, r.jsx)(m.ZP.Icon, {
                        icon: c.XSmallIcon,
                        tooltip: z.intl.string(z.t.cpT0Cg),
                        onClick: p.SO
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
                (0, r.jsx)(Z.Br, { className: V.layerContainer })
            ]
        })
    );
}
function X() {
    let e = a.useRef(null),
        t = (0, s.e7)([g.Z], () => g.Z.sidebarWidth),
        [n, l] = a.useState(null),
        o = a.useCallback((e) => (0, p.Qh)({ sidebarWidth: e }), []);
    return (a.useEffect(() => {
        null === n && null !== t && l(t);
    }, [t, n]),
    null === n)
        ? null
        : (0, r.jsxs)('div', {
              ref: e,
              className: i()(V.container),
              style: {
                  minWidth: g.h,
                  width: n
              },
              children: [
                  (0, r.jsx)(Y, {
                      resizableNode: e,
                      onResize: l,
                      onResizeEnd: o
                  }),
                  (0, r.jsx)('div', {
                      className: V.sidebarContent,
                      children: (0, r.jsx)(K, {})
                  })
              ]
          });
}
function q() {
    let e = (0, s.e7)([g.Z], () => g.Z.displayTools);
    return e
        ? (0, r.jsx)('div', {
              className: i()(V.container, V.mobileContainerExpanded),
              children: (0, r.jsx)('div', {
                  className: V.sidebarContent,
                  children: (0, r.jsx)(K, {})
              })
          })
        : (0, r.jsx)('div', {
              className: V.container,
              children: (0, r.jsx)(c.Clickable, {
                  onClick: p.SO,
                  children: (0, r.jsxs)(m.ZP, {
                      className: i()(W.headerBar, V.mobileHeaderCollapsed),
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
function $(e) {
    let { mobile: t } = e;
    return t ? (0, r.jsx)(q, {}) : (0, r.jsx)(X, {});
}
