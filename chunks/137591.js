"use strict";
a.r(t), a.d(t, {
  default: function() {
    return l
  }
});
var n = a("735250");
a("470079");
var u = a("481060"),
  r = a("346479"),
  i = a("665906"),
  s = a("981631"),
  d = a("689938");

function l(e) {
  var t, a;
  if (!(0, i.useIsThreadModerator)(e) || e.type !== s.ChannelTypes.PRIVATE_THREAD) return null;
  let l = null === (a = null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.invitable) || void 0 === a || a;
  return (0, n.jsx)(u.MenuCheckboxItem, {
    id: "toggle-thread-invitable",
    label: d.default.Messages.THREAD_INVITABLE_TOGGLE_LABEL,
    checked: l,
    action: () => r.default.setInvitable(e, !l)
  })
}