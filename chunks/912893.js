n.d(t, {
	G: function () {
		return a;
	},
	U: function () {
		return i;
	}
});
var r = n(570140);
function i(e, t, n, i) {
	r.Z.dispatch({
		type: 'BURST_REACTION_PICKER_ANIMATION_ADD',
		messageId: e,
		emojiName: t,
		emojiId: n,
		startPosition: i
	});
}
function a(e, t, n) {
	r.Z.dispatch({
		type: 'BURST_REACTION_PICKER_ANIMATION_CLEAR',
		messageId: e,
		emojiName: t,
		emojiId: n
	});
}
