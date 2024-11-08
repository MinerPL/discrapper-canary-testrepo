let r, i;
n.d(t, {
    KC: function () {
        return f;
    },
    Rn: function () {
        return N;
    },
    Vf: function () {
        return S;
    },
    YR: function () {
        return ex;
    },
    xj: function () {
        return h;
    }
});
var a = n(410914);
function s(e, t) {
    return e - t * Math.floor(e / t);
}
function o(e, t, n, r) {
    let i = (t = u(e, t)) - 1,
        a = -2;
    return n <= 2 ? (a = 0) : l(t) && (a = -1), 1721425 + 365 * i + Math.floor(i / 4) - Math.floor(i / 100) + Math.floor(i / 400) + Math.floor((367 * n - 362) / 12 + a + r);
}
function l(e) {
    return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function u(e, t) {
    return 'BC' === e ? 1 - t : t;
}
function c(e) {
    let t = 'AD';
    return e <= 0 && ((t = 'BC'), (e = 1 - e)), [t, e];
}
let d = {
    standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
};
class _ {
    fromJulianDay(e) {
        let t = e - 1721426,
            n = Math.floor(t / 146097),
            r = s(t, 146097),
            i = Math.floor(r / 36524),
            a = s(r, 36524),
            u = Math.floor(a / 1461),
            d = Math.floor(s(a, 1461) / 365),
            [_, E] = c(400 * n + 100 * i + 4 * u + d + (4 !== i && 4 !== d ? 1 : 0)),
            f = e - o(_, E, 1, 1),
            h = 2;
        e < o(_, E, 3, 1) ? (h = 0) : l(E) && (h = 1);
        let p = Math.floor(((f + h) * 12 + 373) / 367),
            m = e - o(_, E, p, 1) + 1;
        return new j(_, E, p, m);
    }
    toJulianDay(e) {
        return o(e.era, e.year, e.month, e.day);
    }
    getDaysInMonth(e) {
        return d[l(e.year) ? 'leapyear' : 'standard'][e.month - 1];
    }
    getMonthsInYear(e) {
        return 12;
    }
    getDaysInYear(e) {
        return l(e.year) ? 366 : 365;
    }
    getYearsInEra(e) {
        return 9999;
    }
    getEras() {
        return ['BC', 'AD'];
    }
    isInverseEra(e) {
        return 'BC' === e.era;
    }
    balanceDate(e) {
        e.year <= 0 && ((e.era = 'BC' === e.era ? 'AD' : 'BC'), (e.year = 1 - e.year));
    }
    constructor() {
        this.identifier = 'gregory';
    }
}
let E = {
    '001': 1,
    AD: 1,
    AE: 6,
    AF: 6,
    AI: 1,
    AL: 1,
    AM: 1,
    AN: 1,
    AR: 1,
    AT: 1,
    AU: 1,
    AX: 1,
    AZ: 1,
    BA: 1,
    BE: 1,
    BG: 1,
    BH: 6,
    BM: 1,
    BN: 1,
    BY: 1,
    CH: 1,
    CL: 1,
    CM: 1,
    CN: 1,
    CR: 1,
    CY: 1,
    CZ: 1,
    DE: 1,
    DJ: 6,
    DK: 1,
    DZ: 6,
    EC: 1,
    EE: 1,
    EG: 6,
    ES: 1,
    FI: 1,
    FJ: 1,
    FO: 1,
    FR: 1,
    GB: 1,
    GE: 1,
    GF: 1,
    GP: 1,
    GR: 1,
    HR: 1,
    HU: 1,
    IE: 1,
    IQ: 6,
    IR: 6,
    IS: 1,
    IT: 1,
    JO: 6,
    KG: 1,
    KW: 6,
    KZ: 1,
    LB: 1,
    LI: 1,
    LK: 1,
    LT: 1,
    LU: 1,
    LV: 1,
    LY: 6,
    MC: 1,
    MD: 1,
    ME: 1,
    MK: 1,
    MN: 1,
    MQ: 1,
    MV: 5,
    MY: 1,
    NL: 1,
    NO: 1,
    NZ: 1,
    OM: 6,
    PL: 1,
    QA: 6,
    RE: 1,
    RO: 1,
    RS: 1,
    RU: 1,
    SD: 6,
    SE: 1,
    SI: 1,
    SK: 1,
    SM: 1,
    SY: 6,
    TJ: 1,
    TM: 1,
    TR: 1,
    UA: 1,
    UY: 1,
    UZ: 1,
    VA: 1,
    VN: 1,
    XK: 1
};
function f(e, t) {
    return (t = b(t, e.calendar)), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function h(e, t) {
    return (t = b(t, e.calendar)), (e = g(e)), (t = g(t)), e.era === t.era && e.year === t.year && e.month === t.month;
}
function p(e, t) {
    return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function m(e) {
    return 3600000 * e.hour + 60000 * e.minute + 1000 * e.second + e.millisecond;
}
let I = null;
function T() {
    return null == I && (I = new Intl.DateTimeFormat().resolvedOptions().timeZone), I;
}
function g(e) {
    return e.subtract({ days: e.day - 1 });
}
function S(e) {
    return e.add({ days: e.calendar.getDaysInMonth(e) - e.day });
}
let A = new Map();
function N(e, t) {
    var n, r;
    let i,
        a = e.calendar.getDaysInMonth(e);
    return Math.ceil(
        ((n = g(e)),
        (r = t),
        (i =
            Math.ceil(
                n.calendar.toJulianDay(n) +
                    1 -
                    (function (e) {
                        return (
                            E[
                                (function (e) {
                                    if (Intl.Locale) {
                                        let t = A.get(e);
                                        return !t && ((t = new Intl.Locale(e).maximize().region), A.set(e, t)), t;
                                    }
                                    let t = e.split('-')[1];
                                    return 'u' === t ? null : t;
                                })(e)
                            ] || 0
                        );
                    })(r)
            ) % 7) < 0 && (i += 7),
        (i + a) / 7)
    );
}
function v(e) {
    return O(u((e = b(e, new _())).era, e.year), e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function O(e, t, n, r, i, a, s) {
    let o = new Date();
    return o.setUTCHours(r, i, a, s), o.setUTCFullYear(e, t - 1, n), o.getTime();
}
function R(e, t) {
    if ('UTC' === t) return 0;
    if (e > 0 && t === T()) return -60000 * new Date(e).getTimezoneOffset();
    let { year: n, month: r, day: i, hour: a, minute: s, second: o } = y(e, t);
    return O(n, r, i, a, s, o, 0) - 1000 * Math.floor(e / 1000);
}
let C = new Map();
function y(e, t) {
    let n = C.get(t);
    !n &&
        ((n = new Intl.DateTimeFormat('en-US', {
            timeZone: t,
            hour12: !1,
            era: 'short',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        })),
        C.set(t, n));
    let r = n.formatToParts(new Date(e)),
        i = {};
    for (let e of r) 'literal' !== e.type && (i[e.type] = e.value);
    return {
        year: 'BC' === i.era || 'B' === i.era ? -i.year + 1 : +i.year,
        month: +i.month,
        day: +i.day,
        hour: '24' === i.hour ? 0 : +i.hour,
        minute: +i.minute,
        second: +i.second
    };
}
function D(e, t, n = 'compatible') {
    return new Date(
        (function (e, t, n = 'compatible') {
            var r, i, a, s;
            let o = L(e);
            if ('UTC' === t) return v(o);
            if (t === T() && 'compatible' === n) {
                o = b(o, new _());
                let e = new Date(),
                    t = u(o.era, o.year);
                return e.setFullYear(t, o.month - 1, o.day), e.setHours(o.hour, o.minute, o.second, o.millisecond), e.getTime();
            }
            let l = v(o),
                c = R(l - 86400000, t),
                d = R(l + 86400000, t);
            let E =
                ((r = o),
                (i = t),
                ((a = l - c) == (s = l - d) ? [a] : [a, s]).filter((e) =>
                    (function (e, t, n) {
                        let r = y(n, t);
                        return e.year === r.year && e.month === r.month && e.day === r.day && e.hour === r.hour && e.minute === r.minute && e.second === r.second;
                    })(r, i, e)
                ));
            if (1 === E.length) return E[0];
            if (E.length > 1)
                switch (n) {
                    case 'compatible':
                    case 'earlier':
                        return E[0];
                    case 'later':
                        return E[E.length - 1];
                    case 'reject':
                        throw RangeError('Multiple possible absolute times found');
                }
            switch (n) {
                case 'earlier':
                    return Math.min(l - c, l - d);
                case 'compatible':
                case 'later':
                    return Math.max(l - c, l - d);
                case 'reject':
                    throw RangeError('No such absolute time found');
            }
        })(e, t, n)
    );
}
function L(e, t) {
    let n = 0,
        r = 0,
        i = 0,
        a = 0;
    if ('timeZone' in e) ({ hour: n, minute: r, second: i, millisecond: a } = e);
    else if ('hour' in e && !t) return e;
    return t && ({ hour: n, minute: r, second: i, millisecond: a } = t), new K(e.calendar, e.era, e.year, e.month, e.day, n, r, i, a);
}
function b(e, t) {
    if (e.calendar.identifier === t.identifier) return e;
    let n = t.fromJulianDay(e.calendar.toJulianDay(e)),
        r = e.copy();
    return (r.calendar = t), (r.era = n.era), (r.year = n.year), (r.month = n.month), (r.day = n.day), x(r), r;
}
function M(e, t) {
    let n = e.copy(),
        r =
            'hour' in n
                ? (function (e, t) {
                      var n;
                      let r;
                      (e.hour += t.hours || 0), (e.minute += t.minutes || 0), (e.second += t.seconds || 0), (e.millisecond += t.milliseconds || 0);
                      return (n = e), (n.second += Math.floor(n.millisecond / 1000)), (n.millisecond = B(n.millisecond, 1000)), (n.minute += Math.floor(n.second / 60)), (n.second = B(n.second, 60)), (n.hour += Math.floor(n.minute / 60)), (n.minute = B(n.minute, 60)), (r = Math.floor(n.hour / 24)), (n.hour = B(n.hour, 24)), r;
                  })(n, t)
                : 0;
    P(n, t.years || 0),
        n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e),
        (n.month += t.months || 0),
        U(n),
        w(n),
        (n.day += 7 * (t.weeks || 0)),
        (n.day += t.days || 0),
        (n.day += r),
        (function (e) {
            for (; e.day < 1; ) e.month--, U(e), (e.day += e.calendar.getDaysInMonth(e));
            for (; e.day > e.calendar.getDaysInMonth(e); ) (e.day -= e.calendar.getDaysInMonth(e)), e.month++, U(e);
        })(n),
        n.calendar.balanceDate && n.calendar.balanceDate(n),
        n.year < 1 && ((n.year = 1), (n.month = 1), (n.day = 1));
    let i = n.calendar.getYearsInEra(n);
    if (n.year > i) {
        var a, s;
        let e = null === (s = (a = n.calendar).isInverseEra) || void 0 === s ? void 0 : s.call(a, n);
        (n.year = i), (n.month = e ? 1 : n.calendar.getMonthsInYear(n)), (n.day = e ? 1 : n.calendar.getDaysInMonth(n));
    }
    n.month < 1 && ((n.month = 1), (n.day = 1));
    let o = n.calendar.getMonthsInYear(n);
    return n.month > o && ((n.month = o), (n.day = n.calendar.getDaysInMonth(n))), (n.day = Math.max(1, Math.min(n.calendar.getDaysInMonth(n), n.day))), n;
}
function P(e, t) {
    var n, r;
    (null === (r = (n = e.calendar).isInverseEra) || void 0 === r ? void 0 : r.call(n, e)) && (t = -t), (e.year += t);
}
function U(e) {
    for (; e.month < 1; ) P(e, -1), (e.month += e.calendar.getMonthsInYear(e));
    let t = 0;
    for (; e.month > (t = e.calendar.getMonthsInYear(e)); ) (e.month -= t), P(e, 1);
}
function w(e) {
    (e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month))), (e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day)));
}
function x(e) {
    e.calendar.constrainDate && e.calendar.constrainDate(e), (e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year))), w(e);
}
function G(e, t) {
    return M(
        e,
        (function (e) {
            let t = {};
            for (let n in e) 'number' == typeof e[n] && (t[n] = -e[n]);
            return t;
        })(t)
    );
}
function k(e, t) {
    let n = e.copy();
    return null != t.era && (n.era = t.era), null != t.year && (n.year = t.year), null != t.month && (n.month = t.month), null != t.day && (n.day = t.day), x(n), n;
}
function B(e, t) {
    let n = e % t;
    return n < 0 && (n += t), n;
}
function F(e, t, n, r) {
    let i = e.copy();
    switch (t) {
        case 'era': {
            let t = e.calendar.getEras(),
                a = t.indexOf(e.era);
            if (a < 0) throw Error('Invalid era: ' + e.era);
            (a = V(a, n, 0, t.length - 1, null == r ? void 0 : r.round)), (i.era = t[a]), x(i);
            break;
        }
        case 'year':
            var a, s;
            (null === (s = (a = i.calendar).isInverseEra) || void 0 === s ? void 0 : s.call(a, i)) && (n = -n), (i.year = V(e.year, n, -1 / 0, 9999, null == r ? void 0 : r.round)), i.year === -1 / 0 && (i.year = 1), i.calendar.balanceYearMonth && i.calendar.balanceYearMonth(i, e);
            break;
        case 'month':
            i.month = V(e.month, n, 1, e.calendar.getMonthsInYear(e), null == r ? void 0 : r.round);
            break;
        case 'day':
            i.day = V(e.day, n, 1, e.calendar.getDaysInMonth(e), null == r ? void 0 : r.round);
            break;
        default:
            throw Error('Unsupported field ' + t);
    }
    return e.calendar.balanceDate && e.calendar.balanceDate(i), x(i), i;
}
function V(e, t, n, r, i = !1) {
    if (i) {
        (e += Math.sign(t)) < n && (e = r);
        let i = Math.abs(t);
        (e = t > 0 ? Math.ceil(e / i) * i : Math.floor(e / i) * i) > r && (e = n);
    } else (e += t) < n ? (e = r - (n - e - 1)) : e > r && (e = n + (e - r - 1));
    return e;
}
function H(e) {
    let t = b(e, new _());
    return `${String(t.year).padStart(4, '0')}-${String(t.month).padStart(2, '0')}-${String(t.day).padStart(2, '0')}`;
}
function Z(e) {
    let t,
        n = 'object' == typeof e[0] ? e.shift() : new _();
    if ('string' == typeof e[0]) t = e.shift();
    else {
        let e = n.getEras();
        t = e[e.length - 1];
    }
    return [n, t, e.shift(), e.shift(), e.shift()];
}
var Y = new WeakMap();
class j {
    copy() {
        return this.era ? new j(this.calendar, this.era, this.year, this.month, this.day) : new j(this.calendar, this.year, this.month, this.day);
    }
    add(e) {
        return M(this, e);
    }
    subtract(e) {
        return G(this, e);
    }
    set(e) {
        return k(this, e);
    }
    cycle(e, t, n) {
        return F(this, e, t, n);
    }
    toDate(e) {
        return D(this, e);
    }
    toString() {
        return H(this);
    }
    compare(e) {
        return p(this, e);
    }
    constructor(...e) {
        (0, a._)(this, Y, {
            writable: !0,
            value: void 0
        });
        let [t, n, r, i, s] = Z(e);
        (this.calendar = t), (this.era = n), (this.year = r), (this.month = i), (this.day = s), x(this);
    }
}
var W = new WeakMap();
class K {
    copy() {
        return this.era ? new K(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new K(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
    }
    add(e) {
        return M(this, e);
    }
    subtract(e) {
        return G(this, e);
    }
    set(e) {
        var t, n;
        let r;
        return k(
            ((t = this),
            (n = e),
            (r = t.copy()),
            null != n.hour && (r.hour = n.hour),
            null != n.minute && (r.minute = n.minute),
            null != n.second && (r.second = n.second),
            null != n.millisecond && (r.millisecond = n.millisecond),
            (function (e) {
                (e.millisecond = Math.max(0, Math.min(e.millisecond, 1000))), (e.second = Math.max(0, Math.min(e.second, 59))), (e.minute = Math.max(0, Math.min(e.minute, 59))), (e.hour = Math.max(0, Math.min(e.hour, 23)));
            })(r),
            r),
            e
        );
    }
    cycle(e, t, n) {
        switch (e) {
            case 'era':
            case 'year':
            case 'month':
            case 'day':
                return F(this, e, t, n);
            default:
                return (function (e, t, n, r) {
                    let i = e.copy();
                    switch (t) {
                        case 'hour': {
                            let t = e.hour,
                                a = 0,
                                s = 23;
                            if ((null == r ? void 0 : r.hourCycle) === 12) {
                                let e = t >= 12;
                                (a = e ? 12 : 0), (s = e ? 23 : 11);
                            }
                            i.hour = V(t, n, a, s, null == r ? void 0 : r.round);
                            break;
                        }
                        case 'minute':
                            i.minute = V(e.minute, n, 0, 59, null == r ? void 0 : r.round);
                            break;
                        case 'second':
                            i.second = V(e.second, n, 0, 59, null == r ? void 0 : r.round);
                            break;
                        case 'millisecond':
                            i.millisecond = V(e.millisecond, n, 0, 999, null == r ? void 0 : r.round);
                            break;
                        default:
                            throw Error('Unsupported field ' + t);
                    }
                    return i;
                })(this, e, t, n);
        }
    }
    toDate(e, t) {
        return D(this, e, t);
    }
    toString() {
        var e, t;
        return (e = this), `${H(e)}T${((t = e), `${String(t.hour).padStart(2, '0')}:${String(t.minute).padStart(2, '0')}:${String(t.second).padStart(2, '0')}${t.millisecond ? String(t.millisecond / 1000).slice(1) : ''}`)}`;
    }
    compare(e) {
        let t = p(this, e);
        if (0 === t) {
            var n, r;
            return (n = this), (r = L(e)), m(n) - m(r);
        }
        return t;
    }
    constructor(...e) {
        (0, a._)(this, W, {
            writable: !0,
            value: void 0
        });
        let [t, n, r, i, s] = Z(e);
        (this.calendar = t), (this.era = n), (this.year = r), (this.month = i), (this.day = s), (this.hour = e.shift() || 0), (this.minute = e.shift() || 0), (this.second = e.shift() || 0), (this.millisecond = e.shift() || 0), x(this);
    }
}
let z = [
        [1868, 9, 8],
        [1912, 7, 30],
        [1926, 12, 25],
        [1989, 1, 8],
        [2019, 5, 1]
    ],
    q = [
        [1912, 7, 29],
        [1926, 12, 24],
        [1989, 1, 7],
        [2019, 4, 30]
    ],
    Q = [1867, 1911, 1925, 1988, 2018],
    X = ['meiji', 'taisho', 'showa', 'heisei', 'reiwa'];
function $(e) {
    let t = z.findIndex(([t, n, r]) => !!(e.year < t) || (e.year === t && !!(e.month < n)) || (e.year === t && e.month === n && !!(e.day < r)) || !1);
    return -1 === t ? z.length - 1 : 0 === t ? 0 : t - 1;
}
function J(e) {
    let t = Q[X.indexOf(e.era)];
    if (!t) throw Error('Unknown era: ' + e.era);
    return new j(e.year + t, e.month, e.day);
}
class ee extends _ {
    fromJulianDay(e) {
        let t = super.fromJulianDay(e),
            n = $(t);
        return new j(this, X[n], t.year - Q[n], t.month, t.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(J(e));
    }
    balanceDate(e) {
        let t = J(e),
            n = $(t);
        X[n] !== e.era && ((e.era = X[n]), (e.year = t.year - Q[n])), this.constrainDate(e);
    }
    constrainDate(e) {
        let t = X.indexOf(e.era),
            n = q[t];
        if (null != n) {
            let [r, i, a] = n,
                s = r - Q[t];
            (e.year = Math.max(1, Math.min(s, e.year))), e.year === s && ((e.month = Math.min(i, e.month)), e.month === i && (e.day = Math.min(a, e.day)));
        }
        if (1 === e.year && t >= 0) {
            let [, n, r] = z[t];
            (e.month = Math.max(n, e.month)), e.month === n && (e.day = Math.max(r, e.day));
        }
    }
    getEras() {
        return X;
    }
    getYearsInEra(e) {
        let t = X.indexOf(e.era),
            n = z[t],
            r = z[t + 1];
        if (null == r) return 9999 - n[0] + 1;
        let i = r[0] - n[0];
        return (e.month < r[1] || (e.month === r[1] && e.day < r[2])) && i++, i;
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(J(e));
    }
    getMinimumMonthInYear(e) {
        let t = et(e);
        return t ? t[1] : 1;
    }
    getMinimumDayInMonth(e) {
        let t = et(e);
        return t && e.month === t[1] ? t[2] : 1;
    }
    constructor(...e) {
        super(...e), (this.identifier = 'japanese');
    }
}
function et(e) {
    if (1 === e.year) return z[X.indexOf(e.era)];
}
class en extends _ {
    fromJulianDay(e) {
        let t = super.fromJulianDay(e);
        return new j(this, u(t.era, t.year) - -543, t.month, t.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(er(e));
    }
    getEras() {
        return ['BE'];
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(er(e));
    }
    balanceDate() {}
    constructor(...e) {
        super(...e), (this.identifier = 'buddhist');
    }
}
function er(e) {
    let [t, n] = c(e.year + -543);
    return new j(t, n, e.month, e.day);
}
function ei(e) {
    return 'minguo' === e.era ? e.year + 1911 : 1 - e.year + 1911;
}
function ea(e) {
    let t = e - 1911;
    return t > 0 ? ['minguo', t] : ['before_minguo', 1 - t];
}
class es extends _ {
    fromJulianDay(e) {
        let t = super.fromJulianDay(e),
            [n, r] = ea(u(t.era, t.year));
        return new j(this, n, r, t.month, t.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(eo(e));
    }
    getEras() {
        return ['before_minguo', 'minguo'];
    }
    balanceDate(e) {
        let [t, n] = ea(ei(e));
        (e.era = t), (e.year = n);
    }
    isInverseEra(e) {
        return 'before_minguo' === e.era;
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(eo(e));
    }
    getYearsInEra(e) {
        return 'before_minguo' === e.era ? 9999 : 8088;
    }
    constructor(...e) {
        super(...e), (this.identifier = 'roc');
    }
}
function eo(e) {
    let [t, n] = c(ei(e));
    return new j(t, n, e.month, e.day);
}
function el(e, t, n) {
    let r = e > 0 ? e - 474 : e - 473,
        i = s(r, 2820) + 474;
    return 1948320 + 1029983 * Math.floor(r / 2820) + 365 * (i - 1) + Math.floor((31 * i - 5) / 128) + (t <= 7 ? 31 * (t - 1) : 30 * (t - 1) + 6) + n;
}
class eu {
    fromJulianDay(e) {
        let t = e - el(475, 1, 1),
            n = Math.floor(t / 1029983),
            r = s(t, 1029983),
            i = 474 + 2820 * n + (1029982 === r ? 2820 : Math.floor((128 * r + 46878) / 46751));
        i <= 0 && i--;
        let a = e - el(i, 1, 1) + 1,
            o = a <= 186 ? Math.ceil(a / 31) : Math.ceil((a - 6) / 31),
            l = e - el(i, o, 1) + 1;
        return new j(this, i, o, l);
    }
    toJulianDay(e) {
        return el(e.year, e.month, e.day);
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInMonth(e) {
        var t;
        let n;
        if (e.month <= 6) return 31;
        if (e.month <= 11) return 30;
        return ((n = s((t = e.year) > 0 ? t - 474 : t - 473, 2820) + 474), 31 > s((n + 38) * 31, 128)) ? 30 : 29;
    }
    getEras() {
        return ['AP'];
    }
    getYearsInEra() {
        return 9377;
    }
    constructor() {
        this.identifier = 'persian';
    }
}
class ec extends _ {
    fromJulianDay(e) {
        let t,
            n,
            r,
            i = super.fromJulianDay(e),
            a = i.year - 78,
            s = e - o(i.era, i.year, 1, 1);
        if ((s < 80 ? (a--, (s += (t = l(i.year - 1) ? 31 : 30) + 155 + 90 + 10)) : ((t = l(i.year) ? 31 : 30), (s -= 80)), s < t)) (n = 1), (r = s + 1);
        else {
            let e = s - t;
            e < 155 ? ((n = Math.floor(e / 31) + 2), (r = (e % 31) + 1)) : ((e -= 155), (n = Math.floor(e / 30) + 7), (r = (e % 30) + 1));
        }
        return new j(this, a, n, r);
    }
    toJulianDay(e) {
        let t, n;
        let [r, i] = c(e.year + 78);
        return (l(i) ? ((t = 31), (n = o(r, i, 3, 21))) : ((t = 30), (n = o(r, i, 3, 22))), 1 === e.month) ? n + e.day - 1 : ((n += t + 31 * Math.min(e.month - 2, 5)), e.month >= 8 && (n += (e.month - 7) * 30), (n += e.day - 1));
    }
    getDaysInMonth(e) {
        return (1 === e.month && l(e.year + 78)) || (e.month >= 2 && e.month <= 6) ? 31 : 30;
    }
    getYearsInEra() {
        return 9919;
    }
    getEras() {
        return ['saka'];
    }
    balanceDate() {}
    constructor(...e) {
        super(...e), (this.identifier = 'indian');
    }
}
function ed(e, t, n, r) {
    return r + Math.ceil(29.5 * (n - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1;
}
function e_(e, t, n) {
    let r = Math.floor((30 * (n - t) + 10646) / 10631),
        i = Math.min(12, Math.ceil((n - (29 + ed(t, r, 1, 1))) / 29.5) + 1),
        a = n - ed(t, r, i, 1) + 1;
    return new j(e, r, i, a);
}
function eE(e) {
    return (14 + 11 * e) % 30 < 11;
}
class ef {
    fromJulianDay(e) {
        return e_(this, 1948440, e);
    }
    toJulianDay(e) {
        return ed(1948440, e.year, e.month, e.day);
    }
    getDaysInMonth(e) {
        let t = 29 + (e.month % 2);
        return 12 === e.month && eE(e.year) && t++, t;
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInYear(e) {
        return eE(e.year) ? 355 : 354;
    }
    getYearsInEra() {
        return 9665;
    }
    getEras() {
        return ['AH'];
    }
    constructor() {
        this.identifier = 'islamic-civil';
    }
}
class eh extends ef {
    fromJulianDay(e) {
        return e_(this, 1948439, e);
    }
    toJulianDay(e) {
        return ed(1948439, e.year, e.month, e.day);
    }
    constructor(...e) {
        super(...e), (this.identifier = 'islamic-tbla');
    }
}
function ep(e) {
    return 460322 + i[e - 1300];
}
function em(e, t) {
    return (r[e - 1300] & (1 << (11 - (t - 1)))) == 0 ? 29 : 30;
}
function eI(e, t) {
    let n = ep(e);
    for (let r = 1; r < t; r++) n += em(e, r);
    return n;
}
function eT(e) {
    return i[e + 1 - 1300] - i[e - 1300];
}
class eg extends ef {
    fromJulianDay(e) {
        let t = e - 1948440,
            n = ep(1300),
            r = ep(1600);
        if (t < n || t > r) return super.fromJulianDay(e);
        {
            let e = 1299,
                n = 1,
                r = 1;
            for (; r > 0; ) {
                r = t - ep(++e) + 1;
                let i = eT(e);
                if (r === i) {
                    n = 12;
                    break;
                }
                if (r < i) {
                    let t = em(e, n);
                    for (n = 1; r > t; ) (r -= t), (t = em(e, ++n));
                    break;
                }
            }
            return new j(this, e, n, t - eI(e, n) + 1);
        }
    }
    toJulianDay(e) {
        return e.year < 1300 || e.year > 1600 ? super.toJulianDay(e) : 1948440 + eI(e.year, e.month) + (e.day - 1);
    }
    getDaysInMonth(e) {
        return e.year < 1300 || e.year > 1600 ? super.getDaysInMonth(e) : em(e.year, e.month);
    }
    getDaysInYear(e) {
        return e.year < 1300 || e.year > 1600 ? super.getDaysInYear(e) : eT(e.year);
    }
    constructor() {
        if ((super(), (this.identifier = 'islamic-umalqura'), !r && (r = new Uint16Array(Uint8Array.from(atob('qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI='), (e) => e.charCodeAt(0)).buffer)), !i)) {
            i = new Uint32Array(301);
            let e = 0;
            for (let t = 1300; t <= 1600; t++) {
                i[t - 1300] = e;
                for (let n = 1; n <= 12; n++) e += em(t, n);
            }
        }
    }
}
let eS = 25920,
    eA = 29 * eS + 13753;
function eN(e) {
    return 7 > s(7 * e + 1, 19);
}
function ev(e) {
    let t = Math.floor((235 * e - 234) / 19),
        n = 29 * t + Math.floor((12084 + 13753 * t) / 25920);
    return 3 > s(3 * (n + 1), 7) && (n += 1), n;
}
function eO(e) {
    var t;
    let n, r;
    return ev(e) + ((n = ev((t = e) - 1)), (r = ev(t)), ev(t + 1) - r == 356 ? 2 : r - n == 382 ? 1 : 0);
}
function eR(e) {
    return eO(e + 1) - eO(e);
}
function eC(e, t) {
    if ((t >= 6 && !eN(e) && t++, 4 === t || 7 === t || 9 === t || 11 === t || 13 === t)) return 29;
    let n = (function (e) {
        let t = eR(e);
        switch ((t > 380 && (t -= 30), t)) {
            case 353:
                return 0;
            case 354:
                return 1;
            case 355:
                return 2;
        }
    })(e);
    return 2 === t ? (2 === n ? 30 : 29) : 3 === t ? (0 === n ? 29 : 30) : 6 === t ? (eN(e) ? 30 : 0) : 30;
}
class ey {
    fromJulianDay(e) {
        let t = e - 347997,
            n = Math.floor((((t * eS) / eA) * 19 + 234) / 235) + 1,
            r = eO(n),
            i = Math.floor(t - r);
        for (; i < 1; ) i = Math.floor(t - (r = eO(--n)));
        let a = 1,
            s = 0;
        for (; s < i; ) (s += eC(n, a)), a++;
        let o = i - (s -= eC(n, --a));
        return new j(this, n, a, o);
    }
    toJulianDay(e) {
        let t = eO(e.year);
        for (let n = 1; n < e.month; n++) t += eC(e.year, n);
        return t + e.day + 347997;
    }
    getDaysInMonth(e) {
        return eC(e.year, e.month);
    }
    getMonthsInYear(e) {
        return eN(e.year) ? 13 : 12;
    }
    getDaysInYear(e) {
        return eR(e.year);
    }
    getYearsInEra() {
        return 9999;
    }
    getEras() {
        return ['AM'];
    }
    balanceYearMonth(e, t) {
        t.year !== e.year && (eN(t.year) && !eN(e.year) && t.month > 6 ? e.month-- : !eN(t.year) && eN(e.year) && t.month > 6 && e.month++);
    }
    constructor() {
        this.identifier = 'hebrew';
    }
}
function eD(e, t, n, r) {
    return e + 365 * t + Math.floor(t / 4) + 30 * (n - 1) + r - 1;
}
function eL(e, t) {
    let n = Math.floor((4 * (t - e)) / 1461),
        r = 1 + Math.floor((t - eD(e, n, 1, 1)) / 30),
        i = t + 1 - eD(e, n, r, 1);
    return [n, r, i];
}
function eb(e) {
    return Math.floor((e % 4) / 3);
}
function eM(e, t) {
    return t % 13 != 0 ? 30 : eb(e) + 5;
}
class eP {
    fromJulianDay(e) {
        let [t, n, r] = eL(1723856, e),
            i = 'AM';
        return t <= 0 && ((i = 'AA'), (t += 5500)), new j(this, i, t, n, r);
    }
    toJulianDay(e) {
        let t = e.year;
        return 'AA' === e.era && (t -= 5500), eD(1723856, t, e.month, e.day);
    }
    getDaysInMonth(e) {
        return eM(e.year, e.month);
    }
    getMonthsInYear() {
        return 13;
    }
    getDaysInYear(e) {
        return 365 + eb(e.year);
    }
    getYearsInEra(e) {
        return 'AA' === e.era ? 9999 : 9991;
    }
    getEras() {
        return ['AA', 'AM'];
    }
    constructor() {
        this.identifier = 'ethiopic';
    }
}
class eU extends eP {
    fromJulianDay(e) {
        let [t, n, r] = eL(1723856, e);
        return new j(this, 'AA', (t += 5500), n, r);
    }
    getEras() {
        return ['AA'];
    }
    getYearsInEra() {
        return 9999;
    }
    constructor(...e) {
        super(...e), (this.identifier = 'ethioaa');
    }
}
class ew extends eP {
    fromJulianDay(e) {
        let [t, n, r] = eL(1824665, e),
            i = 'CE';
        return t <= 0 && ((i = 'BCE'), (t = 1 - t)), new j(this, i, t, n, r);
    }
    toJulianDay(e) {
        let t = e.year;
        return 'BCE' === e.era && (t = 1 - t), eD(1824665, t, e.month, e.day);
    }
    getDaysInMonth(e) {
        let t = e.year;
        return 'BCE' === e.era && (t = 1 - t), eM(t, e.month);
    }
    isInverseEra(e) {
        return 'BCE' === e.era;
    }
    balanceDate(e) {
        e.year <= 0 && ((e.era = 'BCE' === e.era ? 'CE' : 'BCE'), (e.year = 1 - e.year));
    }
    getEras() {
        return ['BCE', 'CE'];
    }
    getYearsInEra(e) {
        return 'BCE' === e.era ? 9999 : 9715;
    }
    constructor(...e) {
        super(...e), (this.identifier = 'coptic');
    }
}
function ex(e) {
    switch (e) {
        case 'buddhist':
            return new en();
        case 'ethiopic':
            return new eP();
        case 'ethioaa':
            return new eU();
        case 'coptic':
            return new ew();
        case 'hebrew':
            return new ey();
        case 'indian':
            return new ec();
        case 'islamic-civil':
            return new ef();
        case 'islamic-tbla':
            return new eh();
        case 'islamic-umalqura':
            return new eg();
        case 'japanese':
            return new ee();
        case 'persian':
            return new eu();
        case 'roc':
            return new es();
        default:
            return new _();
    }
}
