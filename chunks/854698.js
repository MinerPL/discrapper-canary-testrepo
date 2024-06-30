n.d(t, {
    BP: function () {
        return Y;
    },
    DK: function () {
        return k;
    },
    G3: function () {
        return E;
    },
    Ho: function () {
        return x;
    },
    Ib: function () {
        return f;
    },
    P8: function () {
        return v;
    },
    PJ: function () {
        return G;
    },
    Rp: function () {
        return B;
    },
    Uq: function () {
        return U;
    },
    Y4: function () {
        return w;
    },
    hn: function () {
        return h;
    },
    iA: function () {
        return b;
    },
    ib: function () {
        return O;
    },
    lh: function () {
        return j;
    },
    mF: function () {
        return H;
    },
    ub: function () {
        return y;
    },
    v1: function () {
        return P;
    },
    x6: function () {
        return M;
    },
    zi: function () {
        return Z;
    }
}), n(47120), n(653041);
var r = n(392711), i = n(913527), a = n.n(i), o = n(859334), s = n(594174), l = n(70956), u = n(709054), c = n(849464), d = n(765305), _ = n(689938);
let E = 365, f = 366, h = 4, p = [
        o.Ci.MO.weekday,
        o.Ci.TU.weekday,
        o.Ci.WE.weekday,
        o.Ci.TH.weekday,
        o.Ci.FR.weekday
    ], m = [
        o.Ci.SU.weekday,
        o.Ci.MO.weekday,
        o.Ci.TU.weekday,
        o.Ci.WE.weekday,
        o.Ci.TH.weekday
    ], I = [
        o.Ci.TU.weekday,
        o.Ci.WE.weekday,
        o.Ci.TH.weekday,
        o.Ci.FR.weekday,
        o.Ci.SA.weekday
    ], T = [
        o.Ci.SA.weekday,
        o.Ci.SU.weekday
    ], g = [
        o.Ci.FR.weekday,
        o.Ci.SA.weekday
    ], S = [
        o.Ci.SU.weekday,
        o.Ci.MO.weekday
    ], A = [
        o.Ci.SU.weekday,
        o.Ci.MO.weekday,
        o.Ci.TU.weekday,
        o.Ci.WE.weekday,
        o.Ci.TH.weekday,
        o.Ci.FR.weekday,
        o.Ci.SA.weekday
    ], N = new Set([
        0,
        6
    ]);
