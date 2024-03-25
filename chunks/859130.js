"use strict";
i.r(t), i.d(t, {
  useSubmittedGuildJoinRequestTotal: function() {
    return l
  }
});
var n = i("446674"),
  a = i("90490");

function l(e) {
  let {
    guildId: t
  } = e, i = (0, n.useStateFromStores)([a.default], () => a.default.getSubmittedGuildJoinRequestTotal(t), [t]);
  return i
}