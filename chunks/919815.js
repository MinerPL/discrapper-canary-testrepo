"use strict";
i.r(t), i.d(t, {
  default: function() {
    return d
  }
});
var s = i("735250");
i("470079");
var n = i("442837"),
  a = i("481060"),
  l = i("888369"),
  u = i("181945"),
  o = i("689938");

function d(e, t) {
  let i = e.id,
    d = (0, n.useStateFromStores)([l.default], () => l.default.getGuildHasUnreadIgnoreMuted(i), [i]);
  return (0, s.jsx)(a.MenuItem, {
    id: "mark-guild-read",
    label: o.default.Messages.MARK_AS_READ,
    icon: void 0,
    action: () => (0, u.default)([i], t.section),
    disabled: !d
  })
}