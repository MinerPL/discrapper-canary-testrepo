n.d(t, {
	A6: function () {
		return s;
	},
	fE: function () {
		return i;
	},
	qx: function () {
		return a;
	}
});
var r = n(570140);
function i(e) {
	let { message: t, channel: n, shouldMention: i, showMentionToggle: a, source: s } = e;
	r.Z.dispatch({
		type: 'CREATE_PENDING_REPLY',
		message: t,
		channel: n,
		shouldMention: i,
		showMentionToggle: a,
		source: s
	});
}
function a(e, t) {
	r.Z.dispatch({
		type: 'SET_PENDING_REPLY_SHOULD_MENTION',
		channelId: e,
		shouldMention: t
	});
}
function s(e) {
	r.Z.dispatch({
		type: 'DELETE_PENDING_REPLY',
		channelId: e
	});
}
