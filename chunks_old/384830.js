"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var r = n("627445"),
  l = n.n(r),
  i = n("446674"),
  a = n("385976"),
  s = n("867805");

function u(e) {
  let {
    emojiId: t,
    emojiName: n
  } = e, r = (0, i.useStateFromStores)([a.default], () => null != t ? a.default.getCustomEmojiById(t) : null);
  if (null != r || null != n) {
    if (null == t) return l(null != n, "emojiName must be defined if emojiId is not defined"), s.default.convertSurrogateToName(n, !1);
    else return null == r ? void 0 : r.name
  }
}