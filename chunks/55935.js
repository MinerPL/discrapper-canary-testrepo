n.d(t, {
    Hg: function () {
        return I;
    },
    KC: function () {
        return d;
    },
    QX: function () {
        return S;
    },
    TD: function () {
        return g;
    },
    Xf: function () {
        return h;
    },
    Y4: function () {
        return f;
    },
    _w: function () {
        return _;
    },
    vc: function () {
        return E;
    }
});
var r = n(913527),
    i = n.n(r),
    a = n(232551),
    s = n(706454);
let o = 86400000,
    l = Object.create(null);
function u(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = e.getTime();
    return !t && (n -= 60000 * e.getTimezoneOffset()), Math.floor(n / o) * o;
}
function c(e, t) {
    return Math.floor((u(e, !1) - u(t, !1)) / o);
}
function d(e, t) {
    return Math.abs(+e - +t) <= o && e.getDate() === t.getDate();
}
function _(e, t, n) {
    return Math.abs(e.valueOf() - t.valueOf()) < n;
}
function E(e, t) {
    let n = p(e).locale(),
        r = ''.concat(n, ':').concat(t),
        i = l[r];
    return null == i && (i = l[r] = (0, a.Z)(t)), i(m(e));
}
function f(e) {
    let t;
    let n = i().localeData(),
        r = i()(),
        a = c(m(e), r.toDate());
    return a < -1 ? E(e, 'L LT') : ((t = a < 0 ? 'lastDay' : a < 1 ? 'sameDay' : a < 2 ? 'nextDay' : 'sameElse'), E(e, n.calendar(t, p(e), r)));
}
function h(e) {
    let t = i().localeData(),
        n = i()(),
        r = c(m(e), n.toDate());
    if (0 === r) return E(e, t.longDateFormat('LT'));
    if (-1 === r) return E(e, t.calendar('lastDay', p(e), n));
    if (r > -7) return E(e, 'dddd');
    return E(e, t.longDateFormat('l'));
}
function p(e) {
    return i().isMoment(e) ? e : i()(e);
}
function m(e) {
    return i().isMoment(e) ? e.toDate() : e;
}
function I(e) {
    let t;
    let n = i().localeData(),
        r = new Date(),
        a = c(e, r);
    return 'sameElse' == (t = a < -1 ? 'sameElse' : a < 0 ? 'lastDay' : a < 1 ? 'sameDay' : a < 2 ? 'nextDay' : 'sameElse') ? E(e, 'LLL') : E(e, n.calendar(t, i()(e), i()(r)));
}
s.default.addChangeListener(() => {
    l = Object.create(null);
});
let T = [
    {
        key: 'days',
        millisecondsInUnit: 86400000
    },
    {
        key: 'hours',
        millisecondsInUnit: 3600000
    },
    {
        key: 'minutes',
        millisecondsInUnit: 60000
    },
    {
        key: 'seconds',
        millisecondsInUnit: 1000
    }
];
function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: n ? 1 : 0
        };
    if (e > t || (n && Number(e) + 1200 > Number(t))) return r;
    let i = Number(t) - Number(e);
    return (
        T.forEach((e) => {
            let { key: t, millisecondsInUnit: n } = e;
            (r[t] = Math.floor(i / n)), (i -= r[t] * n);
        }),
        r
    );
}
function S(e, t) {
    return e.days > 0
        ? t.days.format({
              days: e.days,
              hours: e.hours
          })
        : e.hours > 0
          ? t.hours.format({
                hours: e.hours,
                minutes: e.minutes
            })
          : t.minutes.format({ minutes: Math.max(1, e.minutes) });
}
