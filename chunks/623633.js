"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("442837"),
  l = n("592125"),
  i = n("944486");

function u() {
  return (0, a.useStateFromStores)([i.default, l.default], () => {
    let e = i.default.getVoiceChannelId();
    if (null != e) {
      let t = l.default.getChannel(e);
      if (null == t ? void 0 : t.isGuildStageVoice()) return t
    }
    return null
  })
}