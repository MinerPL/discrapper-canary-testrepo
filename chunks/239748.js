"use strict";
n.r(t), n.d(t, {
  RETURN_TO_AUDIO_CHANNEL: function() {
    return s
  }
});
var i = n("925549"),
  o = n("475468"),
  l = n("19780"),
  u = n("944486"),
  a = n("981631");
let s = {
  binds: ["mod+alt+left"],
  comboKeysBindGlobal: !0,
  action() {
    var e;
    if (!l.default.isConnected()) return !1;
    let t = null !== (e = l.default.getGuildId()) && void 0 !== e ? e : a.ME,
      n = u.default.getChannelId(t);
    return (0, o.transitionToChannel)(t, n), i.default.channelListScrollTo(t, l.default.getChannelId()), !1
  }
}