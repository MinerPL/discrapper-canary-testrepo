n.d(t, {
    Kq: function () {
        return v;
    },
    L0: function () {
        return N;
    },
    Ux: function () {
        return b;
    },
    Xe: function () {
        return A;
    },
    aQ: function () {
        return S;
    },
    bU: function () {
        return g;
    },
    qb: function () {
        return I;
    }
});
var r = n(192379),
    i = n(198453),
    a = n(133886),
    s = n(387103),
    o = n(661763),
    l = n(881085);
let u = new Set(['Arab', 'Syrc', 'Samr', 'Mand', 'Thaa', 'Mend', 'Nkoo', 'Adlm', 'Rohg', 'Hebr']),
    c = new Set(['ae', 'ar', 'arc', 'bcc', 'bqi', 'ckb', 'dv', 'fa', 'glk', 'he', 'ku', 'mzn', 'nqo', 'pnb', 'ps', 'sd', 'ug', 'ur', 'yi']),
    d = Symbol.for('react-aria.i18n.locale');
function f() {
    let e = ('undefined' != typeof window && window[d]) || ('undefined' != typeof navigator && (navigator.language || navigator.userLanguage)) || 'en-US';
    try {
        Intl.DateTimeFormat.supportedLocalesOf([e]);
    } catch (t) {
        e = 'en-US';
    }
    return {
        locale: e,
        direction: !(function (e) {
            if (Intl.Locale) {
                let t = new Intl.Locale(e).maximize(),
                    n = 'function' == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
                if (n) return 'rtl' === n.direction;
                if (t.script) return u.has(t.script);
            }
            let t = e.split('-')[0];
            return c.has(t);
        })(e)
            ? 'ltr'
            : 'rtl'
    };
}
let _ = f(),
    h = new Set();
function p() {
    for (let e of ((_ = f()), h)) e(_);
}
let m = r.createContext(null);
function g() {
    let e = (function () {
        let e = (0, i.Av)(),
            [t, n] = (0, r.useState)(_);
        return ((0, r.useEffect)(
            () => (
                0 === h.size && window.addEventListener('languagechange', p),
                h.add(n),
                () => {
                    h.delete(n), 0 === h.size && window.removeEventListener('languagechange', p);
                }
            ),
            []
        ),
        e)
            ? {
                  locale: 'en-US',
                  direction: 'ltr'
              }
            : t;
    })();
    return (0, r.useContext)(m) || e;
}
let E = new WeakMap();
function v(e, t) {
    var n;
    let r;
    return (t && (0, a.J).getGlobalDictionaryForPackage(t)) || ((n = e), !(r = E.get(n)) && ((r = new a.J(n)), E.set(n, r)), r);
}
function I(e, t) {
    let { locale: n } = g(),
        i = v(e, t);
    return (0, r.useMemo)(() => new a.E(n, i), [n, i]);
}
function S(e) {
    e = (0, o.vE)(null != e ? e : {}, T);
    let { locale: t } = g();
    return (0, r.useMemo)(() => new s.CN(t, e), [t, e]);
}
function T(e, t) {
    if (e === t) return !0;
    let n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (let r of n) if (t[r] !== e[r]) return !1;
    return !0;
}
function b(e = {}) {
    let { locale: t } = g();
    return (0, r.useMemo)(() => new l.e(t, e), [t, e]);
}
let y = new Map();
function A(e) {
    let { locale: t } = g(),
        n =
            t +
            (e
                ? Object.entries(e)
                      .sort((e, t) => (e[0] < t[0] ? -1 : 1))
                      .join()
                : '');
    if (y.has(n)) return y.get(n);
    let r = new Intl.Collator(t, e);
    return y.set(n, r), r;
}
function N(e) {
    let t = A({
            usage: 'search',
            ...e
        }),
        n = (0, r.useCallback)((e, n) => 0 === n.length || ((e = e.normalize('NFC')), (n = n.normalize('NFC')), 0 === t.compare(e.slice(0, n.length), n)), [t]),
        i = (0, r.useCallback)((e, n) => 0 === n.length || ((e = e.normalize('NFC')), (n = n.normalize('NFC')), 0 === t.compare(e.slice(-n.length), n)), [t]),
        a = (0, r.useCallback)(
            (e, n) => {
                if (0 === n.length) return !0;
                (e = e.normalize('NFC')), (n = n.normalize('NFC'));
                let r = 0,
                    i = n.length;
                for (; r + i <= e.length; r++) {
                    let a = e.slice(r, r + i);
                    if (0 === t.compare(n, a)) return !0;
                }
                return !1;
            },
            [t]
        );
    return (0, r.useMemo)(
        () => ({
            startsWith: n,
            endsWith: i,
            contains: a
        }),
        [n, i, a]
    );
}
