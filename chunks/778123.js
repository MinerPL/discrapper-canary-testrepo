"use strict";
u.r(t), u.d(t, {
  default: function() {
    return l
  }
});
var n = u("735250");
u("470079");
var a = u("442837"),
  s = u("481060"),
  d = u("92114"),
  r = u("9156"),
  c = u("621600"),
  i = u("689938");

function l(e) {
  let t = (0, a.useStateFromStores)([r.default], () => r.default.isMuteScheduledEventsEnabled(e), [e]);
  return (0, n.jsx)(s.MenuCheckboxItem, {
    id: "mute-events",
    label: i.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
    action: () => {
      var u;
      return u = {
        mute_scheduled_events: !t
      }, void d.default.updateGuildNotificationSettings(e, u, c.NotificationLabel.mutedEvents(u.mute_scheduled_events))
    },
    checked: t
  })
}