"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("287734"),
  o = n("367907"),
  u = n("920440"),
  d = n("496675"),
  c = n("205129"),
  f = n("626135"),
  E = n("981631"),
  h = n("689938");

function _(e) {
  let t = s.useContext(f.AnalyticsContext),
    n = e.voiceChannels[0],
    _ = (0, l.useStateFromStores)([d.default], () => null != n && d.default.can(E.Permissions.CONNECT, n.channel));
  return null == n ? null : [(0, a.jsx)(i.MenuItem, {
    id: "join-voice",
    action: function() {
      (0, u.transitionToGuild)(n.guild.id), r.default.selectVoiceChannel(n.channel.id), o.default.trackWithMetadata(E.AnalyticEvents.ACTIVITY_FEED_VOICE_CHANNEL_VISITED, {
        source: {
          ...t.location,
          object: E.AnalyticsObjects.LIST_ITEM
        },
        guild_id: n.guild.id,
        channel_id: n.channel.id,
        ...(0, c.getPartyMetadata)(e)
      })
    },
    label: h.default.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_JOIN_CHANNEL,
    disabled: !_
  }, "join-voice"), (0, a.jsx)(i.MenuItem, {
    id: "goto-server",
    action: function() {
      (0, u.transitionToGuild)(n.guild.id), o.default.trackWithMetadata(E.AnalyticEvents.ACTIVITY_FEED_GUILD_VISITED, {
        source: {
          ...t.location,
          object: E.AnalyticsObjects.LIST_ITEM
        },
        guild_id: n.guild.id,
        af_recently_played: !1,
        ...(0, c.getPartyMetadata)(e)
      })
    },
    label: h.default.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_GO_TO_SERVER
  }, "goto-server")]
}