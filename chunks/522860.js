n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(702346),
  r = n(368666),
  l = n(739566),
  o = n(689938);

function c(e) {
  var t;
  let {
message: n,
channel: c,
playingActivity: d,
onJoinStream: u,
usernameHook: _,
compact: E
  } = e, I = (0, l.ZP)(n), m = null === (t = n.call) || void 0 === t ? void 0 : t.duration, T = _(I), h = o.Z.Messages.SYSTEM_MESSAGE_GUILD_STREAM_ACTIVE.format({
username: I.nick,
activityName: null != d ? d.name : 'unknown',
onJoinStream: u,
usernameHook: T
  });
  return null != m && (h = o.Z.Messages.SYSTEM_MESSAGE_GUILD_STREAM_ENDED.format({
username: I.nick,
duration: m.humanize(),
channelName: c.name,
usernameHook: T
  })), (0, i.jsx)(s.Z, {
iconNode: null != m ? (0, i.jsx)(a.ScreenXIcon, {
  size: 'custom',
  color: 'currentColor',
  width: 20,
  height: 20
}) : (0, i.jsx)(r.ZP, {
  size: r.ZP.Sizes.SMALL
}),
timestamp: n.timestamp,
compact: E,
children: h
  });
}