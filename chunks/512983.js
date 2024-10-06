n.d(t, {
    R: function () {
        return i;
    },
    v: function () {
        return d;
    }
});
var r,
    i,
    a = n(735250);
n(470079);
var s = n(120356),
    o = n.n(s),
    l = n(481060),
    u = n(15127),
    c = n(326460);
function d(e) {
    let t,
        { tag: n = 'h5', children: r, className: i, faded: s, disabled: d, required: _ = !1, error: E, errorId: f, ...h } = e,
        { isFocused: p, hasValue: I } = (0, u.Gc)();
    switch (n) {
        case 'legend':
        case 'label':
            t = n;
            break;
        default:
            t = l.H;
    }
    return (0, a.jsxs)(t, {
        className: o()(c[n], 'h5' !== n ? c.defaultColor : null, i, {
            [c['defaultMargin'.concat(n)]]: null == i,
            [c.faded]: s,
            [c.disabled]: d,
            [c.error]: null != E,
            [c.floatingAbove]: p || I,
            [c.floatingOn]: !1 === p && !1 === I
        }),
        ...h,
        children: [
            r,
            _ && null == E
                ? (0, a.jsx)('span', {
                      className: c.required,
                      children: '*'
                  })
                : null,
            null != E
                ? (0, a.jsxs)('span', {
                      id: f,
                      className: c.errorMessage,
                      children: [
                          null != r
                              ? (0, a.jsx)('span', {
                                    className: c.errorSeparator,
                                    children: '-'
                                })
                              : null,
                          E
                      ]
                  })
                : null
        ]
    });
}
((r = i || (i = {})).H1 = 'h1'), (r.H2 = 'h2'), (r.H3 = 'h3'), (r.H4 = 'h4'), (r.H5 = 'h5'), (r.LABEL = 'label'), (r.LEGEND = 'legend');
