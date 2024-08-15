n.d(t, {
	Z: function () {
		return a;
	}
}),
	n(47120);
var r = n(470079),
	i = n(399606);
function a(e, t) {
	let { get: n, getIsLoading: a, load: s } = t,
		o = {},
		l = 0;
	return function () {
		for (var t = arguments.length, u = Array(t), c = 0; c < t; c++) u[c] = arguments[c];
		let d = (0, i.e7)([e], () => n(...u), u),
			_ = (0, i.e7)([e], () => (null == a ? void 0 : a(...u)), u),
			[E, f] = (0, r.useState)();
		return (
			(0, r.useEffect)(() => {
				let e;
				if (
					Object.entries(o).some((t) => {
						let [n, r] = t;
						return null == e && (e = Number(n)), r.every((e, t) => e === u[t]);
					})
				)
					return;
				let t = l;
				(l += 1), (o[t] = u), l > 500 && null != e && delete o[e];
				let n = new AbortController();
				return (
					s(n.signal, ...u).catch(f),
					() => {
						n.abort(), delete o[t];
					}
				);
			}, u),
			{
				data: d,
				error: E,
				isLoading: _
			}
		);
	};
}
