"use strict";
t.d(s, {
  Z: function() {
    return a
  }
});
var n = t(735250);
t(470079);
var i = t(481060),
  l = t(139123);

function a(e) {
  let {
    step: s,
    header: t,
    children: a
  } = e;
  return (0, n.jsxs)("div", {
    className: l.triggerContainer,
    children: [(0, n.jsx)("div", {
      className: l.triggerCounterContainer,
      children: (0, n.jsx)("div", {
        className: l.stepCountIcon,
        children: (0, n.jsx)(i.Text, {
          className: l.stepCount,
          variant: "text-sm/bold",
          children: s
        })
      })
    }), (0, n.jsxs)("div", {
      className: l.triggerMainContainer,
      children: [(0, n.jsx)("div", {
        className: l.__invalid_triggerHeaderContainer,
        children: (0, n.jsx)(i.Text, {
          className: l.triggerHeader,
          variant: "text-sm/normal",
          children: t
        })
      }), null != a && (0, n.jsx)("div", {
        className: l.triggerSettingsContainer,
        children: a
      })]
    })]
  })
}