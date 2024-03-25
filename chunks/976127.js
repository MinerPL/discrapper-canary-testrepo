"use strict";
n.r(t), n.d(t, {
  useMessageRequestItem: function() {
    return o
  }
});
var i = n("37983");
n("884691");
var a = n("446674"),
  r = n("77078"),
  s = n("16108"),
  l = n("697218"),
  u = n("782340");

function o(e) {
  let t = (0, a.useStateFromStores)([l.default], () => l.default.getCurrentUser());
  return (null == t ? void 0 : t.isStaff()) !== !0 ? null : (0, i.jsxs)(i.Fragment, {
    children: [!e.isMessageRequest && (0, i.jsx)(r.MenuItem, {
      id: "mark-as-message-request",
      label: u.default.Messages.MESSAGE_REQUESTS_CONTEXT_MENU_MOVE_TO,
      action: () => (0, s.markAsMessageRequest)(e.id)
    }), (0, i.jsx)(r.MenuItem, {
      id: "clear-message-request",
      label: u.default.Messages.MESSAGE_REQUESTS_CONTEXT_MENU_CLEAR,
      action: () => (0, s.clearMessageRequestState)(e.id)
    })]
  })
}