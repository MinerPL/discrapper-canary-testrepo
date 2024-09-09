n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var r = n(735250),
    a = n(470079),
    l = n(120356),
    i = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(665149),
    u = n(428530),
    d = n(484036),
    h = n(681619),
    m = n(621060),
    x = n(535271),
    f = n(813879);
function g(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function p(e) {
    let { store: t, dataGetter: n } = e,
        [l, i] = a.useState(n(t));
    return (
        a.useEffect(() => {
            let e = () => i(n(t));
            return (
                e(),
                t.addChangeListener(e),
                () => {
                    t.removeChangeListener(e);
                }
            );
        }, [t, n]),
        (0, r.jsx)(s.ScrollerThin, {
            className: f.inspectorContainer,
            children: (0, r.jsx)(u.Z, { data: l })
        })
    );
}
let b = [
        {
            key: 'name',
            cellClassName: f.__invalid_eventColumn,
            render(e) {
                let { store: t } = e;
                return t.getName();
            }
        }
    ],
    v = [
        {
            id: 'local',
            name: 'Local Variables',
            render(e) {
                let { store: t } = e;
                return null == t.__getLocalVars
                    ? (0, r.jsxs)('div', {
                          className: f.inspectorContainer,
                          children: ['Store is missing ', (0, r.jsx)('code', { children: '__getLocalVars' }), ' method.']
                      })
                    : (0, r.jsx)(p, {
                          store: t,
                          dataGetter: (e) => e.__getLocalVars()
                      });
            }
        },
        {
            id: 'instance',
            name: 'Store Instance',
            render(e) {
                let { store: t } = e;
                return (0, r.jsx)(p, {
                    store: t,
                    dataGetter: (e) => e
                });
            }
        }
    ];
function _(e) {
    let { store: t, initialHeight: n } = e,
        { TabBar: a, renderSelectedTab: l } = (0, m.Z)({ tabs: v }, []);
    return (0, r.jsxs)(d.Z, {
        className: f.subPanel,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, r.jsx)(a, {}),
            (0, r.jsxs)(c.ZP, {
                className: i()(x.headerBar, f.subPanelHeaderBar),
                children: [
                    (0, r.jsx)(c.ZP.Icon, {
                        icon: s.TagIcon,
                        tooltip: t.getName()
                    }),
                    (0, r.jsx)(c.ZP.Title, { children: t.getName() })
                ]
            }),
            l({ store: t })
        ]
    });
}
function C() {
    let e = a.useRef(null),
        [t, n] = a.useState(''),
        l = o.yh.getAll(),
        c = a
            .useMemo(
                () =>
                    l
                        .map((e) => ({
                            key: e._dispatchToken,
                            store: e
                        }))
                        .sort(g),
                [l]
            )
            .filter((e) =>
                (function (e, t) {
                    let { store: n } = e;
                    return n.getName().toLowerCase().includes(t.toLowerCase());
                })(e, t)
            ),
        [u, d] = a.useState(),
        m = l.find((e) => e._dispatchToken === u);
    return (0, r.jsxs)('div', {
        ref: e,
        className: i()(x.panel, f.panel),
        children: [
            (0, r.jsx)('div', {
                className: f.toolbar,
                children: (0, r.jsx)(s.SearchBar, {
                    className: f.searchBar,
                    size: s.SearchBar.Sizes.SMALL,
                    query: t,
                    onChange: n,
                    onClear: () => n(''),
                    placeholder: 'Search stores',
                    'aria-label': 'Search stores'
                })
            }),
            (0, r.jsx)(h.Z, {
                columns: b,
                data: c,
                selectedRowKey: u,
                onClickRow: (e) => d(e.key)
            }),
            null != m &&
                (0, r.jsx)(_, {
                    store: m,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
                })
        ]
    });
}
