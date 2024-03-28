"use strict";
t.r(n), t.d(n, {
  preStartEventActions: function() {
    return E
  },
  setEventAsActive: function() {
    return f
  }
}), t("653041"), t("47120"), t("411104");
var l = t("512722"),
  a = t.n(l),
  i = t("333848"),
  s = t("706058"),
  r = t("131704"),
  c = t("592125"),
  d = t("430824"),
  u = t("482241"),
  o = t("765305"),
  v = t("981631");
async function h(e, n) {
  let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
    l = [];
  l.push(...t);
  let a = await i.default.createChannel({
    guildId: e.id,
    type: v.ChannelTypes.GUILD_STAGE_VOICE,
    name: n.substring(0, 100),
    permissionOverwrites: l
  });
  if (null == a || 201 !== a.status) throw Error("Can't create channel for event");
  return (0, r.createChannelRecordFromServer)(a.body)
}
async function E(e, n) {
  let {
    entity_type: t
  } = e;
  if (t === o.GuildScheduledEventEntityTypes.STAGE_INSTANCE) {
    let t = await

    function(e, n) {
      let {
        guild_id: t,
        channel_id: l
      } = e, a = d.default.getGuild(t);
      if (null == a) return Promise.resolve(null);
      let i = c.default.getChannel(l);
      return null == i ? h(a, e.name, n) : Promise.resolve(i)
    }(e, n);
    a()(null != t, "could not find or create channel")
  }
}
async function f(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    {
      channel_id: t,
      entity_type: l,
      name: i,
      id: r,
      guild_id: c
    } = e;
  switch (l) {
    case o.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
      a()(null != t, "channel_id is required"), await (0, s.startStageInstance)(t, i, o.GuildScheduledEventPrivacyLevel.GUILD_ONLY, n, r);
      break;
    case o.GuildScheduledEventEntityTypes.VOICE:
      a()(null != t, "channel_id is required"), await u.default.startEvent(r, c);
      break;
    case o.GuildScheduledEventEntityTypes.EXTERNAL:
      await u.default.startEvent(r, c)
  }
}