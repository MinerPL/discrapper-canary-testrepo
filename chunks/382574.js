"use strict";
n.r(t);
var a = n("735250");
n("470079");
var i = n("73880"),
  r = n("137158"),
  s = n("689938"),
  l = n("915580");
t.default = function(e) {
  let {
    formField: t,
    index: n,
    isDragEnabled: o,
    isDropHovered: c,
    onDrop: d,
    onEdit: u,
    onRemove: f,
    canRemove: m,
    actionsLocation: h
  } = e, {
    label: E,
    placeholder: T
  } = t;
  return (0, a.jsx)(r.default, {
    field: t,
    index: n,
    isDragEnabled: o,
    isDropHovered: c,
    onDrop: d,
    onEdit: u,
    onRemove: f,
    title: E,
    canRemove: m,
    actionsLocation: h,
    children: (0, a.jsx)(i.ParagraphFieldBody, {
      className: l.fieldBackground,
      placeholder: null != T ? T : s.default.Messages.MEMBER_VERIFICATION_ANSWER_PLACEHOLDER,
      disabled: !0
    })
  })
}