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
  s = n("77078"),
  a = n("782340"),
  o = n("518377");
let u = Object.freeze({
  DEFAULT: o.default,
  FILLED: o.filled
});

function c(e) {
  let {
    className: t,
    onClick: n,
    "aria-label": r,
    look: c = u.DEFAULT
  } = e;
  return (0, i.jsx)(s.Clickable, {
    "aria-label": null != r ? r : a.default.Messages.REMOVE,
    className: l(o.button, c, t),
    onClick: n
  })
}
c.Looks = u