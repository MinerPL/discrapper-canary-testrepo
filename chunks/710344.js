t.d(n, {
	Z: function () {
		return a;
	}
}),
	t(47120);
var i = t(470079);
function a(e, n) {
	let [t, a] = i.useState(null),
		s = i.useCallback((e) => {
			a(e);
		}, []),
		l = i.useCallback(() => {
			a(null);
		}, []),
		r = i.useCallback(
			(i) => {
				l();
				let a = e.find((e) => {
						let { id: n } = e;
						return t === n;
					}),
					s = e.find((e) => {
						let { id: n } = e;
						return i === n;
					});
				if (null == a || null == s || a === s) return;
				let r = [...e],
					o = r.indexOf(a),
					d = r.indexOf(s),
					c = d - o > 0 ? 1 : 0;
				r.splice(o, 1), (d = r.indexOf(s)), r.splice(d + c, 0, a), n(r);
			},
			[e, t, l, n]
		);
	return {
		draggingId: t,
		handleDragStart: s,
		handleDragReset: l,
		handleDragComplete: r
	};
}
