var s, n;
function l(e) {
    if (null != e) {
        if (e.hasCardError()) return 'credit_card_information';
        if (e.hasAddressError()) return 'address';
    }
    return null;
}
t.d(a, {
    Rg: function () {
        return s;
    },
    ly: function () {
        return l;
    }
}),
    ((n = s || (s = {})).SELECT_PLAN = 'select_plan'),
    (n.PAYMENT_TYPE = 'payment_type'),
    (n.PAYPAL = 'paypal'),
    (n.PAYPAL_ADDRESS = 'paypal_address'),
    (n.PAYMENT_REQUEST_INFO = 'payment_request_info'),
    (n.CREDIT_CARD_INFORMATION = 'credit_card_information'),
    (n.ADDRESS = 'address'),
    (n.REVIEW = 'review'),
    (n.CONFIRM = 'confirm'),
    (n.AWAITING_AUTHENTICATION = 'awaiting_authentication'),
    (n.VENMO = 'venmo'),
    (n.VENMO_ADDRESS = 'venmo_address');
