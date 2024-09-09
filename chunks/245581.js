r.d(t, {
    Z: function () {
        return l;
    }
});
var n = r(735250);
r(470079);
var i = r(481060),
    o = r(313201),
    a = r(756843);
function l(e) {
    let { transitionState: t, title: r, subtitle: l, children: u } = e,
        c = (0, o.Dt)();
    return (0, n.jsxs)(i.ModalRoot, {
        transitionState: t,
        'aria-labelledby': c,
        children: [
            (0, n.jsx)('div', {
                className: a.shieldIconContainer,
                children: (0, n.jsx)('div', {
                    className: a.shieldIcon,
                    children: (0, n.jsx)(i.ShieldLockIcon, {
                        size: 'custom',
                        width: 55,
                        height: 55,
                        color: i.tokens.colors.HEADER_SECONDARY
                    })
                })
            }),
            (0, n.jsxs)(i.ModalContent, {
                className: a.content,
                children: [
                    (0, n.jsx)(i.Heading, {
                        className: a.title,
                        variant: 'heading-lg/bold',
                        color: 'header-primary',
                        children: r
                    }),
                    (0, n.jsx)(i.Text, {
                        className: a.subtitle,
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: l
                    }),
                    u
                ]
            })
        ]
    });
}
