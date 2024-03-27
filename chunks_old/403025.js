"use strict";
i.r(t), i.d(t, {
  default: function() {
    return d
  }
});
var n = i("37983");
i("884691");
var a = i("414456"),
  l = i.n(a),
  s = i("472850"),
  r = i("933351"),
  o = i("935090"),
  d = function(e) {
    let {
      formField: t,
      index: i,
      isDragEnabled: a,
      isDropHovered: d,
      onDrop: u,
      onEdit: c,
      onRemove: f
    } = e, {
      label: E
    } = t;
    return (0, n.jsx)(r.default, {
      field: t,
      index: i,
      isDragEnabled: a,
      isDropHovered: d,
      onDrop: u,
      onEdit: c,
      onRemove: f,
      title: E,
      children: (0, n.jsx)(s.MultipleChoiceFieldBody, {
        field: t,
        value: void 0,
        radioItemClassName: l(o.fieldBackground, o.multipleChoiceFixedTextColor),
        disabled: !1
      })
    })
  }