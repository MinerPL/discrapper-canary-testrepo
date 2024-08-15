l.d(n, {
	_: function () {
		return r;
	},
	y: function () {
		return i;
	}
});
var t = l(570140);
function r(e, n) {
	t.Z.dispatch({
		type: 'APP_LAUNCHER_SHOW',
		entrypoint: e,
		activeViewType: n
	});
}
function i(e) {
	t.Z.dispatch({
		type: 'APP_LAUNCHER_DISMISS',
		closeReason: e
	});
}
