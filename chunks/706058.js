"use strict";
n.r(t), n.d(t, {
  endStageInstance: function() {
    return d
  },
  startStageInstance: function() {
    return a
  },
  updateStageInstance: function() {
    return s
  }
});
var l = n("544891"),
  u = n("981631");
async function a(e, t, n, a, s) {
  return (await l.HTTP.post({
    url: u.Endpoints.STAGE_INSTANCES,
    body: {
      channel_id: e,
      topic: t,
      privacy_level: n,
      guild_scheduled_event_id: s,
      send_start_notification: a
    }
  })).body
}
async function s(e, t, n) {
  return (await l.HTTP.patch({
    url: u.Endpoints.STAGE_INSTANCE(e),
    body: {
      topic: t,
      privacy_level: n
    }
  })).body
}

function d(e) {
  return l.HTTP.del(u.Endpoints.STAGE_INSTANCE(e))
}