n.d(t, {
    K: function () {
        return c;
    }
}),
    n(724458),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(803997),
    s = n.n(a),
    o = n(530892),
    l = n.n(o),
    u = n(534493);
let c = i.forwardRef(function (e, t) {
        let { as: n = 'div', gap: i = 8, direction: a = 'vertical', align: o = 'stretch', justify: l = 'start', padding: c = 0, style: _, className: h, children: p, ...m } = e;
        return (0, r.jsx)(n, {
            ref: t,
            'data-align': o,
            'data-justify': l,
            'data-direction': a,
            className: s()(u.stack, h),
            style: {
                ..._,
                gap: d(i),
                ...f(c)
            },
            ...m,
            children: p
        });
    }),
    d = (e) => 'var(--space-'.concat(e, ')'),
    f = (e) =>
        'number' == typeof e || 'string' == typeof e
            ? { padding: d(e) }
            : Object.entries(e).reduce((e, t) => {
                  let [n, r] = t;
                  return (e['padding'.concat(l()(n))] = d(r)), e;
              }, {});
