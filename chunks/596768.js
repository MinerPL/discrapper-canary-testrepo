t.d(r, {
    Z: function () {
        return S;
    }
}),
    t(47120);
var a = t(735250),
    n = t(470079),
    i = t(120356),
    o = t.n(i),
    l = t(658722),
    c = t.n(l),
    s = t(913527),
    d = t.n(s),
    u = t(442837),
    h = t(481060),
    m = t(570140),
    g = t(665149),
    p = t(55935),
    b = t(120816),
    f = t(31336),
    y = t(257785),
    x = t(484036),
    k = t(681619),
    v = t(621060),
    _ = t(689938),
    w = t(408126),
    j = t(535271);
let C = [
        {
            key: 'id',
            cellClassName: w.eventColumn,
            render(e) {
                let { experimentId: r } = e;
                return r;
            }
        },
        {
            key: 'bucket',
            cellClassName: w.locationColumn,
            render(e) {
                let { descriptor: r } = e;
                return r.bucket;
            }
        },
        {
            key: 'timestamp',
            cellClassName: w.locationColumn,
            render(e) {
                let { timestamp: r } = e;
                return r.toLocaleString();
            }
        }
    ],
    N = [
        {
            id: 'details',
            name: 'Details',
            render: (e) => {
                let {
                        loggedTrigger: { experimentId: r, descriptor: t, exposureType: n, excluded: i, timestamp: l, location: c, previouslyTracked: s }
                    } = e,
                    u = d()(l);
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(g.ZP, {
                            className: o()(j.headerBar, w.subPanelHeaderBar),
                            children: [
                                (0, a.jsx)(g.ZP.Icon, {
                                    icon: h.AnalyticsIcon,
                                    tooltip: r
                                }),
                                (0, a.jsx)(g.ZP.Title, { children: r })
                            ]
                        }),
                        (0, a.jsxs)(y.E, {
                            className: w.commonProperties,
                            children: [
                                (0, a.jsx)(y.Z9, {
                                    name: 'Timestamp (local)',
                                    children: (0, a.jsx)('time', {
                                        dateTime: l.toISOString(),
                                        title: (0, p.vc)(u, 'LLLL'),
                                        children: (0, p.Y4)(u)
                                    })
                                }),
                                'guild' === t.type &&
                                    (0, a.jsx)(y.Z9, {
                                        name: 'Guild ID',
                                        children: (0, a.jsx)('code', { children: t.guildId })
                                    }),
                                (0, a.jsx)(y.Z9, {
                                    name: 'Bucket',
                                    children: (0, a.jsx)('code', { children: t.bucket })
                                }),
                                (0, a.jsx)(y.Z9, {
                                    name: 'Revision',
                                    children: (0, a.jsx)('code', { children: t.revision })
                                }),
                                (0, a.jsx)(y.Z9, {
                                    name: 'Override',
                                    children: (0, a.jsx)(y.wl, { value: t.override })
                                }),
                                (0, a.jsx)(y.Z9, {
                                    name: 'Exposure type',
                                    children: (0, a.jsx)('code', { children: n })
                                }),
                                (0, a.jsx)(y.Z9, {
                                    name: 'Excluded',
                                    children: (0, a.jsx)(y.wl, { value: i })
                                }),
                                (0, a.jsx)(y.Z9, {
                                    name: 'Previously tracked',
                                    children: (0, a.jsx)(y.wl, { value: s })
                                }),
                                (0, a.jsx)(y.Z9, {
                                    name: 'Location',
                                    children: (0, a.jsx)('code', { children: c })
                                })
                            ]
                        })
                    ]
                });
            }
        }
    ];
function S() {
    let [e, r] = n.useState(''),
        t = n.useRef(null),
        i = (0, u.Wu)([b.Z], () => b.Z.loggedTriggers),
        l = n.useMemo(() => i.filter((r) => 0 === e.length || c()(e, r.experimentId)).sort((e, r) => r.timestamp.getTime() - e.timestamp.getTime()), [i, e]),
        [s, d] = n.useState(void 0),
        g = l.find((e) => e.key === s),
        { TabBar: p, renderSelectedTab: y } = (0, v.Z)({ tabs: N }, []),
        S = (0, u.e7)([b.Z], () => b.Z.trackTriggers),
        T = n.useCallback((e) => {
            m.Z.dispatch({
                type: 'SET_TRACK_TRIGGERS',
                enabled: e
            });
        }, []);
    return (0, a.jsxs)('div', {
        ref: t,
        className: o()(j.panel, w.panel),
        children: [
            (0, a.jsxs)('div', {
                className: w.toolbar,
                children: [
                    (0, a.jsx)('div', {
                        title: 'Enables tracking of all triggers',
                        className: w.triggersEnable,
                        children: (0, a.jsx)(h.Switch, {
                            checked: S,
                            onChange: T,
                            className: w.__invalid_toolbarSwitch
                        })
                    }),
                    (0, a.jsx)(h.Button, {
                        className: w.toolbarButton,
                        look: h.Button.Looks.BLANK,
                        size: h.Button.Sizes.ICON,
                        onClick: f.Zw,
                        children: (0, a.jsx)('span', {
                            title: _.Z.Messages.CLEAR,
                            children: (0, a.jsx)(h.TrashIcon, {
                                size: 'md',
                                color: 'currentColor',
                                'aria-label': _.Z.Messages.CLEAR
                            })
                        })
                    }),
                    (0, a.jsx)(h.SearchBar, {
                        className: w.searchBar,
                        query: e,
                        onChange: r,
                        onClear: () => r(''),
                        placeholder: 'Search by experiment id'
                    })
                ]
            }),
            (0, a.jsx)(h.ScrollerThin, {
                className: w.tableContainer,
                children: (0, a.jsx)(k.Z, {
                    columns: C,
                    data: l,
                    selectedRowKey: s,
                    onClickRow: d
                })
            }),
            null != g &&
                (0, a.jsxs)(x.Z, {
                    className: w.subPanel,
                    minHeight: 100,
                    initialHeight: null != t.current ? t.current.clientHeight / 2 : 300,
                    children: [(0, a.jsx)(p, {}), y({ loggedTrigger: g })]
                })
        ]
    });
}
