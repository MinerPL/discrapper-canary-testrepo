"use strict";
t.r(n), t.d(n, {
  default: function() {
    return h
  }
});
var u = t("37983");
t("884691");
var a = t("446674"),
  l = t("77078"),
  r = t("828986"),
  s = t("249561"),
  i = t("957255"),
  c = t("566998"),
  d = t("327054"),
  o = t("49111"),
  f = t("782340");

function h(e, n) {
  let t = (0, a.useStateFromStores)([i.default], () => i.default.can(o.Permissions.MANAGE_MESSAGES, n), [n]);
  return e.state !== o.MessageStates.SEND_FAILED && (0, d.default)(e, n, t) ? !1 === e.pinned ? (0, u.jsx)(l.MenuItem, {
    id: "pin",
    action: function(t) {
      t.shiftKey ? r.default.pinMessage(n, e.id) : s.default.confirmPin(n, e)
    },
    label: f.default.Messages.PIN_MESSAGE,
    icon: c.default
  }) : (0, u.jsx)(l.MenuItem, {
    id: "unpin",
    action: function(t) {
      t.shiftKey ? r.default.unpinMessage(n, e.id) : s.default.confirmUnpin(n, e)
    },
    label: f.default.Messages.UNPIN_MESSAGE,
    icon: c.default
  }) : null
}