n(47120);
var r = n(241601),
    i = n(147913),
    a = n(405656);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class o extends i.Z {
    _initialize() {
        this._unsubscribeIntlLoadingStore = (0, r.Ql)(a.Pe);
    }
    _terminate() {
        var e;
        null === (e = this._unsubscribeIntlLoadingStore) || void 0 === e || e.call(this);
    }
    constructor(...e) {
        super(...e),
            s(this, 'actions', {
                USER_SETTINGS_PROTO_UPDATE: a.Pe,
                POST_CONNECTION_OPEN: a.Pe
            }),
            s(this, '_unsubscribeIntlLoadingStore', void 0);
    }
}
t.Z = new o();
