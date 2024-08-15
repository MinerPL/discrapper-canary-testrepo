n.d(t, {
	Qh: function () {
		return a;
	},
	SO: function () {
		return s;
	},
	Zw: function () {
		return o;
	}
});
var r = n(570140),
	i = n(19759);
function a(e) {
	r.Z.dispatch({
		type: 'DEV_TOOLS_SETTINGS_UPDATE',
		settings: e
	});
}
function s() {
	a({ displayTools: !i.Z.displayTools });
}
function o() {
	r.Z.dispatch({ type: 'ANALYTICS_LOG_CLEAR' });
}
