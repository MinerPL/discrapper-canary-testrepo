"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var a = s("37983");
s("884691");
var l = s("77078"),
  n = s("145131"),
  i = s("983100"),
  r = e => {
    let {
      title: t,
      subtitle: s,
      icon: r
    } = e;
    return (0, a.jsxs)(n.default, {
      className: i.wrapper,
      align: n.default.Align.BASELINE,
      children: [null != r && (0, a.jsx)(r, {
        width: 16,
        height: 16,
        className: i.icon
      }), (0, a.jsx)(l.Text, {
        variant: "text-md/normal",
        className: i.title,
        children: t
      }), null != s && "" !== s ? (0, a.jsx)(l.Text, {
        variant: "text-xs/semibold",
        className: i.subtitle,
        children: s
      }) : null]
    })
  }