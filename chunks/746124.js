"use strict";
l.r(t);
var a = l("735250");
l("470079");
var s = l("803997"),
  n = l.n(s),
  i = l("481060"),
  r = l("132485");
let u = e => {
  let {
    data: t,
    disabled: l
  } = e, {
    content: s,
    className: u,
    onClick: o,
    disabled: d
  } = t;
  return (0, a.jsx)(i.FocusRing, {
    children: (0, a.jsx)("button", {
      type: "button",
      className: n()(r.item, u),
      onClick: o,
      disabled: l || d,
      children: s
    })
  })
};
t.default = e => {
  let {
    buttons: t,
    disabled: l,
    className: s
  } = e;
  return (0, a.jsx)("div", {
    role: "group",
    className: n()(r.group, s),
    children: t.map((e, t) => (0, a.jsx)(u, {
      data: e,
      disabled: l
    }, t))
  })
}