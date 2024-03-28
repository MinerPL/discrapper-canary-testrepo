"use strict";
i.r(t), i.d(t, {
  useSubmittedGuildJoinRequestTotal: function() {
    return n
  }
});
var a = i("442837"),
  l = i("826581");

function n(e) {
  let {
    guildId: t
  } = e;
  return (0, a.useStateFromStores)([l.default], () => l.default.getSubmittedGuildJoinRequestTotal(t), [t])
}