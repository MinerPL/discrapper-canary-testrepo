n.d(t, {
    L: function () {
        return i;
    }
});
var a = n(735250);
n(470079);
var r = n(481060),
    s = n(600164),
    o = n(424071),
    l = n(689938),
    c = n(879137);
function i(e) {
    let { onClose: t, img: n, title: i, body: d, content: u } = e;
    return (0, a.jsxs)(o.Z, {
        children: [
            (0, a.jsxs)(r.ModalHeader, {
                direction: s.Z.Direction.VERTICAL,
                className: c.header,
                separator: !1,
                children: [
                    (0, a.jsx)('div', {
                        className: c.illustration,
                        children: n
                    }),
                    (0, a.jsx)(r.Heading, {
                        className: c.title,
                        variant: 'heading-xl/extrabold',
                        children: i
                    }),
                    (0, a.jsx)(r.ModalCloseButton, {
                        className: c.closeButton,
                        onClick: t
                    })
                ]
            }),
            (0, a.jsxs)(r.ModalContent, {
                className: c.body,
                paddingFix: !1,
                children: [
                    (0, a.jsx)(r.Text, {
                        tag: 'p',
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: d
                    }),
                    u
                ]
            }),
            (0, a.jsx)(r.ModalFooter, {
                className: c.footer,
                children: (0, a.jsx)(r.Button, {
                    className: c.footerButton,
                    color: r.Button.Colors.BRAND,
                    onClick: t,
                    children: l.Z.Messages.DONE
                })
            })
        ]
    });
}
