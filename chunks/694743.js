n.d(t, {
    E: function () {
        return f;
    }
});
var r,
    i,
    a = n(200651),
    s = n(192379),
    o = n(120356),
    l = n.n(o),
    u = n(692547),
    c = n(351533);
((r = i || (i = {})).XXSMALL = 'xxsmall'), (r.XSMALL = 'xsmall'), (r.SMALL = 'small'), (r.LARGE = 'large');
let d = 'indeterminate';
function f(e) {
    let t,
        { className: n, percent: r, size: i = 'small', foregroundColor: o = u.Z.unsafe_rawColors.BRAND_500.css, backgroundColor: f = 'var(--background-modifier-active)', foregroundGradientColor: _, animate: h = !0 } = e,
        p = null != r ? r : 0;
    return (
        (t = null != _ ? { background: 'linear-gradient(to right, '.concat(_[0], ', ').concat(_[1], ')') } : { backgroundColor: o }),
        (0, a.jsx)('div', {
            className: l()(n, c.progress, c[i]),
            style: { backgroundColor: f },
            children:
                p !== d && 'number' == typeof p
                    ? (0, a.jsx)('div', {
                          className: l()(c.progressBar, c[i], { [c.animating]: h }),
                          style: {
                              transform: 'translate3d('.concat(Math.min(Math.max(0, p), 100) - 100, '%, 0, 0)'),
                              ...t
                          }
                      })
                    : (0, a.jsxs)(s.Fragment, {
                          children: [
                              (0, a.jsx)('div', {
                                  className: l()(c.indeterminateBar1, c[i], { [c.animating]: h }),
                                  style: t
                              }),
                              (0, a.jsx)('div', {
                                  className: l()(c.indeterminateBar2, c[i], { [c.animating]: h }),
                                  style: t
                              })
                          ]
                      })
        })
    );
}
(f.Sizes = i), (f.INDETERMINATE = d);
