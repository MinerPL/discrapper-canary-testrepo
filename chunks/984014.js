n.d(t, {
	Z: function () {
		return r;
	}
});
var i = n(442837),
	a = n(872810),
	s = n(199902),
	l = n(314897);
function r(e, t) {
	let n = (0, i.e7)([l.default], () => l.default.getId()),
		r = (0, i.e7)(
			[s.Z],
			() => {
				let t = s.Z.getCurrentUserActiveStream();
				return null != t && t.channelId === e;
			},
			[e]
		),
		o = (0, i.e7)([s.Z], () => s.Z.isSelfStreamHidden(e), [e]);
	return [
		(null == t || t === n) && r,
		o,
		(t) => {
			(0, a.pR)(e, t);
		}
	];
}
