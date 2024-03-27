"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var l = n("65597"),
  s = n("385976"),
  a = n("867805");

function i(e, t) {
  let n = (0, l.useStateFromStores)([s.default], () => null != e ? s.default.getCustomEmojiById(e) : null, [e]),
    i = null != t ? a.default.getByName(a.default.convertSurrogateToName(t, !1)) : null;
  return {
    customEmoji: n,
    unicodeEmoji: i
  }
}