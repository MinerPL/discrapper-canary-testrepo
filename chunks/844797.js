n.d(t, {
  TX: function() {
return d;
  },
  oy: function() {
return c;
  }
});
var r = n(442837),
  i = n(592125),
  a = n(944486),
  o = n(595519),
  s = n(317381),
  l = n(981631);

function u(e) {
  let {
channelId: t,
SelectedChannelStore: n,
ChannelStore: r
  } = e, i = r.getChannel(t), a = (0, o.WS)(i, !1);
  return !!((null == i ? void 0 : i.type) === l.d4z.GUILD_TEXT && a || null != i && i.isPrivate() && a && null == n.getVoiceChannelId()) || !1;
}

function c(e) {
  return (0, r.e7)([
i.Z,
a.Z
  ], () => u({
channelId: null == e ? void 0 : e.id,
ChannelStore: i.Z,
SelectedChannelStore: a.Z
  }));
}

function d(e, t, n, r) {
  return !s.ZP.getEmbeddedActivitiesForChannel(e).some(e => e.applicationId === t) && u({
channelId: e,
SelectedChannelStore: n,
ChannelStore: r
  });
}