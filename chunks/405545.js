"use strict";
n.r(t);
var a = n("735250");
n("470079");
var i = n("120356"),
  r = n.n(i),
  s = n("186078"),
  l = n("137158"),
  o = n("915580");
t.default = function(e) {
  let {
    formField: t,
    index: n,
    isDragEnabled: i,
    isDropHovered: c,
    onDrop: d,
    onEdit: u,
    onRemove: f,
    canRemove: m,
    actionsLocation: h
  } = e, {
    label: E
  } = t;
  return (0, a.jsx)(l.default, {
    field: t,
    index: n,
    isDragEnabled: i,
    isDropHovered: c,
    onDrop: d,
    onEdit: u,
    onRemove: f,
    title: E,
    canRemove: m,
    actionsLocation: h,
    children: (0, a.jsx)(s.MultipleChoiceFieldBody, {
      field: t,
      value: void 0,
      radioItemClassName: r()(o.fieldBackground, o.multipleChoiceFixedTextColor),
      disabled: !1
    })
  })
}