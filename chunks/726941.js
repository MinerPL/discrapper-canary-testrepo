var i = n(200651),
    r = n(192379),
    a = n(442837),
    l = n(894653),
    s = n(322665),
    o = n(17845),
    c = n(374939),
    d = n(283293),
    u = n(292191),
    h = n(683544),
    m = n(388032),
    p = n(624849);
t.Z = function (e) {
    let { tabId: t, onSelectApplication: n, onScroll: g } = e,
        f = (0, a.e7)([l.Z], () => l.Z.getCategories()),
        _ = r.useMemo(() => f.find((e) => e.id === t), [f, t]),
        E = r.useMemo(() => {
            var e;
            return [null !== (e = null == _ ? void 0 : _.name) && void 0 !== e ? e : '', m.intl.string(m.t.wDEPGR)];
        }, [_]);
    return (0, i.jsxs)(d.Z, {
        onScroll: g,
        children: [
            (0, i.jsx)(o.Z, {
                title: E,
                children: (0, i.jsx)(s.Z, {})
            }),
            (0, i.jsx)(c.Z, {
                children:
                    null == _
                        ? (0, i.jsx)('div', {
                              className: p.errorContainer,
                              children: (0, i.jsx)(u.Z, { className: p.error })
                          })
                        : (0, i.jsx)(h.Z, {
                              categoryId: _.id,
                              onSelectApplication: n
                          })
            })
        ]
    });
};
