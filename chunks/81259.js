"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
}), a("627341");
var s = a("735250");
a("470079");
var i = a("803997"),
  n = a.n(i),
  l = a("278074"),
  o = a("692547"),
  r = a("481060"),
  d = a("551556"),
  u = a("696202"),
  c = a("659338");
let E = () => (0, s.jsx)(d.default, {
    width: 13,
    height: 13,
    backgroundColor: o.default.colors.TEXT_POSITIVE.css
  }),
  m = () => (0, s.jsx)(u.default, {
    width: 13,
    height: 13,
    color: o.default.colors.TEXT_DANGER.css
  }),
  S = () => (0, s.jsx)(u.default, {
    width: 13,
    height: 13,
    color: o.default.colors.TEXT_WARNING.css
  });

function f(e) {
  let t = (0, l.match)(e.type).with("info", () => (0, s.jsx)(S, {})).with("error", () => (0, s.jsx)(m, {})).with("success", () => (0, s.jsx)(E, {})).otherwise(() => null);
  return (0, s.jsxs)(s.Fragment, {
    children: [t, (0, s.jsx)(r.Text, {
      variant: "text-sm/medium",
      className: n()(c.formMessage, {
        [c.formMessageNegative]: "error" === e.type,
        [c.formMessagePositive]: "success" === e.type
      }),
      children: e.children
    })]
  })
}