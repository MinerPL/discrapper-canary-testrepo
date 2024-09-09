n.d(s, {
    Z: function () {
        return r;
    }
});
var t = n(735250);
n(470079);
var o = n(481060),
    a = n(689938),
    l = n(120455);
function r(e) {
    let { email: s, onClose: n } = e;
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(o.ModalHeader, {
                separator: !1,
                className: l.header,
                children: [
                    (0, t.jsx)(o.Heading, {
                        className: l.title,
                        variant: 'heading-xl/semibold',
                        children: a.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_COMPLETE_TITLE
                    }),
                    (0, t.jsx)(o.ModalCloseButton, {
                        onClick: n,
                        className: l.modalCloseButton
                    })
                ]
            }),
            (0, t.jsx)(o.ModalContent, {
                className: l.content,
                children: (0, t.jsx)(o.Text, {
                    className: l.description,
                    variant: 'text-md/normal',
                    children: a.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_COMPLETE_DESCRIPTION.format({ email: s })
                })
            }),
            (0, t.jsx)(o.ModalContent, {
                className: l.content,
                children: (0, t.jsx)(o.Text, {
                    className: l.tooltip,
                    variant: 'text-sm/normal',
                    children: a.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CHECK_SPAM
                })
            }),
            (0, t.jsx)(o.ModalFooter, {
                className: l.modalFooter,
                children: (0, t.jsx)(o.Button, {
                    className: l.__invalid_submit,
                    color: o.Button.Colors.BRAND,
                    size: o.Button.Sizes.MEDIUM,
                    onClick: n,
                    children: a.Z.Messages.OKAY
                })
            })
        ]
    });
}
