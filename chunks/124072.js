n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(866442),
    l = n(481060),
    u = n(779699),
    c = n(289438);
t.Z = (e) => {
    let { children: t, className: n, color: a, iconType: d, onMouseEnter: _, onMouseLeave: E, ...f } = e,
        [h, p] = i.useState(!1),
        m = i.useCallback(
            (e) => {
                p(!0), null == _ || _(e);
            },
            [p, _]
        ),
        I = i.useCallback(
            (e) => {
                p(!1), null == E || E(e);
            },
            [p, E]
        ),
        T = {};
    return (
        null != a &&
            (T = {
                color: (0, o.Rf)(a),
                backgroundColor: h ? (0, o.br)(a, 0.3) : (0, o.br)(a, 0.1)
            }),
        (0, r.jsx)(l.Clickable, {
            ...f,
            tag: 'span',
            className: s()(n, {
                [c.wrapper]: !0,
                interactive: f.onClick
            }),
            onMouseEnter: m,
            onMouseLeave: I,
            style: T,
            tabIndex: null != f.onClick ? 0 : -1,
            children:
                null != d
                    ? (0, r.jsx)(u.Z, {
                          iconType: d,
                          children: t
                      })
                    : t
        })
    );
};
