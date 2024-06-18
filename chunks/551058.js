"use strict";
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(605403),
  u = n(316186);
let _ = r.memo(function(e) {
  let {
    children: t,
    className: n,
    icon: r,
    isCollapsed: s,
    onClick: _,
    "aria-label": d
  } = e;
  return (0, i.jsx)("div", {
    className: o()(u.wrapper, n),
    children: (0, i.jsxs)(a.Clickable, {
      onClick: _,
      onKeyDown: e => e.stopPropagation(),
      className: o()(u.header, {
        [u.interactive]: null != s
      }),
      "aria-expanded": null != s ? !s : void 0,
      "aria-label": d,
      children: [null != r && (0, i.jsx)("div", {
        "aria-hidden": !0,
        className: u.headerIcon,
        children: r
      }), (0, i.jsx)("span", {
        className: u.headerLabel,
        children: t
      }), null != s ? (0, i.jsx)(l.Z, {
        className: o()(u.headerCollapseIcon, {
          [u.headerCollapseIconCollapsed]: s
        }),
        height: 16,
        width: 16
      }) : null]
    })
  })
});
t.Z = _