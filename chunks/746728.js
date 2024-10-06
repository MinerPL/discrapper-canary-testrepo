n.d(t, {
    I: function () {
        return h;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(481060),
    o = n(706454),
    c = n(164991),
    d = n(726115),
    u = n(783393),
    _ = n(112471),
    E = n(249379);
function h(e) {
    let { categoryId: t, loadId: n } = e;
    (0, c.LD)({ categoryId: t }),
        (0, d.oT)({
            loadId: n,
            categoryId: t,
            query: (0, c.Zq)(),
            languageCode: (0, c.a7)()
        });
}
function m(e) {
    let { loadId: t, categoryId: n, count: s } = e,
        d = a.useCallback(() => {
            h({
                categoryId: n,
                loadId: t
            });
        }, [n, t]),
        _ = (0, c.lZ)() === n,
        m = s.toLocaleString(o.default.locale),
        I = (0, u.E)({ categoryId: n });
    return (0, i.jsxs)(l.Clickable, {
        onClick: d,
        className: r()(E.category, { [E.selected]: _ }),
        children: [
            (0, i.jsx)(l.Text, {
                className: E.name,
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: I
            }),
            (0, i.jsx)(l.Text, {
                className: E.count,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: m
            })
        ]
    });
}
t.Z = function (e) {
    let { loadId: t } = e,
        n = (0, _.q)();
    return null == n
        ? null
        : (0, i.jsx)('div', {
              className: E.categories,
              children: n.map((e) => {
                  let [n, a] = e;
                  return (0, i.jsx)(
                      m,
                      {
                          loadId: t,
                          categoryId: n,
                          count: a
                      },
                      n
                  );
              })
          });
};
