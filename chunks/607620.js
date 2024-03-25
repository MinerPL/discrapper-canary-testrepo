"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("446674"),
  l = n("913144"),
  a = n("789563");

function u() {
  return !0
}
class r extends i.default.Store {
  initialize() {
    this.waitFor(a.default)
  }
  getExperimentAssignment(e, t) {
    return a.default.getGuildExperimentDescriptor(t, e)
  }
}
r.displayName = "GuildExperimentStore";
var d = new r(l.default, {
  LOGOUT: u,
  LOGIN_SUCCESS: u,
  CONNECTION_OPEN: u,
  EXPERIMENTS_FETCH_SUCCESS: u,
  OVERLAY_INITIALIZE: u,
  CACHE_LOADED: u,
  EXPERIMENTS_FETCH_FAILURE: u,
  EXPERIMENT_REGISTER_LEGACY: u,
  EXPERIMENT_OVERRIDE_BUCKET: u
})