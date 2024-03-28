"use strict";
u.r(t), u.d(t, {
  default: function() {
    return o
  }
});
var a = u("735250");
u("470079");
var n = u("442837"),
  l = u("481060"),
  s = u("5036"),
  d = u("58468"),
  i = u("689938");

function o(e) {
  let t = (0, n.useStateFromStores)([d.default], () => d.default.isCollapsed(e.id), [e.id]);
  return __OVERLAY__ ? null : (0, a.jsx)(l.MenuCheckboxItem, {
    id: "hide-voice-names",
    label: i.default.Messages.VOICE_CHANNEL_HIDE_NAMES,
    action: () => s.default.update(e.id),
    checked: t
  })
}