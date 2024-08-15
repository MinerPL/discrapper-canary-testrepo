var i = n(710845),
	a = n(857192),
	s = n(901077),
	r = n(46832),
	l = n(852926),
	o = n(748635),
	c = n(981631);
let d = new i.Z('RPCServer:PostMessage'),
	u = (e, t, n) => {
		(a.default.isLoggingOverlayEvents || e.cmd !== c.Etm.OVERLAY) &&
			t.info('Socket Message: '.concat(n.id), (0, s.Z)(e));
	};
t.Z = (function () {
	let e = new r.Z(l.em, d, o.Z, u);
	return (
		window.addEventListener('message', (t) => {
			if (window === t.source) return;
			if (null == t.source || null == t.source.postMessage) {
				d.error('Unknown event source');
				return;
			}
			let n = t.source,
				i = t.data,
				a = t.origin;
			e.handleMessage(i, a, (e, t) => {
				n.postMessage(e, t);
			});
		}),
		e
	);
})();
