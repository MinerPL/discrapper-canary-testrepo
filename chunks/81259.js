a.d(t, {
    Z: function () {
        return m;
    }
}),
    a(627341);
var n = a(735250);
a(470079);
var s = a(120356),
    i = a.n(s),
    r = a(278074),
    o = a(692547),
    l = a(481060),
    u = a(551556),
    d = a(740080);
let c = () =>
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
function m(e) {
    let t = (0, r.EQ)(e.type)
        .with('info', () => (0, n.jsx)(_, {}))
        .with('error', () => (0, n.jsx)(E, {}))
        .with('success', () => (0, n.jsx)(c, {}))
        .otherwise(() => null);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            t,
            (0, n.jsx)(l.Text, {
                variant: 'text-sm/medium',
                className: i()(d.formMessage, {
                    [d.formMessageNegative]: 'error' === e.type,
                    [d.formMessagePositive]: 'success' === e.type
                }),
                children: e.children
            })
        ]
    });
}
