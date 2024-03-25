"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("37983");
n("884691");
var s = n("446674"),
  r = n("77078"),
  u = n("450911"),
  i = n("42203"),
  d = n("697218"),
  l = n("782340");

function o(e, t) {
  let n = (0, s.useStateFromStores)([d.default], () => d.default.getCurrentUser(), []),
    o = (0, s.useStateFromStores)([i.default], () => i.default.getChannel(t), [t]);
  return null == o || o.isOwner(e) || null == n || !o.isOwner(n.id) ? null : (0, a.jsx)(r.MenuItem, {
    id: "remove",
    label: l.default.Messages.REMOVE_FROM_GROUP,
    action: () => u.default.removeRecipient(t, e),
    color: "danger"
  })
}