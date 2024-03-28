"use strict";
a.r(t), a.d(t, {
  createClient: function() {
    return S
  },
  reopenCashAppPayWindow: function() {
    return E
  }
}), a("411104");
var n = a("175145"),
  r = a("544891"),
  s = a("570140"),
  l = a("355467"),
  o = a("987032"),
  i = a("559407"),
  u = a("122289"),
  c = a("439041"),
  d = a("981631");
async function p() {
  return await r.HTTP.get({
    url: d.Endpoints.BILLING_ADYEN_PAYMENT_METHODS,
    oldFormErrors: !0
  })
}
async function S() {
  try {
    let {
      enabledPaymentTypes: e
    } = o.default.getCurrentConfig({
      location: "40c266_2"
    }, {
      autoTrackExposure: !1
    });
    if (!e.includes(d.PaymentSourceTypes.CASH_APP)) return;
    let t = await p(),
      a = await (0, n.default)({
        environment: d.PaymentSettings.ADYEN.KEY.startsWith("live_") ? "live" : "test",
        clientKey: d.PaymentSettings.ADYEN.KEY,
        analytics: {
          enabled: !1
        },
        paymentMethodsResponse: t.body
      });
    s.default.dispatch({
        type: "ADYEN_CREATE_CLIENT_SUCCESS",
        client: a
      }),
      function(e) {
        if (null != c.default.cashAppPayComponent) {
          (function() {
            var e;
            null === (e = c.default.cashAppPayComponent) || void 0 === e || e.unmount()
          })(),
          function() {
            var e;
            if (null == c.default.cashAppPayComponent) throw Error("Adyen CashAppPay component must be created before mounting.");
            null === (e = c.default.cashAppPayComponent) || void 0 === e || e.mount("#".concat(i.CASH_APP_PAY_CONTAINER))
          }();
          return
        }
        let t = e.create("cashapp", {
          showPayButton: !1,
          enableStoreDetails: !1,
          storePaymentMethod: !0,
          setStatusAutomatically: !1,
          onSubmit: e => {
            let {
              data: t,
              isValid: a
            } = e;
            if (a) s.default.dispatch({
              type: "ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS",
              data: t
            });
            else throw (0, l.dispatchConfirmationError)("Cash App Pay setup attempt is not valid.")
          },
          onError: e => {
            if ("CANCEL" !== e.name) {
              let t = "Payment declined by CashAppPay" !== e.message;
              throw (0, l.dispatchConfirmationError)(e.message, t)
            }
          }
        }).mount("#".concat(i.CASH_APP_PAY_CONTAINER));
        s.default.dispatch({
          type: "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS",
          component: t
        })
      }(a)
  } catch (e) {
    (0, u.captureBillingException)(e), s.default.dispatch({
      type: "ADYEN_CREATE_CLIENT_FAIL"
    })
  }
}

function E() {
  let e = c.default.cashAppPayComponent;
  if (null == e) throw Error("Adyen CashAppPay component must be created before submitting.");
  e.submit()
}