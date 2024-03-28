"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("47120"), n("653041");
var a = n("442837"),
  l = n("136015"),
  s = n("565799"),
  i = n("501655");

function r(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
    [n] = (0, a.useStateFromStores)([s.default], () => {
      let n = s.default.getMutableParticipants(e).filter(e => e.type === i.StageChannelParticipantTypes.VOICE),
        a = [];
      for (let e of n) {
        if (a.length >= t) break;
        null == a.find(t => t.id === e.user.id) && a.push(e.user)
      }
      return [{
        participants: n,
        usersInSummary: a
      }, s.default.getParticipantsVersion(e)]
    }, [e, t], l.isVersionEqual);
  return n
}