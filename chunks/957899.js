n(47120);
var r = n(147913),
    i = n(604375),
    a = n(828354);
class s extends r.Z {
    handleVoiceChannelSelect() {
        a.M.trigger();
    }
    handleCallCreate() {
        a.M.trigger();
    }
    handleUserSettingsModalOpen() {
        i.X.trigger();
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
                CALL_CREATE: this.handleCallCreate,
                USER_SETTINGS_MODAL_OPEN: this.handleUserSettingsModalOpen
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
t.Z = new s();
