"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var a = n("699516"),
  s = n("453542");

function l() {
  return {
    num_friends: a.default.getFriendCount(),
    num_outgoing_requests: a.default.getOutgoingCount(),
    num_incoming_requests: a.default.getPendingCount(),
    ...(0, s.getNowPlayingAnalytics)()
  }
}