t(47120);
var n, r, s, l, o = t(735250), i = t(470079), c = t(160612), u = t(120356), d = t.n(u), E = t(481060), _ = t(818083), p = t(912454), m = t(689938), A = t(427522), N = t(838009);
(s = n || (n = {})).CardNumber = 'cardNumber', s.CardExpiry = 'cardExpiry', s.CardCvc = 'cardCvc', (l = r || (r = {})).Change = 'change', l.Focus = 'focus', l.Blur = 'blur';
let h = (0, _.B)({
    kind: 'user',
    id: '2024-05_enable_stripe_link_on_split_cardelement',
    label: 'Enable Stripe Link Experiment on Split CardElement',
    defaultConfig: { disableLink: !0 },
    treatments: [{
            id: 1,
            label: 'Enable Stripe Link',
            config: { disableLink: !1 }
        }]
});
a.Z = function (e) {
    let a = i.useRef(null), {
            stripeType: t,
            flipped: n,
            updateCompleted: r,
            onFocus: s,
            onBlur: l
        } = e, [u, _] = i.useState(p.Qy.UNKNOWN), [T, I] = i.useState(!1), [S, C] = i.useState(!1), [b, P] = i.useState(null), [R, f] = i.useState({}), y = (0, c.useElements)(), {disableLink: M} = h.useExperiment({ location: 'adding_new_card_modal' }, { autoTrackExposure: !0 }), g = i.useCallback(() => {
            if (null != y)
                switch (t) {
                case 'cardNumber': {
                        let e = y.getElement(c.CardNumberElement);
                        if (null == e)
                            return;
                        e.off('change'), e.off('focus'), e.off('blur');
                        break;
                    }
                case 'cardExpiry': {
                        let e = y.getElement(c.CardExpiryElement);
                        if (null == e)
                            return;
                        e.off('change'), e.off('focus'), e.off('blur');
                        break;
                    }
                case 'cardCvc': {
                        let e = y.getElement(c.CardCvcElement);
                        if (null == e)
                            return;
                        e.off('change'), e.off('focus'), e.off('blur');
                    }
                }
        }, [
            y,
            t
        ]), O = i.useCallback(e => {
            !S && !e.empty && C(!0), null != r && r(e.complete), null != e.error && I(!1);
        }, [
            S,
            r
        ]), L = i.useCallback(() => {
            I(!0), null == s || s();
        }, [s]), v = i.useCallback(() => {
            I(!1), null == l || l();
        }, [l]), D = i.useCallback(() => {
            if (null != y)
                switch (t) {
                case 'cardNumber': {
                        let e = y.getElement(c.CardNumberElement);
                        if (null == e)
                            return;
                        e.on('change', e => {
                            u !== e.brand && _(e.brand), e.empty && S ? P(m.Z.Messages.CREDIT_CARD_ERROR_REQUIRED) : null != e.error ? P(m.Z.Messages.CREDIT_CARD_ERROR_NUMBER) : P(null), O(e);
                        }), e.on('focus', L), e.on('blur', v);
                        break;
                    }
                case 'cardExpiry': {
                        let e = y.getElement(c.CardExpiryElement);
                        if (null == e)
                            return;
                        e.on('change', e => {
                            null != e.error || e.empty && S ? P(m.Z.Messages.CREDIT_CARD_ERROR_EXPIRATION) : P(null), O(e);
                        }), e.on('focus', L), e.on('blur', v);
                        break;
                    }
                case 'cardCvc': {
                        let e = y.getElement(c.CardCvcElement);
                        if (null == e)
                            return;
                        e.on('change', e => {
                            null != e.error || e.empty && S ? P(m.Z.Messages.CREDIT_CARD_ERROR_SECURITY_CODE) : P(null), O(e);
                        }), e.on('focus', L), e.on('blur', v);
                    }
                }
        }, [
            v,
            O,
            L,
            u,
            y,
            S,
            t
        ]);
    function x() {
        return d()(A.cardInput, {
            [A.cardInputError]: null !== b,
            [A.cardInputFocused]: T,
            [A.cardNumberInput]: 'cardNumber' === t
        });
    }
    return i.useEffect(() => (D(), () => {
        g();
    }), [
        D,
        g
    ]), i.useLayoutEffect(() => {
        let {current: e} = a;
        if (null == e)
            return;
        let t = window.getComputedStyle(e), n = window.getComputedStyle(e, '::placeholder'), r = t.getPropertyValue('font-family'), s = t.getPropertyValue('font-weight'), l = t.getPropertyValue('color');
        f({
            base: {
                fontFamily: r,
                fontWeight: s,
                color: l,
                fontSize: t.getPropertyValue('font-size'),
                '::placeholder': { color: n.getPropertyValue('color') }
            }
        });
    }, [a]), (0, o.jsxs)('div', {
        className: d()(A.cardNumberWrapper),
        'data-stripe-type': t,
        children: [
            (0, o.jsx)('div', {
                ref: a,
                className: d()(A.hiddenDiv, N.input)
            }),
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                switch (t) {
                case 'cardNumber':
                    return (0, o.jsxs)('div', {
                        children: [
                            (0, o.jsx)(p.ZP, {
                                className: A.cardIcon,
                                type: u,
                                flipped: n
                            }),
                            (0, o.jsx)(c.CardNumberElement, {
                                options: {
                                    style: R,
                                    placeholder: m.Z.Messages.PAYMENT_SOURCE_CARD_NUMBER,
                                    disableLink: e
                                },
                                className: x()
                            })
                        ]
                    });
                case 'cardExpiry':
                    return (0, o.jsx)(c.CardExpiryElement, {
                        options: {
                            style: R,
                            placeholder: m.Z.Messages.PAYMENT_SOURCE_EXPIRATION_DATE_PLACEHOLDER
                        },
                        className: x()
                    });
                case 'cardCvc':
                    return (0, o.jsx)(c.CardCvcElement, {
                        options: {
                            style: R,
                            placeholder: m.Z.Messages.CREDIT_CARD_SECURITY_CODE
                        },
                        className: x()
                    });
                }
            }(M),
            (0, o.jsx)(E.InputError, { error: b })
        ]
    });
};
