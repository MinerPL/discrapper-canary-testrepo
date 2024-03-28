"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("470079"),
  a = n("106351"),
  l = n("442837"),
  i = n("434650"),
  r = n("430824"),
  o = n("63205"),
  u = n("529726"),
  d = n("981631");

function c(e) {
  var t, n;
  let {
    message: c,
    channel: f,
    enabled: E = !0
  } = e, _ = (0, l.useStateFromStores)([r.default], () => {
    var e;
    let t = r.default.getGuild(f.guild_id);
    return null !== (e = null == t ? void 0 : t.hasFeature(d.GuildFeatures.COMMUNITY)) && void 0 !== e && e
  }, [f.guild_id]), T = (null === (t = c.messageReference) || void 0 === t ? void 0 : t.guild_id) != null && null != c.webhookId && c.hasFlag(d.MessageFlags.IS_CROSSPOST) && null != f.guild_id, m = f.type === a.ChannelTypes.GUILD_ANNOUNCEMENT && _, I = !c.hasFlag(d.MessageFlags.EPHEMERAL) && (T || m), p = T && null != c.messageReference ? c.messageReference.message_id : c.id, h = T && null != c.messageReference ? c.messageReference.channel_id : f.id, N = T && (null === (n = c.messageReference) || void 0 === n ? void 0 : n.guild_id) != null ? c.messageReference.guild_id : f.guild_id, S = s.useCallback(e => {
    e ? u.default.handleMessageBecameVisible({
      messageId: p,
      channelId: f.id,
      guildId: f.guild_id,
      sourceChannelId: h,
      sourceGuildId: N
    }) : u.default.handleMessageLostVisibility(p)
  }, [p, f.id, f.guild_id, h, N]), C = o.default.useExperiment({
    location: "836a4b_1"
  }, {
    disable: !I || !E,
    autoTrackExposure: !0
  }).enabled, A = (0, i.useIsVisible)(S, 0, C);
  return s.useEffect(() => () => {
    u.default.handleMessageLostVisibility(p)
  }, [p]), A
}