"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("481060"),
  l = s("86813"),
  i = s("304037");
t.default = e => {
  let {
    label: t,
    onClick: s,
    submitting: r
  } = e;
  return (0, a.jsx)(n.Clickable, {
    onClick: r ? void 0 : s,
    className: i.button,
    children: (0, a.jsxs)("div", {
      className: i.contentContainer,
      children: [r ? (0, a.jsx)(n.Spinner, {
        type: n.Spinner.Type.PULSING_ELLIPSIS,
        className: i.__invalid_spinner
      }) : (0, a.jsx)(n.Text, {
        variant: "text-md/medium",
        className: i.label,
        children: t
      }), (0, a.jsx)(l.default, {
        className: i.arrow
      })]
    })
  })
}