var i = n(735250),
    a = n(470079),
    s = n(442837),
    r = n(894653),
    l = n(322665),
    o = n(17845),
    c = n(374939),
    d = n(283293),
    u = n(689938);
t.Z = function (e) {
    let { tabId: t, onScroll: n } = e,
        _ = (0, s.e7)([r.Z], () => r.Z.getCategories()),
        E = a.useMemo(() => {
            var e, n;
            return [null !== (n = null === (e = _.find((e) => e.id === t)) || void 0 === e ? void 0 : e.name) && void 0 !== n ? n : '', u.Z.Messages.GLOBAL_DISCOVERY_APPS_CATEGORY_TITLE_END];
        }, [_, t]);
    return (0, i.jsxs)(d.Z, {
        onScroll: n,
        children: [
            (0, i.jsx)(o.Z, {
                title: E,
                description: '',
                children: (0, i.jsx)(l.Z, {})
            }),
            (0, i.jsx)(c.Z, { children: null })
        ]
    });
};
