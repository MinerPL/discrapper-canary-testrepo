"use strict";
i.r(t), i.d(t, {
  default: function() {
    return u
  }
});
var o = i("735250");
i("470079");
var a = i("442837"),
  l = i("481060"),
  s = i("596454"),
  n = i("339085"),
  d = i("250690"),
  r = i("462624");

function u(e) {
  let {
    reactionEmoji: t
  } = e, i = (0, a.useStateFromStores)([n.default], () => (null == t ? void 0 : t.emojiId) != null ? n.default.getUsableCustomEmojiById(t.emojiId) : null);
  return (0, o.jsxs)("div", {
    className: r.container,
    children: [(0, o.jsxs)("div", {
      className: r.body,
      children: [(0, o.jsxs)("div", {
        className: r.placeholderLines,
        children: [(0, o.jsx)(c, {
          width: "100%",
          marginBottom: 8
        }), (0, o.jsx)(c, {
          width: "80%",
          marginBottom: 16
        }), (0, o.jsx)(c, {
          width: "50%",
          marginBottom: 8
        }), (0, o.jsx)(c, {
          width: "60%",
          marginBottom: 16
        })]
      }), (0, o.jsx)("div", {
        className: r.placeholderMedia
      })]
    }), (0, o.jsxs)("div", {
      className: r.footer,
      children: [(0, o.jsxs)("div", {
        className: r.reaction,
        children: [null != t ? (0, o.jsx)(s.default, {
          className: r.reactionEmote,
          emojiId: t.emojiId,
          emojiName: t.emojiName,
          animated: !!(null == i ? void 0 : i.animated)
        }) : (0, o.jsx)(d.default, {
          className: r.reactionEmote
        }), (0, o.jsx)(l.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: 17
        })]
      }), (0, o.jsx)(c, {
        width: "24px",
        marginBottom: 0
      }), (0, o.jsx)("div", {
        className: r.dot
      }), (0, o.jsx)(c, {
        width: "24px",
        marginBottom: 0
      })]
    })]
  })
}

function c(e) {
  let {
    width: t,
    marginBottom: i
  } = e;
  return (0, o.jsx)("div", {
    className: r.placeholderLine,
    style: {
      width: t,
      marginBottom: i
    }
  })
}