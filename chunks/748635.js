var i = n(857192),
	a = n(901077),
	s = n(915357),
	r = n(981631);
t.Z = (e) => {
	let { origin: t, postMessageToRPCClient: n, frameId: l, version: o, encoding: c, logger: d, postClose: u } = e;
	return new s.Z({
		origin: t,
		postMessageToRPCClient: n,
		frameId: l,
		version: o,
		encoding: c,
		logger: d,
		postClose: u,
		onSendingToRPCClient: (e, t) => {
			(i.default.isLoggingOverlayEvents || (e.cmd !== r.Etm.OVERLAY && e.evt !== r.zMe.OVERLAY)) && d.info('Socket Emit: '.concat(t), (0, a.Z)(e));
		}
	});
};
