t.d(n, {
    Z: function () {
        return d;
    }
});
var i = t(735250), l = t(470079), a = t(120356), r = t.n(a), s = t(442837), o = t(481060), c = t(607070), u = t(782915);
function d() {
    let e = (0, s.e7)([c.Z], () => c.Z.useReducedMotion), {
            styleLarge: n,
            styleSmall: t
        } = l.useMemo(() => ({
            styleLarge: { width: ''.concat(10 + 50 * Math.random(), '%') },
            styleSmall: { width: ''.concat(30 + 60 * Math.random(), '%') }
        }), []);
    return (0, i.jsxs)('div', {
        className: r()(u.container, { [u.noAnimation]: e }),
        children: [
            (0, i.jsx)('div', { className: u.iconPlaceholder }),
            (0, i.jsxs)('div', {
                className: u.textContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: u.textPlaceholder,
                        style: n,
                        children: (0, i.jsx)(o.Heading, {
                            className: u.hidden,
                            variant: 'heading-md/semibold',
                            color: 'header-primary',
                            lineClamp: 1,
                            children: '_'
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: u.textPlaceholder,
                        style: t,
                        children: (0, i.jsx)(o.Text, {
                            className: u.hidden,
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            lineClamp: 1,
                            children: '_'
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', { className: u.underline })
        ]
    });
}
