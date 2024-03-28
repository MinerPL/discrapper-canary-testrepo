"use strict";
n.r(t), n.d(t, {
  DisabledParagraphFormField: function() {
    return c
  },
  ParagraphFieldBody: function() {
    return d
  },
  ParagraphFormField: function() {
    return h
  }
});
var r = n("735250");
n("470079");
var s = n("803997"),
  o = n.n(s),
  i = n("481060"),
  a = n("489813"),
  l = n("592286"),
  u = n("819104");

function d(e) {
  let {
    value: t,
    placeholder: n,
    onChange: s,
    disabled: a,
    className: d
  } = e;
  return (0, r.jsx)(i.TextArea, {
    className: o()(u.paragraphFieldBody, d),
    maxLength: l.MAX_PARAGRAPH_RESPONSE_LENGTH,
    value: null != t ? t : "",
    placeholder: null != n ? n : "",
    onChange: s,
    disabled: a,
    autosize: !0
  })
}

function c(e) {
  let {
    formField: t
  } = e;
  return (0, r.jsx)(a.QuestionRenderer, {
    title: t.label,
    children: (0, r.jsx)(d, {
      className: u.fieldBackground,
      value: t.response,
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
      className: u.fieldBackground,
      value: t.response,
      onChange: n
    })
  })
}