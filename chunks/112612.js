n.d(e, {
	Z: function () {
		return o;
	}
}),
	n(47120);
var a = n(470079),
	s = n(881052);
function o(t) {
	let { onSubmit: e, onClose: n } = t,
		[o, i] = a.useState(!1),
		[r, c] = a.useState(null),
		l = a.useCallback(async () => {
			if (!o) {
				i(!0), c(null);
				try {
					await e(), n();
				} catch (t) {
					c(new s.Hx(t).getAnyErrorMessage()), i(!1);
				}
			}
		}, [n, e, o]);
	return {
		submitting: o,
		errorMessage: r,
		onSubmit: l
	};
}
