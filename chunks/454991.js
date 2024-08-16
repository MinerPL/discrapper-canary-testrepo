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
    static update(e) {
        let t = l.load();
        'boolean' == typeof e.enabled && (t.enabled = e.enabled), 'boolean' == typeof e.legacyEnabled && (t.legacyEnabled = e.legacyEnabled), t.save();
    }
    save() {
        let e = {
            enabled: this.enabled,
            legacyEnabled: this.legacyEnabled
        };
        a.K.set('OverlayStore3', e);
    }
    static load() {
        return null == l._loaded && (l._loaded = l.loadInternal()), l._loaded;
    }
    static loadInternal() {
        let e = a.K.get('OverlayStore');
        if (null != e) {
            let t = new l('boolean' == typeof e.enabled ? e.enabled : s.iP, !1);
            return t.save(), a.K.remove('OverlayStore'), t;
        }
        let t = a.K.get('overlayEnabled');
        if (null != t) {
            let e = new l('boolean' == typeof t ? t : s.iP, !1);
            return e.save(), a.K.remove('overlayEnabled'), e;
        }
        let n = a.K.get('OverlayStore3');
        if (null != n) {
            var r, i;
            return new l(null !== (r = n.enabled) && void 0 !== r ? r : s.iP, null !== (i = n.legacyEnabled) && void 0 !== i && i);
        }
        let o = new l(s.iP, !1);
        return o.save(), o;
    }
    constructor(e, t) {
        o(this, 'enabled', void 0), o(this, 'legacyEnabled', void 0), (this.enabled = e), (this.legacyEnabled = t);
    }
}
o(l, '_loaded', null);
