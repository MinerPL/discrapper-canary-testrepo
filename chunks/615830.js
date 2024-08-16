n(653041), n(47120);
var r,
    i = n(442837),
    a = n(570140);
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
let o = [],
    l = !1,
    u = o;
class c extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        var t, n;
        (l = null !== (t = null == e ? void 0 : e.persistentCodesEnabled) && void 0 !== t && t), (u = null !== (n = null == e ? void 0 : e.uploadedKeyVersions) && void 0 !== n ? n : o);
    }
    getState() {
        return {
            persistentCodesEnabled: l,
            uploadedKeyVersions: u
        };
    }
    getPersistentCodesEnabled() {
        return l;
    }
    getUploadedKeyVersionsCached() {
        return u;
    }
}
s(c, 'displayName', 'SecureFramesPersistedStore'),
    s(c, 'persistKey', 'SecureFramesPersistedStore'),
    (t.Z = new c(a.Z, {
        SECURE_FRAMES_SETTINGS_UPDATE: function (e) {
            l = e.persistentCodesEnabled;
        },
        SECURE_FRAMES_UPLOAD_PUBLIC_KEY_SUCCESS: function (e) {
            let t = [];
            for (let n of u) {
                if (n === e.keyVersion) return;
                t.push(n);
            }
            t.push(e.keyVersion), (u = t);
        }
    }));
