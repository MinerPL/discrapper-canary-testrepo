n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(481060),
    l = n(388905),
    o = n(661824),
    c = n(720196),
    u = n(981631),
    d = n(388032),
    h = n(340214),
    g = n(113207);
function f(e) {
    let { children: t } = e;
    return (0, i.jsx)('li', {
        className: h.listItem,
        children: (0, i.jsx)(a.Text, {
            variant: 'text-sm/medium',
            color: 'text-normal',
            children: t
        })
    });
}
function m(e) {
    let { setSlide: t, transitionTo: r } = e;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(l.Ee, {
                src: n(26230),
                className: s()(g.marginBottom20, g.marginTop8)
            }),
            (0, i.jsx)(l.Dx, {
                className: g.marginBottom8,
                children: d.intl.string(d.t['8UcxIy'])
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-md/normal',
                children: d.intl.string(d.t.O37hMj)
            }),
            (0, i.jsxs)(l.gO, {
                className: s()(g.marginBottom20, g.marginTop20),
                children: [
                    (0, i.jsx)(a.Text, { variant: 'text-sm/normal' }),
                    (0, i.jsxs)('ul', {
                        className: h.listContainer,
                        children: [(0, i.jsx)(f, { children: d.intl.string(d.t.Gj1Zr6) }), (0, i.jsx)(o.Z, {}), (0, i.jsx)(f, { children: d.intl.string(d.t['8C6t3N']) }), (0, i.jsx)(o.Z, {}), (0, i.jsx)(f, { children: d.intl.string(d.t.mToZMD) }), (0, i.jsx)(o.Z, {}), (0, i.jsx)(f, { children: d.intl.string(d.t.TPEvkZ) }), (0, i.jsx)(o.Z, {}), (0, i.jsx)(f, { children: d.intl.string(d.t.H8Y1Li) })]
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: h.buttonContainer,
                children: [
                    (0, i.jsx)(l.zx, {
                        onClick: () => t(c.n.PASSWORD),
                        children: d.intl.string(d.t.GgCRqa)
                    }),
                    (0, i.jsx)(l.zx, {
                        color: l.zx.Colors.PRIMARY,
                        onClick: () => r(u.Z5c.LOGIN),
                        children: d.intl.string(d.t['B/yHcX'])
                    })
                ]
            })
        ]
    });
}
