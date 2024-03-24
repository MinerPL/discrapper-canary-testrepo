"use strict";
n.r(t), n.d(t, {
  AutomodMentionRaidLimit: function() {
    return o
  }
});
var r = n("862205");
let o = (0, r.createExperiment)({
  kind: "guild",
  id: "2022-12_mention_raid_limit",
  label: "Automod Mention Raid Limit",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Automod Mention Raid Limit",
    config: {
      enabled: !0
    }
  }]
})