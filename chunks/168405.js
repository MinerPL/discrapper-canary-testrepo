"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("735250");
s("470079");
var n = s("481060"),
  l = s("665906"),
  i = s("827104"),
  d = s("50284"),
  r = s("689938");

function u(e, t) {
  return (0, l.useIsActiveChannelOrUnarchivableThread)(t) ? (0, a.jsx)(n.MenuItem, {
    id: "mark-unread",
    label: r.default.Messages.MARK_UNREAD,
    action: () => (0, d.default)(t.id, e.id),
    icon: i.default
  }) : null
}