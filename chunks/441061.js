"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  i = n("481060"),
  u = n("475179"),
  s = n("358221"),
  d = n("689938");

function r(e) {
  let t = (0, l.useStateFromStores)([s.default], () => s.default.getVoiceParticipantsHidden(e));
  return (0, a.jsx)(i.MenuCheckboxItem, {
    id: "no-video-hide",
    label: d.default.Messages.STREAM_SHOW_NON_VIDEO,
    checked: !t,
    action: () => u.default.toggleVoiceParticipantsHidden(e, !t)
  })
}