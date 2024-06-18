"use strict";
t.d(s, {
  Z: function() {
    return a
  }
});
var n = t(735250);
t(470079);
var i = t(481060),
  l = t(108319);

function a(e) {
  let {
    children: s,
    disabled: t,
    disabledTooltip: a,
    id: r,
    ...o
  } = e;
  return (0, n.jsx)(i.TooltipContainer, {
    text: t ? a : null,
    children: (0, n.jsx)(i.TabBar.Item, {
      className: l.tabBarItem,
      id: r,
      disabled: t,
      ...o,
      children: s
    })
  })
}