"use strict";
n.r(t), n.d(t, {
  useCanShowNewGuildTooltip: function() {
    return o
  },
  useCanShowNewGuildTooltipActivityEmptyState: function() {
    return l
  },
  useGuildPeekCardType: function() {
    return s
  }
});
var i = n("818083"),
  r = n("126134");
let a = (0, i.createExperiment)({
  kind: "user",
  id: "2024-04_server_peek",
  label: "Change the guild tooltip",
  defaultConfig: {
    showNewGuildTooltip: !1,
    showNewGuildTooltipActivityEmptyState: !1,
    cardType: r.GuildPeekCardTypes.WHAT
  },
  treatments: [{
    id: 1,
    label: "Show new tooltip focusing on WHAT, no empty state",
    config: {
      showNewGuildTooltip: !0,
      showNewGuildTooltipActivityEmptyState: !1,
      cardType: r.GuildPeekCardTypes.WHAT
    }
  }, {
    id: 2,
    label: "Show new tooltip focusing on WHAT, with empty state",
    config: {
      showNewGuildTooltip: !0,
      showNewGuildTooltipActivityEmptyState: !0,
      cardType: r.GuildPeekCardTypes.WHAT
    }
  }, {
    id: 3,
    label: "Show new tooltip focusing on WHO, no empty state",
    config: {
      showNewGuildTooltip: !0,
      showNewGuildTooltipActivityEmptyState: !1,
      cardType: r.GuildPeekCardTypes.WHO
    }
  }]
});

function s() {
  let {
    cardType: e
  } = a.useExperiment({
    location: "useCanShowNewGuildTooltip"
  }, {
    autoTrackExposure: !1
  });
  return e
}

function o() {
  let {
    showNewGuildTooltip: e
  } = a.useExperiment({
    location: "useCanShowNewGuildTooltip"
  }, {
    autoTrackExposure: !0
  });
  return e
}

function l() {
  let {
    showNewGuildTooltipActivityEmptyState: e
  } = a.useExperiment({
    location: "useCanShowNewGuildTooltipActivityEmptyState"
  }, {
    autoTrackExposure: !0
  });
  return e
}
t.default = a