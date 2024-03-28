"use strict";
n.r(t);
let l = (0, n("818083").createExperiment)({
  kind: "guild",
  id: "2023-09_guild_events_entrypoint",
  label: "Experiments with showing Events entrypoint in the channel list in friends guilds",
  defaultConfig: {
    canSeeTopLevelEventsEntrypoint: !1
  },
  treatments: [{
    id: 1,
    label: "User can see top level events entrypoint in friend guilds",
    config: {
      canSeeTopLevelEventsEntrypoint: !0
    }
  }]
});
t.default = l