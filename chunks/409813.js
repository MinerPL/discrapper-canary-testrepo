n.d(t, {
    Ck: function () {
        return s;
    },
    DJ: function () {
        return A;
    },
    dZ: function () {
        return T;
    },
    h8: function () {
        return r;
    },
    ly: function () {
        return c;
    }
}), n(47120), n(411104);
var r, i, u = n(470079), l = n(881052), o = n(710845), E = n(122289), a = n(45572), _ = n(689938);
let S = new o.Z('PaymentSteps');
(i = r || (r = {})).PAYMENT_TYPE = 'payment_type', i.CREDIT_CARD_INFORMATION = 'credit_card_information', i.PAYPAL_INFORMATION = 'paypal_information', i.VENMO_INFORMATION = 'venmo_information', i.SOFORT_INFORMATION = 'sofort_information', i.PRZELEWY24_INFORMATION = 'przelewy24_information', i.EPS_INFORMATION = 'eps_information', i.IDEAL_INFORMATION = 'ideal_information', i.CASH_APP_INFORMATION = 'cash_app_information', i.PAYMENT_REQUEST_INFORMATION = 'payment_request_information', i.ADDRESS = 'address', i.AWAITING_AUTHENTICATION = 'awaiting_authentication', i.SKU_SELECT = 'sku_select', i.PLAN_SELECT = 'plan_select', i.PREMIUM_UPSELL = 'premium_upsell', i.PREMIUM_GUILD_UPSELL = 'premium_guild_upsell', i.REVIEW = 'review', i.CONFIRM = 'confirm', i.CLAIM_FREE_SKU = 'claim_free_sku', i.SKU_PREVIEW = 'sku_preview', i.LOADING_PAYMENT_SOURCES = 'loading_payment_sources', i.SHOP = 'shop', i.PROMOTION_INFO = 'promotion_info', i.AWAITING_PURCHASE_TOKEN_AUTH = 'awaiting_purchase_token_auth', i.BENEFITS = 'benefits', i.WHAT_YOU_LOSE = 'what_you_lose', i.ADD_PAYMENT_STEPS = 'add_payment_steps', i.AWAITING_BROWSER_CHECKOUT = 'awaiting_browser_checkout', i.GIFT_CUSTOMIZATION = 'gift_customization';
let s = new Set([
    'credit_card_information',
    'payment_request_information',
    'paypal_information',
    'venmo_information',
    'cash_app_information',
    'address',
    'claim_free_sku',
    'sku_preview',
    'premium_upsell',
    'sofort_information',
    'przelewy24_information'
]);
function A(e) {
    switch (e) {
    case 'plan_select':
        return _.Z.Messages.BILLING_STEP_SELECT_PLAN;
    case 'payment_type':
    case 'add_payment_steps':
        return _.Z.Messages.BILLING_STEP_PAYMENT;
    case 'awaiting_purchase_token_auth':
    case 'review':
        return _.Z.Messages.BILLING_STEP_REVIEW;
    case 'shop':
        return _.Z.Messages.BILLING_STEP_SHOP;
    case 'payment_request_information':
        return _.Z.Messages.BILLING_STEP_PAYMENT_INFO;
    case 'credit_card_information':
        return _.Z.Messages.PAYMENT_SOURCE_INFORMATION;
    case 'address':
        return _.Z.Messages.BILLING_ADDRESS;
    case 'paypal_information':
        return _.Z.Messages.PAYMENT_SOURCE_PAYPAL_DETAILS;
    case 'venmo_information':
        return _.Z.Messages.PAYMENT_SOURCE_VENMO_DETAILS;
    case 'sofort_information':
        return _.Z.Messages.PAYMENT_SOURCE_SOFORT_INFO;
    case 'przelewy24_information':
        return _.Z.Messages.PAYMENT_SOURCE_PRZELEWY24_INFO;
    case 'cash_app_information':
        return _.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY_DETAILS;
    case 'gift_customization':
        return _.Z.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER;
    }
    throw Error('Unexpected step: '.concat(e));
}
function c(e) {
    if (null != e) {
        if (!(e instanceof l.HF))
            throw S.error(e), (0, E.q2)(e), Error('Unexpected error type');
        if (e.hasCardError())
            return 'credit_card_information';
        if (e.hasAddressError())
            return 'address';
    }
    return null;
}
function T(e, t, n) {
    u.useEffect(() => {
        null != e && 'review' !== e && t !== a.A.WAITING && t !== a.A.COMPLETED && n(a.A.WAITING);
    }, [
        e,
        t,
        n
    ]);
}
