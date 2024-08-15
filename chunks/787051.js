n.d(t, {
	Z: function () {
		return r;
	}
}),
	n(47120);
var s = n(470079),
	a = n(881052),
	i = n(53365);
function r(e) {
	let [t, n] = s.useState(!0),
		[r, l] = s.useState(),
		[o, c] = s.useState(),
		d = s.useCallback(async (e) => {
			n(!0), l(void 0);
			try {
				let t = await i.wZ(e);
				c(t);
			} catch (e) {
				l(new a.Hx(e));
			} finally {
				n(!1);
			}
		}, []);
	return (
		s.useEffect(() => {
			d(e);
		}, [e, d]),
		{
			isLoading: t,
			error: r,
			creatorMonetizationOnboardingMarketing: o
		}
	);
}
