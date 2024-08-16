n(47120);
var r = n(147913),
    i = n(592125),
    a = n(699516),
    s = n(280006),
    o = n(189275);
function l(e) {
    let { channelId: t } = e;
    if (null == t) return;
    let n = i.Z.getChannel(t);
    if (null != n && n.isGroupDM()) {
        let e = n.recipients.filter((e) => a.Z.isBlocked(e));
        e.length > 0 &&
            s.E.getCurrentConfig({ location: 'channel_select' }, { autoTrackExposure: !0 }).showAsModal &&
            !n.blockedUserWarningDismissed &&
            (0, o.O)({
                channelId: t,
                blockedUserIds: e
            });
    }
}
class u extends r.Z {
    intialize() {
        s.E.getCurrentConfig({ location: 'initializer' }, { autoTrackExposure: !1 });
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = { CHANNEL_SELECT: l }),
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
t.Z = new u();
