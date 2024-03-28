"use strict";
s.r(t), s("47120");
var a, n = s("735250"),
  l = s("470079"),
  i = s("153124"),
  r = s("622999"),
  o = s("655868"),
  d = s("754103"),
  u = s("689938"),
  c = s("451893");
(a || (a = {})).EXPIRATION_DATE = "expirationDate";
let S = [{
  fields: [{
    expirationDate: {
      name: "expirationDate",
      id: (0, i.uid)(),
      title: () => u.default.Messages.CREDIT_CARD_EXPIRATION_DATE,
      autoComplete: "cc-exp",
      placeholder: () => u.default.Messages.PAYMENT_SOURCE_EXPIRATION_DATE_PLACEHOLDER,
      pattern: "\\d*",
      getClassNameForLayout: () => c.width50,
      renderInput: e => (0, n.jsx)(o.default, {
        ...e
      })
    }
  }.expirationDate]
}];
t.default = function(e) {
  let {
    onCardInfoChange: t,
    className: s,
    expirationDate: a,
    error: i
  } = e, [o, c] = l.useState(!1), [E, T] = l.useState(null), [_, f] = l.useState(a);
  return l.useEffect(() => {
    t({
      expirationDate: _
    }, null === E)
  }, [_, t, E]), (0, n.jsx)(d.default, {
    className: s,
    form: S,
    values: {
      expirationDate: _
    },
    errors: null != E ? {
      expirationDate: E
    } : {},
    formError: i,
    onFieldChange: e => {
      !o && "" !== e && c(!0), o && "" === e || !(0, r.validateExpiry)(e) ? T(u.default.Messages.CREDIT_CARD_ERROR_EXPIRATION) : T(null), f(e)
    }
  })
}