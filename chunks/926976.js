t.d(r, {
    Z: function () {
        return E;
    }
}),
    t(47120);
var a = t(735250),
    n = t(470079),
    i = t(120356),
    o = t.n(i),
    l = t(913527),
    c = t.n(l),
    s = t(442837),
    d = t(481060),
    u = t(129861),
    h = t(665149),
    m = t(594174),
    g = t(55935),
    p = t(120816),
    b = t(31336),
    f = t(257785),
    y = t(484036),
    x = t(681619),
    k = t(621060),
    v = t(689938),
    _ = t(408126),
    w = t(535271);
let j = [
    {
        key: 'event',
        cellClassName: _.eventColumn,
        render(e) {
            let { event: r } = e;
            return r;
        }
    },
    {
        key: 'location',
        cellClassName: _.locationColumn,
        render(e) {
            let { properties: r } = e;
            return r.location;
        }
    }
];
function C(e) {
    let { children: r } = e;
    return (0, a.jsx)(d.ScrollerThin, {
        className: _.customPropertiesContainer,
        children: (0, a.jsx)('dl', { children: r })
    });
}
function N(e) {
    let { name: r, children: t } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('dt', {
                className: _.customPropertiesName,
                children: r
            }),
            (0, a.jsx)('dd', {
                className: _.customPropertiesValue,
                children: t
            })
        ]
    });
}
let S = [
        {
            id: 'details',
            name: 'Details',
            render: (e) => {
                let {
                        loggedEvent: { event: r, properties: t, timestamp: n, fingerprint: i }
                    } = e,
                    l = m.default.getUser(i),
                    s = c()(n);
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(h.ZP, {
                            className: o()(w.headerBar, _.subPanelHeaderBar),
                            children: [
                                (0, a.jsx)(h.ZP.Icon, {
                                    icon: d.AnalyticsIcon,
                                    tooltip: r
                                }),
                                (0, a.jsx)(h.ZP.Title, { children: r })
                            ]
                        }),
                        (0, a.jsxs)(f.E, {
                            className: _.commonProperties,
                            children: [
                                (0, a.jsx)(f.Z9, {
                                    name: 'Timestamp (local)',
                                    children: (0, a.jsx)('time', {
                                        dateTime: n.toISOString(),
                                        title: (0, g.vc)(s, 'LLLL'),
                                        children: (0, g.Y4)(s)
                                    })
                                }),
                                null != l &&
                                    (0, a.jsx)(f.Z9, {
                                        name: 'User',
                                        children: (0, a.jsx)(u.Z, { user: l })
                                    }),
                                (0, a.jsx)(f.Z9, {
                                    name: 'Fingerprint',
                                    children: (0, a.jsx)('code', { children: i })
                                })
                            ]
                        }),
                        (0, a.jsx)(C, {
                            children: Object.entries(t).map((e) => {
                                let [r, t] = e;
                                return (0, a.jsx)(
                                    N,
                                    {
                                        name: ''.concat(r, ':'),
                                        children:
                                            null != t
                                                ? (0, a.jsx)('code', { children: JSON.stringify(t) })
                                                : (0, a.jsx)('code', {
                                                      className: _.emptyProperty,
                                                      children: 'null'
                                                  })
                                    },
                                    r
                                );
                            })
                        })
                    ]
                });
            }
        }
    ],
    T = {
        events: {
            label: 'Events',
            filter: (e) =>
                Object.entries(T)
                    .filter((e) => {
                        let [r] = e;
                        return 'events' !== r;
                    })
                    .map((r) => {
                        let [t, { filter: a }] = r;
                        return !a(e);
                    })
                    .every((e) => e)
        },
        experiments: {
            label: 'Experiments',
            filter: (e) => ['experiment_user_triggered', 'experiment_guild_triggered'].includes(e.event)
        },
        impressions: {
            label: 'Impressions',
            filter: (e) => e.event.startsWith('impression_')
        },
        networkActions: {
            label: 'Network',
            filter: (e) => e.event.startsWith('network_action')
        }
    };
function E() {
    let e = n.useRef(null),
        r = (0, s.e7)([p.Z], () => p.Z.loggedEvents),
        [t, i] = n.useState(Object.keys(T)),
        l = r.filter((e) => {
            for (let r of t) if (T[r].filter(e)) return !0;
            return !1;
        }),
        [c, u] = n.useState(void 0),
        h = l.find((e) => e.key === c),
        { TabBar: m, renderSelectedTab: g } = (0, k.Z)({ tabs: S }, []);
    return (0, a.jsxs)('div', {
        ref: e,
        className: o()(w.panel, _.panel),
        children: [
            (0, a.jsxs)('div', {
                className: _.toolbar,
                children: [
                    (0, a.jsx)(d.Button, {
                        className: _.toolbarButton,
                        look: d.Button.Looks.BLANK,
                        size: d.Button.Sizes.ICON,
                        onClick: b.Zw,
                        children: (0, a.jsx)('span', {
                            title: v.Z.Messages.CLEAR,
                            children: (0, a.jsx)(d.TrashIcon, {
                                size: 'md',
                                color: 'currentColor',
                                'aria-label': v.Z.Messages.CLEAR
                            })
                        })
                    }),
                    (0, a.jsx)('div', { className: _.toolbarDivider }),
                    (0, a.jsx)('div', {
                        className: _.filters,
                        children: Object.entries(T).map((e) => {
                            let [r, n] = e;
                            return (0, a.jsx)(
                                d.Clickable,
                                {
                                    className: o()(_.filter, t.includes(r) && _.activeFilter),
                                    onClick: () => {
                                        var e;
                                        return (e = r), void i((r) => (r.includes(e) ? r.filter((r) => r !== e) : [...r, e]));
                                    },
                                    children: n.label
                                },
                                r
                            );
                        })
                    })
                ]
            }),
            (0, a.jsx)(d.ScrollerThin, {
                className: _.tableContainer,
                children: (0, a.jsx)(x.Z, {
                    columns: j,
                    data: l,
                    selectedRowKey: c,
                    onClickRow: u
                })
            }),
            null != h &&
                (0, a.jsxs)(y.Z, {
                    className: _.subPanel,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [(0, a.jsx)(m, {}), g({ loggedEvent: h })]
                })
        ]
    });
}
