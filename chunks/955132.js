n.d(t, {
    GC: function () {
        return p;
    },
    RR: function () {
        return h;
    },
    Wb: function () {
        return f;
    }
});
var r = n(570140),
    i = n(579806),
    a = n(710845),
    s = n(314897),
    o = n(626135),
    l = n(931619),
    u = n(358085),
    c = n(548570),
    d = n(616810),
    _ = n(755278);
let E = new a.Z('ConnectionStore'),
    f = new c.Z(),
    h = new d.Z(f),
    p = new _.Z(f);
f.handleIdentify = () => {
    let e = s.default.getToken();
    return (E.verbose('handleIdentify called', { hasToken: null != e }), null == e)
        ? null
        : {
              token: e,
              properties: o.default.getSuperProperties(),
              presence: h.getInitialState()
          };
};
(0, u.isDesktop)() &&
    i.Z.remotePowerMonitor.on('resume', () => {
        f.expeditedHeartbeat(5000, 'power monitor resumed');
    }),
    l.Z.addOfflineCallback(() => {
        f.networkStateChange(15000, 'network detected offline.', !1);
    }),
    l.Z.addOnlineCallback(() => {
        f.networkStateChange(5000, 'network detected online.');
    }),
    f.on('disconnect', (e) => {
        let { code: t, reason: n } = e;
        r.Z.dispatch({
            type: 'CONNECTION_CLOSED',
            code: t,
            reason: n
        });
    }),
    f.on('close', (e) => {
        let { code: t, reason: n } = e;
        r.Z.dispatch({
            type: 'CONNECTION_INTERRUPTED',
            code: t,
            reason: n
        });
    });
