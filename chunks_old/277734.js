"use strict";
n.r(t), n.d(t, {
  dismissChannelSafetyWarnings: function() {
    return s
  },
  setChannelSafetyWarningFeedback: function() {
    return l
  },
  clearChannelSafetyWarnings: function() {
    return u
  },
  acknowledgeChannelSafetyWarningTooltip: function() {
    return o
  },
  reportFalsePositive: function() {
    return d
  }
});
var i = n("872717"),
  a = n("913144"),
  r = n("49111");

function s(e, t) {
  return a.default.dispatch({
    type: "DISMISS_CHANNEL_SAFETY_WARNINGS",
    channelId: e,
    warningIds: t
  }), i.HTTP.post({
    url: r.Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(e),
    body: {
      warning_ids: t
    },
    oldFormErrors: !0
  })
}

function l(e, t, n) {
  a.default.dispatch({
    type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
    channelId: e,
    warningId: t,
    feedbackType: n
  })
}

function u(e) {
  a.default.dispatch({
    type: "CLEAR_CHANNEL_SAFETY_WARNINGS",
    channelId: e
  })
}

function o(e) {
  a.default.dispatch({
    type: "ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP",
    channelId: e
  })
}

function d(e) {
  return i.HTTP.post({
    url: r.Endpoints.SAFETY_WARNING_FALSE_POSITIVE(e)
  })
}