"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var s, a, l = n("37983");
n("884691");
var i = n("77078"),
  r = n("145131"),
  o = n("837899"),
  u = n("430158");
(s = a || (a = {})).SMALL = "SMALL", s.MEDIUM = "MEDIUM", s.LARGE = "LARGE";
let d = {
    SMALL: u.dropdownSmall,
    MEDIUM: u.dropdownMedium,
    LARGE: u.dropdownLarge
  },
  c = e => {
    let {
      onDropdownClick: t,
      children: n,
      contentClassName: s,
      dropdownSize: a = "MEDIUM",
      ...c
    } = e;
    return (0, l.jsx)(i.Button, {
      ...c,
      children: (0, l.jsxs)(r.default, {
        align: r.default.Align.CENTER,
        children: [(0, l.jsx)(r.default.Child, {
          className: s,
          children: n
        }), null != t ? (0, l.jsxs)(i.Clickable, {
          className: d[a],
          onClick: e => {
            e.stopPropagation(), null != t && t(e)
          },
          children: [(0, l.jsx)("div", {
            className: u.arrowSeparator
          }), (0, l.jsx)(o.default, {
            className: u.dropdownArrow
          })]
        }) : null]
      })
    })
  };
c.DropdownSizes = a, c.Sizes = i.Button.Sizes, c.Colors = i.Button.Colors, c.Looks = i.Button.Looks;
var E = c