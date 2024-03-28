"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var a = s("735250");
s("470079");
var n = s("442837"),
  l = s("481060"),
  i = s("904245"),
  d = s("257559"),
  r = s("665906"),
  u = s("496675"),
  o = s("594174"),
  c = s("740727"),
  f = s("981631"),
  E = s("689938");

function g(e, t) {
  let s = (0, n.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
    g = (0, r.useIsActiveChannelOrUnarchivableThread)(t),
    M = (0, n.useStateFromStores)([u.default], () => u.default.can(f.Permissions.MANAGE_MESSAGES, t), [t]),
    _ = M || null != s && e.canDeleteOwnMessage(s.id);
  return e.state === f.MessageStates.SENDING || !_ || f.MessageTypesSets.UNDELETABLE.has(e.type) || !g ? null : (0, a.jsx)(l.MenuItem, {
    id: "delete",
    label: E.default.Messages.DELETE_MESSAGE,
    action: function(s) {
      e.state === f.MessageStates.SEND_FAILED ? i.default.deleteMessage(t.id, e.id, !0) : s.shiftKey ? i.default.deleteMessage(t.id, e.id) : d.default.confirmDelete(t, e, !0)
    },
    color: "danger",
    icon: c.default
  })
}