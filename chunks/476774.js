"use strict";
n.r(t), n.d(t, {
  calculateActiveTimestampDurations: function() {
    return o
  },
  formatEntryTimestamp: function() {
    return c
  },
  isEntryActive: function() {
    return f
  },
  isEntryNew: function() {
    return h
  },
  isEntryExpired: function() {
    return m
  }
});
var a = n("866227"),
  l = n.n(a),
  s = n("417847"),
  i = n("718517"),
  r = n("299039"),
  u = n("782340");
let o = (e, t) => {
    let n = r.default.extractTimestamp(e.id),
      a = Math.abs((t - n) / i.default.Millis.SECOND),
      l = Math.floor(a) % i.default.Seconds.MINUTE,
      s = Math.floor(a / i.default.Seconds.MINUTE) % i.default.Seconds.MINUTE,
      u = Math.floor(a / i.default.Seconds.HOUR),
      o = Math.floor(a / i.default.Seconds.DAY);
    return {
      seconds: l,
      minutes: s,
      hours: u,
      days: o
    }
  },
  d = (e, t) => {
    let {
      seconds: n,
      minutes: a,
      hours: l,
      days: s
    } = o(e, t);
    if (s > 0) return u.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_DAYS.format({
      days: s
    });
    if (l > 0) return u.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_HOURS.format({
      hours: l
    });
    return u.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_ACTIVE.format({
      minutes: a,
      seconds: String(n).padStart(2, "0")
    })
  },
  c = (e, t) => {
    let n = f(e);
    if (n) return d(e, t);
    let a = l(r.default.extractTimestamp(e.id)),
      s = l().diff(a, "s");
    if (s > 7 * i.default.Seconds.DAY) {
      let e = Math.round(s / (7 * i.default.Seconds.DAY));
      return u.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_WEEKS_AGO.format({
        count: e
      })
    }
    if (s > i.default.Seconds.DAY) {
      let e = Math.round(s / i.default.Seconds.DAY);
      return u.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_DAYS_AGO.format({
        count: e
      })
    }
    if (s > i.default.Seconds.HOUR) {
      let e = Math.round(s / i.default.Seconds.HOUR);
      return u.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_AGO.format({
        count: e
      })
    } else {
      if (!(s > i.default.Seconds.MINUTE)) return u.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_SECONDS_AGO.format({
        count: s
      });
      let e = Math.round(s / i.default.Seconds.MINUTE);
      return u.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_MINUTES_AGO.format({
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