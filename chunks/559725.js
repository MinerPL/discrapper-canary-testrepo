t.d(a, {
    cp: function () {
        return p;
    },
    eI: function () {
        return _;
    }
}), t(411104);
var n = t(175145), r = t(544891), s = t(570140), l = t(355467), o = t(987032), i = t(559407), c = t(122289), u = t(439041), d = t(981631);
async function E() {
    return await r.tn.get({
        url: d.ANM.BILLING_ADYEN_PAYMENT_METHODS,
        oldFormErrors: !0
    });
}
async function _() {
    try {
        let {enabledPaymentTypes: e} = o.ZP.getCurrentConfig({ location: '40c266_2' }, { autoTrackExposure: !1 });
        if (!e.includes(d.HeQ.CASH_APP))
            return;
        let a = await E(), t = await (0, n.Z)({
                environment: d.Ai1.ADYEN.KEY.startsWith('live_') ? 'live' : 'test',
                clientKey: d.Ai1.ADYEN.KEY,
                analytics: { enabled: !1 },
                paymentMethodsResponse: a.body
            });
        s.Z.dispatch({
            type: 'ADYEN_CREATE_CLIENT_SUCCESS',
            client: t
        }), function (e) {
            if (null != u.Z.cashAppPayComponent) {
                (function () {
                    var e;
                    null === (e = u.Z.cashAppPayComponent) || void 0 === e || e.unmount();
                }(), function () {
                    var e;
                    if (null == u.Z.cashAppPayComponent)
                        throw Error('Adyen CashAppPay component must be created before mounting.');
                    null === (e = u.Z.cashAppPayComponent) || void 0 === e || e.mount('#'.concat(i.F));
                }());
                return;
            }
            let a = e.create('cashapp', {
                showPayButton: !1,
                enableStoreDetails: !1,
                storePaymentMethod: !0,
                setStatusAutomatically: !1,
                onSubmit: e => {
                    let {
                        data: a,
                        isValid: t
                    } = e;
                    if (t)
                        s.Z.dispatch({
                            type: 'ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS',
                            data: a
                        });
                    else
                        throw (0, l.SQ)('Cash App Pay setup attempt is not valid.');
                },
                onError: e => {
                    if ('CANCEL' !== e.name) {
                        let a = 'Payment declined by CashAppPay' !== e.message;
                        throw (0, l.SQ)(e.message, a);
                    }
                }
            }).mount('#'.concat(i.F));
            s.Z.dispatch({
                type: 'ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS',
                component: a
            });
        }(t);
    } catch (e) {
        (0, c.q2)(e), s.Z.dispatch({ type: 'ADYEN_CREATE_CLIENT_FAIL' });
    }
}
function p() {
    let e = u.Z.cashAppPayComponent;
    if (null == e)
        throw Error('Adyen CashAppPay component must be created before submitting.');
    e.submit();
}
