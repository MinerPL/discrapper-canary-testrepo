r.d(t, {
    Z: function () {
        return S;
    }
}), r(47120);
var a = r(735250), n = r(470079), i = r(120356), o = r.n(i), l = r(913527), c = r.n(l), s = r(481060), d = r(570140), u = r(4912), h = r(502568), m = r(55935), g = r(428530), p = r(257785), b = r(484036), f = r(681619), y = r(621060), x = r(205899), k = r(719556);
function v(e) {
    return parseFloat(e.toFixed(3));
}
let _ = [
    {
        key: 'store',
        cellClassName: x.actionColumn,
        render(e) {
            let {trace: t} = e;
            return t.name;
        }
    },
    {
        key: 'time',
        cellClassName: x.totalTimeColumn,
        render(e) {
            let {trace: t} = e;
            return ''.concat(v(t.time), ' ms');
        }
    }
];
function C(e) {
    let {actionLog: t} = e, r = n.useMemo(() => t.traces.map(e => ({
            key: e.name,
            trace: e
        })), [t]);
    return (0, a.jsx)(s.ScrollerThin, {
        children: (0, a.jsx)(f.Z, {
            columns: _,
            data: r
        })
    });
}
let w = [
    {
        id: 'action',
        name: 'Action',
        render(e) {
            var t;
            let {actionLog: r} = e, n = c()(r.createdAt);
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsxs)(p.E, {
                        className: x.actionProperties,
                        children: [
                            (0, a.jsx)(p.Z9, {
                                name: 'Created at',
                                children: (0, a.jsx)('time', {
                                    dateTime: null === (t = r.createdAt) || void 0 === t ? void 0 : t.toISOString(),
                                    title: (0, m.vc)(n, 'LLLL'),
                                    children: (0, m.Y4)(n)
                                })
                            }),
                            (0, a.jsxs)(p.Z9, {
                                name: 'Total Time',
                                children: [
                                    v(r.totalTime),
                                    ' ms'
                                ]
                            })
                        ]
                    }),
                    (0, a.jsx)(s.ScrollerThin, {
                        className: x.inspectorContainer,
                        children: (0, a.jsx)(g.Z, { data: r.action })
                    })
                ]
            });
        }
    },
    {
        id: 'traces',
        name: 'Store Handlers',
        render(e) {
            let {actionLog: t} = e;
            return (0, a.jsx)(C, { actionLog: t });
        }
    }
];
function j(e) {
    let {
            actionLog: t,
            initialHeight: r
        } = e, i = n.useMemo(() => t.error ? [
            ...w,
            {
                id: 'error',
                name: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(u.Z, { className: x.errorIcon }),
                        'Error'
                    ]
                }),
                render(e) {
                    let {actionLog: t} = e;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)('div', {
                                className: o()(x.errorToolbar, k.toolbar),
                                children: (0, a.jsx)('div', {
                                    className: k.toolbarGroup,
                                    children: (0, a.jsx)(s.Button, {
                                        className: k.toolbarButton,
                                        size: s.Button.Sizes.MIN,
                                        onClick: () => console.error(t.error),
                                        children: 'Log to Console'
                                    })
                                })
                            }),
                            (0, a.jsx)(s.ScrollerThin, {
                                className: x.inspectorContainer,
                                children: (0, a.jsx)(g.Z, { data: t.error })
                            })
                        ]
                    });
                }
            }
        ] : w, [t]), {
            TabBar: l,
            renderSelectedTab: c
        } = (0, y.Z)({ tabs: i }, [i]);
    return (0, a.jsxs)(b.Z, {
        className: x.subPanel,
        minHeight: 100,
        initialHeight: r,
        children: [
            (0, a.jsx)(l, {}),
            (0, a.jsxs)(h.ZP, {
                className: o()(k.headerBar, x.subPanelHeaderBar),
                children: [
                    (0, a.jsx)(h.ZP.Icon, {
                        icon: s.ReceiptIcon,
                        tooltip: t.name
                    }),
                    (0, a.jsx)(h.ZP.Title, { children: t.name })
                ]
            }),
            c({ actionLog: t })
        ]
    });
}
let N = [
    {
        key: 'action',
        cellClassName: x.actionColumn,
        render(e) {
            let {actionLog: t} = e;
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    t.error && (0, a.jsx)(u.Z, { className: x.errorIcon }),
                    t.name
                ]
            });
        }
    },
    {
        key: 'total time',
        cellClassName: x.totalTimeColumn,
        render(e) {
            let {actionLog: t} = e;
            return ''.concat(v(t.totalTime), ' ms');
        }
    }
];
function S() {
    let e = n.useRef(null), t = function (e) {
            let [t, r] = n.useState([...e.logs]), a = n.useCallback(() => r([...e.logs]), [e]);
            return n.useEffect(() => (e.on('log', a), () => {
                e.off('log', a);
            }), [
                e,
                a
            ]), t;
        }(d.Z.actionLogger), r = n.useMemo(() => t.map(e => ({
            key: e.id.toString(),
            actionLog: e
        })), [t]), [i, l] = n.useState(), c = t.find(e => e.id === i);
    return (0, a.jsxs)('div', {
        ref: e,
        className: o()(k.panel, x.panel),
        children: [
            (0, a.jsx)(s.ScrollerThin, {
                className: x.tableContainer,
                children: (0, a.jsx)(f.Z, {
                    columns: N,
                    data: r,
                    selectedRowKey: null == i ? void 0 : i.toString(),
                    onClickRow: e => l(Number.parseInt(e, 10))
                })
            }),
            null != c && (0, a.jsx)(j, {
                actionLog: c,
                initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
            })
        ]
    });
}
