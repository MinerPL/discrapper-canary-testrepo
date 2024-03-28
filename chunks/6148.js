"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("735250");
n("470079");
var i = n("442837"),
  l = n("481060"),
  s = n("904245"),
  u = n("665906"),
  r = n("314897"),
  o = n("185403"),
  d = n("418476"),
  c = n("689938");

function f(e, t) {
  let n = (0, i.useStateFromStores)([r.default], () => r.default.getId()),
    f = (0, u.useIsActiveChannelOrUnarchivableThread)(t),
    E = (0, u.useIsNonModInLockedThread)(t);
  return (0, d.default)(e, n) && f && !E ? (0, a.jsx)(l.MenuItem, {
    id: "edit",
    label: c.default.Messages.EDIT_MESSAGE,
    action: () => s.default.startEditMessage(t.id, e.id, e.content),
    icon: o.default
  }) : null
}