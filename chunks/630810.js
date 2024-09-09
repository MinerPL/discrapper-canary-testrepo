t.d(n, {
    m: function () {
        return s;
    }
});
var l,
    s,
    a = t(493683),
    i = t(904245),
    r = t(710845),
    o = t(592125),
    d = t(70956),
    u = t(651655);
let c = 1 * d.Z.Millis.SECOND + 10;
((l = s || (s = {}))[(l.GROUP_DM = 0)] = 'GROUP_DM'), (l[(l.USER = 1)] = 'USER'), (l[(l.CHANNEL = 2)] = 'CHANNEL');
class h extends u.Z {
    _sendInvite(e, n, t, l, s) {
        i.Z.sendInvite(e.id, n, t, l).then(
            () => s(null, !0),
            () => s(null, !1)
        );
    }
    drain(e, n) {
        let { location: t, suggested: l } = e;
        switch (e.type) {
            case 0:
            case 2:
                this._sendInvite(e.channel, e.inviteKey, t, l, n);
                break;
            case 1:
                a.Z.ensurePrivateChannel(e.user.id).then(
                    (s) => {
                        let a = o.Z.getChannel(s);
                        null != a && this._sendInvite(a, e.inviteKey, t, l, n);
                    },
                    () => n(null, !1)
                );
        }
    }
    constructor() {
        super(new r.Z('InviteQueue'), c);
    }
}
n.Z = new h();
