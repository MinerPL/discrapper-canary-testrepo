s.d(n, {
    C: function () {
        return c;
    },
    N: function () {
        return o;
    }
});
var l = s(735250);
s(470079);
var i = s(481060), t = s(285952), r = s(689938), a = s(162950);
let c = e => {
        let {
            className: n,
            isEmailResent: s,
            resendEmail: t
        } = e;
        return (0, l.jsx)('div', {
            className: n,
            children: (0, l.jsxs)('div', {
                className: a.awaitingWrapper,
                children: [
                    (0, l.jsx)(i.Heading, {
                        variant: 'heading-xl/bold',
                        children: r.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_HEADER
                    }),
                    (0, l.jsxs)('p', {
                        children: [
                            (0, l.jsx)(i.Text, {
                                variant: 'text-md/normal',
                                children: r.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL
                            }),
                            (0, l.jsx)('br', {}),
                            (0, l.jsx)(i.Text, {
                                variant: 'text-md/normal',
                                children: r.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_INSTRUCTIONS
                            }),
                            (0, l.jsx)('br', {}),
                            (0, l.jsxs)(i.Text, {
                                variant: 'text-md/normal',
                                children: [
                                    r.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_PROMPT,
                                    '\xA0',
                                    s ? r.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_SENT : (0, l.jsx)(i.Anchor, {
                                        onClick: t,
                                        children: r.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_ACTION
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        });
    }, o = () => (0, l.jsx)('div', {
        children: (0, l.jsx)(i.ModalFooter, {
            justify: t.Z.Justify.BETWEEN,
            align: t.Z.Align.CENTER,
            children: (0, l.jsx)(i.Button, {
                'data-testid': 'continue',
                color: i.Button.Colors.BRAND,
                disabled: !0,
                children: r.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_NEXT_BUTTON
            })
        })
    });
