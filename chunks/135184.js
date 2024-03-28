"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("735250");
n("470079");
var o = n("859097"),
  i = n("689938");

function r(e) {
  let {
    onContinue: t,
    onClose: n
  } = e;
  return (0, s.jsx)(o.TwoWayLinkError, {
    title: i.default.Messages.CONNECT_XBOX_ERROR_TITLE,
    body: i.default.Messages.CONNECT_XBOX_ERROR_BODY,
    onClose: n,
    onContinue: t
  })
}