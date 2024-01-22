"use strict";
s.r(t), s.d(t, {
  useIsRecentMessageDeleted: function() {
    return l
  }
});
var a = s("446674"),
  n = s("324261");

function l(e) {
  var t;
  let {
    loaded: s,
    message: l
  } = (0, a.useStateFromStores)([n.default], () => n.default.getMessageState(e.id));
  return s && (null !== (t = e.messageCount) && void 0 !== t ? t : 0) > 0 && null == l
}