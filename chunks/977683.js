n.d(t, {
	Z: function () {
		return u;
	}
});
var i = n(470079),
	a = n(410030),
	s = n(695346),
	r = n(798628),
	l = n(275344),
	o = n(918088),
	c = n(562293);
function u(e, t) {
	var n;
	let u = (0, l.v)(e),
		d = (0, r.cE)(u.getChannelId())[u.id],
		_ = (0, c.Z)(null === (n = u.poll) || void 0 === n ? void 0 : n.expiry),
		E = s.Yk.useSetting(),
		I = (0, a.ZP)(),
		m = null != t ? t : I;
	return i.useMemo(
		() =>
			(0, o.ZP)(u, d, {
				animateEmoji: E,
				theme: m,
				formattedExpirationLabel: _
			}),
		[E, u, d, _, m]
	);
}
