"use strict";
a.r(t), a("47120");
var n, s, r, l, o = a("735250"),
  u = a("470079"),
  c = a("452079"),
  i = a("803997"),
  d = a.n(i),
  E = a("481060"),
  p = a("912454"),
  f = a("689938"),
  m = a("38045"),
  _ = a("717897");
(r = n || (n = {})).CardNumber = "cardNumber", r.CardExpiry = "cardExpiry", r.CardCvc = "cardCvc", (l = s || (s = {})).Change = "change", l.Focus = "focus", l.Blur = "blur";
t.default = function(e) {
  let t = u.useRef(null),
    {
      stripeType: a,
      flipped: n,
      updateCompleted: s,
      onFocus: r,
      onBlur: l
    } = e,
    [i, A] = u.useState(p.IconTypes.UNKNOWN),
    [T, N] = u.useState(!1),
    [S, y] = u.useState(!1),
    [C, P] = u.useState(null),
    [I, R] = u.useState({}),
    L = (0, c.useElements)(),
    h = u.useCallback(() => {
      if (null != L) switch (a) {
        case "cardNumber": {
          let e = L.getElement(c.CardNumberElement);
          if (null == e) return;
          e.off("change"), e.off("focus"), e.off("blur");
          break
        }
        case "cardExpiry": {
          let e = L.getElement(c.CardExpiryElement);
          if (null == e) return;
          e.off("change"), e.off("focus"), e.off("blur");
          break
        }
        case "cardCvc": {
          let e = L.getElement(c.CardCvcElement);
          if (null == e) return;
          e.off("change"), e.off("focus"), e.off("blur")
        }
      }
    }, [L, a]),
    O = u.useCallback(e => {
      !S && !e.empty && y(!0), null != s && s(e.complete), null != e.error && N(!1)
    }, [S, s]),
    g = u.useCallback(() => {
      N(!0), null == r || r()
    }, [r]),
    M = u.useCallback(() => {
      N(!1), null == l || l()
    }, [l]),
    D = u.useCallback(() => {
      if (null != L) switch (a) {
        case "cardNumber": {
          let e = L.getElement(c.CardNumberElement);
          if (null == e) return;
          e.on("change", e => {
            i !== e.brand && A(e.brand), e.empty && S ? P(f.default.Messages.CREDIT_CARD_ERROR_REQUIRED) : null != e.error ? P(f.default.Messages.CREDIT_CARD_ERROR_NUMBER) : P(null), O(e)
          }), e.on("focus", g), e.on("blur", M);
          break
        }
        case "cardExpiry": {
          let e = L.getElement(c.CardExpiryElement);
          if (null == e) return;
          e.on("change", e => {
            null != e.error || e.empty && S ? P(f.default.Messages.CREDIT_CARD_ERROR_EXPIRATION) : P(null), O(e)
          }), e.on("focus", g), e.on("blur", M);
          break
        }
        case "cardCvc": {
          let e = L.getElement(c.CardCvcElement);
          if (null == e) return;
          e.on("change", e => {
            null != e.error || e.empty && S ? P(f.default.Messages.CREDIT_CARD_ERROR_SECURITY_CODE) : P(null), O(e)
          }), e.on("focus", g), e.on("blur", M)
        }
      }
    }, [M, O, g, i, L, S, a]);

  function x() {
    return d()(m.cardInput, {
      [m.cardInputError]: null !== C,
      [m.cardInputFocused]: T,
      [m.cardNumberInput]: "cardNumber" === a
    })
  }
  return u.useEffect(() => (D(), () => {
    h()
  }), [D, h]), u.useLayoutEffect(() => {
    let {
      current: e
    } = t;
    if (null == e) return;
    let a = window.getComputedStyle(e),
      n = window.getComputedStyle(e, "::placeholder"),
      s = a.getPropertyValue("font-family"),
      r = a.getPropertyValue("font-weight"),
      l = a.getPropertyValue("color");
    R({
      base: {
        fontFamily: s,
        fontWeight: r,
        color: l,
        fontSize: a.getPropertyValue("font-size"),
        "::placeholder": {
          color: n.getPropertyValue("color")
        }
      }
    })
  }, [t]), (0, o.jsxs)("div", {
    className: d()(m.cardNumberWrapper),
    "data-stripe-type": a,
    children: [(0, o.jsx)("div", {
      ref: t,
      className: d()(m.hiddenDiv, _.input)
    }), function() {
      switch (a) {
        case "cardNumber":
          return (0, o.jsxs)("div", {
            children: [(0, o.jsx)(p.default, {
              className: m.cardIcon,
              type: i,
              flipped: n
            }), (0, o.jsx)(c.CardNumberElement, {
              options: {
                style: I,
                placeholder: f.default.Messages.PAYMENT_SOURCE_CARD_NUMBER
              },
              className: x()
            })]
          });
        case "cardExpiry":
          return (0, o.jsx)(c.CardExpiryElement, {
            options: {
              style: I,
              placeholder: f.default.Messages.PAYMENT_SOURCE_EXPIRATION_DATE_PLACEHOLDER
            },
            className: x()
          });
        case "cardCvc":
          return (0, o.jsx)(c.CardCvcElement, {
            options: {
              style: I,
              placeholder: f.default.Messages.CREDIT_CARD_SECURITY_CODE
            },
            className: x()
          })
      }
    }(), (0, o.jsx)(E.InputError, {
      error: C
    })]
  })
}