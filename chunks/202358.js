"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var l = n("446674"),
  u = n("567469"),
  i = n("998716"),
  a = n("834052"),
  r = n("42203"),
  d = n("305961");

function s(e) {
  let {
    id: t,
    data: {
      guild: n,
      instance: s,
      speakers: o,
      participantCount: c
    },
    context: f
  } = e, E = (0, l.useStateFromStores)([d.default, r.default], () => {
    var e;
    return d.default.getGuild(null === (e = r.default.getChannel(t)) || void 0 === e ? void 0 : e.getGuildId())
  }, [t]), v = (0, l.useStateFromStores)([a.default], () => a.default.getStageInstanceByChannel(t), [t]), g = (0, u.useStageParticipants)(t, i.StageChannelParticipantNamedIndex.SPEAKER), S = (0, u.useStageParticipantsCount)(t), h = null != v ? g : o, N = (null != v ? S : c) - h.length;
  return {
    channelId: t,
    guild: null != E ? E : n,
    stage: null != v ? v : s,
    speakers: h,
    audienceCount: N,
    context: f
  }
}