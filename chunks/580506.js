n(47120);
var r = n(147913),
	i = n(70956),
	a = n(192720),
	s = n(121254),
	o = n(742989);
function l(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
class u extends r.Z {
	constructor(...e) {
		super(...e),
			l(this, 'actions', { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() }),
			l(this, 'handlePostConnectionOpen', () => {
				!(function e() {
					(s.Z.getCurrentConfig({ location: 'saved_messages_manager' }, { autoTrackExposure: !1 }).enabled ||
						o.Z.getCurrentConfig({ location: 'saved_messages_manager' }, { autoTrackExposure: !1 }).showReminders) &&
						(0, a.sE)().then(() => setTimeout(e, 15 * i.Z.Millis.MINUTE));
				})();
			});
	}
}
t.Z = new u();
