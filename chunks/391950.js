"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("446674"),
  i = n("77078"),
  r = n("987317"),
  o = n("716241"),
  u = n("239380"),
  d = n("957255"),
  c = n("456353"),
  f = n("599110"),
  E = n("49111"),
  h = n("782340");

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