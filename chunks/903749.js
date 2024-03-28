"use strict";
t.r(l), t.d(l, {
  default: function() {
    return u
  }
});
var a = t("512722"),
  s = t.n(a),
  i = t("442837"),
  n = t("339085"),
  o = t("633302");

function u(e) {
  let {
    emojiId: l,
    emojiName: t
  } = e, a = (0, i.useStateFromStores)([n.default], () => null != l ? n.default.getCustomEmojiById(l) : null);
  if (null != a || null != t) {
    if (null == l) return s()(null != t, "emojiName must be defined if emojiId is not defined"), o.default.convertSurrogateToName(t, !1);
    else return null == a ? void 0 : a.name
  }
}