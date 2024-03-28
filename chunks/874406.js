"use strict";
t.r(s);
var a = t("735250");
t("470079");
var n = t("481060"),
  o = t("194359"),
  C = t("468026"),
  i = t("689938");
s.default = e => (0, a.jsx)(C.default, {
  confirmText: i.default.Messages.CLEAR_INCOMING_REQUESTS_CONFIRMATION_CTA,
  title: i.default.Messages.CLEAR_INCOMING_REQUESTS_CONFIRMATION_TITLE,
  cancelText: i.default.Messages.CANCEL,
  onConfirm: () => {
    o.default.clearPendingRelationships()
  },
  body: i.default.Messages.CLEAR_INCOMING_REQUESTS_CONFIRMATION_BODY.format({
    incomingRequestCount: e.incomingRequestCount
  }),
  confirmColor: n.ButtonColors.RED,
  ...e
})