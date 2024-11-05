n.d(t, {
    GE: function () {
        return D;
    },
    GL: function () {
        return v;
    },
    Jd: function () {
        return w;
    },
    Jg: function () {
        return A;
    },
    Nq: function () {
        return C;
    },
    Ol: function () {
        return b;
    },
    PJ: function () {
        return S;
    },
    T_: function () {
        return g;
    },
    V5: function () {
        return R;
    },
    ap: function () {
        return L;
    },
    bT: function () {
        return x;
    },
    dw: function () {
        return O;
    },
    ig: function () {
        return U;
    },
    kr: function () {
        return T;
    },
    n2: function () {
        return y;
    },
    q_: function () {
        return P;
    },
    qy: function () {
        return G;
    },
    vU: function () {
        return M;
    },
    yA: function () {
        return N;
    },
    yh: function () {
        return I;
    },
    zo: function () {
        return k;
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
    f = n(709054),
    _ = n(719247),
    h = n(388032);
let p = (e) => {
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
    m = (e, t) => {
        let n = 'id' in e ? f.default.extractTimestamp(e.id) : e.start;
        return p({
            start: n,
            now: 'end' in e && null != e.end ? Math.min(e.end, t) : t
        });
    },
    g = (e, t) => {
        let { seconds: n, minutes: r, hours: i } = m(e, t);
        function a(e) {
            return String(e).padStart(2, '0');
        }
        return h.intl.formatToPlainString(h.t['l5PP//'], {
            hours: i,
            minutes: i > 0 ? a(r) : r,
            seconds: a(n)
        });
    },
    E = {
        secondsAgo: (e) => h.intl.formatToPlainString(h.t.EOrEJi, { count: e }),
        minutesAgo: (e) => h.intl.formatToPlainString(h.t.LRNgHh, { count: e }),
        hoursAgo: (e) => h.intl.formatToPlainString(h.t.raJpz8, { count: e }),
        daysAgo: (e) => h.intl.formatToPlainString(h.t.KkvKho, { count: e }),
        weeksAgo: (e) => h.intl.formatToPlainString(h.t.sDtO6O, { count: e }),
        monthsAgo: (e) => h.intl.formatToPlainString(h.t.ITymoq, { count: e })
    },
    v = function (e, t, n) {
        let { formatSet: r = E } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            i = a()(n),
            s = a()(f.default.extractTimestamp(e.id)),
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
    I = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return T(e) ? g(e, n) : v(e, t, n, r);
    };
function S(e, t) {
    return e.traits.find((e) => e.type === t);
}
function T(e) {
    var t, n;
    return null !== (n = null === (t = S(e, s.N.IS_LIVE)) || void 0 === t ? void 0 : t.is_live) && void 0 !== n && n;
}
function b(e) {
    var t, n;
    return null !== (n = null === (t = S(e, s.N.FIRST_TIME)) || void 0 === t ? void 0 : t.first_time) && void 0 !== n && n;
}
function y(e) {
    return null != e.expires_at && new Date(e.expires_at) < new Date();
}
function A(e) {
    return T(e) && !y(e);
}
function N(e) {
    var t;
    return null === (t = S(e, s.N.DURATION_SECONDS)) || void 0 === t ? void 0 : t.duration_seconds;
}
function C(e) {
    var t;
    return null === (t = S(e, s.N.AGGREGATE_RANGE)) || void 0 === t ? void 0 : t.range;
}
function R(e) {
    var t;
    return null === (t = S(e, s.N.MARATHON)) || void 0 === t ? void 0 : t.marathon;
}
function O(e) {
    let t = S(e, s.N.RESURRECTED);
    return (null == t ? void 0 : t.resurrected_last_played) != null ? new Date(t.resurrected_last_played) : void 0;
}
function D(e) {
    let {
        months: t = 0,
        weeks: n = 0,
        days: i = 0
    } = (0, r.Z)({
        start: e,
        end: new Date()
    });
    return h.intl.formatToPlainString(h.t.NXBtjI, {
        months: t,
        weeks: t > 0 ? 0 : n,
        days: t > 0 || n > 0 ? 0 : i
    });
}
function L(e) {
    if (null == e || '' === e) return null;
    let t = /\w+ (\d+), \w+ (\d+)/.exec(e);
    return null == t
        ? null
        : h.intl.formatToPlainString(h.t['ijVm6+'], {
              seasonNum: t[1],
              episodeNum: t[2]
          });
}
function x(e, t) {
    var n, r, i, a;
    let s = null !== (i = null == t ? void 0 : null === (n = t.size) || void 0 === n ? void 0 : n[0]) && void 0 !== i ? i : void 0,
        o = null !== (a = null == t ? void 0 : null === (r = t.size) || void 0 === r ? void 0 : r[1]) && void 0 !== a ? a : void 0,
        l =
            null != s && null != o
                ? h.intl.formatToPlainString(h.t.wmUSi4, {
                      count: s,
                      max: o
                  })
                : void 0;
    return null != l && null != e ? ''.concat(e, ' (').concat(l, ')') : null != e ? e : l;
}
function w(e) {
    return e.content_type === l.s.TOP_GAME;
}
function M(e) {
    var t;
    return null === (t = S(e, s.N.STREAK_DAYS)) || void 0 === t ? void 0 : t.streak_count_days;
}
function P(e) {
    let t = M(e);
    if (null == t || t < 3) return !1;
    let n = f.default.extractTimestamp(e.id);
    return !(Date.now() - n > 48 * d.Z.Millis.HOUR) && !0;
}
function k(e) {
    let t = N(e);
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
              text: h.intl.formatToPlainString(h.t.vZaMen, { hours: n }),
              tooltipText: h.intl.formatToPlainString(h.t['S5F48/'], { hours: n })
          };
}
function U(e) {
    var t;
    return null === (t = S(e, s.N.TRENDING_CONTENT)) || void 0 === t ? void 0 : t.trending;
}
function G(e) {
    let t = (0, o.e7)([_.Z], () => _.Z.getMatchingActivity(e)),
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
