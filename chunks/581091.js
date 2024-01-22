"use strict";
n.r(t), n.d(t, {
  getAbbreviatedFormatter: function() {
    return d
  },
  getFullFormatter: function() {
    return c
  },
  default: function() {
    return f
  }
});
var i = n("866227"),
  s = n.n(i),
  r = n("782340");
let a = 3600,
  o = 24 * a,
  l = 30 * o,
  u = 12 * l,
  d = () => ({
    minutes: r.default.Messages.DURATION_MINUTES_SHORT,
    hours: r.default.Messages.DURATION_HOURS_SHORT,
    days: r.default.Messages.DURATION_DAYS_SHORT,
    months: r.default.Messages.DURATION_MONTHS_SHORT,
    years: r.default.Messages.DURATION_YEARS_SHORT
  }),
  c = () => ({
    minutes: r.default.Messages.DURATION_MINUTES_AGO,
    hours: r.default.Messages.DURATION_HOURS_AGO,
    days: r.default.Messages.DURATION_DAYS_AGO,
    months: r.default.Messages.DURATION_MONTHS_AGO,
    years: r.default.Messages.DURATION_YEARS_AGO
  });

function f(e) {
  let {
    since: t,
    getFormatter: n
  } = e, i = s().diff(s(t), "s"), r = n(), d = s(t).format("LL");
  return d = i < 60 ? r.minutes.format({
    minutes: 1
  }) : i < a ? r.minutes.format({
    minutes: Math.floor(i / 60)
  }) : i < o ? r.hours.format({
    hours: Math.floor(i / a)
  }) : i < l ? r.days.format({
    days: Math.floor(i / o)
  }) : i < u ? r.months.format({
    months: Math.floor(i / l)
  }) : r.years.format({
    years: Math.floor(i / u)
  })
}