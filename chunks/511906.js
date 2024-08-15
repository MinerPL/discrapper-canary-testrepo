r.d(t, {
	K: function () {
		return _;
	},
	M: function () {
		return i;
	}
});
var n = r(622916),
	a = r(263449),
	o = r(255768);
function i(e, t) {
	!0 === t.debug &&
		(o.X
			? n.kg.enable()
			: (0, n.Cf)(() => {
					console.warn('[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.');
				})),
		(0, a.nZ)().update(t.initialScope);
	let r = new e(t);
	return _(r), r.init(), r;
}
function _(e) {
	(0, a.nZ)().setClient(e);
}
