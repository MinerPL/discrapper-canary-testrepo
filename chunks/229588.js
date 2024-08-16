n.d(t, {
    f: function () {
        return _;
    }
});
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140);
let u = !1,
    c = null,
    d = null;
function _(e) {
    E({ locale: e });
}
function E(e) {
    let { locale: t } = e;
    (u = !0), (c = t);
}
class f extends (s = o.ZP.Store) {
    isLoading() {
        return u;
    }
    getError() {
        return d;
    }
}
(a = 'I18nLoaderStore'),
    (i = 'displayName') in (r = f)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new f(l.Z, {
        I18N_LOAD_START: E,
        I18N_LOAD_SUCCESS: function (e) {
            let { locale: t } = e;
            t === c && ((u = !1), (d = null), (c = null));
        },
        I18N_LOAD_ERROR: function (e) {
            let { error: t, locale: n } = e;
            n === c && ((u = !1), (d = null != t ? t : null), (c = null));
        }
    }));
