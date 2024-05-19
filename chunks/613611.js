"use strict";
n.r(t), n.d(t, {
  isActivityParticipantCurrentUserCurrentSession: function() {
    return l
  }
});
var a = n("314897");

function l(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.default,
    n = t.getId(),
    l = t.getSessionId();
  return e.userId === n && (null == e.sessionId || void 0 === e.sessionId || e.sessionId === l || !1)
}