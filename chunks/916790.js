n.d(t, {
    Z: function () {
        return k;
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
    u = n(481060),
    d = n(570140),
    h = n(665149),
    m = n(301801),
    x = n(4912),
    f = n(55935),
    g = n(428530),
    p = n(257785),
    b = n(484036),
    v = n(681619),
    _ = n(621060),
    C = n(981073),
    j = n(535271);
function T(e) {
    return parseFloat(e.toFixed(3));
}
let N = [
    {
        key: 'store',
        cellClassName: C.actionColumn,
        render(e) {
            let { trace: t } = e;
            return t.name;
        }
    },
    {
        key: 'time',
        cellClassName: C.totalTimeColumn,
        render(e) {
            let { trace: t } = e;
            return ''.concat(T(t.time), ' ms');
        }
    }
];
function S(e) {
    let { actionLog: t } = e,
        n = a.useMemo(
            () =>
                t.traces.map((e) => ({
                    key: e.name,
                    trace: e
                })),
            [t]
        );
    return (0, r.jsx)(u.ScrollerThin, {
        children: (0, r.jsx)(v.Z, {
            columns: N,
            data: n
        })
    });
}
let y = [
    {
        id: 'action',
        name: 'Action',
        render(e) {
            var t;
            let { actionLog: n } = e,
                a = c()(n.createdAt);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(p.E, {
                        className: C.actionProperties,
                        children: [
                            (0, r.jsx)(p.Z9, {
                                name: 'Created at',
                                children: (0, r.jsx)('time', {
                                    dateTime: null === (t = n.createdAt) || void 0 === t ? void 0 : t.toISOString(),
                                    title: (0, f.vc)(a, 'LLLL'),
                                    children: (0, f.Y4)(a)
                                })
                            }),
                            (0, r.jsxs)(p.Z9, {
                                name: 'Total Time',
                                children: [T(n.totalTime), ' ms']
                            })
                        ]
                    }),
                    (0, r.jsx)(u.ScrollerThin, {
                        className: C.inspectorContainer,
                        children: (0, r.jsx)(g.Z, { data: n.action })
                    })
                ]
            });
        }
    },
    {
        id: 'traces',
        name: 'Store Handlers',
        render(e) {
            let { actionLog: t } = e;
            return (0, r.jsx)(S, { actionLog: t });
        }
    }
];
function I(e) {
    let { actionLog: t, initialHeight: n } = e,
        l = a.useMemo(
            () =>
                t.error
                    ? [
                          ...y,
                          {
                              id: 'error',
                              name: (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(x.Z, { className: C.errorIcon }), 'Error']
                              }),
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: i()(C.errorToolbar, j.toolbar),
                                              children: (0, r.jsx)('div', {
                                                  className: j.toolbarGroup,
                                                  children: (0, r.jsx)(u.Button, {
                                                      className: j.toolbarButton,
                                                      size: u.Button.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: 'Log to Console'
                                                  })
                                              })
                                          }),
                                          (0, r.jsx)(u.ScrollerThin, {
                                              className: C.inspectorContainer,
                                              children: (0, r.jsx)(g.Z, { data: t.error })
                                          })
                                      ]
                                  });
                              }
                          }
                      ]
                    : y,
            [t]
        ),
        { TabBar: o, renderSelectedTab: s } = (0, _.Z)({ tabs: l }, [l]);
    return (0, r.jsxs)(b.Z, {
        className: C.subPanel,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, r.jsx)(o, {}),
            (0, r.jsxs)(h.ZP, {
                className: i()(j.headerBar, C.subPanelHeaderBar),
                children: [
                    (0, r.jsx)(h.ZP.Icon, {
                        icon: u.ReceiptIcon,
                        tooltip: t.name
                    }),
                    (0, r.jsx)(h.ZP.Title, { children: t.name })
                ]
            }),
            s({ actionLog: t })
        ]
    });
}
let w = [
    {
        key: 'action',
        cellClassName: C.actionColumn,
        render(e) {
            let { actionLog: t } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [t.error && (0, r.jsx)(x.Z, { className: C.errorIcon }), t.name]
            });
        }
    },
    {
        key: 'total time',
        cellClassName: C.totalTimeColumn,
        render(e) {
            let { actionLog: t } = e;
            return ''.concat(T(t.totalTime), ' ms');
        }
    }
];
function k() {
    let e = a.useRef(null),
        [t, n] = a.useState(''),
        l = (function (e) {
            let [t, n] = a.useState(e.logs),
                r = a.useCallback(() => n([...e.logs]), [e]);
            return (
                a.useEffect(
                    () => (
                        e.on('log', r),
                        () => {
                            e.off('log', r);
                        }
                    ),
                    [e, r]
                ),
                t
            );
        })(d.Z.actionLogger),
        s = a.useMemo(
            () =>
                l.map((e) => ({
                    key: e.id.toString(),
                    actionLog: e
                })),
            [l]
        ),
        [c, h] = a.useState(s),
        [x, f] = a.useState(),
        g = a.useRef(null),
        p = a.useCallback(
            (0, o.throttle)(
                async (e, t) => {
                    if ('' === e) {
                        h(t);
                        return;
                    }
                    g.current = (0, o.uniqueId)();
                    let n = await (0, m.H)(
                        t,
                        (e) => {
                            let { actionLog: t } = e;
                            return t.name;
                        },
                        e,
                        !0
                    );
                    if (null != g.current) h(n);
                },
                300,
                { leading: !0 }
            ),
            []
        );
    return (
        a.useEffect(() => {
            p(t, s);
        }, [t, p, s]),
        a.useEffect(() => {
            g.current = null;
        }, []),
        (0, r.jsxs)('div', {
            ref: e,
            className: i()(j.panel, C.panel),
            children: [
                (0, r.jsx)('div', {
                    className: C.toolbar,
                    children: (0, r.jsx)(u.SearchBar, {
                        className: C.searchBar,
                        query: t,
                        onChange: n,
                        onClear: () => n(''),
                        placeholder: 'Search by action name'
                    })
                }),
                (0, r.jsx)(v.Z, {
                    columns: w,
                    data: t.trim().length > 0 ? c : s,
                    selectedRowKey: null == x ? void 0 : x.id.toString(),
                    onClickRow: (e) => f(e.actionLog)
                }),
                null != x &&
                    (0, r.jsx)(I, {
                        actionLog: x,
                        initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
                    })
            ]
        })
    );
}
