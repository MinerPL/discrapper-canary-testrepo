"use strict";
n.d(t, {
  Z: function() {
    return l
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(788307),
  a = n(58957);

function l(e) {
  let {
    activity: t,
    className: n,
    emojiClassName: r,
    textClassName: l,
    placeholderText: u,
    soloEmojiClassName: _,
    animate: d = !0,
    hideTooltip: c = !1,
    hideEmoji: E = !1,
    children: I
  } = e;
  if (null == t) return null;
  let {
    emoji: T
  } = t, h = null != t.state && "" !== t.state ? t.state : u;
  return (0, i.jsxs)("div", {
    className: s()(a.__invalid_container, n),
    children: [E || null == T ? null : (0, i.jsx)(o.I, {
      emoji: T,
      className: s()(a.emoji, r, null != _ ? {
        [_]: null == h || "" === h
      } : null),
      animate: d,
      hideTooltip: c
    }), null != h && h.length > 0 ? (0, i.jsx)("span", {
      className: l,
      children: h
    }) : null, I]
  })
}