function v(e) {
    var t;
    let n = e.toDate(), r = Math.ceil(n.getDate() / 7), i = e.format('dddd'), a = [
            {
                value: c.z.NONE,
                label: _.Z.Messages.CREATE_EVENT_RECUR_NONE
            },
            {
                value: c.z.WEEKLY,
                label: _.Z.Messages.CREATE_EVENT_RECUR_WEEKLY.format({ weekday: i })
            },
            {
                value: c.z.BIWEEKLY,
                label: _.Z.Messages.CREATE_EVENT_RECUR_BIWEEKLY.format({ weekday: i })
            },
            {
                value: c.z.MONTHLY,
                label: _.Z.Messages.CREATE_EVENT_RECUR_MONTHLY.format({
                    nth: r,
                    weekday: i
                })
            },
            {
                value: c.z.YEARLY,
                label: _.Z.Messages.CREATE_EVENT_RECUR_YEARLY.format({
                    date: n.toLocaleString(_.Z.getLocale(), {
                        month: 'short',
                        day: '2-digit'
                    })
                })
            }
        ];
    return N.has(n.getDay()) ? (null === (t = s.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && a.push({
        value: c.z.WEEKEND_ONLY,
        label: _.Z.Messages.CREATE_EVENT_RECUR_WEEKENDS
    }) : a.push({
        value: c.z.WEEKDAY_ONLY,
        label: _.Z.Messages.CREATE_EVENT_RECUR_WEEKDAYS
    }), a;
}
let O = () => {
        let e = a()().add(1, 'hour'), t = e.hour();
        return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0);
    }, R = (e, t) => e.format(e.get('years') === t.get('years') ? 'ddd MMM Do \xB7 LT' : 'ddd MMM Do, YYYY \xB7 LT'), C = (e, t) => e.diff(t, 'days') > 1 ? R(e, t) : e.calendar(t);
function y(e, t, n) {
    null == n && (n = a()());
    let r = a()(e), i = null != t && '' !== t ? a()(t) : void 0, o = null != t && r.isSame(i, 'day');
    return {
        startDateTimeString: C(r, n),
        endDateTimeString: null != i ? o ? i.format('LT') : R(i, n) : void 0,
        currentOrPastEvent: r <= n,
        upcomingEvent: r <= a()().add(1, 'hour'),
        withinStartWindow: r <= a()().add(15, 'minute'),
        diffMinutes: r.diff(n, 'minutes')
    };
}
function D(e) {
    return new o.OG(A[e]);
}
function L(e, t) {
    let n;
    return null != e && (n = {
        startDate: a()(e),
        endDate: void 0
    }, null != t && (n.endDate = a()(t))), n;
}
function b(e, t) {
    let n = function (e) {
            return L(e.scheduled_start_time, e.scheduled_end_time);
        }(t), r = a()(u.default.extractTimestamp(e)), i = (null == n ? void 0 : n.endDate) != null ? r.clone().add(n.endDate.diff(n.startDate)) : void 0;
    return {
        startDate: r,
        endDate: i
    };
}
function M(e, t) {
    var n;
    if (null == t)
        return e;
    let r = null !== (n = t.scheduled_end_time) && void 0 !== n ? n : e.endDate;
    return {
        startDate: null != t.scheduled_start_time ? a()(t.scheduled_start_time) : e.startDate,
        endDate: null != r ? a()(r) : void 0
    };
}
function P(e) {
    return L(e.scheduledStartTime, e.scheduledEndTime);
}
function U(e, t) {
    return null == e || null == t ? null == e && null == t : e.isSame(t);
}
function w(e, t) {
    return null == e || null == t ? null == e && null == t : U(e.startDate, t.startDate) && U(e.endDate, t.endDate);
}
function x(e) {
    var t;
    let n = null != e.byWeekday ? [...e.byWeekday] : null, r = null === (t = e.byNWeekday) || void 0 === t ? void 0 : t.map(e => new o.OG(e.day, e.n)), i = new Date(e.start);
    return i.setMilliseconds(0), new o.Ci({
        dtstart: i,
        until: null != e.end ? new Date(e.end) : null,
        freq: e.frequency,
        interval: e.interval,
        byweekday: null != n ? n : r,
        bymonth: null != e.byMonth ? [...e.byMonth] : null,
        bymonthday: null != e.byMonthDay ? [...e.byMonthDay] : null,
        byyearday: null != e.byYearDay ? [...e.byYearDay] : null,
        count: e.count
    });
}
function G(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], i = [], a = n;
    a.setMilliseconds(0);
    let o = new Date();
    o.setFullYear(o.getFullYear() + h);
    for (let n = 0; n < e && a < o; n++) {
        let e = t.after(a, 0 === n && !r);
        if (null == e)
            break;
        a = e, i.push(e);
    }
    return i;
}
function k(e) {
    var t;
    if (null == e)
        return null;
    let n = null == (t = e).recurrence_rule ? null : new Date(t.scheduled_start_time);
    return null != n ? u.default.fromTimestamp(Math.floor(n.getTime() / l.Z.Millis.SECOND) * l.Z.Millis.SECOND) : null;
}
function B(e, t) {
    if (null == t || null == e)
        return !1;
    let n = new Date(e.start), r = new Date(u.default.extractTimestamp(t));
    if (n.getUTCHours() !== r.getUTCHours() || n.getUTCMinutes() !== r.getUTCMinutes() || n.getUTCSeconds() !== r.getUTCSeconds())
        return !1;
    switch (e.frequency) {
    case o.Ci.WEEKLY:
        return n.getUTCDay() === r.getUTCDay();
    case o.Ci.YEARLY:
        return n.getUTCDate() === r.getUTCDate();
    default:
        return !0;
    }
}
function F(e) {
    let t = D(e.toDate().getDay()), n = D(e.toDate().getUTCDay());
    return n.weekday - t.weekday > 0 ? I : n.weekday - t.weekday < 0 ? m : p;
}
function V(e) {
    let t = D(e.toDate().getDay()), n = D(e.toDate().getUTCDay());
    return n.weekday - t.weekday > 0 ? S : n.weekday - t.weekday < 0 ? g : T;
}
function H(e, t) {
    let n = function (e, t) {
        let n = F(t), r = V(t), i = D(t.toDate().getUTCDay()), a = Math.ceil(t.toDate().getUTCDate() / 7), s = t.toDate();
        switch (s.setMilliseconds(0), e) {
        case c.z.NONE:
            return null;
        case c.z.WEEKLY:
            return new o.Ci({
                dtstart: s,
                freq: o.Ci.WEEKLY
            });
        case c.z.BIWEEKLY:
            return new o.Ci({
                dtstart: s,
                freq: o.Ci.WEEKLY,
                interval: 2
            });
        case c.z.MONTHLY:
            return new o.Ci({
                dtstart: s,
                freq: o.Ci.MONTHLY,
                byweekday: [i.nth(a)]
            });
        case c.z.YEARLY:
            return new o.Ci({
                dtstart: s,
                freq: o.Ci.YEARLY
            });
        case c.z.WEEKDAY_ONLY:
            return new o.Ci({
                dtstart: s,
                freq: o.Ci.DAILY,
                byweekday: n
            });
        case c.z.WEEKEND_ONLY:
            return new o.Ci({
                dtstart: s,
                freq: o.Ci.DAILY,
                byweekday: r
            });
        }
    }(e, t);
    if (null == n)
        return null;
    let {
            dtstart: r,
            until: i,
            freq: a,
            interval: s,
            byweekday: l,
            bynweekday: u,
            bymonth: d,
            bymonthday: _,
            byyearday: E,
            count: f
        } = n.options, h = null == u ? void 0 : u.map(e => ({
            n: e[1],
            day: e[0]
        }));
    return {
        start: r.toISOString(),
        end: null == i ? void 0 : i.toISOString(),
        frequency: a,
        interval: s,
        byWeekday: l,
        byNWeekday: h,
        byMonth: d,
        byMonthDay: _,
        byYearDay: E,
        count: f
    };
}
function Z(e, t) {
    if (null == t)
        return c.z.NONE;
    let n = x(t);
    switch (n.options.freq) {
    case o.Ci.WEEKLY:
        if (n.options.interval < 1 || n.options.interval > 2)
            return c.z.NONE;
        return 1 === n.options.interval ? c.z.WEEKLY : c.z.BIWEEKLY;
    case o.Ci.YEARLY:
        return c.z.YEARLY;
    case o.Ci.MONTHLY:
        return c.z.MONTHLY;
    case o.Ci.DAILY:
        if ((0, r.isEqual)(n.options.byweekday, F(e)))
            return c.z.WEEKDAY_ONLY;
        if ((0, r.isEqual)(n.options.byweekday, V(e)))
            return c.z.WEEKEND_ONLY;
        return c.z.NONE;
    default:
        return c.z.NONE;
    }
}
function Y(e, t) {
    return (null == e ? void 0 : e.scheduled_start_time) !== t.scheduledStartTime || e.scheduled_end_time !== t.scheduledEndTime || !(0, r.isEqual)(e.recurrence_rule, t.recurrenceRule);
}
function j(e, t, n) {
    return (null == e ? void 0 : e.is_canceled) ? d.p1.CANCELED : t < n ? d.p1.COMPLETED : null != e ? d.p1.SCHEDULED : null;
}
