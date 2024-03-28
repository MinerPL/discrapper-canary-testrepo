"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("735250");
n("470079");
var i = n("442837"),
  l = n("481060"),
  s = n("332148"),
  u = n("257559"),
  r = n("496675"),
  o = n("394831"),
  d = n("151007"),
  c = n("981631"),
  f = n("689938");

function E(e, t) {
  let n = (0, i.useStateFromStores)([r.default], () => r.default.can(c.Permissions.MANAGE_MESSAGES, t), [t]);
  return e.state !== c.MessageStates.SEND_FAILED && (0, d.default)(e, t, n) ? !1 === e.pinned ? (0, a.jsx)(l.MenuItem, {
    id: "pin",
    action: function(n) {
      n.shiftKey ? s.default.pinMessage(t, e.id) : u.default.confirmPin(t, e)
    },
    label: f.default.Messages.PIN_MESSAGE,
    icon: o.default
  }) : (0, a.jsx)(l.MenuItem, {
    id: "unpin",
    action: function(n) {
      n.shiftKey ? s.default.unpinMessage(t, e.id) : u.default.confirmUnpin(t, e)
    },
    label: f.default.Messages.UNPIN_MESSAGE,
    icon: o.default
  }) : null
}