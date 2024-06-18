"use strict";
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(759231),
  o = n(689938),
  a = n(166400);
t.Z = e => {
  let {
    errorMessage: t,
    onClose: n
  } = e;
  return null == t || "" === t ? null : (0, i.jsxs)("div", {
    className: a.errorContainer,
    children: [(0, i.jsx)(s.Z, {
      width: 20,
      height: 20,
      className: a.errorIcon
    }), (0, i.jsx)(r.Text, {
      className: a.errorText,
      variant: "text-sm/normal",
      children: t
    }), (0, i.jsx)(r.Clickable, {
      onClick: () => {
        n()
      },
      "aria-label": o.Z.Messages.DISMISS,
      className: a.closeIcon
    })]
  })
}