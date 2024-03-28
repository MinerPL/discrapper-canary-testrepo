"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("735250");
n("470079");
var a = n("481060"),
  l = n("438536"),
  i = n("214906"),
  r = n("346479"),
  o = n("723170"),
  u = n("124368");

function d(e) {
  let {
    channel: t,
    closePopout: n,
    onSelect: d,
    navId: c,
    label: f
  } = e, E = (0, l.default)(t, "Notifications Bell"), _ = (0, i.default)(t), T = (0, o.useThreadNotificationSetting)(t);
  return (0, s.jsxs)(a.Menu, {
    navId: c,
    onClose: n,
    "aria-label": f,
    onSelect: d,
    children: [(0, s.jsxs)(a.MenuGroup, {
      children: [t.isForumPost() ? E : null, _]
    }), (0, s.jsx)(a.MenuGroup, {
      children: (0, u.getThreadNotificationOptions)().map(e => {
        let {
          setting: n,
          label: l
        } = e;
        return (0, s.jsx)(a.MenuRadioItem, {
          group: "thread-notifications",
          id: "".concat(n),
          label: l,
          action: () => r.default.setNotificationSettings(t, {
            flags: n
          }),
          checked: n === T
        }, n)
      })
    })]
  })
}