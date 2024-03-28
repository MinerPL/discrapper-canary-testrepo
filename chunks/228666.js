"use strict";
a.r(t), a.d(t, {
  AddressStepBody: function() {
    return _
  },
  AddressStepFooter: function() {
    return A
  }
});
var n = a("735250"),
  s = a("470079"),
  r = a("442837"),
  l = a("481060"),
  o = a("464179"),
  u = a("812169"),
  c = a("706454"),
  i = a("351402"),
  d = a("285952"),
  E = a("603421"),
  p = a("981631"),
  f = a("689938"),
  m = a("551249");
let _ = e => {
    let t, {
        billingAddressInfo: a,
        billingError: d,
        onBillingAddressChange: _,
        paymentSourceType: A
      } = e,
      T = null != d && (null == d.code || (0, E.errorToStep)(d) === E.Steps.ADDRESS),
      N = (0, r.useStateFromStores)([c.default], () => c.default.locale);
    switch (A) {
      case p.PaymentSourceTypes.CARD:
        t = "en-US" === N ? 1 === (0, u.reducedPaymentInfoExperiment)().bucket ? o.default.Layouts.MODAL_US_REDUCED : o.default.Layouts.MODAL_US : o.default.Layouts.MODAL_INTL;
        break;
      case p.PaymentSourceTypes.GIROPAY:
      case p.PaymentSourceTypes.PAYSAFE_CARD:
      case p.PaymentSourceTypes.GCASH:
      case p.PaymentSourceTypes.GRABPAY_MY:
      case p.PaymentSourceTypes.MOMO_WALLET:
      case p.PaymentSourceTypes.KAKAOPAY:
      case p.PaymentSourceTypes.GOPAY_WALLET:
      case p.PaymentSourceTypes.BANCONTACT:
        t = "en-US" === N ? o.default.Layouts.MODAL_US_WITH_NAME : o.default.Layouts.MODAL_INTL_WITH_NAME;
        break;
      case p.PaymentSourceTypes.VENMO:
      case p.PaymentSourceTypes.CASH_APP:
        t = o.default.Layouts.MODAL_US_WITH_NAME;
        break;
      default:
        t = "en-US" === N ? o.default.Layouts.MODAL_US : o.default.Layouts.MODAL_INTL
    }
    let S = (0, r.useStateFromStores)([i.default], () => i.default.ipCountryCode);
    return 0 === a.country.length && (a.country = null != S ? S : ""), (0, n.jsxs)(s.Fragment, {
      children: [T ? (0, n.jsx)(l.FormErrorBlock, {
        className: m.errorBlock,
        children: f.default.Messages.BILLING_ERROR_SECTION_ADDRESS
      }) : null, (0, n.jsx)(o.default, {
        className: m.__invalid_formItem,
        onBillingAddressChange: _,
        error: d,
        layout: t,
        ...a
      })]
    })
  },
  A = e => {
    let {
      isBillingAddressInfoValid: t,
      submitting: a,
      onContinue: s,
      renderBackButton: r
    } = e;
    return (0, n.jsxs)(l.ModalFooter, {
      justify: d.default.Justify.BETWEEN,
      direction: d.default.Direction.HORIZONTAL,
      children: [r(), (0, n.jsx)(l.Button, {
        type: "submit",
        disabled: !t,
        submitting: a,
        onClick: s,
        children: f.default.Messages.NEXT
      })]
    })
  }