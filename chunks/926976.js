n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120);
var r = n(735250),
    a = n(470079),
    l = n(120356),
    i = n.n(l),
    o = n(392711),
    s = n(913527),
    c = n.n(s),
    d = n(442837),
    u = n(481060),
    h = n(129861),
    m = n(665149),
    x = n(301801),
    f = n(594174),
    p = n(55935),
    g = n(120816),
    b = n(31336),
    v = n(257785),
    _ = n(484036),
    j = n(681619),
    C = n(621060),
    T = n(689938),
    S = n(574001),
    N = n(219299);
let y = [
    {
        key: 'event',
        cellClassName: S.eventColumn,
        render(e) {
            let { event: t } = e;
            return t;
        }
    },
    {
        key: 'location',
        cellClassName: S.locationColumn,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        }
    }
];
function I(e) {
    let { children: t } = e;
    return (0, r.jsx)(u.ScrollerThin, {
        className: S.customPropertiesContainer,
        children: (0, r.jsx)('dl', { children: t })
    });
}
function E(e) {
    let { name: t, children: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('dt', {
                className: S.customPropertiesName,
                children: t
            }),
            (0, r.jsx)('dd', {
                className: S.customPropertiesValue,
                children: n
            })
        ]
    });
}
let w = [
        {
            id: 'details',
            name: 'Details',
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: n, timestamp: a, fingerprint: l },
                        onClose: o
                    } = e,
                    s = f.default.getUser(l),
                    d = c()(a);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(m.ZP, {
                            className: i()(N.headerBar, S.subPanelHeaderBar),
                            children: [
                                (0, r.jsx)(m.ZP.Icon, {
                                    icon: u.AnalyticsIcon,
                                    tooltip: t
                                }),
                                (0, r.jsx)(m.ZP.Title, {
                                    wrapperClassName: N.headerTitle,
                                    children: t
                                }),
                                (0, r.jsx)(m.ZP.Icon, {
                                    icon: u.CircleXIcon,
                                    tooltip: 'Close',
                                    onClick: o
                                })
                            ]
                        }),
                        (0, r.jsxs)(v.E, {
                            className: S.commonProperties,
                            children: [
                                (0, r.jsx)(v.Z9, {
                                    name: 'Timestamp (local)',
                                    children: (0, r.jsx)('time', {
                                        dateTime: a.toISOString(),
                                        title: (0, p.vc)(d, 'LLLL'),
                                        children: (0, p.Y4)(d)
                                    })
                                }),
                                null != s &&
                                    (0, r.jsx)(v.Z9, {
                                        name: 'User',
                                        children: (0, r.jsx)(h.Z, { user: s })
                                    }),
                                (0, r.jsx)(v.Z9, {
                                    name: 'Fingerprint',
                                    children: (0, r.jsx)('code', { children: l })
                                })
                            ]
                        }),
                        (0, r.jsx)(I, {
                            children: Object.entries(n).map((e) => {
                                let [t, n] = e;
                                return (0, r.jsx)(
                                    E,
                                    {
                                        name: ''.concat(t, ':'),
                                        children:
                                            null != n
                                                ? (0, r.jsx)('code', { children: JSON.stringify(n) })
                                                : (0, r.jsx)('code', {
                                                      className: S.emptyProperty,
                                                      children: 'null'
                                                  })
                                    },
                                    t
                                );
                            })
                        })
                    ]
                });
            }
        }
    ],
    k = {
        events: {
            label: 'Events',
            filter: (e) =>
                Object.entries(k)
                    .filter((e) => {
                        let [t] = e;
                        return 'events' !== t;
                    })
                    .map((t) => {
                        let [n, { filter: r }] = t;
                        return !r(e);
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
function R() {
    let e = a.useRef(null),
        [t, n] = a.useState(''),
        l = (0, d.e7)([g.Z], () => g.Z.loggedEvents),
        [s, c] = a.useState(Object.keys(k)),
        [h, m] = a.useState(l),
        f = a.useRef(null),
        p = a.useCallback(
            (0, o.throttle)(
                async (e, t) => {
                    if ('' === e) {
                        m(t);
                        return;
                    }
                    f.current = (0, o.uniqueId)();
                    let n = await (0, x.H)(
                        t,
                        (e) => {
                            let { event: t } = e;
                            return t;
                        },
                        e,
                        !0
                    );
                    if (null != f.current) m(n);
                },
                300,
                { leading: !0 }
            ),
            []
        ),
        v = a.useMemo(
            () =>
                h.filter((e) => {
                    for (let t of s) if (k[t].filter(e)) return !0;
                    return !1;
                }),
            [h, s]
        );
    a.useEffect(() => {
        p(t, l);
    }, [t, p, l]);
    let [I, E] = a.useState(void 0),
        R = v.find((e) => e.key === I),
        { TabBar: Z, renderSelectedTab: O } = (0, C.Z)({ tabs: w }, []);
    return (0, r.jsxs)('div', {
        ref: e,
        className: i()(N.panel, S.panel),
        children: [
            (0, r.jsxs)('div', {
                className: S.toolbar,
                children: [
                    (0, r.jsx)(u.Button, {
                        className: S.toolbarButton,
                        look: u.Button.Looks.BLANK,
                        size: u.Button.Sizes.ICON,
                        onClick: b.Zw,
                        children: (0, r.jsx)('span', {
                            title: T.Z.Messages.CLEAR,
                            children: (0, r.jsx)(u.TrashIcon, {
                                size: 'md',
                                color: 'currentColor',
                                'aria-label': T.Z.Messages.CLEAR
                            })
                        })
                    }),
                    (0, r.jsx)('div', { className: S.toolbarDivider }),
                    (0, r.jsx)('div', {
                        className: S.filters,
                        children: Object.entries(k).map((e) => {
                            let [t, n] = e;
                            return (0, r.jsx)(
                                u.Clickable,
                                {
                                    className: i()(S.filter, s.includes(t) && S.activeFilter),
                                    onClick: () => {
                                        var e;
                                        return (e = t), void c((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
                                    },
                                    children: n.label
                                },
                                t
                            );
                        })
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: S.toolbar,
                children: (0, r.jsx)(u.SearchBar, {
                    className: S.searchBar,
                    query: t,
                    onChange: n,
                    onClear: () => n(''),
                    placeholder: 'Search by event name'
                })
            }),
            (0, r.jsx)(j.Z, {
                columns: y,
                data: v,
                selectedRowKey: I,
                onClickRow: (e) => E(e.key)
            }),
            null != R &&
                (0, r.jsxs)(_.Z, {
                    className: S.subPanel,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [
                        (0, r.jsx)(Z, {}),
                        O({
                            loggedEvent: R,
                            onClose: () => E(void 0)
                        })
                    ]
                })
        ]
    });
}
