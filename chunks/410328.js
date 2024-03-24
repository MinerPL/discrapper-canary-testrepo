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
  l = n("418009"),
  a = n("162570");

function i(e, t) {
  let n = (0, s.match)(t).with(l.PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => a.normalStylesImageOnlyAnswers).otherwise(() => a.normalStylesDefault),
    i = {
      styles: {
        loserSelected: n,
        normal: n,
        notVoted: n,
        selected: n,
        voted: a.votedStyles,
        victorSelected: a.victorStyles,
        victorNotSelected: a.victorStyles,
        normalVote: n
      }
    };
  return i
}

function r(e, t) {
  return e.getAvatarURL(t, 20, !1)
}