n.d(t, {
    R: function () {
        return i;
    },
    v: function () {
        return c;
    }
});
var r,
    i,
    a = n(200651);
n(192379);
var s = n(120356),
    o = n.n(s),
    l = n(481060),
    u = n(326460);
function c(e) {
    let t,
        { tag: n = 'h5', children: r, className: i, faded: s, disabled: c, required: d = !1, error: f, errorId: _, ...h } = e;
    switch (n) {
        case 'legend':
        case 'label':
            t = n;
            break;
        default:
            t = l.H;
    }
    return (0, a.jsxs)(t, {
        className: o()(u[n], 'h5' !== n ? u.defaultColor : null, i, {
            [u['defaultMargin'.concat(n)]]: null == i,
            [u.faded]: s,
            [u.disabled]: c,
            [u.error]: null != f
        }),
        ...h,
        children: [
            r,
            d && null == f
                ? (0, a.jsx)('span', {
                      className: u.required,
                      children: '*'
                  })
                : null,
            null != f
                ? (0, a.jsxs)('span', {
                      id: _,
                      className: u.errorMessage,
                      children: [
                          null != r
                              ? (0, a.jsx)('span', {
                                    className: u.errorSeparator,
                                    children: '-'
                                })
                              : null,
                          f
                      ]
                  })
                : null
        ]
    });
}
((r = i || (i = {})).H1 = 'h1'), (r.H2 = 'h2'), (r.H3 = 'h3'), (r.H4 = 'h4'), (r.H5 = 'h5'), (r.LABEL = 'label'), (r.LEGEND = 'legend');
