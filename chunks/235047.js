"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  },
  useMessageReminderDurations: function() {
    return m
  }
});
var a = n("735250");
n("470079");
var i = n("913527"),
  l = n.n(i),
  s = n("442837"),
  u = n("481060"),
  r = n("822893"),
  o = n("641051"),
  d = n("329461"),
  c = n("831267"),
  f = n("448239"),
  E = n("689938");

function M(e) {
  let {
    showReminders: t
  } = o.default.useExperiment({
    location: "a65531_1"
  }, {
    autoTrackExposure: !1
  }), n = (0, s.useStateFromStores)([d.default], () => null != d.default.getMessageReminders().find(t => t.messageId === e.id)), i = m(e, t => (0, r.addMessageReminders)(e, l()().add(t, "millisecond").toDate()));
  return t ? (0, a.jsx)(u.MenuItem, {
    id: "mark-todo",
    label: n ? E.default.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : E.default.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
    icon: n ? f.default : void 0,
    action: () => n ? (0, r.completeMessageReminders)(e.id) : (0, r.addMessageReminders)(e),
    children: n ? null : i
  }) : null
}

function m(e, t) {
  return c.MESSAGE_REMINDER_DURATION_ITEMS.map(e => {
    let {
      duration: n,
      getLabel: i
    } = e;
    return (0, a.jsx)(u.MenuItem, {
      id: "mark-todo-".concat(n),
      label: i(),
      action: () => t(n)
    }, n)
  })
}