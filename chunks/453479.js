"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("710514"),
  i = n("432813"),
  r = e => {
    let {
      header: t,
      displayType: n
    } = e, r = (0, l.useActionTotalsForDisplayType)(n);
    return (0, a.jsxs)("div", {
      className: i.counter,
      children: [(0, a.jsx)(s.Heading, {
        variant: "heading-xxl/medium",
        color: r > 0 ? "text-brand" : "text-muted",
        children: (0, a.jsx)(s.HeadingLevel, {
          children: null != r ? r : 0
        })
      }), (0, a.jsx)(s.Text, {
        variant: "text-sm/semibold",
        children: t
      })]
    })
  }