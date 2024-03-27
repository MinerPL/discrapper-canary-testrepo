"use strict";
n.r(t), n.d(t, {
  buildPlatformPollResources: function() {
    return i
  },
  getAvatarUrl: function() {
    return r
  }
}), n("794252");
var s = n("506838"),
  a = n("418009"),
  l = n("162570");

function i(e, t) {
  let n = (0, s.match)(t).with(a.PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => l.normalStylesImageOnlyAnswers).otherwise(() => l.normalStylesDefault),
    i = {
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
    };
  return i
}

function r(e, t) {
  return e.getAvatarURL(t, 20, !1)
}