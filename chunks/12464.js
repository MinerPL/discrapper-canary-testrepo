t(47120);
var n, r, s, l, o = t(735250),
  i = t(470079),
  c = t(160612),
  u = t(120356),
  d = t.n(u),
  E = t(481060),
  _ = t(912454),
  p = t(689938),
  m = t(858594),
  A = t(216315);
(s = n || (n = {})).CardNumber = 'cardNumber', s.CardExpiry = 'cardExpiry', s.CardCvc = 'cardCvc', (l = r || (r = {})).Change = 'change', l.Focus = 'focus', l.Blur = 'blur';
a.Z = function(e) {
  let a = i.useRef(null),
{
  stripeType: t,
  flipped: n,
  updateCompleted: r,
  onFocus: s,
  onBlur: l
} = e,
[u, N] = i.useState(_.Qy.UNKNOWN),
[h, T] = i.useState(!1),
[I, S] = i.useState(!1),
[C, b] = i.useState(null),
[P, R] = i.useState({}),
f = (0, c.useElements)(),
y = i.useCallback(() => {
  if (null != f)
    switch (t) {
      case 'cardNumber': {
        let e = f.getElement(c.CardNumberElement);
        if (null == e)
          return;
        e.off('change'), e.off('focus'), e.off('blur');
        break;
      }
      case 'cardExpiry': {
        let e = f.getElement(c.CardExpiryElement);
        if (null == e)
          return;
        e.off('change'), e.off('focus'), e.off('blur');
        break;
      }
      case 'cardCvc': {
        let e = f.getElement(c.CardCvcElement);
        if (null == e)
          return;
        e.off('change'), e.off('focus'), e.off('blur');
      }
    }
}, [
  f,
  t
]),
M = i.useCallback(e => {
  !I && !e.empty && S(!0), null != r && r(e.complete), null != e.error && T(!1);
}, [
  I,
  r
]),
g = i.useCallback(() => {
  T(!0), null == s || s();
}, [s]),
O = i.useCallback(() => {
  T(!1), null == l || l();
}, [l]),
L = i.useCallback(() => {
  if (null != f)
    switch (t) {
      case 'cardNumber': {
        let e = f.getElement(c.CardNumberElement);
        if (null == e)
          return;
        e.on('change', e => {
          u !== e.brand && N(e.brand), e.empty && I ? b(p.Z.Messages.CREDIT_CARD_ERROR_REQUIRED) : null != e.error ? b(p.Z.Messages.CREDIT_CARD_ERROR_NUMBER) : b(null), M(e);
        }), e.on('focus', g), e.on('blur', O);
        break;
      }
      case 'cardExpiry': {
        let e = f.getElement(c.CardExpiryElement);
        if (null == e)
          return;
        e.on('change', e => {
          null != e.error || e.empty && I ? b(p.Z.Messages.CREDIT_CARD_ERROR_EXPIRATION) : b(null), M(e);
        }), e.on('focus', g), e.on('blur', O);
        break;
      }
      case 'cardCvc': {
        let e = f.getElement(c.CardCvcElement);
        if (null == e)
          return;
        e.on('change', e => {
          null != e.error || e.empty && I ? b(p.Z.Messages.CREDIT_CARD_ERROR_SECURITY_CODE) : b(null), M(e);
        }), e.on('focus', g), e.on('blur', O);
      }
    }
}, [
  O,
  M,
  g,
  u,
  f,
  I,
  t
]);

  function v() {
return d()(m.cardInput, {
  [m.cardInputError]: null !== C,
  [m.cardInputFocused]: h,
  [m.cardNumberInput]: 'cardNumber' === t
});
  }
  return i.useEffect(() => (L(), () => {
y();
  }), [
L,
y
  ]), i.useLayoutEffect(() => {
let {
  current: e
} = a;
if (null == e)
  return;
let t = window.getComputedStyle(e),
  n = window.getComputedStyle(e, '::placeholder'),
  r = t.getPropertyValue('font-family'),
  s = t.getPropertyValue('font-weight'),
  l = t.getPropertyValue('color');
R({
  base: {
    fontFamily: r,
    fontWeight: s,
    color: l,
    fontSize: t.getPropertyValue('font-size'),
    '::placeholder': {
      color: n.getPropertyValue('color')
    }
  }
});
  }, [a]), (0, o.jsxs)('div', {
className: d()(m.cardNumberWrapper),
'data-stripe-type': t,
children: [
  (0, o.jsx)('div', {
    ref: a,
    className: d()(m.hiddenDiv, A.input)
  }),
  function() {
    switch (t) {
      case 'cardNumber':
        return (0, o.jsxs)('div', {
          children: [
            (0, o.jsx)(_.ZP, {
              className: m.cardIcon,
              type: u,
              flipped: n
            }),
            (0, o.jsx)(c.CardNumberElement, {
              options: {
                style: P,
                placeholder: p.Z.Messages.PAYMENT_SOURCE_CARD_NUMBER,
                disableLink: !1
              },
              className: v()
            })
          ]
        });
      case 'cardExpiry':
        return (0, o.jsx)(c.CardExpiryElement, {
          options: {
            style: P,
            placeholder: p.Z.Messages.PAYMENT_SOURCE_EXPIRATION_DATE_PLACEHOLDER
          },
          className: v()
        });
      case 'cardCvc':
        return (0, o.jsx)(c.CardCvcElement, {
          options: {
            style: P,
            placeholder: p.Z.Messages.CREDIT_CARD_SECURITY_CODE
          },
          className: v()
        });
    }
  }(),
  (0, o.jsx)(E.InputError, {
    error: C
  })
]
  });
};