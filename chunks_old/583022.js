"use strict";
i.r(t), i.d(t, {
  default: function() {
    return n
  }
});
var n = e => {
  let {
    channel: t,
    canChat: i,
    renderReactions: n,
    canAddNewReactions: a,
    isLurking: l,
    isGuest: o,
    communicationDisabled: s,
    isActiveChannelOrUnarchivableThread: r
  } = e, u = t.isPrivate(), c = t.isSystemDM(), d = (i || u) && r;
  return {
    disableReactionReads: !n,
    disableReactionCreates: l || o || !d || !((!0 === a || u) && !c && r),
    disableReactionUpdates: l || o || !d || !0 === s
  }
}