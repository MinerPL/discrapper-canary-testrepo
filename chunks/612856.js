"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var n = a("735250");
a("470079");
var u = a("442837"),
  r = a("481060"),
  i = a("569471"),
  s = a("346479"),
  d = a("723170"),
  l = a("124368"),
  o = a("689938");

function f(e) {
  let t = (0, d.useThreadNotificationSetting)(e);
  return (0, u.useStateFromStores)([i.default], () => i.default.hasJoined(e.id)) ? (0, n.jsx)(r.MenuItem, {
    id: "thread-notifications",
    label: o.default.Messages.NOTIFICATION_SETTINGS,
    children: (0, l.getThreadNotificationOptions)().map(a => {
      let {
        setting: u,
        label: i
      } = a;
      return (0, n.jsx)(r.MenuRadioItem, {
        group: "thread-notifications",
        id: "".concat(u),
        label: i,
        action: () => s.default.setNotificationSettings(e, {
          flags: u
        }),
        checked: u === t
      }, u)
    })
  }) : (0, n.jsx)(r.MenuItem, {
    id: "notifications-disabled",
    label: o.default.Messages.NOTIFICATION_SETTINGS,
    disabled: !0
  })
}