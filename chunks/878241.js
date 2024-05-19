"use strict";
n.r(t), n.d(t, {
  useGuildsEligibleForClan: function() {
    return s
  },
  useGuildsEligibleForClanConversion: function() {
    return i
  },
  useIsGuildEligibleForClanConversion: function() {
    return r
  }
}), n("47120");
var l = n("470079"),
  a = n("963202");

function s(e) {
  let {
    location: t
  } = e, {
    guilds: n
  } = (0, a.useClanPrepilotExperimentForAllGuilds)({
    location: t,
    includeConverted: !0
  });
  return n
}

function i(e) {
  let {
    location: t
  } = e, {
    guilds: n
  } = (0, a.useClanPrepilotExperimentForAllGuilds)({
    location: t,
    includeConverted: !1
  });
  return n
}

function r(e) {
  let {
    guildId: t,
    location: n
  } = e, a = i({
    location: n
  });
  return l.useMemo(() => new Set(a.map(e => e.id)), [a]).has(t)
}