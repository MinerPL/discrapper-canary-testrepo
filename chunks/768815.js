"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("37983");
n("884691");
var s = n("414456"),
  l = n.n(s),
  i = n("77078"),
  r = n("192823");

function o(e) {
  let {
    icon: t,
    tooltip: n,
    onClick: s,
    className: o
  } = e, u = e => {
    e.preventDefault(), e.stopPropagation(), s(e)
  };
  return (0, a.jsx)(i.Tooltip, {
    text: n,
    children: e => (0, a.jsx)(i.Clickable, {
      ...e,
      "aria-label": n,
      onClick: u,
      className: l(r.actionButton, o),
      children: (0, a.jsx)(t, {
        className: r.icon
      })
    })
  })
}