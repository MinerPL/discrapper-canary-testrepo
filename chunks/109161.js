n.d(t, {
    F: function () {
        return u;
    },
    x: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(981729),
    o = n(942313);
function l(e) {
    let { color: t, className: n, background: i = !0 } = e;
    return null == t
        ? null
        : (0, r.jsxs)('svg', {
              className: a()(o.svg, n),
              viewBox: '0 0 20 20',
              fill: 'none',
              children: [
                  i &&
                      (0, r.jsx)('path', {
                          className: o.background,
                          d: 'M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z'
                      }),
                  (0, r.jsx)('circle', {
                      className: o.dotBorderBase,
                      cx: '10',
                      cy: '10',
                      r: '6'
                  }),
                  (0, r.jsx)('circle', {
                      className: o.dotBorderColor,
                      cx: '10',
                      cy: '10',
                      r: '6',
                      fill: t
                  }),
                  (0, r.jsx)('circle', {
                      className: o.dot,
                      cx: '10',
                      cy: '10',
                      r: '5',
                      fill: t
                  })
              ]
          });
}
function u(e) {
    let { color: t, name: n, tooltip: i = !0 } = e;
    return null == t
        ? null
        : i
          ? (0, r.jsx)(s.u, {
                text: n,
                children: (t) =>
                    (0, r.jsx)('span', {
                        ...t,
                        'aria-hidden': !0,
                        children: (0, r.jsx)(l, { ...e })
                    })
            })
          : (0, r.jsx)(l, { ...e });
}
function c(e) {
    let { color: t, className: n } = e;
    return null == t
        ? null
        : (0, r.jsx)('span', {
              className: a()(o.roleCircle, n),
              style: { backgroundColor: t }
          });
}
