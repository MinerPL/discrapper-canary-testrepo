"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("846027"),
  i = n("468026"),
  r = n("689938");

function o(e) {
  if (e) {
    (0, s.openModal)(e => (0, a.jsx)(i.default, {
      ...e,
      title: r.default.Messages.SERVER_DEAFENED_DIALOG_TITLE,
      body: r.default.Messages.SERVER_DEAFENED_DIALOG_BODY
    }));
    return
  }
  l.default.toggleSelfDeaf()
}