"use strict";
E.r(t), E.d(t, {
  default: function() {
    return i
  }
});
var _ = E("37983");
E("884691");
var s = E("414456"),
  T = E.n(s),
  a = E("430568"),
  n = E("20606"),
  A = E("629126"),
  u = E("915675"),
  I = E("928044");

function i(e) {
  var t;
  let {
    guildId: E,
    emojiId: s,
    emojiName: i,
    className: l
  } = e, L = (0, A.default)(E, s), o = null != L || null != i;
  return o ? (0, _.jsx)(a.default, {
    emojiId: null == L ? void 0 : L.id,
    emojiName: null != i ? i : null == L ? void 0 : L.name,
    animated: null !== (t = null == L ? void 0 : L.animated) && void 0 !== t && t,
    className: T(I.emojiIcon, l)
  }) : (0, _.jsx)(u.default, {
    className: T(I.emojiIcon, l),
    color: n.default.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
  })
}