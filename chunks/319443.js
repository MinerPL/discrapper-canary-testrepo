var i = n(735250),
    a = n(470079),
    s = n(481060),
    r = n(674588),
    l = n(979233),
    o = n(611928),
    c = n(922122),
    d = n(119014),
    u = n(726941),
    _ = n(370648),
    E = n(979007),
    h = n(842221);
t.Z = function () {
    let { onScroll: e, scrollPosition: t, resetScrollPosition: n } = (0, l.M)(),
        { tabs: m, selectedTab: I, onSelectTab: p } = (0, d.i)();
    return (
        a.useEffect(() => {
            n();
        }, [I, n]),
        a.useEffect(() => {
            r.CP();
        }, []),
        a.useEffect(() => {
            r.g5();
        }, []),
        (0, i.jsxs)('div', {
            className: h.container,
            children: [
                (0, i.jsxs)(o.ZP, {
                    children: [
                        (0, i.jsx)(o.z6, { scrollPosition: t }),
                        (0, i.jsx)(o.aV, { icon: s.AppsIcon }),
                        (0, i.jsx)(c.Z, {
                            tabs: m,
                            selectedTab: I,
                            onTabSelect: p
                        })
                    ]
                }),
                I === E.k
                    ? (0, i.jsx)(_.Z, { onScroll: e })
                    : (0, i.jsx)(u.Z, {
                          tabId: Number(I),
                          onScroll: e
                      })
            ]
        })
    );
};
