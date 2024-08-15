n(47120);
var r = n(147913),
	i = n(336197),
	a = n(341298),
	s = n(558921),
	o = n(981631);
class l extends r.Z {
	async handleChannelCreate(e) {
		let { channel: t } = e;
		(0, a.tr)(t) && (await (0, a.mM)(s.y), (0, i.Z)(o.Z5c.CHANNEL(null, t.id)));
	}
	constructor(...e) {
		var t, n, r;
		super(...e),
			(t = this),
			(n = 'actions'),
			(r = { CHANNEL_CREATE: this.handleChannelCreate }),
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
