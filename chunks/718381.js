"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var n = s("37983");
s("884691");
var a = s("446674"),
  l = s("77078"),
  i = s("819689"),
  d = s("249561"),
  r = s("300322"),
  u = s("957255"),
  o = s("697218"),
  c = s("228220"),
  f = s("49111"),
  E = s("782340");

function g(e, t) {
  let s = (0, a.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
    g = (0, r.useIsActiveChannelOrUnarchivableThread)(t),
    M = (0, a.useStateFromStores)([u.default], () => u.default.can(f.Permissions.MANAGE_MESSAGES, t), [t]),
    _ = M || null != s && e.canDeleteOwnMessage(s.id);
  return e.state === f.MessageStates.SENDING || !_ || f.MessageTypesSets.UNDELETABLE.has(e.type) || !g ? null : (0, n.jsx)(l.MenuItem, {
    id: "delete",
    label: E.default.Messages.DELETE_MESSAGE,
    action: function(s) {
      e.state === f.MessageStates.SEND_FAILED ? i.default.deleteMessage(t.id, e.id, !0) : s.shiftKey ? i.default.deleteMessage(t.id, e.id) : d.default.confirmDelete(t, e, !0)
    },
    color: "danger",
    icon: c.default
  })
}