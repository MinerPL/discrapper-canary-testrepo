n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(894653),
    d = n(34674),
    u = n(706454),
    h = n(93651);
function m(e) {
    let { category: t, count: n, onSelectCategory: a, selected: s } = e,
        c = r.useCallback(() => {
            a(t.id);
        }, [t.id, a]),
        d = n.toLocaleString(u.default.locale);
    return (0, i.jsxs)(o.Clickable, {
        onClick: c,
        className: l()(h.category, { [h.selected]: s }),
        children: [
            (0, i.jsx)(o.Text, {
                className: h.name,
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: t.name
            }),
            (0, i.jsx)(o.Text, {
                className: h.count,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: d
            })
        ]
    });
}
function p(e) {
    let { countsByCategory: t, onSelectCategory: n, selectedCategoryId: a } = e,
        l = (0, s.e7)([c.Z], () => c.Z.getCategories()),
        o = r.useMemo(() => [(0, d.KQ)(), ...l], [l]);
    return (0, i.jsx)('div', {
        className: h.categories,
        children: o.map((e) => {
            var r;
            let l = e.id,
                s = null !== (r = t[l]) && void 0 !== r ? r : 0;
            return 0 !== s
                ? (0, i.jsx)(
                      m,
                      {
                          category: e,
                          count: s,
                          selected: l === a,
                          onSelectCategory: n
                      },
                      l
                  )
                : null;
        })
    });
}
