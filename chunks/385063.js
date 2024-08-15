n.d(t, {
	Z: function () {
		return o;
	}
});
var i = n(735250);
n(470079);
var a = n(739566),
	s = n(834129),
	r = n(689938),
	l = n(324865);
function o(e) {
	let { message: t, usernameHook: o, compact: c, isForumPost: u } = e,
		d = (0, a.ZP)(t),
		_ = o(d);
	return (0, i.jsx)(s.Z, {
		compact: c,
		className: l.channelNameChange,
		icon: n(819373),
		timestamp: t.timestamp,
		children: (u ? r.Z.Messages.SYSTEM_MESSAGE_FORUM_POST_TITLE_CHANGE2 : r.Z.Messages.SYSTEM_MESSAGE_CHANNEL_NAME_CHANGE2).format({
			username: d.nick,
			usernameHook: _,
			channelName: t.content
		})
	});
}
