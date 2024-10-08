let r;
n.d(t, {
    E: function () {
        return u;
    },
    J: function () {
        return s;
    }
});
let i = Symbol.for('react-aria.i18n.locale'),
    a = Symbol.for('react-aria.i18n.strings');
class s {
    getStringForLocale(e, t) {
        let n = this.getStringsForLocale(t)[e];
        if (!n) throw Error(`Could not find intl message ${e} in ${t} locale`);
        return n;
    }
    getStringsForLocale(e) {
        let t = this.strings[e];
        return (
            !t &&
                ((t = (function (e, t, n = 'en-US') {
                    if (t[e]) return t[e];
                    let r = (function (e) {
                        return Intl.Locale ? new Intl.Locale(e).language : e.split('-')[0];
                    })(e);
                    if (t[r]) return t[r];
                    for (let e in t) if (e.startsWith(r + '-')) return t[e];
                    return t[n];
                })(e, this.strings, this.defaultLocale)),
                (this.strings[e] = t)),
            t
        );
    }
    static getGlobalDictionaryForPackage(e) {
        if ('undefined' == typeof window) return null;
        let t = window[i];
        if (void 0 === r) {
            let e = window[a];
            if (!e) return null;
            for (let n in ((r = {}), e)) r[n] = new s({ [t]: e[n] }, t);
        }
        let n = null == r ? void 0 : r[e];
        if (!n) throw Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
        return n;
    }
    constructor(e, t = 'en-US') {
        (this.strings = { ...e }), (this.defaultLocale = t);
    }
}
let o = new Map(),
    l = new Map();
class u {
    format(e, t) {
        let n = this.strings.getStringForLocale(e, this.locale);
        return 'function' == typeof n ? n(t, this) : n;
    }
    plural(e, t, n = 'cardinal') {
        let r = t['=' + e];
        if (r) return 'function' == typeof r ? r() : r;
        let i = this.locale + ':' + n,
            a = o.get(i);
        return !a && ((a = new Intl.PluralRules(this.locale, { type: n })), o.set(i, a)), 'function' == typeof (r = t[a.select(e)] || t.other) ? r() : r;
    }
    number(e) {
        let t = l.get(this.locale);
        return !t && ((t = new Intl.NumberFormat(this.locale)), l.set(this.locale, t)), t.format(e);
    }
    select(e, t) {
        let n = e[t] || e.other;
        return 'function' == typeof n ? n() : n;
    }
    constructor(e, t) {
        (this.locale = e), (this.strings = t);
    }
}
