"use strict";
t.r(n), t.d(n, {
  default: function() {
    return s
  }
});
var l = t("37983");
t("884691");
var u = t("281071"),
  o = t("77078"),
  i = t("458574"),
  c = t("782340");

function s(e, n, t) {
  return null != e ? (0, i.default)(e, t, n) : (0, l.jsx)(o.MenuItem, {
    id: "channel-copy-link",
    label: c.default.Messages.COPY_LINK,
    action: () => {
      (0, u.copy)(null != n ? n : "")
    }
  })
}