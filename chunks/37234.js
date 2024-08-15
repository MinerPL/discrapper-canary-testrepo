n.d(t, {
	Ou: function () {
		return s;
	},
	jN: function () {
		return i;
	},
	xf: function () {
		return a;
	}
});
var r = n(570140);
function i(e) {
	r.Z.dispatch({
		type: 'LAYER_PUSH',
		component: e
	});
}
function a() {
	r.Z.dispatch({ type: 'LAYER_POP' });
}
function s() {
	r.Z.dispatch({ type: 'LAYER_POP_ALL' });
}
