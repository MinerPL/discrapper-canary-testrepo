"use strict";
n.r(t), n.d(t, {
  formatTimesForServer: function() {
    return c
  },
  getDayOptions: function() {
    return o
  }
}), n("653041");
var a = n("913527"),
  s = n.n(a),
  l = n("854698"),
  i = n("227120"),
  r = n("689938");
let o = () => [{
    value: i.DayOptions.WEEKDAYS,
    label: r.default.Messages.CLAN_PRIMETIME_WEEKDAYS
  }, {
    value: i.DayOptions.WEEKENDS,
    label: r.default.Messages.CLAN_PRIMETIME_WEEKENDS
  }, {
    value: i.DayOptions.SUNDAY,
    label: r.default.Messages.CLAN_PRIMETIME_SUNDAY
  }, {
    value: i.DayOptions.MONDAY,
    label: r.default.Messages.CLAN_PRIMETIME_MONDAY
  }, {
    value: i.DayOptions.TUESDAY,
    label: r.default.Messages.CLAN_PRIMETIME_TUESDAY
  }, {
    value: i.DayOptions.WEDNESDAY,
    label: r.default.Messages.CLAN_PRIMETIME_WEDNESDAY
  }, {
    value: i.DayOptions.THURSDAY,
    label: r.default.Messages.CLAN_PRIMETIME_THURSDAY
  }, {
    value: i.DayOptions.FRIDAY,
    label: r.default.Messages.CLAN_PRIMETIME_FRIDAY
  }, {
    value: i.DayOptions.SATURDAY,
    label: r.default.Messages.CLAN_PRIMETIME_SATURDAY
  }],
  u = e => {
    switch (e) {
      case i.DayOptions.WEEKDAYS:
        return 1;
      case i.DayOptions.WEEKENDS:
        return 6;
      case i.DayOptions.SUNDAY:
        return 0;
      case i.DayOptions.MONDAY:
        return 1;
      case i.DayOptions.TUESDAY:
        return 2;
      case i.DayOptions.WEDNESDAY:
        return 3;
      case i.DayOptions.THURSDAY:
        return 4;
      case i.DayOptions.FRIDAY:
        return 5;
      case i.DayOptions.SATURDAY:
        return 6
    }
  },
  d = e => {
    if (null == e.day || null == e.time) return null;
    let t = s()(),
      n = t.clone().add(1, "day"),
      a = t.day() >= 1 && 5 >= t.day(),
      l = n.day() >= 1 && 5 >= n.day(),
      r = e.time.clone(),
      o = t.clone();
    return e.day === i.DayOptions.WEEKDAYS ? o = a ? t.isAfter(r) ? l ? r.day(n.weekday()) : r.day(1) : r.day(t.weekday()) : e.time.day(1) : e.day === i.DayOptions.WEEKENDS ? a ? o = r.day(6) : t.isAfter(r) && (o = l ? r.day(6) : r.day(n.weekday())) : o = r.day(u(e.day)), t.isAfter(o) && (o = o.add(1, "week")), o
  };

function c(e) {
  let t = [];
  return e.forEach(e => {
    if (null == e.day || null == e.time) return null;
    if (e.day === i.DayOptions.WEEKENDS) {
      let n = d({
          day: i.DayOptions.SATURDAY,
          time: e.time
        }),
        a = d({
          day: i.DayOptions.SUNDAY,
          time: e.time
        });
      null != n && t.push({
        scheduled_start_time: n.toISOString(),
        scheduled_end_time: n.clone().add(1, "hour").toISOString(),
        days: [(0, l.convertJSDayToRRuleDay)(n.toDate().getUTCDay()).weekday]
      }), null != a && t.push({
        scheduled_start_time: a.toISOString(),
        scheduled_end_time: a.clone().add(1, "hour").toISOString(),
        days: [(0, l.convertJSDayToRRuleDay)(a.toDate().getUTCDay()).weekday]
      })
    } else if (e.day === i.DayOptions.WEEKDAYS) {
      let n = d(e);
      null != n && t.push({
        scheduled_start_time: n.toISOString(),
        scheduled_end_time: n.clone().add(1, "hour").toISOString(),
        days: (0, l.getValidWeekdays)(n)
      })
    } else {
      let n = d(e);
      null != n && t.push({
        scheduled_start_time: n.toISOString(),
        scheduled_end_time: n.clone().add(1, "hour").toISOString(),
        days: [(0, l.convertJSDayToRRuleDay)(n.toDate().getUTCDay()).weekday]
      })
    }
  }), t
}