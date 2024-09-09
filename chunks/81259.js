s.d(t, {
    Z: function () {
        return g;
    }
}),
    s(627341);
var n = s(735250);
s(470079);
var i = s(120356),
    a = s.n(i),
    r = s(278074),
    o = s(692547),
    l = s(481060),
    u = s(551556),
    c = s(740080);
let d = () =>
        (0, n.jsx)(u.Z, {
            width: 13,
            height: 13,
            backgroundColor: o.Z.colors.TEXT_POSITIVE.css
        }),
    E = () =>
        (0, n.jsx)(l.CircleXIcon, {
            size: 'custom',
            width: 13,
            height: 13,
            color: o.Z.colors.TEXT_DANGER.css
        }),
    _ = () =>
        (0, n.jsx)(l.CircleXIcon, {
            size: 'custom',
            width: 13,
            height: 13,
            color: o.Z.colors.TEXT_WARNING.css
        });
function g(e) {
    let t = (0, r.EQ)(e.type)
        .with('info', () => (0, n.jsx)(_, {}))
        .with('error', () => (0, n.jsx)(E, {}))
        .with('success', () => (0, n.jsx)(d, {}))
        .otherwise(() => null);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            t,
            (0, n.jsx)(l.Text, {
                variant: 'text-sm/medium',
                className: a()(c.formMessage, {
                    [c.formMessageNegative]: 'error' === e.type,
                    [c.formMessagePositive]: 'success' === e.type
                }),
                children: e.children
            })
        ]
    });
}
