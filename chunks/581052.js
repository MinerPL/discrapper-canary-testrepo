"use strict";
n.r(t), n.d(t, {
  useMessageRequestItem: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var u = n("442837"),
  l = n("481060"),
  r = n("823162"),
  s = n("594174"),
  i = n("689938");

function d(e) {
  let t = (0, u.useStateFromStores)([s.default], () => s.default.getCurrentUser());
  return (null == t ? void 0 : t.isStaff()) !== !0 ? null : (0, a.jsxs)(a.Fragment, {
    children: [!e.isMessageRequest && (0, a.jsx)(l.MenuItem, {
      id: "mark-as-message-request",
      label: i.default.Messages.MESSAGE_REQUESTS_CONTEXT_MENU_MOVE_TO,
      action: () => (0, r.markAsMessageRequest)(e.id)
    }), (0, a.jsx)(l.MenuItem, {
      id: "clear-message-request",
      label: i.default.Messages.MESSAGE_REQUESTS_CONTEXT_MENU_CLEAR,
      action: () => (0, r.clearMessageRequestState)(e.id)
    })]
  })
}