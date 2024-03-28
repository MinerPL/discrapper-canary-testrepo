"use strict";
t.r(n), t.d(n, {
  default: function() {
    return c
  }
});
var l = t("735250");
t("470079");
var u = t("852229"),
  o = t("481060"),
  i = t("109764"),
  s = t("689938");

function c(e, n, t) {
  return null != e ? (0, i.default)(e, t, n) : (0, l.jsx)(o.MenuItem, {
    id: "channel-copy-link",
    label: s.default.Messages.COPY_LINK,
    action: () => {
      (0, u.copy)(null != n ? n : "")
    }
  })
}