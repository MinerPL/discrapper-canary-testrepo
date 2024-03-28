"use strict";
a.r(t), a.d(t, {
  default: function() {
    return i
  }
});
var s = a("735250");
a("470079");
var l = a("803997"),
  n = a.n(l),
  r = a("481060"),
  u = a("259580"),
  o = a("840882");

function i(e) {
  let {
    options: t,
    onClick: a,
    className: l,
    optionClassName: i,
    hideCaret: d
  } = e;
  return (0, s.jsx)("div", {
    className: n()(o.root, l),
    children: t.map((e, t) => (0, s.jsxs)(r.Clickable, {
      onClick: () => a(e),
      className: n()(o.option, i),
      children: [(0, s.jsx)(r.Text, {
        className: o.text,
        color: "none",
        variant: "text-md/normal",
        children: e.label
      }), !(null == d ? void 0 : d(e)) && (0, s.jsx)(u.default, {
        className: o.caret,
        direction: u.default.Directions.RIGHT
      })]
    }, t))
  })
}