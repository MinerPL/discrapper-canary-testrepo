"use strict";
s.r(t), s.d(t, {
  useSelectedSortOrder: function() {
    return i
  }
});
var a = s("442837"),
  l = s("826581");

function i(e) {
  let {
    guildId: t
  } = e;
  return (0, a.useStateFromStores)([l.default], () => l.default.getSelectedSortOrder(t), [t])
}