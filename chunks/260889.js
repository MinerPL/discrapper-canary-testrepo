n.d(t, {
  Z: function() {
return m;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(481060),
  l = n(287734),
  o = n(367907),
  c = n(769654),
  d = n(496675),
  u = n(205129),
  _ = n(626135),
  E = n(981631),
  h = n(689938);

function m(e) {
  let t = a.useContext(_.AnalyticsContext),
n = e.voiceChannels[0],
m = (0, s.e7)([d.Z], () => null != n && d.Z.can(E.Plq.CONNECT, n.channel));
  return null == n ? null : [
(0, i.jsx)(r.MenuItem, {
  id: 'join-voice',
  action: function() {
    (0, c.X)(n.guild.id), l.default.selectVoiceChannel(n.channel.id), o.ZP.trackWithMetadata(E.rMx.ACTIVITY_FEED_VOICE_CHANNEL_VISITED, {
      source: {
        ...t.location,
        object: E.qAy.LIST_ITEM
      },
      guild_id: n.guild.id,
      channel_id: n.channel.id,
      ...(0, u.y)(e)
    });
  },
  label: h.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_JOIN_CHANNEL,
  disabled: !m
}, 'join-voice'),
(0, i.jsx)(r.MenuItem, {
  id: 'goto-server',
  action: function() {
    (0, c.X)(n.guild.id), o.ZP.trackWithMetadata(E.rMx.ACTIVITY_FEED_GUILD_VISITED, {
      source: {
        ...t.location,
        object: E.qAy.LIST_ITEM
      },
      guild_id: n.guild.id,
      af_recently_played: !1,
      ...(0, u.y)(e)
    });
  },
  label: h.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_GO_TO_SERVER
}, 'goto-server')
  ];
}