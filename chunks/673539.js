"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("481060"),
  i = n("979696"),
  r = n("963876"),
  o = n("689938");

function u(e) {
  let t = (0, l.useStateFromStores)([i.default], () => i.default.getToastsEnabled(e));
  return (0, a.jsx)(s.MenuCheckboxItem, {
    id: "show-call-chat-toasts",
    label: o.default.Messages.SHOW_NEW_MESSAGE_PREVIEWS,
    checked: t,
    action: () => r.default.setCallChatToastsEnabled(e, !t)
  })
}