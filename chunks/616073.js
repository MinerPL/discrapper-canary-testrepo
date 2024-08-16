n.d(t, {
    Kq: function () {
        return T;
    },
    L0: function () {
        return R;
    },
    Ux: function () {
        return N;
    },
    Xe: function () {
        return O;
    },
    aQ: function () {
        return S;
    },
    bU: function () {
        return m;
    },
    qb: function () {
        return g;
    }
});
var r = n(470079),
    i = n(230012),
    a = n(133886),
    s = n(387103),
    o = n(182823),
    l = n(881085);
let u = new Set(['Arab', 'Syrc', 'Samr', 'Mand', 'Thaa', 'Mend', 'Nkoo', 'Adlm', 'Rohg', 'Hebr']),
    c = new Set(['ae', 'ar', 'arc', 'bcc', 'bqi', 'ckb', 'dv', 'fa', 'glk', 'he', 'ku', 'mzn', 'nqo', 'pnb', 'ps', 'sd', 'ug', 'ur', 'yi']),
    d = Symbol.for('react-aria.i18n.locale');
function _() {
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
let E = _(),
    f = new Set();
function h() {
    for (let e of ((E = _()), f)) e(E);
}
let p = r.createContext(null);
function m() {
    let e = (function () {
        let e = (0, i.Av)(),
            [t, n] = (0, r.useState)(E);
        return ((0, r.useEffect)(
            () => (
                0 === f.size && window.addEventListener('languagechange', h),
                f.add(n),
                () => {
                    f.delete(n), 0 === f.size && window.removeEventListener('languagechange', h);
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
    return (0, r.useContext)(p) || e;
}
let I = new WeakMap();
function T(e, t) {
    var n;
    let r;
    return (t && (0, a.J).getGlobalDictionaryForPackage(t)) || ((n = e), !(r = I.get(n)) && ((r = new a.J(n)), I.set(n, r)), r);
}
function g(e, t) {
    let { locale: n } = m(),
        i = T(e, t);
    return (0, r.useMemo)(() => new a.E(n, i), [n, i]);
}
function S(e) {
    e = (0, o.vE)(null != e ? e : {}, A);
    let { locale: t } = m();
    return (0, r.useMemo)(() => new s.CN(t, e), [t, e]);
}
function A(e, t) {
    if (e === t) return !0;
    let n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (let r of n) if (t[r] !== e[r]) return !1;
    return !0;
}
function N(e = {}) {
    let { locale: t } = m();
    return (0, r.useMemo)(() => new l.e(t, e), [t, e]);
}
let v = new Map();
function O(e) {
    let { locale: t } = m(),
        n =
            t +
            (e
                ? Object.entries(e)
                      .sort((e, t) => (e[0] < t[0] ? -1 : 1))
                      .join()
                : '');
    if (v.has(n)) return v.get(n);
    let r = new Intl.Collator(t, e);
    return v.set(n, r), r;
}
function R(e) {
    let t = O({
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
