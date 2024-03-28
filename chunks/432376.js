"use strict";
i.r(t);
t.default = e => {
  let {
    channel: t,
    canChat: i,
    renderReactions: n,
    canAddNewReactions: a,
    isLurking: s,
    isGuest: l,
    communicationDisabled: o,
    isActiveChannelOrUnarchivableThread: r
  } = e, u = t.isPrivate(), d = t.isSystemDM(), c = (i || u) && r;
  return {
    disableReactionReads: !n,
    disableReactionCreates: s || l || !c || !((!0 === a || u) && !d && r),
    disableReactionUpdates: s || l || !c || !0 === o
  }
}