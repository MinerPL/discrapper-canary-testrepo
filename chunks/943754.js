n.d(t, {
	s: function () {
		return l;
	}
});
var r = n(470079),
	i = n(820282),
	a = n.n(i),
	s = n(234366),
	o = n(705942);
function l(e) {
	var t = e.children,
		n = e.innerRef,
		i = r.useContext(s.mq),
		l = r.useCallback(
			function (e) {
				(0, o.k$)(n, e), (0, o.DL)(i, e);
			},
			[n, i]
		);
	return (
		r.useEffect(function () {
			return function () {
				return (0, o.k$)(n, null);
			};
		}, []),
		r.useEffect(
			function () {
				a()(!!i, '`Reference` should not be used outside of a `Manager` component.');
			},
			[i]
		),
		(0, o.$p)(t)({ ref: l })
	);
}
