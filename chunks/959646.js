"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("629109"),
  i = n("135230"),
  r = n("782340");

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