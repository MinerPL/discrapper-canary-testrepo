r.d(t, {
    Z: function () {
        return S;
    }
}), r(47120);
var a = r(735250), n = r(470079), i = r(120356), o = r.n(i), l = r(658722), c = r.n(l), s = r(913527), d = r.n(s), u = r(442837), h = r(481060), m = r(570140), g = r(502568), p = r(55935), b = r(120816), f = r(31336), y = r(257785), x = r(484036), k = r(681619), v = r(621060), _ = r(689938), C = r(206884), w = r(719556);
let j = [
        {
            key: 'id',
            cellClassName: C.eventColumn,
            render(e) {
                let {experimentId: t} = e;
                return t;
            }
        },
        {
            key: 'bucket',
            cellClassName: C.locationColumn,
            render(e) {
                let {descriptor: t} = e;
                return t.bucket;
            }
        },
        {
            key: 'timestamp',
            cellClassName: C.locationColumn,
            render(e) {
                let {timestamp: t} = e;
                return t.toLocaleString();
            }
        }
    ], N = [{
            id: 'details',
            name: 'Details',
            render: e => {
                let {
                        loggedTrigger: {
                            experimentId: t,
                            descriptor: r,
                            exposureType: n,
                            excluded: i,
                            timestamp: l,
                            location: c,
                            previouslyTracked: s
                        }
                    } = e, u = d()(l);
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(g.ZP, {
                            className: o()(w.headerBar, C.subPanelHeaderBar),
                            children: [
                                (0, a.jsx)(g.ZP.Icon, {
                                    icon: h.AnalyticsIcon,
                                    tooltip: t
                                }),
                                (0, a.jsx)(g.ZP.Title, { children: t })
                            ]
                        }),
                        (0, a.jsxs)(y.E, {
                            className: C.commonProperties,
                            children: [
                                (0, a.jsx)(y.Z9, {
                                    name: 'Timestamp (local)',
                                    children: (0, a.jsx)('time', {
                                        dateTime: l.toISOString(),
                                        title: (0, p.vc)(u, 'LLLL'),
                                        children: (0, p.Y4)(u)
                                    })
                                }),
                                'guild' === r.type && (0, a.jsx)(y.Z9, {
                                    name: 'Guild ID',
                                    children: (0, a.jsx)('code', { children: r.guildId })
                                }),
                                (0, a.jsx)(y.Z9, {
                                    name: 'Bucket',
                                    children: (0, a.jsx)('code', { children: r.bucket })
                                }),
                                (0, a.jsx)(y.Z9, {
                                    name: 'Revision',
                                    children: (0, a.jsx)('code', { children: r.revision })
                                }),
                                (0, a.jsx)(y.Z9, {
                                    name: 'Override',
                                    children: (0, a.jsx)(y.wl, { value: r.override })
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
        }];
function S() {
    let [e, t] = n.useState(''), r = n.useRef(null), i = (0, u.Wu)([b.Z], () => b.Z.loggedTriggers), l = n.useMemo(() => i.filter(t => 0 === e.length || c()(e, t.experimentId)).sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()), [
            i,
            e
        ]), [s, d] = n.useState(void 0), g = l.find(e => e.key === s), {
            TabBar: p,
            renderSelectedTab: y
        } = (0, v.Z)({ tabs: N }, []), S = (0, u.e7)([b.Z], () => b.Z.trackTriggers), T = n.useCallback(e => {
            m.Z.dispatch({
                type: 'SET_TRACK_TRIGGERS',
                enabled: e
            });
        }, []);
    return (0, a.jsxs)('div', {
        ref: r,
        className: o()(w.panel, C.panel),
        children: [
            (0, a.jsxs)('div', {
                className: C.toolbar,
                children: [
                    (0, a.jsx)('div', {
                        title: 'Enables tracking of all triggers',
                        className: C.triggersEnable,
                        children: (0, a.jsx)(h.Switch, {
                            checked: S,
                            onChange: T,
                            className: C.__invalid_toolbarSwitch
                        })
                    }),
                    (0, a.jsx)(h.Button, {
                        className: C.toolbarButton,
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
                        className: C.searchBar,
                        query: e,
                        onChange: t,
                        onClear: () => t(''),
                        placeholder: 'Search by experiment id'
                    })
                ]
            }),
            (0, a.jsx)(h.ScrollerThin, {
                className: C.tableContainer,
                children: (0, a.jsx)(k.Z, {
                    columns: j,
                    data: l,
                    selectedRowKey: s,
                    onClickRow: d
                })
            }),
            null != g && (0, a.jsxs)(x.Z, {
                className: C.subPanel,
                minHeight: 100,
                initialHeight: null != r.current ? r.current.clientHeight / 2 : 300,
                children: [
                    (0, a.jsx)(p, {}),
                    y({ loggedTrigger: g })
                ]
            })
        ]
    });
}
