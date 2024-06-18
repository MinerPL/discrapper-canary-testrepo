"use strict";
n.d(t, {
  v: function() {
    return l
  }
});
var i, r, s = n(433517),
  o = n(987650);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(i = r || (r = {})).Version1 = "OverlayStore", i.Version2 = "overlayEnabled", i.Version3 = "OverlayStore3";
class l {
  static get enabled() {
    return l.load().enabled
  }
  static get legacyEnabled() {
    return l.load().legacyEnabled
  }
  static update(e) {
    let t = l.load();
    "boolean" == typeof e.enabled && (t.enabled = e.enabled), "boolean" == typeof e.legacyEnabled && (t.legacyEnabled = e.legacyEnabled), t.save()
  }
  save() {
    let e = {
      enabled: this.enabled,
      legacyEnabled: this.legacyEnabled
    };
    s.K.set("OverlayStore3", e)
  }
  static load() {
    return null == l._loaded && (l._loaded = l.loadInternal()), l._loaded
  }
  static loadInternal() {
    let e = s.K.get("OverlayStore");
    if (null != e) {
      let t = new l("boolean" == typeof e.enabled ? e.enabled : o.iP, !1);
      return t.save(), s.K.remove("OverlayStore"), t
    }
    let t = s.K.get("overlayEnabled");
    if (null != t) {
      let e = new l("boolean" == typeof t ? t : o.iP, !1);
      return e.save(), s.K.remove("overlayEnabled"), e
    }
    let n = s.K.get("OverlayStore3");
    if (null != n) {
      var i, r;
      return new l(null !== (i = n.enabled) && void 0 !== i ? i : o.iP, null !== (r = n.legacyEnabled) && void 0 !== r && r)
    }
    let a = new l(o.iP, !1);
    return a.save(), a
  }
  constructor(e, t) {
    a(this, "enabled", void 0), a(this, "legacyEnabled", void 0), this.enabled = e, this.legacyEnabled = t
  }
}
a(l, "_loaded", null)