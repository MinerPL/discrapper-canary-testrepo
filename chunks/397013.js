a.r(t);
var o = a(735250);
a(470079);
var n = a(481060),
    s = a(313201),
    c = a(689938),
    l = a(979105);
t.default = (e) => {
    let { onClose: t } = e,
        a = (0, s.Dt)();
    return (0, o.jsxs)(n.ModalRoot, {
        ...e,
        'aria-labelledby': a,
        children: [
            (0, o.jsxs)(n.ModalHeader, {
                separator: !1,
                className: l.modalHeader,
                children: [
                    (0, o.jsx)(n.Heading, {
                        id: a,
                        variant: 'heading-xl/extrabold',
                        children: c.Z.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING
                    }),
                    (0, o.jsx)(n.ModalCloseButton, {
                        className: l.closeButton,
                        onClick: t
                    })
                ]
            }),
            (0, o.jsx)(n.ModalContent, {
                className: l.modalContent,
                children: (0, o.jsx)(n.Text, {
                    variant: 'text-md/normal',
                    className: l.contentText,
                    children: c.Z.Messages.LIMITED_ACCESS_INFO_MODAL_DESCRIPTION_V2
                })
            }),
            (0, o.jsx)(n.ModalFooter, {
                children: (0, o.jsx)(n.Button, {
                    className: l.button,
                    size: n.Button.Sizes.MIN,
                    onClick: t,
                    children: c.Z.Messages.OKAY
                })
            })
        ]
    });
};
