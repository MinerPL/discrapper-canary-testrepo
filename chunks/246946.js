var r, i = n(442837), a = n(570140), o = n(626135), s = n(314897), l = n(981631);
function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
function c(e, t) {
    o.default.track(l.rMx.STREAMER_MODE_TOGGLE, {
        enabled: e,
        automatic: t
    });
}
let d = {
        enabled: !1,
        autoToggle: !0,
        hideInstantInvites: !0,
        hidePersonalInformation: !0,
        disableSounds: !0,
        disableNotifications: !0,
        enableContentProtection: !1
    }, _ = {}, E = { ...d };
class f extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        Object.assign(_, e), this.syncWith([s.default], () => {
            var e;
            let t, n = s.default.getId();
            E = null != n ? (null == (t = _[e = n]) && (t = _[e] = { ...d }), t) : { ...d };
        });
    }
    getState() {
        return _;
    }
    getSettings() {
        return E;
    }
    get enabled() {
        return E.enabled;
    }
    get autoToggle() {
        return E.autoToggle;
    }
    get hideInstantInvites() {
        return this.enabled && E.hideInstantInvites;
    }
    get hidePersonalInformation() {
        return this.enabled && E.hidePersonalInformation;
    }
    get disableSounds() {
        return this.enabled && E.disableSounds;
    }
    get disableNotifications() {
        return this.enabled && E.disableNotifications;
    }
    get enableContentProtection() {
        return this.enabled && E.enableContentProtection;
    }
}
u(f, 'displayName', 'StreamerModeStore'), u(f, 'persistKey', 'StreamerModeStore'), u(f, 'migrations', [e => {
        let t = s.default.getId();
        return null == e || null == t ? {} : { [t]: { ...e } };
    }]), t.Z = new f(a.Z, {
    LOGOUT: function (e) {
        !e.isSwitchingAccount && (_ = {});
    },
    MULTI_ACCOUNT_REMOVE_ACCOUNT: function (e) {
        e.userId in _ && delete _[e.userId];
    },
    STREAMER_MODE_UPDATE: function (e) {
        let t = { ...E };
        return E[e.key] = e.value, 'enabled' === e.key ? c(e.value, !1) : o.default.track(l.rMx.UPDATE_STREAMER_MODE_SETTINGS, {
            enabled: E.enabled,
            automatic: E.autoToggle,
            disable_notifications: E.disableNotifications,
            disable_sounds: E.disableSounds,
            hide_instant_invites: E.hideInstantInvites,
            hide_personal_info: E.hidePersonalInformation,
            enable_content_protection: E.enableContentProtection,
            old_enabled: t.enabled,
            old_automatic: t.autoToggle,
            old_disable_notifications: t.disableNotifications,
            old_disable_sounds: t.disableSounds,
            old_hide_instant_invites: t.hideInstantInvites,
            old_hide_personal_info: t.hidePersonalInformation,
            old_enable_content_protection: t.enableContentProtection
        }), !0;
    },
    RUNNING_STREAMER_TOOLS_CHANGE: function (e) {
        if (!E.autoToggle)
            return !1;
        {
            let t = e.count > 0;
            return E.enabled = t, c(t, !0), !0;
        }
    }
});
