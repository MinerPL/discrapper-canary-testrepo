var i = n(857192), s = n(901077), a = n(915357), r = n(981631);
t.Z = e => {
    let {
        origin: t,
        postMessageToRPCClient: n,
        frameId: l,
        version: o,
        encoding: c,
        logger: d,
        postClose: u
    } = e;
    return new a.Z({
        origin: t,
        postMessageToRPCClient: n,
        frameId: l,
        version: o,
        encoding: c,
        logger: d,
        postClose: u,
        onSendingToRPCClient: (e, t) => {
            (i.default.isLoggingOverlayEvents || e.cmd !== r.Etm.OVERLAY && e.evt !== r.zMe.OVERLAY) && d.info('Socket Emit: '.concat(t), (0, s.Z)(e));
        }
    });
};
