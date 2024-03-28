"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var o = n("735250");
n("470079");
var s = n("859097"),
  i = n("689938");

function r(e) {
  let {
    onContinue: t,
    onClose: n
  } = e;
  return (0, o.jsx)(s.TwoWayLinkError, {
    title: i.default.Messages.CONNECT_CRUNCHYROLL_ERROR_TITLE,
    body: i.default.Messages.CONNECT_CRUNCHYROLL_ERROR_BODY,
    onClose: n,
    onContinue: t
  })
}