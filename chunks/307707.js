"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
});
var E = s("399606"),
  _ = s("339085"),
  a = s("633302");

function n(e, t) {
  let s = (0, E.useStateFromStores)([_.default], () => null != e ? _.default.getCustomEmojiById(e) : null, [e]);
  return {
    customEmoji: s,
    unicodeEmoji: null != t ? a.default.getByName(a.default.convertSurrogateToName(t, !1)) : null
  }
}