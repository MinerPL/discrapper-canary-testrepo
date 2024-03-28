"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("735250");
n("470079");
var u = n("481060"),
  l = n("493683"),
  r = n("592125"),
  s = n("689938");

function i(e, t) {
  let n = r.default.getChannel(e);
  return null == n || n.isMultiUserDM() ? null : (0, a.jsx)(u.MenuItem, {
    id: "close-dm",
    label: s.default.Messages.CLOSE_DM,
    action: () => l.default.closePrivateChannel(e, t)
  })
}