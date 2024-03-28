"use strict";
n.r(t), n.d(t, {
  DisabledMultipleChoiceFormField: function() {
    return h
  },
  MultipleChoiceFieldBody: function() {
    return c
  },
  MultipleChoiceFormField: function() {
    return f
  }
});
var r = n("735250"),
  s = n("470079"),
  o = n("803997"),
  i = n.n(o),
  a = n("481060"),
  l = n("489813"),
  u = n("707592"),
  d = n("819104");

function c(e) {
  let {
    disabled: t,
    field: n,
    value: o,
    radioItemClassName: l,
    radioItemIconClassName: u,
    onChange: c
  } = e, {
    choices: h
  } = n, f = s.useMemo(() => h.map((e, t) => ({
    name: e,
    value: t,
    radioItemIconClassName: i()(d.multipleChoiceIcon, u)
  })), [h, u]);
  return (0, r.jsx)(a.RadioGroup, {
    disabled: t,
    options: f,
    value: o,
    onChange: c,
    radioItemClassName: l,
    withTransparentBackground: !0
  })
}

function h(e) {
  let {
    formField: t
  } = e, n = null != t.response ? t.choices[t.response] : "";
  return (0, r.jsx)(l.QuestionRenderer, {
    title: t.label,
    children: (0, r.jsx)(u.TextInputFieldBody, {
      className: d.fieldBackground,
      value: n,
      disabled: !0
    })
  })
}

function f(e) {
  let {
    formField: t,
    onChange: n
  } = e;
  return (0, r.jsx)(l.QuestionRenderer, {
    title: t.label,
    children: (0, r.jsx)(c, {
      radioItemClassName: d.fieldBackground,
      field: t,
      value: t.response,
      onChange: n
    })
  })
}