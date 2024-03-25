"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("424973");
var a = n("446674"),
  s = n("913144"),
  l = n("745049");
let i = {
  hiddenEventsAndStages: []
};
class r extends a.default.PersistedStore {
  initialize(e) {
    null != e && null != e.hiddenEventsAndStages && (i = e)
  }
  isLiveChannelNoticeHidden(e) {
    let {
      eventId: t,
      stageId: n
    } = e;
    return !!(null != n && i.hiddenEventsAndStages.includes("stage-".concat(n))) || null != t && i.hiddenEventsAndStages.includes("event-".concat(t))
  }
  getState() {
    return i
  }
}
r.displayName = "LiveChannelNoticesStore", r.persistKey = "liveChannelNotices_v2";
var o = new r(s.default, {
  LIVE_CHANNEL_NOTICE_HIDE: function(e) {
    let {
      eventId: t,
      stageId: n
    } = e;
    null != t ? i.hiddenEventsAndStages.push("event-".concat(t)) : null != n && i.hiddenEventsAndStages.push("stage-".concat(n))
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e, n = "event-".concat(t.id);
    i.hiddenEventsAndStages.includes(n) && (t.status === l.GuildScheduledEventStatus.CANCELED || t.status === l.GuildScheduledEventStatus.COMPLETED) && (i.hiddenEventsAndStages = i.hiddenEventsAndStages.filter(e => e !== n))
  },
  GUILD_SCHEDULED_EVENT_DELETE: function(e) {
    let {
      guildScheduledEvent: t
    } = e, n = "event-".concat(t.id);
    i.hiddenEventsAndStages.includes(n) && (i.hiddenEventsAndStages = i.hiddenEventsAndStages.filter(e => e !== n))
  },
  STAGE_INSTANCE_DELETE: function(e) {
    let {
      instance: t
    } = e, n = "stage-".concat(t.id);
    i.hiddenEventsAndStages.includes(n) && (i.hiddenEventsAndStages = i.hiddenEventsAndStages.filter(e => e !== n))
  }
})