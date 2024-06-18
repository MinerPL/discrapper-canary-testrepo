"use strict";
n.d(t, {
  R: function() {
    return r
  },
  v: function() {
    return _
  }
});
var i, r, s = n(735250);
n(470079);
var o = n(120356),
  a = n.n(o),
  l = n(337033),
  u = n(227103);

function _(e) {
  let t, {
    tag: n = "h5",
    children: i,
    className: r,
    faded: o,
    disabled: _,
    required: d = !1,
    error: c,
    errorId: E,
    ...I
  } = e;
  switch (n) {
    case "legend":
    case "label":
      t = n;
      break;
    default:
      t = l.H
  }
  return (0, s.jsxs)(t, {
    className: a()(u[n], "h5" !== n ? u.defaultColor : null, r, {
      [u["defaultMargin".concat(n)]]: null == r,
      [u.faded]: o,
      [u.disabled]: _,
      [u.error]: null != c
    }),
    ...I,
    children: [i, d && null == c ? (0, s.jsx)("span", {
      className: u.required,
      children: "*"
    }) : null, null != c ? (0, s.jsxs)("span", {
      id: E,
      className: u.errorMessage,
      children: [null != i ? (0, s.jsx)("span", {
        className: u.errorSeparator,
        children: "-"
      }) : null, c]
    }) : null]
  })
}(i = r || (r = {})).H1 = "h1", i.H2 = "h2", i.H3 = "h3", i.H4 = "h4", i.H5 = "h5", i.LABEL = "label", i.LEGEND = "legend"