"use strict";
i.r(t);
var a = i("735250");
i("470079");
var l = i("73880"),
  n = i("137158"),
  s = i("482249");
t.default = function(e) {
  let {
    formField: t,
    index: i,
    isDragEnabled: r,
    isDropHovered: o,
    onDrop: d,
    onEdit: c,
    onRemove: u
  } = e, {
    label: f,
    placeholder: m
  } = t;
  return (0, a.jsx)(n.default, {
    field: t,
    index: i,
    isDragEnabled: r,
    isDropHovered: o,
    onDrop: d,
    onEdit: c,
    onRemove: u,
    title: f,
    children: (0, a.jsx)(l.ParagraphFieldBody, {
      className: s.fieldBackground,
      placeholder: m,
      disabled: !0
    })
  })
}