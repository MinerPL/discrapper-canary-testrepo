"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
});
var a = s("37983");
s("884691");
var l = s("77078"),
  n = s("638035");

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