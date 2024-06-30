n.d(t, {
    g: function () {
        return u;
    }
}), n(411104);
var r = n(626135), i = n(823967), a = n(281058), o = n(761274), s = n(981631), l = n(689938);
class u {
    async requestAuthorization(e, t, n) {
        if ('function' != typeof t)
            throw Error('requestAuthorization: Was provided with not a function for '.concat(e, '.'));
        r.default.track(s.rMx.PERMISSIONS_REQUESTED, { type: e });
        let a = await t() === o.NZ.AUTHORIZED, l = a ? o.PQ.ACCEPTED : o.PQ.DENIED;
        return i.Z.setPermission(e, l), !a && n.showAuthorizationError && this.showAlert(e), a;
    }
    requestPermission(e, t) {
        let n = u.defaultNativePermissionsRequestOptions(t);
        return this.requestPermissionCore(e, n);
    }
    hasPermission(e, t) {
        let n = u.defaultNativePermissionsRequestOptions(t);
        return this.hasPermissionCore(e, n);
    }
    showAlert(e) {
        let t = {
            [o.Eu.CAMERA]: ''.concat(l.Z.Messages.NO_CAMERA_ACCESS, '. ').concat(l.Z.Messages.ENABLE_PRIVACY_ACCESS),
            [o.Eu.AUDIO]: ''.concat(l.Z.Messages.NO_MICRPHONE_ACCESS, '. ').concat(l.Z.Messages.ENABLE_PRIVACY_ACCESS),
            [o.Eu.PHOTOS]: ''.concat(l.Z.Messages.NO_PHOTOS_ACCESS, '. ').concat(l.Z.Messages.ENABLE_PRIVACY_ACCESS),
            [o.Eu.INPUT_MONITORING]: ''.concat(l.Z.Messages.NO_INPUT_MONITORING_ACCESS, '. ').concat(l.Z.Messages.ENABLE_PRIVACY_ACCESS),
            [o.Eu.CONTACTS]: ''.concat(l.Z.Messages.NO_CONTACTS_ACCESS, '. ').concat(l.Z.Messages.ENABLE_PRIVACY_ACCESS)
        }[e];
        if (null != t)
            this.openAlertModal({
                title: l.Z.Messages.SYSTEM_PERMISSION_GRANT,
                body: t,
                onConfirm: () => this.openSettings(e),
                cancelText: l.Z.Messages.CANCEL,
                confirmText: l.Z.Messages.DEVICE_SETTINGS
            });
    }
    static defaultNativePermissionsRequestOptions(e) {
        let t = { showAuthorizationError: !0 };
        return null == e ? t : {
            ...t,
            ...e
        };
    }
    constructor() {
        var e, t, n;
        e = this, t = 'storage', n = new a.Z(), t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n;
    }
}
