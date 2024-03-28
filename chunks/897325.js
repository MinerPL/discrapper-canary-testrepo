"use strict";
n.r(t), n.d(t, {
  buildPlatformPollResources: function() {
    return i
  },
  getAvatarUrl: function() {
    return r
  }
}), n("627341");
var s = n("278074"),
  a = n("263568"),
  l = n("866454");

function i(e, t) {
  let n = (0, s.match)(t).with(a.PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => l.normalStylesImageOnlyAnswers).otherwise(() => l.normalStylesDefault);
  return {
    styles: {
      loserSelected: n,
      normal: n,
      notVoted: n,
      selected: n,
      voted: l.votedStyles,
      victorSelected: l.victorStyles,
      victorNotSelected: l.victorStyles,
      normalVote: n
    }
  }
}

function r(e, t) {
  return e.getAvatarURL(t, 20, !1)
}