n.d(t, {
    B: function () {
        return g;
    }
}),
    n(47120);
var r = n(147913),
    i = n(592125),
    a = n(19780),
    s = n(699516),
    o = n(70956),
    l = n(280006),
    u = n(33194);
n(452369);
var c = n(807031),
    d = n(189275),
    f = n(451092);
n(334431);
let _ = 1 * o.Z.Millis.HOUR,
    h = 3 * o.Z.Millis.DAY;
function p(e) {
    let { channelId: t } = e;
    if (null == t) return;
    let n = i.Z.getChannel(t);
    if (null != n && n.isGroupDM()) {
        let e = n.recipients.filter((e) => s.Z.isBlocked(e));
        e.length > 0 &&
            l.E.getCurrentConfig({ location: 'channel_select' }, { autoTrackExposure: !0 }).showAsModal &&
            !n.blockedUserWarningDismissed &&
            !(function (e) {
                return (0, u.Iu)(e) > Date.now() - h;
            })(t) &&
            (0, d.O)({
                channelId: t,
                blockedUserIds: e
            });
    }
}
function m(e) {
    let { state: t } = e;
}
function g(e) {
    return (0, u.Iu)(e) > Date.now() - _;
}
class E extends r.Z {
    handleBlockedUserVoiceChannelJoin(e, t) {
        let n = a.Z.getChannelId();
        if (e === n && null != i.Z.getChannel(e)) (0, c.wC)({ location: 'warning_manager' }) && !g(e) && (0, f.H)(n, t);
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                CHANNEL_SELECT: p,
                APP_STATE_UPDATE: m
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
t.Z = new E();
