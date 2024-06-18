"use strict";
n.d(t, {
  R: function() {
    return _
  },
  g: function() {
    return l
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(154921),
  a = n(102998);
let l = {
    DEFAULT: "default",
    INPUT_PLACEHOLDER: "placeholder",
    DESCRIPTION: "description",
    LABEL_BOLD: "labelBold",
    LABEL_SELECTED: "labelSelected",
    LABEL_DESCRIPTOR: "labelDescriptor",
    ERROR: "error",
    SUCCESS: "success"
  },
  u = {
    DEFAULT: "modeDefault",
    DISABLED: "modeDisabled",
    SELECTABLE: "modeSelectable"
  };

function _(e) {
  let {
    type: t = l.DEFAULT,
    className: n,
    disabled: r,
    selectable: _,
    children: d,
    style: c,
    ...E
  } = e, I = u.DEFAULT;
  return r ? I = u.DISABLED : _ && (I = u.SELECTABLE), (0, i.jsx)(o.Z, {
    className: s()(a[t], n, a[I]),
    style: c,
    ...E,
    children: d
  })
}
_.Types = l