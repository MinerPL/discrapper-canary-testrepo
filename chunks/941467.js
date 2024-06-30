n(47120);
var r = n(147913), i = n(405656);
class a extends r.Z {
    constructor(...e) {
        var t, n, r;
        super(...e), t = this, n = 'actions', r = {
            USER_SETTINGS_PROTO_UPDATE: i.Pe,
            I18N_LOAD_SUCCESS: i.Pe,
            POST_CONNECTION_OPEN: i.Pe
        }, n in t ? Object.defineProperty(t, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = r;
    }
}
t.Z = new a();
