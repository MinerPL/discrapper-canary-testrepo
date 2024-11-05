n.d(t, {
    Hg: function () {
        return v;
    },
    KC: function () {
        return f;
    },
    QX: function () {
        return T;
    },
    TD: function () {
        return S;
    },
    Xf: function () {
        return m;
    },
    Y4: function () {
        return p;
    },
    _w: function () {
        return _;
    },
    vc: function () {
        return h;
    }
});
var r = n(913527),
    i = n.n(r),
    a = n(232551),
    s = n(706454),
    o = n(388032);
let l = 86400000,
    u = Object.create(null);
function c(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = e.getTime();
    return !t && (n -= 60000 * e.getTimezoneOffset()), Math.floor(n / l) * l;
}
function d(e, t) {
    return Math.floor((c(e, !1) - c(t, !1)) / l);
}
function f(e, t) {
    return Math.abs(+e - +t) <= l && e.getDate() === t.getDate();
}
function _(e, t, n) {
    return Math.abs(e.valueOf() - t.valueOf()) < n;
}
function h(e, t) {
    let n = g(e).locale(),
        r = ''.concat(n, ':').concat(t),
        i = u[r];
    return null == i && (i = u[r] = (0, a.Z)(t)), i(E(e));
}
function p(e) {
    let t;
    let n = i().localeData(),
        r = i()(),
        a = d(E(e), r.toDate());
    return a < -1 ? h(e, 'L LT') : ((t = a < 0 ? 'lastDay' : a < 1 ? 'sameDay' : a < 2 ? 'nextDay' : 'sameElse'), h(e, n.calendar(t, g(e), r)));
}
function m(e) {
    let t = i().localeData(),
        n = i()(),
        r = d(E(e), n.toDate());
    if (0 === r) return h(e, t.longDateFormat('LT'));
    if (-1 === r) return h(e, t.calendar('lastDay', g(e), n));
    if (r > -7) return h(e, 'dddd');
    return h(e, t.longDateFormat('l'));
}
function g(e) {
    return i().isMoment(e) ? e : i()(e);
}
function E(e) {
    return i().isMoment(e) ? e.toDate() : e;
}
function v(e) {
    let t;
    let n = i().localeData(),
        r = new Date(),
        a = d(e, r);
    return 'sameElse' == (t = a < -1 ? 'sameElse' : a < 0 ? 'lastDay' : a < 1 ? 'sameDay' : a < 2 ? 'nextDay' : 'sameElse') ? h(e, 'LLL') : h(e, n.calendar(t, i()(e), i()(r)));
}
s.default.addChangeListener(() => {
    u = Object.create(null);
});
let I = [
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
function S(e, t) {
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
        I.forEach((e) => {
            let { key: t, millisecondsInUnit: n } = e;
            (r[t] = Math.floor(i / n)), (i -= r[t] * n);
        }),
        r
    );
}
function T(e, t) {
    return e.days > 0
        ? o.intl.formatToPlainString(t.days, {
              days: e.days,
              hours: e.hours
          })
        : e.hours > 0
          ? o.intl.formatToPlainString(t.hours, {
                hours: e.hours,
                minutes: e.minutes
            })
          : o.intl.formatToPlainString(t.minutes, { minutes: Math.max(1, e.minutes) });
}
