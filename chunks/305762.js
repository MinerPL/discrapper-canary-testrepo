"use strict";
s.r(t), s.d(t, {
  CTAEmojiSize: function() {
    return T
  },
  default: function() {
    return i
  }
});
var E = s("735250");
s("470079");
var _ = s("596454"),
  a = s("307707"),
  n = s("900135");
let T = {
  SMALL: n.small,
  MEDIUM: n.medium,
  LARGE: n.large
};

function i(e) {
  let {
    emojiId: t,
    emojiName: s,
    defaultComponent: n,
    size: i = T.MEDIUM
  } = e, {
    customEmoji: u,
    unicodeEmoji: A
  } = (0, a.default)(t, s);
  return null == u && null == A ? (0, E.jsx)(E.Fragment, {
    children: n
  }) : (0, E.jsx)(_.default, {
    emojiName: null != u ? null == u ? void 0 : u.name : s,
    animated: null != u && u.animated,
    emojiId: null == u ? void 0 : u.id,
    autoplay: !0,
    className: i
  })
}