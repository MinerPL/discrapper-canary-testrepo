n.d(t, {
    C: function () {
        return d;
    }
});
var a = n(735250);
n(470079);
var r = n(481060),
    s = n(600164),
    o = n(424071),
    l = n(689938),
    c = n(879137),
    i = n(387852);
function d(e) {
    let { onContinue: t, onClose: n, title: d, body: u } = e;
    return (0, a.jsxs)(o.Z, {
        children: [
            (0, a.jsxs)(r.ModalHeader, {
                direction: s.Z.Direction.VERTICAL,
                className: c.header,
                separator: !1,
                children: [
                    (0, a.jsx)('img', {
                        src: i,
                        className: c.illustration,
                        width: '254',
                        height: '127',
                        alt: ''
                    }),
                    (0, a.jsx)(r.Heading, {
                        className: c.title,
                        variant: 'heading-xl/extrabold',
                        children: d
                    }),
                    null != n &&
                        (0, a.jsx)(r.ModalCloseButton, {
                            className: c.closeButton,
                            onClick: n
                        })
                ]
            }),
            (0, a.jsx)(r.ModalContent, {
                className: c.body,
                paddingFix: !1,
                children: (0, a.jsx)(r.Text, {
                    tag: 'p',
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: u
                })
            }),
            (0, a.jsx)(r.ModalFooter, {
                className: c.footer,
                children: (0, a.jsxs)(r.Button, {
                    className: c.footerButton,
                    color: r.Button.Colors.BRAND,
                    onClick: t,
                    children: [
                        l.Z.Messages.TRY_AGAIN,
                        (0, a.jsx)(r.WindowLaunchIcon, {
                            color: 'currentColor',
                            className: c.launchIcon,
                            size: 'xs'
                        })
                    ]
                })
            })
        ]
    });
}
