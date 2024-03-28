"use strict";
t.r(n), t.d(n, {
  PlayStationLinkError: function() {
    return a
  }
});
var i = t("735250");
t("470079");
var o = t("859097"),
  s = t("689938");

function a(e) {
  let {
    onContinue: n,
    onClose: t
  } = e;
  return (0, i.jsx)(o.TwoWayLinkError, {
    title: s.default.Messages.CONNECT_CONSOLE_ERROR_TITLE,
    body: s.default.Messages.CONNECT_PS_ERROR_BODY,
    onClose: t,
    onContinue: n
  })
}