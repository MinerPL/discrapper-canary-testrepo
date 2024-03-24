"use strict";
n.r(t), n.d(t, {
  startStageInstance: function() {
    return l
  },
  updateStageInstance: function() {
    return u
  },
  endStageInstance: function() {
    return s
  }
});
var a = n("872717"),
  i = n("49111");
async function l(e, t, n, l, u) {
  let s = await a.HTTP.post({
    url: i.Endpoints.STAGE_INSTANCES,
    body: {
      channel_id: e,
      topic: t,
      privacy_level: n,
      guild_scheduled_event_id: u,
      send_start_notification: l
    }
  });
  return s.body
}
async function u(e, t, n) {
  let l = await a.HTTP.patch({
    url: i.Endpoints.STAGE_INSTANCE(e),
    body: {
      topic: t,
      privacy_level: n
    }
  });
  return l.body
}

function s(e) {
  return a.HTTP.del(i.Endpoints.STAGE_INSTANCE(e))
}