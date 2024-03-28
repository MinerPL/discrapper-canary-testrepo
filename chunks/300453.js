"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
});
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("568046");

function i(e) {
  let {
    step: t,
    header: s,
    children: i
  } = e;
  return (0, a.jsxs)("div", {
    className: n.triggerContainer,
    children: [(0, a.jsx)("div", {
      className: n.triggerCounterContainer,
      children: (0, a.jsx)("div", {
        className: n.stepCountIcon,
        children: (0, a.jsx)(l.Text, {
          className: n.stepCount,
          variant: "text-sm/bold",
          children: t
        })
      })
    }), (0, a.jsxs)("div", {
      className: n.triggerMainContainer,
      children: [(0, a.jsx)("div", {
        className: n.__invalid_triggerHeaderContainer,
        children: (0, a.jsx)(l.Text, {
          className: n.triggerHeader,
          variant: "text-sm/normal",
          children: s
        })
      }), null != i && (0, a.jsx)("div", {
        className: n.triggerSettingsContainer,
        children: i
      })]
    })]
  })
}