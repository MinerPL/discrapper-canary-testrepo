"use strict";
a.r(t);
var n = a("735250");
a("470079");
var r = a("120356"),
  s = a.n(r),
  i = a("186078"),
  l = a("137158"),
  o = a("17359");
t.default = function(e) {
  let {
    formField: t,
    index: a,
    isDragEnabled: r,
    isDropHovered: c,
    onDrop: d,
    onEdit: u,
    onRemove: f,
    canRemove: m,
    actionsLocation: h
  } = e, {
    label: p
  } = t;
  return (0, n.jsx)(l.default, {
    field: t,
    index: a,
    isDragEnabled: r,
    isDropHovered: c,
    onDrop: d,
    onEdit: u,
    onRemove: f,
    title: p,
    canRemove: m,
    actionsLocation: h,
    children: (0, n.jsx)(i.MultipleChoiceFieldBody, {
      field: t,
      value: void 0,
      radioItemClassName: s()(o.fieldBackground, o.multipleChoiceFixedTextColor),
      disabled: !1
    })
  })
}