"use strict";
n.d(t, {
  Ms: function() {
    return a
  },
  Ot: function() {
    return u
  },
  T: function() {
    return o
  },
  Uj: function() {
    return _
  },
  wS: function() {
    return l
  }
});
var i = n(544891),
  r = n(570140),
  s = n(981631);

function o(e, t) {
  return r.Z.dispatch({
    type: "DISMISS_CHANNEL_SAFETY_WARNINGS",
    channelId: e,
    warningIds: t
  }), i.tn.post({
    url: s.ANM.CHANNEL_SAFETY_WARNINGS_ACK(e),
    body: {
      warning_ids: t
    },
    oldFormErrors: !0
  })
}

function a(e, t, n) {
  r.Z.dispatch({
    type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
    channelId: e,
    warningId: t,
    feedbackType: n
  })
}

function l(e) {
  r.Z.dispatch({
    type: "CLEAR_CHANNEL_SAFETY_WARNINGS",
    channelId: e
  })
}

function u(e) {
  r.Z.dispatch({
    type: "ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP",
    channelId: e
  })
}

function _(e) {
  return i.tn.post({
    url: s.ANM.SAFETY_WARNING_FALSE_POSITIVE(e)
  })
}