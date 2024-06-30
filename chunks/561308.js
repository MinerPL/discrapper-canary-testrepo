e.d(t, {
    EX: function () {
        return h;
    },
    GE: function () {
        return p;
    },
    GL: function () {
        return N;
    },
    JY: function () {
        return f;
    },
    Jd: function () {
        return P;
    },
    Nq: function () {
        return v;
    },
    Ol: function () {
        return O;
    },
    PJ: function () {
        return I;
    },
    T_: function () {
        return S;
    },
    V5: function () {
        return Z;
    },
    dw: function () {
        return C;
    },
    ig: function () {
        return L;
    },
    kr: function () {
        return A;
    },
    n2: function () {
        return R;
    },
    nB: function () {
        return g;
    },
    q_: function () {
        return m;
    },
    qy: function () {
        return y;
    },
    vU: function () {
        return U;
    },
    yA: function () {
        return D;
    },
    yh: function () {
        return M;
    },
    z5: function () {
        return G;
    }
}), e(47120);
var r = e(164369), i = e(913527), u = e.n(i), o = e(884439), E = e(442837), a = e(876215), l = e(835473), T = e(70956), c = e(709054), _ = e(719247), s = e(689938);
let d = n => {
        let {
                start: t,
                now: e
            } = n, r = Math.abs((e - t) / T.Z.Millis.SECOND), i = Math.floor(r) % T.Z.Seconds.MINUTE, u = Math.floor(r / T.Z.Seconds.MINUTE) % T.Z.Seconds.MINUTE, o = Math.floor(r / T.Z.Seconds.HOUR);
        return {
            seconds: i,
            minutes: u,
            hours: o,
            days: Math.floor(r / T.Z.Seconds.DAY)
        };
    }, f = (n, t) => {
        let e = 'id' in n ? c.default.extractTimestamp(n.id) : n.start;
        return d({
            start: e,
            now: 'end' in n && null != n.end ? Math.min(n.end, t) : t
        });
    }, S = (n, t) => {
        let {
            seconds: e,
            minutes: r,
            hours: i
        } = f(n, t);
        function u(n) {
            return String(n).padStart(2, '0');
        }
        return s.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_ACTIVE.format({
            hours: i,
            minutes: i > 0 ? u(r) : r,
            seconds: u(e)
        });
    }, N = (n, t) => {
        let e = u()(c.default.extractTimestamp(n.id)), r = e.isSame(u()(), 'day'), i = u()().diff(e, 's');
        if (i < T.Z.Seconds.MINUTE)
            return s.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_SECONDS_AGO.format({ count: i });
        if (i < T.Z.Seconds.HOUR) {
            let n = Math.round(i / T.Z.Seconds.MINUTE);
            return s.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_MINUTES_AGO.format({ count: n });
        }
        if (i < 6 * T.Z.Seconds.HOUR) {
            let n = Math.round(i / T.Z.Seconds.HOUR);
            return s.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_AGO.format({ count: n });
        } else if (i < T.Z.Seconds.WEEK && r)
            return e.toDate().toLocaleTimeString(t, { hour: 'numeric' });
        else if (i < T.Z.Seconds.WEEK && !r)
            return e.toDate().toLocaleTimeString(t, {
                weekday: 'short',
                hour: 'numeric'
            });
        let o = Math.round(i / (7 * T.Z.Seconds.DAY));
        return s.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_WEEKS_AGO.format({ count: o });
    }, M = (n, t) => A(n) ? S(n, Date.now()) : N(n, t);
function I(n, t) {
    return n.traits.find(n => n.type === t);
}
function A(n) {
    var t, e;
    return null !== (e = null === (t = I(n, o.N.IS_LIVE)) || void 0 === t ? void 0 : t.is_live) && void 0 !== e && e;
}
function O(n) {
    var t, e;
    return null !== (e = null === (t = I(n, o.N.FIRST_TIME)) || void 0 === t ? void 0 : t.first_time) && void 0 !== e && e;
}
function R(n) {
    return null != n.expires_at && new Date(n.expires_at) < new Date();
}
function D(n) {
    var t;
    return null === (t = I(n, o.N.DURATION_SECONDS)) || void 0 === t ? void 0 : t.duration_seconds;
}
function v(n) {
    var t;
    return null === (t = I(n, o.N.AGGREGATE_RANGE)) || void 0 === t ? void 0 : t.range;
}
function Z(n) {
    var t;
    return null === (t = I(n, o.N.MARATHON)) || void 0 === t ? void 0 : t.marathon;
}
function C(n) {
    let t = I(n, o.N.RESURRECTED);
    return (null == t ? void 0 : t.resurrected_last_played) != null ? new Date(t.resurrected_last_played) : void 0;
}
function p(n) {
    let {
        months: t = 0,
        weeks: e = 0,
        days: i = 0
    } = (0, r.Z)({
        start: n,
        end: new Date()
    });
    return s.Z.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED_AFTER.format({
        months: t,
        weeks: t > 0 ? 0 : e,
        days: t > 0 || e > 0 ? 0 : i
    });
}
function P(n) {
    return n.content_type === a.s.TOP_GAME;
}
function U(n) {
    var t;
    return null === (t = I(n, o.N.STREAK_DAYS)) || void 0 === t ? void 0 : t.streak_count_days;
}
function m(n) {
    let t = U(n);
    if (null == t || t < 3)
        return !1;
    let e = c.default.extractTimestamp(n.id);
    return !(Date.now() - e > 48 * T.Z.Millis.HOUR) && !0;
}
function h(n) {
    let t = D(n);
    if (null == t)
        return null;
    let e = Math.round(t / T.Z.Seconds.HOUR);
    return s.Z.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_FOR_HOURS.format({ hours: e });
}
function G(n) {
    var t;
    let e = null !== (t = D(n)) && void 0 !== t ? t : 0;
    return e > 10 * T.Z.Seconds.HOUR ? s.Z.Messages.MEMBER_LIST_CONTENT_FEED_EPIC_MARATHON : e > 5 * T.Z.Seconds.HOUR ? s.Z.Messages.MEMBER_LIST_CONTENT_FEED_ULTRA_MARATHON : s.Z.Messages.MEMBER_LIST_CONTENT_FEED_MARATHON;
}
function g(n) {
    let t = h(n), e = G(n);
    return null == t ? e : ''.concat(e, ' \u2014 ').concat(t);
}
function L(n) {
    var t;
    return null === (t = I(n, o.N.TRENDING_CONTENT)) || void 0 === t ? void 0 : t.trending;
}
function y(n) {
    let t = (0, E.e7)([_.Z], () => _.Z.getMatchingActivity(n)), [e, r] = (0, l.Z)([
            null == t ? void 0 : t.application_id,
            n.extra.application_id
        ]);
    return {
        activity: t,
        anyMatchingApplication: null != e ? e : r,
        activityApplication: e,
        fallbackApplication: r
    };
}
