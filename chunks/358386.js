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
  i = n("430824"),
  r = n("594174"),
  d = n("689938");

function o(e, t) {
  let o = (0, u.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
    s = (0, u.useStateFromStores)([i.default], () => i.default.getGuild(t));
  return null == s || null == o || e.id === s.ownerId || e.bot || !s.isOwnerWithRequiredMfaLevel(o) ? null : (0, l.jsx)(a.MenuItem, {
    id: "transfer-ownership",
    color: "danger",
    label: d.default.Messages.TRANSFER_OWNERSHIP,
    action: () => (0, a.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("99387"), n.e("47704")]).then(n.bind(n, "928090"));
      return n => (0, l.jsx)(t, {
        ...n,
        guild: s,
        fromUser: o,
        toUser: e
      })
    })
  })
}