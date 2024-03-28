"use strict";
t.r(n), t.d(n, {
  default: function() {
    return c
  }
});
var a = t("735250");
t("470079");
var s = t("913527"),
  d = t.n(s),
  u = t("481060"),
  r = t("239091"),
  i = t("822893"),
  o = t("235047"),
  l = t("689938");

function c(e) {
  let {
    message: n
  } = e, t = (0, o.useMessageReminderDurations)(n, e => (0, i.updateReminderDueAt)(n.id, d()().add(e, "millisecond").toDate()));
  return (0, a.jsx)(u.Menu, {
    navId: "message-reminder-snooze",
    onClose: r.closeContextMenu,
    "aria-label": l.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: () => {},
    children: t
  })
}