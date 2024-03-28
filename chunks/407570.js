"use strict";
n.r(t), n.d(t, {
  isInFriendSuggestionSeenStateExperiment: function() {
    return l
  }
}), n("399606");
var a = n("818083");
n("553795"), n("594174"), n("981631"), (0, a.createExperiment)({
  kind: "user",
  id: "2024-03_friend_finder_selected_states",
  label: "Friend Finder State Experiment",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable Friend Finder on select states configurable in exp config",
    config: {
      enabled: !0
    }
  }]
}), (0, a.createExperiment)({
  kind: "user",
  id: "2023-10_friend_finder_launch",
  label: "Friend Finder Launch Experiment",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable Friend Finder",
    config: {
      enabled: !0
    }
  }]
}), (0, a.createExperiment)({
  kind: "user",
  id: "2023-03_friend_finder_employees",
  label: "Friend Finder Employees User Experiment",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable Friend Finder",
    config: {
      enabled: !0
    }
  }]
}), (0, a.createExperiment)({
  kind: "user",
  id: "2023-06_guild_contact_invite_imessage_overlay",
  label: "Friend Finder guild contact invite imessage overlay",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable iMessage Overlay",
    config: {
      enabled: !0
    }
  }]
}), (0, a.createExperiment)({
  kind: "user",
  id: "2023-10_username_lookup_killswitch",
  label: "Friend Finder Username Lookup Killswitch",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable the Username Lookup",
    config: {
      enabled: !0
    }
  }]
}), (0, a.createExperiment)({
  kind: "user",
  id: "2023-11_friend_finder_sync",
  label: "Friend Finder Sync",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable Friend Finder Sync",
    config: {
      enabled: !0
    }
  }]
});
let s = (0, a.createExperiment)({
  kind: "user",
  id: "2023-12_friend_suggestion_seen_state",
  label: "Friend Suggestions Seen State",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable Friend Suggestion Seen State",
    config: {
      enabled: !0
    }
  }]
});

function l(e) {
  let {
    enabled: t
  } = s.getCurrentConfig({
    location: null != e ? e : "friend_suggestions"
  }, {
    autoTrackExposure: !0
  });
  return t
}