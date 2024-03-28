"use strict";
n.r(t);
let a = (0, n("818083").createExperiment)({
  kind: "guild",
  id: "2023-09_upcoming_guild_events_notice",
  label: "Shows additional notices in the channel list for upcoming events",
  defaultConfig: {
    canSeeUpcomingEventsNotices: !1
  },
  treatments: [{
    id: 1,
    label: "Guild members can see upcoming events notices",
    config: {
      canSeeUpcomingEventsNotices: !0
    }
  }]
});
t.default = a