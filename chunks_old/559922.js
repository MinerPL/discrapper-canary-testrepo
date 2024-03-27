"use strict";
n.r(t), n.d(t, {
  playVibingWumpusMusic: function() {
    return s
  },
  stopVibingWumpusMusic: function() {
    return l
  },
  pauseVibingWumpusMusic: function() {
    return u
  },
  deleteAllSafetyWarnings: function() {
    return o
  },
  markAsInappropriateConversation: function() {
    return d
  }
});
var i = n("872717"),
  a = n("913144"),
  r = n("49111");

function s() {
  a.default.dispatch({
    type: "VIBING_WUMPUS_PLAY_MUSIC"
  })
}

function l() {
  a.default.dispatch({
    type: "VIBING_WUMPUS_STOP_MUSIC"
  })
}

function u() {
  a.default.dispatch({
    type: "VIBING_WUMPUS_PAUSE_MUSIC"
  })
}

function o(e) {
  return i.HTTP.del({
    url: r.Endpoints.DELETE_SAFETY_WARNINGS(e)
  })
}

function d(e, t) {
  return i.HTTP.post({
    url: r.Endpoints.ADD_SAFETY_WARNING(e),
    body: {
      safety_warning_type: t
    }
  })
}