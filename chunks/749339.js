"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("735250");
n("470079");
var i = n("481060"),
  l = n("757206"),
  s = n("572004"),
  u = n("689938");

function r(e) {
  return s.SUPPORTS_COPY ? (0, a.jsx)(i.MenuItem, {
    id: "copy-text",
    label: u.default.Messages.COPY_TEXT,
    icon: l.default,
    action: () => {
      (0, s.copy)(e.content)
    }
  }) : null
}