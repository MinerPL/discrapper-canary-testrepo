t.d(s, {
    Z: function () {
        return _;
    }
}), t(47120);
var n = t(735250), a = t(470079), o = t(442837), l = t(481060), r = t(479531), i = t(393869), d = t(594174), c = t(689938), u = t(579500);
function _(e) {
    let {
            onNext: s,
            onClose: t
        } = e, [_, E] = a.useState(!1), N = (0, o.e7)([d.default], () => d.default.getCurrentUser()), C = async e => {
            e.preventDefault(), E(!0);
            try {
                await (0, i.i)(), s();
            } catch (s) {
                let e = new r.Z(s).getAnyErrorMessage();
                null != e && (0, l.showToast)((0, l.createToast)(e, l.ToastType.FAILURE));
            } finally {
                E(!1);
            }
        };
    return (0, n.jsxs)('form', {
        onSubmit: C,
        children: [
            (0, n.jsxs)(l.ModalHeader, {
                separator: !1,
                className: u.header,
                children: [
                    (0, n.jsx)(l.Heading, {
                        className: u.title,
                        variant: 'heading-xl/extrabold',
                        children: c.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_TITLE
                    }),
                    (0, n.jsx)(l.ModalCloseButton, {
                        onClick: t,
                        className: u.modalCloseButton
                    })
                ]
            }),
            (0, n.jsx)(l.ModalContent, {
                className: u.content,
                children: (0, n.jsx)(l.Text, {
                    className: u.description,
                    variant: 'text-md/normal',
                    children: c.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_DESCRIPTION_NO_LINK.format({ oldEmail: null == N ? void 0 : N.email })
                })
            }),
            (0, n.jsxs)(l.ModalFooter, {
                className: u.modalFooter,
                children: [
                    (0, n.jsx)(l.Button, {
                        type: 'submit',
                        color: l.Button.Colors.BRAND,
                        size: l.Button.Sizes.MEDIUM,
                        submitting: _,
                        className: u.__invalid_submit,
                        children: c.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_BUTTON
                    }),
                    (0, n.jsx)(l.Button, {
                        className: u.__invalid_cancel,
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.PRIMARY,
                        onClick: t,
                        children: c.Z.Messages.CANCEL
                    })
                ]
            })
        ]
    });
}
