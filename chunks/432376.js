"use strict";

function n(e) {
  let {
    channel: t,
    canChat: i,
    renderReactions: n,
    canAddNewReactions: a,
    isLurking: s,
    isGuest: l,
    communicationDisabled: o,
    isActiveChannelOrUnarchivableThread: r,
    isAutomodQuarantined: u
  } = e, d = t.isPrivate(), c = t.isSystemDM(), h = (i || d) && r;
  return {
    disableReactionReads: !n,
    disableReactionCreates: s || l || !h || !((!0 === a || d) && !c && r),
    disableReactionUpdates: s || l || !h || !0 === o || !0 === u
  }
}
i.r(t), i.d(t, {
  default: function() {
    return n
  }
})