"use strict";
n.r(t), n.d(t, {
  ParagraphFieldBody: function() {
    return c
  },
  DisabledParagraphFormField: function() {
    return d
  },
  ParagraphFormField: function() {
    return f
  }
});
var r = n("37983");
n("884691");
var i = n("414456"),
  s = n.n(i),
  a = n("77078"),
  l = n("272460"),
  o = n("394294"),
  u = n("28551");

function c(e) {
  let {
    value: t,
    placeholder: n,
    onChange: i,
    disabled: l,
    className: c
  } = e;
  return (0, r.jsx)(a.TextArea, {
    className: s(u.paragraphFieldBody, c),
    maxLength: o.MAX_PARAGRAPH_RESPONSE_LENGTH,
    value: null != t ? t : "",
    placeholder: null != n ? n : "",
    onChange: i,
    disabled: l,
    autosize: !0
  })
}

function d(e) {
  let {
    formField: t
  } = e;
  return (0, r.jsx)(l.QuestionRenderer, {
    title: t.label,
    children: (0, r.jsx)(c, {
      className: u.fieldBackground,
      value: t.response,
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
      className: u.fieldBackground,
      value: t.response,
      onChange: n
    })
  })
}