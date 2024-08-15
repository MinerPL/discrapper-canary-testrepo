n.d(t, {
	Z: function () {
		return d;
	}
});
var i = n(442837),
	a = n(201895),
	s = n(557135),
	r = n(703656),
	l = n(592125),
	o = n(979651),
	c = n(66999),
	u = n(981631);
function d(e, t) {
	let n = (0, i.e7)([l.Z], () => l.Z.getChannel(t)),
		{ needSubscriptionToAccess: d } = (0, c.Z)(null == n ? void 0 : n.id);
	if (null == n || d) return null;
	let _ = n.isGuildVocal(),
		E = (0, a.ZP)({ channel: n });
	return {
		navigateToChannel: () => {
			_
				? s.Z.handleVoiceConnect({
						channel: n,
						connected: o.Z.isInChannel(n.id),
						needSubscriptionToAccess: !1,
						routeDirectlyToChannel: !0
					})
				: (0, r.uL)(u.Z5c.CHANNEL(e, n.id));
		},
		ariaLabel: E
	};
}
