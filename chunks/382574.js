"use strict";
a.r(t);
var n = a("735250");
a("470079");
var r = a("73880"),
  s = a("137158"),
  i = a("689938"),
  l = a("17359");
t.default = function(e) {
  let {
    formField: t,
    index: a,
    isDragEnabled: o,
    isDropHovered: c,
    onDrop: d,
    onEdit: u,
    onRemove: f,
    canRemove: m,
    actionsLocation: h
  } = e, {
    label: p,
    placeholder: E
  } = t;
  return (0, n.jsx)(s.default, {
    field: t,
    index: a,
    isDragEnabled: o,
    isDropHovered: c,
    onDrop: d,
    onEdit: u,
    onRemove: f,
    title: p,
    canRemove: m,
    actionsLocation: h,
    children: (0, n.jsx)(r.ParagraphFieldBody, {
      className: l.fieldBackground,
      placeholder: null != E ? E : i.default.Messages.MEMBER_VERIFICATION_ANSWER_PLACEHOLDER,
      disabled: !0
    })
  })
}