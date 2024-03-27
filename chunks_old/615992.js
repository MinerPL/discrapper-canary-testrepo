"use strict";
s.r(t), s.d(t, {
  useLastChannelMessage: function() {
    return r
  }
});
var n = s("446674"),
  a = s("377253");
let r = e => (0, n.useStateFromStores)([a.default], () => {
  var t;
  return null !== (t = a.default.getLastNonCurrentUserMessage(e)) && void 0 !== t ? t : a.default.getLastMessage(e)
})