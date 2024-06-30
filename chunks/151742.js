n(177593), n(47120);
var r = n(147913), i = n(695346);
let a = !1;
class o extends r.Z {
    maybeShowChangeLanguageToast() {
    }
    setVerifyTimezone() {
        a = !0;
    }
    ensureTimezoneUpdated() {
        if (!a)
            return;
        a = !1;
        let e = new Date().getTimezoneOffset();
        i.rN.getSetting() !== e && setImmediate(() => i.rN.updateSetting(e));
    }
    constructor(...e) {
        var t, n, r;
        super(...e), t = this, n = 'actions', r = {
            POST_CONNECTION_OPEN: () => {
                this.setVerifyTimezone(), this.maybeShowChangeLanguageToast();
            },
            OVERLAY_INITIALIZE: this.setVerifyTimezone,
            USER_SETTINGS_PROTO_UPDATE: this.ensureTimezoneUpdated
        }, n in t ? Object.defineProperty(t, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = r;
    }
}
t.Z = new o();
