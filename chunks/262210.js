n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(429551),
    s = n(939854);
function o(e) {
    let { start: t, end: n } = e,
        {
            elapsed: o,
            duration: l,
            percentage: u
        } = (0, a.Z)({
            start: t,
            end: n
        });
    return (0, r.jsxs)('div', {
        className: s.container,
        children: [
            (0, r.jsx)(i.Text, {
                variant: 'text-xs/normal',
                color: 'text-normal',
                className: s.text,
                children: (0, a.m)(o)
            }),
            (0, r.jsx)('div', {
                className: s.bar,
                children: (0, r.jsx)('div', {
                    className: s.progress,
                    style: { width: ''.concat(100 * u, '%') }
                })
            }),
            (0, r.jsx)(i.Text, {
                variant: 'text-xs/normal',
                color: 'text-normal',
                className: s.text,
                children: (0, a.m)(l)
            })
        ]
    });
}
