n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120);
var r = n(735250),
    a = n(470079),
    l = n(120356),
    i = n.n(l),
    o = n(658722),
    s = n.n(o),
    c = n(913527),
    u = n.n(c),
    d = n(442837),
    h = n(481060),
    m = n(570140),
    x = n(665149),
    f = n(55935),
    g = n(120816),
    p = n(31336),
    b = n(257785),
    v = n(484036),
    _ = n(681619),
    C = n(621060),
    j = n(689938),
    T = n(408126),
    N = n(535271);
let S = [
        {
            key: 'id',
            cellClassName: T.eventColumn,
            render(e) {
                let { experimentId: t } = e;
                return t;
            }
        },
        {
            key: 'bucket',
            cellClassName: T.locationColumn,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            }
        },
        {
            key: 'timestamp',
            cellClassName: T.locationColumn,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            }
        }
    ],
    y = [
        {
            id: 'details',
            name: 'Details',
            render: (e) => {
                let {
                        loggedTrigger: { experimentId: t, descriptor: n, exposureType: a, excluded: l, timestamp: o, location: s, previouslyTracked: c }
                    } = e,
                    d = u()(o);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(x.ZP, {
                            className: i()(N.headerBar, T.subPanelHeaderBar),
                            children: [
                                (0, r.jsx)(x.ZP.Icon, {
                                    icon: h.AnalyticsIcon,
                                    tooltip: t
                                }),
                                (0, r.jsx)(x.ZP.Title, { children: t })
                            ]
                        }),
                        (0, r.jsxs)(b.E, {
                            className: T.commonProperties,
                            children: [
                                (0, r.jsx)(b.Z9, {
                                    name: 'Timestamp (local)',
                                    children: (0, r.jsx)('time', {
                                        dateTime: o.toISOString(),
                                        title: (0, f.vc)(d, 'LLLL'),
                                        children: (0, f.Y4)(d)
                                    })
                                }),
                                'guild' === n.type &&
                                    (0, r.jsx)(b.Z9, {
                                        name: 'Guild ID',
                                        children: (0, r.jsx)('code', { children: n.guildId })
                                    }),
                                (0, r.jsx)(b.Z9, {
                                    name: 'Bucket',
                                    children: (0, r.jsx)('code', { children: n.bucket })
                                }),
                                (0, r.jsx)(b.Z9, {
                                    name: 'Revision',
                                    children: (0, r.jsx)('code', { children: n.revision })
                                }),
                                (0, r.jsx)(b.Z9, {
                                    name: 'Override',
                                    children: (0, r.jsx)(b.wl, { value: n.override })
                                }),
                                (0, r.jsx)(b.Z9, {
                                    name: 'Exposure type',
                                    children: (0, r.jsx)('code', { children: a })
                                }),
                                (0, r.jsx)(b.Z9, {
                                    name: 'Excluded',
                                    children: (0, r.jsx)(b.wl, { value: l })
                                }),
                                (0, r.jsx)(b.Z9, {
                                    name: 'Previously tracked',
                                    children: (0, r.jsx)(b.wl, { value: c })
                                }),
                                (0, r.jsx)(b.Z9, {
                                    name: 'Location',
                                    children: (0, r.jsx)('code', { children: s })
                                })
                            ]
                        })
                    ]
                });
            }
        }
    ];
function I() {
    let [e, t] = a.useState(''),
        n = a.useRef(null),
        l = (0, d.Wu)([g.Z], () => g.Z.loggedTriggers),
        o = a.useMemo(() => l.filter((t) => 0 === e.length || s()(e, t.experimentId)).sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()), [l, e]),
        [c, u] = a.useState(void 0),
        x = o.find((e) => e.key === c),
        { TabBar: f, renderSelectedTab: b } = (0, C.Z)({ tabs: y }, []),
        I = (0, d.e7)([g.Z], () => g.Z.trackTriggers),
        w = a.useCallback((e) => {
            m.Z.dispatch({
                type: 'SET_TRACK_TRIGGERS',
                enabled: e
            });
        }, []);
    return (0, r.jsxs)('div', {
        ref: n,
        className: i()(N.panel, T.panel),
        children: [
            (0, r.jsxs)('div', {
                className: T.toolbar,
                children: [
                    (0, r.jsx)('div', {
                        title: 'Enables tracking of all triggers',
                        className: T.triggersEnable,
                        children: (0, r.jsx)(h.Switch, {
                            checked: I,
                            onChange: w,
                            className: T.__invalid_toolbarSwitch
                        })
                    }),
                    (0, r.jsx)(h.Button, {
                        className: T.toolbarButton,
                        look: h.Button.Looks.BLANK,
                        size: h.Button.Sizes.ICON,
                        onClick: p.Zw,
                        children: (0, r.jsx)('span', {
                            title: j.Z.Messages.CLEAR,
                            children: (0, r.jsx)(h.TrashIcon, {
                                size: 'md',
                                color: 'currentColor',
                                'aria-label': j.Z.Messages.CLEAR
                            })
                        })
                    }),
                    (0, r.jsx)(h.SearchBar, {
                        className: T.searchBar,
                        query: e,
                        onChange: t,
                        onClear: () => t(''),
                        placeholder: 'Search by experiment id'
                    })
                ]
            }),
            (0, r.jsx)(_.Z, {
                columns: S,
                data: o,
                selectedRowKey: c,
                onClickRow: (e) => u(e.key)
            }),
            null != x &&
                (0, r.jsxs)(v.Z, {
                    className: T.subPanel,
                    minHeight: 100,
                    initialHeight: null != n.current ? n.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(f, {}), b({ loggedTrigger: x })]
                })
        ]
    });
}
