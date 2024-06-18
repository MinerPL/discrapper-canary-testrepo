"use strict";
n.d(t, {
  ZP: function() {
    return c
  },
  Zk: function() {
    return d
  },
  d0: function() {
    return _
  }
});
var i = n(913527),
  r = n.n(i),
  s = n(689938);
let o = 3600,
  a = 86400,
  l = 2592e3,
  u = 31104e3,
  _ = () => ({
    minutes: s.Z.Messages.DURATION_MINUTES_SHORT,
    hours: s.Z.Messages.DURATION_HOURS_SHORT,
    days: s.Z.Messages.DURATION_DAYS_SHORT,
    months: s.Z.Messages.DURATION_MONTHS_SHORT,
    years: s.Z.Messages.DURATION_YEARS_SHORT
  }),
  d = () => ({
    minutes: s.Z.Messages.DURATION_MINUTES_AGO,
    hours: s.Z.Messages.DURATION_HOURS_AGO,
    days: s.Z.Messages.DURATION_DAYS_AGO,
    months: s.Z.Messages.DURATION_MONTHS_AGO,
    years: s.Z.Messages.DURATION_YEARS_AGO
  });

function c(e) {
  let {
    since: t,
    getFormatter: n
  } = e;
  return function(e) {
    let {
      seconds: t,
      getFormatter: n
    } = e, i = n(), r = "";
    return r = t < 60 ? i.minutes.format({
      minutes: 1
    }) : t < o ? i.minutes.format({
      minutes: Math.floor(t / 60)
    }) : t < a ? i.hours.format({
      hours: Math.floor(t / o)
    }) : t < l ? i.days.format({
      days: Math.floor(t / a)
    }) : t < u ? i.months.format({
      months: Math.floor(t / l)
    }) : i.years.format({
      years: Math.floor(t / u)
    })
  }({
    seconds: r()().diff(r()(t), "s"),
    getFormatter: n
  })
}