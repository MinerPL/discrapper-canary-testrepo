n.d(t, {
	s: function () {
		return o;
	}
});
var r = n(470079),
	i = n(75924);
function o(e, t, n) {
	var o = (0, r.useMemo)(
		function () {
			return new i.O(e, t, n);
		},
		[t, n]
	);
	return (
		(0, r.useEffect)(
			function () {
				o.spec = e;
			},
			[e]
		),
		o
	);
}
