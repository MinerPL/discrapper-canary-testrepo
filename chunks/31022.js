"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("47120"), n("724458");
var l = n("442837"),
  a = n("853856"),
  s = n("592125"),
  i = n("938475"),
  r = n("823379"),
  o = n("136015"),
  u = n("709054"),
  d = n("565799"),
  c = n("501655"),
  f = n("981631");

function h(e) {
  let {
    voiceState: t,
    userNick: n,
    user: l
  } = e, a = (0, i.getComparator)(t, n);
  return {
    user: l,
    voiceState: t,
    nick: n,
    comparator: a
  }
}

function C(e) {
  let [t] = (0, l.useStateFromStores)([d.default, s.default, a.default], () => {
    let t;
    let n = (t = e === f.FAVORITES ? u.default.keys(a.default.getFavoriteChannels()).map(e => s.default.getChannel(e)).filter(r.isNotNullish).filter(e => e.isGuildStageVoice()) : d.default.getChannels(e)).reduce((e, t) => {
      let n = d.default.getMutableParticipants(t.id, c.StageChannelParticipantNamedIndex.SPEAKER);
      return e[t.id] = n.filter(e => e.type === c.StageChannelParticipantTypes.VOICE).map(h), e
    }, {});
    return [n, t.reduce((e, t) => {
      let {
        id: n
      } = t;
      return e + d.default.getParticipantsVersion(n)
    }, 0)]
  }, [e], o.isVersionEqual);
  return t
}