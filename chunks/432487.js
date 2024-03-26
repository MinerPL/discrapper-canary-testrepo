"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("37983");
n("884691");
var l = n("446674"),
  r = n("77078"),
  u = n("450911"),
  a = n("42203"),
  s = n("697218"),
  o = n("782340");

function d(e, t) {
  let n = (0, l.useStateFromStores)([s.default], () => s.default.getCurrentUser(), []),
    d = (0, l.useStateFromStores)([a.default], () => a.default.getChannel(t), [t]);
  return null == d || d.isOwner(e) || null == n || !d.isOwner(n.id) ? null : (0, i.jsx)(r.MenuItem, {
    id: "remove",
    label: o.default.Messages.REMOVE_FROM_GROUP,
    action: () => u.default.removeRecipient(t, e),
    color: "danger"
  })
}