"use strict";
n.r(t), n.d(t, {
  calculateActiveTimestampDurations: function() {
    return f
  },
  formatActiveTimestamp: function() {
    return h
  },
  formatEndedTimestamp: function() {
    return m
  },
  formatEntryTimestamp: function() {
    return p
  },
  getAggregateRange: function() {
    return T
  },
  getEntryDuration: function() {
    return _
  },
  getFullMarathonDescription: function() {
    return L
  },
  getFullResurrectedBadgeText: function() {
    return N
  },
  getMarathonDurationStr: function() {
    return R
  },
  getMarathonName: function() {
    return y
  },
  getResurrectedEntryLastPlayTime: function() {
    return A
  },
  getStreakCount: function() {
    return x
  },
  getTrait: function() {
    return E
  },
  getTrendingType: function() {
    return O
  },
  isEntryActive: function() {
    return C
  },
  isEntryExpired: function() {
    return S
  },
  isEntryMarathon: function() {
    return I
  },
  isEntryNew: function() {
    return g
  },
  isEntryTopGame: function() {
    return v
  },
  isValidStreak: function() {
    return M
  }
});
var a = n("283398"),
  l = n("913527"),
  s = n.n(l),
  i = n("884439"),
  r = n("876215"),
  o = n("70956"),
  u = n("709054"),
  d = n("689938");
let c = e => {
    let {
      start: t,
      now: n
    } = e, a = Math.abs((n - t) / o.default.Millis.SECOND), l = Math.floor(a) % o.default.Seconds.MINUTE, s = Math.floor(a / o.default.Seconds.MINUTE) % o.default.Seconds.MINUTE, i = Math.floor(a / o.default.Seconds.HOUR);
    return {
      seconds: l,
      minutes: s,
      hours: i,
      days: Math.floor(a / o.default.Seconds.DAY)
    }
  },
  f = (e, t) => {
    let n = "id" in e ? u.default.extractTimestamp(e.id) : e.start;
    return c({
      start: n,
      now: "end" in e && null != e.end ? Math.min(e.end, t) : t
    })
  },
  h = (e, t) => {
    let {
      seconds: n,
      minutes: a,
      hours: l
    } = f(e, t);

    function s(e) {
      return String(e).padStart(2, "0")
    }
    return d.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_ACTIVE.format({
      hours: l,
      minutes: l > 0 ? s(a) : a,
      seconds: s(n)
    })
  },
  m = (e, t) => {
    let n = s()(u.default.extractTimestamp(e.id)),
      a = n.isSame(s()(), "day"),
      l = s()().diff(n, "s");
    if (l < o.default.Seconds.MINUTE) return d.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_SECONDS_AGO.format({
      count: l
    });
    if (l < o.default.Seconds.HOUR) {
      let e = Math.round(l / o.default.Seconds.MINUTE);
      return d.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_MINUTES_AGO.format({
        count: e
      })
    }
    if (l < 6 * o.default.Seconds.HOUR) {
      let e = Math.round(l / o.default.Seconds.HOUR);
      return d.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_AGO.format({
        count: e
      })
    } else if (l < o.default.Seconds.WEEK && a) return n.toDate().toLocaleTimeString(t, {
      hour: "numeric"
    });
    else if (l < o.default.Seconds.WEEK && !a) return n.toDate().toLocaleTimeString(t, {
      weekday: "short",
      hour: "numeric"
    });
    let i = Math.round(l / (7 * o.default.Seconds.DAY));
    return d.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_WEEKS_AGO.format({
      count: i
    })
  },
  p = (e, t) => C(e) ? h(e, Date.now()) : m(e, t);

function E(e, t) {
  return e.traits.find(e => e.type === t)
}

function C(e) {
  var t, n;
  return null !== (n = null === (t = E(e, i.ContentInventoryTraitType.IS_LIVE)) || void 0 === t ? void 0 : t.is_live) && void 0 !== n && n
}

function g(e) {
  var t, n;
  return null !== (n = null === (t = E(e, i.ContentInventoryTraitType.FIRST_TIME)) || void 0 === t ? void 0 : t.first_time) && void 0 !== n && n
}

function S(e) {
  return null != e.expires_at && new Date(e.expires_at) < new Date
}

function _(e) {
  var t;
  return null === (t = E(e, i.ContentInventoryTraitType.DURATION_SECONDS)) || void 0 === t ? void 0 : t.duration_seconds
}

function T(e) {
  var t;
  return null === (t = E(e, i.ContentInventoryTraitType.AGGREGATE_RANGE)) || void 0 === t ? void 0 : t.range
}

function I(e) {
  var t;
  return null === (t = E(e, i.ContentInventoryTraitType.MARATHON)) || void 0 === t ? void 0 : t.marathon
}

function A(e) {
  let t = E(e, i.ContentInventoryTraitType.RESURRECTED);
  return (null == t ? void 0 : t.resurrected_last_played) != null ? new Date(t.resurrected_last_played) : void 0
}

function N(e) {
  let {
    months: t = 0,
    weeks: n = 0,
    days: l = 0
  } = (0, a.intervalToDuration)({
    start: e,
    end: new Date
  });
  return d.default.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED_AFTER.format({
    months: t,
    weeks: t > 0 ? 0 : n,
    days: t > 0 || n > 0 ? 0 : l
  })
}

function v(e) {
  return e.content_type === r.ContentInventoryEntryType.TOP_GAME
}

function x(e) {
  var t;
  return null === (t = E(e, i.ContentInventoryTraitType.STREAK_DAYS)) || void 0 === t ? void 0 : t.streak_count_days
}

function M(e) {
  let t = x(e);
  if (null == t || t < 3) return !1;
  let n = u.default.extractTimestamp(e.id);
  return !(Date.now() - n > 48 * o.default.Millis.HOUR) && !0
}

function R(e) {
  let t = _(e);
  if (null == t) return null;
  let n = Math.round(t / o.default.Seconds.HOUR);
  return d.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_FOR_HOURS.format({
    hours: n
  })
}

function y(e) {
  var t;
  let n = null !== (t = _(e)) && void 0 !== t ? t : 0;
  return n > 10 * o.default.Seconds.HOUR ? d.default.Messages.MEMBER_LIST_CONTENT_FEED_EPIC_MARATHON : n > 5 * o.default.Seconds.HOUR ? d.default.Messages.MEMBER_LIST_CONTENT_FEED_ULTRA_MARATHON : d.default.Messages.MEMBER_LIST_CONTENT_FEED_MARATHON
}

function L(e) {
  let t = R(e),
    n = y(e);
  return null == t ? n : "".concat(n, " — ").concat(t)
}

function O(e) {
  var t;
  return null === (t = E(e, i.ContentInventoryTraitType.TRENDING_CONTENT)) || void 0 === t ? void 0 : t.trending
}