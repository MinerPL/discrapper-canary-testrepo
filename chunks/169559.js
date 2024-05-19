"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var i = n("963202");

function r(e) {
  let {
    enableClanCreation: t
  } = (0, i.useClanPrepilotExperimentForAllGuilds)({
    location: e,
    includeConverted: !1
  }), {
    clanDiscoveryEnabled: n
  } = (0, i.useClanPilotExperiment)(e);
  return t || n
}