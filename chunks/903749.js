"use strict";
t.d(n, {
  Z: function() {
    return u
  }
});
var l = t(512722),
  a = t.n(l),
  s = t(442837),
  i = t(339085),
  r = t(633302);

function u(e) {
  let {
    emojiId: n,
    emojiName: t
  } = e, l = (0, s.e7)([i.Z], () => null != n ? i.Z.getCustomEmojiById(n) : null);
  if (null != l || null != t) {
    if (null == n) return a()(null != t, "emojiName must be defined if emojiId is not defined"), r.ZP.convertSurrogateToName(t, !1);
    else return null == l ? void 0 : l.name
  }
}