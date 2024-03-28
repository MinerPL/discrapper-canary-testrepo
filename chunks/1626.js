"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var i = n("481060"),
  l = n("111618"),
  s = n("730954"),
  u = n("981631"),
  r = n("689938");

function o(e, t) {
  return e.state !== u.MessageStates.SEND_FAILED ? null : (0, a.jsx)(i.MenuItem, {
    id: "resend",
    label: r.default.Messages.RESEND_MESSAGE,
    action: () => (0, s.default)(t, e, void 0, l.default.getOptions(e.id))
  })
}