"use strict";
n.r(t), n("653041");
var a, s = n("442837"),
  l = n("570140"),
  i = n("765305");

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let o = {
  hiddenEventsAndStages: []
};
class u extends(a = s.default.PersistedStore) {
  initialize(e) {
    null != e && null != e.hiddenEventsAndStages && (o = e)
  }
  isLiveChannelNoticeHidden(e) {
    let {
      eventId: t,
      stageId: n
    } = e;
    return !!(null != n && o.hiddenEventsAndStages.includes("stage-".concat(n))) || null != t && o.hiddenEventsAndStages.includes("event-".concat(t))
  }
  getState() {
    return o
  }
}
r(u, "displayName", "LiveChannelNoticesStore"), r(u, "persistKey", "liveChannelNotices_v2"), t.default = new u(l.default, {
  LIVE_CHANNEL_NOTICE_HIDE: function(e) {
    let {
      eventId: t,
      stageId: n
    } = e;
    null != t ? o.hiddenEventsAndStages.push("event-".concat(t)) : null != n && o.hiddenEventsAndStages.push("stage-".concat(n))
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e, n = "event-".concat(t.id);
    o.hiddenEventsAndStages.includes(n) && (t.status === i.GuildScheduledEventStatus.CANCELED || t.status === i.GuildScheduledEventStatus.COMPLETED) && (o.hiddenEventsAndStages = o.hiddenEventsAndStages.filter(e => e !== n))
  },
  GUILD_SCHEDULED_EVENT_DELETE: function(e) {
    let {
      guildScheduledEvent: t
    } = e, n = "event-".concat(t.id);
    o.hiddenEventsAndStages.includes(n) && (o.hiddenEventsAndStages = o.hiddenEventsAndStages.filter(e => e !== n))
  },
  STAGE_INSTANCE_DELETE: function(e) {
    let {
      instance: t
    } = e, n = "stage-".concat(t.id);
    o.hiddenEventsAndStages.includes(n) && (o.hiddenEventsAndStages = o.hiddenEventsAndStages.filter(e => e !== n))
  }
})