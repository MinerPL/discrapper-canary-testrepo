n.d(t, {
	J1: function () {
		return l;
	},
	Vk: function () {
		return u;
	},
	cD: function () {
		return o;
	},
	hP: function () {
		return i;
	},
	pM: function () {
		return a;
	},
	qA: function () {
		return s;
	}
});
var r = n(570140);
function i() {
	r.Z.dispatch({ type: 'PERMIUM_PERKS_DEMO_FRAME_ANIMATION_PLAYED' });
}
function a() {
	r.Z.dispatch({ type: 'PREMIUM_PERKS_DEMO_POPOUT_DISMISSED' });
}
function s() {
	r.Z.dispatch({ type: 'PREMIUM_PERKS_DEMO_OPT_IN_POPOUT_DISMISSED' });
}
function o(e) {
	r.Z.dispatch({
		type: 'PREMIUM_PERKS_DEMO_OPT_IN_POPOUT_SHOULD_SHOW',
		shouldShow: e
	});
}
function l(e) {
	r.Z.dispatch({
		type: 'PREMIUM_PERKS_DEMO_ENABLED',
		enabled: e
	});
}
function u() {
	r.Z.dispatch({ type: 'PREMIUM_PERKS_DEMO_UI_RESET' });
}
