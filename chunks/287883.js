"use strict";
n.r(t), n.d(t, {
  useGuildEligibleForGuildProducts: function() {
    return s
  },
  isGuildEligibleForGuildProducts: function() {
    return r
  }
});
var i = n("60705");

function s(e, t) {
  let {
    enabled: n
  } = i.GuildProductsExperiment.useExperiment({
    guildId: null != e ? e : "",
    location: t
  });
  return n
}

function r(e, t) {
  let {
    enabled: n
  } = i.GuildProductsExperiment.getCurrentConfig({
    guildId: null != e ? e : "",
    location: t
  });
  return n
}