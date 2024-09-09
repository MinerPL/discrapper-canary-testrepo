var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(514361),
    d = n(17845),
    u = n(89866);
t.Z = a.forwardRef(function (e, t) {
    let { title: n, description: a, onScroll: s, button: _, bannerClassName: E, bannerBackground: h, children: m } = e,
        I = (0, l.e7)([c.Z], () => null != c.Z.gradientPreset);
    return (0, i.jsxs)(o.AdvancedScroller, {
        onScroll: s,
        className: r()(u.container, { [u.clientThemes]: I }),
        ref: t,
        children: [
            (0, i.jsx)(d.Z, {
                title: n,
                description: a,
                button: _,
                className: E,
                background: h
            }),
            (0, i.jsx)('section', {
                className: r()(u.contentContainer, { [u.clientThemes]: I }),
                children: (0, i.jsx)('div', {
                    className: u.content,
                    children: m
                })
            })
        ]
    });
});
