n(47120);
var r = n(147913),
	i = n(594190),
	a = n(77498),
	s = n(454293);
function o(e) {
	var t, n;
	let { game: r } = e,
		o = i.ZP.isDetectionEnabled(r),
		l = null !== (n = r.id) && void 0 !== n ? n : null === (t = a.Z.getGameByName(r.name)) || void 0 === t ? void 0 : t.id;
	null != l && (0, s.M)(l, o);
}
class l extends r.Z {
	constructor(...e) {
		var t, n, r;
		super(...e),
			(t = this),
			(n = 'actions'),
			(r = {
				RUNNING_GAME_TOGGLE_DETECTION: o,
				RUNNING_GAME_DELETE_ENTRY: o
			}),
			n in t
				? Object.defineProperty(t, n, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
					})
				: (t[n] = r);
	}
}
t.Z = new l();
