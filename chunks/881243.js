r.d(t, {
	I1: function () {
		return _;
	},
	YJ: function () {
		return i;
	}
});
var n = r(370336);
let a = '_sentryScope',
	o = '_sentryIsolationScope';
function i(e, t, r) {
	e && ((0, n.xp)(e, o, r), (0, n.xp)(e, a, t));
}
function _(e) {
	return {
		scope: e[a],
		isolationScope: e[o]
	};
}
