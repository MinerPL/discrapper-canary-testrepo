n.d(t, {
  Z: function() {
return o;
  }
});
var i = n(735250);
n(470079);
var a = n(702346),
  s = n(739566),
  r = n(689938),
  l = n(984056);

function o(e) {
  let {
message: t,
usernameHook: o,
compact: c,
isForumPost: d
  } = e, u = (0, s.ZP)(t), _ = o(u);
  return (0, i.jsx)(a.Z, {
compact: c,
className: l.channelNameChange,
icon: n(819373),
timestamp: t.timestamp,
children: (d ? r.Z.Messages.SYSTEM_MESSAGE_FORUM_POST_TITLE_CHANGE2 : r.Z.Messages.SYSTEM_MESSAGE_CHANNEL_NAME_CHANGE2).format({
  username: u.nick,
  usernameHook: _,
  channelName: t.content
})
  });
}