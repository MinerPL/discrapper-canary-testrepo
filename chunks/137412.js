n(47120);
var r = n(213919), i = n(570140), a = n(317770), o = n(358085);
class s extends a.Z {
    _initialize() {
        i.Z.subscribe('CONNECTION_OPEN', this.handleConnectionOpen);
    }
    _terminate() {
        i.Z.unsubscribe('CONNECTION_OPEN', this.handleConnectionOpen);
    }
    constructor(...e) {
        var t, n, i;
        super(...e), t = this, n = 'handleConnectionOpen', i = e => {
            ((0, o.isWindows)() || (0, o.isMac)()) && r.encryptAndStoreTokens();
        }, n in t ? Object.defineProperty(t, n, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = i;
    }
}
t.Z = new s();
