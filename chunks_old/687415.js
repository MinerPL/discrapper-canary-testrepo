"use strict";
n.r(t), n.d(t, {
  useHasUserRepliedInChannel: function() {
    return i
  }
});
var a = n("446674"),
  s = n("377253"),
  l = n("697218");
let i = e => (0, a.useStateFromStores)([s.default, l.default], () => {
  if (null == e) return !1;
  let t = l.default.getCurrentUser(),
    n = s.default.getMessages(e);
  return null != n.findNewest(e => e.author.id === (null == t ? void 0 : t.id))
})