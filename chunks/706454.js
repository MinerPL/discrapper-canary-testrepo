n.r(t);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(241601),
    c = n(424395),
    d = n(581883),
    _ = n(689938),
    E = n(388032);
let f = c.v ? E.intl.defaultLocale : _.Z.getDefaultLocale();
function h() {
    var e, t;
    let n = null === (t = d.Z.settings.localization) || void 0 === t ? void 0 : null === (e = t.locale) || void 0 === e ? void 0 : e.value;
    return null != n && '' !== n && n !== f && ((f = n), (0, u._2)(f), !0);
}
class p extends (s = o.ZP.Store) {
    initialize() {
        this.waitFor(d.Z), h(), (0, u._2)(f);
    }
    get locale() {
        return f;
    }
}
(a = 'LocaleStore'),
    (i = 'displayName') in (r = p)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.default = new p(l.Z, {
        OVERLAY_INITIALIZE: h,
        CACHE_LOADED: h,
        CONNECTION_OPEN: h,
        USER_SETTINGS_PROTO_UPDATE: h,
        USER_SETTINGS_LOCALE_OVERRIDE: function (e) {
            (f = e.locale), (0, u._2)(f);
        }
    }));
