n.d(t, {
	Z: function () {
		return s;
	}
}),
	n(47120);
var r = n(470079),
	i = n(77866),
	a = n(846519);
function s(e, t) {
	let [n, s] = (0, r.useState)(e),
		o = (0, i.Z)(() => new a.V7());
	return (
		(0, r.useEffect)(() => () => o.stop(), [o]),
		[
			n,
			(0, r.useCallback)(
				(n) => {
					s(n), n !== e && o.start(t, () => s(e));
				},
				[t, e, o]
			)
		]
	);
}
