"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("789020");
var a = n("904245"),
  i = n("667204");

function l(e, t, n) {
  let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (a.default.deleteMessage(e.id, t.id, !0), t.isCommandType()) {
    null != t.interactionData && null != l.applicationId && (0, i.retryCommandMessage)(t, e, l.applicationId);
    return
  }
  let {
    content: s,
    tts: u,
    flags: r,
    nonce: o
  } = t;
  a.default.sendMessage(e.id, {
    content: s,
    tts: u,
    invalidEmojis: [],
    validNonShortcutEmojis: []
  }, void 0, {
    nonce: o,
    flags: r,
    ...l
  })
}