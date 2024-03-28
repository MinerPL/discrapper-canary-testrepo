"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var s = n("735250");
n("470079");
var a = n("739566"),
  l = n("990138"),
  i = n("702346"),
  r = n("368666"),
  o = n("689938");

function u(e) {
  var t;
  let {
    message: n,
    channel: u,
    playingActivity: d,
    onJoinStream: c,
    usernameHook: f,
    compact: E
  } = e, _ = (0, a.default)(n), T = null === (t = n.call) || void 0 === t ? void 0 : t.duration, m = f(_), I = o.default.Messages.SYSTEM_MESSAGE_GUILD_STREAM_ACTIVE.format({
    username: _.nick,
    activityName: null != d ? d.name : "unknown",
    onJoinStream: c,
    usernameHook: m
  });
  return null != T && (I = o.default.Messages.SYSTEM_MESSAGE_GUILD_STREAM_ENDED.format({
    username: _.nick,
    duration: T.humanize(),
    channelName: u.name,
    usernameHook: m
  })), (0, s.jsx)(i.default, {
    iconNode: null != T ? (0, s.jsx)(l.default, {
      width: 20,
      height: 20
    }) : (0, s.jsx)(r.default, {
      size: r.default.Sizes.SMALL
    }),
    timestamp: n.timestamp,
    compact: E,
    children: I
  })
}