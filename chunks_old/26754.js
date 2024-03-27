"use strict";
i.r(t), i.d(t, {
  default: function() {
    return s
  }
});
var n = i("37983");
i("884691");
var a = i("77078"),
  l = i("241959"),
  s = function(e) {
    let {
      text: t
    } = e;
    return (0, n.jsxs)("div", {
      className: l.container,
      children: [(0, n.jsx)(a.FormDivider, {}), (0, n.jsx)(a.Text, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: l.text,
        children: t.toUpperCase()
      }), (0, n.jsx)(a.FormDivider, {})]
    })
  }