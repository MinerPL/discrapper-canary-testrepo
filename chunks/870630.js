"use strict";
a.r(t), a("47120"), a("411104");
var n = a("735250"),
  r = a("470079"),
  s = a("452079"),
  l = a("780384"),
  o = a("481060"),
  i = a("410030"),
  u = a("231338"),
  c = a("689938"),
  d = a("855321"),
  p = a("744481"),
  S = a("724641"),
  E = a("811974"),
  m = a("212545"),
  A = a("184229"),
  T = a("504309");
t.default = function(e) {
  let t = (0, i.default)(),
    a = r.useRef(null),
    [y, P] = r.useState({});
  switch (r.useLayoutEffect(() => {
      let {
        current: e
      } = a;
      if (null == e) return;
      let t = window.getComputedStyle(e),
        n = window.getComputedStyle(e, "::placeholder"),
        r = t.getPropertyValue("font-family"),
        s = t.getPropertyValue("font-weight"),
        l = t.getPropertyValue("color"),
        o = t.getPropertyValue("font-size");
      P({
        base: {
          fontFamily: r,
          fontWeight: s,
          color: l,
          fontSize: o,
          backgroundColor: t.getPropertyValue("background-color"),
          padding: "12px",
          "::placeholder": {
            color: n.getPropertyValue("color")
          }
        }
      })
    }, [a]), e.type) {
    case u.PaymentSourceTypes.PRZELEWY24: {
      let r = (0, l.isThemeDark)(t) ? A : T,
        {
          onNameChange: i,
          onEmailChange: u,
          onP24BankChange: p,
          p24BankValue: S,
          billingAddressInfo: E
        } = e;
      return (0, n.jsxs)("div", {
        className: d.body,
        children: [(0, n.jsx)(o.FormSection, {
          title: c.default.Messages.EMAIL,
          children: (0, n.jsx)(o.TextInput, {
            inputRef: a,
            name: c.default.Messages.EMAIL,
            placeholder: c.default.Messages.EMAIL,
            onChange: e => u(e),
            value: E.email
          })
        }), (0, n.jsx)(o.FormSection, {
          className: d.nonTopInputWrapper,
          title: c.default.Messages.CREDIT_CARD_NAME,
          children: (0, n.jsx)(o.TextInput, {
            name: c.default.Messages.CREDIT_CARD_NAME,
            placeholder: c.default.Messages.CREDIT_CARD_NAME,
            onChange: e => i(e),
            value: E.name
          })
        }), (0, n.jsxs)(o.FormSection, {
          className: d.nonTopInputWrapper,
          title: c.default.Messages.PAYMENT_SOURCE_PRZELEWY24_BANK_LABEL,
          children: [(0, n.jsx)(s.P24BankElement, {
            options: {
              value: S,
              style: y
            },
            onChange: e => p(e.value)
          }), (0, n.jsx)("div", {
            className: d.bankSelectionStub,
            children: (0, n.jsx)("img", {
              src: r,
              alt: "Przelewy24"
            })
          })]
        })]
      })
    }
    case u.PaymentSourceTypes.EPS: {
      let {
        onAccountHolderNameChange: r,
        onEPSBankChange: i,
        epsBankValue: u,
        billingAddressInfo: E
      } = e, m = (0, l.isThemeDark)(t) ? p : S;
      return (0, n.jsxs)("div", {
        className: d.body,
        children: [(0, n.jsx)(o.FormSection, {
          title: c.default.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
          children: (0, n.jsx)(o.TextInput, {
            inputRef: a,
            name: c.default.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
            placeholder: c.default.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
            onChange: e => r(e),
            value: E.name
          })
        }), (0, n.jsxs)(o.FormSection, {
          className: d.nonTopInputWrapper,
          title: c.default.Messages.PAYMENT_SOURCE_EPS_BANK_LABEL,
          children: [(0, n.jsx)(s.EpsBankElement, {
            options: {
              value: u,
              style: y
            },
            onChange: e => i(e.value)
          }), (0, n.jsx)("div", {
            className: d.bankSelectionStub,
            children: (0, n.jsx)("img", {
              src: m,
              alt: "EPS"
            })
          })]
        })]
      })
    }
    case u.PaymentSourceTypes.IDEAL: {
      let {
        onAccountHolderNameChange: r,
        onIdealBankChange: i,
        idealBankValue: u,
        billingAddressInfo: p
      } = e, S = (0, l.isThemeDark)(t) ? E : m;
      return (0, n.jsxs)("div", {
        className: d.body,
        children: [(0, n.jsx)(o.FormSection, {
          title: c.default.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
          children: (0, n.jsx)(o.TextInput, {
            inputRef: a,
            name: c.default.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
            placeholder: c.default.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
            onChange: e => r(e),
            value: p.name
          })
        }), (0, n.jsxs)(o.FormSection, {
          className: d.nonTopInputWrapper,
          title: c.default.Messages.PAYMENT_SOURCE_IDEAL_BANK_LABEL,
          children: [(0, n.jsx)(s.IdealBankElement, {
            options: {
              value: u,
              style: y
            },
            onChange: e => i(e.value)
          }), (0, n.jsx)("div", {
            className: d.bankSelectionStub,
            children: (0, n.jsx)("img", {
              src: S,
              alt: "iDeal"
            })
          })]
        })]
      })
    }
    default:
      throw Error("unknown payment source type")
  }
}