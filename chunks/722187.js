"use strict";
n.d(t, {
  l: function() {
    return _
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(766646),
  a = n(154921),
  l = n(689938),
  u = n(636176);

function _(e) {
  let {
    children: t,
    className: n,
    disabled: r,
    required: _ = !1,
    ...d
  } = e;
  return (0, i.jsxs)(a.Z, {
    tag: "label",
    color: a.Z.Colors.HEADER_SECONDARY,
    className: s()(u.label, n, {
      [u.defaultMargin]: null == n,
      [u.disabled]: r
    }),
    ...d,
    children: [t, _ && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("span", {
        className: u.required,
        "aria-hidden": !0,
        children: "*"
      }), (0, i.jsx)(o.n, {
        children: l.Z.Messages.REQUIRED
      })]
    })]
  })
}