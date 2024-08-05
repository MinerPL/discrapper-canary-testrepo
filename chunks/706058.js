t.d(n, {
  Dk: function() {
return a;
  },
  Ix: function() {
return r;
  },
  me: function() {
return i;
  }
});
var l = t(544891),
  s = t(981631);
async function i(e, n, t, i, a) {
  return (await l.tn.post({
url: s.ANM.STAGE_INSTANCES,
body: {
  channel_id: e,
  topic: n,
  privacy_level: t,
  guild_scheduled_event_id: a,
  send_start_notification: i
}
  })).body;
}
async function a(e, n, t) {
  return (await l.tn.patch({
url: s.ANM.STAGE_INSTANCE(e),
body: {
  topic: n,
  privacy_level: t
}
  })).body;
}

function r(e) {
  return l.tn.del(s.ANM.STAGE_INSTANCE(e));
}