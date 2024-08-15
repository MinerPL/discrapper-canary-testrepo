n.d(s, {
	Z: function () {
		return r;
	}
}),
	n(47120);
var l = n(470079),
	t = n(442837),
	o = n(528963),
	i = n(237904);
let a = 1 * n(70956).Z.Millis.HOUR;
function r(e) {
	let [s, n] = l.useState(!1),
		r = (0, t.e7)([i.Z], () => i.Z.getFollowerStatsForChannel(e), [e]);
	return (
		l.useEffect(() => {
			(null == r || Date.now() - r.lastFetched > a) && !s
				? (n(!0), o.Z.fetchChannelFollowerStats(e))
				: null != r && s && n(!1);
		}, [e, r, s]),
		[r, s]
	);
}
