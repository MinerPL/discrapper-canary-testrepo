n(47120);
var r = n(570140), i = n(147913), a = n(885110);
class o extends i.Z {
    constructor(...e) {
        var t, n, r;
        super(...e), t = this, n = 'stores', r = new Map().set(a.Z, s), n in t ? Object.defineProperty(t, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = r;
    }
}
function s() {
    r.Z.dispatch({
        type: 'SELF_PRESENCE_STORE_UPDATE',
        status: a.Z.getStatus(),
        activities: a.Z.getActivities()
    });
}
t.Z = new o();
