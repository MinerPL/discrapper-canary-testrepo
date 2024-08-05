n(653041), n(47120);
var r, i = n(442837),
  a = n(570140);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let o = !1,
  l = [];
class u extends(r = i.ZP.PersistedStore) {
  initialize(e) {
null != e && (o = e.persistentCodesEnabled, l = e.uploadedKeyVersions);
  }
  getState() {
return {
  persistentCodesEnabled: o,
  uploadedKeyVersions: l
};
  }
  getPersistentCodesEnabled() {
return o;
  }
  getUploadedKeyVersionsCached() {
return l;
  }
}
s(u, 'displayName', 'SecureFramesPersistedStore'), s(u, 'persistKey', 'SecureFramesPersistedStore'), t.Z = new u(a.Z, {
  SECURE_FRAMES_SETTINGS_UPDATE: function(e) {
o = e.persistentCodesEnabled;
  },
  SECURE_FRAMES_UPLOAD_PUBLIC_KEY_SUCCESS: function(e) {
let t = [];
for (let n of l) {
  if (n === e.keyVersion)
    return;
  t.push(n);
}
t.push(e.keyVersion), l = t;
  }
});