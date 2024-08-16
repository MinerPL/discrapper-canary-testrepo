t(47120), t(411104);
var s = t(735250),
    n = t(470079),
    l = t(160612),
    r = t(780384),
    o = t(481060),
    i = t(410030),
    c = t(231338),
    u = t(689938),
    d = t(885660),
    E = t(744481),
    A = t(724641),
    N = t(811974),
    m = t(212545),
    _ = t(184229),
    p = t(504309);
a.Z = function (e) {
    let a = (0, i.ZP)(),
        t = n.useRef(null),
        [h, T] = n.useState({});
    switch (
        (n.useLayoutEffect(() => {
            let { current: e } = t;
            if (null == e) return;
            let a = window.getComputedStyle(e),
                s = window.getComputedStyle(e, '::placeholder'),
                n = a.getPropertyValue('font-family'),
                l = a.getPropertyValue('font-weight'),
                r = a.getPropertyValue('color'),
                o = a.getPropertyValue('font-size');
            T({
                base: {
                    fontFamily: n,
                    fontWeight: l,
                    color: r,
                    fontSize: o,
                    backgroundColor: a.getPropertyValue('background-color'),
                    padding: '12px',
                    '::placeholder': { color: s.getPropertyValue('color') }
                }
            });
        }, [t]),
        e.type)
    ) {
        case c.He.PRZELEWY24: {
            let n = (0, r.wj)(a) ? _ : p,
                { onNameChange: i, onEmailChange: c, onP24BankChange: E, p24BankValue: A, billingAddressInfo: N } = e;
            return (0, s.jsxs)('div', {
                className: d.body,
                children: [
                    (0, s.jsx)(o.FormSection, {
                        title: u.Z.Messages.EMAIL,
                        children: (0, s.jsx)(o.TextInput, {
                            inputRef: t,
                            name: u.Z.Messages.EMAIL,
                            placeholder: u.Z.Messages.EMAIL,
                            onChange: (e) => c(e),
                            value: N.email
                        })
                    }),
                    (0, s.jsx)(o.FormSection, {
                        className: d.nonTopInputWrapper,
                        title: u.Z.Messages.CREDIT_CARD_NAME,
                        children: (0, s.jsx)(o.TextInput, {
                            name: u.Z.Messages.CREDIT_CARD_NAME,
                            placeholder: u.Z.Messages.CREDIT_CARD_NAME,
                            onChange: (e) => i(e),
                            value: N.name
                        })
                    }),
                    (0, s.jsxs)(o.FormSection, {
                        className: d.nonTopInputWrapper,
                        title: u.Z.Messages.PAYMENT_SOURCE_PRZELEWY24_BANK_LABEL,
                        children: [
                            (0, s.jsx)(l.P24BankElement, {
                                options: {
                                    value: A,
                                    style: h
                                },
                                onChange: (e) => E(e.value)
                            }),
                            (0, s.jsx)('div', {
                                className: d.bankSelectionStub,
                                children: (0, s.jsx)('img', {
                                    src: n,
                                    alt: 'Przelewy24'
                                })
                            })
                        ]
                    })
                ]
            });
        }
        case c.He.EPS: {
            let { onAccountHolderNameChange: n, onEPSBankChange: i, epsBankValue: c, billingAddressInfo: N } = e,
                m = (0, r.wj)(a) ? E : A;
            return (0, s.jsxs)('div', {
                className: d.body,
                children: [
                    (0, s.jsx)(o.FormSection, {
                        title: u.Z.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
                        children: (0, s.jsx)(o.TextInput, {
                            inputRef: t,
                            name: u.Z.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
                            placeholder: u.Z.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
                            onChange: (e) => n(e),
                            value: N.name
                        })
                    }),
                    (0, s.jsxs)(o.FormSection, {
                        className: d.nonTopInputWrapper,
                        title: u.Z.Messages.PAYMENT_SOURCE_EPS_BANK_LABEL,
                        children: [
                            (0, s.jsx)(l.EpsBankElement, {
                                options: {
                                    value: c,
                                    style: h
                                },
                                onChange: (e) => i(e.value)
                            }),
                            (0, s.jsx)('div', {
                                className: d.bankSelectionStub,
                                children: (0, s.jsx)('img', {
                                    src: m,
                                    alt: 'EPS'
                                })
                            })
                        ]
                    })
                ]
            });
        }
        case c.He.IDEAL: {
            let { onAccountHolderNameChange: n, onIdealBankChange: i, idealBankValue: c, billingAddressInfo: E } = e,
                A = (0, r.wj)(a) ? N : m;
            return (0, s.jsxs)('div', {
                className: d.body,
                children: [
                    (0, s.jsx)(o.FormSection, {
                        title: u.Z.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
                        children: (0, s.jsx)(o.TextInput, {
                            inputRef: t,
                            name: u.Z.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
                            placeholder: u.Z.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
                            onChange: (e) => n(e),
                            value: E.name
                        })
                    }),
                    (0, s.jsxs)(o.FormSection, {
                        className: d.nonTopInputWrapper,
                        title: u.Z.Messages.PAYMENT_SOURCE_IDEAL_BANK_LABEL,
                        children: [
                            (0, s.jsx)(l.IdealBankElement, {
                                options: {
                                    value: c,
                                    style: h
                                },
                                onChange: (e) => i(e.value)
                            }),
                            (0, s.jsx)('div', {
                                className: d.bankSelectionStub,
                                children: (0, s.jsx)('img', {
                                    src: A,
                                    alt: 'iDeal'
                                })
                            })
                        ]
                    })
                ]
            });
        }
        default:
            throw Error('unknown payment source type');
    }
};
