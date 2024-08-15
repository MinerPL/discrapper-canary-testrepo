n.d(t, {
	GG: function () {
		return a;
	},
	R2: function () {
		return s;
	},
	h7: function () {
		return l;
	},
	rh: function () {
		return r;
	}
});
var i = n(570140);
function l(e, t) {
	return new Promise((n) => {
		setTimeout(() => {
			i.Z.dispatch({
				type: 'ACTIVITY_INVITE_MODAL_OPEN',
				activity: e,
				isPrivate: t,
				resolve: n
			});
		}, 0);
	});
}
function r(e) {
	i.Z.dispatch({
		type: 'ACTIVITY_INVITE_MODAL_QUERY',
		query: e
	});
}
function a(e) {
	i.Z.dispatch({
		type: 'ACTIVITY_INVITE_MODAL_SEND',
		channelId: e
	});
}
function s(e) {
	i.Z.dispatch({
		type: 'ACTIVITY_INVITE_MODAL_SEND',
		userId: e
	});
}
