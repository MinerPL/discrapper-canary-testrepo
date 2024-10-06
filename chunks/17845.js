n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(780384),
    o = n(481060),
    c = n(410030),
    d = n(61118);
function u(e) {
    let { title: t } = e;
    return (0, i.jsx)(o.Heading, {
        className: r()(d.title, d.uppercase),
        variant: 'display-lg',
        color: 'header-primary',
        children: t
    });
}
function _(e) {
    let { title: t, description: n, button: s, className: _, children: E } = e,
        h = (0, c.ZP)(),
        m = (0, l.wj)(h),
        I = a.useMemo(() => ('string' == typeof t ? (0, i.jsx)(u, { title: t }) : Array.isArray(t) && t.every((e) => 'string' == typeof e) ? t.map((e) => (0, i.jsx)(u, { title: e }, e)) : t), [t]);
    return (0, i.jsxs)('div', {
        className: r()(d.container, _),
        children: [
            (0, i.jsx)('div', {
                className: d.content,
                children: (0, i.jsxs)('div', {
                    className: d.textContainer,
                    children: [
                        I,
                        (0, i.jsx)(o.Text, {
                            className: d.description,
                            variant: 'text-md/medium',
                            color: m ? 'text-muted' : 'header-primary',
                            children: n
                        }),
                        null != s &&
                            (0, i.jsx)('div', {
                                className: d.buttonContainer,
                                children: s
                            })
                    ]
                })
            }),
            E
        ]
    });
}
