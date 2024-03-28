"use strict";
n.r(t), n.d(t, {
  useHasUserRepliedInChannel: function() {
    return i
  }
});
var a = n("442837"),
  s = n("375954"),
  l = n("594174");
let i = e => (0, a.useStateFromStores)([s.default, l.default], () => {
  if (null == e) return !1;
  let t = l.default.getCurrentUser();
  return null != s.default.getMessages(e).findNewest(e => e.author.id === (null == t ? void 0 : t.id))
})