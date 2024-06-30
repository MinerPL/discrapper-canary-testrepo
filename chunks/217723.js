o.r(t), o.d(t, {
    default: function () {
        return c;
    }
}), o(47120);
var a = o(735250), s = o(470079), l = o(481060), n = o(153124), i = o(689938), d = o(6464);
function c(e) {
    let {
            transitionState: t,
            onConfirm: o,
            onClose: c,
            onDismiss: r
        } = e, [u, h] = s.useState(!1), m = (0, n.Dt)(), C = async () => {
            if (!u) {
                h(!0);
                try {
                    await o();
                } catch (e) {
                } finally {
                    h(!1);
                }
                c();
            }
        };
    return (0, a.jsxs)(l.ModalRoot, {
        transitionState: t,
        'aria-labelledby': m,
        size: l.ModalSize.SMALL,
        children: [
            (0, a.jsxs)(l.ModalContent, {
                children: [
                    (0, a.jsx)(l.ModalCloseButton, {
                        onClick: () => {
                            r(), c();
                        },
                        className: d.closeButton
                    }),
                    (0, a.jsx)(l.Heading, {
                        id: m,
                        variant: 'heading-lg/extrabold',
                        color: 'header-primary',
                        className: d.modalTitle,
                        children: i.Z.Messages.MESSAGE_REQUEST_ACCEPT_CONFIRMATION_TITLE
                    }),
                    (0, a.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: d.modalBody,
                        children: i.Z.Messages.MESSAGE_REQUEST_ACCEPT_CONFIRMATION_BODY
                    })
                ]
            }),
            (0, a.jsx)(l.ModalFooter, {
                children: (0, a.jsx)(l.Button, {
                    type: 'submit',
                    color: l.Button.Colors.BRAND,
                    onClick: C,
                    submitting: u,
                    children: i.Z.Messages.CONFIRM
                })
            })
        ]
    });
}
