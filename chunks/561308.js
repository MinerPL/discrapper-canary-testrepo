n.d(t, {
    GE: function () {
        return L;
    },
    GL: function () {
        return T;
    },
    Jd: function () {
        return M;
    },
    Nq: function () {
        return v;
    },
    Ol: function () {
        return N;
    },
    PJ: function () {
        return g;
    },
    T_: function () {
        return I;
    },
    V5: function () {
        return C;
    },
    ap: function () {
        return D;
    },
    bT: function () {
        return b;
    },
    dw: function () {
        return y;
    },
    ig: function () {
        return x;
    },
    kr: function () {
        return A;
    },
    n2: function () {
        return O;
    },
    q_: function () {
        return U;
    },
    qy: function () {
        return G;
    },
    vU: function () {
        return P;
    },
    yA: function () {
        return R;
    },
    yh: function () {
        return S;
    },
    zo: function () {
        return w;
    }
}),
    n(47120);
var r = n(164369),
    i = n(913527),
    a = n.n(i),
    s = n(884439),
    o = n(442837),
    l = n(876215),
    u = n(317381),
    c = n(835473),
    d = n(70956),
    _ = n(709054),
    E = n(719247),
    f = n(689938);
let h = (e) => {
        let { start: t, now: n } = e,
            r = Math.max(n - t, 0) / d.Z.Millis.SECOND,
            i = Math.floor(r) % d.Z.Seconds.MINUTE,
            a = Math.floor(r / d.Z.Seconds.MINUTE) % d.Z.Seconds.MINUTE,
            s = Math.floor(r / d.Z.Seconds.HOUR);
        return {
            seconds: i,
            minutes: a,
            hours: s,
            days: Math.floor(r / d.Z.Seconds.DAY)
        };
    },
    p = (e, t) => {
        let n = 'id' in e ? _.default.extractTimestamp(e.id) : e.start;
        return h({
            start: n,
            now: 'end' in e && null != e.end ? Math.min(e.end, t) : t
        });
    },
    I = (e, t) => {
        let { seconds: n, minutes: r, hours: i } = p(e, t);
        function a(e) {
            return String(e).padStart(2, '0');
        }
        return f.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_ACTIVE.format({
            hours: i,
            minutes: i > 0 ? a(r) : r,
            seconds: a(n)
        });
    },
    m = {
        secondsAgo: (e) => f.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_SECONDS_AGO.format({ count: e }),
        minutesAgo: (e) => f.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_MINUTES_AGO.format({ count: e }),
        hoursAgo: (e) => f.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_AGO.format({ count: e }),
        daysAgo: (e) => f.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_DAYS_AGO.format({ count: e }),
        weeksAgo: (e) => f.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_WEEKS_AGO.format({ count: e }),
        monthsAgo: (e) => f.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_MONTHS_AGO.format({ count: e })
    },
    T = function (e, t, n) {
        let { formatSet: r = m } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            i = a()(n),
            s = a()(_.default.extractTimestamp(e.id)),
            o = i.diff(s, 's');
        if (o < d.Z.Seconds.MINUTE) return r.secondsAgo(o);
        if (o < d.Z.Seconds.HOUR) {
            let e = Math.round(o / d.Z.Seconds.MINUTE);
            return r.minutesAgo(e);
        }
        if (o < 12 * d.Z.Seconds.HOUR) {
            let e = Math.round(o / d.Z.Seconds.HOUR);
            return r.hoursAgo(e);
        } else if (o < 9 * d.Z.Seconds.DAY) {
            let e = Math.round(o / d.Z.Seconds.DAY);
            return r.daysAgo(e);
        } else if (o < 4 * d.Z.Seconds.WEEK) {
            let e = Math.round(o / (7 * d.Z.Seconds.DAY));
            return r.weeksAgo(e);
        }
        let l = Math.round(o / d.Z.Seconds.DAYS_30);
        return r.monthsAgo(l);
    },
    S = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return A(e) ? I(e, n) : T(e, t, n, r);
    };
