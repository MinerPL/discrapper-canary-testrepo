"use strict";
n(47120);
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(586724);
let o = e => {
  let {
    onChange: t,
    label: n,
    subtitle: o,
    selected: a
  } = e;
  return (0, i.jsx)("div", {
    className: s.checkboxRow,
    children: (0, i.jsxs)(r.Checkbox, {
      type: r.Checkbox.Types.INVERTED,
      onChange: () => t(),
      value: a,
      children: [(0, i.jsx)(r.Text, {
        color: "interactive-active",
        variant: "text-md/semibold",
        children: n
      }), null != o ? (0, i.jsx)(r.Text, {
        color: "interactive-active",
        variant: "text-sm/normal",
        children: o
      }) : null]
    })
  })
};
t.Z = e => {
  let {
    element: t,
    state: n,
    onChange: r
  } = e;
  if ((null == t ? void 0 : t.type) !== "checkbox") return null;
  let {
    data: s
  } = t;
  return (0, i.jsx)("div", {
    children: s.map((e, t) => {
      let [s, a, l] = e;
      return (0, i.jsx)(o, {
        onChange: () => r(s, a),
        selected: s in n,
        label: a,
        subtitle: l
      }, "".concat(t, "+button"))
    })
  })
}