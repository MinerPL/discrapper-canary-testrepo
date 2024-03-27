"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
}), s("222007");
var a, n = s("37983"),
  l = s("884691"),
  i = s("476765"),
  r = s("520713"),
  o = s("137460"),
  d = s("983299"),
  u = s("782340"),
  c = s("298961");
(a || (a = {})).EXPIRATION_DATE = "expirationDate";
let S = {
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
  },
  E = [{
    fields: [S.expirationDate]
  }];
var T = function(e) {
  let {
    onCardInfoChange: t,
    className: s,
    expirationDate: a,
    error: i
  } = e, [o, c] = l.useState(!1), [S, T] = l.useState(null), [f, _] = l.useState(a);
  return l.useEffect(() => {
    t({
      expirationDate: f
    }, null === S)
  }, [f, t, S]), (0, n.jsx)(d.default, {
    className: s,
    form: E,
    values: {
      expirationDate: f
    },
    errors: null != S ? {
      expirationDate: S
    } : {},
    formError: i,
    onFieldChange: e => {
      !o && "" !== e && c(!0), o && "" === e || !(0, r.validateExpiry)(e) ? T(u.default.Messages.CREDIT_CARD_ERROR_EXPIRATION) : T(null), _(e)
    }
  })
}