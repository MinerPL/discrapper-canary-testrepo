"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("803997"),
  l = n.n(s),
  i = n("481060"),
  r = n("51144"),
  o = n("42545");
t.default = e => {
  let {
    user: t,
    fill: n
  } = e, s = "\xa0(@".concat(r.default.getUserTag(t, {
    decoration: "never"
  }), ")");
  return (0, a.jsxs)(i.Text, {
    className: l()([o.text, {
      [o.fill]: n
    }]),
    variant: "text-md/medium",
    children: [(0, a.jsx)("span", {
      className: o.username,
      children: r.default.getName(t)
    }), (0, a.jsx)("span", {
      className: o.discriminator,
      children: s
    })]
  })
}