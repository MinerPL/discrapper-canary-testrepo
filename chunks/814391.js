var r = n(913527),
    i = n.n(r),
    a = n(689938);
let s = 3600,
    o = 86400,
    l = 2592000,
    u = 31104000,
    c = () => ({
        seconds: a.Z.Messages.THREAD_BROWSER_TIMESTAMP_SECONDS,
        minutes: a.Z.Messages.THREAD_BROWSER_TIMESTAMP_MINUTES,
        hours: a.Z.Messages.THREAD_BROWSER_TIMESTAMP_HOURS,
        days: a.Z.Messages.THREAD_BROWSER_TIMESTAMP_DAYS,
        months: a.Z.Messages.THREAD_BROWSER_TIMESTAMP_MORE_THAN_MONTH,
        years: a.Z.Messages.THREAD_BROWSER_TIMESTAMP_MORE_THAN_YEAR
    }),
    d = (e, t) => null != t && null != t[e],
    _ = (e, t, n) => {
        var r, i, a;
        return d(e, t) ? (null !== (i = null !== (r = t[e]) && void 0 !== r ? r : null == n ? void 0 : n[e]) && void 0 !== i ? i : null) : null !== (a = null == n ? void 0 : n[e]) && void 0 !== a ? a : null;
    };
t.Z = function (e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = i()().diff(i()(e), 's'),
        a = null != t ? t() : void 0,
        d = c(),
        E = (e, t) => {
            let r = _(e, a, n ? d : void 0);
            return null == r ? null : 'string' == typeof r ? r : r.format({ count: t });
        };
    if (r < 60) {
        let e = (null == a ? void 0 : a.seconds) != null ? E('seconds', r) : E('minutes', 1);
        if (null != e) return e;
    }
    if (r < s) {
        let e = E('minutes', Math.floor(r / 60));
        if (null != e) return e;
    }
    if (r < o) {
        let e = E('hours', Math.floor(r / s));
        if (null != e) return e;
    }
    if (r < l) {
        let e = E('days', Math.floor(r / o));
        if (null != e) return e;
    }
    if (r < u) {
        let e = E('months', Math.floor(r / l));
        if (null != e) return e;
    }
    if (r >= u && (null == a ? void 0 : a.years) != null) {
        let e = E('years', Math.floor(r / u));
        if (null != e) return e;
    }
    return i()(e).format('LL');
};
