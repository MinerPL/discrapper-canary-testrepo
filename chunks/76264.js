"use strict";
n(47120);
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(259580),
  o = n(182019);
let a = e => {
  let {
    child: t,
    onClick: n
  } = e, [a] = t;
  return (0, i.jsxs)(r.Clickable, {
    className: o.childButton,
    onClick: () => n(t),
    children: [(0, i.jsx)(r.Text, {
      className: o.childText,
      variant: "text-md/semibold",
      children: a
    }), (0, i.jsx)(s.Z, {
      className: o.childIcon,
      direction: s.Z.Directions.RIGHT
    })]
  })
};
t.Z = e => {
  let {
    node: {
      children: t
    },
    onSelectChild: n
  } = e;
  if (null == t || 0 === t.length) return null;
  let r = t.map(e => {
    let [t, r] = e;
    return (0, i.jsx)(a, {
      child: e,
      onClick: n
    }, "".concat(t, "+").concat(r))
  });
  return (0, i.jsx)("div", {
    className: o.__invalid_childrenContainer,
    children: r
  })
}