n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var a = n(481060), s = n(499033), l = n(689938), r = n(930960);
function o(e) {
    let {
        Icon: t,
        header: n,
        tip: o,
        disableStars: c
    } = e;
    return (0, i.jsxs)('div', {
        className: r.container,
        children: [
            (0, i.jsxs)('div', {
                className: r.iconContainer,
                children: [
                    (0, i.jsx)(t, {
                        color: 'currentColor',
                        size: 'custom',
                        className: r.icon,
                        width: 36,
                        height: 36
                    }),
                    c ? null : (0, i.jsx)(s.Z, { className: r.stars })
                ]
            }),
            (0, i.jsx)(a.Heading, {
                className: r.header,
                variant: 'heading-xl/semibold',
                children: n
            }),
            (0, i.jsxs)(a.Text, {
                color: 'header-secondary',
                variant: 'text-xs/normal',
                children: [
                    c ? null : (0, i.jsxs)(a.Text, {
                        tag: 'span',
                        className: r.protip,
                        variant: 'text-xs/bold',
                        color: 'text-positive',
                        children: [
                            l.Z.Messages.FORM_LABEL_ROLES_PRO_TIP,
                            ':',
                            ' '
                        ]
                    }),
                    o
                ]
            })
        ]
    });
}
