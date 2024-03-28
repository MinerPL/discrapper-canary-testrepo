"use strict";
n.r(e), n.d(e, {
  default: function() {
    return h
  }
});
var a = n("735250");
n("470079");
var r = n("803997"),
  i = n.n(r),
  E = n("481060"),
  s = n("689938"),
  o = n("290563");
let u = Object.freeze({
  DEFAULT: o.default,
  FILLED: o.filled
});

function h(t) {
  let {
    className: e,
    onClick: n,
    "aria-label": r,
    look: h = u.DEFAULT
  } = t;
  return (0, a.jsx)(E.Clickable, {
    "aria-label": null != r ? r : s.default.Messages.REMOVE,
    className: i()(o.button, h, e),
    onClick: n
  })
}
h.Looks = u