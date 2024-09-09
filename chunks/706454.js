n.r(t);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(209185),
    c = n(581883),
    d = n(689938);
let _ = d.Z.getDefaultLocale();
function E() {
    var e, t;
    let n = null === (t = c.Z.settings.localization) || void 0 === t ? void 0 : null === (e = t.locale) || void 0 === e ? void 0 : e.value;
    return null != n && '' !== n && n !== _ && ((_ = n), u.i(_), !0);
}
class f extends (s = o.ZP.Store) {
    initialize() {
        this.waitFor(c.Z), E(), u.i(_);
    }
    get locale() {
        return _;
    }
}
(a = 'LocaleStore'),
    (i = 'displayName') in (r = f)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.default = new f(l.Z, {
        OVERLAY_INITIALIZE: E,
        CACHE_LOADED: E,
        CONNECTION_OPEN: E,
        USER_SETTINGS_PROTO_UPDATE: E,
        USER_SETTINGS_LOCALE_OVERRIDE: function (e) {
            (_ = e.locale), u.i(_);
        }
    }));
