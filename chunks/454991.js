n.d(t, {
    v: function () {
        return l;
    }
});
var r,
    i,
    a = n(433517),
    s = n(987650);
function o(e, t, n) {
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
((r = i || (i = {})).Version1 = 'OverlayStore'), (r.Version2 = 'overlayEnabled'), (r.Version3 = 'OverlayStore3');
class l {
    static get enabled() {
        return l.load().enabled;
    }
    static get legacyEnabled() {
        return l.load().legacyEnabled;
    }
    static get global() {
        return l.load().global;
    }
    static update(e) {
        let t = l.load();
        'boolean' == typeof e.enabled && (t.enabled = e.enabled), 'boolean' == typeof e.legacyEnabled && (t.legacyEnabled = e.legacyEnabled), 'boolean' == typeof e.global && (t.global = e.global), t.save();
    }
    save() {
        let e = {
            enabled: this.enabled,
            legacyEnabled: this.legacyEnabled,
            global: this.global
        };
        a.K.set('OverlayStore3', e);
    }
    static load() {
        return null == l._loaded && (l._loaded = l.loadInternal()), l._loaded;
    }
    static loadInternal() {
        let e = a.K.get('OverlayStore');
        if (null != e) {
            let t = new l('boolean' == typeof e.enabled ? e.enabled : s.iP, !1, !1);
            return t.save(), a.K.remove('OverlayStore'), t;
        }
        let t = a.K.get('overlayEnabled');
        if (null != t) {
            let e = new l('boolean' == typeof t ? t : s.iP, !1, !1);
            return e.save(), a.K.remove('overlayEnabled'), e;
        }
        let n = a.K.get('OverlayStore3');
        if (null != n) {
            var r, i, o;
            return new l(null !== (r = n.enabled) && void 0 !== r ? r : s.iP, null !== (i = n.legacyEnabled) && void 0 !== i && i, null !== (o = n.global) && void 0 !== o && o);
        }
        let u = new l(s.iP, !1, !1);
        return u.save(), u;
    }
    constructor(e, t, n) {
        o(this, 'enabled', void 0), o(this, 'legacyEnabled', void 0), o(this, 'global', void 0), (this.enabled = e), (this.legacyEnabled = t), (this.global = n);
    }
}
o(l, '_loaded', null);
