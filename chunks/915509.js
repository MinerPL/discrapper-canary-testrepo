a.d(n, {
    Z: function () {
        return u;
    }
}), a(47120);
var t = a(735250), l = a(470079), r = a(120356), o = a.n(r), s = a(481060), i = a(153124), c = a(689938), d = a(370350);
function u(e) {
    let {
            errorText: n,
            title: a,
            description: r,
            transitionState: u,
            onCancel: f,
            onConfirm: m,
            children: I
        } = e, C = (0, i.Dt)(), [p, _] = l.useState(!1), E = l.useCallback(async () => {
            _(!0);
            try {
                await m();
            } catch (e) {
                throw e;
            } finally {
                _(!1);
            }
        }, [m]);
    return (0, t.jsxs)(s.ModalRoot, {
        className: d.modal,
        transitionState: u,
        'aria-labelledby': C,
        size: s.ModalSize.SMALL,
        children: [
            (0, t.jsxs)(s.ModalContent, {
                className: d.modalContent,
                children: [
                    (0, t.jsx)(s.Heading, {
                        variant: 'heading-md/semibold',
                        id: C,
                        children: a
                    }),
                    null != r && '' !== r ? (0, t.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        className: d.description,
                        children: r
                    }) : null,
                    (0, t.jsx)('div', {
                        className: d.body,
                        children: I
                    }),
                    null != n && '' !== n ? (0, t.jsx)(s.Text, {
                        className: d.errorText,
                        variant: 'text-xs/normal',
                        color: 'text-danger',
                        children: n
                    }) : null
                ]
            }),
            (0, t.jsxs)(s.ModalFooter, {
                children: [
                    (0, t.jsx)(s.Button, {
                        submitting: p,
                        className: d.button,
                        size: s.Button.Sizes.SMALL,
                        color: s.Button.Colors.BRAND,
                        onClick: E,
                        children: c.Z.Messages.SAVE
                    }),
                    (0, t.jsx)(s.Button, {
                        className: o()(d.cancelButton, d.button),
                        size: s.Button.Sizes.SMALL,
                        color: s.Button.Colors.PRIMARY,
                        onClick: f,
                        children: c.Z.Messages.CANCEL
                    })
                ]
            })
        ]
    });
}
