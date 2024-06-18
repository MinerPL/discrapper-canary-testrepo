"use strict";
t.d(s, {
  Z: function() {
    return a
  }
});
var n = t(735250);
t(470079);
var i = t(481060),
  l = t(212723);

function a(e) {
  let {
    title: s,
    settings: t
  } = e;
  return (0, n.jsxs)("div", {
    children: [(0, n.jsx)(i.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      className: l.header,
      children: s
    }), t.map(e => e.renderComponent())]
  })
}