function g(e, t) {
    return e.traits.find((e) => e.type === t);
}
function A(e) {
    var t, n;
    return null !== (n = null === (t = g(e, s.N.IS_LIVE)) || void 0 === t ? void 0 : t.is_live) && void 0 !== n && n;
}
function N(e) {
    var t, n;
    return null !== (n = null === (t = g(e, s.N.FIRST_TIME)) || void 0 === t ? void 0 : t.first_time) && void 0 !== n && n;
}
function O(e) {
    return null != e.expires_at && new Date(e.expires_at) < new Date();
}
function R(e) {
    var t;
    return null === (t = g(e, s.N.DURATION_SECONDS)) || void 0 === t ? void 0 : t.duration_seconds;
}
function v(e) {
    var t;
    return null === (t = g(e, s.N.AGGREGATE_RANGE)) || void 0 === t ? void 0 : t.range;
}
function C(e) {
    var t;
    return null === (t = g(e, s.N.MARATHON)) || void 0 === t ? void 0 : t.marathon;
}
function y(e) {
    let t = g(e, s.N.RESURRECTED);
    return (null == t ? void 0 : t.resurrected_last_played) != null ? new Date(t.resurrected_last_played) : void 0;
}
function L(e) {
    let {
        months: t = 0,
        weeks: n = 0,
        days: i = 0
    } = (0, r.Z)({
        start: e,
        end: new Date()
    });
    return f.Z.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED_AFTER.format({
        months: t,
        weeks: t > 0 ? 0 : n,
        days: t > 0 || n > 0 ? 0 : i
    });
}
function D(e) {
    if (null == e || '' === e) return null;
    let t = /\w+ (\d+), \w+ (\d+)/.exec(e);
    return null == t
        ? null
        : f.Z.Messages.MEMBER_LIST_CONTENT_FEED_WATCH_SEASON_EPISODE.format({
              seasonNum: t[1],
              episodeNum: t[2]
          });
}
function b(e, t) {
    var n, r, i, a;
    let s = null !== (i = null == t ? void 0 : null === (n = t.size) || void 0 === n ? void 0 : n[0]) && void 0 !== i ? i : void 0,
        o = null !== (a = null == t ? void 0 : null === (r = t.size) || void 0 === r ? void 0 : r[1]) && void 0 !== a ? a : void 0,
        l =
            null != s && null != o
                ? f.Z.Messages.CONTENT_INVENTORY_GAME_STATE_SIZE.format({
                      count: s,
                      max: o
                  })
                : void 0;
    return null != l && null != e ? ''.concat(e, ' (').concat(l, ')') : null != e ? e : l;
}
function M(e) {
    return e.content_type === l.s.TOP_GAME;
}
function P(e) {
    var t;
    return null === (t = g(e, s.N.STREAK_DAYS)) || void 0 === t ? void 0 : t.streak_count_days;
}
function U(e) {
    let t = P(e);
    if (null == t || t < 3) return !1;
    let n = _.default.extractTimestamp(e.id);
    return !(Date.now() - n > 48 * d.Z.Millis.HOUR) && !0;
}
function w(e) {
    let t = R(e);
    if (null == t)
        return {
            text: null,
            tooltipText: null
        };
    let n = Math.round(t / d.Z.Seconds.HOUR);
    return n <= 0
        ? {
              text: null,
              tooltipText: null
          }
        : {
              text: f.Z.Messages.MEMBER_LIST_CONTENT_FEED_MARATHON_TIME.format({ hours: n }),
              tooltipText: f.Z.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_FOR_HOURS.format({ hours: n })
          };
}
function x(e) {
    var t;
    return null === (t = g(e, s.N.TRENDING_CONTENT)) || void 0 === t ? void 0 : t.trending;
}
function G(e) {
    let t = (0, o.e7)([E.Z], () => E.Z.getMatchingActivity(e)),
        [n, r] = (0, c.Z)([null == t ? void 0 : t.application_id, 'application_id' in e.extra ? e.extra.application_id : void 0]),
        i = (0, o.e7)([u.ZP], () => u.ZP.getEmbeddedActivityForUserId(e.author_id, null == n ? void 0 : n.id));
    return {
        activity: t,
        embeddedActivity: i,
        anyMatchingApplication: null != n ? n : r,
        activityApplication: n,
        fallbackApplication: r
    };
}
