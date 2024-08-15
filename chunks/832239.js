e.d(n, {
	JO: function () {
		return a;
	},
	KK: function () {
		return _;
	},
	Vp: function () {
		return u;
	},
	hW: function () {
		return c;
	},
	zu: function () {
		return s;
	}
});
var o = e(544891),
	i = e(570140),
	r = e(981631);
function a() {
	i.Z.dispatch({ type: 'VIBING_WUMPUS_PLAY_MUSIC' });
}
function s() {
	i.Z.dispatch({ type: 'VIBING_WUMPUS_STOP_MUSIC' });
}
function c() {
	i.Z.dispatch({ type: 'VIBING_WUMPUS_PAUSE_MUSIC' });
}
function u(t) {
	return o.tn.del({ url: r.ANM.DELETE_SAFETY_WARNINGS(t) });
}
function _(t, n) {
	return o.tn.post({
		url: r.ANM.ADD_SAFETY_WARNING(t),
		body: { safety_warning_type: n }
	});
}
