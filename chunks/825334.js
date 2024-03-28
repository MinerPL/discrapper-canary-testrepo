"use strict";
a.r(t), a.d(t, {
  default: function() {
    return i
  }
});
var l = a("399606"),
  n = a("592125"),
  s = a("563534");

function i(e) {
  return (0, l.useStateFromStoresArray)([s.default, n.default], () => s.default.getResourceChannels(e).filter(e => null != n.default.getChannel(e.channelId)))
}