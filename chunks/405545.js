"use strict";
i.r(t);
var a = i("735250");
i("470079");
var l = i("803997"),
  n = i.n(l),
  s = i("186078"),
  r = i("137158"),
  o = i("482249");
t.default = function(e) {
  let {
    formField: t,
    index: i,
    isDragEnabled: l,
    isDropHovered: d,
    onDrop: c,
    onEdit: u,
    onRemove: f
  } = e, {
    label: m
  } = t;
  return (0, a.jsx)(r.default, {
    field: t,
    index: i,
    isDragEnabled: l,
    isDropHovered: d,
    onDrop: c,
    onEdit: u,
    onRemove: f,
    title: m,
    children: (0, a.jsx)(s.MultipleChoiceFieldBody, {
      field: t,
      value: void 0,
      radioItemClassName: n()(o.fieldBackground, o.multipleChoiceFixedTextColor),
      disabled: !1
    })
  })
}