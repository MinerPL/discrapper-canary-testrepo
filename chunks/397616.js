"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var u = a("735250");
a("470079");
var l = a("442837"),
  n = a("481060"),
  s = a("493683"),
  d = a("592125"),
  r = a("594174"),
  i = a("689938");

function o(e, t) {
  let a = (0, l.useStateFromStores)([r.default], () => r.default.getCurrentUser(), []),
    o = (0, l.useStateFromStores)([d.default], () => d.default.getChannel(t), [t]);
  return null == o || o.isOwner(e) || null == a || !o.isOwner(a.id) ? null : (0, u.jsx)(n.MenuItem, {
    id: "remove",
    label: i.default.Messages.REMOVE_FROM_GROUP,
    action: () => s.default.removeRecipient(t, e),
    color: "danger"
  })
}