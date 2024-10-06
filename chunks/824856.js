t.d(s, {
    Z: function () {
        return I;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(561537),
    l = t(269210),
    c = t(481060),
    d = t(58385),
    _ = t(889989),
    u = t(937615),
    E = t(624138),
    T = t(150414),
    S = t(319978);
function I(e) {
    let { cta: s, storeListing: t, className: i } = e,
        { applicationId: I, benefits: N, description: A } = t,
        C = a.useMemo(() => (null == t.thumbnail ? null : (0, T.q)(I, t.thumbnail, 256)), [I, t.thumbnail]),
        { data: m } = (0, d.X)(t.skuId),
        g = a.useMemo(() => {
            if (null == m || 0 === m.length) return null;
            let e = m[0];
            return (0, u.xg)(e);
        }, [m]);
    return null == g
        ? null
        : (0, n.jsxs)(o.l, {
              className: r()(S.wrapper, i),
              header: (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsxs)('div', {
                          className: S.headerTitle,
                          children: [
                              null != C &&
                                  (0, n.jsx)(c.Image, {
                                      src: C.href,
                                      imageClassName: S.subscriptionImg,
                                      width: 48,
                                      height: 48
                                  }),
                              (0, n.jsxs)('div', {
                                  children: [
                                      (0, n.jsx)(c.Heading, {
                                          variant: 'heading-md/bold',
                                          children: t.summary
                                      }),
                                      (0, n.jsx)(c.Text, {
                                          variant: 'text-md/medium',
                                          children: g
                                      })
                                  ]
                              })
                          ]
                      }),
                      s
                  ]
              }),
              children: [
                  !(0, E.Ew)(A) &&
                      (0, n.jsx)('div', {
                          className: S.description,
                          children: (0, n.jsx)(c.Text, {
                              variant: 'text-sm/medium',
                              children: A
                          })
                      }),
                  null != N &&
                      N.length > 0 &&
                      (0, n.jsx)('div', {
                          className: S.benefits,
                          children: N.map((e) => {
                              let { id: s, name: t, description: a, icon: i } = e;
                              return (0, n.jsx)(
                                  l.G,
                                  {
                                      name: t,
                                      icon: (0, _.n)(I, i),
                                      description: a
                                  },
                                  s
                              );
                          })
                      })
              ]
          });
}
