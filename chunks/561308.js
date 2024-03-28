"use strict";
n.r(t), n.d(t, {
  calculateActiveTimestampDurations: function() {
    return u
  },
  formatEntryTimestamp: function() {
    return c
  },
  isEntryActive: function() {
    return f
  },
  isEntryExpired: function() {
    return m
  },
  isEntryNew: function() {
    return h
  }
});
var a = n("913527"),
  l = n.n(a),
  s = n("884439"),
  i = n("70956"),
  r = n("709054"),
  o = n("689938");
let u = (e, t) => {
    let n = Math.abs((t - r.default.extractTimestamp(e.id)) / i.default.Millis.SECOND),
      a = Math.floor(n) % i.default.Seconds.MINUTE,
      l = Math.floor(n / i.default.Seconds.MINUTE) % i.default.Seconds.MINUTE,
      s = Math.floor(n / i.default.Seconds.HOUR);
    return {
      seconds: a,
      minutes: l,
      hours: s,
      days: Math.floor(n / i.default.Seconds.DAY)
    }
  },
  d = (e, t) => {
    let {
      seconds: n,
      minutes: a,
      hours: l,
      days: s
    } = u(e, t);
    if (s > 0) return o.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_DAYS.format({
      days: s
    });
    if (l > 0) return o.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_HOURS.format({
      hours: l
    });
    return o.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_ACTIVE.format({
      minutes: a,
      seconds: String(n).padStart(2, "0")
    })
  },
  c = (e, t) => {
    if (f(e)) return d(e, t);
    let n = l()(r.default.extractTimestamp(e.id)),
      a = l()().diff(n, "s");
    if (a > 7 * i.default.Seconds.DAY) {
      let e = Math.round(a / (7 * i.default.Seconds.DAY));
      return o.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_WEEKS_AGO.format({
        count: e
      })
    }
    if (a > i.default.Seconds.DAY) {
      let e = Math.round(a / i.default.Seconds.DAY);
      return o.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_DAYS_AGO.format({
        count: e
      })
    }
    if (a > i.default.Seconds.HOUR) {
      let e = Math.round(a / i.default.Seconds.HOUR);
      return o.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_AGO.format({
        count: e
      })
    } else {
      if (!(a > i.default.Seconds.MINUTE)) return o.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_SECONDS_AGO.format({
        count: a
      });
      let e = Math.round(a / i.default.Seconds.MINUTE);
      return o.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_MINUTES_AGO.format({
        count: e
      })
    }
  };

function f(e) {
  let t = e.traits.find(e => e.type === s.ContentInventoryTraitType.IS_LIVE);
  return null != t && t.is_live
}

function h(e) {
  let t = e.traits.find(e => e.type === s.ContentInventoryTraitType.FIRST_TIME);
  return null != t && t.first_time
}

function m(e) {
  return null != e.expires_at && new Date(e.expires_at) < new Date
}