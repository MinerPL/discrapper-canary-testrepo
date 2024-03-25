"use strict";
i.r(t), i.d(t, {
  default: function() {
    return r
  }
});
var n = i("37983");
i("884691");
var a = i("199901"),
  l = i("933351"),
  s = i("935090"),
  r = function(e) {
    let {
      formField: t,
      index: i,
      isDragEnabled: r,
      isDropHovered: o,
      onDrop: d,
      onEdit: u,
      onRemove: c
    } = e, {
      label: f,
      placeholder: E
    } = t;
    return (0, n.jsx)(l.default, {
      field: t,
      index: i,
      isDragEnabled: r,
      isDropHovered: o,
      onDrop: d,
      onEdit: u,
      onRemove: c,
      title: f,
      children: (0, n.jsx)(a.ParagraphFieldBody, {
        className: s.fieldBackground,
        placeholder: E,
        disabled: !0
      })
    })
  }