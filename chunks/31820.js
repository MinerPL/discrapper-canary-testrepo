"use strict";
s.r(t), s.d(t, {
  ReviewStepBody: function() {
    return f
  },
  ReviewStepFooter: function() {
    return E
  }
}), s("653041");
var n = s("735250"),
  r = s("470079"),
  a = s("481060"),
  l = s("609194"),
  i = s("275850"),
  o = s("672971"),
  d = s("976644"),
  u = s("435274"),
  c = s("4912"),
  p = s("937615"),
  h = s("689938"),
  S = s("551249");
let f = e => {
    let {
      legalNotice: t,
      paymentSources: s,
      price: d,
      hidePersonalInformation: f,
      paymentSourceId: E,
      isGiftable: P,
      isGift: A,
      needsToBeGift: _,
      onPaymentSourceChange: m,
      onPaymentSourceAdd: T,
      onPurchaseTermsChange: I,
      onToggleIsGift: C
    } = e, R = [], N = null != E ? s[E] : null;
    return null != N && N.invalid && R.push((0, n.jsx)(l.default, {
      icon: c.default,
      color: l.default.Colors.ERROR,
      iconSize: l.default.Sizes.NONE,
      iconClassName: S.invalidIcon,
      children: h.default.Messages.BILLING_PAYMENT_SOURCE_INVALID
    }, "source_invalid")), null != d && (d.taxInclusive ? R.push((0, n.jsx)(l.default, {
      icon: u.default,
      color: l.default.Colors.PRIMARY,
      iconSize: l.default.Sizes.LARGE,
      children: h.default.Messages.BILLING_SALES_TAX_INCLUDED
    }, "tax_included")) : d.tax > 0 && R.push((0, n.jsx)(l.default, {
      icon: u.default,
      color: l.default.Colors.PRIMARY,
      iconSize: l.default.Sizes.LARGE,
      children: h.default.Messages.BILLING_SALES_TAX_ADDED.format({
        tax: (0, p.formatPrice)(d.tax, d.currency)
      })
    }, "tax_added"))), (0, n.jsxs)(r.Fragment, {
      children: [(0, n.jsx)(a.FormTitle, {
        className: S.formTitle,
        children: h.default.Messages.BILLING_PAY_FOR_IT_WITH
      }), (0, n.jsx)(i.default, {
        paymentSources: Object.values(s),
        selectedPaymentSourceId: E,
        hidePersonalInformation: f,
        onChange: m,
        onPaymentSourceAdd: T
      }), R, P && (0, n.jsx)(a.Checkbox, {
        disabled: _,
        className: S.giftToggle,
        type: a.Checkbox.Types.INVERTED,
        value: A,
        onChange: C,
        children: (0, n.jsx)("div", {
          className: S.checkboxLabel,
          children: h.default.Messages.BILLING_IS_GIFT_PURCHASE
        })
      }), (0, n.jsx)(o.default, {
        onChange: I,
        forceShow: !0,
        className: S.purchaseTerms,
        finePrint: t
      })]
    })
  },
  E = e => {
    let {
      canSubmit: t,
      submitButtonText: s,
      useShinySubmitButton: r,
      isPurchasing: l,
      hasAcceptedTerms: i,
      paymentSource: o,
      onPurchase: u,
      tooltipText: c,
      needsToBeGift: p,
      isGift: h
    } = e, f = null != o && !o.invalid, E = {
      submitting: l,
      color: a.Button.Colors.GREEN,
      disabled: !(i && !(p && !h) && f && t),
      onClick: u
    };
    return (0, n.jsx)(a.ModalFooter, {
      children: (0, n.jsxs)("div", {
        className: S.buyButtonTooltipWrapper,
        children: [E.disabled && null != c ? (0, n.jsx)(a.Tooltip, {
          text: c,
          children: e => (0, n.jsx)("div", {
            "aria-hidden": !0,
            className: S.buyButtonTooltipTarget,
            ...e
          })
        }) : null, r ? (0, n.jsx)(d.default, {
          ...E,
          children: s
        }) : (0, n.jsx)(a.Button, {
          type: "submit",
          ...E,
          children: s
        })]
      })
    })
  }