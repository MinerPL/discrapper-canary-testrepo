n.d(t, {
  g: function() {
return u;
  }
}), n(411104);
var r = n(626135),
  i = n(823967),
  a = n(281058),
  s = n(761274),
  o = n(981631),
  l = n(689938);
class u {
  async requestAuthorization(e, t, n) {
if ('function' != typeof t)
  throw Error('requestAuthorization: Was provided with not a function for '.concat(e, '.'));
r.default.track(o.rMx.PERMISSIONS_REQUESTED, {
  type: e
});
let a = await t() === s.NZ.AUTHORIZED,
  l = a ? s.PQ.ACCEPTED : s.PQ.DENIED;
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
  [s.Eu.CAMERA]: ''.concat(l.Z.Messages.NO_CAMERA_ACCESS, '. ').concat(l.Z.Messages.ENABLE_PRIVACY_ACCESS),
  [s.Eu.AUDIO]: ''.concat(l.Z.Messages.NO_MICRPHONE_ACCESS, '. ').concat(l.Z.Messages.ENABLE_PRIVACY_ACCESS),
  [s.Eu.PHOTOS]: ''.concat(l.Z.Messages.NO_PHOTOS_ACCESS, '. ').concat(l.Z.Messages.ENABLE_PRIVACY_ACCESS),
  [s.Eu.INPUT_MONITORING]: ''.concat(l.Z.Messages.NO_INPUT_MONITORING_ACCESS, '. ').concat(l.Z.Messages.ENABLE_PRIVACY_ACCESS),
  [s.Eu.CONTACTS]: ''.concat(l.Z.Messages.NO_CONTACTS_ACCESS, '. ').concat(l.Z.Messages.ENABLE_PRIVACY_ACCESS)
} [e];
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
let t = {
  showAuthorizationError: !0
};
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