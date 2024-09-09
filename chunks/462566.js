t(47120);
var s,
    n,
    l = t(735250),
    r = t(470079),
    o = t(120356),
    i = t.n(o),
    c = t(481060),
    u = t(219929),
    d = t(594174),
    E = t(754103),
    A = t(12464),
    N = t(689938),
    m = t(977018),
    _ = t(702512);
((n = s || (s = {})).CARD_NUMBER = 'cardNumber'), (n.EXPIRATION_DATE = 'cardExpiry'), (n.CVC = 'cardCvc'), (n.NAME = 'name'), (n.COUNTRY = 'country'), (n.POSTAL_CODE = 'postalCode');
a.Z = function (e) {
    var a;
    let { onCardInfoChange: t, error: s } = e,
        n = r.useRef(t),
        [o, p] = r.useState(!1),
        [h, T] = r.useState({}),
        [C, S] = r.useState({
            name: '',
            country: '',
            postalCode: ''
        }),
        [I, P] = r.useState({}),
        [R, f] = r.useState({});
    function M(e, a) {
        !!h[e] !== a &&
            T((t) => ({
                ...t,
                [e]: a
            }));
    }
    let b = r.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                a = {};
            return (e || I.name) && '' === C.name && (a.name = N.Z.Messages.PAYMENT_SOURCE_NAME_ERROR_REQUIRED), a;
        },
        [I, C]
    );
    r.useEffect(() => {
        let e = h.cardNumber && h.cardExpiry && h.cardCvc && 0 === Object.keys(b(!0)).length;
        n.current({ name: C.name }, !!e);
    }, [h, C, b]);
    let O = {
            name: 'cardNumber',
            title: () => N.Z.Messages.CARD_NUMBER,
            getClassNameForLayout: () => _.width100,
            renderInput: () =>
                (0, l.jsx)(A.Z, {
                    stripeType: 'cardNumber',
                    flipped: o,
                    updateCompleted: (e) => M('cardNumber', e)
                })
        },
        g = {
            name: 'cardExpiry',
            title: () => N.Z.Messages.CREDIT_CARD_EXPIRATION_DATE,
            getClassNameForLayout: () => _.width50,
            renderInput: () =>
                (0, l.jsx)(A.Z, {
                    stripeType: 'cardExpiry',
                    updateCompleted: (e) => M('cardExpiry', e)
                })
        },
        y = {
            name: 'cardCvc',
            title: () => N.Z.Messages.CREDIT_CARD_CVC,
            getClassNameForLayout: () => _.width50,
            renderInput: () =>
                (0, l.jsx)(A.Z, {
                    stripeType: 'cardCvc',
                    updateCompleted: (e) => M('cardCvc', e),
                    onFocus: () => {
                        p(!0);
                    },
                    onBlur: () => {
                        p(!1);
                    }
                })
        },
        L = {
            id: 'card-name',
            name: 'name',
            title: () => N.Z.Messages.CREDIT_CARD_NAME_ON_CARD,
            autoComplete: 'cc-name',
            placeholder: () => N.Z.Messages.CREDIT_CARD_NAME,
            getClassNameForLayout: () => _.width100,
            renderInput: (e) => (0, l.jsx)(c.TextInput, { ...e })
        };
    return (0, l.jsxs)('div', {
        children: [
            (null === (a = d.default.getCurrentUser()) || void 0 === a ? void 0 : a.nsfwAllowed)
                ? (0, l.jsxs)('div', {
                      className: m.cardBrands,
                      children: [(0, l.jsx)('div', { className: i()(u.Uy.SMALL, m.visa, m.cardFormHeader) }), (0, l.jsx)('div', { className: i()(u.Uy.SMALL, m.mastercard, m.cardFormHeader) }), (0, l.jsx)('div', { className: i()(u.Uy.SMALL, m.discover, m.cardFormHeader) }), (0, l.jsx)('div', { className: i()(u.Uy.SMALL, m.amex, m.cardFormHeader) }), (0, l.jsx)('div', { className: i()(u.Uy.SMALL, m.jcb, m.cardFormHeader) }), (0, l.jsx)('div', { className: i()(u.Uy.SMALL, m.dinersclub, m.cardFormHeader) }), (0, l.jsx)('div', { className: i()(u.Uy.SMALL, m.unionpay, m.cardFormHeader) })]
                  })
                : (0, l.jsxs)('div', {
                      className: m.cardBrands,
                      children: [(0, l.jsx)('div', { className: i()(u.Uy.SMALL, m.visa_monochrome, m.cardFormHeader) }), (0, l.jsx)('div', { className: i()(u.Uy.SMALL, m.mastercard_monochrome, m.cardFormHeader) }), (0, l.jsx)('div', { className: i()(u.Uy.SMALL, m.discover_monochrome, m.cardFormHeader) }), (0, l.jsx)('div', { className: i()(u.Uy.SMALL, m.amex_monochrome, m.cardFormHeader) }), (0, l.jsx)('div', { className: i()(u.Uy.SMALL, m.jcb_monochrome, m.cardFormHeader) }), (0, l.jsx)('div', { className: i()(u.Uy.SMALL, m.dinersclub_monochrome, m.cardFormHeader) }), (0, l.jsx)('div', { className: i()(u.Uy.SMALL, m.unionpay_monochrome, m.cardFormHeader) })]
                  }),
            (0, l.jsx)(E.Z, {
                form: [
                    { fields: [O] },
                    {
                        fields: [g, y]
                    },
                    { fields: [L] }
                ],
                errors: R,
                formError: s,
                values: C,
                onFieldChange: function (e, a) {
                    if ('name' !== a && 'country' !== a && 'postalCode' !== a) return;
                    let t = { ...C },
                        s = { ...I },
                        n = { name: R.name };
                    !I[a] && '' !== e && (s[a] = !0), (t[a] = e), s[a] && '' === e ? 'name' === a && (n.name = N.Z.Messages.PAYMENT_SOURCE_NAME_ERROR_REQUIRED) : delete n[a], S(t), P(s), f(n);
                },
                onFieldBlur: function () {
                    f(b());
                }
            })
        ]
    });
};
