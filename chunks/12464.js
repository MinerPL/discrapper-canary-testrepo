"use strict";
a.r(t), a("47120");
var n, l, s, r, o = a("735250"),
  u = a("470079"),
  i = a("452079"),
  d = a("120356"),
  c = a.n(d),
  E = a("481060"),
  p = a("912454"),
  m = a("689938"),
  f = a("578441"),
  S = a("825979");
(s = n || (n = {})).CardNumber = "cardNumber", s.CardExpiry = "cardExpiry", s.CardCvc = "cardCvc", (r = l || (l = {})).Change = "change", r.Focus = "focus", r.Blur = "blur";
t.default = function(e) {
  let t = u.useRef(null),
    {
      stripeType: a,
      flipped: n,
      updateCompleted: l,
      onFocus: s,
      onBlur: r
    } = e,
    [d, _] = u.useState(p.IconTypes.UNKNOWN),
    [A, N] = u.useState(!1),
    [I, T] = u.useState(!1),
    [C, y] = u.useState(null),
    [R, h] = u.useState({}),
    L = (0, i.useElements)(),
    P = u.useCallback(() => {
      if (null != L) switch (a) {
        case "cardNumber": {
          let e = L.getElement(i.CardNumberElement);
          if (null == e) return;
          e.off("change"), e.off("focus"), e.off("blur");
          break
        }
        case "cardExpiry": {
          let e = L.getElement(i.CardExpiryElement);
          if (null == e) return;
          e.off("change"), e.off("focus"), e.off("blur");
          break
        }
        case "cardCvc": {
          let e = L.getElement(i.CardCvcElement);
          if (null == e) return;
          e.off("change"), e.off("focus"), e.off("blur")
        }
      }
    }, [L, a]),
    M = u.useCallback(e => {
      !I && !e.empty && T(!0), null != l && l(e.complete), null != e.error && N(!1)
    }, [I, l]),
    g = u.useCallback(() => {
      N(!0), null == s || s()
    }, [s]),
    b = u.useCallback(() => {
      N(!1), null == r || r()
    }, [r]),
    O = u.useCallback(() => {
      if (null != L) switch (a) {
        case "cardNumber": {
          let e = L.getElement(i.CardNumberElement);
          if (null == e) return;
          e.on("change", e => {
            d !== e.brand && _(e.brand), e.empty && I ? y(m.default.Messages.CREDIT_CARD_ERROR_REQUIRED) : null != e.error ? y(m.default.Messages.CREDIT_CARD_ERROR_NUMBER) : y(null), M(e)
          }), e.on("focus", g), e.on("blur", b);
          break
        }
        case "cardExpiry": {
          let e = L.getElement(i.CardExpiryElement);
          if (null == e) return;
          e.on("change", e => {
            null != e.error || e.empty && I ? y(m.default.Messages.CREDIT_CARD_ERROR_EXPIRATION) : y(null), M(e)
          }), e.on("focus", g), e.on("blur", b);
          break
        }
        case "cardCvc": {
          let e = L.getElement(i.CardCvcElement);
          if (null == e) return;
          e.on("change", e => {
            null != e.error || e.empty && I ? y(m.default.Messages.CREDIT_CARD_ERROR_SECURITY_CODE) : y(null), M(e)
          }), e.on("focus", g), e.on("blur", b)
        }
      }
    }, [b, M, g, d, L, I, a]);

  function D() {
    return c()(f.cardInput, {
      [f.cardInputError]: null !== C,
      [f.cardInputFocused]: A,
      [f.cardNumberInput]: "cardNumber" === a
    })
  }
  return u.useEffect(() => (O(), () => {
    P()
  }), [O, P]), u.useLayoutEffect(() => {
    let {
      current: e
    } = t;
    if (null == e) return;
    let a = window.getComputedStyle(e),
      n = window.getComputedStyle(e, "::placeholder"),
      l = a.getPropertyValue("font-family"),
      s = a.getPropertyValue("font-weight"),
      r = a.getPropertyValue("color");
    h({
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
    className: c()(f.cardNumberWrapper),
    "data-stripe-type": a,
    children: [(0, o.jsx)("div", {
      ref: t,
      className: c()(f.hiddenDiv, S.input)
    }), function() {
      switch (a) {
        case "cardNumber":
          return (0, o.jsxs)("div", {
            children: [(0, o.jsx)(p.default, {
              className: f.cardIcon,
              type: d,
              flipped: n
            }), (0, o.jsx)(i.CardNumberElement, {
              options: {
                style: R,
                placeholder: m.default.Messages.PAYMENT_SOURCE_CARD_NUMBER
              },
              className: D()
            })]
          });
        case "cardExpiry":
          return (0, o.jsx)(i.CardExpiryElement, {
            options: {
              style: R,
              placeholder: m.default.Messages.PAYMENT_SOURCE_EXPIRATION_DATE_PLACEHOLDER
            },
            className: D()
          });
        case "cardCvc":
          return (0, o.jsx)(i.CardCvcElement, {
            options: {
              style: R,
              placeholder: m.default.Messages.CREDIT_CARD_SECURITY_CODE
            },
            className: D()
          })
      }
    }(), (0, o.jsx)(E.InputError, {
      error: C
    })]
  })
}