n.d(t, {
	Z: function () {
		return i;
	}
}),
	n(47120);
var s = n(470079),
	a = n(295141);
function i(e) {
	let [t, n] = s.useState(!0),
		[i, r] = s.useState(),
		[l, o] = s.useState(),
		c = s.useCallback(async (e) => {
			n(!0), r(void 0);
			try {
				let t = await a.HT(e);
				o(t);
			} catch (e) {
				r(e);
			} finally {
				n(!1);
			}
		}, []);
	return (
		s.useEffect(() => {
			c(e);
		}, [e, c]),
		{
			isLoading: t,
			error: i,
			highlightedCreatorDetails: l
		}
	);
}
