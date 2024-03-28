"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("735250");
n("470079");
var u = n("442837"),
  a = n("481060"),
  s = n("726521"),
  d = n("795295"),
  i = n("924301"),
  r = n("689938");

function o(e) {
  let t = (0, u.useStateFromStores)([i.default], () => i.default.getGuildScheduledEvent(e), [e]);
  return null == e || null == t ? null : (0, l.jsx)(a.MenuItem, {
    id: "report-event",
    label: r.default.Messages.REPORT_MODAL_REPORT_EVENT_MENU_ITEM,
    action: () => (0, s.showReportModalForGuildScheduledEvent)(t),
    icon: d.default,
    color: "danger"
  })
}