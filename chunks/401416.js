n.d(t, {
    Y: function () {
        return u;
    }
}), n(47120);
var r = n(544891), i = n(147913), a = n(25733), o = n(704587), s = n(981631);
class l extends i.Z {
    intialize() {
        o.s.getCurrentConfig({ location: 'initializer' }, { autoTrackExposure: !1 });
    }
    handleDmSettingsUpsellShow(e) {
        a.Z.openDmSettingsUpsellModal(e.guildId);
    }
    constructor(...e) {
        var t, n, r;
        super(...e), t = this, n = 'actions', r = { DM_SETTINGS_UPSELL_SHOW: this.handleDmSettingsUpsellShow }, n in t ? Object.defineProperty(t, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = r;
    }
}
function u(e) {
    return r.tn.post({ url: s.ANM.DM_SETTINGS_UPSELL_ACK(e) });
}
t.Z = new l();
