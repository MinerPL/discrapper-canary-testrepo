"use strict";
a.r(t), a("47120");
var n, l, s, r, o = a("735250"),
  i = a("470079"),
  u = a("160612"),
  d = a("120356"),
  c = a.n(d),
  E = a("481060"),
  p = a("818083"),
  m = a("912454"),
  f = a("689938"),
  S = a("589695"),
  _ = a("12349");
(s = n || (n = {})).CardNumber = "cardNumber", s.CardExpiry = "cardExpiry", s.CardCvc = "cardCvc", (r = l || (l = {})).Change = "change", r.Focus = "focus", r.Blur = "blur";
let A = (0, p.createExperiment)({
  kind: "user",
  id: "2024-05_enable_stripe_link_on_split_cardelement",
  label: "Enable Stripe Link Experiment on Split CardElement",
  defaultConfig: {
    disableLink: !0
  },
  treatments: [{
    id: 1,
    label: "Enable Stripe Link",
    config: {
      disableLink: !1
    }
  }]
});
t.default = function(e) {
  let t = i.useRef(null),
    {
      stripeType: a,
      flipped: n,
      updateCompleted: l,
      onFocus: s,
      onBlur: r
    } = e,
    [d, p] = i.useState(m.IconTypes.UNKNOWN),
    [N, I] = i.useState(!1),
    [C, T] = i.useState(!1),
    [y, R] = i.useState(null),
    [h, L] = i.useState({}),
    P = (0, u.useElements)(),
    {
      disableLink: M
    } = A.useExperiment({
      location: "adding_new_card_modal"
    }, {
      autoTrackExposure: !0
    }),
    g = i.useCallback(() => {
      if (null != P) switch (a) {
        case "cardNumber": {
          let e = P.getElement(u.CardNumberElement);
          if (null == e) return;
          e.off("change"), e.off("focus"), e.off("blur");
          break
        }
        case "cardExpiry": {
          let e = P.getElement(u.CardExpiryElement);
          if (null == e) return;
          e.off("change"), e.off("focus"), e.off("blur");
          break
        }
        case "cardCvc": {
          let e = P.getElement(u.CardCvcElement);
          if (null == e) return;
          e.off("change"), e.off("focus"), e.off("blur")
        }
      }
    }, [P, a]),
    b = i.useCallback(e => {
      !C && !e.empty && T(!0), null != l && l(e.complete), null != e.error && I(!1)
    }, [C, l]),
    O = i.useCallback(() => {
      I(!0), null == s || s()
    }, [s]),
    D = i.useCallback(() => {
      I(!1), null == r || r()
    }, [r]),
    v = i.useCallback(() => {
      if (null != P) switch (a) {
        case "cardNumber": {
          let e = P.getElement(u.CardNumberElement);
          if (null == e) return;
          e.on("change", e => {
            d !== e.brand && p(e.brand), e.empty && C ? R(f.default.Messages.CREDIT_CARD_ERROR_REQUIRED) : null != e.error ? R(f.default.Messages.CREDIT_CARD_ERROR_NUMBER) : R(null), b(e)
          }), e.on("focus", O), e.on("blur", D);
          break
        }
        case "cardExpiry": {
          let e = P.getElement(u.CardExpiryElement);
          if (null == e) return;
          e.on("change", e => {
            null != e.error || e.empty && C ? R(f.default.Messages.CREDIT_CARD_ERROR_EXPIRATION) : R(null), b(e)
          }), e.on("focus", O), e.on("blur", D);
          break
        }
        case "cardCvc": {
          let e = P.getElement(u.CardCvcElement);
          if (null == e) return;
          e.on("change", e => {
            null != e.error || e.empty && C ? R(f.default.Messages.CREDIT_CARD_ERROR_SECURITY_CODE) : R(null), b(e)
          }), e.on("focus", O), e.on("blur", D)
        }
      }
    }, [D, b, O, d, P, C, a]);

  function x() {
    return c()(S.cardInput, {
      [S.cardInputError]: null !== y,
      [S.cardInputFocused]: N,
      [S.cardNumberInput]: "cardNumber" === a
    })
  }
  return i.useEffect(() => (v(), () => {
    g()
  }), [v, g]), i.useLayoutEffect(() => {
    let {
      current: e
    } = t;
    if (null == e) return;
    let a = window.getComputedStyle(e),
      n = window.getComputedStyle(e, "::placeholder"),
      l = a.getPropertyValue("font-family"),
      s = a.getPropertyValue("font-weight"),
      r = a.getPropertyValue("color");
    L({
      base: {
        fontFamily: l,
        fontWeight: s,
        color: r,
        fontSize: a.getPropertyValue("font-size"),
        "::placeholder": {
          color: n.getPropertyValue("color")
        }
      }
    })
  }, [t]), (0, o.jsxs)("div", {
    className: c()(S.cardNumberWrapper),
    "data-stripe-type": a,
    children: [(0, o.jsx)("div", {
      ref: t,
      className: c()(S.hiddenDiv, _.input)
    }), function() {
      let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
      switch (a) {
        case "cardNumber":
          return (0, o.jsxs)("div", {
            children: [(0, o.jsx)(m.default, {
              className: S.cardIcon,
              type: d,
              flipped: n
            }), (0, o.jsx)(u.CardNumberElement, {
              options: {
                style: h,
                placeholder: f.default.Messages.PAYMENT_SOURCE_CARD_NUMBER,
                disableLink: e
              },
              className: x()
            })]
          });
        case "cardExpiry":
          return (0, o.jsx)(u.CardExpiryElement, {
            options: {
              style: h,
              placeholder: f.default.Messages.PAYMENT_SOURCE_EXPIRATION_DATE_PLACEHOLDER
            },
            className: x()
          });
        case "cardCvc":
          return (0, o.jsx)(u.CardCvcElement, {
            options: {
              style: h,
              placeholder: f.default.Messages.CREDIT_CARD_SECURITY_CODE
            },
            className: x()
          })
      }
    }(M), (0, o.jsx)(E.InputError, {
      error: y
    })]
  })
}