s.d(t, {
    Z: function () {
        return A;
    }
});
var n, a, i, r, o = s(735250), l = s(470079), c = s(120356), d = s.n(c), _ = s(481060), E = s(987032), u = s(46141), T = s(285952), I = s(912454), S = s(122289), N = s(624138), C = s(689938), m = s(398333);
class A extends (r = l.PureComponent) {
    get typeString() {
        let {paymentSource: e} = this.props;
        if (e instanceof u.qo)
            return I.ZP.Types.PAYPAL;
        if (e instanceof u.Sf)
            return I.ZP.Types.SOFORT;
        if (e instanceof u.dm)
            return I.ZP.getType(e.brand);
        else if (e instanceof u.fv)
            return I.ZP.Types.GIROPAY;
        else if (e instanceof u.Vg)
            return I.ZP.Types.PRZELEWY24;
        else if (e instanceof u.sn)
            return I.ZP.Types.PAYSAFECARD;
        else if (e instanceof u.o_)
            return I.ZP.Types.GCASH;
        else if (e instanceof u.kX)
            return I.ZP.Types.GRABPAY;
        else if (e instanceof u.z)
            return I.ZP.Types.MOMO_WALLET;
        else if (e instanceof u.Xc)
            return I.ZP.Types.VENMO;
        else if (e instanceof u.Om)
            return I.ZP.Types.KAKAOPAY;
        else if (e instanceof u.JC)
            return I.ZP.Types.GOPAY_WALLET;
        else if (e instanceof u.U4)
            return I.ZP.Types.BANCONTACT;
        else if (e instanceof u.D0)
            return I.ZP.Types.EPS;
        else if (e instanceof u.jc)
            return I.ZP.Types.IDEAL;
        else if (e instanceof u.u_)
            return I.ZP.Types.CASH_APP;
        else if (e instanceof u.$z)
            return I.ZP.Types.APPLE;
        return I.ZP.Types.UNKNOWN;
    }
    getLabel(e) {
        return e instanceof u.dm ? C.Z.Messages.PAYMENT_SOURCE_CARD_ENDING.format({
            brand: (0, N.De)(e.brand),
            last_4: e.last4
        }) : e instanceof u.qo ? C.Z.Messages.PAYMENT_SOURCE_PAYPAL : e instanceof u.Sf ? C.Z.Messages.PAYMENT_SOURCE_SOFORT : e instanceof u.fv ? C.Z.Messages.PAYMENT_SOURCE_GIROPAY : e instanceof u.Vg ? C.Z.Messages.PAYMENT_SOURCE_PRZELEWY24 : e instanceof u.sn ? C.Z.Messages.PAYMENT_SOURCE_PAYSAFE_CARD : e instanceof u.o_ ? C.Z.Messages.PAYMENT_SOURCE_GCASH : e instanceof u.kX ? C.Z.Messages.PAYMENT_SOURCE_GRABPAY : e instanceof u.z ? C.Z.Messages.PAYMENT_SOURCE_MOMO_WALLET : e instanceof u.Xc ? C.Z.Messages.PAYMENT_SOURCE_VENMO : e instanceof u.Om ? C.Z.Messages.PAYMENT_SOURCE_KAKAOPAY : e instanceof u.JC ? C.Z.Messages.PAYMENT_SOURCE_GOPAY_WALLET : e instanceof u.U4 ? C.Z.Messages.PAYMENT_SOURCE_BANCONTACT : e instanceof u.jc ? C.Z.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({ bank: (0, E.YE)(e.bank) }) : e instanceof u.D0 ? C.Z.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({ bank: (0, E.Ul)(e.bank) }) : e instanceof u.u_ ? C.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY : e instanceof u.$z ? C.Z.Messages.PAYMENT_SOURCE_APPLE : C.Z.Messages.PAYMENT_SOURCE_UNKNOWN;
    }
    renderDescription() {
        let {
            paymentSource: e,
            descriptionClassName: t
        } = this.props;
        return (0, o.jsx)(_.Text, {
            className: d()(m.description, t),
            variant: 'text-md/semibold',
            children: this.getLabel(e)
        });
    }
    renderSubText() {
        let {
                paymentSource: e,
                locale: t
            } = this.props, s = null;
        return e instanceof u.dm ? s = C.Z.Messages.PAYMENT_SOURCE_CARD_EXPIRES.format({
            month: (0, S.E2)(e.expiresMonth, t),
            year: e.expiresYear
        }) : e instanceof u.qo ? s = e.email : e instanceof u.Sf ? s = e.email : e instanceof u.Vg ? s = e.email : e instanceof u.Xc ? s = '@' + e.username : e instanceof u.u_ && (s = e.username), s;
    }
    render() {
        let {
                isDefault: e,
                paymentSource: t,
                showSubtext: s,
                isForSubscription: n,
                showPaymentSourceIcon: a,
                showLabels: i
            } = this.props, r = this.renderSubText();
        return (0, o.jsxs)(T.Z, {
            children: [
                a && (0, o.jsx)(I.ZP, { type: this.typeString }),
                (0, o.jsxs)(T.Z, {
                    direction: T.Z.Direction.VERTICAL,
                    className: m.descriptionWrapper,
                    children: [
                        (0, o.jsxs)(T.Z, {
                            align: T.Z.Align.CENTER,
                            children: [
                                this.renderDescription(),
                                i && e ? (0, o.jsx)('div', {
                                    className: m.defaultIndicator,
                                    children: C.Z.Messages.DEFAULT
                                }) : null,
                                n ? (0, o.jsx)('div', {
                                    className: m.premiumIndicator,
                                    children: C.Z.Messages.PAYMENT_SOURCE_SUBSCRIPTION
                                }) : null,
                                i && t.invalid ? (0, o.jsx)('div', {
                                    className: m.invalidIndicator,
                                    children: C.Z.Messages.PAYMENT_SOURCE_INVALID
                                }) : null
                            ]
                        }),
                        s && null != r ? (0, o.jsx)('div', {
                            className: m.subText,
                            children: r
                        }) : null
                    ]
                })
            ]
        });
    }
}
i = {
    isForSubscription: !1,
    isDefault: !1,
    showSubtext: !1,
    showPaymentSourceIcon: !1,
    showLabels: !1
}, (a = 'defaultProps') in (n = A) ? Object.defineProperty(n, a, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : n[a] = i;
