n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(481060),
    r = n(89182),
    l = n(706454),
    o = n(164991),
    c = n(783393),
    d = n(112471),
    u = n(746728),
    _ = n(689938),
    E = n(868095);
function h(e) {
    let { count: t, categoryId: n } = e,
        a = t.toLocaleString(l.default.locale),
        r = (0, c.E)({ categoryId: n });
    return (0, i.jsxs)('div', {
        className: E.label,
        children: [
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: r
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: a
            })
        ]
    });
}
function m(e) {
    let { loadId: t } = e,
        n = (0, o.lZ)(),
        l = (0, d.q)(),
        m = (0, c.E)({ categoryId: n }),
        I = a.useCallback(
            (e) => {
                (0, u.I)({
                    loadId: t,
                    categoryId: Number(e)
                });
            },
            [t]
        ),
        p = a.useMemo(
            () =>
                null == l
                    ? []
                    : l.map((e) => {
                          let [t, n] = e;
                          return {
                              id: ''.concat(t),
                              label: (0, i.jsx)(h, {
                                  categoryId: t,
                                  count: n
                              })
                          };
                      }),
            [l]
        );
    return null == l
        ? null
        : (0, i.jsxs)('div', {
              className: E.container,
              children: [
                  (0, i.jsx)(s.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-secondary',
                      children: _.Z.Messages.GLOBAL_DISCOVERY_SHOW
                  }),
                  (0, i.jsx)(r.Z, {
                      className: E.filter,
                      items: p,
                      title: m,
                      onSelect: I,
                      selected: ''.concat(n),
                      'aria-label': _.Z.Messages.GLOBAL_DISCOVERY_SERVERS_LANGUAGE_FILTER
                  })
              ]
          });
}
