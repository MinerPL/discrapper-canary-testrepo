"use strict";
n.r(t), n.d(t, {
  handoffRemote: function() {
    return o
  }
});
var l = n("512722"),
  u = n.n(l),
  a = n("846027"),
  i = n("287734"),
  r = n("131951"),
  s = n("254238"),
  d = n("893387");

function o(e, t) {
  var n;
  let l = null !== (n = e.sessionId) && void 0 !== n ? n : "";
  (0, s.remoteDisconnect)(l), (0, s.disconnectRemote)();
  let o = null != t ? t : e.channelId;
  u()(null != o, "attempted to transfer to unknown channel"), e.selfMute !== r.default.isSelfMute() && a.default.toggleSelfMute(), e.selfDeaf !== r.default.isSelfDeaf() && a.default.toggleSelfDeaf(), (0, d.default)(o, "discord_client", l), i.default.selectVoiceChannel(o, !1)
}