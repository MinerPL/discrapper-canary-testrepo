"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var l = n("803997"),
  s = n.n(l),
  i = n("481060"),
  r = n("759231"),
  o = n("618158"),
  u = n("528138");

function d(e) {
  let {
    errorMessage: t,
    className: n
  } = e;
  return (0, a.jsx)(i.TooltipContainer, {
    className: s()(n, u.root),
    text: t,
    position: "bottom",
    color: i.TooltipColors.GREY,
    children: (0, a.jsx)(o.default, {
      children: (0, a.jsx)(r.default, {
        "aria-label": null != t ? t : "",
        className: u.warningIcon
      })
    })
  })
}