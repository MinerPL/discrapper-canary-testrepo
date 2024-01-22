"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  o = n("77078"),
  s = n("782340"),
  a = n("239636");
let u = Object.freeze({
  DEFAULT: a.default,
  FILLED: a.filled
});

function c(e) {
  let {
    className: t,
    onClick: n,
    "aria-label": r,
    look: c = u.DEFAULT
  } = e;
  return (0, i.jsx)(o.Clickable, {
    "aria-label": null != r ? r : s.default.Messages.REMOVE,
    className: l(a.button, c, t),
    onClick: n
  })
}
c.Looks = u