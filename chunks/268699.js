"use strict";
n.r(t), n.d(t, {
  onMarkAsNotSpamConfirmationModal: function() {
    return u
  },
  openAcceptMessageRequestConfirmModal: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("626135"),
  i = n("687683"),
  r = n("981631");

function o(e) {
  let {
    channelId: t,
    onConfirm: o,
    onCancel: u
  } = e;
  s.default.track(r.AnalyticEvents.OPEN_MODAL, {
    type: i.MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL,
    channel_id: t
  }), (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("4117")]).then(n.bind(n, "217723"));
    return t => (0, a.jsx)(e, {
      onConfirm: o,
      onDismiss: u,
      ...t
    })
  })
}

function u(e) {
  let {
    onConfirm: t,
    onCancel: s
  } = e;
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("7649")]).then(n.bind(n, "797464"));
    return n => (0, a.jsx)(e, {
      onConfirm: t,
      onDismiss: s,
      ...n
    })
  })
}