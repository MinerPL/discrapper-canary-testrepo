"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var i = n("442837"),
  l = n("481060"),
  s = n("196051"),
  u = n("441729"),
  r = n("503495"),
  o = n("689938");

function d(e, t) {
  let n = (0, i.useStateFromStores)([u.default], () => u.default.isSpeakingMessage(t.id, e.id), [t, e]);
  return "" === e.content ? null : (0, a.jsx)(l.MenuItem, {
    id: "tts",
    label: n ? o.default.Messages.STOP_SPEAKING_MESSAGE : o.default.Messages.SPEAK_MESSAGE,
    icon: r.default,
    action: () => n ? (0, s.stopSpeaking)() : (0, s.speakMessage)(t, e)
  })
}