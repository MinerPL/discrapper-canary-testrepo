"use strict";
n.r(t), n.d(t, {
  useLongestChannelMessageBeforeReply: function() {
    return s
  }
}), n("47120");
var a = n("442837"),
  l = n("375954");

function s(e, t) {
  return (0, a.useStateFromStores)([l.default], () => {
    if (null == t) return;
    let n = l.default.getMessages(e),
      a = n.findOldest(e => e.author.id === t);
    if (null != a) {
      for (let e of n.toArray()) {
        if (e.author.id !== t) break;
        e.content.length > (null == a ? void 0 : a.content.length) && (a = e)
      }
      return a
    }
  }, [e, t])
}