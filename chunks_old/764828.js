"use strict";
n.r(t), n.d(t, {
  SafetyWarningTypes: function() {
    return i
  },
  SafetyWarningFeedbackTypes: function() {
    return a
  },
  default: function() {
    return v
  }
}), n("222007");
var i, a, r, s, l = n("446674"),
  u = n("913144"),
  o = n("42203"),
  d = n("718517");
let c = 5 * d.default.Millis.SECOND;
(r = i || (i = {}))[r.STRANGER_DANGER = 1] = "STRANGER_DANGER", r[r.INAPPROPRIATE_CONVERSATION_TIER_1 = 2] = "INAPPROPRIATE_CONVERSATION_TIER_1", r[r.INAPPROPRIATE_CONVERSATION_TIER_2 = 3] = "INAPPROPRIATE_CONVERSATION_TIER_2", (s = a || (a = {}))[s.UPVOTE = 0] = "UPVOTE", s[s.DOWNVOTE = 1] = "DOWNVOTE";
let f = [],
  E = {},
  C = new Set;

function p(e) {
  let {
    safetyWarnings: t
  } = e;
  null != t && (E[e.id] = t, t.some(e => {
    var t;
    return (2 === (t = e).type || 3 === t.type) && null != e.dismiss_timestamp && ! function(e) {
      return new Date(e).getTime() > Date.now() - c
    }(e.dismiss_timestamp)
  }) ? C.add(e.id) : C.delete(e.id)), null == t && (null != E[e.id] && delete E[e.id], C.delete(e.id))
}

function _() {
  E = {}, Object.values(o.default.getMutablePrivateChannels()).forEach(e => {
    p(e)
  })
}
class h extends l.default.Store {
  initialize() {
    this.waitFor(o.default)
  }
  getChannelSafetyWarning(e, t) {
    var n;
    return null === (n = E[e]) || void 0 === n ? void 0 : n.find(e => e.id === t)
  }
  getChannelSafetyWarnings(e) {
    var t;
    return null !== (t = E[e]) && void 0 !== t ? t : f
  }
  hasShownInitialTooltipForChannel(e) {
    return C.has(e)
  }
}
var v = new h(u.default, {
  CHANNEL_CREATE: function(e) {
    p(e.channel)
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    null != E[t.id] && delete E[t.id], C.delete(t.id)
  },
  CHANNEL_UPDATES: function(e) {
    e.channels.forEach(e => {
      p(e)
    })
  },
  CONNECTION_OPEN: _,
  CONNECTION_OPEN_SUPPLEMENTAL: _,
  CHANNEL_SAFETY_WARNING_FEEDBACK: function(e) {
    let {
      channelId: t,
      warningId: n,
      feedbackType: i
    } = e, a = E[t];
    null != a && (E[t] = a.map(e => e.id === n ? {
      ...e,
      feedback_type: i
    } : e))
  },
  CLEAR_CHANNEL_SAFETY_WARNINGS: function(e) {
    let {
      channelId: t
    } = e, n = E[t];
    C.delete(t), null != n && (E[t] = n.map(e => ({
      ...e,
      dismiss_timestamp: void 0
    })))
  },
  DISMISS_CHANNEL_SAFETY_WARNINGS: function(e) {
    let {
      channelId: t,
      warningIds: n
    } = e, i = E[t];
    if (null == i) return;
    let a = new Date().toISOString();
    E[t] = i.map(e => n.includes(e.id) ? {
      ...e,
      dismiss_timestamp: a
    } : e)
  },
  ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP: function(e) {
    let {
      channelId: t
    } = e;
    C.add(t)
  }
})