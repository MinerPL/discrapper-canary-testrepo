n.d(e, {
	Y: function () {
		return u;
	}
});
var a = n(470079),
	r = n(110924),
	o = n(626135),
	s = n(497350),
	c = n(981631);
function u(t) {
	let e = (0, r.Z)(t);
	a.useEffect(() => {
		if (t === e) return;
		let n = null;
		'user-code-input' !== t.type && (n = (0, s.B)(t.userCodeData.clientId)),
			o.default.track(c.rMx.DEVICE_LINK_STEP, {
				previous_step: null == e ? void 0 : e.type,
				current_step: t.type,
				platform_type: n
			});
	}, [e, t]);
}
