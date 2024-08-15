n(47120), n(315314), n(610138), n(216116), n(78328), n(815648);
var i = n(230711),
	a = n(12647),
	s = n(49012),
	r = n(358085),
	l = n(996106),
	o = n(914946),
	c = n(452426),
	d = n(186901),
	u = n(981631),
	_ = n(701488);
let E = new Set([_.Fu, _.JT]);
t.Z = {
	[u.Etm.OPEN_EXTERNAL_LINK]: {
		scope: { [d.Gp.ANY]: [d.wE] },
		validation: (e) => (0, c.Z)(e).required().keys({ url: e.string().required() }),
		handler(e) {
			let {
				socket: t,
				args: { url: n }
			} = e;
			(0, o.bu)(t.transport);
			try {
				let e = new URL(n);
				r.isPlatformEmbedded && a.Z.focus(null, !0), (0, s.q)({ href: e.toString() });
			} catch (e) {
				throw new l.Z({ errorCode: u.lTL.INVALID_COMMAND }, 'Invalid URL: '.concat(n));
			}
		}
	},
	[u.Etm.NAVIGATE_TO_CONNECTIONS]: {
		validation: (e) => (0, c.Z)(e),
		scope: { [d.Gp.ANY]: [d.wE] },
		handler(e) {
			let { socket: t } = e;
			(0, o.bu)(t.transport);
			let n = (0, o._f)(t.application);
			if (!E.has(n))
				throw new l.Z({ errorCode: u.lTL.UNAUTHORIZED_FOR_APPLICATION }, 'Command not available for this application');
			i.Z.open(u.oAB.CONNECTIONS);
		}
	}
};
