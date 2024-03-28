"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
});
var a = l("913527"),
  n = l.n(a),
  s = l("230900"),
  r = l("854698"),
  i = l("765305"),
  d = l("689938");

function u(e, t) {
  return {
    entity: function(e) {
      let {
        entityType: t,
        channelId: l
      } = e, a = (0, s.getLocationFromEventData)(e);
      return null == t ? "An event type must be specified." : (null == a || "" === a.trim()) && null == l ? "Either a location or channel must be specified." : void 0
    }(e),
    schedule: function(e, t) {
      let l = (0, r.getScheduleFromEventData)(e),
        {
          entityType: a
        } = e;
      if (null == l || (null == l ? void 0 : l.startDate) == null) return d.default.Messages.GUILD_EVENT_START_DATE_REQUIRED;
      let {
        startDate: s,
        endDate: u
      } = l;
      return a === i.GuildScheduledEventEntityTypes.EXTERNAL && null == u ? d.default.Messages.GUILD_EVENT_END_DATE_REQUIRED : !t && s.isBefore(n()()) ? d.default.Messages.GUILD_EVENT_PAST_START_DATE : null != u && null != s && u.isBefore(s) ? d.default.Messages.GUILD_EVENT_END_DATE_BEFORE_START_DATE : null != u && u.isBefore(n()()) ? d.default.Messages.GUILD_EVENT_PAST_END_DATE_1 : void 0
    }(e, t),
    topic: function(e) {
      let {
        name: t
      } = e;
      return null == t || "" === t.trim() ? "Topic must be specified." : void 0
    }(e)
  }
}