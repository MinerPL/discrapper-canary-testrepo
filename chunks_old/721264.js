"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007"), n("808653");
var l = n("446674"),
  a = n("379881"),
  s = n("42203"),
  i = n("316133"),
  r = n("449008"),
  o = n("334572"),
  u = n("299039"),
  d = n("488464"),
  c = n("998716"),
  f = n("49111");

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
    t = e === f.FAVORITES ? u.default.keys(a.default.getFavoriteChannels()).map(e => s.default.getChannel(e)).filter(r.isNotNullish).filter(e => e.isGuildStageVoice()) : d.default.getChannels(e);
    let n = t.reduce((e, t) => {
        let n = d.default.getMutableParticipants(t.id, c.StageChannelParticipantNamedIndex.SPEAKER);
        return e[t.id] = n.filter(e => e.type === c.StageChannelParticipantTypes.VOICE).map(h), e
      }, {}),
      l = t.reduce((e, t) => {
        let {
          id: n
        } = t;
        return e + d.default.getParticipantsVersion(n)
      }, 0);
    return [n, l]
  }, [e], o.isVersionEqual);
  return t
}