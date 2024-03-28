"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("735250");
n("470079");
var a = n("481060"),
  s = n("688465"),
  i = n("689938");

function r(e) {
  let {
    className: t
  } = e;
  return (0, l.jsx)(a.Tooltip, {
    text: i.default.Messages.BROADCASTING_BETA_TOOLTIP_TEXT,
    children: e => (0, l.jsx)(s.default, {
      ...e,
      className: t
    })
  })
}