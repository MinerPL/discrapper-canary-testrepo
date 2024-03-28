"use strict";
E.r(t), E.d(t, {
  displayTypeFromString: function() {
    return N
  },
  formatLinkTimestamp: function() {
    return C
  },
  formatUserActivityTimestamp: function() {
    return l
  },
  getActivityWindowTimestampFormatter: function() {
    return u
  },
  getEmptyActivityFormatter: function() {
    return r
  },
  isGuildAction: function() {
    return d
  },
  isUserAction: function() {
    return o
  }
}), E("47120");
var _ = E("913527"),
  T = E.n(_),
  n = E("292352"),
  I = E("689938");
let s = 3600,
  a = 86400,
  i = 172800,
  A = 604800,
  r = () => ({
    today: I.default.Messages.FAMILY_CENTER_EMPTY_ACTIVITY_TODAY,
    yesterday: I.default.Messages.FAMILY_CENTER_EMPTY_ACTIVITY_YESTERDAY,
    days: I.default.Messages.FAMILY_CENTER_EMPTY_ACTIVITY_DAYS
  }),
  u = e => e ? {
    today: I.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_PARENT_TODAY,
    yesterday: I.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_PARENT_YESTERDAY,
    days: I.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_PARENT_DAYS
  } : {
    today: I.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_TEEN_TODAY,
    yesterday: I.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_TEEN_YESTERDAY,
    days: I.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_TEEN_DAYS
  },
  l = (e, t, E) => {
    let _ = T()().diff(T()(e), "s"),
      n = t(),
      I = T()(e).format("LL");
    return I = _ < a ? n.today : _ < i ? n.yesterday : n.days.format({
      days: Math.min(Math.floor(_ / a), null != E ? E : 999)
    })
  },
  C = (e, t) => {
    let E = T()().diff(T()(e), "s"),
      _ = t(),
      n = T()(e).format("LL");
    return n = E < 60 ? _.seconds : E < s ? _.minutes.format({
      count: Math.floor(E / 60)
    }) : E < a ? _.hours.format({
      count: Math.floor(E / s)
    }) : E < i ? _.yesterday : E < A ? _.days.format({
      count: Math.floor(E / a)
    }) : _.date.format({
      date: n
    })
  },
  o = e => e.display_type === n.TeenActionDisplayType.USER_ADD || e.display_type === n.TeenActionDisplayType.USER_INTERACTION || e.display_type === n.TeenActionDisplayType.USER_CALLED,
  d = e => e.display_type === n.TeenActionDisplayType.GUILD_ADD || e.display_type === n.TeenActionDisplayType.GUILD_INTERACTION,
  N = e => {
    for (let t of Object.values(n.TeenActionDisplayType))
      if (t.toString() === e) return t
  }