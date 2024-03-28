"use strict";
a.r(t), a("47120");
var n, s, r = a("735250"),
  l = a("470079"),
  o = a("803997"),
  u = a.n(o),
  c = a("481060"),
  i = a("812169"),
  d = a("594174"),
  E = a("912454"),
  p = a("153124"),
  f = a("464179"),
  m = a("754103"),
  _ = a("12464"),
  A = a("689938"),
  T = a("746394"),
  N = a("451893");
(s = n || (n = {})).CARD_NUMBER = "cardNumber", s.EXPIRATION_DATE = "cardExpiry", s.CVC = "cardCvc", s.NAME = "name", s.COUNTRY = "country", s.POSTAL_CODE = "postalCode";
let S = (0, p.uid)(),
  y = (0, p.uid)();
t.default = function(e) {
  var t;
  let {
    onCardInfoChange: a,
    error: n
  } = e, s = l.useRef(a), [o, p] = l.useState(!1), [C, P] = l.useState({}), [I, R] = l.useState({
    name: "",
    country: "",
    postalCode: ""
  }), [L, h] = l.useState({}), [O, g] = l.useState({});

  function M(e, t) {
    !!C[e] !== t && P(a => ({
      ...a,
      [e]: t
    }))
  }
  let D = l.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      t = {},
      a = I.country,
      n = I.postalCode;
    if ((e || L.name) && "" === I.name && (t.name = A.default.Messages.PAYMENT_SOURCE_NAME_ERROR_REQUIRED), 2 === (0, i.reducedPaymentInfoExperiment)().bucket) switch ((e || L.country) && "" === I.country && (t.country = A.default.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_REQUIRED), a) {
      case f.UNITED_STATES:
        (e || L.postalCode) && ("" === n ? t.postalCode = A.default.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_REQUIRED : n.length !== f.US_POSTAL_CODE_VALID_LENGTH ? t.postalCode = A.default.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_LENGTH : !/^\d{5}$/.test(n) && (t.postalCode = A.default.Messages.BILLING_ADDRESS_ZIP_CODE_INVALID));
        break;
      case f.CANADA:
        (e || L.postalCode) && "" === n && (t.postalCode = A.default.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_REQUIRED);
        break;
      default:
        (e || L.postalCode) && "" === n && !f.COUNTRIES_WITHOUT_POSTAL_CODES.includes(a) && (t.postalCode = A.default.Messages.BILLING_ADDRESS_POSTAL_CODE_ERROR_REQUIRED)
    }
    return t
  }, [L, I]);
  l.useEffect(() => {
    let e = C.cardNumber && C.cardExpiry && C.cardCvc && 0 === Object.keys(D(!0)).length;
    2 === (0, i.reducedPaymentInfoExperiment)().bucket ? s.current(I, !!e) : s.current({
      name: I.name
    }, !!e)
  }, [C, I, D]);
  let x = {
      cardNumber: {
        name: "cardNumber",
        title: () => A.default.Messages.CARD_NUMBER,
        getClassNameForLayout: () => N.width100,
        renderInput: () => (0, r.jsx)(_.default, {
          stripeType: "cardNumber",
          flipped: o,
          updateCompleted: e => M("cardNumber", e)
        })
      },
      cardExpiry: {
        name: "cardExpiry",
        title: () => A.default.Messages.CREDIT_CARD_EXPIRATION_DATE,
        getClassNameForLayout: () => N.width50,
        renderInput: () => (0, r.jsx)(_.default, {
          stripeType: "cardExpiry",
          updateCompleted: e => M("cardExpiry", e)
        })
      },
      cardCvc: {
        name: "cardCvc",
        title: () => A.default.Messages.CREDIT_CARD_CVC,
        getClassNameForLayout: () => N.width50,
        renderInput: () => (0, r.jsx)(_.default, {
          stripeType: "cardCvc",
          updateCompleted: e => M("cardCvc", e),
          onFocus: () => {
            p(!0)
          },
          onBlur: () => {
            p(!1)
          }
        })
      },
      name: {
        id: "card-name",
        name: "name",
        title: () => A.default.Messages.CREDIT_CARD_NAME_ON_CARD,
        autoComplete: "cc-name",
        placeholder: () => A.default.Messages.CREDIT_CARD_NAME,
        getClassNameForLayout: () => N.width100,
        renderInput: e => (0, r.jsx)(c.TextInput, {
          ...e
        })
      }
    },
    b = {
      country: e => ({
        id: S,
        name: "country",
        title: () => A.default.Messages.BILLING_ADDRESS_COUNTRY,
        autoComplete: "country",
        getClassNameForLayout: () => N.width50,
        renderInput(e) {
          let {
            onChange: t,
            ...a
          } = e;
          return (0, r.jsx)(c.SearchableSelect, {
            ...a,
            maxVisibleItems: 8,
            options: f.COUNTRY_CODE_OPTIONS,
            onChange: a => {
              null != t && t(a, e.name)
            }
          })
        }
      }),
      postalCode: e => {
        let t, a;
        switch (e) {
          case f.UNITED_STATES:
            t = A.default.Messages.BILLING_ADDRESS_ZIP_CODE, a = A.default.Messages.BILLING_ADDRESS_ZIP_CODE_PLACEHOLDER;
            break;
          case f.CANADA:
            t = A.default.Messages.BILLING_ADDRESS_POSTAL_CODE, a = A.default.Messages.BILLING_ADDRESS_POSTAL_CODE_CANADA_PLACEHOLDER;
            break;
          default:
            t = A.default.Messages.BILLING_ADDRESS_POSTAL_CODE
        }
        return {
          id: y,
          name: "postalCode",
          title: () => t,
          autoComplete: "postal-code",
          placeholder: () => a,
          getClassNameForLayout: () => N.width50,
          renderInput: e => (0, r.jsx)(c.TextInput, {
            style: {
              minHeight: "45px"
            },
            ...e
          })
        }
      }
    },
    v = [{
      fields: [x.cardNumber]
    }, {
      fields: [x.cardExpiry, x.cardCvc]
    }, {
      fields: [x.name]
    }],
    B = [{
      fields: [b.country, b.postalCode]
    }],
    Y = v;
  if (2 === (0, i.reducedPaymentInfoExperiment)().bucket) {
    let e = I.country,
      t = B.map(t => ({
        fields: t.fields.map(t => t(null != e ? e : ""))
      }));
    Y = Y.concat(t)
  }
  return (0, r.jsxs)("div", {
    children: [(null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) ? (0, r.jsxs)("div", {
      className: T.cardBrands,
      children: [(0, r.jsx)("div", {
        className: u()(E.IconSizes.SMALL, T.visa, T.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: u()(E.IconSizes.SMALL, T.mastercard, T.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: u()(E.IconSizes.SMALL, T.discover, T.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: u()(E.IconSizes.SMALL, T.amex, T.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: u()(E.IconSizes.SMALL, T.jcb, T.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: u()(E.IconSizes.SMALL, T.dinersclub, T.cardFormHeader)
      })]
    }) : (0, r.jsxs)("div", {
      className: T.cardBrands,
      children: [(0, r.jsx)("div", {
        className: u()(E.IconSizes.SMALL, T.visa_monochrome, T.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: u()(E.IconSizes.SMALL, T.mastercard_monochrome, T.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: u()(E.IconSizes.SMALL, T.discover_monochrome, T.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: u()(E.IconSizes.SMALL, T.amex_monochrome, T.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: u()(E.IconSizes.SMALL, T.jcb_monochrome, T.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: u()(E.IconSizes.SMALL, T.dinersclub_monochrome, T.cardFormHeader)
      })]
    }), (0, r.jsx)(m.default, {
      form: Y,
      errors: O,
      formError: n,
      values: I,
      onFieldChange: function(e, t) {
        if ("name" !== t && "country" !== t && "postalCode" !== t) return;
        let a = {
            ...I
          },
          n = {
            ...L
          },
          s = {
            name: O.name
          };
        !L[t] && "" !== e && (n[t] = !0), a[t] = e, n[t] && "" === e ? "name" === t && (s.name = A.default.Messages.PAYMENT_SOURCE_NAME_ERROR_REQUIRED) : delete s[t], R(a), h(n), g(s)
      },
      onFieldBlur: function() {
        g(D())
      }
    })]
  })
}