"use strict";
n.r(t);
var s = n("735250");
n("470079");
var a = n("792766"),
  l = n("197409");
t.default = e => {
  let {
    stageInstance: t,
    guild: n,
    isMember: i,
    onTransitionToInviteChannel: r,
    onAcceptInstantInvite: o
  } = e;
  return (0, s.jsx)(l.default, {
    children: (0, s.jsx)(a.default, {
      isEmbed: !0,
      stageInstance: t,
      guild: n,
      onClick: i ? r : o
    })
  })
}