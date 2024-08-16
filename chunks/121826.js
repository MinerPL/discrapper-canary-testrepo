var i = n(230487),
    a = n(998502),
    s = n(914946),
    r = n(452426),
    l = n(981631);
t.Z = {
    [l.Etm.ENCOURAGE_HW_ACCELERATION]: {
        validation: (e) => (0, r.Z)(e),
        handler(e) {
            let { socket: t } = e;
            (0, s.bu)(t.transport);
            let n = t.application.id;
            if (null != n) return (0, i.Z)(n), { enabled: a.ZP.getEnableHardwareAcceleration() };
        }
    }
};
