"use strict";
t.r(n), t.d(n, {
  navigateToEvent: function() {
    return o
  },
  postStartActions: function() {
    return v
  }
});
var l = t("512722"),
  a = t.n(l),
  i = t("287734"),
  s = t("471253"),
  r = t("922482"),
  c = t("592125"),
  d = t("19780"),
  u = t("765305");
async function o(e, n) {
  let {
    entity_type: t
  } = e;
  switch (t) {
    case u.GuildScheduledEventEntityTypes.STAGE_INSTANCE: {
      let n = d.default.getChannelId(),
        t = c.default.getChannel(e.channel_id);
      a()(null != t, "could not find channel"), n !== t.id && (await r.connectToStage(t, !0), await r.navigateToStage(t, null, !1)), await (0, s.audienceAckRequestToSpeak)(t, !1, !0);
      break
    }
    case u.GuildScheduledEventEntityTypes.VOICE: {
      let n = d.default.getChannelId(),
        t = c.default.getChannel(e.channel_id);
      a()(null != t, "could not find channel"), n !== t.id && i.default.selectVoiceChannel(t.id)
    }
  }
}

function v(e, n) {
  let {
    entity_type: t
  } = e;
  switch (t) {
    case u.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
    case u.GuildScheduledEventEntityTypes.VOICE:
    case u.GuildScheduledEventEntityTypes.EXTERNAL:
      null == n || n()
  }
  return Promise.resolve()
}