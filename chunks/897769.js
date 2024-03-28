"use strict";
n.r(t), n.d(t, {
  useChannelSafetyWarning: function() {
    return s
  }
});
var a = n("442837"),
  l = n("359119");

function s(e, t) {
  return (0, a.useStateFromStores)([l.default], () => l.default.getChannelSafetyWarnings(e), [e]).filter(e => e.type === t).find(e => null == e.dismiss_timestamp)
}