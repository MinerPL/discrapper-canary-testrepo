"use strict";
n.r(t), n.d(t, {
  calculateActiveTimestampDurations: function() {
    return c
  },
  formatActiveTimestamp: function() {
    return f
  },
  formatEndedTimestamp: function() {
    return h
  },
  formatEntryTimestamp: function() {
    return m
  },
  getAggregateRange: function() {
    return S
  },
  getEntryDuration: function() {
    return g
  },
  getFullMarathonDescription: function() {
    return M
  },
  getFullResurrectedBadgeText: function() {
    return I
  },
  getMarathonDurationStr: function() {
    return v
  },
  getMarathonName: function() {
    return x
  },
  getResurrectedEntryLastPlayTime: function() {
    return T
  },
  getStreakCount: function() {
    return N
  },
  isEntryActive: function() {
    return p
  },
  isEntryExpired: function() {
    return C
  },
  isEntryMarathon: function() {
    return _
  },
  isEntryNew: function() {
    return E
  },
  isEntryTopGame: function() {
    return A
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
let c = (e, t) => {
    let n = Math.abs((t - u.default.extractTimestamp(e.id)) / o.default.Millis.SECOND),
      a = Math.floor(n) % o.default.Seconds.MINUTE,
      l = Math.floor(n / o.default.Seconds.MINUTE) % o.default.Seconds.MINUTE,
      s = Math.floor(n / o.default.Seconds.HOUR);
    return {
      seconds: a,
      minutes: l,
      hours: s,
      days: Math.floor(n / o.default.Seconds.DAY)
    }
  },
  f = (e, t) => {
    let {
      seconds: n,
      minutes: a,
      hours: l
    } = c(e, t);

    function s(e) {
      return String(e).padStart(2, "0")
    }
    return d.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_ACTIVE.format({
      hours: l,
      minutes: l > 0 ? s(a) : a,
      seconds: s(n)
    })
  },
  h = (e, t) => {
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
  m = (e, t) => p(e) ? f(e, Date.now()) : h(e, t);

function p(e) {
  let t = e.traits.find(e => e.type === i.ContentInventoryTraitType.IS_LIVE);
  return null != t && t.is_live
}

function E(e) {
  let t = e.traits.find(e => e.type === i.ContentInventoryTraitType.FIRST_TIME);
  return null != t && t.first_time
}

function C(e) {
  return null != e.expires_at && new Date(e.expires_at) < new Date
}

function g(e) {
  let t = e.traits.find(e => e.type === i.ContentInventoryTraitType.DURATION_SECONDS);
  return null == t ? void 0 : t.duration_seconds
}

function S(e) {
  let t = e.traits.find(e => e.type === i.ContentInventoryTraitType.AGGREGATE_RANGE);
  return null == t ? void 0 : t.range
}

function _(e) {
  let t = e.traits.find(e => e.type === i.ContentInventoryTraitType.MARATHON);
  return null == t ? void 0 : t.marathon
}

function T(e) {
  let t = e.traits.find(e => e.type === i.ContentInventoryTraitType.RESURRECTED);
  return (null == t ? void 0 : t.resurrected_last_played) != null ? new Date(t.resurrected_last_played) : void 0
}

function I(e) {
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

function A(e) {
  return e.content_type === r.ContentInventoryEntryType.TOP_GAME
}

function N(e) {
  let t = e.traits.find(e => e.type === i.ContentInventoryTraitType.STREAK_DAYS);
  return null == t ? void 0 : t.streak_count_days
}

function v(e) {
  let t = g(e);
  if (null == t) return null;
  let n = Math.round(t / o.default.Seconds.HOUR);
  return d.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_FOR_HOURS.format({
    hours: n
  })
}

function x(e) {
  var t;
  let n = null !== (t = g(e)) && void 0 !== t ? t : 0;
  return n > 10 * o.default.Seconds.HOUR ? d.default.Messages.MEMBER_LIST_CONTENT_FEED_EPIC_MARATHON : n > 5 * o.default.Seconds.HOUR ? d.default.Messages.MEMBER_LIST_CONTENT_FEED_ULTRA_MARATHON : d.default.Messages.MEMBER_LIST_CONTENT_FEED_MARATHON
}

function M(e) {
  let t = v(e),
    n = x(e);
  return null == t ? n : "".concat(n, " — ").concat(t)
}