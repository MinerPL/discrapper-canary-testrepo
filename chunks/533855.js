"use strict";
n.r(t), n.d(t, {
  useChannelSafetyWarning: function() {
    return r
  }
});
var i = n("446674"),
  a = n("764828");

function r(e, t) {
  let n = (0, i.useStateFromStores)([a.default], () => a.default.getChannelSafetyWarnings(e), [e]),
    r = n.filter(e => e.type === t);
  return r.find(e => null == e.dismiss_timestamp)
}