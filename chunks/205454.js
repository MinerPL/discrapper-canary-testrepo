"use strict";
n.r(t), n.d(t, {
  CTAEmojiSize: function() {
    return r
  },
  default: function() {
    return o
  }
});
var l = n("37983");
n("884691");
var s = n("430568"),
  a = n("569912"),
  i = n("845272");
let r = {
  SMALL: i.small,
  MEDIUM: i.medium,
  LARGE: i.large
};

function o(e) {
  let {
    emojiId: t,
    emojiName: n,
    defaultComponent: i,
    size: o = r.MEDIUM
  } = e, {
    customEmoji: u,
    unicodeEmoji: c
  } = (0, a.default)(t, n);
  return null == u && null == c ? (0, l.jsx)(l.Fragment, {
    children: i
  }) : (0, l.jsx)(s.default, {
    emojiName: null != u ? null == u ? void 0 : u.name : n,
    animated: null != u && u.animated,
    emojiId: null == u ? void 0 : u.id,
    autoplay: !0,
    className: o
  })
}