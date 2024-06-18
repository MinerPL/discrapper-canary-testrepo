"use strict";
n.d(t, {
  TX: function() {
    return d
  },
  oy: function() {
    return _
  }
});
var i = n(442837),
  r = n(592125),
  s = n(944486),
  o = n(867176),
  a = n(317381),
  l = n(981631);

function u(e) {
  let {
    channelId: t,
    SelectedChannelStore: n,
    ChannelStore: i
  } = e, r = i.getChannel(t), s = (0, o.WS)(r, !1, "isActivityInTextChannel");
  return !!((null == r ? void 0 : r.type) === l.d4z.GUILD_TEXT && s || null != r && r.isPrivate() && s && null == n.getVoiceChannelId()) || !1
}

function _(e) {
  return (0, i.e7)([r.Z, s.Z], () => u({
    channelId: null == e ? void 0 : e.id,
    ChannelStore: r.Z,
    SelectedChannelStore: s.Z
  }))
}

function d(e, t, n, i) {
  return !a.ZP.getEmbeddedActivitiesForChannel(e).some(e => e.applicationId === t) && u({
    channelId: e,
    SelectedChannelStore: n,
    ChannelStore: i
  })
}