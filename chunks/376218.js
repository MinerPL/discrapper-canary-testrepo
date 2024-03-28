"use strict";
n.r(t);
var i = n("735250"),
  a = n("470079"),
  l = n("803997"),
  s = n.n(l),
  o = n("420261");
let r = e => {
  let {
    keybind: t,
    separator: n,
    className: l
  } = e;
  return (0, i.jsx)(i.Fragment, {
    children: t.map((e, r) => (0, i.jsxs)(a.Fragment, {
      children: [(0, i.jsx)("span", {
        className: s()(o.key, l),
        children: e
      }), r === t.length - 1 ? void 0 : n]
    }, r))
  })
};
r.defaultProps = {
  separator: "+"
}, t.default = r