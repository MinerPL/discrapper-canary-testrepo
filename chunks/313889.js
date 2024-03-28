"use strict";
var o, u;
n.r(t), n.d(t, {
  AutomodAlertActionType: function() {
    return o
  },
  parseAlertActionsExecution: function() {
    return r
  }
}), (u = o || (o = {}))[u.SET_COMPLETED = 1] = "SET_COMPLETED", u[u.UNSET_COMPLETED = 2] = "UNSET_COMPLETED", u[u.DELETE_USER_MESSAGE = 3] = "DELETE_USER_MESSAGE", u[u.SUBMIT_FEEDBACK = 4] = "SUBMIT_FEEDBACK";

function r(e) {
  if (null == e) return null;
  let t = function(e) {
    if (null == e) return null;
    try {
      return JSON.parse(e)
    } catch (e) {
      return null
    }
  }(e);
  return null == t || null == t.actions ? null : (Object.keys(t.actions).forEach(e => {
    t.actions[e].actionType = e
  }), t)
}