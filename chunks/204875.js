"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
});
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("790752");

function i(e) {
  let {
    children: t,
    disabled: s,
    disabledTooltip: i,
    id: r,
    ...o
  } = e;
  return (0, a.jsx)(l.TooltipContainer, {
    text: s ? i : null,
    children: (0, a.jsx)(l.TabBar.Item, {
      className: n.tabBarItem,
      id: r,
      disabled: s,
      ...o,
      children: t
    })
  })
}