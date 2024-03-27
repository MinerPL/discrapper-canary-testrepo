"use strict";
n.r(t), n.d(t, {
  MultipleChoiceFieldBody: function() {
    return d
  },
  DisabledMultipleChoiceFormField: function() {
    return f
  },
  MultipleChoiceFormField: function() {
    return h
  }
});
var r = n("37983"),
  i = n("884691"),
  s = n("414456"),
  l = n.n(s),
  o = n("77078"),
  a = n("272460"),
  u = n("621115"),
  c = n("28551");

function d(e) {
  let {
    disabled: t,
    field: n,
    value: s,
    radioItemClassName: a,
    radioItemIconClassName: u,
    onChange: d
  } = e, {
    choices: f
  } = n, h = i.useMemo(() => f.map((e, t) => ({
    name: e,
    value: t,
    radioItemIconClassName: l(c.multipleChoiceIcon, u)
  })), [f, u]);
  return (0, r.jsx)(o.RadioGroup, {
    disabled: t,
    options: h,
    value: s,
    onChange: d,
    radioItemClassName: a,
    withTransparentBackground: !0
  })
}

function f(e) {
  let {
    formField: t
  } = e, n = null != t.response ? t.choices[t.response] : "";
  return (0, r.jsx)(a.QuestionRenderer, {
    title: t.label,
    children: (0, r.jsx)(u.TextInputFieldBody, {
      className: c.fieldBackground,
      value: n,
      disabled: !0
    })
  })
}

function h(e) {
  let {
    formField: t,
    onChange: n
  } = e;
  return (0, r.jsx)(a.QuestionRenderer, {
    title: t.label,
    children: (0, r.jsx)(d, {
      radioItemClassName: c.fieldBackground,
      field: t,
      value: t.response,
      onChange: n
    })
  })
}