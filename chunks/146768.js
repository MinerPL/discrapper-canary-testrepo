"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("442837"),
  a = n("431328"),
  i = n("501655"),
  u = n("427679"),
  d = n("592125"),
  s = n("430824");

function r(e) {
  let {
    id: t,
    data: {
      guild: n,
      instance: r,
      speakers: o,
      participantCount: c
    },
    context: f
  } = e, E = (0, l.useStateFromStores)([s.default, d.default], () => {
    var e;
    return s.default.getGuild(null === (e = d.default.getChannel(t)) || void 0 === e ? void 0 : e.getGuildId())
  }, [t]), g = (0, l.useStateFromStores)([u.default], () => u.default.getStageInstanceByChannel(t), [t]), v = (0, a.useStageParticipants)(t, i.StageChannelParticipantNamedIndex.SPEAKER), h = (0, a.useStageParticipantsCount)(t), m = null != g ? v : o, N = (null != g ? h : c) - m.length;
  return {
    channelId: t,
    guild: null != E ? E : n,
    stage: null != g ? g : r,
    speakers: m,
    audienceCount: N,
    context: f
  }
}