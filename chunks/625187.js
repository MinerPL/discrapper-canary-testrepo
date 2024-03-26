"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("37983");
n("884691");
var i = n("446674"),
  u = n("77078"),
  r = n("305961"),
  o = n("697218"),
  a = n("782340");

function d(e, t) {
  let d = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
    s = (0, i.useStateFromStores)([r.default], () => r.default.getGuild(t));
  return null == s || null == d || e.id === s.ownerId || e.bot || !s.isOwnerWithRequiredMfaLevel(d) ? null : (0, l.jsx)(u.MenuItem, {
    id: "transfer-ownership",
    color: "danger",
    label: a.default.Messages.TRANSFER_OWNERSHIP,
    action: () => (0, u.openModalLazy)(async () => {
      let {
        default: t
      } = await n.el("878551").then(n.bind(n, "878551"));
      return n => (0, l.jsx)(t, {
        ...n,
        guild: s,
        fromUser: d,
        toUser: e
      })
    })
  })
}