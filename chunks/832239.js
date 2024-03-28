"use strict";
n.r(e), n.d(e, {
  deleteAllSafetyWarnings: function() {
    return o
  },
  markAsInappropriateConversation: function() {
    return l
  },
  pauseVibingWumpusMusic: function() {
    return c
  },
  playVibingWumpusMusic: function() {
    return u
  },
  stopVibingWumpusMusic: function() {
    return r
  }
});
var i = n("544891"),
  s = n("570140"),
  a = n("981631");

function u() {
  s.default.dispatch({
    type: "VIBING_WUMPUS_PLAY_MUSIC"
  })
}

function r() {
  s.default.dispatch({
    type: "VIBING_WUMPUS_STOP_MUSIC"
  })
}

function c() {
  s.default.dispatch({
    type: "VIBING_WUMPUS_PAUSE_MUSIC"
  })
}

function o(t) {
  return i.HTTP.del({
    url: a.Endpoints.DELETE_SAFETY_WARNINGS(t)
  })
}

function l(t, e) {
  return i.HTTP.post({
    url: a.Endpoints.ADD_SAFETY_WARNING(t),
    body: {
      safety_warning_type: e
    }
  })
}