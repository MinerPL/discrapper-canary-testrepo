n.d(t, {
    GE: function () {
        return C;
    },
    GL: function () {
        return m;
    },
    JY: function () {
        return h;
    },
    Jd: function () {
        return L;
    },
    Nq: function () {
        return v;
    },
    Ol: function () {
        return S;
    },
    PJ: function () {
        return T;
    },
    T_: function () {
        return p;
    },
    V5: function () {
        return O;
    },
    ap: function () {
        return y;
    },
    bT: function () {
        return D;
    },
    dw: function () {
        return R;
    },
    ig: function () {
        return U;
    },
    kr: function () {
        return g;
    },
    n2: function () {
        return A;
    },
    q_: function () {
        return M;
    },
    qy: function () {
        return w;
    },
    vU: function () {
        return b;
    },
    yA: function () {
        return N;
    },
    yh: function () {
        return I;
    },
    zo: function () {
        return P;
    }
}),
    n(47120);
var r = n(164369),
    i = n(913527),
    a = n.n(i),
    s = n(884439),
    o = n(442837),
    l = n(876215),
    u = n(835473),
    c = n(70956),
    d = n(709054),
    _ = n(719247),
    E = n(689938);
let f = (e) => {
        let { start: t, now: n } = e,
            r = Math.max(n - t, 0) / c.Z.Millis.SECOND,
            i = Math.floor(r) % c.Z.Seconds.MINUTE,
            a = Math.floor(r / c.Z.Seconds.MINUTE) % c.Z.Seconds.MINUTE,
            s = Math.floor(r / c.Z.Seconds.HOUR);
        return {
            seconds: i,
            minutes: a,
            hours: s,
            days: Math.floor(r / c.Z.Seconds.DAY)
        };
    },
    h = (e, t) => {
        let n = 'id' in e ? d.default.extractTimestamp(e.id) : e.start;
        return f({
            start: n,
            now: 'end' in e && null != e.end ? Math.min(e.end, t) : t
        });
    },
    p = (e, t) => {
        let { seconds: n, minutes: r, hours: i } = h(e, t);
        function a(e) {
            return String(e).padStart(2, '0');
        }
        return E.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_ACTIVE.format({
            hours: i,
            minutes: i > 0 ? a(r) : r,
            seconds: a(n)
        });
    },
    m = (e, t, n) => {
        let r = a()(n),
            i = a()(d.default.extractTimestamp(e.id)),
            s = r.diff(i, 's');
        if (s < c.Z.Seconds.MINUTE) return E.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_SECONDS_AGO.format({ count: s });
        if (s < c.Z.Seconds.HOUR) {
            let e = Math.round(s / c.Z.Seconds.MINUTE);
            return E.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_MINUTES_AGO.format({ count: e });
        }
        if (s < 12 * c.Z.Seconds.HOUR) {
            let e = Math.round(s / c.Z.Seconds.HOUR);
            return E.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_AGO.format({ count: e });
        } else if (s < 9 * c.Z.Seconds.DAY) {
            let e = Math.round(s / c.Z.Seconds.DAY);
            return E.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_DAYS_AGO.format({ count: e });
        } else if (s < 4 * c.Z.Seconds.WEEK) {
            let e = Math.round(s / (7 * c.Z.Seconds.DAY));
            return E.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_WEEKS_AGO.format({ count: e });
        }
        let o = Math.round(s / c.Z.Seconds.DAYS_30);
        return E.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_MONTHS_AGO.format({ count: o });
    },
    I = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        return g(e) ? p(e, n) : m(e, t, n);
    };
function T(e, t) {
    return e.traits.find((e) => e.type === t);
}
function g(e) {
    var t, n;
    return null !== (n = null === (t = T(e, s.N.IS_LIVE)) || void 0 === t ? void 0 : t.is_live) && void 0 !== n && n;
}
function S(e) {
    var t, n;
    return null !== (n = null === (t = T(e, s.N.FIRST_TIME)) || void 0 === t ? void 0 : t.first_time) && void 0 !== n && n;
}
function A(e) {
    return null != e.expires_at && new Date(e.expires_at) < new Date();
}
function N(e) {
    var t;
    return null === (t = T(e, s.N.DURATION_SECONDS)) || void 0 === t ? void 0 : t.duration_seconds;
}
function v(e) {
    var t;
    return null === (t = T(e, s.N.AGGREGATE_RANGE)) || void 0 === t ? void 0 : t.range;
}
function O(e) {
    var t;
    return null === (t = T(e, s.N.MARATHON)) || void 0 === t ? void 0 : t.marathon;
}
function R(e) {
    let t = T(e, s.N.RESURRECTED);
    return (null == t ? void 0 : t.resurrected_last_played) != null ? new Date(t.resurrected_last_played) : void 0;
}
function C(e) {
    let {
        months: t = 0,
        weeks: n = 0,
        days: i = 0
    } = (0, r.Z)({
        start: e,
        end: new Date()
    });
    return E.Z.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED_AFTER.format({
        months: t,
        weeks: t > 0 ? 0 : n,
        days: t > 0 || n > 0 ? 0 : i
    });
}
function y(e) {
    if (null == e || '' === e) return null;
    let t = /\w+ (\d+), \w+ (\d+)/.exec(e);
    return null == t
        ? null
        : E.Z.Messages.MEMBER_LIST_CONTENT_FEED_WATCH_SEASON_EPISODE.format({
              seasonNum: t[1],
              episodeNum: t[2]
          });
}
function D(e, t) {
    var n, r, i, a;
    let s = null !== (i = null == t ? void 0 : null === (n = t.size) || void 0 === n ? void 0 : n[0]) && void 0 !== i ? i : void 0,
        o = null !== (a = null == t ? void 0 : null === (r = t.size) || void 0 === r ? void 0 : r[1]) && void 0 !== a ? a : void 0,
        l =
            null != s && null != o
                ? E.Z.Messages.CONTENT_INVENTORY_GAME_STATE_SIZE.format({
                      count: s,
                      max: o
                  })
                : void 0;
    return null != l && null != e ? ''.concat(e, ' (').concat(l, ')') : null != e ? e : l;
}
function L(e) {
    return e.content_type === l.s.TOP_GAME;
}
function b(e) {
    var t;
    return null === (t = T(e, s.N.STREAK_DAYS)) || void 0 === t ? void 0 : t.streak_count_days;
}
function M(e) {
    let t = b(e);
    if (null == t || t < 3) return !1;
    let n = d.default.extractTimestamp(e.id);
    return !(Date.now() - n > 48 * c.Z.Millis.HOUR) && !0;
}
function P(e) {
    let t = N(e);
    if (null == t)
        return {
            text: null,
            tooltipText: null
        };
    let n = Math.round(t / c.Z.Seconds.HOUR);
    return n <= 0
        ? {
              text: null,
              tooltipText: null
          }
        : {
              text: E.Z.Messages.MEMBER_LIST_CONTENT_FEED_MARATHON_TIME.format({ hours: n }),
              tooltipText: E.Z.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_FOR_HOURS.format({ hours: n })
          };
}
function U(e) {
    var t;
    return null === (t = T(e, s.N.TRENDING_CONTENT)) || void 0 === t ? void 0 : t.trending;
}
function w(e) {
    let t = (0, o.e7)([_.Z], () => _.Z.getMatchingActivity(e)),
        [n, r] = (0, u.Z)([null == t ? void 0 : t.application_id, 'application_id' in e.extra ? e.extra.application_id : void 0]);
    return {
        activity: t,
        anyMatchingApplication: null != n ? n : r,
        activityApplication: n,
        fallbackApplication: r
    };
}
