t.d(a, {
    P: function () {
        return p;
    }
});
var n = t(735250), r = t(470079), s = t(442837), l = t(481060), o = t(464179), i = t(706454), c = t(351402);
t(285952);
var u = t(603421), d = t(981631), E = t(689938), _ = t(202675);
let p = e => {
    let a, {
            billingAddressInfo: t,
            billingError: p,
            onBillingAddressChange: m,
            paymentSourceType: A
        } = e, N = null != p && (null == p.code || (0, u.ly)(p) === u.Rg.ADDRESS), h = (0, s.e7)([i.default], () => i.default.locale);
    switch (A) {
    case d.HeQ.GIROPAY:
    case d.HeQ.PAYSAFE_CARD:
    case d.HeQ.GCASH:
    case d.HeQ.GRABPAY_MY:
    case d.HeQ.MOMO_WALLET:
    case d.HeQ.KAKAOPAY:
    case d.HeQ.GOPAY_WALLET:
    case d.HeQ.BANCONTACT:
        a = 'en-US' === h ? o.ZP.Layouts.MODAL_US_WITH_NAME : o.ZP.Layouts.MODAL_INTL_WITH_NAME;
        break;
    case d.HeQ.VENMO:
    case d.HeQ.CASH_APP:
        a = o.ZP.Layouts.MODAL_US_WITH_NAME;
        break;
    default:
        a = 'en-US' === h ? o.ZP.Layouts.MODAL_US : o.ZP.Layouts.MODAL_INTL;
    }
    let T = (0, s.e7)([c.Z], () => c.Z.ipCountryCode);
    return 0 === t.country.length && (t.country = null != T ? T : ''), (0, n.jsxs)(r.Fragment, {
        children: [
            N ? (0, n.jsx)(l.FormErrorBlock, {
                className: _.errorBlock,
                children: E.Z.Messages.BILLING_ERROR_SECTION_ADDRESS
            }) : null,
            (0, n.jsx)(o.ZP, {
                className: _.__invalid_formItem,
                onBillingAddressChange: m,
                error: p,
                layout: a,
                ...t
            })
        ]
    });
};
