r.d(t, {
    Ft: function () {
        return o;
    },
    Ui: function () {
        return n;
    },
    Zn: function () {
        return a;
    }
}),
    r(47120);
function n(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
        n = null != window.GLOBAL_ENV.WEBAPP_ENDPOINT ? window.GLOBAL_ENV.WEBAPP_ENDPOINT : '',
        a = null != e ? '?redirect_to='.concat(encodeURIComponent(e)) : '';
    return (
        0 !== r.length && (r = 0 === a.length ? '?'.concat(r) : '&'.concat(r)),
        ''
            .concat(t ? n : '', '/login')
            .concat(a)
            .concat(r)
    );
}
class a {
    toString() {
        return this.value;
    }
    constructor(e) {
        var t, r, n;
        (t = this),
            (n = void 0),
            (r = 'value') in t
                ? Object.defineProperty(t, r, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[r] = n),
            (this.value = e);
    }
}
function o(e, t) {
    let r = {};
    for (let n of Object.keys(e)) {
        let o = e[n];
        if ('function' != typeof o) {
            r[n] = o;
            continue;
        }
        r[n] = function () {
            for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
            return o(
                ...(function (e, t) {
                    return e.map((e) =>
                        null == e
                            ? e
                            : e instanceof a
                              ? e.toString()
                              : null == t
                                ? encodeURIComponent(e)
                                : String(e)
                                      .split('')
                                      .map((e) => (null != t && t.includes(e) ? e : encodeURIComponent(e)))
                                      .join('')
                    );
                })(r, t)
            );
        };
    }
    return r;
}
