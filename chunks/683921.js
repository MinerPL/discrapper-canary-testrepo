"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("442837"),
  l = n("317381");

function s(e) {
  let {
    channelId: t
  } = e;
  return (0, a.useStateFromStores)([l.default], () => l.default.getEmbeddedActivitiesForChannel(t).some(e => e.userIds.size > 0))
}