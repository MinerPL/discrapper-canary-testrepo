"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("287734"),
  i = n("872810"),
  r = n("51144"),
  o = n("689938");

function u(e) {
  let {
    applicationStreams: t
  } = e;
  return t.map(e => {
    let {
      stream: t,
      streamUser: n
    } = e;
    return (0, a.jsx)(s.MenuItem, {
      id: "spectate-".concat(t.ownerId),
      action: () => {
        l.default.selectVoiceChannel(t.channelId), (0, i.watchStreamAndTransitionToStream)(t)
      },
      label: o.default.Messages.WATCH_USER_STREAM.format({
        streamerName: r.default.getName(n)
      })
    }, "spectate-".concat(t.ownerId))
  })
}