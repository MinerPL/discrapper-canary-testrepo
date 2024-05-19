"use strict";
var i, r, a, s, o, l;

function u(e) {
  return !((null == e ? void 0 : e.type) !== 0 && (null == e ? void 0 : e.type) !== 1)
}

function d(e) {
  return (null == e ? void 0 : e.type) === 2
}

function _(e) {
  return (null == e ? void 0 : e.type) === 3
}
n.r(t), n.d(t, {
  EMOJI_PICKER_EMOJI_TO_SHOW_COUNT: function() {
    return E
  },
  PIP_WIDTH: function() {
    return c
  },
  ParticipantSelectionTypes: function() {
    return r
  },
  ParticipantTypes: function() {
    return i
  },
  VoicePlatforms: function() {
    return a
  },
  isActivityParticipant: function() {
    return _
  },
  isStreamParticipant: function() {
    return u
  },
  isUserParticipant: function() {
    return d
  }
}), (s = i || (i = {}))[s.STREAM = 0] = "STREAM", s[s.HIDDEN_STREAM = 1] = "HIDDEN_STREAM", s[s.USER = 2] = "USER", s[s.ACTIVITY = 3] = "ACTIVITY", (o = r || (r = {})).NONE = "NONE", o.AUTO = "AUTO", (l = a || (a = {}))[l.DESKTOP = 0] = "DESKTOP", l[l.MOBILE = 1] = "MOBILE", l[l.XBOX = 2] = "XBOX", l[l.PLAYSTATION = 3] = "PLAYSTATION";
let c = 320,
  E = 8