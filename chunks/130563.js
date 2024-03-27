"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var l = n("446674"),
  u = n("42203"),
  a = n("18494");

function i() {
  return (0, l.useStateFromStores)([a.default, u.default], () => {
    let e = a.default.getVoiceChannelId();
    if (null != e) {
      let t = u.default.getChannel(e);
      if (null == t ? void 0 : t.isGuildStageVoice()) return t
    }
    return null
  })
}