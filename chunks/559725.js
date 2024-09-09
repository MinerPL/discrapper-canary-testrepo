a.d(n, {
    cp: function () {
        return c;
    },
    eI: function () {
        return d;
    }
}),
    a(411104);
var t = a(175145),
    r = a(544891),
    o = a(570140),
    s = a(355467),
    l = a(987032),
    i = a(559407),
    _ = a(122289),
    C = a(439041),
    A = a(981631),
    u = a(689938);
async function E() {
    return await r.tn.get({
        url: A.ANM.BILLING_ADYEN_PAYMENT_METHODS,
        oldFormErrors: !0
    });
}
async function d() {
    try {
        let { enabledPaymentTypes: e } = l.ZP.getCurrentConfig({ location: '40c266_2' }, { autoTrackExposure: !1 });
        if (!e.includes(A.HeQ.CASH_APP)) return;
        let n = await E(),
            a = await (0, t.Z)({
                environment: A.Ai1.ADYEN.KEY.startsWith('live_') ? 'live' : 'test',
                clientKey: A.Ai1.ADYEN.KEY,
                analytics: { enabled: !1 },
                paymentMethodsResponse: n.body
            });
        o.Z.dispatch({
            type: 'ADYEN_CREATE_CLIENT_SUCCESS',
            client: a
        }),
            (function (e) {
                if (null != C.Z.cashAppPayComponent) {
                    (function () {
                        var e;
                        null === (e = C.Z.cashAppPayComponent) || void 0 === e || e.unmount();
                    })(),
                        (function () {
                            var e;
                            if (null == C.Z.cashAppPayComponent) throw Error('Adyen CashAppPay component must be created before mounting.');
                            null === (e = C.Z.cashAppPayComponent) || void 0 === e || e.mount('#'.concat(i.F));
                        })();
                    return;
                }
                let n = e
                    .create('cashapp', {
                        showPayButton: !1,
                        enableStoreDetails: !1,
                        storePaymentMethod: !0,
                        setStatusAutomatically: !1,
                        onSubmit: (e) => {
                            let { data: n, isValid: a } = e;
                            if (a)
                                o.Z.dispatch({
                                    type: 'ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS',
                                    data: n
                                });
                            else throw (0, s.SQ)('Cash App Pay setup attempt is not valid.');
                        },
                        onError: (e) => {
                            let n;
                            let a = !0;
                            if ('CANCEL' !== e.name) {
                                switch (e.message) {
                                    case 'Payment declined by CashAppPay':
                                        a = !1;
                                        break;
                                    case 'Something went wrong during customerRequest creation':
                                        (a = !1), (n = u.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY_LOADING_ERROR_TRY_AGAIN);
                                }
                                (0, s.SQ)(e.message, a, n);
                            }
                        }
                    })
                    .mount('#'.concat(i.F));
                o.Z.dispatch({
                    type: 'ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS',
                    component: n
                });
            })(a);
    } catch (e) {
        (0, _.q2)(e), o.Z.dispatch({ type: 'ADYEN_CREATE_CLIENT_FAIL' });
    }
}
function c() {
    let e = C.Z.cashAppPayComponent;
    if (null == e) throw Error('Adyen CashAppPay component must be created before submitting.');
    e.submit();
}
