"use strict";
n.r(t), n.d(t, {
  open: function() {
    return c
  }
});
var s = n("735250");
n("470079");
var a = n("481060"),
  l = n("846027"),
  i = n("468026"),
  r = n("689938");
let o = null;

function u() {
  null !== o && (0, a.closeModal)(o), o = null
}

function d() {
  l.default.setSilenceWarning(!1), u()
}

function c() {
  o = (0, a.openModal)(e => (0, s.jsx)(i.default, {
    title: r.default.Messages.CONFIRM_DISABLE_SILENCE_TITLE,
    body: r.default.Messages.CONFIRM_DISABLE_SILENCE_BODY,
    secondaryConfirmText: r.default.Messages.CONFIRM_DISABLE_SILENCE_DONT_SHOW,
    onConfirmSecondary: d,
    onConfirm: u,
    confirmText: r.default.Messages.OKAY,
    ...e
  }))
}