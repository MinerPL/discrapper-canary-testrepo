t.d(e, {
  Dk: function() {
return r;
  },
  Ix: function() {
return l;
  },
  me: function() {
return a;
  }
});
var i = t(544891),
  c = t(981631);
async function a(n, e, t, a, r) {
  return (await i.tn.post({
url: c.ANM.STAGE_INSTANCES,
body: {
  channel_id: n,
  topic: e,
  privacy_level: t,
  guild_scheduled_event_id: r,
  send_start_notification: a
}
  })).body;
}
async function r(n, e, t) {
  return (await i.tn.patch({
url: c.ANM.STAGE_INSTANCE(n),
body: {
  topic: e,
  privacy_level: t
}
  })).body;
}

function l(n) {
  return i.tn.del(c.ANM.STAGE_INSTANCE(n));
}