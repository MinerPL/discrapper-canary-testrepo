t.d(s, {
    H: function () {
        return u;
    },
    U: function () {
        return S;
    }
});
var n = t(735250);
t(470079);
var a = t(120356),
    i = t.n(a),
    r = t(481060),
    o = t(921801),
    l = t(3957),
    c = t(279743),
    d = t(81138),
    _ = t(5718);
function u(e) {
    let { header: s, description: t, relatedId: a, disabled: o } = e;
    return (0, n.jsxs)('div', {
        className: _.header,
        children: [
            (0, n.jsx)(r.Heading, {
                variant: 'text-md/medium',
                color: 'header-primary',
                children: (0, n.jsx)('label', {
                    htmlFor: a,
                    className: i()(_.title, { [_.disabled]: o }),
                    children: s
                })
            }),
            (0, n.jsx)(r.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                className: i()(_.description, { [_.disabled]: o }),
                children: t
            })
        ]
    });
}
function E(e) {
    let { setting: s, className: t, children: a } = e;
    return (0, n.jsx)(o.F, {
        setting: s,
        children: (0, n.jsx)('div', {
            className: i()(_.container, t),
            children: a
        })
    });
}
function T(e) {
    let { setting: s, className: t, children: a, scrollPosition: r, scrollHighlightDelay: u } = e,
        E = (0, l.a)(r);
    return (0, n.jsx)(o.F, {
        setting: s,
        children: (0, n.jsxs)('div', {
            className: i()(_.container, t, { [d.settingsBackgroundFlashElement]: null != r }),
            ref: E,
            children: [
                a,
                null != r
                    ? (0, n.jsx)(c.Z, {
                          animationDelay: u,
                          scrollPosition: r
                      })
                    : null
            ]
        })
    });
}
function S(e) {
    return null != e.scrollPosition ? (0, n.jsx)(T, { ...e }) : (0, n.jsx)(E, { ...e });
}
